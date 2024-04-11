
import React from "react";
import SideMenu from "./sideMenu";
import CurrentData from "./currentData";
import portfolio from "../dark-portfolio.png"

export default function DarkDashboard(){
    return(
        <>
        <div className="inset-0 bg-gray-900 flex text-white">
            {/* <h3> we are here</h3> */}
            <SideMenu/>
            <CurrentData/>
            <img src={portfolio} alt="" 
            // className="ml-32 "
            />
        </div>
        </>
    )
}