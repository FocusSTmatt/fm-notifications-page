import React from 'react'

function Notification({handleClick, id, initials, myRef}) {

    // const handleUpdate = (user) => {
    //     setUserTest({...userTest, [user]: "active" })
    //     console.log(userTest)
    //   }

  return (
    <div 
        onClick={handleClick}
        className='boxTest'
        id={id}
        ref={myRef}
    >

    </div>
  )
}

export default Notification