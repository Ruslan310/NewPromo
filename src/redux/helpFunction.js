/** получение названия продукции по арткоду*/
export const getArtcode = async (action) => {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(action)
    }
    try {
        let result = fetch(process.env.REACT_APP_SAGA_API + 'getProduct', options)
            .then(response => response.json());
        return new Promise(resolve => resolve(result))
    } catch (error) {
        console.log('error', error)
    }
}
/** конвертация буфера */
export const funConvert = (data) => {
    let convertResult = ''
    for (let i=0; i < data.length; i++) {
        let temp = data[i].toString(16);
        if (temp.length < 2) {
            temp = '0' + temp
        }
        convertResult += temp;
    }
    return convertResult
}

/** получение группы товаров по названию (название и idRef)*/
export const getGroupProduct = async (action) => {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(action)
    }
    try{
        let result = fetch(process.env.REACT_APP_SAGA_API+'getGroupProduct', options)
            .then(res => res.json())
        return new Promise( res => res(result))
    }catch (error){
        console.log('error', error)
    }
}

/** получение бренда по названию (название и idRef)*/
export const getProductBrand = async (action) => {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(action)
    }
    try {
        let result = fetch(process.env.REACT_APP_SAGA_API + 'getProductBrand', options)
            .then(response => response.json());
        return new Promise(resolve => resolve(result))
    } catch (error) {
        console.log('error', error)
    }
}
