
import { HourlyForecast } from "@/utils/mockData";
import { WeatherIcon } from "@/utils/weatherIcons";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface HourlyForecastProps {
  hourlyData: HourlyForecast[];
}

const HourlyForecastComponent = ({ hourlyData }: HourlyForecastProps) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">24-Hour Forecast</h2>
      <Card className="border-weather-soft-blue/30">
        <CardContent className="p-4">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-6 pb-2">
              {hourlyData.map((hour, index) => (
                <div key={index} className="flex flex-col items-center min-w-[80px] py-2">
                  <span className="text-sm font-medium">{hour.time}</span>
                  <WeatherIcon condition={hour.condition} size={28} className="my-3" />
                  <span className="font-bold">{hour.temp}°</span>
                  <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex flex-col items-center">
                    <span>{hour.precipitation}%</span>
                    <span className="mt-1">Rain</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default HourlyForecastComponent;
