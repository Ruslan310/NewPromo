import React from 'react';
import '../style/main.css'
import {Button, Form} from "react-bootstrap";
import useInput from "../hooks/useInput";
import ModalMessage from "./modalMessage";
import {
    fetchPromoCode,
    setAllGroupProduct,
    setCountPromo,
    setModalMessage,
    setProducts,
    setRestrictionsPromo,
    setTypeMotivationPromo,
    setInputCountDiscount,
    setInputPercentDiscount,
    setGroupProductArray,
    setBrandProductArray
} from "../redux/action";
import {connect} from "react-redux";
import Modal from "./Modal";
import CountPromo from "./CountPromo";
import RestrictionsPromo from "./RestrictionsPromo";
import ProductUsePromo from "./ProductUsePromo";
import TypeMotivationPromo from "./TypeMotivationPromo";
import {funConvert} from "../redux/helpFunction";
import PromoUseLocation from "./PromoUseLocation";
import PersonalUsePromo from "./PersonalUsePromo";
import LimitUsePromo from "./LimitUsePromo";


const mapStateToProps = (state) => ({
    modalMessage: state.promo.modalMessage,
    countPromoCode: state.promo.countPromoCode,
    restrictionsPromo: state.promo.restrictionsPromo,
    allGroupProduct: state.promo.allGroupProduct,
    brandProductArray: state.promo.brandProductArray,
    groupProductArray: state.promo.groupProductArray,
    typeMotivationPromo: state.promo.typeMotivationPromo,
    products: state.promo.products,
    inputCountDiscount: state.promo.inputCountDiscount,
    inputPercentDiscount: state.promo.inputPercentDiscount,
})
const mapDispatchToProps = ({
    setModalMessage,
    setCountPromo,
    setRestrictionsPromo,
    setAllGroupProduct,
    setTypeMotivationPromo,
    setProducts,
    fetchPromoCode,
    setInputCountDiscount,
    setInputPercentDiscount,
    setGroupProductArray,
    setBrandProductArray
})

const $MenuPromo = (props) => {
    let ms = new Date().getTime() + 86400000
    let tomorrowDay = new Date(ms).toISOString().substr(0, 10)
    let nowDate = new Date().toISOString().substr(0, 10)

    const newNumber = () => {
        let num = new Date().getTime().toString().substr(4)
        return +num
    }
    const inputNameCompany = useInput('')
    const inputStartPromo = useInput(nowDate)
    const inputEndPromo = useInput(tomorrowDay)
    const inputHowMatchUsedPromo = useInput('one')
    const clearForm = () => {
        props.setRestrictionsPromo('')
        props.setCountPromo(1)
        props.setAllGroupProduct('all')
        props.setInputCountDiscount(null)
        props.setInputPercentDiscount(null)
        props.setTypeMotivationPromo('')
        props.setGroupProductArray([])
        props.setBrandProductArray([])
        inputNameCompany.onChange({target: {value: ''}})
        props.setProducts([])
    }

    const whatItems = () => {
        if (props.allGroupProduct === 'product') {
            let array = []
            props.products.map(item => {
                let pars = {}
                pars.code = item.code
                pars.price = item.price
                return array.push(pars)
            })
            console.log('улетает Спеццена', array)
            return array
        }
        if (props.allGroupProduct === 'group') {
            let array = []
            props.groupProductArray.map(item => {
                let pars = {}
                pars.code = funConvert(item._IDRRef.data)
                return array.push(pars)
            })
            console.log('улетает Група', array)
            return array
        }
        if (props.allGroupProduct === 'brand') {
            let array = []
            props.brandProductArray.map(item => {
                let pars = {}
                pars.code = funConvert(item._IDRRef.data)
                return array.push(pars)
            })
            console.log('улетает Бренд', array)
            return array
        }
        if (props.allGroupProduct === 'all') {
            console.log('улетает Пустой масив')
            return []
        }
        return null
    }
    const whatMotivationValue = () => {
        if (props.typeMotivationPromo === 'product') {
            return 0
        }
        if (props.typeMotivationPromo === 'percent') {
            return props.inputPercentDiscount
        }
        if (props.typeMotivationPromo === 'sum') {
            return props.inputCountDiscount
        }
        return null
    }
    const createCertificate = () => {
        let id = newNumber()
        if (!inputNameCompany.value) {
            return props.setModalMessage('введите название кампании')
        }
        if (!props.typeMotivationPromo) {
            return props.setModalMessage('выберите тип мотивации')
        }
        if (props.typeMotivationPromo === 'product' && props.products.length < 1) {
            return props.setModalMessage('введите арткод, цену и нажмите "Добавить"')
        }
        if (props.typeMotivationPromo === 'percent' && !props.inputPercentDiscount) {
            return props.setModalMessage('введите % скидки')
        }
        if (props.typeMotivationPromo === 'sum' && !props.inputCountDiscount) {
            return props.setModalMessage('введите сумму скидки')
        }
        props.fetchPromoCode({
            create: {
                campaignName: inputNameCompany.value,
                campaignId: id,
                dateFrom: inputStartPromo.value,
                dateTo: inputEndPromo.value + ' 23:59:59',
                motivationType: props.typeMotivationPromo,
                frequency: inputHowMatchUsedPromo.value,
                itemType: props.allGroupProduct,
                motivationValue: whatMotivationValue(),
                items: whatItems(),
            },
            count: {
                campaignId: id,
                quantityPromocodes: props.countPromoCode
            }
        })
        clearForm()
    }
    return (
        <div className='wrapperMainMenu'>
            <Modal />
            <ModalMessage />
            <div className='wrapperCollum'>
                <div className='inputBlockRow'>
                    <p className='rowText'>Название кампании :</p>
                    <Form.Control {...inputNameCompany} className='inputPromp' type="text"
                                  placeholder='введи названии'/>
                </div>
                {/*<div className='inputBlockRow'>*/}
                {/*    <p className='rowText'>ID кампании в системе Аптека 1С :</p>*/}
                {/*    <Form.Control {...inputIdCompany} className='inputPromp' type="text" placeholder='id кампании'/>*/}
                {/*</div>*/}
                {/*<label className='inputBlockRowCheck'>*/}
                {/*    <p className='rowText'>Кампания используется для API :</p>*/}
                {/*    <input type="checkbox" className="checkbox" {...checkForAPI}/>*/}
                {/*    <span className="fakeCheckbox"></span>*/}
                {/*    <p className='textOnInput'>При установке флага и сохранении все параметры кампании для промокодов*/}
                {/*        будут отменены</p>*/}
                {/*</label>*/}
                {/*<label className='inputBlockRowCheck'>*/}
                {/*    <p className='rowText'>Кампания без промокодов :</p>*/}
                {/*    <input type="checkbox" className="checkbox" {...checkWithoutPromo}/>*/}
                {/*    <span className="fakeCheckbox"></span>*/}
                {/*</label>*/}
                <div className='inputBlockRow'>
                    <p className='rowText'>Начало действия промокодов :</p>
                    <Form.Control {...inputStartPromo} className='inputPromp' type="date" placeholder='дата начала'/>
                </div>
                <div className='inputBlockRow'>
                    <p className='rowText'>Окончание действия промокодов (включительно) :</p>
                    <Form.Control {...inputEndPromo} className='inputPromp' type="date" placeholder='дата окончания'/>
                </div>
            </div>
            <PromoUseLocation />
            <PersonalUsePromo />
            <div className='menuBlocks'>
                <p>Частота использования промокодов :</p>
                <Form.Control {...inputHowMatchUsedPromo} className='inputPromp inputSelect' as="select">
                    <option value='one'>одноразовый</option>
                    <option value='reusable'>многоразовый</option>
                </Form.Control>
            </div>
            <LimitUsePromo />
            <ProductUsePromo/>
            <TypeMotivationPromo/>
            <RestrictionsPromo
                restrictionsPromo = {props.restrictionsPromo}
                setRestrictionsPromo = {props.setRestrictionsPromo}
            />
            <CountPromo
                countPromoCode = {props.countPromoCode}
                setModalMessage = {props.setModalMessage}
                setCountPromo = {props.setCountPromo}
            />
            <div>
                <Button variant="info" onClick={createCertificate}
                        className='menuButtonLeft'>Сохранить</Button>
                <Button variant="info" onClick={clearForm}>Отмена</Button>
            </div>
        </div>
    );
};

const MenuPromo = connect(mapStateToProps, mapDispatchToProps)($MenuPromo)

export default MenuPromo;