import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {obtenerPokemonesAccion,siguientePokemonAccion} from '../redux/pokeDuks'
const Pokemones = ()=>{
    const dispatch = useDispatch()
    const pokemones = useSelector(store=>store.pokemones)
    return(
        <div>
            lista de pokemones
            <button onClick={()=>dispatch(obtenerPokemonesAccion())}>Get Pokemones</button>
            <button onClick={()=>dispatch(siguientePokemonAccion(20))}>siguiente Pokemones</button>

            <ul>
                {
                    pokemones.map(item=>(
                        <li key={item.name}>item.name</li>
                    ))
                }
            </ul>
        </div>
    );
}
export default Pokemones