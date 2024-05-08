import Link from "next/link";
import InputSearch from "./InputSearch"

const Navbar = () => {
  return (
      <header className="bg-red-500">
            <div className="flex md:flex-row flex-col justify-between items-center gap-2 p-4">
                  <Link href="/" className="font-bold text-white text-xl">CaffAnimeList</Link>
                  <InputSearch />
            </div>
      </header>
  );
};

export default Navbar;

