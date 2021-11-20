import React from 'react'
import './Sorting.scss'

export const Sorting: React.FC = () => {
    return (
        <div className={'sort'}>
            <h3 className={'sort__title'}>Сортировка:</h3>
            <ul className={'sort__list'}>
                <li className={'sort__list-item'}>По цене</li>
                <li className={'sort__list-item'} >По типу</li>
                <li className={'sort__list-item'}>По популярности</li>
                <li className={'sort__list-item'}>Up</li>
                <li className={'sort__list-item'}>Down</li>
            </ul>
        </div>
    )
}