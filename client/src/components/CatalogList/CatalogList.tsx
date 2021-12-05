import React from 'react'
import {useQuery} from "@apollo/client";
import {GET_ALL_CARTS} from '../../query/cart'
import './CatalogList.scss'

interface ICart {
    id: number
    img: string
    title: string
    price: number
}

export const CatalogList: React.FC = () => {
    const {data, loading} = useQuery(GET_ALL_CARTS) 

    if(loading) {
        return <h1>`Loading...`</h1>
    }

    return (
        <ul className={'cList'}>
            {data.getAllCarts.map((cart:ICart) => {
                return (
                <li key={cart.id} className={'cList__item'}>
                    <div className={'cList__img-wrapper'}><img className={'cList__img'} src={cart.img} alt={`catalog${cart.id}`}/></div>
                    <div className='cList__modal'><button className='button cList__button'>В корзину</button> <p className='cList__modal-text'>Добавить к сравнению</p> </div>
                    <p className={'cList__label'}><span className={'cList__label-big'}>{cart.title}</span> <span className={'cList__price'}>{cart.price} руб.</span></p>
                </li>
            )
            })}
        </ul>
    )
}