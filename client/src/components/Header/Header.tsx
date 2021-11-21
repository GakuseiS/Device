import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
import {ReactComponent as ReactLogo} from './logo.svg'

export const Header: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)

    const onOpenModal = (event: React.MouseEvent<Element, MouseEvent>) => {
        event.preventDefault()
        setOpenModal(!openModal)
    }

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
                <a className={'header__catalog header__nav-item'} href='/' onClick={e => onOpenModal(e)}>Каталог товаров</a>
                {openModal && <div className='header__modal'>
                    <ul className='header__modal-list'>
                        <li className='header__modal-item'><NavLink to="/">Виртуальная реальность</NavLink></li>
                        <li className='header__modal-item'><NavLink to="/">Фитнес браслеты</NavLink></li>
                        <li className='header__modal-item'><NavLink to="/">Квадрокоптеры</NavLink></li>
                        <br />
                        <li className='header__modal-item'><NavLink to="/catalog" onClick={() => setOpenModal(false)}>Моноподы для селфи</NavLink></li>
                        <li className='header__modal-item'><NavLink to="/">Умные часы</NavLink></li>
                        <br />
                        <li className='header__modal-item'><NavLink to="/">Экшн-камеры</NavLink></li>
                    </ul>
                </div>}
                <a className={'header__nav-item'} href='/'>Доставка</a>
                <a className={'header__nav-item'} href='/'>Гарантия</a>
                <a className={'header__nav-item'} href='/'>Контакты</a>
            </nav>
        </header>
    )
}