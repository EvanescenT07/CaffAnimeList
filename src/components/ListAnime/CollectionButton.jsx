"use client";

import React, { useState } from "react";

const CollectionButton = ({ anime_mal_id, user_email }) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (event) => {
    event.preventDefault();
    const data = { anime_mal_id, user_email };
    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    if (collection.success) {
      setIsCreated(collection.isCreated);
    }
    return;
  };

  return (
    <>
      {isCreated ? (
        <p className="text-color-white">Added to Collection</p>
      ) : (
        <button
          onClick={handleCollection}
          className="text-base text-color-white bg-color-secondary px-2 py-1 rounded-3xl my-1"
        >
          Add To Collection
        </button>
      )}
    </>
  );
};

export default CollectionButton;
