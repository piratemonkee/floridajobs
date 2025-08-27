'use client'

import React from 'react'
import { Job } from '@/types/job'
import JobCard from '@/components/jobs/JobCard'

interface SimpleJobListingProps {
  jobs: Job[]
  onJobClick: (job: Job) => void
}

export default function SimpleJobListing({ jobs, onJobClick }: SimpleJobListingProps) {
  return (
    <section id="jobs" className="py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary-900 tracking-tight-5">
              Open Roles
            </h2>
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {jobs.map((job) => (
              <JobCard 
                key={job.id}
                job={job} 
                onJobClick={onJobClick}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
