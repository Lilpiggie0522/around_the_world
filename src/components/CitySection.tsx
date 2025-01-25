import { Photo } from "../Home";

export default function CitySection({ id, photos }: { id: string, photos: Array<Photo> }) {
  const cityName = id[0].toUpperCase() + id.slice(1);
  return (
    <div id={id}>
      <h2 className="text-center text-3xl font-bold">{cityName}</h2>
      {photos.map(photo => {
        return (
          <div className="flex items-center space-x-4 py-1" key={photo.src}>
            <img src={photo.src} alt="work" height="240px" width="240px" />
            <p>{photo.description}</p>
          </div>
        )
      })}
    </div>
  )
}