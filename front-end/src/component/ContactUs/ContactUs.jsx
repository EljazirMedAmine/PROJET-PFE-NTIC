import React from "react";
import "./Contact.css";
import NavBar from "../NavBar";

export default function ContactUs() {
  return (
    <>
      <NavBar />
      <div>
        <div className="imag">
          <img src="pic/img1.jpg" alt="" id="img1" />
        </div>
        <div className="form">
          <form action="">
            <fieldset>
              <legend>Contact Us</legend>
              <div className="input-row">
                <div className="input-group">
                  First Name:{" "}
                  <input type="text" placeholder="Enter First Name" />
                </div>
                <div className="input-group">
                  Last Name: <input type="text" placeholder="Enter Last Name" />
                  <br />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  Email: <input type="email" placeholder="Enter Email" />
                </div>
                <div className="input-group">
                  Phone number:{" "}
                  <input type="number" placeholder="Enter Phone Number" />
                  <br />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Message:
                </label>
                <textarea
                  name=""
                  id=""
                  rows="3"
                  className="form-control"
                  placeholder="Enter Message you want to send"
                />
              </div>
              <br />
              <input type="submit" value="Envoyer" id="button" />
            </fieldset>
          </form>
          <br />
          <div className="ss">Email Us: projet@gmail.com</div>
        </div>
      </div>
    </>
  );
}
