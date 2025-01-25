import CitySection from "./components/CitySection"
import Map from "./components/Map"
import { TypeAnimation } from 'react-type-animation'

export interface Photo {
  src: string;
  description: string;
}

interface Location {
  id: string;
  photos: Array<Photo>;
}

export default function Home() {
  const photosCollection: Array<Location> = [
    {
      id: "erenhot",
      photos: [{
        src: "/home.jpeg",
        description: "This is where I spent 17 years of my life - Erenhot, Inner Mongolia, China"
      }
      ]
    },
    {
      id: "melbourne",
      photos: [
        {
          src: "/postie.jpg",
          description: "Here is a photo of my first job working as a postie in Melbourne back in 2014"
        },
        {
          src: "dragonfly.jpg",
          description: "Here is a photo of my research project on aerodynamics of dragonfly species during my study at RMIT University in 2017"
        }
      ]
    },
    {
      id: "canberra",
      photos: [
        {
          src: "/propeller.jpg",
          description: "Here is a photo of my first properller overhaul, completed while working as an aircraft maintenance technician"
        },

      ]
    },
    {
      id: "sydney",
      photos: [
        {
          src: "/morning.jpg",
          description: "Here is a photo of my first morning shift working as a civil labourer in Western Sydney 4 am in the morning"
        },
        {
          src: "/work.jpg",
          description: "Here is a photo of me digging the trentches"
        },
        {
          src: "/project.jpg",
          description: "Here is a photo of the first decking project I helped build"
        },
        {
          src: "/glass.jpg",
          description: "Here is a photo of the first template I made working as a glass manufacturing technician"
        }
      ]
    }
  ]
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-center text-blue-300">
        <TypeAnimation
          sequence={[
            "Hello, I am Jeffrey.",
            1000,
            "This is my journey around the world.",
            1000,
          ]}
          wrapper="span"
          speed={10}
          repeat={Infinity}
        />
      </h1>
      <Map />
      <div className='flex flex-col w-1/2' id="countries">
        {photosCollection.map(photo => {
          console.log(photo.id)
          console.log(photo.photos)
          return (
            <CitySection id={photo.id} photos={photo.photos} key={photo.id} />
          )
        })}
      </div>
    </div>

  )
}