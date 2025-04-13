
import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { locations } from "@/utils/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface SearchBarProps {
  onCitySelect: (city: string) => void;
}

const SearchBar = ({ onCitySelect }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<{ city: string; country: string }[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = locations.filter(
        (location) =>
          location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          location.country.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      // Limit to first 10 matches to prevent overwhelming the UI
      setSuggestions(filtered.slice(0, 10));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  const handleCitySelect = (city: string) => {
    setSearchTerm(city);
    setShowSuggestions(false);
    setIsFocused(false);
    onCitySelect(city);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSuggestions([]);
  };

  // Group suggestions by country for better organization
  const groupedSuggestions: Record<string, {city: string; country: string}[]> = {};
  suggestions.forEach(suggestion => {
    if (!groupedSuggestions[suggestion.country]) {
      groupedSuggestions[suggestion.country] = [];
    }
    groupedSuggestions[suggestion.country].push(suggestion);
  });

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className={`relative flex items-center transition-all duration-200 ${isFocused ? 'scale-[1.02]' : ''}`}>
        <Search 
          className={`absolute left-3 transition-colors duration-200 ${isFocused ? 'text-weather-blue' : 'text-gray-400'}`} 
          size={isMobile ? 16 : 18} 
        />
        <Input
          type="text"
          placeholder={isMobile ? "Search location..." : "Search for a city or country..."}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => {
            setIsFocused(true);
            searchTerm && setShowSuggestions(true);
          }}
          className={`pl-10 pr-10 bg-white dark:bg-slate-800 border-weather-soft-blue dark:border-gray-700 rounded-lg text-sm sm:text-base h-9 sm:h-10 transition-all duration-200 ${
            isFocused ? 'ring-2 ring-weather-blue dark:ring-weather-light-purple border-transparent' : ''
          }`}
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 sm:right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 h-7 w-7 sm:h-8 sm:w-8"
            onClick={clearSearch}
          >
            <X size={isMobile ? 14 : 16} />
          </Button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute mt-1 w-full bg-white dark:bg-slate-800 shadow-lg rounded-lg z-10 border border-gray-200 dark:border-gray-700 max-h-60 sm:max-h-80 overflow-y-auto animate-fade-in">
          <ul className="py-1">
            {Object.entries(groupedSuggestions).map(([country, cities]) => (
              <li key={country} className="mb-2">
                <div className="px-3 sm:px-4 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-slate-700">
                  {country}
                </div>
                {cities.map(location => (
                  <div
                    key={`${location.city}-${location.country}`}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer transition-colors duration-150"
                    onClick={() => handleCitySelect(location.city)}
                  >
                    <div className="font-medium text-sm sm:text-base">{location.city}</div>
                  </div>
                ))}
              </li>
            ))}
          </ul>
          {suggestions.length >= 10 && (
            <div className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
              Showing top 10 results. Type more to refine your search.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
