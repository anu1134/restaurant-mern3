const Header = () => {
  return (
    <div className="nav-bar">
      <div>
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000"
          alt="res-logo"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li> Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
