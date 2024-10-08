import React from "react";
import Image from "next/image";
import { fetchAPI } from "@/libs/api";
import VideoPLayer from "@/components/utilities/VideoPlayer";
import CollectionButton from "@/components/ListAnime/CollectionButton";
import { AuthUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";
import InputComment from "@/components/ListAnime/InputComment";
import CommentBox from "@/components/ListAnime/CommentBox";

const Page = async ({ params: { id } }) => {
  const animeData = await fetchAPI(`anime/${id}`);
  const user = await AuthUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  return (
    <>
      <div className="pt-4 px-4">
        <div className="text-3xl text-color-white font-bold">
          {animeData.data.title} - {animeData.data.year}
        </div>
        {user && (
          <CollectionButton
            anime_mal_id={id}
            user_email={user?.email}
            anime_image={animeData.data.images.webp.image_url}
            anime_title={animeData.data.title}
            isInCollection={!!collection}
          />
        )}
        <div className="flex gap-2 overflow-x-auto">
          <div className="p-1 m-2 w-24 flex flex-col justify-center items-center text-color-white border rounded-full border-color-white">
            <h3 className="font-bold">Rank</h3>
            <span className="text-xl">{animeData.data.rank}</span>
          </div>
          <div className="p-1 m-2 w-24 flex flex-col justify-center items-center text-color-white border rounded-full border-color-white">
            <h3 className="font-bold">Score</h3>
            <span className="text-xl">{animeData.data.score}</span>
          </div>
          <div className="p-1 m-2 w-24 flex flex-col justify-center items-center text-color-white border rounded-full border-color-white">
            <h3 className="font-bold">Type</h3>
            <span className="text-xl">{animeData.data.type}</span>
          </div>
          <div className="p-1 m-2 w-24 flex flex-col justify-center items-center text-color-white border rounded-full border-color-white">
            <h3 className="font-bold">Episode</h3>
            <span className="text-xl">{animeData.data.episodes}</span>
          </div>
          <div className="w-full sm:w-48 p-2 m-2 flex flex-col justify-center items-center text-color-white border rounded-full border-color-white">
            <h3 className="font-bold text-center">Status</h3>
            <span className="text-xl text-center">{animeData.data.status}</span>
          </div>
        </div>
        <div className="text-2xl text-color-white">
          {animeData.data.genres.map((genre) => genre.name).join(", ")}
        </div>
        <div className="flex sm:flex-nowrap flex-wrap pt-4 gap-2 text-color-white">
          <Image
            src={animeData.data.images.webp.image_url}
            alt={animeData.data.images.webp.image_url}
            width={350}
            height={350}
            className="rounded w-full object-cover animate-none"
          />
          <p className="mx-5 text-l text-justify">{animeData.data.synopsis}</p>
        </div>
        <div className="py-7">
          <h3 className="text-color-white text-2xl mb-2">Comment</h3>
          <CommentBox anime_mal_id={id} />

          {user && (
            <InputComment
              anime_mal_id={id}
              user_email={user?.email}
              username={user?.name}
              anime_title={animeData.data.title}
            />
          )}
        </div>
        <div>
          <VideoPLayer videoID={animeData.data.trailer.youtube_id} />
        </div>
      </div>
    </>
  );
};

export default Page;
