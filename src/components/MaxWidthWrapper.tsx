import React from 'react'
import { ReactNode } from 'react'
import { cn } from '../lib/utils'

const MaxWidthWrapper = ({
    className,
    children
}:{
    className?: String,
    children: ReactNode
}) => {
  return (
    <div className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-15')}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper