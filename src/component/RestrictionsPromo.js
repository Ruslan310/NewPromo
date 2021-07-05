import React from 'react';
import {Form} from "react-bootstrap";

const RestrictionsPromo = (props) => {

    return (
        <div className='TypeMotivation'>
            <div className='menuBlocks'>
                <p>Ограничения промокодов :</p>
                <Form.Control className='inputPromp inputSelect' as="select"
                              onChange={(e)=>props.setRestrictionsPromo(e.target.value)}
                              value={props.restrictionsPromo}
                >
                    <option value={''}>без ограничений</option>
                    {/*<option value={'sum'}>по сумме товаров - от</option>*/}
                    {/*<option value={'brand'}>по сумме товаров выбранных брендов - от</option>*/}
                    {/*<option value={'count'}>по количеству товаров - от</option>*/}
                </Form.Control>
            </div>
        </div>
    );
};

export default RestrictionsPromo;