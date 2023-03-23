import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardVehicles = (props) => {
    const { store, actions } = useContext(Context)
    const [vehicle, setVehicle] = useState({})
    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch(`/vehicles/${props.uid}`)
            if (response.ok) {
                console.log(respuestaJson)
                setVehicle(respuestaJson.result.properties)
                setVehicleImg(respuestaJson.result.image_url);
            }
        }
        cargaDatos()


    }, [props.uid])
    return (<>
        <div className="card" style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
                <p className="card-text">length:{vehicle.length}</p>
                <p>crew:{vehicle.crew}</p>
                <Link to={`/Vehicles/${props.uid}`} className="btn btn-primary">Learn More!</Link>
                <button type="button" className="btn btn-warning"onClick={() => {
                    actions.agregarFavorito({
                        name: props.name,
                        uid: props.uid,
                        category: "vehicles",
                        link: `/vehicles/${props.uid}`
                    })
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
                 </button>
            </div>
        </div>
    </>)
}

export default CardVehicles;

