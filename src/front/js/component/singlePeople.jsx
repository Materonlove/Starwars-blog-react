import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SinglePeople = () => {
  const [characterInfo, setCharacterInfo] = useState({});
  const [image, setImage] = useState("");
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [people, setPeople] = useState({})

    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch(`/people/${params.uid}`)
            if (response.ok) {
                console.log(respuestaJson)
                setPeople(respuestaJson.result.properties)
                getCharacterInfo(respuestaJson.result.uid);
                getCharacterImage(respuestaJson.result.uid);
            }
        }
        cargaDatos()


    }, [params.uid])

    const getCharacterInfo = async (uid) => {
      let { respuestaJson, response } = await actions.useFetch(`/people/${uid}`);
      if (response.ok) {
        setImage(`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`);
        setCharacterInfo({
          eyeColor: respuestaJson.result.properties.eye_color,
          hairColor: respuestaJson.result.properties.hair_color,
          skinColor: respuestaJson.result.properties.skin_color
        });
      }
    }

    return (<>
        

        <div className="container">
      <div className="row">
        <div className="col-md-6">
        <img src={image} alt="Imagen" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h2>{people.name ? people.name : ""}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at turpis quis purus bibendum sagittis. Donec congue purus eget massa mollis venenatis. Sed bibendum tellus magna, ac facilisis nulla tincidunt sit amet. Nulla facilisi. Praesent non tellus non augue malesuada sollicitudin.</p>
          </div>
        </div>


        <footer className="bg-dark text-light p-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p>Color de ojos: {characterInfo.eyeColor}</p>
          </div>
          <div className="col-md-4">
            <p>Color de pelo: {characterInfo.hairColor}</p>
          </div>
          <div className="col-md-4">
            <p>Color de piel: {characterInfo.skinColor}</p>
          </div>
        </div>
      </div>
    </footer> 
      </div>
    </div>

    </>)

    
}

export default SinglePeople