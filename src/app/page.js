import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header";
import Container from "@/components/Container";
import Footer from "@/components/Footer";


export default function Home(WeatherIcon) {

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
  
  return (
    <body>
    <Header/>
    <Container WeatherIcon={WeatherIcon}/>
    <Footer/>
    </body>
  );
}
