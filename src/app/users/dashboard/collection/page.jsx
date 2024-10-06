import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";
import { AuthUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";

const Page = async () => {
  const user = await AuthUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 mx-4 w-full">
      <Header title={"My Collection"} />
      {collection.length === 0 ? (
        <div className="flex justify-center items-center py-10">
          <p className="text-xl text-center text-color-white">
            You haven't added any anime to your collection yet.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 p-4">
          {collection.map((collect, index) => (
            <Link
              key={index}
              href={`/anime/${collect.anime_mal_id}`}
              className="relative"
            >
              <Image
                src={collect.anime_image}
                alt={collect.anime_title}
                width={200}
                height={300}
                className="w-full animate-none rounded"
              />
              <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-white rounded">
                <h5 className="text-xl text-center bg-color-white py-3 rounded-xl">
                  {collect.anime_title}
                </h5>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Page;
