import React from "react";
import '../style/modal.css'
import {Form} from "react-bootstrap";
import {connect} from "react-redux";
import {
    closeModal, setBrandProductArray,
    setBrandProductType,
    setGroupProductArray,
    setGroupProductType,
    setModalMessage
} from "../redux/action";

const mapStateToProps = (state) => ({
    modalMessage: state.promo.modalMessage,
    searchAllGroupFetch: state.promo.searchAllGroupFetch,
    searchAllBrandFetch: state.promo.searchAllBrandFetch,
    groupProductArray: state.promo.groupProductArray,
    brandProductArray: state.promo.brandProductArray,
    isModal: state.promo.isModal,
    typeModal: state.promo.typeModal,
})
const mapDispatchToProps = ({
    closeModal,
    setGroupProductType,
    setBrandProductType,
    setGroupProductArray,
    setBrandProductArray,
    setModalMessage
})

const $Modal = (props) => {
    let whatTypeModal
    let whatArrayModal
    if(props.typeModal === 'group'){
        whatTypeModal = props.searchAllGroupFetch
        whatArrayModal = props.groupProductArray
    } else {
        whatTypeModal = props.searchAllBrandFetch
        whatArrayModal = props.brandProductArray
    }
    const closeItModal = () => {
        props.closeModal()
    }

    const searchWhatGroup = (e) => {

    }

    const selectOnModal = (post) => {
        if (whatArrayModal.find(item => item._Description === post._Description)) {
            return props.setModalMessage('такая группа уже добавлена')
        }
        let arr = whatArrayModal.slice()
        if(props.typeModal === 'group'){
            props.setGroupProductArray(arr)
        } else {
            props.setBrandProductArray(arr)
        }
        arr.push(post)
        props.setGroupProductType([])
        props.setBrandProductType([])
        closeItModal()
    }

    return (
        <div className={props.isModal ? 'services active' : 'services'}
             onMouseDown={closeItModal}>
            <div className={props.isModal ? 'services_content active' : 'services_content'}
                 onMouseDown={e => e.stopPropagation()}>
                <div className='services_text'>
                    <Form.Control type="text"
                                  onChange={(e) => searchWhatGroup(e)}
                                  placeholder='название группы'
                    />
                    <hr className='hrModal'/>
                    <ul className='scroll'>
                        {whatTypeModal && whatTypeModal.map((post, key) => {
                            return (
                                <li onClick={() => selectOnModal(post)} className='scrollProduct'
                                    key={key}>{post._Description}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const Modal = connect(mapStateToProps, mapDispatchToProps)($Modal)

export default Modal