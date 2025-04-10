import { cars as allCars } from "@data/data";
import { HomeProps } from "@types";
import { fuels, yearsOfProduction } from "@constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@components";
import CarSlider from '@/components/CarSlider';

export default async function Home({ searchParams }: HomeProps) {
 // Simulate filtering
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
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters mb-4'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <CarSlider cars={filteredCars.slice(0, 10)} />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
