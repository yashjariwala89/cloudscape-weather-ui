
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface AirQualityProps {
  aqi: number;
  mainPollutant: string;
}

const getAirQualityLabel = (aqi: number): string => {
  if (aqi <= 50) return "Good";
  if (aqi <= 100) return "Moderate";
  if (aqi <= 150) return "Unhealthy for Sensitive Groups";
  if (aqi <= 200) return "Unhealthy";
  if (aqi <= 300) return "Very Unhealthy";
  return "Hazardous";
};

const getAirQualityColor = (aqi: number): string => {
  if (aqi <= 50) return "bg-green-500";
  if (aqi <= 100) return "bg-yellow-500";
  if (aqi <= 150) return "bg-orange-500";
  if (aqi <= 200) return "bg-red-500";
  if (aqi <= 300) return "bg-purple-500";
  return "bg-red-900";
};

const AirQualityCard = ({ aqi, mainPollutant }: AirQualityProps) => {
  const qualityLabel = getAirQualityLabel(aqi);
  const progressColor = getAirQualityColor(aqi);
  const percentage = Math.min((aqi / 300) * 100, 100);

  return (
    <Card className="weather-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          Air Quality Index
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info size={16} className="text-weather-blue dark:text-weather-light-purple" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">
                  The Air Quality Index (AQI) is used for reporting daily air quality. 
                  Higher values mean greater pollution and health concerns.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-2">
          <div className="text-2xl font-bold">{aqi}</div>
          <div className="text-right">
            <span className="font-medium">{qualityLabel}</span>
          </div>
        </div>
        
        <Progress value={percentage} className="h-2" indicatorClassName={progressColor} />
        
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex justify-between">
            <span>Main Pollutant:</span>
            <span className="font-medium">{mainPollutant}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AirQualityCard;
