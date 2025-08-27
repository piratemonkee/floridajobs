'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { Job } from '@/types/job'
import Button from '@/components/ui/Button'

interface JobModalProps {
  job: Job | null
  isOpen: boolean
  onClose: () => void
}

export default function JobModal({ job, isOpen, onClose }: JobModalProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => {
        document.removeEventListener('keydown', handleEscape)
      }
    }
  }, [isOpen, onClose])

  if (!job) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div 
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Header */}
              <div className="flex-shrink-0 bg-white border-b border-primary-200 p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h2 id="modal-title" className="text-2xl font-semibold text-primary-900 tracking-tight-5">
                      {job.title}
                    </h2>
                    <div className="flex items-center space-x-2 text-sm text-primary-600">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>Full-time</span>
                      <span>•</span>
                      <span>Remote</span>
                    </div>
                    <div className="text-xs text-primary-500 mt-1">
                      Buenos Aires or New York preferred
                    </div>

                  </div>
                  
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg text-primary-400 hover:text-primary-600 hover:bg-primary-100 transition-all duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Description */}
                <section>
                  <h3 className="text-lg font-semibold text-primary-900 mb-3">
                    About this role
                  </h3>
                  <p className="text-primary-700 leading-relaxed">
                    {job.description}
                  </p>
                </section>

                {/* Responsibilities */}
                <section>
                  <h3 className="text-lg font-semibold text-primary-900 mb-3">
                    What you'll do
                  </h3>
                  <ul className="space-y-2">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-primary-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Requirements */}
                <section>
                  <h3 className="text-lg font-semibold text-primary-900 mb-3">
                    What we're looking for
                  </h3>
                  <ul className="space-y-2">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-primary-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Benefits */}
                <section>
                  <h3 className="text-lg font-semibold text-primary-900 mb-3">
                    What we offer
                  </h3>
                  <ul className="space-y-2">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-primary-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Footer */}
              <div className="flex-shrink-0 bg-white border-t border-primary-200 p-6">
                <div className="flex items-center justify-end">
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" onClick={onClose}>
                      Close
                    </Button>
                    <a href={`mailto:${job.applicationEmail}?subject=Application for ${job.title}`}>
                      <Button>
                        Apply for this role
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
