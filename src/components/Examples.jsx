import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js'
import { useState } from 'react'
export default function Examples() {
    const [selectTopic, setSelectTopic] = useState()
    function handleClick(selectButton) {
      setSelectTopic(selectButton) 
      console.log(selectTopic)
    }
    let tabContent = 'Please choose func'
    if (selectTopic) {
      tabContent = <div id='tab-content'>
        <h3>{EXAMPLES[selectTopic].title}</h3>
        <p>{EXAMPLES[selectTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectTopic].code}</code>
        </pre>
      </div>
    }
    return (
        <>
            <section id='examples'>
                <h2>Examples</h2>
                <menu>
                    <TabButton selectButton={() => handleClick("components")} isSelect={selectTopic === 'components'} > 
                        Components
                    </TabButton>
                    <TabButton selectButton={() => handleClick("jsx")} isSelect={selectTopic === 'jsx'}>
                        JSX
                    </TabButton>
                    <TabButton selectButton={() => handleClick("props")} isSelect={selectTopic === 'props'}>
                        Prop
                    </TabButton>
                    <TabButton selectButton={() => handleClick("state")} isSelect={selectTopic === 'state'}>
                        State
                    </TabButton>
                </menu>

            </section>
            {tabContent}
        </>
    )

}