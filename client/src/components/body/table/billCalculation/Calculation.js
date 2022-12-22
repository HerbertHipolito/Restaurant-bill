import React,{useState,useEffect} from'react';
import './Calculation.css';

export default function Calculation(props){

    const [peopleArray,peopleArraySet] = useState(null);

    useEffect(
        ()=>{
            var people = []
            for(let i = 0; i < props.tableDetail.people_number; i++){
                people.push([`person${i}`])
            }
            peopleArraySet(people)
        }
    ,[props.tableDetail])

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
                            props.tableDetail.orders.map(food=>{
                                return <p key={food.name} className='food-p'>{food.name}: {food.price} R$</p>
                            })
                        }
                    </div>
                    <div id="people-list">
                        {
                            peopleArray?peopleArray.map(person=>{
                                return <p key={person} className="people-p">Pessoa 1</p>
                            }):'Loading...'
                        }
                    </div>
                    <p>content2</p>
                </div>
            </div>
        </section>

    )

}