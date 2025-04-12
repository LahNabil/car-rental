"use client";

import { useState } from "react";
import { cars as allCars } from "@data/data";
import { CarCard, SearchBar, CustomFilter } from "@components";
import { fuels, yearsOfProduction } from "@constants";
import { HomeProps } from "@types";

export default function CarsPage({ searchParams }: HomeProps)  {
  const filteredCars = allCars.filter((car) => {
    const matchManufacturer = searchParams.manufacturer
      ? car.make.toLowerCase().includes(searchParams.manufacturer.toLowerCase())
      : true;
  
    const matchYear = searchParams.year
      ? car.year === Number(searchParams.year)
      : true;
  
    const matchFuel = searchParams.fuel
      ? car.fuel_type.toLowerCase() === searchParams.fuel.toLowerCase()
      : true;
  
    const matchModel = searchParams.model
      ? car.model.toLowerCase().includes(searchParams.model.toLowerCase())
      : true;
  
    return matchManufacturer && matchYear && matchFuel && matchModel;
  });
  
    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-12">
      <div className="mb-8 text-center mt-20">
        <h1 className="text-4xl font-extrabold mb-2">Browse All Cars</h1>
        <p className="text-gray-600">Find the car that suits you best</p>
      </div>

      <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-10">
        <SearchBar
        />
        <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => <CarCard key={index} car={car} />)
        ) : (
          <div className="col-span-full text-center text-xl text-gray-700 font-semibold">
            No cars match your criteria.
          </div>
        )}
      </div>
    </main>
  );
}
