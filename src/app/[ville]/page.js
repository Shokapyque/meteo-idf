import { Suspense } from "react";
import Loading from "./loading";
import { getData } from "../../Utils/Weather";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wikipedia from "@/components/Wikipedia";
import WeatherCity from "@/components/WeatherCity";


async function Pageville  ({params}) {
    let data = await getData(params.ville)
    return <Suspense fallback={<Loading/>}>

        <Header/>
        <WeatherCity city={params.ville} ishomepage={false}/>
        <Wikipedia city={params.ville}/>
        <Footer/>
    </Suspense>
    
}

export default Pageville;
