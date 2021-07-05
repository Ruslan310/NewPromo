export const FETCH_PROMOCODE_RECEIVED = 'FETCH_APTEKS'
export const FETCH_PROMOCODE = 'FETCH_PROMOCOD'
export const SET_MODAL_MESSAGE = 'SET_MODAL_MESSAGE'
export const SHOW_MODAL = 'SHOW_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const SET_COUNT_PROMO = 'SET_COUNT_PROMO'
export const SET_RESTRICTIONS_PROMO = 'SET_RESTRICTIONS_PROMO'
export const SET_GROUP_PRODUCT_TYPE_PROMO = 'SET_GROUP_PRODUCT_TYPE_PROMO'
export const SET_BRAND_PRODUCT_TYPE_PROMO = 'SET_BRAND_PRODUCT_TYPE_PROMO'
export const SET_ALL_GROUP_PRODUCT = 'SET_ALL_GROUP_PRODUCT'
export const SET_GROUP_PRODUCT_ARRAY = 'SET_GROUP_PRODUCT_ARRAY'
export const SET_BRAND_PRODUCT_ARRAY = 'SET_BRAND_PRODUCT_ARRAY'
export const SET_TYPE_MOTIVATION_PROMO = 'SET_TYPE_MOTIVATION_PROMO'
export const SET_PRODUCTS = 'SET_PRODUCTS'
export const SET_INPUT_COUNT_DISCOUNT = 'SET_INPUT_COUNT_DISCOUNT'
export const SET_INPUT_PERCENT_DISCOUNT = 'SET_INPUT_PERCENT_DISCOUNT'
export const SET_GROUP_PRODUCT_FETCH = 'SET_GROUP_PRODUCT_FETCH'
export const SET_BRAND_PRODUCT_FETCH = 'SET_BRAND_PRODUCT_FETCH'
export const SET_SEARCH_ALL_GROUP_FETCH = 'SET_SEARCH_ALL_GROUP_FETCH'
export const SET_SEARCH_ALL_BRAND_FETCH = 'SET_SEARCH_ALL_BRAND_FETCH'
export const SET_FILTER_ON_MODAL = 'SET_FILTER_ON_MODAL'
export const RESET_FILTER_ON_MODAL = 'RESET_FILTER_ON_MODAL'
export const DELETE_POSITION = 'DELETE_POSITION'
export const DELETE_TYPE_POSITION = 'DELETE_TYPE_POSITION'


export const fetchPromoCode = (value) => ({
    type: FETCH_PROMOCODE,value
})
export const setModalMessage = (message) => ({
    type: SET_MODAL_MESSAGE,message
})
export const ShowModal = (value) => ({
    type: SHOW_MODAL,value
})
export const closeModal = () => ({
    type: CLOSE_MODAL
})
export const setCountPromo = (value) => ({
    type: SET_COUNT_PROMO,value
})
export const setRestrictionsPromo = (value) => ({
    type: SET_RESTRICTIONS_PROMO,value
})
export const setGroupProductArray = (value) => ({
    type: SET_GROUP_PRODUCT_ARRAY,value
})
export const setBrandProductArray  = (value) => ({
    type: SET_BRAND_PRODUCT_ARRAY,value
})
export const setAllGroupProduct = (value) => ({
    type: SET_ALL_GROUP_PRODUCT,value
})
export const setTypeMotivationPromo = (value) => ({
    type: SET_TYPE_MOTIVATION_PROMO,value
})
export const setProducts = (value) => ({
    type: SET_PRODUCTS,value
})
export const setInputCountDiscount = (value) => ({
    type: SET_INPUT_COUNT_DISCOUNT,value
})
export const setInputPercentDiscount = (value) => ({
    type: SET_INPUT_PERCENT_DISCOUNT,value
})
export const setGroupProductFetch = (value) => ({
    type: SET_GROUP_PRODUCT_FETCH,value
})
export const setBrandProductFetch = (value) => ({
    type: SET_BRAND_PRODUCT_FETCH,value
})
export const setGroupProductType = (value) => ({
    type: SET_GROUP_PRODUCT_TYPE_PROMO,value
})
export const setBrandProductType = (value) => ({
    type: SET_BRAND_PRODUCT_TYPE_PROMO,value
})
export const setSearchAllGroupFetch = (value) => ({
    type: SET_SEARCH_ALL_GROUP_FETCH,value
})
export const setSearchAllBrandFetch = (value) => ({
    type: SET_SEARCH_ALL_BRAND_FETCH,value
})
export const setFilterOnModal = (value, data) => ({
    type: SET_FILTER_ON_MODAL,value, data
})
export const resetFilterOnModal = (value, data) => ({
    type: RESET_FILTER_ON_MODAL,value, data
})
export const deletePosition = (value) => ({
    type: DELETE_POSITION, value
})
export const deleteTypePosition = (value) => ({
    type: DELETE_TYPE_POSITION, value
})