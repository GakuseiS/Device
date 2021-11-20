import React from 'react'
import './Sorting.scss'

export const Sorting: React.FC = () => {
    return (
        <div className={'sort'}>
            <h3 className={'sort__title'}>Сортировка:</h3>
            <ul className={'sort__list'}>
                <li className={'sort__list-item sort__type sort__type--active'}>По цене</li>
                <li className={'sort__list-item sort__type'} >По типу</li>
                <li className={'sort__list-item sort__type'}>По популярности</li>
                <li className={'sort__list-item sort__up'}></li>
                <li className={'sort__list-item sort__down sort__down--active'}></li>
            </ul>
        </div>
    )
}