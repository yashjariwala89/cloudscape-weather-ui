
import { DailyForecast } from "@/utils/mockData";
import ForecastCard from "./ForecastCard";

interface ForecastSectionProps {
  forecasts: DailyForecast[];
}

const ForecastSection = ({ forecasts }: ForecastSectionProps) => {
  // Display only the first 5 days for the forecast
  const visibleForecasts = forecasts.slice(0, 5);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">5-Day Forecast</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {visibleForecasts.map((forecast, index) => (
          <ForecastCard key={forecast.date} forecast={forecast} />
        ))}
      </div>
    </div>
  );
};

export default ForecastSection;
