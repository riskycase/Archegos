import Image from "next/image";
import React from "react";
import MaxWidthWrapper from "@/src/components/MaxWidthWrapper";
import { ContactForm } from "../../components/Form";
import { Toaster } from "../../components/ui/toaster";
import Envelope from "../../components/icons/envelope-solid.svg"
import Phone from "../../components/icons/phone-solid.svg"

const Contact = () => {
  return (
    <div>
      <div>
        <MaxWidthWrapper className="mb-12 mt-28 flex flex-col items-center justify-center text center">
          <div className="flex flex-col justify-center items-center md:flex-row md:mt-4 md:pl-10 md:pr-10">
            <div className="flex flex-col justify-center items-center">
              <h1 className="mt-5 flex flex-row justify-center items-center md:items-start text-3xl font-bold tracking-wide text-red-800 text-center sm:text-3xl md:text-5xl">
                CONTACT US
              </h1>
              <p className="text-md flex flex-row justify-center items-center w-80 text-zinc-700 md:text-xl leading-7 mt-5 border-red-800 pb-10 border-b-4">
                Do connect with us if you&apos;re interested in stocking or
                retailing our product range, or entering into a business
                partnership
              </p>
              <div className="pt-20">
                <Image
                  src="/assets/handshake.jpg"
                  alt="product preview"
                  width={250}
                  height={250}
                  quality={100}
                  className="p-10 grow-0 rounded-full bg-white md:ml-0 shadow-2xl"
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="mt-20 flex flex-col justify-center items-center border-zinc-200 border-2 rounded-md h-fit w-fit p-5 pl-20 pr-20 md:mt-12 md:ml-20">
                <p className="flex flex-row justify-center items-center text-red-800 font-semibold text-2xl mb-10">
                  Send us a message
                </p>

                <ContactForm />
                <Toaster />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="h-fit mt-20 bg-zinc-200 lg:h-60">
        <MaxWidthWrapper className="mb-12 mt-28 flex flex-col items-center justify-center text center">
          <div className="flex flex-col justify-center items-center pt-10 pb-10 space-y-12 lg:flex-row lg:space-x-20 lg:pt-12">
            <div className="flex flex-col w-80 text-center">
              <h1 className="text-xl text-zinc-700 mb-6">
                Our Corporate Office Address:
              </h1>
              <p>
                J-1606, 16<sup>th</sup> Floor, Jaipuria Sunrise Greens, Ahinsa
                Khand-1 Shipra Suncity, Ghaziabad, Uttar Pradesh, 201014.
              </p>
            </div>

            <div className="flex flex-col w-80 text-center">
              <h1 className="text-xl text-zinc-700 mb-6">
                Additional Office Address:
              </h1>
              <p>
                Aditya Puram Vikas Nagar, behind Khetan hospital, Gorakhpur,
                Uttar Pradesh, 273015.
              </p>
            </div>

            <div className="flex flex-col justify-start items-center mt-5">
              <div className="flex flex-row">
                <div className="h-10 w-10 mt-2">
                  <Image
                    src={Envelope}
                    alt="product preview"
                    height={20}
                    quality={100}
                    // className='grow-0 rounded-full bg-white p-2 sm:p-8 md:p-10 shadow-2xl '
                  />
                </div>
                <p className="text-red-800 font-semibold text-2xl">Email</p>
              </div>
              <p>siddhantojha@archegosventures.in</p>
            </div>

            <div className="flex flex-col justify-start items-center mt-5">
              <div className="flex flex-row">
                <div className="h-10 w-10 mt-2">
                  <Image
                    src={Phone}
                    alt="product preview"
                    height={20}
                    quality={100}
                    // className='grow-0 rounded-full bg-white p-2 sm:p-8 md:p-10 shadow-2xl '
                  />
                </div>
                <p className="text-red-800 font-semibold text-2xl">Call</p>
              </div>
              <p>+91 95544 35444</p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default Contact;
