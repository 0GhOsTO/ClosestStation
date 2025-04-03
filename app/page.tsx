import TrainDisplay from "@/components/TrainDisplay";

export default function Home() {

    return(
    <div className="flex flex-col items-center p-4 bg-cover bg-center" style={{ backgroundImage: "url('/BlurredMBTA.jpg')"}}>
        <TrainDisplay />
    </div>
    );
}