import PondImg from "../imgs/homeHeroPond.jpg";
import OpportunityImg from "../imgs/opportunity.jpg";
import SafetyImg from "../imgs/safety.png";
import RatingImg from "../imgs/rating.png";
import { useTitle } from "../useTitle";

export function Home() {
  useTitle("Home");
  return (
    <>
      <section
        className='relative bg-center bg-cover h-44 md:h-60 lg:h-80'
        style={{ backgroundImage: `url(${PondImg})` }}
      >
        <div className='absolute inset-0 bg-gray-900 opacity-75'></div>
        <div className='absolute inset-0 flex flex-col justify-center items-center'>
          <h1 className=' text-xl text-center text-white font-bold lg:text-4xl'>
            Don&apos;t let your lost golf balls sink your budget - we&apos;ve
            got you covered.
          </h1>
          <a
            href='tel:1234567'
            className=' text-xl text-center text-white font-bold lg:text-4xl mt-2 lg:mt-4'
          >
            Call us at: (765)465-9875
          </a>
        </div>
      </section>
      <section className='w-full text-center md:grid md:grid-cols-2 place-items-center'>
        <div className='px-4 py-1 md:w-3/4 md:px-6 md:py-3 lg:px-10 flex flex-col items-center '>
          <h1 className=' text-secondary text-2xl md:text-4xl '>Opportunity</h1>
          <img src={OpportunityImg} alt='Opportunity Img' className='w-3/5' />
          <p className=' text-sm md:text-lg md:mt-3'>
            Our underwater golf ball retrieval service offers a win-win
            opportunity for golf courses. By hiring us, courses can save money
            on buying new balls and get back free balls that are still in good
            condition. Our retrieval process is simple and efficient, with
            minimal disruption to the course. Trust us to keep your ponds clean
            and your golfers happy.
          </p>
        </div>

        <div className='px-4 py-1 md:w-3/4 md:px-6 md:py-3 lg:px-10 bg-primary md:bg-white flex flex-col items-center'>
          <h1 className=' text-secondary text-2xl md:text-4xl'>Safety</h1>
          <img src={SafetyImg} alt='safety image' className='w-1/3' />
          <p className=' text-sm md:text-lg md:mt-3'>
            Our underwater golf ball retrieval service is also a safer option
            for your course. Instead of having divers go into the ponds, we use
            specialized equipment to collect the golf balls, which increases our
            productivity in retrieving golf balls. This eliminates any potential
            safety hazards and ensures a quick and efficient process.
          </p>
        </div>
        <div className='px-4 py-1 md:w-3/4 md:px-6 md:py-3 md:col-span-2 lg:px-10 md:mt-10 flex flex-col items-center'>
          <h1 className=' text-secondary text-2xl md:text-4xl'>Testemonial</h1>
          <img
            src={RatingImg}
            alt='Testemonial Image'
            className='w-1/2 -mt-10'
          />
          <p className=' text-sm md:text-2xl -mt-8'>
            &quot;I had a great experience with this company. The process was
            quick and easy, and the golf balls were in great condition. I highly
            recommend using their service for any golf course looking to save
            money on golf balls.&quot; -Pine Lakes Golf Course
          </p>
        </div>
      </section>
    </>
  );
}
