import { Suspense } from "react";
import Loading from "./loading";
import { getData } from "../../Utils/Weather";
import WeatherCity from "@/components/WeatherCity";


async function Pageville  ({params}) {
    let data = await getData(params.ville)
    return <Suspense fallback={<Loading/>}>
         <WeatherCity city={params.ville}/>
    </Suspense>
    
}

export default Pageville;
