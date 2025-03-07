import React from "react";
import PropTypes from "prop-types";
import { formatCurrency } from "../lib/utils.js";

const Product = ({ item, key, addToBasket, removeFromBasket, ...props }) => {
  const { trackId, artworkUrl100, trackName, longDescription, trackPrice } =
    item;

  return (
    <div className={"product " + item.kind}>
      <img
        src={artworkUrl100}
        alt={
          trackName && trackName.length > 0 ? trackName : `Item id=${trackId}`
        }
      />
      <div className="details">
        <h2 title={trackName}>
          {trackName && trackName.length > 50
            ? trackName.substring(0, 50) + "..."
            : trackName}
        </h2>
        <p className="price">{trackPrice ? formatCurrency(trackPrice) : "-"}</p>
        <p className="description">
          {longDescription ? longDescription.substring(0, 300) + "..." : ""}
        </p>
      </div>
      <div className="buttons">
        {item.inBasket ? (
          <button
            className="remove-button"
            onClick={() => removeFromBasket(trackId)}>
            Remove
          </button>
        ) : (
          <button className="add-button" onClick={() => addToBasket(trackId)}>
            Add to Basket
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;

//Prop Types
Product.propTypes = {
  item: PropTypes.object.isRequired,
};
