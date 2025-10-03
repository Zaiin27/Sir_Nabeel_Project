'use client'
import React from 'react'
import Image from 'next/image'

interface CaseStudy {
  id: string
  category: string
  title: string
  image: string
  location: string
}

const InsightsSection: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 'argentina',
      category: 'Case Studies',
      title: 'Argentina: Driving Transformation in Capital Markets',
      image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2025/09/Buenos-Aires-Argnetina-1024x575.jpg',
      location: 'Argentina'
    },
    {
      id: 'hong-kong',
      category: 'Case Studies',
      title: 'Hong Kong: Strengthening Audit Frameworks Across Borders for Industrial Conglomerate',
      image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2025/09/79793c8e-88e8-45a3-9fdc-b9f283357eeb-1024x588.jpg',
      location: 'Hong Kong'
    },
    {
      id: 'australia',
      category: 'Case Studies',
      title: 'Australia: Laying the Groundwork for Scalable Growth',
      image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2025/09/Australia-Money-1024x680.jpg',
      location: 'Australia'
    }
  ]

  return (
    <section className="relative bg-[#00323C] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#00B9B9] mb-4 sm:mb-0">
            Insights
          </h2>
          
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full sm:w-80 px-4 py-3 pr-12 border-2 border-[#00B9B9] rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B9B9] focus:ring-opacity-50"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-[#00B9B9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:rounded-none hover:rounded-tl-4xl hover:rounded-br-4xl flex flex-col h-full"
            >
              {/* Card Content */}
              <div className="p-6 flex-grow">
                {/* Category */}
                <div className="mb-3">
                  <span className="text-[#00B9B9] text-sm font-medium uppercase tracking-wide">
                    {study.category}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-[#00323C] text-lg font-semibold leading-tight mb-4 group-hover:text-[#00B9B9] transition-colors duration-300">
                  {study.title}
                </h3>
              </div>
              
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InsightsSection
