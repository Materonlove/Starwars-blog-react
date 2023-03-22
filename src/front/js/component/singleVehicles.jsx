import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SingleVehicles = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [Vehicles, setVehicles] = useState({})

    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch(`/Vehicles/${params.uid}`)
            if (response.ok) {
                console.log(respuestaJson)
                setVehicles(respuestaJson.result.properties)
            }
        }
        cargaDatos()

    }, [])

    return (<>
       
        <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://via.placeholder.com/500x500" alt="Imagen" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h2>{Vehicles.name ? Vehicles.name : ""}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at turpis quis purus bibendum sagittis. Donec congue purus eget massa mollis venenatis. Sed bibendum tellus magna, ac facilisis nulla tincidunt sit amet. Nulla facilisi. Praesent non tellus non augue malesuada sollicitudin.</p>
          </div>
        </div>
      </div>
    </div>
    </>)
}

export default SingleVehicles