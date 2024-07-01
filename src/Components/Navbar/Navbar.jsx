import './Navbar.css'
import menuIcon from '../../assets/menu-icon.png'

const Navbar = () => {
  return (
    <div className='nav-page'>
      <div className="nav" id='nav'>
      <div className="nav-container">
        <ul className="nav-menu">
          <li className='nav-menu-element' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Home</li>
          <li className='nav-menu-element' onClick={() => window.scrollTo({top: 950, behavior: 'smooth'})}>Explore</li>
          <li className='nav-menu-element' onClick={() => window.scrollTo({top: 1900, behavior: 'smooth'})}>About</li>
          <li className='nav-menu-element' onClick={() => window.scrollTo({top: 2800, behavior: 'smooth'})}>Pre-Own</li>
        </ul>
      </div>
        </div>
        <div className="logo-container" id='logo'>
          <div className="nav-logo" href="">PORSCHE</div>
        </div>
        <img src={menuIcon} alt="menu" className='menu-icon' onClick={closeMenu} />
    </div>
  )
}

function closeMenu() {
  var x = document.getElementById("nav");
  var y = document.getElementById("logo")
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
  if (y.style.display === "none") {
    y.style.display = "flex";
  } else {
    y.style.display = "none";
  }
}





document.addEventListener('animationstart', function (e) {
  if (e.animationName === 'fade-in') {
      e.target.classList.add('did-fade-in');
  }
});

document.addEventListener('animationend', function (e) {
  if (e.animationName === 'fade-out') {
      e.target.classList.remove('did-fade-in');
   }
});

export default Navbar