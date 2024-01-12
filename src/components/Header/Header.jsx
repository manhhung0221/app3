import './Header.css'
import reactImg from '../../assets/react-core-concepts.png'
const reactiveContent=['Fudamental','Base','Core']
const getIndexContent=(max)=>{
  return Math.floor(Math.random()*(max))
}
export default function Header() {

  const getIndex=reactiveContent[getIndexContent(reactiveContent.length)]
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {getIndex} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}