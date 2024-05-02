import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-logo'>my website</div>
      <ul className='nav-menu'>
        <li>home</li>
        <li>explore</li>
        <li>about me</li>
        <li className='nav-contact'>social media</li>
      </ul>
    </div>
  )
}

export default Navbar