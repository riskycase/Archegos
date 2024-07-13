import Image from "next/image";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "../components/ui/button";

export default function Home() {
  return (
    <>
      <div className="h-fit">
        <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
          <div className="mx-auto mb-4 mt-10 flex flex-row max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
            <p className="text-sm font-semibold text-gray-700">
              High-end medical care, at your doorstep now!
            </p>
          </div>
          <div className="flex flex-col mb-40 justify-between items-center space-x-0 md:space-x-10 md:mb-0 md:flex-row">
  <h1 className="max-w-4xl pt-10 text-3xl font-bold text-center md:text-left md:text-4xl lg:text-4xl">
    <div className="text-red-800">
      At Archegos, we bridge the gap{" "}
    </div>{" "}
    <div className="max-w-4xl pt-2 pb-2 leading-tight">
      between cutting-edge medical advancements and patients, making
      essential treatments{" "}
    </div>{" "}
    <div className="text-red-800"> available to all. </div>
  </h1>
  <div className="flex justify-center items-center w-full md:w-auto mt-10 md:mt-5">
    <Image
      src="/assets/homeimg.jpg"
      alt="product preview"
      width={300}
      height={300}
      quality={100}
      className="mt-10 md:mt-0 rounded-full bg-white p-10 shadow-2xl"
    />
  </div>
</div>
          <div>
            <div className="flex flex-col pt-0 justify-center items-center text-center lg:flex-row pb-20 sm:pt-10">
              <div className="p-8 pt-0 pb-4 mt-0 text-zinc-700 sm:mt-5 sm:pt-4 sm:text-lg">
                <p>
                  Archegos Ventures is a forward-thinking pharmaceutical company
                  dedicated to{" "}
                  <span className="font-semibold">
                    {" "}
                    improving healthcare accessibility and quality in India.{" "}
                  </span>{" "}
                  We focus on developing and distributing{" "}
                  <span className="font-semibold">
                    high-quality, affordable medications{" "}
                  </span>{" "}
                  to address unmet medical needs.{" "}
                </p>
              </div>
              <div className="p-8 pt-4 pb-4 mt-5 text-zinc-700 sm:text-lg">
                <p className="p-2">
                  The name &quot;Archegos&quot; is derived from the Greek word meaning
                  &quot;leading by example&quot;.
                  <span className="font-semibold">
                    {" "}
                    Our name is not just a title; it is a promise to our
                    customers,{" "}
                  </span>
                  partners and the communities we serve that we will continually
                  <span className="font-semibold">
                    {" "}
                    pioneer new solutions{" "}
                  </span>{" "}
                  and lead the industry towards a healthier future.
                </p>
              </div>
              <div className="p-8 pt-4 pb-4 mt-5 text-zinc-700 sm:text-lg">
                <p>
                  By leveraging innovation and strategic partnerships, we aim to{" "}
                  <span className="font-semibold">
                    solve the critical problem of healthcare inequality{" "}
                  </span>
                  and enhance the overall well-being of communities across the
                  nation.
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="bg-zinc-200 h-fit pt-20 flex flex-col justify-between items-center lg:flex-row">
        <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col space-y-10 lg:space-y-20 lg:flex-row justify-center items-center mx-auto max-w-6xl px-4 lg:px-6">
            <div className="flex flex-col justify-center items-center space-y-10 lg:space-y-20 lg:mr-10">
              <h1 className="text-3xl text-red-800 font-bold md:text-4xl lg:text-4xl leading-20">
                OUR PRODUCTS
              </h1>
              <Image
                src="/assets/meds.png"
                alt="product preview"
                width={300}
                height={300}
                quality={100}
              />
              <Link
                className={buttonVariants({
                  size: "lg",
                  className: "mt-5 w-60",
                })}
                href="/products"
              >
                Explore the Full Range <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:space-x-10">
              <div className="flex flex-col justify-center items-center rounded-lg border-zinc-400 border-2 w-full lg:w-80 h-auto">
                <div>
                  <Image
                    src="/assets/quality.png"
                    alt="product preview"
                    width={60}
                    height={80}
                    quality={100}
                    className="p-6 pb-5 w-auto"
                  />
                </div>
                <div className="text-md text-zinc-700 p-5 text-center">
                  Archegos has partnered with Akums Drugs and Pharmaceuticals,
                  <span className="font-semibold"> India&apos;s leading pharmaceutical manufacturers,</span> to offer a comprehensive portfolio of medicines that healthcare
                  professionals and consumers can trust for their exceptional <span className="text-lg text-red-800 font-bold">quality. </span>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center rounded-lg border-zinc-400 border-2 w-full lg:w-80 h-auto">
                <div>
                  <Image
                    src="/assets/output-onlinepngtools__8_-removebg-preview (1).png"
                    alt="product preview"
                    width={40}
                    height={40}
                    quality={100}
                    className="p-4 w-auto"
                  />
                </div>
                <div className="text-md text-zinc-700 p-5 text-center">
                  Under a single brand name, we offer our consumers a seamless
                  experience to <span className="font-semibold">fulfil all their pharmaceutical needs. </span>
                  Our robust supply chain systems are designed to efficiently
                  reach retailers, ensuring that our top-tier medications are
                  consistently <span className="text-lg text-red-800 font-bold"> accessible </span> to retailers, through a steady distribution network.
                </div>
              </div>

              <div className="flex flex-col justify-center items-center rounded-lg border-zinc-400 border-2 w-full lg:w-80 h-auto">
                <div>
                  <Image
                    src="/assets/accessible.png"
                    alt="product preview"
                    width={60}
                    height={80}
                    quality={100}
                    className="p-6 w-auto"
                  />
                </div>
                <p className="text-md text-zinc-700 p-5 text-center">
                  Archegos Ventures is therefore well-positioned to fulfil our
                  mission to <span className="font-semibold"> enhance the well-being of individuals </span> and communities across India. And to consolidate our
                  brand&apos;s reputation as a symbol of excellence and <span className="text-lg text-red-800 font-bold"> reliability </span> in the healthcare sector.
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg font-semibold p-10 lg:p-20 text-zinc-700 text-center">
            Leveraging Akums&apos; advanced manufacturing capabilities and our
            commitment to excellence, our collaboration ensures that every
            product we offer is crafted with precision and care, meeting the
            most stringent quality standards.
          </p>
        </MaxWidthWrapper>
      </div>
    </>
  );
}