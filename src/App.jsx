
import {CORE_CONCEPTS} from './data.js'
import Header from './components/Header/Header.jsx'
function Concepts({image,
                    title,
                    description}){
  return (
    <li>
      <img src={image}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <Concepts {...CORE_CONCEPTS[0]}/>
            <Concepts {...CORE_CONCEPTS[1]}/>
            <Concepts {...CORE_CONCEPTS[2]}/>
            <Concepts {...CORE_CONCEPTS[3]}/>                     
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
