import { Suspense } from "react";
import Loading from "./loading";
import { getData } from "../../Utils/Weather";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wikipedia from "@/components/Wikipedia";
import WeatherCity from "@/components/WeatherCity";
import WeatherForecast from "@/components/WeatherForecast";


async function Pageville  ({params}) {

    function WeatherIcon(svg) {
		switch (svg) {
			case "01d": // Clear
				return "/svg/clear-day.svg";
			case "01n":
				return "/svg/clear-night.svg";

			case "02d": // Partly Cloudy
				return "/svg/partly-cloudly-day.svg";
			case "02n":
				return "/svg/partly-cloudly-night.svg";

			case "03d": // Cloud
				return "/svg/cloud-day.svg";
			case "03n":
				return "/svg/cloud-night.svg";

			case "04d": // Full Cloud
				return "/svg/full-cloud.svg";
			case "04n":
				return "/svg/full-cloud.svg";

			case "09d": // Full rain
				return "/svg/full-rain.svg";
			case "09n":
				return "/svg/full-rain.svg";

			case "10d": // Rain
				return "/svg/rain.svg";
			case "10n":
				return "/svg/rain.svg";

			case "11d": // Thunderstorm
				return "/svg/thunderstorm.svg";
			case "11n":
				return "/svg/thunderstorm.svg";

			case "13d": // Snow
				return "/svg/snow-day.svg";
			case "13n":
				return "/svg/snow-night.svg";

			case "50d": // Mist
				return "/svg/mist.png";
			case "50n":
				return "/svg/mist.png";
			default:
				return <p>Error</p>;
		}
	}

    let data = await getData(params.ville)
    const city = decodeURI(params.ville);
    return <Suspense fallback={<Loading/>}>

        <Header/>
        <WeatherForecast city={city} data={data} WeatherIcon={WeatherIcon}/>
        <Wikipedia city={city}/>
        <Footer/>
    </Suspense>
     
}

export default Pageville;
