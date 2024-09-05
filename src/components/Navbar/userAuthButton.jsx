import Link from "next/link";

const UserAuthButton = () => {
  return (
    <div>
      <Link href="api/auth/signin" className="text-color-white">
        Sign In
      </Link>
    </div>
  );
};

export default UserAuthButton;
