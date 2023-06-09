import { useTitle } from "../useTitle";

export function Services() {
  useTitle("Services");
  return (
    <>
      <div className='w-full py-3 md:py-6 lg:py-10 flex items-center justify-center border-b-2 border-primary'>
        <h1 className=' text-blue-500 text-3xl md:text-5xl lg:text-7xl'>
          Services
        </h1>
      </div>
      <section className='w-full text-center md:grid md:grid-cols-2 place-items-center'>
        <div className='px-4 py-1 md:w-3/4 md:px-6 md:py-3 lg:px-10 flex flex-col items-center '>
          <h1 className=' text-secondary text-2xl md:text-5xl lg:text-7xl '>
            Retrieval
          </h1>
          <p className=' text-sm md:text-xl md:mt-3 lg:text-2xl '>
            Our golf ball retrieval process is extremely efficient. We use
            state-of-the-art machines to retrieve golf balls quickly and without
            any damage to the course. Our machines are designed to pull across
            the bed of the ponds, gently collecting golf balls as they move
            along. We can retrieve up to thousands of golf balls per day, and we
            carefully clean each ball using our specialized equipment to ensure
            they look and play like new.
          </p>
        </div>
        <div className='px-4 py-1 md:w-3/4 md:px-6 md:py-3 lg:px-10 bg-primary md:bg-white flex flex-col items-center'>
          <h1 className=' text-secondary text-2xl md:text-5xl lg:text-7xl'>
            Resale
          </h1>
          <p className=' text-sm md:text-xl md:mt-3 lg:text-2xl'>
            Through our fair partnership approach, we pay courses a competitive
            rate for every ball we retrieve, ensuring a mutually beneficial
            relationship. Additionally, we provide the option for courses to
            receive a portion of the recovered balls, promoting collaboration
            and sustainability. Join us in our mission to rescue forgotten golf
            balls and create a win-win solution for golfers and courses alike.
          </p>
        </div>
        <div className='px-4 py-1 md:w-3/4 md:px-6 md:py-3 lg:px-10 flex flex-col items-center md:col-span-2'>
          <h1 className=' text-secondary text-2xl md:text-5xl lg:text-7xl '>
            Cost Savings
          </h1>
          <p className=' text-sm md:text-xl md:mt-3 lg:text-2xl'>
            Golf courses spend a lot of money on range balls each year, which
            can add up quickly. By using our golf ball retrieval service,
            courses can save a significant amount of money by not having to
            purchase new range balls as often.
            <br />
            <br />
            According to industry estimates, a typical golf course can lose up
            to 10,000 golf balls per year. At an average cost of $1.50 per ball,
            that&apos;s $15,000 per year spent on range balls alone. By using
            our service, courses can recover a large portion of those lost
            balls, significantly reducing the need to purchase new ones.
          </p>
        </div>
      </section>
    </>
  );
}
