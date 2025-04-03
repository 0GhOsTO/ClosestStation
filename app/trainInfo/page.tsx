import getNewTrain from "@/lib/getNewTrain";
import StopList from "@/components/StopList";

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
        <div className="flex flex-col items-center bg-blue-200 p-4">
            <h1>TrainInfo Page</h1>
            <StopList inputRef={train}/>;
        </div>
    );
}