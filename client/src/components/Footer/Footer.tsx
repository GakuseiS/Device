import React from 'react'
import './Footer.scss'
import {ReactComponent as ReactLogo} from './logo.svg'

export const Footer: React.FC = () => {
    return (
        <div className={'footer__wrapper'}>
            <footer className={'footer'}>
                <div className={'footer__top'}>
                    <ReactLogo className={'footer__logo'} />
                    <ul className={'footer__list'}>
                        <li className={'footer__in'}>Войти</li>
                        <li className={'footer__compare'}>Сравнить</li>
                        <li className={'footer__cart'}>Корзина</li>
                    </ul>
                </div>
                <div className={'footer__middle'}>
                    <p className={'footer__address'}>г. Москва, ул. Строителей, 15</p>
                    <nav className={'footer__nav'}>
                        <a className={'footer__nav-item'} href='/'>Доставка</a>
                        <a className={'footer__nav-item'} href='/'>Гарантии</a>
                        <a className={'footer__nav-item'} href='/'>Контакты</a>
                    </nav>
                    <p className={'footer__tel'}>Тел.: +7 (495) 495-95-95</p>
                </div>
                <ul className={'footer__social'}>
                    <li className={'footer__social-item footer__social-item--fb'}></li>
                    <li className={'footer__social-item footer__social-item--inst'}></li>
                    <li className={'footer__social-item footer__social-item--twit'}></li>
                </ul>
            </footer>
        </div>
    )
}
