import { 
    TODOS_LIST_FAIL,
    TODOS_LIST_REQUEST,
    TODOS_LIST_SUCCESS
    } from "../constants/todosConstants"

export const listTodos = () => async (dispatch , getState)=>{
    try{
        dispatch({
            type:TODOS_LIST_REQUEST,
        });
        const data = JSON.parse(localStorage.getItem('myStorage'));
        dispatch({
            type:TODOS_LIST_SUCCESS,
            payload:data,
        });

    }catch(error){
        dispatch({
            type:TODOS_LIST_FAIL,
            payload:"Error fetching data"
        })
    };)
}