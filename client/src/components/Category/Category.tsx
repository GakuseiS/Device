import React from 'react'
import './Category.scss'

export const Category: React.FC = () => {
    return (
        <section className={'cat'}>
            <ul className={'cat__list'}>
                <li className={'cat__list-item'}><div className={'cat__img cat__img--vr'} /> <span className={'cat__label'}>Виртуальная реальность</span></li>
                <li className={'cat__list-item'}><div className={'cat__img cat__img--mp'} /> <span className={'cat__label'}>Моноподы <br/> для селфи</span></li>
                <li className={'cat__list-item'}><div className={'cat__img cat__img--ac'} /> <span className={'cat__label'}>Экшн-камеры</span></li>
                <li className={'cat__list-item'}><div className={'cat__img cat__img--fb'} /> <span className={'cat__label'}>Фитнес-браслеты</span></li>
                <li className={'cat__list-item'}><div className={'cat__img cat__img--sw'} /> <span className={'cat__label'}>Умные часы</span></li>
                <li className={'cat__list-item'}><div className={'cat__img cat__img--qq'} /> <span className={'cat__label'}>Квадракоптеры</span></li>
            </ul>
        </section>
    )
}