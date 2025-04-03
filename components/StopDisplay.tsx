import {TrainProps} from "@/type";

export default function StopList({inp}:{inp: TrainProps}){
    return (
        <div className="bg-sky-400 rounded-xl p-4 m-2 w-96">
            <h4 className="font-bold text-3xl">{inp.name}</h4>
            <p>{inp.street}</p>
            <p>{inp.lat}</p>
            <p>{inp.lng}</p>
        </div>
    );
}