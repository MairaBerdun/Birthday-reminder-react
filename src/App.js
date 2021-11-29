import React, {useState} from 'react';
import List from './Components/List';
import data from './data';

function App() {

  const [people, setpeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button onClick={()=> setpeople([])}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
