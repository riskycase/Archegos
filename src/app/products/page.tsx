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
import p1 from '../../components/assets/meds/IMG_0212.png'
import p2 from '../../components/assets/meds/IMG_0213.png'
import p3 from '../../components/assets/meds/IMG_0214.png'
import p4 from '../../components/assets/meds/IMG_0215.png'
import p5 from '../../components/assets/meds/IMG_0216.png'
import p6 from '../../components/assets/meds/IMG_0217.png'
import p7 from '../../components/assets/meds/IMG_0218.png'
import p8 from '../../components/assets/meds/IMG_0219.png'
import p9 from '../../components/assets/meds/IMG_0220.png'
import p10 from '../../components/assets/meds/IMG_0221.png'
  


export default function Products() {
  return (
    <div className='bg-zinc-200 m-0'>
        <MaxWidthWrapper className='mb-12 mt-28 flex flex-col items-center justify-center text center'>

        <div className='justify-center flex flex-wrap md:justify-between items-center p-10 space-y-20'>
        <div className=' border-2 border-red-800 rounded-md mt-8'>
        <Card className='max-h-full text-center flex flex-col items-center overflow-hidden'>
            <CardHeader className='flex-shrink-0'>
                <CardTitle className='text-lg'>NextPara 650</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className='flex-grow flex items-center justify-center overflow-hidden'>
                <Image
                    src={p1}
                    alt='NextPara'
                    height={300}
                    // width={300}
                    quality={100}
                    className="p-6"
                />
            </CardContent>
            <CardFooter className='text-center flex-shrink-0'>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
        </div>

        <div className=' border-2 border-red-800 rounded-md mt-8'>
        <Card className='max-h-full text-center flex flex-col items-center overflow-hidden'>
            <CardHeader className='flex-shrink-0'>
                <CardTitle className='text-lg'>Calgos-XT</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className='flex-grow flex items-center justify-center overflow-hidden'>
                <Image
                    src={p2}
                    alt='NextPara'
                    height={300}
                    // width={300}
                    quality={100}
                    className="p-6"
                />
            </CardContent>
            <CardFooter className='text-center flex-shrink-0'>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
        </div>

        <div className=' border-2 border-red-800 rounded-md mt-8'>
        <Card className='max-h-full text-center flex flex-col items-center overflow-hidden'>
            <CardHeader className='flex-shrink-0'>
                <CardTitle className='text-lg'>SpinIron</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className='flex-grow flex items-center justify-center overflow-hidden'>
                <Image
                    src={p3}
                    alt='calgos'
                    height={300}
                    // width={300}
                    quality={100}
                    className="p-6"
                />
            </CardContent>
            <CardFooter className='text-center flex-shrink-0'>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
        </div>

        <div className=' border-2 border-red-800 rounded-md mt-8'>
        <Card className='max-h-full text-center flex flex-col items-center overflow-hidden'>
            <CardHeader className='flex-shrink-0'>
                <CardTitle className='text-lg'>Claazole-D</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className='flex-grow flex items-center justify-center overflow-hidden'>
                <Image
                    src={p4}
                    alt='calgos'
                    height={300}
                    // width={300}
                    quality={100}
                    className="p-6"
                />
            </CardContent>
            <CardFooter className='text-center flex-shrink-0'>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
        </div>

        <div className=' border-2 border-red-800 rounded-md mt-8'>
        <Card className='max-h-full text-center flex flex-col items-center overflow-hidden'>
            <CardHeader className='flex-shrink-0'>
                <CardTitle className='text-lg'>AlumGos</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className='flex-grow flex items-center justify-center overflow-hidden'>
                <Image
                    src={p5}
                    alt='calgos'
                    height={300}
                    // width={300}
                    quality={100}
                    className="p-6"
                />
            </CardContent>
            <CardFooter className='text-center flex-shrink-0'>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
        </div>

        <div className=' border-2 border-red-800 rounded-md mt-8'>
        <Card className='max-h-full text-center flex flex-col items-center overflow-hidden'>
            <CardHeader className='flex-shrink-0'>
                <CardTitle className='text-lg'>Trigos-L</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className='flex-grow flex items-center justify-center overflow-hidden'>
                <Image
                    src={p6}
                    alt='calgos'
                    height={300}
                    // width={300}
                    quality={100}
                    className="p-6"
                />
            </CardContent>
            <CardFooter className='text-center flex-shrink-0'>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
        </div>

        <div className=' border-2 border-red-800 rounded-md mt-8'>
        <Card className='max-h-full text-center flex flex-col items-center overflow-hidden'>
            <CardHeader className='flex-shrink-0'>
                <CardTitle className='text-lg'>Arcdextro</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className='flex-grow flex items-center justify-center overflow-hidden'>
                <Image
                    src={p7}
                    alt='calgos'
                    height={300}
                    // width={300}
                    quality={100}
                    className="p-6"
                />
            </CardContent>
            <CardFooter className='text-center flex-shrink-0'>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
        </div>

        <div className=' border-2 border-red-800 rounded-md mt-8'>
        <Card className='max-h-full text-center flex flex-col items-center overflow-hidden'>
            <CardHeader className='flex-shrink-0'>
                <CardTitle className='text-lg'>LevotaMol</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className='flex-grow flex items-center justify-center overflow-hidden'>
                <Image
                    src={p8}
                    alt='calgos'
                    height={300}
                    // width={300}
                    quality={100}
                    className="p-6"
                />
            </CardContent>
            <CardFooter className='text-center flex-shrink-0'>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
        </div>

        <div className=' border-2 border-red-800 rounded-md mt-8'>
        <Card className='max-h-full text-center flex flex-col items-center overflow-hidden'>
            <CardHeader className='flex-shrink-0'>
                <CardTitle className='text-lg'>Bretmet 400</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className='flex-grow flex items-center justify-center overflow-hidden'>
                <Image
                    src={p9}
                    alt='calgos'
                    height={300}
                    // width={300}
                    quality={100}
                    className="p-6"
                />
            </CardContent>
            <CardFooter className='text-center flex-shrink-0'>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
        </div>

        <div className=' border-2 border-red-800 rounded-md mt-8'>
        <Card className='max-h-full text-center flex flex-col items-center overflow-hidden'>
            <CardHeader className='flex-shrink-0'>
                <CardTitle className='text-lg'>LevotaMol-I</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className='flex-grow flex items-center justify-center overflow-hidden'>
                <Image
                    src={p10}
                    alt='calgos'
                    height={300}
                    // width={300}
                    quality={100}
                    className="p-6"
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
