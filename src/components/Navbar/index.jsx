import Link from "next/link";
import InputSearch from "./InputSearch";
import UserAuthButton from "./userAuthButton";

const Navbar = () => {
  return (
    <header className="bg-color-primary">
      <div className="flex md:flex-row flex-col justify-between items-center gap-2 p-4">
        <Link href="/" className="font-bold text-color-white text-2xl">
          CaffAnimeList
        </Link>
        <InputSearch />
        <UserAuthButton />
      </div>
    </header>
  );
};

export default Navbar;
