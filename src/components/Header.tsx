import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="sticky top-0 w-full">
      <div className="flex bg-blue-400 h-14 items-center uppercase">
        <div className="w-1/3 text-center">
          <Link to="/" className="p-1 rounded-lg text-white hover:bg-white hover:bg-opacity-20 hover:p-2">
            Home
          </Link>
        </div>
        <div className="w-1/3 text-center">
          <Link to="/interest" className="p-1 rounded-lg text-white hover:bg-white hover:bg-opacity-20 hover:p-2">
            Interest
          </Link>
        </div>
        <div className="w-1/3 text-center">
          <Link to="/experience" className="p-1 rounded-lg text-white hover:bg-white hover:bg-opacity-20 hover:p-2">Experience</Link>
        </div>
      </div>
    </nav>
  )
}