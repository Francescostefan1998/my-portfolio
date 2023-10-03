import "./myNavBar.css";

const MyNavBar = () => {
  return (
    <div id="myNavBar">
      <div className="my-display-flex my-NavBar-left-component">Home</div>
      <div className="my-display-flex my-NavBar-central-component">
        <div className="inner-navbar-sections ">Services</div>
        <div className="inner-navbar-sections">My Projects</div>
        <div className="inner-navbar-sections">About</div>
      </div>
      <div className="my-display-flex my-NavBar-right-component">
        <div className="button-home">
          <div className="button-home--contact w-button">Get in touch</div>
        </div>
      </div>
    </div>
  );
};

export default MyNavBar;
