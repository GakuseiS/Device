import React from 'react'
import './Best.scss'
import image1 from './slider-1.png'

export const Best: React.FC = () => {
    return (
        <section className={'best'}>
            <div className={'best__slider best__slider--one'}>
                <img className={'best__img'} src={image1} alt="Трипод"/>
                <div className={'best__right'}>
                    <h2 className={'best__title'}>Делай селфи, <br/> как Бен Стиллер!</h2>
                    <p className={'best__desc'}>Самая длинная палка для селфи доступна в нашем магазине. Восемь (Восемь, Карл!) метров длиной и весом всего 5 килограмм.</p>
                    <a className={'best__link button'} href="/">Подробнее</a>
                    <button className={'best__button best__button--active'} />
                    <button className={'best__button'} />
                    <button className={'best__button'} />
                    <ul className={'best__features'}>
                        <li className={'best__features-item'}><span className={'best__big'}>8,5 м</span> <br/> Длина палки</li>
                        <li className={'best__features-item'}><span className={'best__big'}>5 кг</span> <br/> Вес палки</li>
                        <li className={'best__features-item'}><span className={'best__big'}>Карбон</span> Материал</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}