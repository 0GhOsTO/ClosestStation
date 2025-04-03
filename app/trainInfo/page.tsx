import getNewTrain from "@/lib/getNewTrain";
import StopList from "@/components/StopList";

//Seek for the parameters if they exist.
// interface Props {
//     searchParams: {
//         lat?: string | undefined;
//         lng?: string | undefined;
//     };
// }
// Why is this not allowed? According to the latest convention...

interface TrainPageProps {
    searchParams: Promise<{ lat?: string; lng?: string }>;
}

export default async function TrainInfoPage({searchParams}:TrainPageProps){
    const {lat, lng} = await searchParams

    //If one of them does not contain any data...
    if(!lat || !lng){
        return <div>MISSING LOCATION DATA</div>
    }

    //receive the API result.
    const train = await getNewTrain(lat, lng);
    //grab the trimmed result.
    console.log("Filtered: ", train);

    return (
        <div className="flex flex-col items-center bg-cover bg-center" style={{ backgroundImage: "url('/BlurredMBTA.jpg')"}}>
            <StopList inputRef={train}/>
        </div>
    );
}