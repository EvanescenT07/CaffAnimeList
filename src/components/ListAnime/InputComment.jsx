"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const InputComment = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleInput = (event) => {
    setComment(event.target.value);
    setErrorMessage("");
  };

  const handlePosting = async (event) => {
    event.preventDefault();

    if (comment.trim === "") {
      setErrorMessage("Please input your comment!");
      return;
    }

    const data = { anime_mal_id, user_email, comment, username, anime_title };
    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const postComment = await response.json();
    if (postComment.isCreated) {
      setIsCreated(true);
      setComment("");
      router.refresh();
    }
    setTimeout(() => {
      setIsCreated(false);
    }, 60000);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      if (comment.trim() === "") {
        setErrorMessage("Please input your comment!");
        return;
      }
      handlePosting(event);

      setTimeout(() => {
        setIsCreated(false);
      }, 60000);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <textarea
        placeholder="Write your comment here..."
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        value={comment}
        className="w-full h-32 text-xl p-2 rounded-xl"
      />
      <button
        onClick={handlePosting}
        disabled={comment.trim() === ""}
        className={`w-48 py-2 px-3 rounded-xl text-color-white bg-color-secondary ${
          comment.trim() === "" ? "cursor-not-allowed" : ""
        }`}
      >
        Submit
      </button>
      {errorMessage && <p className=" text-color-white">{errorMessage}</p>}
      {isCreated && (
        <p className="text-color-white">Comment has been sent...</p>
      )}
    </div>
  );
};

export default InputComment;
