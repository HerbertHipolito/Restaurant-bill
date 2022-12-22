import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import DarkExample from './dataTable/dataTable';
import Calculation from './billCalculation/Calculation';
import './tableDetail.css'

export default function TableDetail(){

    const {id} = useParams();
    const [tableDetail,setTableDetail] = useState('');
    const [errorMessage,setErrorMessage] = useState('Carregando');

    useEffect(() => {   

        fetch(`http://localhost:3500/table/${id}`)
        .then(res=>res.json())
        .then(res=>{
            res.error?setErrorMessage(res.error):setTableDetail(res.data);
        })
       
    },[id])

    return (
    <>
    <section id="section-table">

        <p id="section-title">Numero da mesa: {tableDetail.number}</p>

        { tableDetail?<DarkExample orders={tableDetail.orders} />:errorMessage}

        <p id="all-cost">Total gasto:  
        {tableDetail?tableDetail.orders.reduce((accumulator,food) => {
            return accumulator += food.price
        },0)+' R$':errorMessage}
        </p>

    </section>
    {tableDetail?<Calculation tableDetail = {tableDetail} />:errorMessage}
    </>
)}