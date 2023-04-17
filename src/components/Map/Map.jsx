import React,  {useContext} from 'react';
import { Header, HeaderText, MapDiv } from './Map.js';
import { MapContainer, TileLayer, FeatureGroup, Marker, Popup, Polygon } from 'react-leaflet'
import { EditControl } from 'react-leaflet-draw'

import { PointsContext } from '../../contexts/PointsContext';
import { PolygonsContext } from '../../contexts/PolygonsContext';

function Map() {

    const { points } = useContext(PointsContext)
    const { polygons } = useContext(PolygonsContext)

    function handleDrawing(event) {
        const layer = event.layer;  
        console.log(layer)
      }

    return (
        <>
            <Header>
                <HeaderText>Bem-vindo!</HeaderText>
            </Header>
            <MapDiv id="map">                
                <MapContainer style={{height: '100%', width: '100%'}} center={[-23.55028, -46.63389]} zoom={13} scrollWheelZoom={false}>
                    <FeatureGroup>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <EditControl
                            position='topleft'
                            onCreated={handleDrawing}
                            draw={{
                                polyline: false,
                                rectangle: false,
                                circlemarker: false
                            }}
                        />
                        {
                            points.map(element => {
                                return (
                                <Marker key={element.id} position={[element.geometry.coordinates[1], element.geometry.coordinates[0]]}>
                                    <Popup>
                                        Nome: {element.name} <br /> ID: {element.id}
                                    </Popup>
                                </Marker>)
                            })
                        }
                        {
                            polygons.map(element => {
                                const reverse = element.geometry.coordinates[0].map(coordinates => coordinates.reverse())
                                return (<Polygon key={element.id} pathOptions={{ color: 'purple' }} positions={reverse}  />)
                            })
                        }
                    </FeatureGroup>
                </MapContainer>
            </MapDiv>
        </>        
    )   
}

export default Map;
