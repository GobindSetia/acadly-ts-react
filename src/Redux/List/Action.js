import axios from "axios";


//Action Types
export const GET_LIST = "GET_LIST";
export const GET_LIST_LOADING = "GET_LIST_LOADING";
export const GET_LIST_ERROR = "GET_LIST_ERROR";
export const GET_PAGE = "GET_PAGE";

//Action Creators
export const getList = (list) => ({ type: GET_LIST, payload: list });
export const getListLoading = () => ({ type: GET_LIST_LOADING });
export const getListError = () => ({ type: GET_LIST_ERROR });
export const getPage = (payload) => ({ type: GET_PAGE,payload: payload  });

let url="";
export const getListdata = (page)=>(dispatch)=>{
    dispatch(getListLoading());
        axios.get(`https://acadly-react-ts-list.herokuapp.com/students?_page=${page}&_limit=20`).then(({data})=>{   
        dispatch(getList(data));
        })
        .catch((err)=>{
            dispatch(getListError(err))
        })
    
}


