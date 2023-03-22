import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	//<a href="./demo.html">
	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container">
			<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
				<div className="ml-auto">
					
				<div>
					<div className="nav-item dropdown">
						<div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favoritos
						</div>
						<ul className="dropdown-menu list-unstyled" aria-labelledby="navbarDropdown">
							{store.favoritos && store.favoritos.length > 0 ? <>
								{store.favoritos.map((item, index) => {
									return   <li key={index}>
									<Link to={item.link}>{item.name}</Link>
									<button onClick={() => actions.removerFavorito(item.name)}>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
									</button>
								</li>
								})}
							</> : <></>}

						</ul>

						
					</div>
				
				</div>
			</div>
			</div>
		</nav>
	);
};
