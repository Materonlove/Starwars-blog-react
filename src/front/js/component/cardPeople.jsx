import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { todoActions } from "../store/todos";

const CardPeople = (props) => {
    const { store, actions } = useContext(Context)
    const [people, setPeople] = useState({})
    const [imageURL, setImageURL] = useState("");
    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch(`/people/${props.uid}`)
            if (response.ok) {
                console.log(respuestaJson)
                setPeople(respuestaJson.result.properties)

                const id = props.uid.substring(props.uid.lastIndexOf("/") + 1);
                const imageURL = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
                setImageURL(imageURL);
            }
        }
        cargaDatos()


    }, [props.uid])
    return (<>
        <div className="card" style={{ width: "18rem" }}>
        <img src={imageURL} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{people.name}</h5>
                 <p className="card-text">Hair_color:{people.hair_color}</p>
                 <p>Skin_color:{people.skin_color}</p>
                 
                
                <Link to={`/people/${props.uid}`} className="btn btn-primary">Learn More!</Link>
                <button type="button" className="btn btn-warning"onClick={() => {
                    actions.agregarFavorito({
                        name: props.name,
                        uid: props.uid,
                        category: "people",
                        link: `/people/${props.uid}`
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

export default CardPeople;


