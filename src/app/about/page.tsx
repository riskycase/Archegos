import Image from "next/image";

import MaxWidthWrapper from "../../components/MaxWidthWrapper";

import arrow1 from "../../components/icons/scale-balanced-solid.svg";

import arrow2 from "../../components/icons/globe-solid.svg";

import arrow3 from "../../components/icons/target-final.svg";

import github from "../../components/icons/github-brands-solid.svg";
import linkedin from "../../components/icons/linkedin-brands-solid-red.svg";

import Link from "next/link";

export default function About() {
  return (
    <div>
      <div className="bg-white items-center h-fit lg:overflow-hidden md:h-svh lg:h-svh">
      <MaxWidthWrapper className="mb-12 mt-12 flex flex-col items-center justify-center text-center">
  <div className="w-full flex justify-center items-center">
    <div className="mt-0 max-w-full flex flex-col items-center justify-center lg:flex-row lg:space-x-10 sm:flex-col">
      <Image
        src="/assets/archer-final.png"
        alt="product preview"
        width={180}
        height={180}
        quality={100}
        className="mt-10 w-auto md:max-w-sm md:mt-10 lg:max-w-md overflow-hidden sm:mt-10 rounded-full bg-zinc-200 shadow-2xl lg:mt-40"
      />

      <div className="flex flex-col items-center border-red-800 border-b-4 max-w-60 p-2">
        <h1 className="mt-10 pt-5 pb-5 flex items-center text-2xl font-bold tracking-wider leading-12 text-red-800 text-center sm:text-3xl sm:mt-0 md:text-5xl lg:pt-10 lg:mt-20">
          OUR MISSION
        </h1>
      </div>

      <ol className="space-y-5 p-5 lg:mt-40 md:space-y-10 md:p-10">
        <li>
          <div className="flex flex-row items-center">
            <Image
              src={arrow3}
              alt="product preview"
              width={40}
              height={40}
              quality={100}
              className="flex-shrink-0 mr-2"
            />
            <p className="font-semibold text-lg text-zinc-700 sm:text-lg">
              To become a world-class and trusted pharmaceutical brand
            </p>
          </div>
        </li>

        <li>
          <div className="flex flex-row items-center">
            <Image
              src={arrow3}
              alt="product preview"
              width={40}
              height={40}
              quality={100}
              className="flex-shrink-0 mr-2"
            />
            <p className="font-semibold text-lg text-zinc-700 sm:text-lg">
              To meet the critical need for reliable and effective medications
            </p>
          </div>
        </li>

        <li>
          <div className="flex flex-row items-center">
            <Image
              src={arrow3}
              alt="product preview"
              width={40}
              height={40}
              quality={100}
              className="flex-shrink-0 mr-2"
            />
            <p className="font-semibold text-lg text-zinc-700 sm:text-lg">
              To offer every individual quality healthcare solutions right at their doorstep
            </p>
          </div>
        </li>
      </ol>
    </div>
  </div>
</MaxWidthWrapper>
      </div>

      <div className="h-fit bg-zinc-200 lg:h-fit">
        <MaxWidthWrapper className="mb-12 mt-12 flex flex-col items-center justify-center text-center">
          <div>
            <div className="p-5 sm:p-10 md:p-20 flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-10 items-center justify-center">
              <div className="flex flex-col justify-center items-center md:pl-10">
                <h1 className="text-red-800 text-3xl font-bold text-center w-full mb-5">
                  OUR STORY
                </h1>

                <div className="w-full max-w-xs">
                  <Image
                    src="/assets/story.jpg"
                    alt="product preview"
                    width={800}
                    height={400}
                    quality={100}
                    className="rounded-full bg-white p-10 shadow-2xl mt-10"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center items-center max-w-2xl mt-10">
                <p className="text-zinc-700 text-center text-lg p-2 mb-2">
                  Archegos Ventures Private Limited, a pioneering force in
                  India&apos;s pharmaceutical industry, was born of the belief
                  that good health is the foundation of a thriving community and
                  society.
                </p>

                <p className="text-zinc-700 text-center text-lg p-2 mb-2">
                  We strive to push the boundaries of what is possible in
                  healthcare, developing and bringing to market world-class
                  products that meet global standards.
                </p>

                <p className="text-zinc-700 text-center text-lg p-2 mb-0">
                  We have grown from a small startup to a leading player in the
                  market - a journey marked by innovation, quality, and a
                  relentless pursuit of excellence.
                </p>

                <div className="flex justify-center items-center mt-5 w-full">
                  <div className="border-red-800 border-b-4 w-full pb-10 max-w-xs"></div>
                </div>
              </div>
            </div>

            <div className="text-zinc-700 text-center text-xl font-semibold p-5 lg:p-10">
              <p className="inline-block max-w-4xl mx-auto">
                <span className="block mb-2">
                  Over the years, we aim to expand our horizons, not just in
                  pharmaceuticals
                </span>

                <span className="block">
                  but also in real estate, consulting and private investments,
                  making us a diversified conglomerate.
                </span>
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="bg-white h-fit flex flex-row position-absolute md:h-svh">
        <MaxWidthWrapper className="mb-12 mt-28 flex flex-row items-center justify-center text-center">
          <ol className="flex flex-col mt-15 p-10 justify-center items-center text-center sm:flex-col md:flex-row">
            <li className="flex flex-col justify-center items-center p-10">
              <Image
                src={arrow1}
                alt="product preview"
                height={110}
                width={110}
                quality={100}
                className="bg-zinc-300 ring-4 ring-zinc-200 rounded-full p-4 mb-4 w-20 h-auto"
              />

              <h3 className="mb-2 border-zinc-300 border-b-4 text-red-800 font-bold">
                OUR CORE VALUES
              </h3>

              <p className="text-zinc-700 pl-8 pr-8">
                Integrity, innovation, and customer focus form the bedrock of
                our company culture. We believe in doing business the right way,
                fostering a culture of creativity and continuous improvement,
                and always putting our customers first. At Archegos Ventures, we
                are committed to creating a workplace that encourages growth,
                collaboration and respect for all our employees.
              </p>
            </li>

            <li className="flex flex-col justify-center items-center p-10">
              <Image
                src={arrow2}
                alt="product preview"
                width={100}
                height={100}
                quality={100}
                className="bg-zinc-300 ring-4 ring-zinc-200 rounded-full p-5 mb-4 w-20 h-auto"
              />

              <h3 className="mb-2 border-zinc-300 border-b-4 text-red-800 font-bold">
                CORPORATE SOCIAL RESPONSIBILITY
              </h3>

              <p className="text-zinc-700 pl-8 pr-8">
                We understand the importance of giving back to the community.
                Our corporate social responsibility initiatives are aimed at
                making a positive impact on society. From healthcare camps and
                educational programs to environmental sustainability projects,
                we are dedicated to improving the quality of life for people
                around us. Our goal is to not only excel in business but also to
                be a responsible corporate citizen.
              </p>
            </li>
          </ol>

          <div className="w-full flex justify-center items-center md:pb-10 md:mt-7">
            <Image
              src="/assets/gear.png"
              alt="gear"
              width={500}
              height={500}
              quality={100}
              className="z-10"
            />
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="bg-zinc-200 h-contain">
        <MaxWidthWrapper className="mb-12 mt-28 flex flex-row items-center justify-center text-center">
          <div className="p-5 sm:p-40">
            <p className="mt-10 mb-20 sm:mt-80 sm:pt-40 text-center text-zinc-700 text-lg font-semibold lg:mt-40">
              A team of visionary leaders, with decades of experience in the
              pharmaceutical and healthcare industry, is steering the company
              towards its goals, ensuring that we remain at the forefront of
              innovation and customer satisfaction.
            </p>

            <div className="flex flex-col justify-center items-center pb-20 space-x-0 space-y-10 max-w-7xl lg:flex-row lg:space-x-12 lg:space-y-0">
              <div className="flex flex-col justify-center items-center bg-white rounded-lg border-zinc-400 border-2 p-6 w-full">
                <h2 className="text-red-800 mb-2 mt-2 font-bold text-center">
                  <p className="text-2xl">OUR FOUNDER</p>
                  <br />
                  <p className="text-lg">SIDDHANT OJHA</p>
                </h2>

                <Image
                  src="/assets/ojha.jpg"
                  alt="Siddhant Ojha"
                  width={200}
                  height={200}
                  quality={100}
                  className="z-10 shadow-2xl p-3 rounded-lg object-cover"
                />

                <p className="text-center text-zinc-700 mt-5">
                  A distinguished graduate of BITS Pilani, Siddhant is driven by
                  a passion to create a world-class and quality-oriented
                  pharmaceutical company in India. With a global vision, he has
                  laid a strong foundation for Archegos Ventures. His leadership
                  and foresight have been instrumental in shaping our
                  company&apos;s success.
                </p>

                <Link
                  href="https://www.linkedin.com/in/siddhant-ojha"
                  className="flex items-center text-red-800 mt-5 hover:opacity-80"
                >
                  <span className="mr-2">
                    <Image
                      src={linkedin}
                      alt="linkedin"
                      width={40}
                      height={40}
                      quality={100}
                      className="z-10 p-3 rounded-lg object-cover"
                    />
                  </span>
                  <span className="text-zinc-700 text-sm font-semibold">
                    Siddhant Ojha
                  </span>
                </Link>
              </div>

              <div className="flex flex-col justify-center items-center bg-white rounded-lg border-zinc-400 border-2 p-6 w-full max-w-sm">
                <h2 className="text-red-800 mb-2 mt-2 font-bold text-xl text-center">
                  <p className="text-2xl">STRATEGIC ADVISOR</p>
                  <br />
                  <p className="text-lg">SATWIK SAHU</p>
                </h2>

                <Image
                  src="/assets/sahu.jpg"
                  alt="Satwik Sahu"
                  width={200}
                  height={200}
                  quality={100}
                  className="z-10 shadow-2xl p-3 rounded-lg object-cover"
                />

                <p className="text-center text-zinc-700 mt-5">
                  Satwik Sahu is a distinguished alumnus of IIM Indore and BITS
                  Pilani. His expertise and strategic vision have been pivotal
                  in driving the company&apos;s growth and innovation.
                  Satwik&apos;s insightful guidance ensures that Archegos
                  Ventures continues to excel in the pharmaceutical industry.
                </p>

                <Link
                  href="https://www.linkedin.com/in/satwik-sahu-b94017281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="flex items-center text-red-800 mt-5 hover:opacity-80"
                >
                  <span className="mr-2">
                    <Image
                      src={linkedin}
                      alt="linkedin"
                      width={40}
                      height={40}
                      quality={100}
                      className="z-10 p-3 rounded-lg object-cover"
                    />
                  </span>
                  <span className="text-zinc-700 text-sm font-semibold">
                    Satwik Sahu
                  </span>
                </Link>
              </div>

              <div className="flex flex-col justify-center items-center bg-white rounded-lg border-zinc-400 border-2 p-6 w-full max-w-sm">
                <h2 className="text-red-800 mb-2 mt-2 font-bold text-xl text-center">
                  <p className="text-2xl">SALES HEAD</p>
                  <br />
                  <p className="text-lg">TBA</p>
                </h2>

                <Image
                  src="/assets/sales-head.jpg"
                  alt="Shadab Shahid"
                  width={300}
                  height={300}
                  quality={100}
                  className="z-10 shadow-2xl p-3 rounded-lg object-cover"
                />

                <p className="text-center text-zinc-700 mt-5">
                  With a decade of experience in multinational pharmaceutical
                  companies like GSK, our sales head has acquired extensive
                  industry knowledge. His proven track record in sales has been
                  instrumental in driving the company&apos;s market expansion.
                  His leadership and strategic insights ensure sustained success
                  for Archegos Ventures.
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
