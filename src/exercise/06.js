// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitUsername(username);
  }

  const [username, setUsername] = React.useState(null);

  const handleChange = (event) => {
    const value = event.target.value;
    setUsername(value.toLowerCase());
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          onChange={handleChange}
          id="usernameInput"
          type="text" value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
