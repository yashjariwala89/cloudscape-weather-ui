
import { WeatherData } from "@/utils/mockData";
import { WeatherIcon } from "@/utils/weatherIcons";
import { Droplets, Wind, Thermometer, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CurrentWeatherProps {
  data: WeatherData;
}

const CurrentWeather = ({ data }: CurrentWeatherProps) => {
  const { currentWeather, city, country } = data;
  const { temp, feelsLike, description, condition, humidity, windSpeed, visibility, uvIndex } = currentWeather;

  // Format date
  const now = new Date();
  const formattedDate = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <Card className="overflow-hidden weather-gradient-bg border-none">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-semibold flex items-center gap-2">
              {city}, {country}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {formattedDate} | Updated at {formattedTime}
            </p>
            <div className="mt-6">
              <div className="flex items-start">
                <span className="text-5xl md:text-6xl font-bold">{temp}°</span>
                <span className="text-xl md:text-2xl mt-1 ml-1 text-gray-600 dark:text-gray-300">C</span>
              </div>
              <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
                Feels like {feelsLike}°C
              </p>
              <p className="mt-2 text-md capitalize">{description}</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4">
              <WeatherIcon condition={condition} size={80} className="animate-float" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Droplets size={18} className="text-blue-500" />
                <span className="text-sm">
                  {humidity}% <span className="text-xs text-gray-500 dark:text-gray-400">Humidity</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Wind size={18} className="text-teal-500" />
                <span className="text-sm">
                  {windSpeed} km/h <span className="text-xs text-gray-500 dark:text-gray-400">Wind</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={18} className="text-indigo-500" />
                <span className="text-sm">
                  {visibility} km <span className="text-xs text-gray-500 dark:text-gray-400">Visibility</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Thermometer size={18} className="text-orange-500" />
                <span className="text-sm">
                  {uvIndex} <span className="text-xs text-gray-500 dark:text-gray-400">UV Index</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;
