import React from 'react'
import './Catalog.scss'
import {Sorting} from "../Sorting/Sorting";
import {Pagination} from "../Pagination/Pagination";
import {CatalogList} from "../CatalogList/CatalogList";

export const Catalog: React.FC = () => {
    return (
        <section className={'catalog'}>
            <div className={'catalog__filter'}>
                <h3 className={'catalog__filter-title'}>Фильтр:</h3>
                <form className={'catalog__form'} action="/">
                    <fieldset className={'catalog__fieldset'}>
                        <legend className={'catalog__legend'}>Стоимость</legend>
                        <input type="range"/>
                    </fieldset>
                    <fieldset className={'catalog__fieldset'}>
                        <legend className={'catalog__legend'}>Цвет</legend>
                        <input id='black' type="checkbox" name='black' defaultChecked/>
                        <label htmlFor="black">Черный</label>
                        <input id='white' type="checkbox" name='white'/>
                        <label htmlFor="white">Белый</label>
                        <input id='blue' type="checkbox" name='blue' defaultChecked/>
                        <label htmlFor="blue">Синий</label>
                        <input id='red' type="checkbox" name='red' defaultChecked/>
                        <label htmlFor="red">Красный</label>
                        <input id='pink' type="checkbox" name='pink'/>
                        <label htmlFor="pink">Розовый</label>
                    </fieldset>
                    <fieldset className={'catalog__fieldset'}>
                        <legend className={'catalog__legend'}>Bluetooth</legend>
                        <input id='bl-on' type="radio" name='bluetooth' defaultChecked/>
                        <label htmlFor="bl-on">Есть</label>
                        <input id='bl-off' type="radio" name='bluetooth'/>
                        <label htmlFor="bl-off">Нет</label>
                    </fieldset>
                    <button className={'catalog__submit button'} type='submit'>Показать</button>
                </form>
            </div>
            <div className={'catalog__content'}>
                <Sorting />
                <CatalogList />
                <Pagination />
            </div>
        </section>
    )
}