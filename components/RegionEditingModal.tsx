'use client';
import { useState } from 'react';
import { countries } from '@/lib/interfaces';

interface RegionEditingModalProps {
  country: string;
}
const RegionEditingModal: React.FC<{ country: string }> = ({ country }) => {
  const [selectedCountry, setSelectedCountry] = useState(country);
  const saveUsersCountry = () => {
    console.log("OK desu")
    const newCountry = document.getElementById(country)
    console.log(newCountry)
    setSelectedCountry("Cy?")
  }
  return (
    <>
      <div>
        <form action={saveUsersCountry}>
          <select name="selectedCountry" id="selectedCountry">
          {countries.map((country) => (
            <option value="country" key={country}>{country}</option>
          ))}
        </select>
        </form>
      </div>
    </>
  );
}
export default RegionEditingModal;
