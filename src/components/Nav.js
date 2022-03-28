import airbnbLogo from '../images/airbnb-logo.png'

export default function Nav () {
    return (
        <nav className='nav-bar'>
            <img className='airbnb-logo' src={airbnbLogo} alt='airbnb logo'/>
        </nav>
    )
}