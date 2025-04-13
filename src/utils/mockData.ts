
export interface WeatherData {
  city: string;
  country: string;
  currentWeather: {
    temp: number;
    feelsLike: number;
    description: string;
    condition: string;
    humidity: number;
    windSpeed: number;
    windDirection: string;
    pressure: number;
    visibility: number;
    uvIndex: number;
    timestamp: string;
  };
  hourlyForecast: HourlyForecast[];
  dailyForecast: DailyForecast[];
}

export interface HourlyForecast {
  time: string;
  temp: number;
  feelsLike: number;
  condition: string;
  precipitation: number;
  humidity: number;
  windSpeed: number;
}

export interface DailyForecast {
  date: string;
  day: string;
  tempMax: number;
  tempMin: number;
  condition: string;
  precipitation: number;
  humidity: number;
  windSpeed: number;
  sunrise: string;
  sunset: string;
}

export const locations = [
  { city: "New York", country: "United States" },
  { city: "London", country: "United Kingdom" },
  { city: "Tokyo", country: "Japan" },
  { city: "Paris", country: "France" },
  { city: "Sydney", country: "Australia" },
  { city: "Berlin", country: "Germany" },
  { city: "Rome", country: "Italy" },
  { city: "Cairo", country: "Egypt" },
  { city: "Rio de Janeiro", country: "Brazil" },
  { city: "Toronto", country: "Canada" },
];

export const defaultWeatherData: WeatherData = {
  city: "New York",
  country: "United States",
  currentWeather: {
    temp: 23,
    feelsLike: 24,
    description: "Partly cloudy with occasional sunshine",
    condition: "partly-cloudy",
    humidity: 65,
    windSpeed: 12,
    windDirection: "NE",
    pressure: 1012,
    visibility: 10,
    uvIndex: 5,
    timestamp: "2025-04-13T12:00:00",
  },
  hourlyForecast: [
    { time: "12 PM", temp: 23, feelsLike: 24, condition: "partly-cloudy", precipitation: 0, humidity: 65, windSpeed: 12 },
    { time: "1 PM", temp: 24, feelsLike: 25, condition: "partly-cloudy", precipitation: 0, humidity: 63, windSpeed: 11 },
    { time: "2 PM", temp: 25, feelsLike: 26, condition: "sunny", precipitation: 0, humidity: 60, windSpeed: 10 },
    { time: "3 PM", temp: 25, feelsLike: 26, condition: "sunny", precipitation: 0, humidity: 58, windSpeed: 9 },
    { time: "4 PM", temp: 24, feelsLike: 25, condition: "sunny", precipitation: 0, humidity: 59, windSpeed: 9 },
    { time: "5 PM", temp: 23, feelsLike: 24, condition: "partly-cloudy", precipitation: 0, humidity: 62, windSpeed: 8 },
    { time: "6 PM", temp: 22, feelsLike: 23, condition: "partly-cloudy", precipitation: 0, humidity: 65, windSpeed: 7 },
    { time: "7 PM", temp: 21, feelsLike: 21, condition: "partly-cloudy", precipitation: 0, humidity: 68, windSpeed: 6 },
    { time: "8 PM", temp: 20, feelsLike: 20, condition: "cloudy", precipitation: 10, humidity: 70, windSpeed: 6 },
    { time: "9 PM", temp: 19, feelsLike: 19, condition: "cloudy", precipitation: 20, humidity: 73, windSpeed: 5 },
    { time: "10 PM", temp: 18, feelsLike: 18, condition: "rain", precipitation: 40, humidity: 78, windSpeed: 6 },
    { time: "11 PM", temp: 17, feelsLike: 17, condition: "rain", precipitation: 50, humidity: 82, windSpeed: 7 },
    { time: "12 AM", temp: 16, feelsLike: 16, condition: "rain", precipitation: 30, humidity: 80, windSpeed: 6 },
    { time: "1 AM", temp: 16, feelsLike: 15, condition: "cloudy", precipitation: 20, humidity: 78, windSpeed: 5 },
    { time: "2 AM", temp: 15, feelsLike: 14, condition: "cloudy", precipitation: 10, humidity: 75, windSpeed: 5 },
    { time: "3 AM", temp: 15, feelsLike: 14, condition: "cloudy", precipitation: 5, humidity: 75, windSpeed: 4 },
    { time: "4 AM", temp: 14, feelsLike: 13, condition: "cloudy", precipitation: 5, humidity: 76, windSpeed: 4 },
    { time: "5 AM", temp: 14, feelsLike: 13, condition: "cloudy", precipitation: 5, humidity: 77, windSpeed: 4 },
    { time: "6 AM", temp: 15, feelsLike: 14, condition: "partly-cloudy", precipitation: 0, humidity: 76, windSpeed: 5 },
    { time: "7 AM", temp: 16, feelsLike: 15, condition: "partly-cloudy", precipitation: 0, humidity: 74, windSpeed: 6 },
    { time: "8 AM", temp: 17, feelsLike: 16, condition: "partly-cloudy", precipitation: 0, humidity: 72, windSpeed: 7 },
    { time: "9 AM", temp: 19, feelsLike: 18, condition: "partly-cloudy", precipitation: 0, humidity: 70, windSpeed: 8 },
    { time: "10 AM", temp: 20, feelsLike: 20, condition: "partly-cloudy", precipitation: 0, humidity: 68, windSpeed: 9 },
    { time: "11 AM", temp: 22, feelsLike: 22, condition: "partly-cloudy", precipitation: 0, humidity: 66, windSpeed: 10 },
  ],
  dailyForecast: [
    { 
      date: "2025-04-13", 
      day: "Today", 
      tempMax: 25, 
      tempMin: 16, 
      condition: "partly-cloudy", 
      precipitation: 30, 
      humidity: 65, 
      windSpeed: 12, 
      sunrise: "6:15 AM", 
      sunset: "7:45 PM" 
    },
    { 
      date: "2025-04-14", 
      day: "Mon", 
      tempMax: 22, 
      tempMin: 15, 
      condition: "rain", 
      precipitation: 70, 
      humidity: 75, 
      windSpeed: 15, 
      sunrise: "6:14 AM", 
      sunset: "7:46 PM" 
    },
    { 
      date: "2025-04-15", 
      day: "Tue", 
      tempMax: 19, 
      tempMin: 14, 
      condition: "rain", 
      precipitation: 80, 
      humidity: 80, 
      windSpeed: 18, 
      sunrise: "6:13 AM", 
      sunset: "7:47 PM" 
    },
    { 
      date: "2025-04-16", 
      day: "Wed", 
      tempMax: 20, 
      tempMin: 15, 
      condition: "cloudy", 
      precipitation: 40, 
      humidity: 70, 
      windSpeed: 14, 
      sunrise: "6:12 AM", 
      sunset: "7:48 PM" 
    },
    { 
      date: "2025-04-17", 
      day: "Thu", 
      tempMax: 23, 
      tempMin: 16, 
      condition: "partly-cloudy", 
      precipitation: 10, 
      humidity: 65, 
      windSpeed: 10, 
      sunrise: "6:11 AM", 
      sunset: "7:49 PM" 
    },
    { 
      date: "2025-04-18", 
      day: "Fri", 
      tempMax: 26, 
      tempMin: 17, 
      condition: "sunny", 
      precipitation: 0, 
      humidity: 55, 
      windSpeed: 8, 
      sunrise: "6:10 AM", 
      sunset: "7:50 PM" 
    },
    { 
      date: "2025-04-19", 
      day: "Sat", 
      tempMax: 27, 
      tempMin: 18, 
      condition: "sunny", 
      precipitation: 0, 
      humidity: 50, 
      windSpeed: 7, 
      sunrise: "6:09 AM", 
      sunset: "7:51 PM" 
    },
  ],
};

export const getWeatherData = (cityName: string): WeatherData => {
  // In a real app, this would fetch from an API
  // For now, we'll just return the default data with the city name changed
  return {
    ...defaultWeatherData,
    city: cityName,
    country: locations.find(loc => loc.city === cityName)?.country || defaultWeatherData.country
  };
};
