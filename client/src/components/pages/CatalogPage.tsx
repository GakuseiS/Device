import React from 'react'
import './CatalogPage.scss'
import {Catalog} from "../Catalog/Catalog";

export const CatalogPage: React.FC = () => {
    return (
        <main className={'catalogPage'}>
            <div className={'catalogPage__wrapper'}>
                <h2 className={'catalogPage__title'}>Моноподы для селфи</h2>
                <ul className={'catalogPage__breadcrumbs'}>
                    <li className={'catalogPage__breadcrumbs-item'}><a href='./'>Главная</a></li>
                    <li className={'catalogPage__breadcrumbs-item'}><a href='./catalog'>Каталог товаров</a></li>
                    <li className={'catalogPage__breadcrumbs-item'}><a href='./catalog'>Моноподы для селфи</a></li>
                </ul>
            </div>
            <Catalog />
        </main>
    )
}