import React from 'react'
import MaxWidthWrapper from '@/src/components/MaxWidthWrapper';
import { ContactForm } from '../../components/Form'
  
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