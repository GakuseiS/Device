import React, { Dispatch, SetStateAction } from 'react'
import './About.scss'

interface IAbout {
    setFeed: Dispatch<SetStateAction<boolean>>;
}

export const About: React.FC<IAbout> = ({setFeed}) => {
    return (
        <section className={'about'}>
            <div className={'about__left'}>
                <h2 className={'about__title'}>О нас</h2>
                <p className={'about__desc'}>Огромный выбор гаджетов не оставит равнодушным гика, который есть в каждом из нас.</p>
                <p className={'about__desc'}>Мы можем доставить ваш товар в самые отдаленные точки России! DEVICE работает со многими транспортными компаниями:</p>
                <ul className={'about__list'}>
                    <li className={'about__list-item'}>Деловые линии</li>
                    <li className={'about__list-item'}>Автотрейдинг</li>
                    <li className={'about__list-item'}>ЖелДорЭкспедиция</li>
                </ul>
                <button className={'button'}>Подробнее о нас</button>
            </div>
            <div className={'about__right'}>
                <h2 className={'about__title'}>Контакты</h2>
                <p className={'about__desc'}>Вы можете забрать товар сами, заехав в наш офис. Заодно, вы сможете проверить работоспособность покупки. Всякое бывает.</p>
                <iframe
                    className={'about__map'}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.1123749473677!2d37.527429316086916!3d55.68703400452979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54cf65f5c8955%3A0x694710ccd55501e!2z0YPQuy4g0KHRgtGA0L7QuNGC0LXQu9C10LksIDE1LCDQnNC-0YHQutCy0LAsIDExOTMxMQ!5e0!3m2!1sru!2sru!4v1635949470685!5m2!1sru!2sru"
                    width="560" height="220" allowFullScreen loading="lazy" title='map' />
                <button className={'button'} onClick={() => setFeed(true)}>Напишите нам</button>
            </div>
        </section>
    )
}