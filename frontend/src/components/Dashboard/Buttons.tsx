import React from 'react';
import Button from "./Button";
import { useSelector } from 'react-redux';


const Buttons = () => {

    const dataButtons = [
        {name: 'departamentos', url: '/departamentos'}, 
        {name: 'funcionarios', url: '/funcionarios'},         
        {name: 'tarefas', url: '/tarefas'},    
    ];

    return <> 
    {
        dataButtons.map((button, k) => <Button key={k} url={button.url} name={button.name}/>)
    }
    </>;
};

export default Buttons;