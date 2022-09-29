import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  let newCount = [];
  const [count, setCount] = useState([])
  const addToListHandler = (time) => {
    newCount = [...count, time]
    setCount(newCount)
  }
  return (
    <div>
      <div className='App'>
        <Main addToListHandler={addToListHandler}></Main>
        <Sidebar count={count}></Sidebar>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
