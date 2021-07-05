import React from 'react';
import MenuPromo from "./MenuPromo";
import PromoCode from "./PromoCode";
import {connect} from "react-redux";
import Loader from "./loader";


const mapStateToProps = (state) => ({
    isLoader: state.promo.isLoader,
    createPromo: state.promo.createPromo,
})

const $MainMenu = (props) => {
    return (
        <div className='wrapperBody'>
            {props.isLoader === true ? <Loader/> : null}
            <MenuPromo />
            <PromoCode
                createPromo={props.createPromo}
            />
        </div>
    );
};

const MainMenu = connect(mapStateToProps, null)($MainMenu)

export default MainMenu;