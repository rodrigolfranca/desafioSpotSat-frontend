import { createContext, useState } from "react";    

export const PointsContext=createContext({});

export const PointsProvider = (props) => {

    const [points, setPoints] = useState([]);

    async function collectPoints() {
        const response = await fetch("http://localhost:3000/points/", {credentials: 'include'})
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
        setPoints(array);

    }

    return (
        <PointsContext.Provider
            value={{
                points,
                collectPoints
            }}
        >
            {props.children}
        </PointsContext.Provider>
    )

};

