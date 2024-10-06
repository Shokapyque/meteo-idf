import { Suspense } from "react";
import Loading from "./loading";
import { getData } from "../Utils/Weather";
import WeatherCity from "@/components/WeatherCity";


async function Pageville  ({params}) {
    let data = await getData(params.ville)
    console.log(data)
    return <Suspense fallback={<Loading/>}>
        <h1>{params.ville}</h1>
        <WeatherCity city={params.ville}/>
    </Suspense>
    
}

export default Pageville;
