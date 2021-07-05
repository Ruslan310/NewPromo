import {
    FETCH_PROMOCODE_RECEIVED,
    FETCH_PROMOCODE,
    SET_MODAL_MESSAGE,
    SHOW_MODAL,
    CLOSE_MODAL,
    SET_COUNT_PROMO,
    SET_RESTRICTIONS_PROMO,
    SET_GROUP_PRODUCT_TYPE_PROMO,
    SET_BRAND_PRODUCT_TYPE_PROMO,
    SET_ALL_GROUP_PRODUCT,
    SET_GROUP_PRODUCT_ARRAY,
    SET_BRAND_PRODUCT_ARRAY,
    SET_TYPE_MOTIVATION_PROMO,
    SET_PRODUCTS,
    SET_INPUT_COUNT_DISCOUNT,
    SET_INPUT_PERCENT_DISCOUNT,
    SET_GROUP_PRODUCT_FETCH,
    SET_BRAND_PRODUCT_FETCH,
    SET_SEARCH_ALL_GROUP_FETCH,
    SET_SEARCH_ALL_BRAND_FETCH,
    SET_FILTER_ON_MODAL,
    RESET_FILTER_ON_MODAL,
    DELETE_POSITION,
    DELETE_TYPE_POSITION,
} from "../redux/action";

const initialState = {
    isLoader: false,
    statusPromo: null,
    createPromo: null,
    modalMessage: null,
    artCodeProduct: null,
    isModal: false,
    countPromoCode: 1,
    restrictionsPromo: '',
    allGroupProduct: 'all',
    groupProductType: [],
    brandProductType: [],
    groupProductArray: [],
    brandProductArray: [],
    typeMotivationPromo: '',
    products: [],
    inputCountDiscount: null,
    inputPercentDiscount: null,
    groupProductFetch: null,
    brandProductFetch: null,
    searchAllGroupFetch: null,
    searchAllBrandFetch: null,
    typeModal: null,
}
let message = null
export const promoReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_POSITION:
            let arr = []
            if(state.groupProductArray.length > 0){
                arr = state.groupProductArray.filter(item => item._Description !== action.value)
                return {...state, groupProductArray: arr}
            }
            if(state.brandProductArray.length > 0){
                arr = state.brandProductArray.filter(item => item._Description !== action.value)
                return {...state, brandProductArray: arr}
            }
            return state
        case DELETE_TYPE_POSITION:
            let arrType = []
            if(state.products.length > 0){
                arrType = state.products.filter(item => item.code !== action.value)
                return {...state, products: arrType}
            }
            return state
        case SET_FILTER_ON_MODAL:
            let stText = action.value
            let stOnline = action.data === 'group' ? state.searchAllGroupFetch.slice()
                : state.searchAllBrandFetch.slice()
            for (let i = 0; i < stOnline.length; i++) {
                let result = false
                stOnline[i].isFilter = false
                if (stOnline[i]._Description.toLowerCase().includes(stText.toLowerCase())) {
                    result = true
                }
                if (result) {
                    stOnline[i].isFilter = true
                }
            }
            return action.data === 'group' ?
                {...state, searchAllGroupFetch: stOnline} :
                {...state, searchAllBrandFetch: stOnline}
        case RESET_FILTER_ON_MODAL:
            let filterlist = action.data === 'group' ? state.searchAllGroupFetch.slice()
                : state.searchAllBrandFetch.slice()
            for (let i = 0; i < filterlist.length; i++) {
                filterlist[i].isFilter = true
            }
            return action.data === 'group' ?
                {...state, searchAllGroupFetch: filterlist} :
                {...state, searchAllBrandFetch: filterlist}
        case SET_SEARCH_ALL_GROUP_FETCH:
            return {...state, searchAllGroupFetch: action.value}
        case SET_SEARCH_ALL_BRAND_FETCH:
            return {...state, searchAllBrandFetch: action.value}
        case SET_GROUP_PRODUCT_FETCH:
            return {...state, groupProductFetch: action.value}
        case SET_BRAND_PRODUCT_FETCH:
            return {...state, brandProductFetch: action.value}
        case SET_PRODUCTS:
            return {...state, products: action.value}
        case SET_INPUT_COUNT_DISCOUNT:
            return {...state, inputCountDiscount: action.value}
        case SET_INPUT_PERCENT_DISCOUNT:
            return {...state, inputPercentDiscount: action.value}
        case SET_TYPE_MOTIVATION_PROMO:
            return {...state, typeMotivationPromo: action.value}
        case SET_GROUP_PRODUCT_ARRAY:
            return {...state, groupProductArray: action.value}
        case SET_BRAND_PRODUCT_ARRAY:
            return {...state, brandProductArray: action.value}
        case SET_GROUP_PRODUCT_TYPE_PROMO:
            return {...state, groupProductType: action.value}
        case SET_ALL_GROUP_PRODUCT:
            return {...state, allGroupProduct: action.value}
        case SET_BRAND_PRODUCT_TYPE_PROMO:
            return {...state, brandProductType: action.value}
        case SET_COUNT_PROMO:
            return {...state, countPromoCode: action.value}
        case SET_RESTRICTIONS_PROMO:
            return {...state, restrictionsPromo: action.value}
        case CLOSE_MODAL:
            return {...state, isModal: false}
        case SHOW_MODAL:
            return {...state, isModal: true, typeModal: action.value}
        case FETCH_PROMOCODE:
            return {...state, isLoader: true}
        case FETCH_PROMOCODE_RECEIVED:
            if(!action.data){
                message = 'что-то пошло нетак'
            } else {message = ''}
            return {...state, statusPromo: action.data.result,
                createPromo: action.data, isLoader: false, modalMessage: message}
        case SET_MODAL_MESSAGE:
            return {...state, modalMessage: action.message}
        default:
            return state
    }
}