import { FormContact } from "../components/FormContact";
import { useTitle } from "../useTitle";

export function Contact() {
  useTitle("Contact Us");
  return (
    <>
      <div className='w-full py-3 md:py-6 lg:py-10 flex items-center justify-center border-b-2 border-primary'>
        <h1 className=' text-blue-500 text-3xl md:text-5xl lg:text-6xl'>
          Contact Us
        </h1>
      </div>
      <div className='w-full flex justify-center items-center py-4'>
        <FormContact />
      </div>
    </>
  );
}
