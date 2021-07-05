import React from 'react';
import {Modal} from "react-bootstrap";
import {setModalMessage} from "../redux/action";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    modalMessage: state.promo.modalMessage,
})
const mapDispatchToProps = ({
    setModalMessage
})

const $ModalMessage = (props) => {
    return (
        <div>
            <Modal
                size=""
                show={!!props.modalMessage}
                onHide={() => props.setModalMessage('')}
                aria-labelledby="contained-modal-title-vcenter">
                <Modal.Body className='modalMessageText'>{props.modalMessage}</Modal.Body>
            </Modal>
        </div>
    );
};

const ModalMessage = connect(mapStateToProps, mapDispatchToProps)($ModalMessage)

export default ModalMessage;