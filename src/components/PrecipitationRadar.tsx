
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Play, Pause, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PrecipitationRadarProps {
  radarImages: string[];
  city: string;
}

const PrecipitationRadar = ({ radarImages, city }: PrecipitationRadarProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [radarMode, setRadarMode] = useState("precipitation");

  // Mock timestamps for radar images (past 2 hours in 30 min increments)
  const timestamps = [
    "2 hours ago", 
    "1.5 hours ago", 
    "1 hour ago", 
    "30 min ago", 
    "Current"
  ];

  // Toggle play/pause
  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Card className="weather-card h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Radar & Maps</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="precipitation" onValueChange={setRadarMode} className="w-full">
          <div className="px-4">
            <TabsList className="w-full grid grid-cols-2 mb-2">
              <TabsTrigger value="precipitation">Precipitation</TabsTrigger>
              <TabsTrigger value="satellite">Satellite</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="precipitation" className="m-0">
            <div className="relative h-[200px] sm:h-[250px] bg-gray-100 dark:bg-gray-800 overflow-hidden">
              {/* Placeholder for radar map */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                <p className="text-center px-4">Precipitation radar map for {city}</p>
              </div>
              
              {/* Radar controls */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/30 to-transparent">
                <div className="flex justify-between items-center">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8 bg-white/80 dark:bg-gray-800/80"
                    onClick={togglePlayback}
                  >
                    {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                  </Button>
                  
                  <div className="flex items-center gap-2 text-xs text-white">
                    <Clock size={12} />
                    <span>{timestamps[currentImageIndex]}</span>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8 bg-white/80 dark:bg-gray-800/80"
                  >
                    <RefreshCw size={14} />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="p-3 text-xs text-gray-500 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between">
                <span>Updated: 5 min ago</span>
                <span className="cursor-pointer text-weather-blue dark:text-weather-light-purple">Forecast Radar →</span>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="satellite" className="m-0">
            <div className="relative h-[200px] sm:h-[250px] bg-gray-100 dark:bg-gray-800 overflow-hidden">
              {/* Placeholder for satellite map */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                <p className="text-center px-4">Satellite map for {city}</p>
              </div>
            </div>
            
            <div className="p-3 text-xs text-gray-500 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between">
                <span>Updated: 10 min ago</span>
                <span className="cursor-pointer text-weather-blue dark:text-weather-light-purple">Detailed View →</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PrecipitationRadar;
