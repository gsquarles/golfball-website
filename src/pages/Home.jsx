import PondImg from "../imgs/homeHeroPond.jpg";

export function Home() {
  return (
    <>
      <section
        className='relative bg-center bg-cover h-40 md:h-60 lg:h-80'
        style={{ backgroundImage: `url(${PondImg})` }}
      >
        <div className='absolute inset-0 bg-gray-900 opacity-75'></div>
        <div className='absolute inset-0 flex justify-center items-center'>
          <h1 className=' text-xl text-center text-white font-bold lg:text-4xl'>
            Don&apos;t let your lost golf balls sink your budget - we&apos;ve
            got you covered.
          </h1>
        </div>
      </section>
    </>
  );
}
