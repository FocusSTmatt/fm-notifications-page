import { useRef, useState, useEffect } from 'react'
import MarkWebberImage from '../assets/images/avatar-mark-webber.webp'
import '../styles/userAccount.css'
import Notification from './Notification';
import { notificationData } from '../notificationData';


function getUserNotification() {
    
    const handleNotificationClick = (index) => {
        // e.target.children.classList.toggle('active')
        console.log(index)
    }

    const getNotificationData = notificationData.map((item, index) => {

        return (
            <>
            <Notification
                userImage="userImage"
                userName="userName"
                userAction="userAction"
                title="title" />
            </>
        )
    })
    
    return (
        <>
        {getNotificationData}
        </>
    )
}

export default getUserNotification