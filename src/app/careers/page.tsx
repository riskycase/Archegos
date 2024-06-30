import Image from "next/image";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "../../components/ui/button";
import Star from "../../components/icons/star-solid.svg"
import Stairs from "../../components/icons/stairs-solid.svg"
import PeopleRoof from "../../components/icons/people-roof-solid.svg"
import Light from "../../components/icons/lightbulb-solid.svg"

import React from "react";

const Careers = () => {
  return (
    <div>
      <div className="bg-zinc-200 h-fit">
        <MaxWidthWrapper className="mb-12 mt-28 flex items-center justify-center text center">
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col-reverse lg:flex-row">
              <div className="flex flex-col">
                <div className="flex flex-col justify-center items-center p-7 text-center">
                  <Image
                    src={Star}
                    alt="product preview"
                    width={80}
                    height={80}
                    quality={100}
                    className="bg-white ring-4 ring-zinc-400 bg-contain rounded-full p-4 mb-4"
                  />
                  <h3 className="mb-2 border-zinc-400 border-b-4 text-red-800 font-bold">
                    MAKING AN IMPACT
                  </h3>
                  <p className="text-zinc-700 pl-8 pr-8 w-80">
                    There&apos;s nothing more motivating than changing lives.
                    From developing cutting-edge pharmaceuticals to managing
                    healthcare facilities, you can be sure your work at Archegos
                    is making a real difference.
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center p-7 text-center mb-5">
                  <Image
                    src={Stairs}
                    alt="product preview"
                    width={80}
                    height={80}
                    quality={100}
                    className="bg-white ring-4 ring-zinc-400 bg-contain rounded-full p-4 mb-4"
                  />
                  <h3 className="mb-2 border-zinc-400 border-b-4 text-red-800 font-bold">
                    CAREER GROWTH
                  </h3>
                  <p className="text-zinc-700 pl-8 pr-8 w-80">
                    Grow as we grow - we&apos;ll provide comprehensive training
                    programs and mentorship initiatives to help you advance,
                    both professionally and personally.
                  </p>
                </div>
              </div>
              <div className="pt-5 flex flex-col justify-center items-center lg:p-0">
                <h1
                  className="mt-0  pb-5 flex items-start text-3xl font-bold tracking-wider 
        leading-12 text-red-800 text-center sm:text-3xl sm:mt-0 md:text-5xl md:p-10 "
                >
                  WHY WORK WITH US?
                </h1>
                <p className="text-center text-lg font-semibold text-zinc-700 w-90 p-6">
                  Archegos is driven by the vision to enhance lives – of our
                  team members, our partners and our customers. This vision has
                  shaped our unique and inspiring culture, based on fundamental
                  values.
                </p>

                <div className="border-red-800 border-t-4 p-10">
                  <Image
                    src="/assets/emp.jpg"
                    alt="product preview"
                    width={250}
                    height={250}
                    quality={100}
                    className="p-10 md:max-w-sm lg:max-w-md overflow-hidden sm:mt-0 rounded-full bg-white shadow-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col justify-center items-center p-7 text-center">
                <Image
                  src={PeopleRoof}
                  alt="product preview"
                  width={80}
                  height={80}
                  quality={100}
                  className="bg-white ring-4 ring-zinc-400 bg-contain rounded-full p-4 mb-4"
                />
                <h3 className="mb-2 border-zinc-400 border-b-4 text-red-800 font-bold">
                  INCLUSIVITY
                </h3>
                <p className="text-zinc-700 pl-8 pr-8 w-80">
                  We are committed to creating a diverse and inclusive workplace
                  where everyone feels valued and respected. With Archegos,
                  you&apos;ll be part of a company that celebrates both
                  individuality and teamwork.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center p-7 text-center mb-5">
                <Image
                  src={Light}
                  alt="product preview"
                  width={70}
                  height={60}
                  quality={100}
                  className="bg-white ring-4 ring-zinc-400 bg-contain rounded-full p-4 mb-4 w-55 h-30"
                />
                <h3 className="mb-2 border-zinc-400 border-b-4 text-red-800 font-bold">
                  INNOVATION
                </h3>
                <p className="text-zinc-700 pl-8 pr-8 w-80">
                  Ideas are the heart of Archegos - ideas that transcend limits
                  to meet evolving customer needs. Your ideas will be encouraged
                  and nurtured as we strive every day to transform the
                  healthcare landscape.
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="h-fit overflow-hidden">
        <MaxWidthWrapper className="mb-12 mt-28 flex items-center justify-center text center overflow-hidden">
          <h1
            className="p-10 mt-0 text-center pb-5 text-3xl font-bold tracking-wider 
        leading-12 text-red-800 sm:text-3xl sm:mt-0 md:text-4xl md:mt-10"
          >
            OPPORTUNITIES AT ARCHEGOS
          </h1>
          <p className="text-xl text-zinc-700 text-center lg:p-10">
            We&apos;re looking for motivated and talented people for the
            following positions:
          </p>
          <div className="flex flex-col space-y-20 justify-center items-center lg:flex-row lg:position-absolute lg:space-x-12 lg:space-y-0 p-12">
            <div className="flex flex-col justify-center items-center bg-zinc-200 rounded-lg border-zinc-400 border-2 w-80 h-auto">
              <div>
                <Image
                  src="/assets/sales_rep.jpg"
                  alt="product preview"
                  width={980}
                  height={720}
                  quality={100}
                  className="p-6 pb-10 w-auto h-60"
                />
              </div>
              <p className="text-lg text-red-800 font-semibold text-center">
                Pharmaceutical Sales Representative
              </p>
              <div className="p-6 border-red-800 border-t-2 pt-2 mt-5">
                <Link
                  href="https://forms.gle/6vFPTiMvkgi4tQU69"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  <p className="p-5 text-zinc-700 text-center">Apply here</p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-zinc-200 rounded-lg border-zinc-400 border-2 w-80 h-auto">
              <div>
                <Image
                  src="/assets/business-manager.jpg"
                  alt="product preview"
                  width={2121}
                  height={1414}
                  quality={100}
                  className="p-6 pb-10 w-auto h-60"
                />
              </div>
              <p className="text-lg text-red-800 font-semibold">
                Business Development Manager
              </p>
              <div className="p-6 border-red-800 border-t-2 pt-2 mt-5">
                <Link
                  href="https://forms.gle/PPpoL7WshSwozgYDA"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  <p className="p-5 text-zinc-700">Apply here</p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-zinc-200 rounded-lg border-zinc-400 border-2 w-80 h-auto">
              <div>
                <Image
                  src="/assets/Business-Dev-Manager.jpg"
                  alt="product preview"
                  width={574}
                  height={410}
                  quality={100}
                  className="p-6 pb-10 w-auto h-60"
                />
              </div>
              <p className="text-lg text-red-800 font-semibold">
                Marketing Specialist
              </p>
              <div className="p-6 border-red-800 border-t-2 pt-2 mt-5">
                <Link
                  href="https://forms.gle/CUy45gco8tB8VUtu6"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  <p className="p-5 text-zinc-700">Apply here</p>
                </Link>
              </div>
            </div>
          </div>

          <p className="p-10 text-xl text-zinc-700 text-center lg:pb-20">
            Take the next big step in your career; join a dynamic team that is
            making a real difference in the world of healthcare.
          </p>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default Careers;

// 1.	Why Work With Us:
// Content:
// 	## happy employees stock Image

// Text:
// 	•	Innovative Environment: At Archegos Ventures, we foster a culture of innovation where your ideas can make a difference. Be part of a team that is transforming the healthcare landscape.
// 	•	Career Growth: We believe in nurturing talent and providing opportunities for career advancement. Our comprehensive training programs and mentorship opportunities help you grow professionally and personally.
// 	•	Inclusive Culture: We are committed to creating a diverse and inclusive workplace where everyone feels valued and respected. Join a company that celebrates individuality and teamwork.
// 	•	Impactful Work: Work on projects that have a real impact on people’s lives. From developing cutting-edge pharmaceuticals to managing healthcare facilities, your work will make a difference.

// Current Openings:
// Content:
// 	•	Stock Image of single employee

// Text:
// 	•	Explore Our Opportunities: We are always looking for talented individuals to join our team. Check out our current job openings and find the right fit for you.

// Job Listings:
// 	•	Pharmaceutical Sales Representative
// 	•	Business Development Manager
// 	•	Marketing Specialist

// Our Values:

// 	•	Integrity: We conduct our business with the highest standards of integrity, ensuring that our actions reflect our commitment to ethical practices.
// 	•	Innovation: We continuously strive to push the boundaries of what is possible, developing solutions that meet the evolving needs of our customers.
// 	•	Customer Focus: Our customers are at the heart of everything we do. We are dedicated to providing products and services that enhance their lives.
// 	5.	Join Us:
// Text:
// 	•	Start Your Journey with Us: Ready to take the next step in your career? Join Archegos Ventures and be part of a dynamic team that is making a difference in the world of healthcare.
// 	•	Call-to-Action: “Apply Now” button linking to the application form or email.
