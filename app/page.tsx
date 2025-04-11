import { cars as allCars } from "@data/data";
import { HomeProps } from "@types";
import { fuels, yearsOfProduction } from "@constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@components";
import CarSlider from '@/components/CarSlider';
import ChooseUs from "@components/ChooseUs";
import Link from "@node_modules/next/link";

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
      <ChooseUs/>
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
  {/* Decorative background - dotted or pattern */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="w-full h-full bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
  </div>

  <div className="relative z-10 container mx-auto px-4 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
      Ready to Find Your <span className="text-yellow-400">Dream Car</span>?
    </h2>
    <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
      Join thousands of satisfied customers who found their perfect vehicle through our platform. Start your journey today!
    </p>
    
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link href="/cars">
        <button className="px-6 py-3 text-lg font-semibold rounded-full bg-yellow-400 text-blue-900 hover:bg-yellow-300 transition duration-300 shadow-lg">
          View All Cars
        </button>
      </Link>

      <Link href="/contact">
        <button className="px-6 py-3 text-lg font-semibold rounded-full border-2 border-white hover:bg-white hover:text-blue-900 transition duration-300">
          Contact Us
        </button>
      </Link>
    </div>
  </div>
</section>

    </main>
  );
}
