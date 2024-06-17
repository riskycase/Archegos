import Image from "next/image";
import Link from 'next/link'
import MaxWidthWrapper from '@/src/components/MaxWidthWrapper';
import { ArrowRight } from 'lucide-react' 
import { buttonVariants } from "../../components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../components/ui/card"
  import { cn } from '../../lib/utils'
import Calgos from '../../components/assets/meds/CalGos-XT.jpg'
import Claazole from '../../components/assets/meds/Claazole-D.jpg'
import NextPara from '../../components/assets/meds/NextPara 650.jpg'
import Levotamol from '../../components/assets/meds/LEVOTAMOL-I.jpg'
import Spiniron from '../../components/assets/meds/SPINIRON.jpg'
import Trigos from '../../components/assets/meds/Trigos-L.jpg'
import Arcdextro from '../../components/assets/meds/ARCDEXTRO.jpg'
import Alumgos from '../../components/assets/meds/ALUMGOS 200 ML.jpg'
import Levotamoll from '../../components/assets/meds/LEVOTAMOL.jpg'
  


export default function Products() {
  return (
    <div className='bg-zinc-200 md:h-screen m-0'>
        <MaxWidthWrapper className='mb-12 mt-28 flex flex-col items-center justify-center text center'>
        <div className='p-5 flex flex-row justify-between items-center'>
        <div className=' bg-red-800 z-10 mx-auto mt-8'>
        <Card className='max-h-full text-center flex flex-col items-center overflow-hidden'>
            <CardHeader className='flex-shrink-0'>
                <CardTitle className='text-lg'>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className='flex-grow flex items-center justify-center overflow-hidden'>
                <Image
                    src={Calgos}
                    alt='calgos'
                    height={400}
                    // width={300}
                    quality={100}
                />
            </CardContent>
            <CardFooter className='text-center flex-shrink-0'>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
        </div>

        <div className=' bg-red-800 z-10 mx-auto mt-8'>
        <Card className='max-h-full text-center flex flex-col items-center overflow-hidden'>
            <CardHeader className='flex-shrink-0'>
                <CardTitle className='text-lg'>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className='flex-grow flex items-center justify-center overflow-hidden'>
                <Image
                    src={Claazole}
                    alt='claazole'
                    height={400}
                    // width={300}
                    quality={100}
                />
            </CardContent>
            <CardFooter className='text-center flex-shrink-0'>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
        </div>
        </div>

        </MaxWidthWrapper>
    </div>
  )
}
