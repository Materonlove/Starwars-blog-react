export const favoritosStore = {
    favoritos: [], // [{name:"Luke", uid:1, categoria:"people", link:"/people/1"},{}]

}

export function favoritosActions(getStore, getActions, setStore) {
    return {
        agregarFavorito: async (objeto) => {
            let store = getStore()
            let arrTemp = store.favoritos.slice() //copio el estado centralizado

            if (arrTemp.length > 0) {
                for (let i = 0; i < arrTemp.length; i++) {
                    if (arrTemp[i]["name"] == objeto.name) {
                        return //saldría de la función aquí
                    }
                }
            }

            arrTemp.push(objeto)
            setStore({ ...store, favoritos: arrTemp }) // [..favoritos, objeto]
            return true;
        },

        agregarFavorito: async (objeto) => {
            let store = getStore()
            let arrTemp = store.favoritos.slice() //copio el estado centralizado
        
            if (arrTemp.length > 0) {
                for (let i = 0; i < arrTemp.length; i++) {
                    if (arrTemp[i]["name"] == objeto.name) {
                        return //saldría de la función aquí
                    }
                }
            }
        
            arrTemp.push(objeto)
            setStore({ ...store, favoritos: arrTemp, favoritosNombres: arrTemp.map(item => item.name) }) // [..favoritos, objeto]
            return true;
        },

        removerFavorito: async (nombreFavorito) => {
            let store = getStore();
            let nuevosFavoritos = store.favoritos.filter(favorito => favorito.name !== nombreFavorito);
            setStore({ ...store, favoritos: nuevosFavoritos, favoritosNombres: nuevosFavoritos.map(favorito => favorito.name) });
        },
    }

    
        
            // ...
          
        
    
}



  