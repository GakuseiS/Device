import React from 'react'
import {useQuery} from "@apollo/client";
import {GET_ALL_CARTS} from '../../query/cart'
import './CatalogList.scss'
import img1 from './item-1.jpg'
import img2 from './item-2.jpg'
import img3 from './item-3.jpg'
import img4 from './item-4.jpg'

interface ICart {
    id: number
    title: String
    price: Number
}

export const CatalogList: React.FC = () => {
    const {data, loading, error} = useQuery(GET_ALL_CARTS) 

    if(loading) {
        return <h1>`Loading...`</h1>
    }

    return (
        <ul className={'cList'}>
            {data.getAllCarts.map((cart:ICart) => {
                return (
                <li key={cart.id} className={'cList__item'}>
                    <div className={'cList__img-wrapper'}><img className={'cList__img'} src={img1} alt="catalog1"/></div>
                    <div className='cList__modal'><button className='button cList__button'>В корзину</button> <p className='cList__modal-text'>Добавить к сравнению</p> </div>
                    <p className={'cList__label'}><span className={'cList__label-big'}>{cart.title}</span> <span className={'cList__price'}>{cart.price} руб.</span></p>
                </li>
            )
            })}
            {/* <li className={'cList__item'}>
                <div className={'cList__img-wrapper'}><img className={'cList__img'} src={img1} alt="catalog1"/></div>
                <div className='cList__modal'><button className='button cList__button'>В корзину</button> <p className='cList__modal-text'>Добавить к сравнению</p> </div>
                <p className={'cList__label'}><span className={'cList__label-big'}>Любительская селфи-палка</span> <span className={'cList__price'}>500 руб.</span></p>
            </li>
            <li className={'cList__item'}>
                <div className={'cList__img-wrapper'}><img className={'cList__img'} src={img2} alt="catalog2"/></div>
                <div className='cList__modal'><button className='button cList__button'>В корзину</button> <p className='cList__modal-text'>Добавить к сравнению</p> </div>
                <p className={'cList__label'}><span className={'cList__label-big'}>Профессиональная селфи-палка</span> <span className={'cList__price'}>1500 руб.</span></p>
            </li>
            <li className={'cList__item'}>
                <div className={'cList__img-wrapper'}><img className={'cList__img'} src={img3} alt="catalog3"/></div>
                <div className='cList__modal'><button className='button cList__button'>В корзину</button> <p className='cList__modal-text'>Добавить к сравнению</p> </div>
                <p className={'cList__label'}><span className={'cList__label-big'}>Непотопляемая селфи-палка</span> <span className={'cList__price'}>2500 руб.</span></p>
            </li>
            <li className={'cList__item'}>
                <div className={'cList__img-wrapper'}><img className={'cList__img'} src={img4} alt="catalog4"/></div>
                <div className='cList__modal'><button className='button cList__button'>В корзину</button> <p className='cList__modal-text'>Добавить к сравнению</p> </div>
                <p className={'cList__label'}><span className={'cList__label-big'}>Селфи-палка «Следуй за мной»</span> <span className={'cList__price'}>4900 руб.</span></p>
            </li> */}
        </ul>
    )
}