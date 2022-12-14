import React, { useState } from "react";
import "./styles.css";

const Card = () => {
  const [buy, setBuy] = useState(false);
  const [details, setDetails] = useState(false);

  const handleBuy = () => {
    setBuy(!buy);
  };

  const handleDetails = () => {
    setDetails(!details);
  };

  return (
    <div className="card">
      <div className="img">
        <img
          src="https://i.pinimg.com/originals/03/6e/a1/036ea1ab92acabb70ad00e835c329eaf.jpg"
          alt="thinking...."
        />
      </div>
      <div className="main">
        <div className="title">Ooops...</div>
        <button className="details" onClick={handleDetails}>
          Details
        </button>
        <div className="price">120$</div>
        {details && (
          <div className="open-details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos saepe
            laboriosam commodi quibusdam quaerat at illo.
            <button className="close-details" onClick={handleDetails}>
              X
            </button>
          </div>
        )}
      </div>
      <div className="description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          officia consequatur officiis amet fugit iusto dolorum itaque dolor.
        </p>
        <button
          className={`!buy ${buy ? "bought" : "buy"}`}
          onClick={handleBuy}
          disabled={buy}
        >
          {!buy ? "Add to cart" : "Already in cart"}
        </button>

        {buy && (
          <p className="delete" onClick={handleBuy}>
            Delete from cart
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
