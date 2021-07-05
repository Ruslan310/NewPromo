import React from 'react';
import {Form} from "react-bootstrap";

const CountPromo = (props) => {
    const CountPromo = (e) => {
        if (e.target.value > 999) {
            props.setCountPromo(1)
            e.target.value=1
            return props.setModalMessage('недопустимое количество промокодов')
        }
        props.setCountPromo(e.target.value)
    }

    return (
        <div className='menuBlocks'>
            <p>Количество промокодов :</p>
            <div className='blockInputMenu'>
                <Form.Control onChange={(e) => CountPromo(e)}
                              className='inputPromp  shotMenu'
                              value={props.countPromoCode}
                              type="number"
                              min="1" max="999"
                              placeholder='max 999'/>
                {/*<p className='textInputDown'>Для генерации промокодов необходимо выполнить обязательные условия</p>*/}
            </div>
        </div>
    );
};

export default CountPromo;