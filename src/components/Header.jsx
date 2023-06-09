import '../styles/header.css'


    function Header({total, mark}) {
    
    return (
        <div className='header-ctn'>
            <div className='header'>
                <h3>Notifications</h3>
                <p>{total}</p>
            </div>
            <h5 onClick={mark}>Mark all as Read</h5>
        </div>
    )
    }

export default Header