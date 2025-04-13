
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, CloudLightning, Waves, Thermometer } from "lucide-react";
import { cn } from "@/lib/utils";

export interface WeatherAlert {
  type: "warning" | "watch" | "advisory";
  title: string;
  description: string;
  severity: "low" | "moderate" | "high" | "severe";
  expiresAt: string;
}

const getAlertIcon = (title: string) => {
  if (title.includes("Storm") || title.includes("Thunder")) {
    return <CloudLightning className="h-4 w-4" />;
  } else if (title.includes("Flood") || title.includes("Rain")) {
    return <Waves className="h-4 w-4" />;
  } else if (title.includes("Heat") || title.includes("Cold")) {
    return <Thermometer className="h-4 w-4" />;
  } else {
    return <AlertTriangle className="h-4 w-4" />;
  }
};

const getAlertColor = (severity: string) => {
  switch (severity) {
    case "low":
      return "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-900/30 text-yellow-800 dark:text-yellow-300";
    case "moderate":
      return "bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-900/30 text-orange-800 dark:text-orange-300";
    case "high":
      return "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-900/30 text-red-800 dark:text-red-300";
    case "severe":
      return "bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-900/30 text-purple-800 dark:text-purple-300";
    default:
      return "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-900/30 text-yellow-800 dark:text-yellow-300";
  }
};

interface WeatherAlertsProps {
  alerts: WeatherAlert[];
}

const WeatherAlerts = ({ alerts }: WeatherAlertsProps) => {
  if (!alerts || alerts.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3 animate-fade-in">
      {alerts.map((alert, index) => (
        <Alert
          key={index}
          className={cn("border border-l-4", getAlertColor(alert.severity))}
        >
          <div className="flex gap-2">
            {getAlertIcon(alert.title)}
            <AlertTitle className="font-semibold">
              {alert.title}
            </AlertTitle>
          </div>
          <AlertDescription className="mt-1 text-sm">
            {alert.description}
            <div className="mt-1 text-xs opacity-70">
              Expires: {alert.expiresAt}
            </div>
          </AlertDescription>
        </Alert>
      ))}
    </div>
  );
};

export default WeatherAlerts;
