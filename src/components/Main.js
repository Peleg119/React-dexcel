import groupPhoto from "../images/groupPhoto.png";


const title = 'Online experience'


export default function Main() {
  return (
    <div className="main-container">
      <div className="image-container">
        <img className="group-image" src={groupPhoto} alt="group photo" />
      </div>
      <div className="container">
        <h1 className="main-title">{title}</h1>
        <p className="main-paragraph">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
