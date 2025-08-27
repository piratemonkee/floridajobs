'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'

import SimpleJobListing from '@/components/jobs/SimpleJobListing'
import CultureSection from '@/components/sections/CultureSection'
import InvestorSection from '@/components/sections/InvestorSection'
import JobModal from '@/components/jobs/JobModal'

import { Job } from '@/types/job'
import { jobs } from '@/data/jobs'

export default function HomePage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [isJobModalOpen, setIsJobModalOpen] = useState(false)

  const handleJobClick = (job: Job) => {
    setSelectedJob(job)
    setIsJobModalOpen(true)
  }

  const handleCloseJobModal = () => {
    setIsJobModalOpen(false)
    setSelectedJob(null)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary-50 to-white py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary-900 tracking-tight-5">
                Join the future of
                <br />
                <span className="text-primary-600">decentralized finance</span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg sm:text-xl text-primary-600 leading-relaxed">
                  Florida Street is building the next generation of DeFi protocols and is the main contributor to GONDI Protocol with over <strong>$150M TVL</strong>. Join our world-class team and help shape the future of finance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Investor Section */}
        <InvestorSection />

        {/* Jobs Section */}
        <SimpleJobListing jobs={jobs} onJobClick={handleJobClick} />

        {/* Culture Section */}
        <CultureSection />
      </main>

      {/* Modals */}
      <JobModal
        job={selectedJob}
        isOpen={isJobModalOpen}
        onClose={handleCloseJobModal}
      />
    </div>
  )
}