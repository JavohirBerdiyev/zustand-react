import React from 'react';
import Form from './Form';
import People from './People';
import useStore from './store';


function App() {
  const count = useStore(state => state.count);
  const addCount = useStore(state => state.addCount);
  const toggleDark = useStore(state => state.toggleDark);
  const dark = useStore(state => state.dark);
  return (
    <div className="App" style={{ background: dark ? '#fff' : '#333' }}>
      <style>{`body { background-color: ${dark ? '#fff' : '#333'};  color: ${!dark ? '#fff' : '#333'};}`}</style>
      <h1 onClick={addCount}>Hello World {count}</h1>
      <Form />
      <People />
      <button onClick={toggleDark}>Toggle Dark</button>
    </div>
  );
}

export default App;
