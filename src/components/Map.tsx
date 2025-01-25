import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl = `${import.meta.env.BASE_URL}/world-countries.json`;

const cities = [
  { name: "Erenhot", coordinates: [111.9882, 43.6574] as [number, number], id: "erenhot" },
  { name: "Melbourne", coordinates: [145.0568, -37.7008] as [number, number], id: "melbourne" },
  { name: "Canberra", coordinates: [149.0392, -35.2456] as [number, number], id: "canberra" },
  { name: "Sydney", coordinates: [151.2093, -33.8688] as [number, number], id: "sydney" },
];

const Map = () => {
  return (
    <div className='flex w-full justify-center items-center'>
      <ComposableMap className='w-2/3'>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography key={geo.rsmKey} geography={geo} style={{
                default: { fill: "none", stroke: "#000000", outline: "none", strokeWidth: 0.5 },
                hover: { fill: "none", stroke: "#000000", outline: "none", strokeWidth: 0.5 },
              }} />
            ))
          }
        </Geographies>
        {cities.map(({ name, coordinates, id }) => (
          <Marker key={name} coordinates={coordinates}
            cursor={"pointer"}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}>
            <circle r={2} fill="#F53" stroke="#fff" strokeWidth={1} />
            <text
              onMouseEnter={(e) => (e.currentTarget.style.fill = "#FF0000")}
              onMouseLeave={(e) => (e.currentTarget.style.fill = "#000000")}
              style={{ fontFamily: "system-ui", fill: "#000000", cursor: "pointer", fontSize: 10 }}
              textAnchor='middle'
              y={10}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default Map;
