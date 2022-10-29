function Drawer(){
    return(
        <div style={{display: 'none'}} className='blur'>
            <div className='wrapperRightSide'>
                <h2 className='d-flex justify-between mb-30'>Корзина<img className='cu-p removeBtn' src='/img/btn-remove.svg' alt='remove'></img></h2>
                <div className='items'>
                <div className='cartItem d-flex align-center mb-20'>
                    <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className='cartItemImg'></div>
                    <div className='mr-20 flex'>
                    <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 999 руб.</b>
                    </div>
                    <img className='removeBtn' src='/img/btn-remove.svg' alt='remove'></img>
                </div>
                <div className='cartItem d-flex align-center mb-20'>
                    <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className='cartItemImg'></div>
                    <div className='mr-20 flex'>
                    <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 999 руб.</b>
                    </div>
                    <img className='removeBtn' src='/img/btn-remove.svg' alt='remove'></img>
                </div>
                </div>
                <div className='cartTotalBlock'>
                    <ul>
                    <li className='d-flex'>
                        <span>Итого:</span>
                        <div></div>
                        <b>21 498 руб.</b>
                    </li>
                    <li className='d-flex'>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1074 руб.</b>
                    </li>
                    </ul>
                    <button className='greenButton'>Оформить заказ<img src='/img/order-arrow.svg' alt='arrow'></img></button>
                </div>
            </div>
        </div>
    );
}
export default Drawer;