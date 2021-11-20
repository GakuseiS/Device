import React from 'react'
import './Service.scss'
import img1 from './delivery.png'

export const Service: React.FC = () => {
    return (
        <div className={'service__wrapper'}>
            <section className={'service'}>
                <ul className={'service__list'}>
                    <li className={'service__list-item'}><button className={'button service__button service__button--active'}>Доставка</button></li>
                    <li className={'service__list-item'}><button className={'button service__button'}>Гарантия</button></li>
                    <li className={'service__list-item'}><button className={'button service__button'}>Кредит</button></li>
                </ul>
                <div className={'service__slider'}>
                    <div className={'service__slider-item'}>
                        <div className={'service__slider-wrapper'}>
                            <h2 className={'service__slider-title'}>Доставка</h2>
                            <p className={'service__slider-desc'}>Мы с удовольствием доставим ваш товар прямо к вашему подъезду совершенно бесплатно! Ведь мы неплохо заработаем, поднимая его на ваш этаж.</p>
                        </div>
                        <img className={'service__slider-img'} src={img1} alt="delivery"/>
                    </div>
                </div>
            </section>
        </div>
    )
}