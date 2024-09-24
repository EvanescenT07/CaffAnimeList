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
    <section mt-4 mx-4 w-full>
      <Header title={"My Collection"} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {collection.map((collect, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${collect.anime_mal_id}`}
              className="relative border-2 border-color-secondary"
            >
              <Image
                src={collect.anime_image}
                alt={collect.anime_title}
                width={150}
                height={150}
                className="w-full animate-none"
              />
              <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-white">
                <h5 className="text-xl text-center bg-color-white">
                  {collect.anime_title}
                </h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
