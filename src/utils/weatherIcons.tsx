
import { 
  Sun, 
  Cloud, 
  CloudSun, 
  CloudRain, 
  CloudLightning, 
  CloudSnow, 
  CloudFog, 
  CloudDrizzle,
  Wind
} from "lucide-react";
import { ReactNode } from "react";

interface WeatherIconProps {
  condition: string;
  size?: number;
  className?: string;
}

export const WeatherIcon = ({ condition, size = 24, className = "" }: WeatherIconProps): ReactNode => {
  const iconProps = {
    size,
    className: `${className}`
  };

  switch (condition) {
    case 'sunny':
      return <Sun {...iconProps} className={`text-yellow-500 ${className}`} />;
    case 'partly-cloudy':
      return <CloudSun {...iconProps} className={`text-weather-blue ${className}`} />;
    case 'cloudy':
      return <Cloud {...iconProps} className={`text-weather-cool-gray ${className}`} />;
    case 'rain':
      return <CloudRain {...iconProps} className={`text-weather-deep-blue ${className}`} />;
    case 'thunderstorm':
      return <CloudLightning {...iconProps} className={`text-indigo-600 ${className}`} />;
    case 'snow':
      return <CloudSnow {...iconProps} className={`text-blue-100 ${className}`} />;
    case 'fog':
      return <CloudFog {...iconProps} className={`text-gray-400 ${className}`} />;
    case 'drizzle':
      return <CloudDrizzle {...iconProps} className={`text-blue-400 ${className}`} />;
    case 'windy':
      return <Wind {...iconProps} className={`text-weather-cool-gray-light ${className}`} />;
    default:
      return <Sun {...iconProps} className={`text-yellow-500 ${className}`} />;
  }
};

export const getWeatherEmoji = (condition: string): string => {
  switch (condition) {
    case 'sunny':
      return '☀️';
    case 'partly-cloudy':
      return '⛅';
    case 'cloudy':
      return '☁️';
    case 'rain':
      return '🌧️';
    case 'thunderstorm':
      return '⛈️';
    case 'snow':
      return '❄️';
    case 'fog':
      return '🌫️';
    case 'drizzle':
      return '🌦️';
    case 'windy':
      return '💨';
    default:
      return '☀️';
  }
};
