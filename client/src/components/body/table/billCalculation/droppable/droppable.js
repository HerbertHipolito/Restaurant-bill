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
    
    const addImageToBoard = (food_json) => {
    
        setBoard((board)=>[...board,food_json])

        const foodP = document.getElementById('draggable'+food_json.id)
        foodP.classList.add('vanish')
        
    }
    
    const removeFood = id =>{

        const filteredFood = board.filter( food => { return  food.id !== id })
        setBoard(board => filteredFood)
        const foodP = document.getElementById('draggable'+id)
        foodP.classList.remove('vanish')

    }

    return (
        <>
         <div ref={drop} key={props.index} id={'container'+props.index}  className="container" >
            <p className="title-person">Pessoa {props.index+1}</p>
            <div className="foods-in-container">
                <div className="foods-grid" style={{ 'gridTemplateColumns':board.length===0 || board.length===1 ?'1fr':'1fr 1fr'}} >
                    {
                    board.length!==0?board.map((element)=>{
                        return <div key={element.id} className="foods" >
                                <p>Pedido: {element.food.name} <button className="remove-btn" onClick={e => removeFood(element.id)}>X</button></p> <p>Preço: R$ {element.food.price}   Quantidade: {element.food.amount} </p>
                            </div>
                        }):<p className='no-food-p'>Clique e arraste o pedido até aqui!</p>
                    }
                </div>
                {board.length !== 0?<p className='price-p'>
                    Total a ser pago por essa pessoa é: R$ {board.reduce((accumulator,element)=>{
                        return accumulator + element.food.price
                    },0)} 
                </p>:''}
            </div>
         </div>
        </>    
    )

}