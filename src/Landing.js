import './landing.css';
import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const aboutMeItems = [
    <><b>Undergraduate: </b><span style={{color:'#007DC3', fontWeight: 700}}>UCLA<img src={'/joe-bruin.png'} alt={" joe-bruin-png"} id={"joe-img"} /></span></>,
    <><b>Interests: </b>Data viz 📊, data journalism 📰, and web development ⌨️</>,
    <><b>Hotel: </b>Trivago🏨</>,
    <a href="https://www.linkedin.com/in/tyler-wu/" target="_blank">LinkedIn</a>,
    <a href="http://www.smalldata.blog/" target="_blank">Data Blog</a>
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
        <label htmlFor={inputID}>{labelText}</label>
        <input type="radio" name="degreeField" id={inputID} value={value}></input><br />
      </>
    )
  }
  
  const Checkbox = ({ inputID, value, labelText, ...props }) => {
    return (
      <>
        <label htmlFor={inputID}>{labelText}</label>
        <input type="checkbox" name="focusField" id={inputID} value={value}></input><br />
      </>
    )
  }
  
const submitForm = (e) => {
    let submitButton = document.getElementById('submit-button');
    // submitButton.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';
    submitButton.innerHTML = <FontAwesomeIcon icon="fa-solid fa-spinner" />;
    setTimeout(()=>{
        window.alert(`Thanks for submitting.\n\nNice to meet you!`);
        submitButton.innerHTML = 'Submit'
    }, 3000);
    e.preventDefault();
};

  const SubmitButton = ({buttonID}) => {
  return (
    <input type="submit" id="submit-button"></input>
  )
  }

  
  function ContactForm({ items }) {
    return (
      <>
        <form id="contact-form" name="contactForm" onSubmit={submitForm}>
          <b>Name</b><br />
          <div class="form-item">
            <TextInput inputID="name-field1" />
          </div>
          <b>Degree level</b><br />
          <div class="form-item radio-buttons">
            <RadioButton inputID="radio-field1" value="undergraduate" labelText="Undergraduate" />
            <RadioButton inputID="radio-field2" value="graduate" labelText="Graduate" />
          </div>
          <b>What is your MIMS focus(es)?</b><br />
          <div class="form-item checkboxes">
            <Checkbox inputID="cb-field1" value="HCI & UX" labelText="Human-Computer Interaction and UX Design" />
            <Checkbox inputID="cb-field2" value="Data Science & Machine Learning" labelText="Data Science and Machine Learning" />
            <Checkbox inputID="cb-field3" value="Information Policy & Ethics" labelText="Information Policy and Ethics" />
          </div>
          {/* <input type="submit" id="submit-button" ></input> */}
          <SubmitButton buttonID={'submit-button'}/>
        </form>
      </>
    )
  }
  
  function Landing() {
    return (
      <div className="Landing">
        <div class="grid-container">
          <div class="grid-item" id="grid-item-1">
            <h2>Tyler Wu</h2>
            <h3>About Me</h3>
            <AboutMeList items={aboutMeItems} />
          </div>
          <div class="grid-item" id="grid-item-2">
            <h3>A picture of me</h3>
            <img src={'/hmm.jpeg'} alt={" hmm-jpg"} id={"hm-img"} />
          </div>
          <div class="grid-item" id="grid-item-3">
            <h3>A video from my YouTube channel </h3>
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
  
// document.getElementById('submit-button').addEventListener('submit', (event) =>{
//     alert('submitted');
//     event.preventDefault();
// })

  export default Landing;