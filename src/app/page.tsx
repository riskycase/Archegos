import Image from "next/image";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "../components/ui/button";
import Wellness from "../components/assets/homeimg.jpg";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text center">
        <div className="mx-auto mb-4 mt-10 flex flex-row max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">announcement</p>
        </div>
        <div className="flex flex-col justify-between items-center space-x-20 md:flex-row">
          <div className="flex flex-col justify-center items-left">
            <h1 className="max-w-4xl text-4xl font-bold md:text-4xl lg:text-4xl">
              <div className="text-red-800 leading-10">
                The name “Archegos”{" "}
              </div>{" "}
              <div className="max-w-4xl text-4xl leading-10">
                is derived from the Greek word meaning{" "}
              </div>{" "}
              <div className="text-red-800 leading-10">
                {" "}
                “leading with example”.{" "}
              </div>
            </h1>
            <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
              Our name is not just a title; it is a promise to our customers,
              partners and the communities we serve that we will continually
              pioneer new solutions and lead the industry towards a healthier
              future.
            </p>

            <Link
              className={buttonVariants({
                size: "lg",
                className: "mt-10 w-60",
              })}
              href="/products"
            >
              Explore Our Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div>
            <div className="relative isolate">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              >
                {/* <div className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36,125rem] -translate-x-1/2  bg-gradient-to-tr from-[#81787c] to-[#923832] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'></div>  */}
              </div>

              <div className="mx-auto max-w-6x1 px-6 lg:px-8">
                <div className="mt-10 flow-root sm:mt-24">
                  <Image
                    src={Wellness}
                    alt="product preview"
                    width={300}
                    height={300}
                    quality={100}
                    className="rounded-full bg-white p-2 sm:p-8 md:p-10 shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      {/*  */}
    </>
  );
}
