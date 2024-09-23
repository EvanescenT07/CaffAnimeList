import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";

const Page = () => {
  return (
    <section mt-4 w-full>
      <Header title={"My Collection"}/>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/" className="relative border-2 border-color-secondary">
            <Image src="" alt="" width={350} height={350} className="w-full" />
            <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-white">
              <h5 className="text-xl text-center bg-color-white">Anime Title</h5>
            </div>
          </Link>
          <Link href="/" className="relative border-2 border-color-secondary">
            <Image src="" alt="" width={350} height={350} className="w-full" />
            <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-white">
              <h5 className="text-xl text-center bg-color-white">Anime Title</h5>
            </div>
          </Link>
          <Link href="/" className="relative border-2 border-color-secondary">
            <Image src="" alt="" width={350} height={350} className="w-full" />
            <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-white">
              <h5 className="text-xl text-center bg-color-white">Anime Title</h5>
            </div>
          </Link>
          <Link href="/" className="relative border-2 border-color-secondary">
            <Image src="" alt="" width={350} height={350} className="w-full" />
            <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-white">
              <h5 className="text-xl text-center bg-color-white">Anime Title</h5>
            </div>
          </Link>
        </div>
      </section>
  );
};

export default Page;

