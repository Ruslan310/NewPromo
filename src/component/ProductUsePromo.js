import React, {useRef, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {getGroupProduct, getProductBrand} from "../redux/helpFunction";
import {
    deletePosition,
    setAllGroupProduct,
    setBrandProductArray,
    setBrandProductType,
    setGroupProductArray,
    setGroupProductType,
    setModalMessage,
    setSearchAllBrandFetch,
    setSearchAllGroupFetch,
    setTypeMotivationPromo,
    ShowModal
} from "../redux/action";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    modalMessage: state.promo.modalMessage,
    groupProductArray: state.promo.groupProductArray,
    brandProductArray: state.promo.brandProductArray,
    allGroupProduct: state.promo.allGroupProduct,
    groupProductType: state.promo.groupProductType,
    brandProductType: state.promo.brandProductType,
    searchAllGroupFetch: state.promo.searchAllGroupFetch,
    searchAllBrandFetch: state.promo.searchAllBrandFetch,
})
const mapDispatchToProps = ({
    setModalMessage,
    setAllGroupProduct,
    setGroupProductArray,
    setBrandProductArray,
    setTypeMotivationPromo,
    ShowModal,
    setSearchAllGroupFetch,
    setSearchAllBrandFetch,
    setGroupProductType,
    setBrandProductType,
    deletePosition
})

const $ProductUsePromo = (props) => {
    const [switchIsGroupList, setSwitchIsGroupList] = useState()
    const onBlurHandler = () => {
        setTimeout(() => setSwitchIsGroupList(false), 200)
    }

    const groupProductRef = useRef('')
    const brandProductRef = useRef('')

    const selectGroupType = (group) => {
        if (props.groupProductArray.find(item => item._Description === group._Description)) {
            return props.setModalMessage('такая группа уже добавлена')
        }
        let arr = props.groupProductArray.slice()
        props.setGroupProductArray(arr)
        arr.push(group)
        props.setGroupProductType([])
        groupProductRef.current.value = ''
    }

    const selectBrandType = (brand) => {
        if (props.brandProductArray.find(item => item._Description === brand._Description)) {
            return props.setModalMessage('такая группа уже добавлена')
        }
        let arr = props.brandProductArray.slice()
        props.setBrandProductArray(arr)
        arr.push(brand)
        props.setBrandProductType([])
        brandProductRef.current.value = ''
    }

    const ProductCategory = (e) => {
        props.setAllGroupProduct(e.target.value)
        props.setGroupProductArray([])
        props.setBrandProductArray([])
        props.setTypeMotivationPromo('')
    }
    const addNewGroup = async () => {
        let group = null
        if (groupProductRef.current.value.length > 3) {
            group = await getGroupProduct({groupProduct: groupProductRef.current.value})
            props.setGroupProductType(group)
        }
    }
    const addNewBrand = async () => {
        let brand = null
        if (brandProductRef.current.value.length > 3) {
            brand = await getProductBrand({brand: brandProductRef.current.value})
            console.log(brand)
            props.setBrandProductType(brand)
        }
    }
    const searchAllGroupProduct = async (value) => {
        if(value === 'group' && !props.searchAllGroupFetch){
            props.setSearchAllGroupFetch(await getGroupProduct({groupProduct: ''}))
        }
        if(value === 'brand' && !props.searchAllBrandFetch){
            props.setSearchAllBrandFetch(await getProductBrand({brand: ''}))
        }
        props.ShowModal(value)
    }
    // const clearColl = (item) => {
    //     props.deletePosition(item._Description)
    // }
    return (
        <div>
            <div className='menuBlocks'>
                <div className='blockInputMenu'>
                    <p>Товары действия промокодов:</p>
                    <p className='TypeMotivation_text'> Необходимо установить для выбора типа мотивации</p>
                </div>
                <div className='blockInputMenu'>
                    <Form.Control
                        onChange={(e) => ProductCategory(e)}
                        value={props.allGroupProduct}
                        className='inputPromp imp' as="select">
                        <option value={'all'}>Все товары</option>
                        <option value={'group'}>Група товаров</option>
                        <option value={'brand'}>Бренд</option>
                        <option value={'product'}>Товар (арткод)</option>
                    </Form.Control>
                    {props.allGroupProduct === 'group' ?
                        <div className='blockInputMenu'>
                            <div className='inputContainer'>
                                <Form.Control onChange={addNewGroup}
                                              ref={groupProductRef}
                                              onBlur={onBlurHandler}
                                              onFocus={() => setSwitchIsGroupList(true)}
                                              className='impSkid' type="text"
                                              placeholder='вводите название > 4'
                                />
                                <ul className={(switchIsGroupList && props.groupProductType.length > 0) ? 'inputContainer_list' : null}>
                                    {switchIsGroupList && props.groupProductType.map((group, key = 1) => {
                                            return (
                                                <li key={key} onClick={() => selectGroupType(group)}>{group._Description}</li>
                                            )
                                        }
                                    )}
                                </ul>
                            </div>
                            <Button variant="success"
                                    className='buttonInGroup'
                                    onClick={()=>searchAllGroupProduct('group')}
                            >Все группы</Button>
                        </div>
                        : null}
                    {props.allGroupProduct === 'brand' ?
                        <div className='blockInputMenu'>
                            <div className='inputContainer'>
                                <Form.Control
                                    onChange={addNewBrand}
                                    ref={brandProductRef}
                                    onBlur={onBlurHandler}
                                    onFocus={() => setSwitchIsGroupList(true)}
                                    className='impSkid imp' type="text"
                                    placeholder='название бренда'/>
                                <ul className={(switchIsGroupList && props.brandProductType.length > 0) ? 'inputContainer_list' : null}>
                                    {switchIsGroupList && props.brandProductType.map((brand, key = 1) => {
                                            return (
                                                <li key={key} onClick={() => selectBrandType(brand)}
                                                >{brand._Description}</li>
                                            )
                                        }
                                    )}
                                </ul>
                            </div>
                            <Button variant="success"
                                    className='buttonInGroup'
                                    onClick={()=>searchAllGroupProduct('brand')}
                            >Все бренды</Button>
                        </div>
                        : null}
                </div>
            </div>
            {(!props.groupProductArray.length > 0
                && !props.brandProductArray.length > 0
            ) ?
                null :
                <table className='table'>
                    <thead>
                    <tr>
                        <th></th>
                        <th>Название {props.groupProductArray.length > 0 ? ' группы' : ' бренда'}</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.brandProductArray && props.brandProductArray.map((item, key) => {
                            return (
                                <tr key={key}>
                                    <td className='collTable'>{key + 1}.</td>
                                    <td className="colCell">{item._Description}</td>
                                    <td className='iconDelete' onClick={() =>props.deletePosition(item._Description)}></td>
                                </tr>
                            )
                        }
                    )}
                    {props.groupProductArray && props.groupProductArray.map((item, key) => {
                            return (
                                <tr key={key}>
                                    <td className='collTable'>{key + 1}.</td>
                                    <td className="colCell">{item._Description}</td>
                                    <td className='iconDelete' onClick={() =>props.deletePosition(item._Description)}></td>
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

const ProductUsePromo = connect(mapStateToProps, mapDispatchToProps)($ProductUsePromo)

export default ProductUsePromo;