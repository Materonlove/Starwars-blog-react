import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SingleVehicles = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [vehicles, setVehicles] = useState({})
    const [imgSrc, setImgSrc] = useState("");

    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch(`/vehicles/${params.uid}`)
            if (response.ok) {
                console.log(respuestaJson)
                setVehicles(respuestaJson.result.properties)
                setImgSrc(`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`);
            }
        }
        cargaDatos()

    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <img src={imgSrc} alt="Imagen" className="img-fluid" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h2>{vehicles.name ? vehicles.name : ""}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio dolor odit, maxime pariatur autem totam omnis dignissimos possimus provident nisi voluptatibus voluptas consequuntur magni magnam rem maiores facilis quo! </p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer mt-auto py-3 bg-dark text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <p className="mb-0">Modelo: {vehicles.model ? vehicles.model : ""}</p>
                        </div>
                        <div className="col-md-4">
                            <p className="mb-0">Largura: {vehicles.length ? vehicles.length : ""}</p>
                        </div>
                        <div className="col-md-4">
                            <p className="mb-0">Pasajeros: {vehicles.passengers ? vehicles.passengers : ""}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default SingleVehicles 
