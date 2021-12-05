import React from 'react'
import './Catalog.scss'
import {Sorting} from "../Sorting/Sorting";
import {Pagination} from "../Pagination/Pagination";
import {CatalogList} from "../CatalogList/CatalogList";
import { DynamicBounds } from '../Slider/Slider';

export const Catalog: React.FC = () => {
    return (
        <section className={'catalog'}>
            <div className={'catalog__filter'}>
                <h3 className={'catalog__filter-title'}>Фильтр:</h3>
                <form className={'catalog__form'} action="/">
                    <fieldset className={'catalog__fieldset'}>
                        <legend className={'catalog__legend'}>Стоимость</legend>
                        <DynamicBounds />
                    </fieldset>
                    <fieldset className={'catalog__fieldset'}>
                        <legend className={'catalog__legend'}>Цвет</legend>
                        <input className='catalog__checkbox' id='black' type="checkbox" name='black' defaultChecked/>
                        <label className='catalog__label' htmlFor="black"><span className='catalog__custom-checkbox'></span> Черный</label>
                        <input className='catalog__checkbox' id='white' type="checkbox" name='white'/>
                        <label className='catalog__label' htmlFor="white"><span className='catalog__custom-checkbox'></span> Белый</label>
                        <input className='catalog__checkbox' id='blue' type="checkbox" name='blue' defaultChecked/>
                        <label className='catalog__label' htmlFor="blue"> <span className='catalog__custom-checkbox'></span> Синий</label>
                        <input className='catalog__checkbox' id='red' type="checkbox" name='red' defaultChecked/>
                        <label className='catalog__label' htmlFor="red"><span className='catalog__custom-checkbox'></span> Красный</label>
                        <input className='catalog__checkbox' id='pink' type="checkbox" name='pink'/>
                        <label className='catalog__label' htmlFor="pink"><span className='catalog__custom-checkbox'></span> Розовый</label>
                    </fieldset>
                    <fieldset className={'catalog__fieldset'}>
                        <legend className={'catalog__legend'}>Bluetooth</legend>
                        <input className='catalog__radiobox' id='bl-on' type="radio" name='bluetooth' defaultChecked/>
                        <label className='catalog__label' htmlFor="bl-on"><span className='catalog__custom-radiobox'></span> Есть</label>
                        <input className='catalog__radiobox' id='bl-off' type="radio" name='bluetooth'/>
                        <label className='catalog__label' htmlFor="bl-off"><span className='catalog__custom-radiobox'></span> Нет</label>
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