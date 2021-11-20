import React from 'react'
import './Pagination.scss'

export const Pagination: React.FC = () => {
    return (
        <div className={'page'}>
            <button className={'page__button'} >Назад</button>
            <ul className={'page__list'}>
                <li className={'page__list-item page__number page__number--active'}>1</li>
                <li className={'page__list-item page__number'}>2</li>
                <li className={'page__list-item page__number'}>3</li>
            </ul>
            <button className={'page__button'} >Вперед</button>
        </div>
    )
}