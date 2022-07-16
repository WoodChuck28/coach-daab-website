import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listSwimmers } from '../graphql/queries';
import { createSwimmer as createSwimmerMutation, deleteSwimmer as deleteSwimmerMutation } from '../graphql/mutations';

const initialFormState = { name: '', description: '' }

function Home() {
  const [swimmers, setSwimmers] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchSwimmers();
  }, []);

  async function fetchSwimmers() {
    const apiData = await API.graphql({ query: listSwimmers });
    setSwimmers(apiData.data.listSwimmers.items);
  }

  async function createSwimmer() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createSwimmerMutation, variables: { input: formData } });
    setSwimmers([ ...swimmers, formData ]);
    setFormData(initialFormState);
  }

  async function deleteSwimmer({ id }) {
    const newSwimmersArray = swimmers.filter(swimmer => swimmer.id !== id);
    setSwimmers(newSwimmersArray);
    await API.graphql({ query: deleteSwimmerMutation, variables: { input: { id } }});
  }

  return (
    <div className="Home">
      <h1>My Swimmers App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Swimmer name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Swimmer description"
        value={formData.description}
      />
      <button onClick={createSwimmer}>Create Swimmer</button>
      <div style={{marginBottom: 30}}>
        {
          swimmers.map(swimmer => (
            <div key={swimmer.id || swimmer.name}>
              <h2>{swimmer.name}</h2>
              <p>{swimmer.description}</p>
              <button onClick={() => deleteSwimmer(swimmer)}>Delete swimmer</button>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(Home);