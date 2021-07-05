import React from 'react';
import '../style/title.css'
import {connect} from "react-redux";
import Excel from "./reportExel";

const mapStateToProps = (state) => ({
    createPromo: state.promo.createPromo,
})

const $Title = (props) => {
    //
    // const downloadHandler = () =>{
    //     const wb = XLSX.utils.book_new();   // создаём книгу
    //     const ws = XLSX.utils.json_to_sheet(props.createPromo)   // создаём таблицу с массива
    //     ws['!cols'] = calcColumnWidth(props.createPromo);    // высчитываем ширину столбцов
    //     XLSX.utils.book_append_sheet(wb, ws, "Report");   // подкидываем инфу в книгу
    //     XLSX.writeFile(wb, 'Report.xlsx');    // запись (триггерит скачивание)
    // }
    //
    // const calcColumnWidth = (array) => {
    //     let lengths = []
    //     for (let key in array[0]) {
    //         let length = key.toString().length
    //         for (let i = 0; i < array.length; i++) {
    //             let current = array[i][key].toString().length
    //             if (current > length) length = current
    //         }
    //         lengths.push({wch: length})
    //     }
    //     return lengths
    // }

    const obj = {
        columns: ['Промокод'],
        data: [[1, 2]]}

    return (
        <div className='wraperTitle'>
                <p className='textTitle'>Создание промокодов</p>
            <Excel
                dataSet={obj.data}
                createPromo={props.createPromo}
            />
        </div>
    );
};

const Title = connect(mapStateToProps, null)($Title)

export default Title;