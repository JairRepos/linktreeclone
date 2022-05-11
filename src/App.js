import React, { useState } from 'react'
import Menu from './components/Menu';
// import Profile from './components/AvatarProfile'
import Welcome from './components/Welcome'

import { UserContext } from './components/useContext/UserContext';

function App() {

  const [user, setUser] = useState('');

  return (

    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        {user === ''
          ? <div className="principal"><Welcome /></div>
          : <Menu />}
      </div>
    </UserContext.Provider>
  );
}

export default App;
