import React,{useState,useEffect} from'react';
import './Calculation.css';

function selectContent(e) {

    e.preventDefault();
    
    const button = e.target.name;

    var content1 = document.getElementById('content1')
    var content2 = document.getElementById('content2')
    
    if(button ==='split-equally'){
        content2.classList.add('disapper');
        content1.classList.remove('disapper');
    }
    else{
        content1.classList.add('disapper');
        content2.classList.remove('disapper');
    }
}

function calculateAllexpenses(orders){

    return orders.reduce((acumulation,food) => {
         return acumulation += food.price
    },0)

}


const handleDraggable = () =>{

    const draggables = document.querySelectorAll('.draggable');
    const containers = document.querySelectorAll('.container');

    draggables.forEach(draggable => {

        draggable.addEventListener('dragstart',() => {
            draggable.classList.add('dragging');
        })

        draggable.addEventListener('dragend',() => {
            draggable.classList.remove('dragging');
        })

    })

    console.log(containers,draggables)

    containers.forEach(container =>{
        console.log(container)
        container.addEventListener('dragover',(e)=>{
            e.preventDefault();
            const draggable = document.querySelector('.dragging');
            container.appendChild(draggable)   
        })
    })

}

export default function Calculation(props){

    const [peopleArray,peopleArraySet] = useState([]);


    useEffect(
        ()=>{
    
            var people = []
            for(let i = 0; i < props.tableDetail.people_number; i++){
                people.push([`person${i}`])
            }
            peopleArraySet([...people])
            handleDraggable()


        }
    ,[props.tableDetail])

    return (

        <section id="calculate-bill-section" >

            <div id="calculate-bill-div">
                <div id="head-btn">
                    <button name="split-equally" onClick={e=>selectContent(e)}>Dividir igualmente</button>
                    <button name="select-split" onClick={e=>selectContent(e)}>Selecionar comidas</button>
                </div>

                <div id="content1" className = 'disapper'>
                    {props.tableDetail.people_number!==0?<p>Dividindo o valor gasto 
                    para {props.tableDetail.people_number}: {calculateAllexpenses(props.tableDetail.orders)/props.tableDetail.people_number} R$
                    </p>:<p>0 Pessoas registradas</p>}
                </div>
                <div id="content2" className = 'disapper'>
                    <div id="food-list">
                        {
                            props.tableDetail.orders.map((food,index)=>{
                                return <p key={food.name} className='draggable' draggable='true'>{food.name}: {food.price} R$</p>
                            })
                        }
                    </div>
                    <div id="people-list">
                        {console.log(peopleArray)}    
                        {
                            peopleArray?peopleArray.map((person,index)=>{
                                return <p key={person}  className="container">Pessoa {index+1}</p>
                            }):null?handleDraggable():'loading...'
                        }
                    </div>
                </div>
            </div>
            
        </section>

    )

}