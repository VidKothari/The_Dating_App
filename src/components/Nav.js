import whitelogo from '../images/tinder_logo_white.png'
import colorlogo from '../images/color-logo-tinder.png'

const Nav = ({minimal, authToken, setShowModal, showModal}) => {

    const handleClick = () => {
        setShowModal(true)
    }

    return (
        <nav>
            <div className='logo-container'>
                <img className='logo' src={minimal ? whitelogo : colorlogo} alt='logo' />
            </div>

            {!authToken && <button className='nav-button' disabled={showModal} onClick={handleClick}>Log In</button>}
        </nav>
    )
}

export default Nav