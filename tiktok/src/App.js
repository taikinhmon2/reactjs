// import { useEffect, useRef, useState } from 'react'
// import {Routes,Route, Link} from 'react-router-dom'
import Contextpage from './usecontext/contex';
import Context1Page from './useImperativeHandle/context';
import Clsx from './clsx';
import './App.css';
import Hoccss from './hoccss1/hoccss';
import Content from './todo/Content';
import Hoccss3 from './hoccss1/hoccss3';
import Smoke from './hoccss1/smoke';
import Search from './hoccss1/search';
import Validate from './hoccss1/validate';
import App1 from './globalState/App1'
import Hoccss2 from './hoccss1/hoccss2';
import Slide from './slideshow/slide';
import HomePage from './RUDUX/Components/home';
function App() {
  // const [toggle, setToggle] = useState(false)
  // const [test2, settest2] = useState(<Slide/>)
//  useEffect(()=> {
//   setTimeout(() => {
//     settest2(<Content />)
//   }, 5000);
//  },[])
  return (
    <>
      <HomePage/>
      {/* <nav>
        <li><Link to='/'>Validate</Link></li>
        <li><Link to='/1'>globalState</Link></li>
        <li><Link to='/2'>useContext</Link></li>
        <li><Link to='/3'>Videopage</Link></li>
      </nav> */}
      {/* {test2} */}
      {/* <Routes>
        <Route path='/' element = {<Validate/>}/>
        <Route path='/1' element = {<App1/>}/>
        <Route path='/2' element = {<Contextpage/>}/>
        <Route path='/3' element = {<Context1Page/>}/>
      </Routes> */}

    </>
  )
}
export default App;
