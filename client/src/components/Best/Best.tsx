import React, { useState } from 'react'
import './Best.scss'
import image1 from './slider-1.png'
import image2 from './slider-2.png'
import image3 from './slider-3.png'

export const Best: React.FC = () => {
    const [slider, setSlider] = useState<number>(1)

    return (
        <section className={'best'}>
            {slider === 1 && <div className={'best__slider best__slider--one'}>
                <img className={'best__img'} src={image1} alt="Трипод"/>
                <div className={'best__right'}>
                    <h2 className={'best__title'}>Делай селфи, <br/> как Бен Стиллер!</h2>
                    <p className={'best__desc'}>Самая длинная палка для селфи доступна в нашем магазине. Восемь (Восемь, Карл!) метров длиной и весом всего 5 килограмм.</p>
                    <a className={'best__link button'} href="/">Подробнее</a>
                    <span className={'best__button best__button--active'} onClick={() => setSlider(1)} />
                    <span className={'best__button'} onClick={() => setSlider(2)}/>
                    <span className={'best__button'} onClick={() => setSlider(3)}/>
                    <ul className={'best__features'}>
                        <li className={'best__features-item'}><span className={'best__big'}>8,5 м</span> <br/> Длина палки</li>
                        <li className={'best__features-item'}><span className={'best__big'}>5 кг</span> <br/> Вес палки</li>
                        <li className={'best__features-item'}><span className={'best__big'}>Карбон</span> Материал</li>
                    </ul>
                </div>
            </div>}
            {slider === 2 && <div className={'best__slider best__slider--two'}>
                <img className={'best__img'} src={image2} alt="Фитнес браслет"/>
                <div className={'best__right'}>
                    <h2 className={'best__title'}>Худеем <br /> правильно!</h2>
                    <p className={'best__desc'}>Мотивирующие фитнес-браслеты помогут найти в себе силы не пропускать занятия и соблюдать диету.</p>
                    <a className={'best__link button'} href="/">Подробнее</a>
                    <span className={'best__button'} onClick={() => setSlider(1)}/>
                    <span className={'best__button best__button--active'} onClick={() => setSlider(2)}/>
                    <span className={'best__button'} onClick={() => setSlider(3)}/>
                    <ul className={'best__features'}>
                        <li className={'best__features-item'}><span className={'best__big'}>48 часов</span> <br/> Без подзарядки</li>
                    </ul>
                </div>
            </div>}
            {slider === 3 && <div className={'best__slider best__slider--three'}>
                <img className={'best__img'} width={500} height={340} src={image3} alt="Фитнес браслет"/>
                <div className={'best__right'}>
                    <h2 className={'best__title'}>Порхает как бабочка, <br /> жалит как пчела!</h2>
                    <p className={'best__desc'}>Этот обычный, на первый взгляд, квадрокоптер оснащен <br /> мощным лазером, замаскированным под стандартную камеру.</p>
                    <a className={'best__link button'} href="/">Подробнее</a>
                    <span className={'best__button'} onClick={() => setSlider(1)}/>
                    <span className={'best__button'} onClick={() => setSlider(2)}/>
                    <span className={'best__button best__button--active'} onClick={() => setSlider(3)}/>
                    <ul className={'best__features'}>
                        <li className={'best__features-item'}><span className={'best__big'}>800 м</span> <br/> Дальность полета</li>
                        <li className={'best__features-item'}><span className={'best__big'}>50 м</span> <br/> Радиус поражения</li>
                    </ul>
                </div>
            </div>}
        </section>
    )
}