import React,{useState} from 'react';
import {useDrop} from 'react-dnd'



export default function Droppable(props){

    const [board,setBoard] = useState([]);
    const [{isOver},drop] = useDrop(()=>({
        accept:'p',
        drop:((item)=>addImageToBoard(item,board)),
        collect:(monitor)=>({
            isOver:!!monitor.isOver(),
        })
    }))
    
    const addImageToBoard = (id) => {
        //console.log(props.tableDetail.orders[id.id])
        //console.log('boradr',props.tableDetail.orders[id.id])
        setBoard((board)=>[...board,id])
        
       // con.appendChild(newP.appendChild(text))
    }    

    return (
        <>
         <div ref={drop} key={props.index} id={'container'+props.index}  className="container" >
            <p className="title-person">Pessoa {props.index+1}</p>
            <div className="foods-in-container">
                {
                board.map((element)=>{
                    return <p key={element.id} >Pedido: {element.food.name} Preço: {element.food.price} R$  Quantidade: {element.food.amount}</p>
                    })
                }
            </div>
         </div>
        </>    
    )

}