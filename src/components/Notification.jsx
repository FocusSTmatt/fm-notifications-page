import { useState } from 'react'

    function Notification({userImage, userName, userAction, title}) {
    const [isActive, setIsActive] = useState({ isActive: null});

    return (
        <div>
            <div 
                className='userAccount-ctn'>   
                <img src={userImage} />
                <div className='userAccount'>
                    <span>{userName}</span> 
                    <span>{userAction}</span> 
                    <span>{title}</span> 
                </div>
            </div>
        </div>
    )
    }

export default Notification