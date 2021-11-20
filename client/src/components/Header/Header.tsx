import React from 'react'
import {NavLink} from "react-router-dom";
import './Header.scss'
import {ReactComponent as ReactLogo} from './logo.svg'

export const Header: React.FC = () => {
    return (
        <header className='header'>
            <ReactLogo className={'header__logo'} />
            <ul className={'header__nav-top'}>
                <li className={'header__search-item'}>
                    <input className={'header__search'} type='search' placeholder={'Поиск по сайту'} />
                </li>
                <li className={'header__in'} >Войти</li>
                <li className={'header__compare'}>Сравнить</li>
                <li className={'header__cart'}>Корзина</li>
            </ul>
            <nav className={'header__nav'}>
                <NavLink to='/catalog' className={'header__catalog header__nav-item'}>Каталог товаров</NavLink>
                <a className={'header__nav-item'} href='/'>Доставка</a>
                <a className={'header__nav-item'} href='/'>Гарантия</a>
                <a className={'header__nav-item'} href='/'>Контакты</a>
            </nav>
        </header>
    )
}