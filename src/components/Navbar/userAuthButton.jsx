import Link from "next/link";
import { AuthUserSession } from "@/libs/auth";

const UserAuthButton = async () => {
  const User = await AuthUserSession();
  const actionLabel = User ? "Sign Out" : "Sign In";
  const actionURL = User ? "api/auth/signout" : "api/auth/signin";

  return (
    <div>
      <Link href={actionURL} className="text-color-white">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserAuthButton;
