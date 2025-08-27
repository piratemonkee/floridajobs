'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-primary-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-semibold text-primary-900 tracking-tight-5 hover:text-primary-700 transition-colors duration-200">
            Florida Street
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#jobs" 
              className="text-primary-600 hover:text-primary-900 transition-colors duration-200"
            >
              Open Roles
            </Link>
            <Link 
              href="#culture" 
              className="text-primary-600 hover:text-primary-900 transition-colors duration-200"
            >
              Culture
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button className="p-2 rounded-lg text-primary-600 hover:text-primary-900 hover:bg-primary-100 transition-all duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
