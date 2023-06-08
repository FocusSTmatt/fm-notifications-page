import '../styles/header.css'
import { useRecoilValue } from 'recoil'
import { notificationValue } from '../atoms'

    function Header({total}) {
    const value = useRecoilValue(notificationValue)
    return (
        <div className='header-ctn'>
            <div className='header'>
                <h3>Notifications</h3>
                <p>{total}</p>
            </div>
            <h5>Mark all as Read</h5>
        </div>
    )
    }

export default Header