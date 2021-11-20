import React from 'react'
import './CatalogList.scss'
import img1 from './item-1.jpg'
import img2 from './item-2.jpg'
import img3 from './item-3.jpg'
import img4 from './item-4.jpg'

export const CatalogList: React.FC = () => {
    return (
        <ul className={'cList'}>
            <li className={'cList__item'}>
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
            </li>
        </ul>
    )
}