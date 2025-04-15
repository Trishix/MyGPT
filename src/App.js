import './App.css';
import React from 'react';
import gptLogo from './GPT ASSETS/chatgpt.svg'
import addBtn from './GPT ASSETS/add-30.png'
import msgIcon from './GPT ASSETS/message.svg'
import home from './GPT ASSETS/home.svg'
import saved from './GPT ASSETS/bookmark.svg'
import rocket from './GPT ASSETS/rocket.svg'

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <div className='upperSide'>
            <div className='upperSideTop'><img src={gptLogo} alt="logo" className='logo'/> <span className='Brand'>myGPT</span>
            <button className='midBtn'><img src={addBtn} alt="addBtn" className='addBtn'/>New Chat</button>

            <div className='query'>
              <button className='query'><img src={msgIcon} alt="Query"/>What is programming</button>
              <button className='query'><img src={msgIcon} alt="Query"/>How to use api</button>
            </div>
            </div>
        </div>
        <div className='lowerSide'>
            <div className='listItem'><img src={home} alt="Home" className='listItemsImg'/>Home</div>
            <div className='listItem'><img src={saved} alt="Saved" className='listItemsImg'/>Saved</div>
            <div className='listItem'><img src={rocket} alt="Upgrade" className='listItemsImg'/>Upgrade to Pro</div>
        </div>
      </div>
    </div>
  );
}

export default App;
