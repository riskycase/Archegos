import Image from "next/image";
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react' 
import { buttonVariants } from "../../components/ui/button";
import Target from '../../components/assets/target.svg'
import Bow from '../../components/assets/archer.png'
import valueIcon from '../../components/icons/scale-balanced-solid.svg'
import csrIcon from '../../components/icons/globe-solid.svg'
import Gear from '../../components/assets/gear.png'
import Story from '../../components/assets/story.jpg'

export default function About() {
  return (
    <div>
    <div className='bg-red-800 items-center h-cover overflow-hidden md:h-screen'>
    <MaxWidthWrapper className='mb-12 mt-12 flex flex-col items-center justify-center text center'>
      <div className="max-w-full flex flex-col items-center justify-center lg:flex-row  md:flex-row md:space-x-10 sm:flex-col sm:m-0 ">
        <Image
          src={Bow} alt='product preview'
          width={180}
          height={180}
          quality={100}
          className='mt-10 w-800 md:max-w-sm md:mt-40 lg:max-w-md overflow-hidden sm:mt-0 rounded-full bg-white shadow-2xl sm:p-5'
        />
        <div className="flex flex-col items-center border-zinc-300 border-b-4 max-w-60 p-2">
        <h1 className="mt-0  pb-5 flex items-start text-3xl font-bold tracking-wider 
        leading-12 text-white text-center sm:text-3xl sm:mt-0 md:text-5xl md:pt-10 md:mt-20 md:mr-20 md:ml-20">OUR MISSION</h1>
        </div>
        <ol className="space-y-5 p-10 md:mt-40 md:space-y-10 md:p-10 ">
          <li>
            <div className="flex flex-row">
            <Image
            src={Target} alt='product preview'
            width={40}
            height={40}
            quality={100}
            className='grow-0'
            />
            <p className="mt-2 max-w-prose text-white sm:text-lg">To become a world-class and trusted pharmaceutical brand </p>
            </div>
          </li>
          <li>
            <div className="flex flex-row">
            <Image
            src={Target} alt='product preview'
            width={40}
            height={40}
            quality={100}
            className='grow-0'
            />
            <p className="mt-2 max-w-prose text-white sm:text-lg">To meet the critical need for reliable and effective medications</p>
            </div>
          </li>
          <li>
            <div className="flex flex-row">
            <Image
            src={Target} alt='product preview'
            width={40}
            height={40}
            quality={100}
            className='grow-0'
            />
            <p className="mt-2 max-w-prose text-white sm:text-lg">To offer every individual quality healthcare solutions right at their doorstep</p>
            </div>
          </li>

        </ol>
        </div>
        </MaxWidthWrapper>
        </div>

        <div className='h-svh bg-zinc-200'>
          <MaxWidthWrapper className='mb-12 mt-12 flex flex-col items-center justify-center text center'>
            <div>
            <div className="p-20 flex flex-row space-x-20">
              <div className='flex flex-col'>
              <h1 className='text-red-800 text-3xl font-bold items-center text-center w-80 mt-10'>OUR STORY</h1>
              <Image
              src={Story} alt='product preview'
              width={800}
              height={400}
              quality={100}
              className='grow-0 mt-10 rounded-full bg-white p-2 sm:p-8 md:p-10 shadow-2xl'
              />
              </div>
              <div className="items-center mt-20">
              <p className='text-zinc-700 text-center text-xl p-2 mb-2'>Archegos Ventures Private Limited, a pioneering force in India’s pharmaceutical industry, 
              was born of the belief that good health is the foundation of a thriving community and society.  </p>
              <p className='text-zinc-700 text-center text-xl p-2 mb-2'>
              We strive to push the boundaries of what is possible in healthcare, developing and 
              bringing to market world-class products <br /> that meet global standards. </p>
              <p className='text-zinc-700 text-center text-xl p-2 mb-2'>
              We have grown from a small startup to a leading player in the market - <br />
              a journey is marked by innovation, quality, and a relentless pursuit of excellence. </p>
              <div className="flex flex-row justify-center items-center mt-10"><p className="border-red-800 border-b-4 w-80"> </p></div>
              </div>
            </div>
            <p className='text-zinc-700 text-center text-xl mb-2 font-semibold'>
              Over the years, we aim to expand our horizons, not just in pharmaceuticals but also in real estate, <br />
              consulting and private investments, making us a diversified conglomerate. </p>
            </div>
          </MaxWidthWrapper>
        </div>

        <div className="bg-white h-svh flex-flex row position-absolute snap-always snap-center snap-mandatory snap-y">
          <MaxWidthWrapper className='mb-12 mt-28 flex flex-row items-center justify-center text center'>

          

        <ol className="flex flex-col mt-15 p-10 justify-center items-center text-center sm:flex-col md:flex-row">
          <li className="md:flex flex-col justify-center items-center p-10">
            <Image
            src={valueIcon} alt='product preview'
            width={110}
            height={110}
            quality={100}
            className='bg-zinc-300 ring-4 ring-zinc-200 bg-contain rounded-full p-6 mb-4'
            
            />
            <h3 className="mb-2 border-zinc-300 border-b-4 text-red-800 font-bold">OUR CORE VALUES</h3>
            <p className="text-zinc-700 pl-8 pr-8">Integrity, innovation, and customer focus form the bedrock of our company culture. 
              We believe in doing business the right way, fostering a culture of creativity and continuous improvement, 
              and always putting our customers first. At Archegos Ventures, we are committed to creating a workplace 
              that encourages growth, collaboration and respect for all our employees.</p>
          </li>

          <li className="flex flex-col justify-center items-center p-10">
            <Image
            src={csrIcon} alt='product preview'
            width={100}
            height={100}
            quality={100}
            className='bg-zinc-300 ring-4 ring-zinc-200 rounded-full p-5 mb-4'
            />
            <h3 className="mb-2 border-zinc-300 border-b-4 text-red-800 font-bold">CORPORATE SOCIAL RESPONSIBILITY</h3>
            <p className="text-zinc-700 pl-8 pr-8">We understand the importance of giving back to the community. 
              Our corporate social responsibility initiatives are aimed at making 
              a positive impact on society. From healthcare camps and educational programs 
              to environmental sustainability projects, we are dedicated to improving the 
              quality of life for people around us. Our goal is to not only excel in business 
              but also to be a responsible corporate citizen.</p>
          </li>
        </ol>
        <div className="w-full flex justify-center items-center sm:p-40 md:p-0">
          
        <Image
            src={Gear} alt='gear'
            width={500}
            height={500}
            quality={100}
            className='z-10'
        />
        
        </div>
    </MaxWidthWrapper>
    </div>

    <div className="bg-zinc-200 h-svh">
      <MaxWidthWrapper className='mb-12 mt-28 flex flex-row items-center justify-center text center'>
        <div className="p-40">
        <p className="mt-80 mb-20 text-center text-zinc-700 md:mt-40">A team of visionary leaders, with decades of experience in the pharmaceutical and healthcare industry, 
        is steering the company towards its goals, ensuring that we remain at the forefront of innovation and customer satisfaction.</p>
        <div className="flex flex-col justify-center items-center">
        <h2 className="text-red-800 mb-2 mt-2 font-bold text-xl">OUR FOUNDER: SIDDHANT OJHA</h2>
        <p className="text-center text-zinc-700">A distinguished graduate of BITS Pilani, Siddhant is driven by a passion 
          to create a world-class and quality-oriented pharmaceutical company in India. 
          With a vision that’s global in scale, he has laid a strong foundation for Archegos Ventures,
         ensuring that our products meet the highest standards of quality and efficacy. 
         His leadership and foresight, backed by the guidance of leading doctors across the medical spectrum,
          have been instrumental in shaping our company’s growth and success.</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
    </div>
  );
}
