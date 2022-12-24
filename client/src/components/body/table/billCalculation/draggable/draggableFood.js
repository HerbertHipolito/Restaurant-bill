import React from 'react';
import {useDrag} from 'react-dnd';

export default function DraggableFood(props){

    const [{isDragging},drag] = useDrag(()=>({
        type:"p",
        item:{id:props.index,food:props.food},
        collect:(monitor)=>({
            isDragging:!!monitor.isDragging(),
        })
    }))

    return(
        <p className='draggable' key={props.index} ref={drag} style={{border:isDragging ?'5px solid pink':'0px'}}>{props.food.name}: {props.food.price} R$</p>

    )

}