import Link from "next/link";
import { AuthUserSession } from "@/libs/auth";

const UserAuthButton = async () => {
  const User = await AuthUserSession();
  const actionLabel = User ? "Sign Out" : "Sign In";
  const actionURL = User ? "api/auth/signout" : "api/auth/signin";

  const dahsboardReveal = User ? "Dashboard" : null;

  return (
    <div className=" flex gap-4 justify-beetween">
      <Link href="/users/dashboard" className="py-2 text-color-white">
        {dahsboardReveal}
      </Link>
      <Link href={actionURL} className="py-2 text-color-white">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserAuthButton;

