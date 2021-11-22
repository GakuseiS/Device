import React, { useState } from 'react'
import './Service.scss'
import img1 from './delivery.png'
import img2 from './warranty.png'
import img3 from './credit.png'

export const Service: React.FC = () => {
    const [service, setService] = useState<Number>(1)

    return (
        <div className={'service__wrapper'}>
            <section className={'service'}>
                <ul className={'service__list'}>
                    {service === 1 && <li className={'service__list-item'}><button className={'button service__button service__button--active'} onClick={() => setService(1)}>Доставка</button></li>}
                    {service !== 1 && <li className={'service__list-item'}><button className={'button service__button' } onClick={() => setService(1)}>Доставка</button></li>}
                    {service === 2 && <li className={'service__list-item'}><button className={'button service__button service__button--active'} onClick={() => setService(2)}>Гарантия</button></li>}
                    {service !== 2 && <li className={'service__list-item'}><button className={'button service__button'} onClick={() => setService(2)}>Гарантия</button></li>}
                    {service === 3 && <li className={'service__list-item'}><button className={'button service__button service__button--active'} onClick={() => setService(3)}>Кредит</button></li>}
                    {service !== 3 && <li className={'service__list-item'}><button className={'button service__button'} onClick={() => setService(3)}>Кредит</button></li>}
                </ul>
                <div className={'service__slider'}>
                    {service === 1 && <div className={'service__slider-item'}>
                        <div className={'service__slider-wrapper'}>
                            <h2 className={'service__slider-title'}>Доставка</h2>
                            <p className={'service__slider-desc'}>Мы с удовольствием доставим ваш товар прямо к вашему подъезду совершенно бесплатно! Ведь мы неплохо заработаем, поднимая его на ваш этаж.</p>
                        </div>
                        <img className={'service__slider-img'} src={img1} alt="delivery"/>
                    </div>}
                    {service === 2 && <div className={'service__slider-item'}>
                        <div className={'service__slider-wrapper'}>
                            <h2 className={'service__slider-title'}>Гарантия</h2>
                            <p className={'service__slider-desc'}>Если из-за возгорания купленного у нас товара у вас сгорит дом — не переживайте, мы выдадим вам новый. <br /> Товар, не дом, конечно же.</p>
                        </div>
                        <img className={'service__slider-img'} src={img2} alt="warranty"/>
                    </div>}
                    {service === 3 && <div className={'service__slider-item'}>
                        <div className={'service__slider-wrapper'}>
                            <h2 className={'service__slider-title'}>Кредит</h2>
                            <p className={'service__slider-desc'}>Залезть в долговую яму стало проще! Кредитные консультанты подберут для вас наиболее выгодные <br /> условия кредита. Выгодные для нашего банка, разумеется.</p>
                        </div>
                        <img className={'service__slider-img'} src={img3} alt="credit"/>
                    </div>}
                </div>
            </section>
        </div>
    )
}