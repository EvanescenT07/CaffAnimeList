import { AuthUserSession } from "@/libs/auth";
import Link from "next/link";

const Page = async () => {
  const user = await AuthUserSession();

  return (
    <div className="flex flex-col mt-7 text-color-white justify-center items-center">
      <img
        src={user?.image}
        alt="User Profile Picture"
        width={50}
        height={50}
        className="object-cover rounded-full w-48 h-48"
      />
      <h3 className="text-3xl font-medium py-4">Hi, {user?.name}</h3>

      <div className="py-5 flex flex-col gap-5">
        <Link
          href="/users/dashboard/collection"
          className="bg-color-secondary text-white py-2 px-4 rounded-full font-bold text-lg"
        >
          My Collection
        </Link>
        <Link
          href="/users/dashboard/comment"
          className="bg-color-secondary text-white py-2 px-4 rounded-full font-bold text-lg"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
