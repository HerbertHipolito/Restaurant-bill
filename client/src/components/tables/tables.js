import React,{useState,useEffect} from "react";
import './tables.css';
import {Link} from 'react-router-dom';

export default function Table(){

    const [tables,setTables] = useState([])
    const [errorMessage,setErrorMessage] = useState('Loading tables')

    useEffect(() => {

        fetch('http://localhost:3500/')
        .then(res => res.json())
        .then(res =>{
            res.error?setErrorMessage(res.error):setTables(res.data);
        })

    },[])

    return <section id="table-section"> 
        <ul>
            {
            tables?
            tables.map(table=>{
                return(
                    <Link to={`/table/${table._id}`} style={{ textDecoration: 'none' }}>
                    <li key={table._id}>
                        <p className="table-title">Número da mesa:</p>
                        <p className='table-number'>{table.number}</p>
                        <div>
                            <p>qtd Pessoas: {table.people_number}</p>
                            <p>{table.people_number===0?<p className="available-table" >Disponivel</p>:<p className="no-available-table">Não disponível</p>}</p>
                        </div>

                    </li>
                    </Link>
                    )
                }):<p>Something went wrong:{errorMessage}</p>
            }
        
    </ul>
    </section>

}