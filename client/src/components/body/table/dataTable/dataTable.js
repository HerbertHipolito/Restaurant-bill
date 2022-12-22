import Table from 'react-bootstrap/Table';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dataTable.css'

export default function DarkExample(props){
    return (

        <Table striped bordered hover size="sm" id="data-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Pedido</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {props.orders.map((food,index) =>{
                    return (
                                <tr key={food._id}>
                                    <td>{index}</td>
                                    <td>{food.name}</td>
                                    <td>{food.price}</td>
                                    <td>{food.amount}</td>
                                    <td>{food.description}</td>
                                </tr>
                            )}
                        )}
                </tbody>
            </Table>

    )
}