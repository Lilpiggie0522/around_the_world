export default function Interest() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <div className="m-5 flex space-x-32">
        <div className="w-1/12"></div>
        <img className="border-solid border-8 rounded-full border-blue-400" src="soccer.jpg" alt="soccer" height="290px" width="290px" />
        <div className="flex flex-col">
          <h1 className="text-6xl mb-5">Soccer</h1>
          <p>Like many people my age (I’m old, by the way), I enjoy playing soccer a lot—nothing beats sweating on a soccer field on a summer afternoon.</p>
        </div>
      </div>
      <div className="flex space-x-32 bg-sky-200 w-full">
        <div className="w-1/12"></div>
        <div className="flex flex-col justify-center">
          <h1 className="text-6xl mb-5">Simulator Gaming</h1>
          <p>I am a bit of a hardcore gamer when it comes to simulator games, particularly
            <a className="underline" href="https://store.steampowered.com/app/227300/Euro_Truck_Simulator_2/"> Euro Truck Simulator 2</a>
            , I have accumulated over 5,000 hours on record. On the right is a photo of my gaming setup. The time I spent trucking with friends
            is one of the best moments of my life. However, due to life commitments for both me and my friends, we barely have time to play together anymore. I guess that's life.
          </p>
        </div>
        <img className="border-solid border-8 rounded-full border-blue-400" src="trucking.jpg" alt="soccer" height="290px" width="290px" />
      </div>
      <div className="m-5 flex space-x-32">
        <div className="w-1/12"></div>
        <img className="border-solid border-8 rounded-full border-blue-400" src="hiking.jpg" alt="soccer" height="290px" width="290px" />
        <div className="flex flex-col">
          <h1 className="text-6xl mb-5">Hiking</h1>
          <p>Having hiked almost all the trails in Melbourne and Canberra, I can safely say that I love hiking.
            It's one of the best ways to escape from reality and enjoy the beauty of nature. On the left is a photo of <a className="underline" href="https://www.parks.vic.gov.au/places-to-see/parks/bunyip-state-park">Bunyip State Park</a>
            &nbsp;in Warragul Victoria. If you ever have the chance to visit Victoria, I highly recommend you to visit this state park.
          </p>
        </div>
      </div>
    </div >
  )
}