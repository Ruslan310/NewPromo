import React from 'react';
import {Form} from "react-bootstrap";
import useInput from "../hooks/useInput";

const PromoUseLocation = () => {
    const inputLocationPromo = useInput('')
    return (
            <div className='menuBlocks'>
                <p>Локация действия промокодов :</p>
                <Form.Control {...inputLocationPromo} className='inputPromp inputSelect' as="select">
                    <option>По всей сети</option>
                    {/*<option>населенный пункт</option>*/}
                    {/*<option>Аптека</option>*/}
                </Form.Control>
            </div>
    );
};

export default PromoUseLocation;