'use client'

import { Job } from '@/types/job'
import Card from '@/components/ui/Card'

import Button from '@/components/ui/Button'

interface JobCardProps {
  job: Job
  onJobClick: (job: Job) => void
}

export default function JobCard({ job, onJobClick }: JobCardProps) {

  return (
    <Card hover clickable className="p-6" onClick={() => onJobClick(job)}>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-primary-900 tracking-tight-5">
              {job.title}
            </h3>
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
        </div>

        <div className="text-primary-600 text-sm leading-relaxed">
          {job.description.split('.').slice(0, 3).join('.') + (job.description.split('.').length > 3 ? '.' : '')}
        </div>
      </div>

      <div className="flex justify-end pt-3">
        <a 
          href={`mailto:${job.applicationEmail}?subject=Application for ${job.title}`}
          onClick={(e) => e.stopPropagation()}
        >
          <Button size="sm">
            Apply Now
          </Button>
        </a>
      </div>
    </Card>
  )
}
