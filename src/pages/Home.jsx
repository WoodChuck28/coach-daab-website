import React, { useState, useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listSwimmers } from '../graphql/queries';
import { createSwimmer as createSwimmerMutation, deleteSwimmer as deleteSwimmerMutation } from '../graphql/mutations';

const initialFormState = { lname: '', fname: '', swimevent: '', time: '', date: '' }

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
    if (!formData.lname || !formData.fname) return;
    await API.graphql({ query: createSwimmerMutation, variables: { input: formData } });
    setSwimmers([ ...swimmers, formData ]);
    setFormData(initialFormState);
  }

  async function loadSwimmer() {
    const apiData = await API.graphql({ query: listSwimmers });
    setSwimmers(...swimmers);
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
        onChange={e => setFormData({ ...formData, 'lname': e.target.value})}
        placeholder="L Name"
        value={formData.lname}
      />
      <input
        onChange={e => setFormData({ ...formData, 'fname': e.target.value})}
        placeholder="F Name"
        value={formData.fname}
      />
      <input
        onChange={e => setFormData({ ...formData, 'swimevent': e.target.value})}
        placeholder="Event"
        value={formData.swimevent}
      />
      <input
        onChange={e => setFormData({ ...formData, 'time': e.target.value})}
        placeholder="Time"
        value={formData.time}
      />
      <input
        onChange={e => setFormData({ ...formData, 'date': e.target.value})}
        placeholder="Date"
        value={formData.date}
      />
      <button onClick={createSwimmer}>Create Swimmer</button>
      <button onClick={loadSwimmer}>Load Swimmer</button>
      <div style={{marginBottom: 30}}>
        {
          swimmers.map(swimmer => (
            <div key={swimmer.id || swimmer.lname}>
              <h2>{swimmer.lname}, {swimmer.fname}</h2>
              <p>{swimmer.swimevent}</p>
              <p>{swimmer.time}</p>
              <p>{swimmer.date}</p>
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