import './App.css';
import React from 'react';
import gptLogo from './GPT ASSETS/chatgpt.svg';
import addBtn from './GPT ASSETS/add-30.png';
import msgIcon from './GPT ASSETS/message.svg';
import home from './GPT ASSETS/home.svg';
import saved from './GPT ASSETS/bookmark.svg';
import rocket from './GPT ASSETS/rocket.svg';
import sendBtn from './GPT ASSETS/send.svg';
import userIcon from './GPT ASSETS/user-icon.png';
import gptImgLogo from './GPT ASSETS/chatgptLogo.svg';

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="logo" className="logo" />
            <span className='brand'>MyGPT</span>
          </div>

          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>

          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is programming
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" />
              How to use api?
            </button>
          </div>
        </div>

        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="Home" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="Saved" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="Upgrade" className="listItemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>

      <div className="main">
        <div className='chats'>
          <div className='chat'>
            <img className="chatImg" src={userIcon} alt='User' />
            Hello I am User<p className='txt'></p>
          </div>
          <div className='chat'>
            <img className="chatImg" src={gptImgLogo} alt='GPT' />
            Hi I am GPT<p className='txt'></p>
          </div>
        </div>

        <div className='chatFooter'>
          <div className='inp'>
            <input type="text" placeholder='Send a message' />
            <button className='send'><img src={sendBtn} alt="Send"/></button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
