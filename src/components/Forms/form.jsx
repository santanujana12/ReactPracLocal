import { useReducer } from "preact/hooks";

function reducer(state,action){
    switch(action.type){
        case 'FORM':
            return {
                ...state,
                state:action.value
            }
        default:
            throw new Error();
    }

}

const Form = () =>{

    const [formText,dispatch] = useReducer(reducer,'');

    const handleChange = (e) =>{
        dispatch({type:'FORM',value:e.target.value})
    }

    return (
        <>
            <h1>Form using useReducer</h1>
            <label htmlFor=""></label>
            <input type="text" value={formText.state} id="form1" placeholder="Reducer forms" onChange={(e)=>handleChange(e)}/>
            <input type="text" value={}/>
            {console.log(formText.state)}
        </>
    );
}
export default Form;