import {
    FETCH_PROMOCODE_RECEIVED,
    FETCH_PROMOCODE,
} from "../redux/action";

import {put, takeLatest, all} from 'redux-saga/effects';

// const authCheck = async () => {
//     let userToken = localStorage.getItem('currentUserToken');
//     let options = {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': userToken,
//         }
//     }

/**saga getPromo */
function* fetchPromoCode(action) {
    let userToken = localStorage.getItem('currentUserToken');
    console.log(userToken)
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': userToken,
        },
        body: JSON.stringify(action.value)
    }
    let data = yield fetch(process.env.REACT_APP_SAGA_API+'creatPromo', options)
        .then(response => response.json());
    console.log('data', data)
    yield put({type: FETCH_PROMOCODE_RECEIVED, data: data});
}

function* fetchPromocodWatcher() {
    yield takeLatest(FETCH_PROMOCODE, fetchPromoCode)
}

export default function* rootSaga() {
    yield all([
        fetchPromocodWatcher()
    ])
}
  