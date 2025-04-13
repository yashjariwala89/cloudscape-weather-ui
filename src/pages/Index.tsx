
import { useState } from "react";
import { defaultWeatherData, getWeatherData, WeatherData } from "@/utils/mockData";
import SearchBar from "@/components/SearchBar";
import CurrentWeather from "@/components/CurrentWeather";
import ForecastSection from "@/components/ForecastSection";
import HourlyForecast from "@/components/HourlyForecast";
import WeatherChart from "@/components/WeatherChart";
import ThemeToggle from "@/components/ThemeToggle";
import LocationButton from "@/components/LocationButton";
import WeatherAlerts from "@/components/WeatherAlerts";
import AirQualityCard from "@/components/AirQualityCard";
import AstroCard from "@/components/AstroCard";
import RealFeelIndicator from "@/components/RealFeelIndicator";
import PrecipitationRadar from "@/components/PrecipitationRadar";
import { ThemeProvider } from "@/hooks/use-theme";
import { toast } from "sonner";

const Index = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>(defaultWeatherData);

  const handleCitySelect = (city: string) => {
    try {
      const data = getWeatherData(city);
      setWeatherData(data);
      toast.success(`Weather updated for ${city}`);
    } catch (error) {
      toast.error("Failed to update weather data");
      console.error(error);
    }
  };

  const handleLocationDetected = (city: string) => {
    handleCitySelect(city);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <div className="container mx-auto px-4 py-8">
          <header className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <h1 className="text-2xl md:text-3xl font-bold text-weather-blue dark:text-weather-light-purple">
                Cloudscape Weather
              </h1>
              <div className="ml-4">
                <ThemeToggle />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <SearchBar onCitySelect={handleCitySelect} />
              <LocationButton onLocationDetected={handleLocationDetected} />
            </div>
          </header>

          <main className="animate-fade-in">
            <CurrentWeather data={weatherData} />
            
            {weatherData.alerts && weatherData.alerts.length > 0 && (
              <div className="mt-6">
                <WeatherAlerts alerts={weatherData.alerts} />
              </div>
            )}
            
            <ForecastSection forecasts={weatherData.dailyForecast} />
            <HourlyForecast hourlyData={weatherData.hourlyForecast} />
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <WeatherChart hourlyData={weatherData.hourlyForecast} />
              
              <div className="grid grid-cols-1 gap-4">
                {weatherData.airQuality && (
                  <AirQualityCard 
                    aqi={weatherData.airQuality.aqi} 
                    mainPollutant={weatherData.airQuality.mainPollutant}
                  />
                )}
                
                {weatherData.currentWeather.realFeelShade && (
                  <RealFeelIndicator 
                    temp={weatherData.currentWeather.temp}
                    realFeel={weatherData.currentWeather.feelsLike}
                    realFeelShade={weatherData.currentWeather.realFeelShade}
                  />
                )}
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {weatherData.astronomy && (
                <AstroCard 
                  sunrise={weatherData.astronomy.sunrise}
                  sunset={weatherData.astronomy.sunset}
                  moonPhase={weatherData.astronomy.moonPhase}
                  dayLength={weatherData.astronomy.dayLength}
                />
              )}
              
              <PrecipitationRadar 
                radarImages={[]} 
                city={weatherData.city} 
              />
            </div>
          </main>

          {/* <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>© 2025 Cloudscape Weather Dashboard. Made with ❤️ and React.</p>
            <p className="mt-1">Note: This is a demonstration using mock data.</p>
          </footer> */}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
