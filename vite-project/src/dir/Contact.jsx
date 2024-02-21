import Header from "./Header";
import "../App.css";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="shared-outer-div">
        <div className="shared-inner-div">
          <Header currentPage="contact" />
          <div className="contact-container">
            <h2>Ben Rumbold</h2>
            <h2>
              <a target="_blank" href="https://github.com/Ben-Rumbold">
                GitHub
              </a>
            </h2>
            <h2>
              <a
                target="_blank"
                href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHlySvbS87_CgAAAY3M043oT8sIrneehlqWfUNlsb5JUxUxYBIcTkUHmNoWALclXCUTwOFYFHjABwxRkjF-SQs0FsGsg_A5UVttpXJ6usBup_q0L6HMnPKVii_3Sw1F33t2DqM=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fjobs%2Fview%2F3822759469%23"
              >
                LinkedIn
              </a>
            </h2>
            <h2>
              <a target="_blank" href="mailto: b.rumbold19@gmail.com">
                Email
              </a>
            </h2>
            <h2>
              <a target="_blank" href="tel:07760533169">
                Phone
              </a>
            </h2>
            <h2>
              <a href="">CV</a>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
