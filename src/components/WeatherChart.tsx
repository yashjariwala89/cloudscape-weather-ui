
import { HourlyForecast } from "@/utils/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine
} from "recharts";
import { useTheme } from "@/hooks/use-theme";

interface WeatherChartProps {
  hourlyData: HourlyForecast[];
}

const WeatherChart = ({ hourlyData }: WeatherChartProps) => {
  const { isDarkMode } = useTheme();
  
  // Prepare data for the chart (next 12 hours)
  const chartData = hourlyData.slice(0, 12).map((hour) => ({
    time: hour.time,
    temperature: hour.temp,
    precipitation: hour.precipitation,
  }));

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Temperature Trend</h2>
      <Card className="weather-card">
        <CardContent className="p-4">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#9b87f5" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  vertical={false} 
                  stroke={isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
                />
                <XAxis 
                  dataKey="time" 
                  tick={{ fontSize: 12 }} 
                  tickMargin={10}
                  stroke={isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)"}
                />
                <YAxis 
                  domain={['dataMin - 2', 'dataMax + 2']}
                  tick={{ fontSize: 12 }}
                  tickMargin={10}
                  stroke={isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)"}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: isDarkMode ? "#1e293b" : "#fff",
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    color: isDarkMode ? "#fff" : "#333"
                  }}
                  itemStyle={{ color: "#9b87f5" }}
                  formatter={(value) => [`${value}°C`, "Temperature"]}
                  labelFormatter={(label) => `Time: ${label}`}
                />
                <ReferenceLine 
                  y={0} 
                  stroke={isDarkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"} 
                />
                <Area
                  type="monotone"
                  dataKey="temperature"
                  stroke="#9b87f5"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorTemp)"
                  activeDot={{ r: 6, fill: "#9b87f5", stroke: "#fff", strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherChart;
