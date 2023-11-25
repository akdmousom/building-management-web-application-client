import { Map, Marker } from "pigeon-maps"
const Maps = () => {
    return (
        <Map height={300} defaultCenter={[23.7925,90.4078]} defaultZoom={11}>
            <Marker width={50} anchor={[23.7925,90.4078]} />
        </Map>
    );
};

export default Maps;