import Link from "next/link"

const NotFound = () => {
      return (
            <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
                  <div className="justify-center flex items-center flex-col ">
                        <img src="/404.png" alt="404 Image" width={450} height={450} className="mb-3" style={{ transition: 'none', animation: 'none', transform: 'none' }} />
                        <h1 className="md:text-4xl text-3xl font-bold text-color-white items-center">Oh! Looks like you are lost</h1>
                        <h1 className="text-m text-color-white items-center my-3">The page you're trying to find doesn't exist</h1>
                        <Link href="/" className="text-color-dark hover:text-color-secondary font-semibold text-l bg-color-white inline-block px-7 py-1 rounded-3xl transition duration-300 ease-in-out">Go Back</Link>
                  </div>
            </div>
      )
}

export default NotFound