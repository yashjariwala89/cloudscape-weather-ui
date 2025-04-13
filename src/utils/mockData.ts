export interface HourlyForecast {
  time: string;
  temp: number;
  condition: string;
  precipitation: number;
}

export interface DailyForecast {
  day: string;
  tempMax: number;
  tempMin: number;
  condition: string;
}

// Add additional properties to CurrentWeather interface
export interface CurrentWeather {
  temp: number;
  feelsLike: number;
  realFeelShade?: number;
  description: string;
  condition: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  uvIndex: number;
  pressure?: number;
  dewPoint?: number;
  cloudCover?: number;
}

// Add additional properties to WeatherData interface
export interface WeatherData {
  city: string;
  country: string;
  currentWeather: CurrentWeather;
  hourlyForecast: HourlyForecast[];
  dailyForecast: DailyForecast[];
  airQuality?: {
    aqi: number;
    mainPollutant: string;
  };
  astronomy?: {
    sunrise: string;
    sunset: string;
    moonPhase: string;
    dayLength: string;
  };
  alerts?: {
    type: "warning" | "watch" | "advisory";
    title: string;
    description: string;
    severity: "low" | "moderate" | "high" | "severe";
    expiresAt: string;
  }[];
}

export const defaultWeatherData: WeatherData = {
  city: "London",
  country: "United Kingdom",
  currentWeather: {
    temp: 15,
    feelsLike: 13,
    realFeelShade: 11,
    description: "Partly cloudy with occasional sunny spells",
    condition: "partly-cloudy",
    humidity: 75,
    windSpeed: 12,
    visibility: 10,
    uvIndex: 3,
    pressure: 1015,
    dewPoint: 10,
    cloudCover: 65
  },
  hourlyForecast: [
    { time: "12 AM", temp: 14, condition: "partly-cloudy", precipitation: 5 },
    { time: "3 AM", temp: 13, condition: "cloudy", precipitation: 10 },
    { time: "6 AM", temp: 13, condition: "cloudy", precipitation: 15 },
    { time: "9 AM", temp: 14, condition: "partly-cloudy", precipitation: 5 },
    { time: "12 PM", temp: 16, condition: "sunny", precipitation: 0 },
    { time: "3 PM", temp: 17, condition: "partly-cloudy", precipitation: 0 },
    { time: "6 PM", temp: 16, condition: "partly-cloudy", precipitation: 5 },
    { time: "9 PM", temp: 15, condition: "cloudy", precipitation: 10 },
  ],
  dailyForecast: [
    { day: "Today", tempMax: 16, tempMin: 13, condition: "partly-cloudy" },
    { day: "Tomorrow", tempMax: 17, tempMin: 14, condition: "sunny" },
    { day: "Wed", tempMax: 18, tempMin: 15, condition: "sunny" },
    { day: "Thu", tempMax: 16, tempMin: 13, condition: "rain" },
    { day: "Fri", tempMax: 15, tempMin: 12, condition: "rain" },
  ],
  airQuality: {
    aqi: 38,
    mainPollutant: "PM2.5"
  },
  astronomy: {
    sunrise: "06:45 AM",
    sunset: "07:32 PM",
    moonPhase: "Waxing Crescent",
    dayLength: "12h 47m"
  },
  alerts: [
    {
      type: "advisory",
      title: "Heavy Rain Advisory",
      description: "Periods of heavy rainfall possible tonight through tomorrow morning. Be aware of potential localized flooding in low-lying areas.",
      severity: "moderate",
      expiresAt: "Tomorrow, 09:00 AM"
    }
  ]
};

export const getWeatherData = (city: string): WeatherData => {
  if (city.toLowerCase() === "new york") {
    return {
      ...defaultWeatherData,
      city: "New York",
      country: "USA",
      currentWeather: {
        temp: 22,
        feelsLike: 24,
        realFeelShade: 25,
        description: "Clear and sunny",
        condition: "sunny",
        humidity: 60,
        windSpeed: 8,
        visibility: 12,
        uvIndex: 7,
        pressure: 1012,
        dewPoint: 14,
        cloudCover: 10
      },
      hourlyForecast: [
        { time: "12 AM", temp: 20, condition: "clear", precipitation: 0 },
        { time: "3 AM", temp: 19, condition: "clear", precipitation: 0 },
        { time: "6 AM", temp: 20, condition: "sunny", precipitation: 0 },
        { time: "9 AM", temp: 23, condition: "sunny", precipitation: 0 },
        { time: "12 PM", temp: 25, condition: "sunny", precipitation: 0 },
        { time: "3 PM", temp: 26, condition: "sunny", precipitation: 0 },
        { time: "6 PM", temp: 24, condition: "clear", precipitation: 0 },
        { time: "9 PM", temp: 22, condition: "clear", precipitation: 0 },
      ],
      dailyForecast: [
        { day: "Today", tempMax: 26, tempMin: 20, condition: "sunny" },
        { day: "Tomorrow", tempMax: 28, tempMin: 22, condition: "sunny" },
        { day: "Wed", tempMax: 29, tempMin: 23, condition: "sunny" },
        { day: "Thu", tempMax: 27, tempMin: 21, condition: "partly-cloudy" },
        { day: "Fri", tempMax: 25, tempMin: 19, condition: "partly-cloudy" },
      ],
      astronomy: {
        sunrise: "05:50 AM",
        sunset: "08:15 PM",
        moonPhase: "Full Moon",
        dayLength: "14h 25m"
      },
      airQuality: {
        aqi: 65,
        mainPollutant: "O3"
      },
      alerts: []
    };
  } else if (city.toLowerCase() === "tokyo") {
    return {
      ...defaultWeatherData,
      city: "Tokyo",
      country: "Japan",
      currentWeather: {
        temp: 28,
        feelsLike: 30,
        realFeelShade: 32,
        description: "Hot and humid with thunderstorms",
        condition: "thunderstorm",
        humidity: 80,
        windSpeed: 10,
        visibility: 8,
        uvIndex: 6,
        pressure: 1008,
        dewPoint: 24,
        cloudCover: 90
      },
      hourlyForecast: [
        { time: "12 AM", temp: 26, condition: "cloudy", precipitation: 20 },
        { time: "3 AM", temp: 25, condition: "cloudy", precipitation: 25 },
        { time: "6 AM", temp: 26, condition: "rain", precipitation: 40 },
        { time: "9 AM", temp: 28, condition: "thunderstorm", precipitation: 60 },
        { time: "12 PM", temp: 30, condition: "thunderstorm", precipitation: 70 },
        { time: "3 PM", temp: 31, condition: "thunderstorm", precipitation: 60 },
        { time: "6 PM", temp: 29, condition: "rain", precipitation: 50 },
        { time: "9 PM", temp: 27, condition: "cloudy", precipitation: 30 },
      ],
      dailyForecast: [
        { day: "Today", tempMax: 31, tempMin: 25, condition: "thunderstorm" },
        { day: "Tomorrow", tempMax: 32, tempMin: 26, condition: "thunderstorm" },
        { day: "Wed", tempMax: 33, tempMin: 27, condition: "rain" },
        { day: "Thu", tempMax: 30, tempMin: 24, condition: "cloudy" },
        { day: "Fri", tempMax: 28, tempMin: 22, condition: "cloudy" },
      ],
      astronomy: {
        sunrise: "04:55 AM",
        sunset: "07:00 PM",
        moonPhase: "New Moon",
        dayLength: "12h 5m"
      },
      airQuality: {
        aqi: 42,
        mainPollutant: "PM2.5"
      },
      alerts: [
        {
          type: "warning",
          title: "Severe Thunderstorm Warning",
          description: "Possible severe thunderstorms with heavy rain and strong winds. Stay indoors and avoid travel.",
          severity: "high",
          expiresAt: "Today, 10:00 PM"
        }
      ]
    };
  }

  // Return a modified version of defaultWeatherData with the city name
  return {
    ...defaultWeatherData,
    city: city,
    astronomy: {
      sunrise: "06:45 AM",
      sunset: "07:32 PM",
      moonPhase: "Waxing Crescent",
      dayLength: "12h 47m"
    },
    airQuality: {
      aqi: Math.floor(Math.random() * 100) + 20,
      mainPollutant: ["PM2.5", "PM10", "O3", "NO2"][Math.floor(Math.random() * 4)]
    },
    alerts: Math.random() > 0.7 ? [
      {
        type: "advisory",
        title: "Heavy Rain Advisory",
        description: "Periods of heavy rainfall possible tonight through tomorrow morning. Be aware of potential localized flooding in low-lying areas.",
        severity: "moderate",
        expiresAt: "Tomorrow, 09:00 AM"
      }
    ] : []
  };
};

export const locations = [
  { city: "London", country: "United Kingdom" },
  { city: "New York", country: "USA" },
  { city: "Tokyo", country: "Japan" },
  { city: "Paris", country: "France" },
  { city: "Sydney", country: "Australia" },
  { city: "Rio de Janeiro", country: "Brazil" },
  { city: "Moscow", country: "Russia" },
  { city: "Beijing", country: "China" },
  { city: "Cairo", country: "Egypt" },
  { city: "Johannesburg", country: "South Africa" },
  { city: "Berlin", country: "Germany" },
  { city: "Rome", country: "Italy" },
  { city: "Madrid", country: "Spain" },
  { city: "Toronto", country: "Canada" },
  { city: "Mumbai", country: "India" },
  { city: "Mexico City", country: "Mexico" },
  { city: "Buenos Aires", country: "Argentina" },
  { city: "Istanbul", country: "Turkey" },
  { city: "Bangkok", country: "Thailand" },
  { city: "Lagos", country: "Nigeria" },
];
