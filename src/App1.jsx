import React, {useState} from 'react'
import { object } from './data1'
import './App.css'
import Notification from './components/Notification'

function App1() {
  const [importData, setImportData] = useState({object})

  function toggleActiveObject(index){
    let newObjectArray = [...importData.object];
    newObjectArray.object[index].toggled
    ? newObjectArray.object[index].toggled = true
    : newObjectArray.object[index].toggled = false
    setImportData({...importData, object: newObjectArray})
  }

  function toggleActiveClass(index){
    if(importData.object[index].toggled){
      return "boxTest active"
    } else {
      return "boxTest inactive"
    }
  }


  return (
    <>
      {importData.object.map((note, index) => {
        return (
          <Notification
            id={note.id}
            index={index} 
            key={index}
            name={note.name}
            title={note.title}
            image={note.image}
            click={() => toggleActiveObject(index)}
            cname={toggleActiveClass(index)}
            message={note.message}
            action={note.action}
            timeOfMessage={note.timeOfMessage}
            importdata={importData}
            setimportdata={setImportData}
            importobject={importData.object}
          />
        )
      })}
    </>
  )
}

export default App1