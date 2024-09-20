'use client'
import { ArrowCircleLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {    
    const router = useRouter();
    const handleBack = (event) => {
        event.preventDefault();
        router.back();
    }
    return (
      <div className="relative flex items-center px-2 my-4">
        <button className="text-color-white z-10" onClick={handleBack}>
          <ArrowCircleLeft size={40} />
        </button>
        <h3 className="absolute inset-0 flex justify-center items-center text-2xl text-color-white font-bold">
          {title}
        </h3>
      </div>
    )
}

export default Header;