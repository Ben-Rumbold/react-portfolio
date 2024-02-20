import Header from "./Header";
import "../App.css";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="shared-outer-div">
        <div className="shared-inner-div">
          <Header currentPage="contact" />
          <p>Contact !!!!!</p>
        </div>
      </div>
    </>
  );
}
