export const Title = () => {
  return (
    <a href="/">
      <h1 style={{ color: "tomato" }}>Food Villa</h1>
    </a>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      {/* <a href="/">        
          <img src="download.png" alt="logo" className="logo" />
        </a> */}
      <Title />
      <div className="nav-list">
        <ul style={{ color: "green" }}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
