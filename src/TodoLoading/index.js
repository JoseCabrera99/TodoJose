import React from "react";
import './TodoLoading.css'

function TodoLoading(){
    return(
        <div className="LoadingTodo-Container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-Text"> Cargando... </p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
    );
}

export {TodoLoading};