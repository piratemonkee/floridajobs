'use client'

import { ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  clickable?: boolean
  onClick?: () => void
}

export default function Card({ 
  children, 
  className, 
  hover = false, 
  clickable = false, 
  onClick 
}: CardProps) {
  const baseClasses = "bg-white rounded-xl border border-primary-200 shadow-sm transition-all duration-200"
  const hoverClasses = hover ? "hover:shadow-lg hover:border-primary-300" : ""
  const clickableClasses = clickable ? "cursor-pointer" : ""

  return (
    <div
      className={clsx(
        baseClasses,
        hoverClasses,
        clickableClasses,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
