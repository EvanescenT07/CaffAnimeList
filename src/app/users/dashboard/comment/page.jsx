import Header from "@/components/Dashboard/Header";
import { AuthUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";
import Link from "next/link";

const Page = async () => {
  const user = await AuthUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 mx-4 w-full">
      <Header title={"My Comment"} />
      {comments.length === 0 ? (
        <div className="flex justify-center items-center py-10">
          <p className="text-xl text-center text-color-white">
            You haven't commented on any anime.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-3 p-2 gap-4">
          {comments.map((comment) => (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              className="p-2 text-color-white bg-color-secondary rounded-lg"
              key={comment.id}
            >
              <p className="text-xl font-bold">{comment.anime_title}</p>
              <p>{comment.comment}</p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Page;
