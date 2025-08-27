'use client'

import React from 'react'

const cultureValues = [
  {
    title: 'Owner Mentality',
    description: 'You think and act like an owner, taking full accountability for outcomes and driving projects from conception to completion without needing oversight.'
  },
  {
    title: 'Relentless Execution',
    description: 'You&apos;re a doer who turns ideas into reality. You thrive on solving hard problems and delivering exceptional work that speaks for itself.'
  },
  {
    title: 'Team-First Mindset',
    description: 'You elevate everyone around you. Success is measured by what we accomplish together, not individual recognition.'
  },
  {
    title: 'Maximum Accountability',
    description: 'You own your commitments completely. When you say you&apos;ll do something, it gets done—no excuses, no hand-holding required.'
  },
  {
    title: 'Continuous Excellence',
    description: 'You&apos;re never satisfied with &quot;good enough.&quot; You actively seek feedback, constantly improve your craft, and push the entire team to new heights.'
  },
  {
    title: 'Authentic Collaboration',
    description: 'You bring your whole self to work, contribute to our culture genuinely, and help create an environment where great people love doing their best work.'
  }
]

export default function CultureSection() {
  return (
    <section id="culture" className="py-8 sm:py-12 bg-primary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary-900 tracking-tight-5">
              Our Culture
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg text-primary-700 leading-relaxed">
                We&apos;re a tight-knit team of exceptional doers who take pride in our craft and deliver results. 
                When you join us, you&apos;re not just taking a role—you&apos;re becoming an owner who directly shapes 
                what we build and how we build it.
              </p>
              <p className="text-primary-600 font-medium">
                We&apos;re looking for teammates who embody:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cultureValues.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-lg p-6 shadow-sm border border-primary-200 hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-lg font-semibold text-primary-900 mb-3 tracking-tight-5">
                  {value.title}
                </h3>
                <p className="text-primary-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center bg-white rounded-lg p-8 shadow-sm border border-primary-200">
            <p className="text-lg text-primary-700 leading-relaxed max-w-3xl mx-auto">
              If you want to be part of a team where your expertise matters, your contributions are felt immediately, 
              and you&apos;re surrounded by people who are as committed to excellence as you are—this is your place.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}