import prisma from "@/libs/prisma";

export async function POST(request) {
  const { anime_mal_id, user_email, comment, username, anime_title } =
    await request.json();
  const data = { anime_mal_id, user_email, comment, username, anime_title };
  const createComment = await prisma.comment.create({ data });

  if (!createComment) {
    return new Response(
      JSON.stringify({
        isCreated: false,
        message: "Failed to post Comment",
      }),
      { status: 500 }
    );
  } else {
    return new Response(
      JSON.stringify({
        isCreated: true,
        message: "Comment post successfully",
      }),
      { status: 200 }
    );
  }
}

// export async function DELETE(request) {
//   const { anime_mal_id, user_email } = await request.json();
//   const data = { anime_mal_id, user_email };
//   const deleteCollection = await prisma.collection.deleteMany({ where: data });

//   if (deleteCollection.count === 0) {
//     return new Response(
//       JSON.stringify({
//         isDeleted: false,
//         message: "Failed to delete collection",
//       }),
//       { status: 500 }
//     );
//   } else {
//     return new Response(
//       JSON.stringify({
//         isDeleted: true,
//         message: "Collection deleted successfully",
//       }),
//       { status: 200 }
//     );
//   }
// }
