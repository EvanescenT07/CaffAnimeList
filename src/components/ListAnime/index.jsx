import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 px-4">
      {api.data?.map((animeData, index) => {
        return (
          <Link
            href={`/anime/${animeData.mal_id}`}
            className="cursor-pointer text-color-white hover:text-color-secondary transition-all"
            key={index}
          >
            <Image
              className="w-full max-h-64 object-cover"
              src={animeData.images.webp.image_url}
              alt=""
              width={350}
              height={350}
            />
            <h3 className="font-bold md:text-xl text-md p-2">
              {animeData.title}
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
