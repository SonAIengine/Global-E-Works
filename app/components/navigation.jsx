import Link from "next/link"
export defalut function Navigation() {
  return (
    <nav className="flex justify-between items-center p-5 bg-gradient-to-r from-cyan-800 to-sky-900 shadow-lg">
      <Link href="/">
        <div className="font-bold text-3xl text-white cursor-pointer">
          E-works
        </div>
      </Link>
      <Link href="/login">
        <button className="text-cyan-800 bg-white transition duration-300 ease-in-out transform hover:scale-105 px-4 py-2 rounded-full shadow hover:bg-sky-200 focus:outline-none focus:ring-4 focus:ring-sky-500">
          Login
        </button>
      </Link>
    </nav>
  )
}

