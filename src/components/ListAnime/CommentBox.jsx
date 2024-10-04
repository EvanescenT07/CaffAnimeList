import prisma from "@/libs/prisma";

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({
    where: { anime_mal_id },
  });
  return (
    <div className="grid grid-cols-4 gap-4 mb-7">
      {comments.map((comment) => {
        return (
          <div
            className="p-2 text-color-white bg-color-secondary rounded-lg"
            key={comment.id}
          >
            <p className="text-xl font-bold">{comment.username}</p>
            <p>{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
