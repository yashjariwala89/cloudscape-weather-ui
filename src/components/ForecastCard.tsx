
import { DailyForecast } from "@/utils/mockData";
import { WeatherIcon } from "@/utils/weatherIcons";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ForecastCardProps {
  forecast: DailyForecast;
}

const ForecastCard = ({ forecast }: ForecastCardProps) => {
  const { day, tempMax, tempMin, condition } = forecast;

  return (
    <Card className="weather-card weather-card-hover">
      <CardContent className="p-4 flex flex-col items-center">
        <h3 className="font-medium text-sm">{day}</h3>
        <div className="my-3">
          <WeatherIcon condition={condition} size={36} />
        </div>
        <div className="flex items-center gap-3 mt-1">
          <div className="flex items-center">
            <ArrowUp size={14} className="text-red-500 mr-1" />
            <span className="font-medium">{tempMax}°</span>
          </div>
          <div className="flex items-center">
            <ArrowDown size={14} className="text-blue-500 mr-1" />
            <span className="text-gray-600 dark:text-gray-400">{tempMin}°</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ForecastCard;
