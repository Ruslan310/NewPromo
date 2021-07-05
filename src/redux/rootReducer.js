import {combineReducers} from "redux";
import {promoReducer} from "./promoReducer";

export const rootReducer = combineReducers({
    promo: promoReducer
})