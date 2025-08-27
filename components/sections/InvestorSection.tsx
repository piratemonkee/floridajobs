'use client'

import React from 'react'

const investors = [
  'Dragonfly Capital',
  'Pantera Capital', 
  'Firstmark Capital',
  '6th Man Ventures'
]

export default function InvestorSection() {
  return (
    <section className="py-6 sm:py-8 bg-white border-t border-primary-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <p className="text-primary-600 font-medium">
            Backed by world-class investors
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {investors.map((investor) => (
              <div
                key={investor}
                className="text-primary-700 font-medium tracking-tight-5"
              >
                {investor}
              </div>
            ))}
            <div className="text-primary-700 font-medium tracking-tight-5">
              Hack.vc
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
