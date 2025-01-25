import { Link } from "react-router-dom";

export default function ProjectTab({ imageUrl, title, description, projectLink, repo }: { imageUrl: string, title: string, description: string, projectLink: string, repo: string }) {
  return (
    <div className="flex justify-center m-10 flex-col rounded-xl">
      <Link to={projectLink}>
        <img src={imageUrl} alt="gg" width={"400px"} height={"200px"} className="hover:opacity-70 rounded-t-xl" />
      </Link>
      <div className='text-white bg-black px-4 py-6 rounded-b-xl min-h-40'>
        <h5 className='text-xl font-semibold mb-3'>{title}</h5>
        <p className='text-[#ADB7BE] w-80'>{description}</p>
        <div className="flex justify-center items-center">
          <button className="bg-slate-300 rounded-lg text-black p-1 font-semibold mt-1"><a className="mt-1" href={repo}>Github Repo</a></button>
        </div>
      </div>
    </div>
  )
}