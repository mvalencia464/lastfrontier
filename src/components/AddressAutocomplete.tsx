'use client';

import React, { useEffect } from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import { MapPin } from 'lucide-react';

interface AddressAutocompleteProps {
  value: string;
  onChange: (address: string) => void;
  onSelect?: (address: string, lat: number, lng: number) => void;
  className?: string;
  placeholder?: string;
}

export default function AddressAutocomplete({
  value,
  onChange,
  onSelect,
  className,
  placeholder = "Property Address"
}: AddressAutocompleteProps) {
  const {
    ready,
    value: inputValue,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
    defaultValue: value,
  });

  // Sync with parent value if it changes externally (e.g. reset form)
  useEffect(() => {
    if (value !== inputValue) {
      setValue(value, false);
    }
  }, [value, setValue, inputValue]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  const handleSelect = async (description: string) => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    setValue(description, false);
    clearSuggestions();
    onChange(description);

    // Get latitude and longitude via utility functions
    if (onSelect) {
      try {
        const results = await getGeocode({ address: description });
        const { lat, lng } = await getLatLng(results[0]);
        onSelect(description, lat, lng);
      } catch (error) {
        console.error("Error: ", error);
      }
    }
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-slate-500 pointer-events-none z-10" />
        <input
          value={inputValue}
          onChange={handleInput}
          disabled={!ready}
          placeholder={placeholder}
          className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 focus:bg-slate-900 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-medium text-white placeholder:text-slate-500 ${className}`}
        />
      </div>

      {/* Suggestions Dropdown */}
      {status === "OK" && (
        <ul className="absolute z-50 w-full bg-slate-800 border border-slate-700 rounded-xl mt-1 shadow-xl max-h-60 overflow-auto no-scrollbar">
          {data.map(({ place_id, description }) => (
            <li
              key={place_id}
              onClick={() => handleSelect(description)}
              className="px-4 py-3 hover:bg-slate-700 cursor-pointer text-slate-300 hover:text-white text-sm transition-colors border-b border-slate-700/50 last:border-0"
            >
              {description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
