import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import gptLogo from './GPT ASSETS/chatgpt.svg';
import addBtn from './GPT ASSETS/add-30.png';
import msgIcon from './GPT ASSETS/message.svg';
import home from './GPT ASSETS/home.svg';
import saved from './GPT ASSETS/bookmark.svg';
import rocket from './GPT ASSETS/rocket.svg';
import sendBtn from './GPT ASSETS/send.svg';
import userIcon from './GPT ASSETS/PHOTO-2025-04-17-00-46-09-removebg-preview.png';
import gptImgLogo from './GPT ASSETS/GPT.webp';
import { sendMsgToOpenAI } from './server/openai.js';

function App() {
  const msgEnd = useRef(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi, I am Your GPT, a state-of-the-art language model developed by Trishit",
      isBot: true,
    }
  ]);

  useEffect(() => {
    msgEnd.current?.scrollIntoView();
  }, [messages]);

  const handleSend = async () => {
    const text = input;
    if (!text.trim()) return;

    setInput('');
    setMessages(prev => [...prev, { text, isBot: false }]);

    const res = await sendMsgToOpenAI(text);
    setMessages(prev => [...prev, { text: res, isBot: true }]);
  };

  const handleEnter = async (e) => {
    if (e.key === 'Enter') await handleSend();
  };

  const handleQuery = async (e) => {
    const text = e.currentTarget.value;
    setInput('');
    setMessages(prev => [...prev, { text, isBot: false }]);

    const res = await sendMsgToOpenAI(text);
    setMessages(prev => [...prev, { text: res, isBot: true }]);
  };

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="logo" className="logo" />
            <span className='brand'>MyGPT</span>
          </div>

          <button className="midBtn" onClick={() => { window.location.reload() }}>
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>

          <div className="upperSideBottom">
            <button className="query" onClick={handleQuery} value={"What is programming?"}>
              <img src={msgIcon} alt="Query" />
              What is programming?
            </button>
            <button className="query" onClick={handleQuery} value={"What is programming?"}>
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
          {messages.map((message, i) => (
            <div key={i} className={message.isBot ? "chat bot" : "chat"}>
              <img className='chatImg' src={message.isBot ? gptImgLogo : userIcon} alt="" />
              <p className='txt'>{message.text}</p>
            </div>
          ))}
          <div ref={msgEnd} />
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input
              type="text"
              placeholder='Send a message'
              value={input}
              onKeyDown={handleEnter}
              onChange={(e) => { setInput(e.target.value) }}
            />
            <button className='send'>
              <img src={sendBtn} onClick={handleSend} alt="Send" />
            </button>
          </div>
          <p>MyGPT may produce inaccurate information about people, places or facts.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
