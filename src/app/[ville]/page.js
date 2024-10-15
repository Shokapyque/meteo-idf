'use client'
import { Suspense } from "react";
import Loading from "./loading";
import { getData } from "../../Utils/Weather";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wikipedia from "@/components/Wikipedia";
import WeatherForecast from "@/components/WeatherForecast";
import { useRouter } from "next/navigation";

async function Pageville({ params }) {
    const router = useRouter();
    const city = decodeURI(params.ville);

    let dataforecast;
	try {
		dataforecast = await getDataForecast(city);
		if (!dataforecast || dataforecast.cod !== 200) {
			router.push("/NotFound");
			return;
		}
	} catch (error) {
		router.push("/NotFound");
		return;
	}

    return (
        <Suspense fallback={<Loading />}>
            <Header />
            <WeatherForecast city={city} data={dataforecast}/>
            <Wikipedia city={city} />
            <Footer />
        </Suspense>
    );
}

export default Pageville;
