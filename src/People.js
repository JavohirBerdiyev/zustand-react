import React from 'react'
import useStore from './store';

function People() {

  const people = useStore(state => state.people);
  console.log(people);
  return (
    <div>
      <h3>We have {people.length}</h3>

      <ul>
        {people.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  )
}

export default People