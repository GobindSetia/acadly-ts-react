import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListdata,getPage,getList } from "../../Redux/List/Action";

const Search = () => {
    const { list, loading, error,page } = useSelector((store) => store.list);
    const dispatch = useDispatch();
    const [listItems, setListItems] = useState(Array.from(Array(25).keys(), n => n + 1));


    let id;
      function debounce(func,delay){
        if(id){
            clearTimeout(id);
        }
       id =  setTimeout(function(){
            func()
        },delay)
    }
    
    async function searchName(){
        try{
            let nameInput = document.getElementById("nameInput").value;
            if(nameInput.length<=3){
                return false;
            }
        let res = await fetch(`https://acadly-react-ts-list.herokuapp.com/students?_page=${page}&_limit=20&q=${nameInput}`);
        let data  = await res.json();
        console.log(data);
        dispatch(getList(data))
            }
        catch(err){
            console.log(err);
        }
    }


    return (
      <>
        <div>
          <input type="text" onChange={debounce(searchName,2000)} id="nameInput"/>
        </div>
      </>
    );
  };
  
  
  export default Search;