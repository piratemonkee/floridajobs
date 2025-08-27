'use client'

import { motion } from 'framer-motion'
import { InputHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    const inputClasses = clsx(
      "w-full px-3 py-2 border border-primary-300 rounded-lg bg-white text-primary-900 placeholder-primary-400",
      "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
      "transition-all duration-200",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-primary-50",
      error && "border-red-300 focus:ring-red-500",
      className
    )

    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium text-primary-700">
            {label}
          </label>
        )}
        
        <motion.div
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <input
            ref={ref}
            className={inputClasses}
            {...props}
          />
        </motion.div>
        
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-600"
          >
            {error}
          </motion.p>
        )}
        
        {helperText && !error && (
          <p className="text-sm text-primary-500">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
