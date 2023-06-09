import React, {useState} from 'react'
import Notification from './components/Notification'
import './App.css'
import Header from './components/Header'
import {data} from './data'

function App() {

    const [appState, setAppState] = useState({
        objects: [
            {id: 1, toggled: true}, {id: 2, toggled: true}, {id: 3, toggled: true},
            {id: 4, toggled: false}, {id: 5, toggled: false}, {id: 6, toggled: false},
            {id: 7, toggled: false},
        ]
    });

    const [total, setTotal] = useState(3);

    function toggleActiveObject(index){
        let arrayCopy = [...appState.objects];
        arrayCopy[index].toggled
        ? arrayCopy[index].toggled = false
        : arrayCopy[index].toggled = true;
        setAppState({...appState, objects: arrayCopy});
        getTotal();
    }

    function toggleMarkAllRead(){
      let arrayCopy = [...appState.objects];
      arrayCopy.forEach(object => object.toggled = false)
      setAppState({...appState, objects: arrayCopy});
      setTotal(0);
    }

    function toggleActiveNote(index){
        if(appState.objects[index].toggled){
            return "notificationCtn active"
        } else {
            return "notificationCtn inactive"
        }
    }

    function toggleDot(index){
        if(appState.objects[index].toggled){
          return "dot-active"
      } else {
          return "dot-inactive"
      }
    }
    

    function getTotal(){
        const totalTrue = appState.objects.filter(note => note.toggled).length
        setTotal(totalTrue)
    }

  return (
    <div className='App'>
        <Header 
          total={total}
          mark={toggleMarkAllRead} 
        />
        {data.map((note, index) => {
          return (
            <Notification
                key={index}
                name={note.userName}
                image={note.userImage}
                action={note.userAction}
                message={note.message}
                notetitle={note.title}
                timeof={note.timeOfMessage} 
                commentedPhoto={note.commentedPhoto}
                click={() => toggleActiveObject(index)}
                cname={toggleActiveNote(index)}
                id={index}
                dot={toggleDot(index)}
          />
          )
        })}
    </div>
  )
}

export default App

