import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import NewForm from './components/NewForm';
function App() {
  const [members, setMembers] = useState([
    {
      name: "",
      email: '',
      role: ''
    }
  ]);

  const addMember = (newMembers) => {
    setMembers([...members, newMembers])
  }
  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form addMember={addMember} />
      <NewForm members = {members} />
    </div>
  );
}

export default App;
