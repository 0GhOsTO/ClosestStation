import { TrainProps } from "@/type";


export default async function getNewTrain(lat: string,lng: string): Promise<TrainProps[]>{
    const TRAIN_API_KEY = process.env.MBTA_API_KEY;
    console.log("LAT: ", lat);
    console.log("LNG: ", lng);
    //Choose 10 closest Bus or Train Station
    const url = `https://api-v3.mbta.com/stops?filter[latitude]=${lat}&filter[longitude]=${lng}&filter[radius]=0.01&sort=distance&page[limit]=10&api_key=${TRAIN_API_KEY}`;
    console.log("fetching###: ", url);

    const res = await fetch(url);
    if (!res.ok) throw new Error("Unable to fetch MBTA Data");

    const data = await res.json();
    console.log("Hey, at least", data);

    const parsedStops: TrainProps[] = data.data.map((stop: any) => ({
        id: stop.id,
        name: stop.attributes.name,
        street: stop.attributes.at_street || "Street Name unidentified",
        lat: stop.attributes.latitude,
        lng: stop.attributes.longitude,
    }));

    return parsedStops;
}