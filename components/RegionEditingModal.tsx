'use client';
import { useState } from 'react';
import { countries } from '@/lib/interfaces';

export default function RegionEditingModal() {
  const [selectedCountry, setSelectedCountry] = useState('');

  return (
    <>
      <div className="">
        {countries.map((country, index) => (
          <div key={index}>
            <input
              type="radio"
              name="selectedCountry"
              value={country}
              id={country}
              checked={selectedCountry === country}
              onChange={(e) => setSelectedCountry(e.target.value)}
            />
            <label htmlFor={country}>{country}</label>
          </div>
        ))}
      </div>
    </>
  );
}
