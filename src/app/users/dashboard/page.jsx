import { AuthUserSession } from "@/libs/auth";
// import { useRouter } from "next/router";

const Page = async () => {
const user = await AuthUserSession();
// const router = useRouter();

  return (
    <div className="flex flex-col gap-4 px-5 py-5 text-color-white">
      <h1 className="text-4xl">Dashboard</h1>
      <div className="flex flex-row gap-4">
        <img src={user?.image} alt="User Profile Picture" width={100} height={100} className="object-cover rounded-full w-64 h-64" />
        <h3 className="text-2xl font-medium py-4 px-3">Hi, {user?.name}</h3>
      </div>
    </div>
  );
};

export default Page;
