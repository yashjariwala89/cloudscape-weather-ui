
import { Card, CardContent } from "@/components/ui/card";
import { Thermometer } from "lucide-react";

interface RealFeelProps {
  temp: number;
  realFeel: number;
  realFeelShade: number;
}

const getRealFeelDescription = (realFeel: number): string => {
  if (realFeel < 0) return "Freezing";
  if (realFeel < 5) return "Very Cold";
  if (realFeel < 10) return "Cold";
  if (realFeel < 15) return "Cool";
  if (realFeel < 20) return "Slightly Cool";
  if (realFeel < 25) return "Comfortable";
  if (realFeel < 30) return "Warm";
  if (realFeel < 35) return "Hot";
  return "Very Hot";
};

const RealFeelIndicator = ({ temp, realFeel, realFeelShade }: RealFeelProps) => {
  const description = getRealFeelDescription(realFeel);
  const diff = Math.round(realFeel - temp);
  const diffText = diff > 0 ? `+${diff}` : `${diff}`;
  
  return (
    <Card className="weather-card h-full">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Thermometer className="text-orange-500" size={20} />
          <h3 className="font-semibold">RealFeel® Temperature</h3>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          <div>
            <div className="text-3xl font-bold">{realFeel}°</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {description}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {diffText}° from actual temperature
            </div>
          </div>
          
          <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-600 dark:text-gray-400">RealFeel Shade™</span>
              <span className="font-medium">{realFeelShade}°</span>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              How it actually feels in the shade
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RealFeelIndicator;
