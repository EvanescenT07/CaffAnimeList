"use client";
import React, { useState } from "react";

const CollectionButton = ({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
  isInCollection: initialIsInCollection,
}) => {
  const [isInCollection, setIsInCollection] = useState(initialIsInCollection);

  const handleAddCollection = async (event) => {
    event.preventDefault();
    const data = { anime_mal_id, user_email, anime_image, anime_title };
    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    if (collection.isCreated) {
      setIsInCollection(true);
    }
  };

  const handleDeleteCollection = async (event) => {
    event.preventDefault();
    const data = { anime_mal_id, user_email, anime_image, anime_title };
    const response = await fetch("/api/v1/collection", {
      method: "DELETE",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    if (collection.isDeleted) {
      setIsInCollection(false);
    }
  };

  return (
    <>
      {isInCollection ? (
        <button
          onClick={handleDeleteCollection}
          className="text-base text-color-white bg-color-secondary px-2 py-1 rounded-3xl my-1"
        >
          Delete from Collection
        </button>
      ) : (
        <button
          onClick={handleAddCollection}
          className="text-base text-color-white bg-color-secondary px-2 py-1 rounded-3xl my-1"
        >
          Add To Collection
        </button>
      )}
    </>
  );
};

export default CollectionButton;
