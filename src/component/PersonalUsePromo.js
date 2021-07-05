import React from 'react';
import {Form} from "react-bootstrap";
import useInput from "../hooks/useInput";

const PersonalUsePromo = () => {
    const inputPersonalPromo = useInput('')
    return (
        <div className='menuBlocks'>
            <p>Персонализация действия промокодов :</p>
            <Form.Control {...inputPersonalPromo} className='inputPromp inputSelect' as="select">
                <option>Все клиенты</option>
                {/*<option>Группа клиентов</option>*/}
                {/*<option>Клиент</option>*/}
            </Form.Control>
        </div>
    );
};

export default PersonalUsePromo;