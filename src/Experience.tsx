import ProjectTab from "./components/ProjectTab";

export default function Experience() {
  const projects = [
    {
      imageUrl: "personal.PNG",
      title: "Personal Portfolio",
      description: "A personal portfolio website",
      link: "https://piggie-portfolio.vercel.app/",
      repo: "https://github.com/Lilpiggie0522/portfolio"
    },
    {
      imageUrl: "bazaar.PNG",
      title: "Fenwick Bazaar",
      description: "A full-stack web application for trading in-game items of Albion Online",
      link: "https://bazaar-sepia.vercel.app/",
      repo: "https://github.com/Lilpiggie0522/bazaar"
    },
    {
      imageUrl: "regler.PNG",
      title: "Regler",
      description: "A modern team evaluation system for UNSW Computer Science and Engineering faculty",
      link: "https://regler.azurewebsites.net/",
      repo: "https://github.com/Lilpiggie0522/regler"
    }
  ]

  const frontendTechnologies = [
    {
      imageUrl: "html.png",
      title: "HTML"
    },
    {
      imageUrl: "css.png",
      title: "CSS"
    },
    {
      imageUrl: "tailwind_css.png",
      title: "Tailwind CSS"
    },
    {
      imageUrl: "typescript.png",
      title: "typsecript"
    },
    {
      imageUrl: "react.png",
      title: "React"
    },
    {
      imageUrl: "redux.png",
      title: "redux"
    },
    {
      imageUrl: "next_js.png",
      title: "Next.js"
    }
  ]

  const backendTechnologies = [
    {
      imageUrl: "node_js.png",
      title: "Node.js"
    },
    {
      imageUrl: "java.png",
      title: "Java"
    },
    {
      imageUrl: "python.png",
      title: "python"
    },
    {
      imageUrl: "spring_boot.png",
      title: "Spring Boot"
    },
    {
      imageUrl: "next_js.png",
      title: "Next.js"
    }
  ]

  const otherTechnologies = [
    {
      imageUrl: "postgresql.png",
      title: "PostgreSQL"
    },
    {
      imageUrl: "aws.png",
      title: "AWS"
    },
    {
      imageUrl: "bash.png",
      title: "Bash"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col items-center w-full">

      <div className="flex justify-center mt-5">
        <div className="flex flex-col justify-center rounded-lg p-2">
          <p className="font-serif top-0">Here are some of the technologies that I am familiar with, most of them are around web development</p>
          <div className="flex mt-1">
            <p>Frontend:</p>
            {frontendTechnologies.map((tech, index) => (
              <img key={index} src={tech.imageUrl} alt={tech.title} className="w-10 h-10" />
            ))}
          </div>
          <div className="flex mt-1">
            <p>Backend:</p>
            {backendTechnologies.map((tech, index) => (
              <img key={index} src={tech.imageUrl} alt={tech.title} className="w-10 h-10" />
            ))}
          </div>
          <div className="flex mt-1">
            <p>Other technologies:</p>
            {otherTechnologies.map((tech, index) => (
              <img key={index} src={tech.imageUrl} alt={tech.title} className="w-10 h-10" />
            ))}
          </div>
        </div>
        <img src="funny1.jpg" alt="new dev" width={"300px"} height={"360px"} className="rounded-lg" />
      </div>
      <h1 className="text-5xl m-5">Some of my projects:</h1>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectTab key={index} imageUrl={project.imageUrl} title={project.title} description={project.description} projectLink={project.link} repo={project.repo} />
        ))}
      </div>
      <p className="font-serif">Learning AWS technologies at the moment (serverless architecture, etc), hopefully more projects will be added in the future.</p>
    </div>
  )
}