import React from 'react';

function App() {
  return (
    <div className="wrapper clear">
      <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex align-center'>
          <img width={40} height={40} src='/img/logo.png' alt='#'></img>
          <div className>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p className='opacity-5'>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className='d-flex'>
          <li className='mr-30'>
            <img src='img/cart.svg' width={18} height={18} alt='#'></img>
            <span>1205 руб.</span>
          </li>
          <li>
            <img src='img/user.svg' width={18} height={18} alt='#'></img>
          </li>
        </ul>
      </header>
      <div className='contnet p-40'>
        <h1 className='mb-40'>Все кроссовки</h1>
        <div className='d-flex'>
        <div className='card'>
          <img width={133} height={112} src='/img/sneakers/1.jpg' alt='sneakers'></img>
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
          <img width={133} height={112} src='/img/sneakers/2.jpg' alt='sneakers'></img>
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
          <img width={133} height={112} src='/img/sneakers/3.jpg' alt='sneakers'></img>
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
          <img width={133} height={112} src='/img/sneakers/4.jpg' alt='sneakers'></img>
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
