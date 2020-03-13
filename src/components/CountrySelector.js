import React, { useState } from "react";
import useStats from "../utils/useStats";
import Stats from "./Stats";

const CountrySelector = () => {
    const { stats: countries, loading, error } = useStats(
        "https://covid19.mathdro.id/api/countries"
    );
    console.log(countries);
    const [selectedCountry, setSelectedCountry] = useState("USA");
    if (!countries) return <p>Loading...</p>;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    return (
        <div>
            <h2>Currently Showing: {selectedCountry}</h2>
            <div className="select-container">
                <select
                    className="select-css"
                    onChange={e => setSelectedCountry(e.target.value)}
                >
                    {Object.entries(countries.countries).map(
                        ([country, code]) => (
                            <option
                                defaultValue={
                                    selectedCountry === countries.iso3[code]
                                }
                                key={code}
                                value={countries.iso3[code]}
                            >
                                {country}
                            </option>
                        )
                    )}
                </select>
            </div>
            <Stats
                url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
            ></Stats>
        </div>
    );
};

export default CountrySelector;
