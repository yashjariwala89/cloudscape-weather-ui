
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
  { city: "Amsterdam", country: "Netherlands" },
  { city: "Athens", country: "Greece" },
  { city: "Bangkok", country: "Thailand" },
  { city: "Barcelona", country: "Spain" },
  { city: "Beijing", country: "China" },
  { city: "Brussels", country: "Belgium" },
  { city: "Bucharest", country: "Romania" },
  { city: "Budapest", country: "Hungary" },
  { city: "Buenos Aires", country: "Argentina" },
  { city: "Copenhagen", country: "Denmark" },
  { city: "Dublin", country: "Ireland" },
  { city: "Helsinki", country: "Finland" },
  { city: "Istanbul", country: "Turkey" },
  { city: "Jakarta", country: "Indonesia" },
  { city: "Jerusalem", country: "Israel" },
  { city: "Johannesburg", country: "South Africa" },
  { city: "Kuala Lumpur", country: "Malaysia" },
  { city: "Lima", country: "Peru" },
  { city: "Lisbon", country: "Portugal" },
  { city: "Madrid", country: "Spain" },
  { city: "Manila", country: "Philippines" },
  { city: "Mexico City", country: "Mexico" },
  { city: "Montreal", country: "Canada" },
  { city: "Moscow", country: "Russia" },
  { city: "Mumbai", country: "India" },
  { city: "Nairobi", country: "Kenya" },
  { city: "Oslo", country: "Norway" },
  { city: "Prague", country: "Czech Republic" },
  { city: "Riyadh", country: "Saudi Arabia" },
  { city: "Seoul", country: "South Korea" },
  { city: "Shanghai", country: "China" },
  { city: "Singapore", country: "Singapore" },
  { city: "Stockholm", country: "Sweden" },
  { city: "Taipei", country: "Taiwan" },
  { city: "Tallinn", country: "Estonia" },
  { city: "Tehran", country: "Iran" },
  { city: "Vienna", country: "Austria" },
  { city: "Warsaw", country: "Poland" },
  { city: "Wellington", country: "New Zealand" },
  { city: "Zurich", country: "Switzerland" },
  { city: "Abu Dhabi", country: "United Arab Emirates" },
  { city: "Accra", country: "Ghana" },
  { city: "Addis Ababa", country: "Ethiopia" },
  { city: "Algiers", country: "Algeria" },
  { city: "Amman", country: "Jordan" },
  { city: "Ankara", country: "Turkey" },
  { city: "Antananarivo", country: "Madagascar" },
  { city: "Asunción", country: "Paraguay" },
  { city: "Baghdad", country: "Iraq" },
  { city: "Baku", country: "Azerbaijan" },
  { city: "Bamako", country: "Mali" },
  { city: "Bandar Seri Begawan", country: "Brunei" },
  { city: "Bangui", country: "Central African Republic" },
  { city: "Banjul", country: "Gambia" },
  { city: "Basseterre", country: "Saint Kitts and Nevis" },
  { city: "Beirut", country: "Lebanon" },
  { city: "Belgrade", country: "Serbia" },
  { city: "Belmopan", country: "Belize" },
  { city: "Bishkek", country: "Kyrgyzstan" },
  { city: "Bissau", country: "Guinea-Bissau" },
  { city: "Bogotá", country: "Colombia" },
  { city: "Brasília", country: "Brazil" },
  { city: "Bratislava", country: "Slovakia" },
  { city: "Brazzaville", country: "Republic of the Congo" },
  { city: "Bridgetown", country: "Barbados" },
  { city: "Castries", country: "Saint Lucia" },
  { city: "Chisinau", country: "Moldova" },
  { city: "Colombo", country: "Sri Lanka" },
  { city: "Conakry", country: "Guinea" },
  { city: "Dakar", country: "Senegal" },
  { city: "Damascus", country: "Syria" },
  { city: "Dar es Salaam", country: "Tanzania" },
  { city: "Dhaka", country: "Bangladesh" },
  { city: "Dili", country: "East Timor" },
  { city: "Djibouti", country: "Djibouti" },
  { city: "Doha", country: "Qatar" },
  { city: "Dubai", country: "United Arab Emirates" },
  { city: "Dushanbe", country: "Tajikistan" },
  { city: "Freetown", country: "Sierra Leone" },
  { city: "Gaborone", country: "Botswana" },
  { city: "Georgetown", country: "Guyana" },
  { city: "Guatemala City", country: "Guatemala" },
  { city: "Hanoi", country: "Vietnam" },
  { city: "Harare", country: "Zimbabwe" },
  { city: "Havana", country: "Cuba" },
  { city: "Ho Chi Minh City", country: "Vietnam" },
  { city: "Hong Kong", country: "China" },
  { city: "Islamabad", country: "Pakistan" },
  { city: "Kabul", country: "Afghanistan" },
  { city: "Kampala", country: "Uganda" },
  { city: "Kathmandu", country: "Nepal" },
  { city: "Khartoum", country: "Sudan" },
  { city: "Kiev", country: "Ukraine" },
  { city: "Kigali", country: "Rwanda" },
  { city: "Kingston", country: "Jamaica" },
  { city: "Kinshasa", country: "Democratic Republic of the Congo" },
  { city: "Kuwait City", country: "Kuwait" },
  { city: "La Paz", country: "Bolivia" },
  { city: "Libreville", country: "Gabon" },
  { city: "Lilongwe", country: "Malawi" },
  { city: "Ljubljana", country: "Slovenia" },
  { city: "Lomé", country: "Togo" },
  { city: "Luanda", country: "Angola" },
  { city: "Lusaka", country: "Zambia" },
  { city: "Luxembourg", country: "Luxembourg" },
  { city: "Macau", country: "China" },
  { city: "Managua", country: "Nicaragua" },
  { city: "Manama", country: "Bahrain" },
  { city: "Maputo", country: "Mozambique" },
  { city: "Maseru", country: "Lesotho" },
  { city: "Mbabane", country: "Eswatini" },
  { city: "Minsk", country: "Belarus" },
  { city: "Mogadishu", country: "Somalia" },
  { city: "Monaco", country: "Monaco" },
  { city: "Monrovia", country: "Liberia" },
  { city: "Montevideo", country: "Uruguay" },
  { city: "Moroni", country: "Comoros" },
  { city: "Muscat", country: "Oman" },
  { city: "N'Djamena", country: "Chad" },
  { city: "Nay Pyi Taw", country: "Myanmar" },
  { city: "New Delhi", country: "India" },
  { city: "Niamey", country: "Niger" },
  { city: "Nicosia", country: "Cyprus" },
  { city: "Nouakchott", country: "Mauritania" },
  { city: "Nukuʻalofa", country: "Tonga" },
  { city: "Nur-Sultan", country: "Kazakhstan" },
  { city: "Ouagadougou", country: "Burkina Faso" },
  { city: "Palikir", country: "Micronesia" },
  { city: "Panama City", country: "Panama" },
  { city: "Paramaribo", country: "Suriname" },
  { city: "Phnom Penh", country: "Cambodia" },
  { city: "Port Louis", country: "Mauritius" },
  { city: "Port Moresby", country: "Papua New Guinea" },
  { city: "Port of Spain", country: "Trinidad and Tobago" },
  { city: "Port Vila", country: "Vanuatu" },
  { city: "Port-au-Prince", country: "Haiti" },
  { city: "Porto-Novo", country: "Benin" },
  { city: "Pretoria", country: "South Africa" },
  { city: "Pyongyang", country: "North Korea" },
  { city: "Quito", country: "Ecuador" },
  { city: "Rabat", country: "Morocco" },
  { city: "Reykjavik", country: "Iceland" },
  { city: "Riga", country: "Latvia" },
  { city: "Roseau", country: "Dominica" },
  { city: "San José", country: "Costa Rica" },
  { city: "San Marino", country: "San Marino" },
  { city: "San Salvador", country: "El Salvador" },
  { city: "Sana'a", country: "Yemen" },
  { city: "Santiago", country: "Chile" },
  { city: "Santo Domingo", country: "Dominican Republic" },
  { city: "Sarajevo", country: "Bosnia and Herzegovina" },
  { city: "Skopje", country: "North Macedonia" },
  { city: "Sofia", country: "Bulgaria" },
  { city: "St. George's", country: "Grenada" },
  { city: "St. John's", country: "Antigua and Barbuda" },
  { city: "Suva", country: "Fiji" },
  { city: "Tegucigalpa", country: "Honduras" },
  { city: "Thimphu", country: "Bhutan" },
  { city: "Tirana", country: "Albania" },
  { city: "Tripoli", country: "Libya" },
  { city: "Tunis", country: "Tunisia" },
  { city: "Ulaanbaatar", country: "Mongolia" },
  { city: "Vaduz", country: "Liechtenstein" },
  { city: "Valletta", country: "Malta" },
  { city: "Vatican City", country: "Vatican City" },
  { city: "Victoria", country: "Seychelles" },
  { city: "Vientiane", country: "Laos" },
  { city: "Vilnius", country: "Lithuania" },
  { city: "Windhoek", country: "Namibia" },
  { city: "Yamoussoukro", country: "Ivory Coast" },
  { city: "Yaoundé", country: "Cameroon" },
  { city: "Yerevan", country: "Armenia" },
  { city: "Zagreb", country: "Croatia" },
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
