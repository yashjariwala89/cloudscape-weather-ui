
import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { locations } from "@/utils/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onCitySelect: (city: string) => void;
}

const SearchBar = ({ onCitySelect }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<{ city: string; country: string }[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
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
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  const handleCitySelect = (city: string) => {
    setSearchTerm(city);
    setShowSuggestions(false);
    onCitySelect(city);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSuggestions([]);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative flex items-center">
        <Search className="absolute left-3 text-gray-400" size={18} />
        <Input
          type="text"
          placeholder="Search for a city or country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-10 bg-white dark:bg-slate-800 border-weather-soft-blue dark:border-gray-700 rounded-lg"
          onFocus={() => searchTerm && setShowSuggestions(true)}
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            onClick={clearSearch}
          >
            <X size={16} />
          </Button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute mt-1 w-full bg-white dark:bg-slate-800 shadow-lg rounded-lg z-10 border border-gray-200 dark:border-gray-700 max-h-60 overflow-y-auto animate-fade-in">
          <ul className="py-1">
            {suggestions.map((location) => (
              <li
                key={`${location.city}-${location.country}`}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer"
                onClick={() => handleCitySelect(location.city)}
              >
                <div className="font-medium">{location.city}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{location.country}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
