import React from 'react';
import {Form} from "react-bootstrap";
import useInput from "../hooks/useInput";

const LimitUsePromo = () => {
    const inputLimitSendPromo = useInput(0)
    return (
        <div className='menuBlocks'>
            <p>Ограничения промокодов по доставке :</p>
            <Form.Control {...inputLimitSendPromo} className='inputPromp inputSelect' as="select">
                <option value={0}>Выбрать все</option>
                {/*<option value={1}>Курьерская доставка</option>*/}
                {/*<option value={2}>Бронь в аптеке</option>*/}
                {/*<option value={3}>Новая почта</option>*/}
                {/*<option value={4}>Укр. почта</option>*/}
                {/*<option value={5}>Курьер iPost</option>*/}
            </Form.Control>
        </div>
    );
};

export default LimitUsePromo;