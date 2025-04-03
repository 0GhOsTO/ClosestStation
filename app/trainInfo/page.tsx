import getNewTrain from "@/lib/getNewTrain"

interface Props {
    searchParams: {
        lat?: string;
        lng?: string;
    };
}

export default async function TrainInfoPage({searchParams}:Props) {
    const lat = searchParams.lat;
    const lng = searchParams.lng;

    if(!lat || !lng){
        return <div>MISSING LOCATION DATA</div>
    }

    const train = await getNewTrain(lat, lng);
    console.log(train);
    return (
        <div>
            <h1>TrainInfo Page</h1>
            <p>Latitude: {lat}</p>
            <p>Longitude: {lng}</p>

        </div>
    );
}