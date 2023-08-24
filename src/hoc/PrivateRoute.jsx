import { useQuery } from "@apollo/client";
import React from "react";
import { Navigate } from "react-router-dom";
import { IS_LOG } from "../utils/query";

const PrivateRoute = ({element: Element})=>{
    const {data} = useQuery(IS_LOG);
    if(data?.isLog === true) return Element
    else return <Navigate replace to={'/signin'} />
  }
export default PrivateRoute; 