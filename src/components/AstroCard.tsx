
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sunrise, Sunset, Moon } from "lucide-react";

interface AstroCardProps {
  sunrise: string;
  sunset: string;
  moonPhase: string;
  dayLength: string;
}

const getMoonPhaseIcon = (phase: string) => {
  return <Moon size={18} className="text-indigo-500" />;
};

const AstroCard = ({ sunrise, sunset, moonPhase, dayLength }: AstroCardProps) => {
  return (
    <Card className="weather-card h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Sun & Moon</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-amber-100 dark:bg-amber-900">
              <Sunrise size={18} className="text-amber-500" />
            </div>
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Sunrise</div>
              <div className="font-medium">{sunrise}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-900">
              <Sunset size={18} className="text-orange-500" />
            </div>
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Sunset</div>
              <div className="font-medium">{sunset}</div>
            </div>
          </div>
        </div>
        
        <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900">
                {getMoonPhaseIcon(moonPhase)}
              </div>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Moon Phase</div>
                <div className="font-medium">{moonPhase}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400">Day Length</div>
          <div className="font-medium">{dayLength}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AstroCard;
