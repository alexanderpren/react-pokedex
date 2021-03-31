import React from "react";
import logo from "../../images/logo_pokemon.svg";
import face_ash from "../../images/ash_face.jpg";

export const Sidebar = () => {
  return (
    <aside className="home__sidebar">
       
      <div className="home__sidebar-navbar">
        <i className="far fa-moon"></i>
        <span>Alex Pren</span>
        <div>
          <img
            className="home__picture-title pointer"
            src={logo}
            alt="Logo pokemon"
          />
        </div>
        <div className="mt-10">
          <img
            className="home__picture-face pointer"
            src={face_ash}
            alt="Logo pokemon"
          />
        </div>
        <div className="mt-5">
          <h3 className="title">ashk123</h3>
        </div>
        <h4 className="color__white">"I worked hard in my test:)"</h4>

        <div className="footer">
          <button type="submit" className="btn__logout">
           
           
            <i className="fas fa-sign-out-alt fa-rotate-180"></i>
            <span>log out</span>
       
        
        
          </button>
        </div>
     
      </div>
    </aside>
  );
};
