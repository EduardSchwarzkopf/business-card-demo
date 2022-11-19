import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profileImage from "./assets/profileImage.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSquareGithub,
  faSquareTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faSquareGithub, faSquareTwitter, faLinkedin, faEnvelope);

import "./App.css";
import CardTextSection from "./components/CardTextSection";
import CardContact from "./components/CardContact";

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="card-header">
          <img src={profileImage} />
        </div>
        <div className="card-body">
          <CardContact
            name="John Doe"
            role="Developer"
            homepage="example.com"
          />

          <div className="button-wrapper">
            <a href="#">
              <button className="btn-email">
                <FontAwesomeIcon icon="envelope" />
                Email
              </button>
            </a>
            <a href="#">
              <button className="btn-linkedin">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
                LinkedIn
              </button>
            </a>
          </div>

          <CardTextSection title="About">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, conse
          </CardTextSection>

          <CardTextSection title="Interests">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </CardTextSection>
        </div>

        <div className="card-footer">
          <a href="#">
            <FontAwesomeIcon icon={["fab", "square-github"]} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={["fab", "square-twitter"]} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
