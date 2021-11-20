import React from 'react'
import './Brand.scss'

export const Brand: React.FC = () => {
    return (
        <section className={'brand'}>
            <ul className={'brand__list'}>
                <li className={'brand__list-item brand__list-item--dji'}></li>
                <li className={'brand__list-item brand__list-item--sp'}></li>
                <li className={'brand__list-item brand__list-item--gopro'}></li>
                <li className={'brand__list-item brand__list-item--vive'}></li>
            </ul>
        </section>
    )
}