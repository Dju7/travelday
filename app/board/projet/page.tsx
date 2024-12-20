"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { geoLocStore } from "@/store/geoloc";

interface CountryData {
  name: string;
  capital: string;
  langue: string;
  urlImage: String;
  superficie: String;
  population: String;
  incontournables: String;
  activités: String;
  latlng: [number, number];
  monnaie: { code: string; change: string }[];
}

export default function page() {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState<CountryData | null>(null);
  const [error, setError] = useState("");
  const newLocalisation = geoLocStore((state: any) => state.updateGeoloc);

  const getCountries = async () => {
    try {
      const resp = await fetch(
        `http://localhost:3000/api/countries?country=${country}`
      );
      if (!resp.ok) {
        throw new Error(
          "Récupération de données impossible, verifier que ce pays existe"
        );
      }
      const data = await resp.json();
      setCountryData(data);
      setError("");
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleNewLoc = () => {
    if (countryData) {
      newLocalisation({
        country: countryData.name,
        latlng: countryData.latlng,
        image: countryData.urlImage,
      });
    }
  };

  return (
    <section className="relative z-0 bg-indigo-300 bg-opacity-30 border-2 border-white">
       <div className="absolute  h-[800px] w-[60%] z-1 top-[3%] left-[20%]">
      <Image
        src="/world.png"
        alt="dessin trajet"
        fill={true}
        className="object-contain opacity-30"
        
      />
      </div>
      <div className="absolute z-20 h-full w-full p-4 flex flex-col justify-center items-center gap-4">
        <div
          className={`h-[40%] w-full ${
            countryData ? "" : "bg-destination"
          } bg-cover bg-center rounded-xl flex flex-col gap-4 justify-center items-center`}
          style={
            countryData
              ? { backgroundImage: `url(${countryData.urlImage})` }
              : {}
          }
        >
          <h3 className="text-7xl p-1 text-black font-bold rounded-xl ">
            où voulez-vous aller ?
          </h3>
          <input
            className="w-[40%] h-12 p-2 bg-blue-300 bg-opacity-90 border-2 border-white font-bold text-blue-800 rounded-xl"
            onChange={(e) => setCountry(e.target.value)}
          />
          <button
            className="p-1 w-[10%] h-10 border border-blue-800 bg-gradient-to-l from-white to-gray-200 text-xl font-bold text-blue-800 rounded-xl mb-4 hover:bg-gradient-to-r from-black/80 to-blue-500"
            onClick={getCountries}
          >
            Voir
          </button>
          <div className="h-8">
            <p className="text-xl bg-red-500 text-white">{error}</p>
          </div>
        </div>
        <div className="h-[65%] w-full rounded-xl flex flex-col gap-4 justify-center items-center ">
          <article className="h-[90%] w-[99%] flex justify-center items-center">
            {countryData && (
              <div className="h-full w-full flex justify-center items-center p-2 text-white ">
                <div className="w-[50%] h-[99%] flex flex-col gap-8">
                  <h3 className="text-xl">Nom :{countryData.name}</h3>
                  <p className="text-xl">Capitale: {countryData.capital}</p>
                  <p className="text-xl">Langue: {countryData.langue}</p>
                  <p className="text-xl">
                    Superficie: {countryData.superficie}
                  </p>
                  <p className="text-xl">
                    Population: {countryData.population}
                  </p>
                </div>
                <div className="w-[50%] h-[99%] flex flex-col gap-8">
                  <p className="text-xl">
                    Incontournables: {countryData.incontournables}
                  </p>
                  <p className="text-xl">Activités: {countryData.activités}</p>
                  <p className="text-xl">
                    Incontournables: {countryData.incontournables}
                  </p>
                  <p className="text-xl">
                    monnaie: {countryData.monnaie[0].code}, change:{" "}
                    {countryData.monnaie[0].change}
                  </p>
                </div>
              </div>
            )}
          </article>
          <div className="h-[10%] w-[99%] flex justify-end items-center">
            <Link
              className="h-10 w-52 p-2 font-bold bg-white text-center text-blue-800 shadow-lg shadow-blue-500 hover:bg-blue-800 hover:text-white "
              href="/board/itineraire"
              onClick={handleNewLoc}
            >
              Valider cette destination
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
