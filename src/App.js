import hmmPic from "./static/img/hmm.jpeg";
import joePic from "./static/img/joe-bruin.png";
import './index.css';
import React from 'react';
// import ReactDOM from 'react-dom'; // not used here, used in index.js

const aboutMeItems = [
  <><b>Undergraduate: </b><span>UCLA<img src={joePic} alt={" joe-bruin-png"} id={"joe-img"} /></span></>,
  <><b>Interests: </b>Data viz 📊, data journalism 📰, and web development ⌨️</>,
  <><b>Hotel: </b>Trivago🏨</>,
  "LinkedIn",
  "Data Blog"
];

const formOptions = [

];
const AboutMeList = ({ items }) => {
  return React.createElement(
    "ul",
    { className: "aboutMeList" },
    items.map((item, i) =>
      React.createElement("li", { key: i }, item)
    )
  );
}

const SquareImage = ({ source, alt, id }) => {
  return React.createElement(
    "img",
    { src: source, alt: alt, id: id },
    null
  )
}

const TextInput = ({ inputID, ...props }) => {
  return (
    <>
      <input type="text" name="nameField" id={inputID}></input><br />
    </>
  )
}

const RadioButton = ({ inputID, value, labelText, ...props }) => {
  return (
    <>
      <label>{labelText}</label>
      <input type="radio" name="degreeField" id={inputID} value={value}></input><br />
    </>
  )
}

const Checkbox = ({ inputID, value, labelText, ...props }) => {
  return (
    <>
      <label>{labelText}</label>
      <input type="checkbox" name="focusField" id={inputID} value={value}></input><br />
    </>
  )
}

const FormButton = ({buttonID}) => {
return (
  <input type="submit" id="submit-button" ></input>
)
}


function ContactForm({ items }) {
  return (
    <>
      <form id="contact-form" name="contactForm">
        <b>Name</b><br />
        <div class="form-item">
          <TextInput inputID="name-field1" />
        </div>
        <b>Degree level</b><br />
        <div class="form-item">
          <RadioButton inputID="radio-field1" value="undergraduate" labelText="Undergraduate" />
          <RadioButton inputID="radio-field2" value="graduate" labelText="Graduate" />
        </div>
        <b>What is your MIMS focus(es)?</b><br />
        <div class="form-item">
          <Checkbox inputID="cb-field1" value="HCI & UX" labelText="Human-Computer Interaction and UX Design" />
          <Checkbox inputID="cb-field2" value="Data Science & Machine Learning" labelText="Data Science and Machine Learning" />
          <Checkbox inputID="cb-field3" value="Information Policy & Ethics" labelText="Information Policy and Ethics" />
        </div>
        {/* <input type="submit" id="submit-button" ></input> */}
        <FormButton buttonID={'submit-button'}/>
      </form>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <div class="grid-container">
        <div class="grid-item" id="grid-item-1">
          <h2>Tyler Wu</h2>
          <h3>About Me</h3>
          <AboutMeList items={aboutMeItems} />
        </div>
        <div class="grid-item" id="grid-item-2">
          <h2>A picture of me</h2>
          <img src={hmmPic} alt={" hmm-jpg"} id={"hm-img"} />
        </div>
        <div class="grid-item" id="grid-item-3">
          <h2>A video from my YouTube channel </h2>
          <iframe id={"sdb-vid"} src="https://www.youtube.com/embed/zVJtNP-kU4M"></iframe>
        </div>
        <div class="grid-item" id="grid-item-4">
          <h2>CONTACT FORM</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;
