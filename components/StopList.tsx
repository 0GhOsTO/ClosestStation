"use client";

import {TrainProps} from "@/type";
import StopDisplay from "./StopDisplay";

export default function StopList({
 inputRef}: {inputRef: TrainProps[];
}){

    //stops containing json
    //inputRef containing the json value
    const stops = inputRef;
    console.log("###Rawdata: ", stops);

    return(
        <div className="flex flex-col items-center">
            {stops.map((p)=> (
                <StopDisplay key={p.id} inp={p}/>
            ))}
        </div>

    )
}