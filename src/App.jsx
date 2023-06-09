import React, {useEffect, useState} from 'react'
import Notification from './components/Notification'
import './App.css'
import Header from './components/Header'
import {data} from './data'

function App() {

    const [appState, setAppState] = useState({
        objects: [
            {id: 1, toggled: false}, {id: 2, toggled: false}, {id: 3, toggled: false},
            {id: 4, toggled: false}, {id: 5, toggled: false}, {id: 6, toggled: false},
            {id: 7, toggled: false},
        ]
    });
    const [total, setTotal] = useState();

    
    function toggleActiveObject(index){
        let arrayCopy = [...appState.objects];
        arrayCopy[index].toggled
        ? arrayCopy[index].toggled = false
        : arrayCopy[index].toggled = true;
        setAppState({...appState, objects: arrayCopy});
        getTotal();
    }

    function toggleActiveNote(index){
        if(appState.objects[index].toggled){
            return "boxTest active"
        } else {
            return "boxTest inactive"
        }
    }

    

    function getTotal(){
        const totalTrue = appState.objects.filter(note => note.toggled).length
        setTotal(totalTrue)
    }

  return (
    <div>
        <Header total={total}/>
        {appState.objects.map((element, index) => {
            return (
                <div 
                    key={index} 
                    onClick={() => toggleActiveObject(index)} 
                    className={toggleActiveNote(index)}
                >
                   
                </div>
            )
        })}
    </div>
  )
}

export default App

// {notificationData.map((item, index) => {
//     return (
//         <Notification 
//             key={index} 
//             // toggleIsClicked={toggleIsClicked[index]}
//             handleClick={() => toggleIsClicked(item.id)}
//             id={index}
//             total={total}/> 
//     )    
// })}