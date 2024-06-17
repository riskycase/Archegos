import Image from "next/image";
import Link from 'next/link'
import MaxWidthWrapper from '@/src/components/MaxWidthWrapper';
import { ArrowRight } from 'lucide-react' 
import { buttonVariants } from "../../components/ui/button";
import { ContactForm } from '../../components/Form'
  import { cn } from '../../lib/utils'

  import React from 'react'
  
  const Contact = () => {
    return (
      <div>
        <MaxWidthWrapper className='mb-12 mt-28 flex flex-col items-center justify-center text center'>
            <div className='flex justify-center items-center mt-20 p-5'>
                <ContactForm />
            </div>
        </MaxWidthWrapper>
      </div>
    )
  }
  
  export default Contact