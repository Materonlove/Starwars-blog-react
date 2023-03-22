import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import CardPeople from "../component/cardPeople.jsx";
import CardPlanets from "../component/cardPlanets.jsx";
import CardVehicles from "../component/cardVehicles.jsx";
import { todoActions } from "../store/todos";

const StarWars = () => {
    const { store, actions } = useContext(Context)
    const [listPeople, setListPeople] = useState({})
    const [listVehicles, setListVehicles] = useState({})
    const [listPlanets, setListPlanets] = useState({})

    //se ejecuta la primera vez que se reenderiza el componente
    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch("/people")
            if (response.ok) {
                console.log(respuestaJson)
                setListPeople(respuestaJson.results)
            }

            ({ respuestaJson, response } = await actions.useFetch("/planets"))
            if (response.ok) {
                console.log(respuestaJson)
                setListPlanets(respuestaJson.results)
            }
            ({ respuestaJson, response } = await actions.useFetch("/vehicles"))
            if (response.ok) {
                console.log(respuestaJson)
                setListVehicles(respuestaJson.results)
            }
        }
        const cargaParalelo = async () => {
            let promesaPlanetas = actions.useFetchParalelo("/planets")
            let promesaPeople = actions.useFetchParalelo("/people")
            let promesaVehicles = actions.useFetchParalelo("/vehicles")

            //resuelvo las tres promesas al mismo tiempo
            let [a, b, c] = await Promise.all([promesaPlanetas, promesaPeople, promesaVehicles])

            a = await a.json()
            setListPlanets(a.results)

            b = await b.json()
            setListPeople(b.results)

            c = await c.json()
            setListVehicles(c.results)
        }
        cargaParalelo() //paralelo //saldo en la cuenta, transferencia efectiva, etc

    }, [])

    useEffect(() => { }, [listPeople])
    useEffect(() => { }, [listPlanets])
    useEffect(() => { }, [listVehicles])

console.log(listPeople)
    return (<>

        <div className="container overflow-hidden text-center">
  <div className="row gx-5">

        <div className="col" >
            <h1>PERSONAJES</h1>
            <ul>
                {listPeople && listPeople.length > 0 ?
                    <>
                        {listPeople.map((item, index) => {
                            return <li>
                                <li key={index}></li>
                                {item.hair_color} 
                                <CardPeople name={item.name} uid={item.uid} hairColor={item.hair_color} />
                                
                            </li>
                        })}
                    </> : <></>}
            </ul>
        </div>

        <div className="col">
            <h1>PLANETAS</h1>
            <ul>
                {listPlanets && listPlanets.length > 0 ?
                    <>
                        {listPlanets.map((item, index) => {
                            return <li>
                                <li key={index}></li>
                                <CardPlanets name={item.name} uid={item.uid} />
                            </li>
                        })}
                    </> : <></>}
            </ul>
        </div>

        <div className="col">
            <h1>AUTOS</h1>
            <ul>
                {listVehicles && listVehicles.length > 0 ?
                    <>
                        {listVehicles.map((item, index) => {
                            return <li>
                                <li key={index}></li>
                                <CardVehicles name={item.name} uid={item.uid} />
                            </li>
                        })}
                    </> : <></>}
            </ul>
        </div>
        </div>
        </div>
    </>)
}

export default StarWars