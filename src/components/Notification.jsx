import '../styles/notification.css'
import { useRef } from 'react'



function Notification({commentedPhoto, dot, id, titleref, timeof, name, cname, click, image, action, notetitle, message}) {
  const idArray = ["one", "two", "three", "four", "five", "six", "seven"]
  return (
    <>
      <div className='main-ctn'>
      <div className={cname} onClick={click}>
        <img src={image} />
        <div className='textCtn'>
          <span className='name'>{name}</span>
          <span className='action'>{action}</span>
          <span id={idArray[id]} className='title'>{notetitle}</span>
          <span className={dot}>🔴</span>
          <p className='time'>{timeof}</p>
          <p id={idArray[id]} className='message'>{message}</p>
        </div>
        <img id={idArray[id]} className='commentedPhoto' src={commentedPhoto} />
      </div>
      </div>
    </>
  )
}

export default Notification
