import React from 'react'
import './CatalogPage.scss'
import {Catalog} from "../Catalog/Catalog";
import { NavLink } from 'react-router-dom';

export const CatalogPage: React.FC = () => {
    return (
        <main className={'catalogPage'}>
            <div className={'catalogPage__wrapper'}>
                <h2 className={'catalogPage__title'}>Моноподы для селфи</h2>
                <ul className={'catalogPage__breadcrumbs'}>
                    <li className={'catalogPage__breadcrumbs-item'}><NavLink to='./'>Главная</NavLink></li>
                    <li className={'catalogPage__breadcrumbs-item'}><NavLink to='./catalog'>Каталог товаров</NavLink></li>
                    <li className={'catalogPage__breadcrumbs-item'}><NavLink to='./catalog'>Моноподы для селфи</NavLink></li>
                </ul>
            </div>
            <Catalog />
        </main>
    )
}