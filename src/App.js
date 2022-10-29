import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
      <div className='contnet p-40'>
        <div className='d-flex align-center mb-40 justify-between'>
          <h1>Все кроссовки</h1>
          <div className='search-block d-flex'>
            <img src='/img/loop.svg' alt='search'></img>
            <input placeholder='Поиск...'></input>
          </div>
        </div>
        <div className='d-flex'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        {/* <div className='d-flex'>
        <div className='card'>
          <img width={133} height={112} src='/img/sneakers/5.jpg' alt='sneakers'></img>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src='/img/plus.svg' alt='plus'></img>
            </button>
          </div>
        </div>
        <div className='card'>
          <img width={133} height={112} src='/img/sneakers/6.jpg' alt='sneakers'></img>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src='/img/plus.svg' alt='plus'></img>
            </button>
          </div>
        </div>
        <div className='card'>
          <img width={133} height={112} src='/img/sneakers/7.jpg' alt='sneakers'></img>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src='/img/plus.svg' alt='plus'></img>
            </button>
          </div>
        </div>
        <div className='card'>
          <img width={133} height={112} src='/img/sneakers/8.jpg' alt='sneakers'></img>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src='/img/plus.svg' alt='plus'></img>
            </button>
          </div>
        </div>
        </div>
        <div className='d-flex'>
        <div className='card'>
          <img width={133} height={112} src='/img/sneakers/9.jpg' alt='sneakers'></img>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src='/img/plus.svg' alt='plus'></img>
            </button>
          </div>
        </div>
        <div className='card'>
          <img width={133} height={112} src='/img/sneakers/10.jpg' alt='sneakers'></img>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src='/img/plus.svg' alt='plus'></img>
            </button>
          </div>
        </div>
        <div className='card'>
          <img width={133} height={112} src='/img/sneakers/11.jpg' alt='sneakers'></img>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src='/img/plus.svg' alt='plus'></img>
            </button>
          </div>
        </div>
        <div className='card'>
          <img width={133} height={112} src='/img/sneakers/12.jpg' alt='sneakers'></img>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src='/img/plus.svg' alt='plus'></img>
            </button>
          </div>
        </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
