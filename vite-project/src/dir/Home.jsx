import Header from "./Header";
import "../App.css";
import "./Home.css";
import image from "../../assets/images/ben-rumbold.jpeg";

export default function Home() {
  return (
    <>
      <div className="shared-outer-div">
        <div className="shared-inner-div">
          <Header currentPage="home" />
          <div className="home-img-container">
            <img className="home-img" src={image} alt="" />
          </div>
          <p className="home-text-box">
            My unconventional journey from the construction industry fuels my
            passion for crafting custom digital solutions. With my{" "}
            <span className="yellow-text">JavaScript </span>
            and <span className="blue-text">React</span> expertise, combined
            with your vision, let's build something extraordinary together.
          </p>
        </div>
      </div>
    </>
  );
}
