 //constantes
 const dataInicial={
     array:[],
     offset:0
 }
 const OBTENER_POKEMONES_EXITO= 'OBTENER_POKEMONES_EXITO'
 const SIGUIENTE_POKEMONES_EXITO= 'SIGUIENTE_POKEMONES_EXITO'

 //reducer
 export default function pokeReducer(state=dataInicial, action){
   switch(action.type){
     case OBTENER_POKEMONES_EXITO:
         return{
             ...state,array: action.payload
         }
    case SIGUIENTE_POKEMONES_EXITO:
            return{
                ...state,array: action.payload.array, offset:action.payload.offset
            }
      default:
          return state
   }
 }
 //accion
 export const obtenerPokemonesAccion= () => async (dispatch,getState)=>{
     //  console.log('getState',getState().pokemones.offset)
     const offset =getState().pokemones.offset
     try{
         const res= await axios.get(`http://pokeapi.co/api/v2/pokemon?offset=${offset }&limit=20`)
         dispatch({
             type: OBTENER_POKEMONES_EXITO,
             payload:res.data.results
         })

     }catch(error){
         console.log(error)
     }

 }
 export const siguientePokemonAccion =(numero)=> async (dispatch,getState) =>{
     const offset =getState().pokemones.offset
     const siguiente = offset+numero
     try{
         const res= await axios.get(`http://pokeapi.co/api/v2/pokemon?offset=${siguiente }&limit=20`)
         dispatch({
             type:SIGUIENTE_POKEMONES_EXITO,
             payload:{
                 array:res.data.resuslts,
                 offset:siguiente
             }
         })
        }catch(error){
            console.log(error)
        }
 }