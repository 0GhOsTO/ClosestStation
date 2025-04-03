import {TrainProps} from "@/type";
import Link from "next/link";

export default function StopList({inp}:{inp: TrainProps}){

    return (
        <Link href={`https://maps.google.com/?q=${inp.name}`} target="_blank">
        <div className="bg-gray-100/80 shadow-2xl bg-opacity-70 rounded-xl p-4 m-2 w-96 hover:bg-white">
            <h1 className="font-bold text-2xl ">{inp.name}</h1>
            <p>{inp.street}</p>
            <p>Latitude: {inp.lat}</p>
            <p>Longitude: {inp.lng}</p>
        </div>
        </Link>
    );
}