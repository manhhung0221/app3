
import {CORE_CONCEPTS,EXAMPLES} from './data.js'
import {useState}  from 'react'
import Header from './components/Header/Header.jsx'
import Concepts from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
function App() {
  const [selectTopic,setSelectTopic]=useState("components")
  function handleClick(selectButton){
    setSelectTopic(selectButton)
    console.log(selectTopic)
}
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
      <section id='examples'>
        <h2>Examples</h2>
        <menu>
          <TabButton selectButton={()=>handleClick("components")}>Components</TabButton>
          <TabButton selectButton={()=>handleClick("jsx")}>JSX</TabButton>
          <TabButton selectButton={()=>handleClick("props")}>Prop</TabButton>
          <TabButton selectButton={()=>handleClick("state")}>State</TabButton>
        </menu>
   
      </section>
      <div id='tab-content'>
        <h3>{EXAMPLES[selectTopic].title}</h3>
        <p>{EXAMPLES[selectTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectTopic].code}</code>
        </pre>
      </div>
      </main>
    </div>
  );
}

export default App;
