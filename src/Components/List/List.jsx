import { useEffect, useState } from "react";
import "./list.css"
import {nanoid} from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { getListdata,getPage } from "../../Redux/List/Action";

const List = () => {
    const { list, loading, error,page } = useSelector((store) => store.list);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPage(page+1));
        dispatch(getListdata(page));
        window.addEventListener('scroll', handleScroll);
      }, []);

      function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop != document.documentElement.offsetHeight) return;
        dispatch(getPage(page+1));
        dispatch(getListdata(page));
      }


    return (
      <>
        <div>
          <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Lectures Attended</th>
            <th>Total Lectures</th>
            <th>Maths</th>
            <th>English</th>
          </tr>
        </thead>
        <tbody>
          {list.map((e,i) => {
            return (
              <tr
                key={e.i}>
                <td>{e.name}</td>
                <td><img src={e.avatarURL} alt="" /></td>
                <td>{e.lecturesAttended}</td>
                <td>{e.totalLectures}</td>
                <td>{e.marks.mth101.marksObtained}</td>
                <td>{e.marks.eng112.marksObtained}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </div>
      </>
    );
  };
  
  export default List;