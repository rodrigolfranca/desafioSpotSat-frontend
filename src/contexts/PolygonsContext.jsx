import { createContext, useState } from "react";    

export const PolygonsContext=createContext({});

export const PolygonsProvider = (props) => {

    const [polygons, setPolygons] = useState([]);

    async function collectPolygons() {
        const response = await fetch("http://localhost:3000/polygons/", {credentials: 'include'})
                               .then(data => data.json())
                               .then(resposta => resposta)
                               .catch(error=> console.log(error));
        const array = [];        
        response[0].geojson.features.forEach(element => {
            const dado = {
                "id": element.properties.id,
                "name": element.properties.name,
                "geometry": element.geometry
            }
            array.push(dado)
        });
        setPolygons(array);

    }

    return (
        <PolygonsContext.Provider
            value={{
                polygons,
                collectPolygons
            }}
        >
            {props.children}
        </PolygonsContext.Provider>
    )

};