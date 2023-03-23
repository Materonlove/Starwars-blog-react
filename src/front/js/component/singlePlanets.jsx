import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SinglePlanets = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [planets, setPlanets] = useState({})
    const [population, setPopulation] = useState("");
    const [gravity, setGravity] = useState("");
    const [planetImage, setPlanetImage] = useState("");

    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch(`/planets/${params.uid}`)
            if (response.ok) {
                console.log(respuestaJson)
                setPlanets(respuestaJson.result.properties)
                setPlanetImage(`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`);
                setPopulation(respuestaJson.result.properties.population);
                setGravity(respuestaJson.result.properties.gravity);
            }

            
            const planetInfoResponse = await actions.useFetch(respuestaJson.result.properties.url)
            if (planetInfoResponse.response.ok) {
                const planetInfoData = planetInfoResponse.respuestaJson
                setPlanetInfo({
                    population: planetInfoData.population,
                    gravity: planetInfoData.gravity
                })
            }
        }
        cargaDatos()

    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <img src={planetImage} alt="Imagen" className="img-fluid" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h2>{planets.name ? planets.name : ""}</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at turpis quis purus bibendum sagittis. Donec congue purus eget massa mollis venenatis. Sed bibendum tellus magna, ac facilisis nulla tincidunt sit amet. Nulla facilisi. Praesent non tellus non augue malesuada sollicitudin.</p>
                        </div>
                    </div>

                    <footer className="bg-dark text-light p-3">
                        <div className="container">
                        <div className="row">
                      <div className="col-md-6">
                        <p>Población: {population}</p>
                        </div>
                       <div className="col-md-6">
                      <p>Gravedad: {gravity}</p>
                 </div>
                  </div>
                  </div>
                  </footer>
                </div>
            </div>

            
            
        </>
    )
}

export default SinglePlanets;

