import './App.css'
import { useState, useRef, forwardRef, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import Header from './components/Header'
import MarkWebber from './assets/images/avatar-mark-webber.webp'
import AngelaGray from './assets/images/avatar-angela-gray.webp'
import JacobThompson from './assets/images/avatar-mark-webber.webp'
import RizkyHasanuddin from './assets/images/avatar-rizky-hasanuddin.webp'
import KimberlySmith from './assets/images/avatar-kimberly-smith.webp'
import ImageChess from './assets/images/image-chess.webp'
import NathanPeterson from './assets/images/avatar-nathan-peterson.webp'
import AnnaKim from './assets/images/avatar-anna-kim.webp'
import { notificationUsers, notificationValue } from './atoms'
import Notification from './components/Notification'
import { v4 as uuidv4 } from 'uuid'


function App() {
  const notificationRef = useRef([null, null, null])
  const [userActive, setUserActive] = useRecoilState(notificationUsers)
  const [notificationData, setNotificationData] = useState([
    { name: "Mark Webber", isClicked: false },
    { name: "Angela", isClicked: false },
    { name: "Justin", isClicked: false },
  ])
  
  // const handleClick = (e) => {
  //     notificationData.map((item, index) => {
  //       console.log(e.target.id)
  //       console.log(index)
  //     if(e.target.id == index){
  //       setUserActive({[index]: true})
  //     }
  //   })
  //   return userActive
  // }

  const handleClick = (e, index) => {
    console.log(e.target.id)
    console.log(notificationRef[index].current.id)
  }

  useEffect(() => {
    notificationData.filter((item, index) => {
      console.log(item.isClicked)
      
    })
  }, [userActive])
    
  const handleClassChange = (index) => {
   const data = notificationData[index].isClicked 
    if(data === true){
      console.log("Testing 123")
    }
  }
    
    // console.log(e.target.id)
    // console.log(notificationRef.current.id)
    // if(e.target.id === notificationRef.current.id) {
    // notificationRef.current.style.background = "red"
    // const uuid = event.target.id
    // if(uuid === event.target.id){
    //   console.log(notificationData)
    //   myRef.current.style.background = "red"
    // }
//   }
// } 
  
  return (
    <>
      <Header />
     { notificationData.map((notification, index) => {
      return (
        <Notification
          myRef={notificationRef[index]}
          handleClick={() => handleClick(event)}
          key={uuidv4()}
          id={index}
          name={notification.name}
          isClicked={notification.isClicked} />
      )
     })}
    </>
  )
}

export default App
