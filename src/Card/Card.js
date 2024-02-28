import React from "react";
import "./Card.scss";
import { MdOutlineMail, MdDelete } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiGlobe, CiHeart, CiEdit } from "react-icons/ci";

const Card = ({ name, email, phone, website }) => {
  return (
    <div className="card">
      <div className="cardProfile">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt=""
        />
      </div>

      <div className="cardInfo">
        <div className="infoHead">
          <h4> {name} </h4>
        </div>

        <div className="mainInfo">
          <div className="emailInfo">
            <MdOutlineMail />
            <p> {email} </p>
          </div>

          <div className="phoneInfo">
            <IoCallOutline />
            <p> {phone} </p>
          </div>

          <div className="webInfo">
            <CiGlobe />
            <p> {website} </p>
          </div>
        </div>
      </div>

      <div className="cardFooter">
        <div className="footIcons">
          <CiHeart />
        </div>

        <div className="footIcons">
          <CiEdit />
        </div>

        <div className="footIcons">
          <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default Card;
