import React,{useState,useEffect} from "react";
import './home.css'

const activeAnimation = () => {

    const currentPosition = document.documentElement.scrollTop;
  
    if(currentPosition<=1080){
      var descriptionDiv = document.getElementById('description');
      descriptionDiv.classList.add('active'); 
    }else{
      descriptionDiv.classList.add('');
    }
  
  }

export default function Home(){

    useEffect(()=>{
        activeAnimation()
    },[])

    return <>
        <div id="description">
            <p id='description-p1'>No myBILL, </p>
            <p id='description-p2'>Você pode verificar e calcular a conta da sua mesa entre seu amigos de forma rápida.</p>
        </div>
    </>

}