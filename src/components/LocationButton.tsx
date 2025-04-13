
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface LocationButtonProps {
  onLocationDetected: (city: string) => void;
}

const LocationButton = ({ onLocationDetected }: LocationButtonProps) => {
  const handleDetectLocation = () => {
    // In a real app, this would use geolocation API and reverse geocoding
    // For now, we'll just simulate detecting the location
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve("New York");
        }, 1500);
      }),
      {
        loading: "Detecting your location...",
        success: (city) => {
          onLocationDetected(city as string);
          return `Location detected: ${city}`;
        },
        error: "Failed to detect location",
      }
    );
  };

  return (
    <Button
      variant="outline"
      className="flex items-center gap-2 border-weather-blue/30 hover:bg-weather-blue/10 text-weather-blue dark:text-weather-light-purple"
      onClick={handleDetectLocation}
    >
      <MapPin size={16} />
      <span>Current Location</span>
    </Button>
  );
};

export default LocationButton;
