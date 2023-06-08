import React, {useState} from 'react'
import { object } from '../data1'

function Notification({image, action, id, message, title, cname, click, index, importobject, importdata, setimportdata}) {

  function toggleActiveObject(index){
    let newObjectArray = [...importobject];
    newObjectArray.object[index].toggled
    ? newObjectArray.object[index].toggled = true
    : newObjectArray.object[index].toggled = false;
    setimportdata({...importdata, object: newObjectArray})
  }

  
  return (
    <>
      {object.map((note, index) => {
        return (
          <div 
            key={index}
            onClick={() => toggleActiveObject(index)}
            className={cname}>

          </div>
        )
      })}
    
    </>
  )
}

export default Notification