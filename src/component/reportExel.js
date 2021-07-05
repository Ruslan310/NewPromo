import React from 'react'
import ReactExport from "react-export-excel";
import {Button} from "react-bootstrap";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const Excel = (props) => {
    let result
    if(props.createPromo){
        result = props.createPromo.map(el => {
            return {el}
        })
    }
    return (
        <ExcelFile element={<Button
            variant="secondary"
        >Выгрузить в Excel
        </Button>}
                   filename="Список созданых промокодов">
            <ExcelSheet data={result} name="Employees">
                <ExcelColumn label="Промокод" value="el"/>
            </ExcelSheet>
        </ExcelFile>
    )
}
export default Excel