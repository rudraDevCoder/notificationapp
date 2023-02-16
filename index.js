const Notification = (props) => {
  //  Write your code here.
  const { className, imageUrl, name } = props;
  return (
    <button className={`note ${className}`}>
      <img className="image" src={`${imageUrl}`} />
      <p className="para"> {name}</p>
    </button>
  );
};

const element = (
  //  Write your code here.
  <div className="notification-container">
    <h1 className="notification-heading">Notifications</h1>
    <Notification
      className="note1"
      imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      name="Information Message"
    />
    <Notification
      className="note2"
      imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      name="Success Message"
    />
    <Notification
      className="note3"
      imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      name="Warning Message"
    />
    <Notification
      className="note4"
      imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      name="Error Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
