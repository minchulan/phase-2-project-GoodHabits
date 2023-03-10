import React from "react";

const DrugCard = ({ drug, onDeleteDrug }) => {
  const { name, brand, strength, image, form, id } = drug;

  const handleDeleteClick = () => {
    fetch(`http://localhost:3001/drugs/${id}`, {
      method: "DELETE",
    });
    onDeleteDrug(id);
  };

  return (
    <li className="card">
      <img src={image} alt={name} className="drug-card" />
      <h4>
        {name} ({brand}) {strength}mg {form}
      </h4>
      <div className="details">
        <button className="emoji-button favorite active">★</button>
        <button onClick={handleDeleteClick} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
};

export default DrugCard;
