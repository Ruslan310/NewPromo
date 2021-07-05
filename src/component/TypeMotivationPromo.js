import React from 'react';
import {Button, Form} from "react-bootstrap";
import {getArtcode} from "../redux/helpFunction";
import useInput from "../hooks/useInput";
import {
    deleteTypePosition,
    setInputCountDiscount,
    setInputPercentDiscount,
    setModalMessage,
    setProducts,
    setTypeMotivationPromo,
} from "../redux/action";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    modalMessage: state.promo.modalMessage,
    typeMotivationPromo: state.promo.typeMotivationPromo,
    allGroupProduct: state.promo.allGroupProduct,
    products: state.promo.products,
})
const mapDispatchToProps = ({
    setModalMessage,
    setTypeMotivationPromo,
    setProducts,
    setInputCountDiscount,
    setInputPercentDiscount,
    deleteTypePosition
})

const $TypeMotivationPromo = (props) => {
    const inputAptekaId = useInput('')
    const inputSumSkidka = useInput(0)

    const addNewProduct = async () => {
        let arr = props.products.slice()
        if (props.products.find(item => item.code === inputAptekaId.value)) {
            return props.setModalMessage('такой арткод уже добавлен')
        }
        let artName = await getArtcode({artCode: inputAptekaId.value})
        if (!artName) {
            return props.setModalMessage('такой арткод не найден')
        }
        let element = {
            code: inputAptekaId.value,
            price: inputSumSkidka.value,
            artName: artName
        }
        arr.push(element)
        props.setProducts(arr)
        inputAptekaId.onChange({target: {value: ''}})
        inputSumSkidka.onChange({target: {value: ''}})
    }

    return (
        <div>
            <div className='menuBlocks'>
                <div className='blockInputMenu'>
                    <p>Тип мотивации :</p>
                    <p className='TypeMotivation_text'>Необходимо установить для формирования промокодов</p>
                </div>
                <div className='blockInputMenu'>
                    <Form.Control onChange={(e)=>props.setTypeMotivationPromo(e.target.value)}
                                  value={props.typeMotivationPromo}
                                  className='inputPromp imp' as="select">
                        {props.allGroupProduct === 'product' ?
                            <>
                                <option value={''}>не выбран</option>
                                <option value={'product'}>специальная цена на товар</option>
                            </>
                            : <>
                                <option value={''}>не выбран</option>
                                <option value={'sum'}>сертификат на фиксированную сумму</option>
                                <option value={'percent'}>скидка в % от суммы заказ</option>
                            </>}
                    </Form.Control>
                    {props.typeMotivationPromo === 'product' ?
                        <>
                            <div className='blockInputMenu'>
                                <Form.Control {...inputAptekaId} className='impSkid imp' type="number"
                                              placeholder='введите арткод'/>
                                <Form.Control {...inputSumSkidka} className='iSkidPercent' type="number"
                                              placeholder='цена'/>
                                <p className='iSkidPercent_butt'>грн</p>
                                <Button variant="success" onClick={addNewProduct}>Добавлить</Button>
                            </div>
                        </>
                        : null
                    }
                    {props.typeMotivationPromo === 'percent' ?
                        <div className='blockInputMenu'>
                            <p>скидка</p>
                            <Form.Control onChange={(e)=>props.setInputPercentDiscount(e.target.value)}
                                          className='iSkidPercent' type="number"/>
                            <p>%</p>
                        </div>
                        : null
                    }
                    {props.typeMotivationPromo === 'sum' ?
                        <div className='blockInputMenu'>
                            <Form.Control onChange={(e) =>props.setInputCountDiscount(e.target.value)}
                                          className='impSkid imp' type="number"
                                          placeholder='сума скидки'/>
                            <p>грн</p>
                        </div>
                        : null
                    }
                </div>
            </div>
            {!props.products.length > 0 ?
                null :
                <table className='table'>
                    <thead>
                    <tr>
                        <th></th>
                        <th>Арткод</th>
                        <th>Цена</th>
                        <th>Препарат</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.products && props.products.map((item, key) => {
                            return (
                                <tr key={key}>
                                    <td className='collTable'>{key + 1}.</td>
                                    <td className='collTable'>{item.code}</td>
                                    <td className='coll22Table'>{item.price} грн.</td>
                                    <td className="colCell">{item.artName.Name}</td>
                                    <td className='iconDelete' onClick={() =>props.deleteTypePosition(item.code)}></td>
                                </tr>
                            )
                        }
                    )}
                    </tbody>
                </table>
            }
        </div>
    );
};

const TypeMotivationPromo = connect(mapStateToProps, mapDispatchToProps)($TypeMotivationPromo)

export default TypeMotivationPromo;