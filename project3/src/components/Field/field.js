import React from "react";
import "./field.css";
import fieldImage from "./fieldImage.png";


function Field(props) {
    return (
        <div className="grid-container">
            <div className="row">
        <div className="col-4">
            <img src={fieldImage} alt="FieldImage" />
            <h6>Field 1</h6>
        </div>
        <div className="col-4">
            <img src={fieldImage} alt="FieldImage" />
            <h6>Field 2</h6>
        </div>
        <div className="col-4">
            <img src={fieldImage} alt="FieldImage" />
            <h6>Field 3</h6>
        </div>
    </div>
    <div className="row">
        <div className="col-4">
            <img src={fieldImage} alt="FieldImage" />
            <h6>Field 4</h6>
        </div>
        <div className="col-4">
            <img src={fieldImage} alt="FieldImage" />
            <h6>Field 5</h6>
        </div>
        <div className="col-4">
            <img src={fieldImage} alt="FieldImage" />
            <h6>Field 6</h6>
        </div>
    </div>
    <div className="row">
        <div className="col-4">
            <img src={fieldImage} alt="FieldImage" />
            <h6>Field 7</h6>
        </div>
        <div className="col-4">
            <img src={fieldImage} alt="FieldImage" />
            <h6>Field 8</h6>
        </div>
        <div className="col-4">
            <img src={fieldImage} alt="FieldImage" />
            <h6>Field 9</h6>
        </div>
    </div>
        </div>
    );
}

export default Field;
