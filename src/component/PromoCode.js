import React from 'react';
import ModalMessage from "./modalMessage";
import '../style/promo.css'

const PromoCode = (props) => {
    return (
        <div className='wrapperPromo'>
            <ModalMessage/>
            <p className='promoTitle'>Список промокодов</p>
            <ul className='promoArr'>
                {!props.createPromo ?
                    <p className='promoArrItem'> - пусто - </p>
                    :
                    props.createPromo?.map((item,index) => {
                    return (
                        <li className='promoArrItem' key={index}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PromoCode;