import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import CardPlanets from "../component/cardPlanets.jsx";
import { todoActions } from "../store/todos";

const Planets = () => {
    const { store, actions } = useContext(Context)
    const [listPeople, setListPeople] = useState({})

    //se ejecuta la primera vez que se reenderiza el componente
    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch("/people")
            if (response.ok) {
                console.log(respuestaJson)
                setListPeople(respuestaJson.results)
            }
        }
        cargaDatos()

    }, [])

 
}

export default Planets