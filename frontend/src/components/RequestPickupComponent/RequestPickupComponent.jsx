import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputTag from "./InputTag";
import OrderSummaryComponent from "../RequestPickupComponent/OrderSummaryComponent";
import { useNavigate } from "react-router-dom";
import "./RequestPickupComponent.css";
import Requestcontext from "../../contexts/RequestPickUpContext";

const RequestPickupComponent = () => {
  
  const {selectedDateTime, image, description, tags, quantity, address, showSummary, setDescription, setTags, setAddress, handleQuantityChange, handleTimeChange, handleImageChange, handleSubmit, setTitle} = useContext(Requestcontext);
  const navigate = useNavigate();

  return (
    <div className="container">
      {!showSummary ? (
        <>
          <form className="container" encType = "multipart/form-data" onSubmit={() => navigate("/proceed")}>
          <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="Request Title" />
          <div className="image-container">
            {Array.from(image).map((item, index) => (
              <span key={index}>
                <img
                  style={{ padding: "10px" }}
                  width={150}
                  height={100}
                  src={item ? URL.createObjectURL(item) : null}
                  alt={`Product ${index + 1}`}
                />
              </span>
            ))}
          </div>
          <input name="myImage" onChange={handleImageChange} multiple type="file" />
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            value={description}
            placeholder="description"
          />
          <div className="quantity-container">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <input
              type="text"
              placeholder="Quantity"
              value={quantity}
              readOnly
              className="quantity-input"
            />
            <button onClick={() => handleQuantityChange(1)}>+</button>
            <div className="quantity-head">Quantity</div>
          </div>
          <InputTag tags={tags} setTags={setTags} />

          <input
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            value={address}
            placeholder="Address"
          />
          <div className="date-picker-container">
            <h4>Choose Pickup date & time slot</h4>
            <DatePicker
              selected={selectedDateTime}
              onChange={handleTimeChange}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>
          
            <button onClick={handleSubmit}>Proceed</button>
          </form>
        </>
      ) : (
        <OrderSummaryComponent/>
      )}
    </div>
  );
};

export default RequestPickupComponent;
