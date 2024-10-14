import { Suspense } from "react";
import Loading from "./loading";
import { getData } from "../../Utils/Weather";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wikipedia from "@/components/Wikipedia";
import WeatherForecast from "@/components/WeatherForecast";


async function Pageville  ({params}) {
    let data = await getData(params.ville)
    return <Suspense fallback={<Loading/>}>

        <Header/>
        <WeatherForecast city={params.ville}/>
        <Wikipedia city={params.ville}/>
        <Footer/>
    </Suspense>
    
}

export default Pageville;
