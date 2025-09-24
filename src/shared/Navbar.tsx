'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import { 
  NavbarProps, 
  ButtonClickHandler, 
  LinkClickHandler 
} from '@/utils/types'
import { 
  mainNavigationLinks, 
  actionButtons, 
  icons,
  servicesData,
  insightsData,
  industriesData,
  aboutData,
  servicesMobileData,
  insightsMobileData,
  industriesMobileData,
  aboutMobileData
} from '@/utils/constants'

const Navbar: React.FC<NavbarProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set())
  const [openSubDropdowns, setOpenSubDropdowns] = useState<Set<string>>(new Set())

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setOpenDropdowns(new Set()) 
    setOpenSubDropdowns(new Set()) // Close all sub-dropdowns when toggling menu
  }

  const toggleDropdown = (dropdownId: string) => {
    const newOpenDropdowns = new Set(openDropdowns)
    if (newOpenDropdowns.has(dropdownId)) {
      newOpenDropdowns.delete(dropdownId)
    } else {
      // Close all other dropdowns and open only the clicked one
      newOpenDropdowns.clear()
      newOpenDropdowns.add(dropdownId)
    }
    setOpenDropdowns(newOpenDropdowns)
    // Also close all sub-dropdowns when switching main dropdowns
    setOpenSubDropdowns(new Set())
  }

  const toggleSubDropdown = (subDropdownId: string) => {
    const newOpenSubDropdowns = new Set(openSubDropdowns)
    if (newOpenSubDropdowns.has(subDropdownId)) {
      newOpenSubDropdowns.delete(subDropdownId)
    } else {
      // Close all other sub-dropdowns and open only the clicked one
      newOpenSubDropdowns.clear()
      newOpenSubDropdowns.add(subDropdownId)
    }
    setOpenSubDropdowns(newOpenSubDropdowns)
  }

  // Event handlers
  const handleButtonClick: ButtonClickHandler = (action: string): void => {
    console.log(`${action} button clicked`);
    // Add your button click logic here
  }

  const handleLinkClick: LinkClickHandler = (href: string): void => {
    console.log(`Navigating to: ${href}`);
 
  }

 

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" className="cursor-pointer">
                <Image
                  src={icons.logo}
                  alt="Nexia Logo"
                  width={220}
                  height={80}
                  className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-col items-end space-y-6">
            {/* Top Action Buttons */}
            <div className="flex items-center space-x-3">
              {actionButtons.map((button) => (
                <Button
                  key={button.id}
                  id={button.id}
                  label={button.label}
                  icon={button.icon}
                  action={button.action}
                  isHighlighted={button.isHighlighted}
                  onClick={handleButtonClick}
                />
              ))}
            </div>

            {/* Main Navigation Menu */}
            <nav className="flex items-center space-x-8">
              <div className="relative group">
                <div className="text-black font-normal text-base leading-6 flex items-center space-x-1 transition-colors cursor-pointer hover:text-[#00B9B9]">
                  <span>Services</span>
                  <svg className="w-5 h-5 text-[#00B9B9] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                
                {/* Mega Dropdown Menu */}
                <div className="fixed top-28 left-50 w-3/4 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                  <div className="px-8 py-4">
                    <div className="grid grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div className="space-y-6">
                        {servicesData.slice(0, 2).map((section) => (
                          <div key={section.id} className={section.id === 'business-services' ? 'lg:mt-[8rem]' : ''}>
                            <h3 className="text-[#00B9B9] font-semibold text-lg mb-3">{section.title}</h3>
                            <ul className="space-y-2">
                              {section.items.map((item) => (
                                <li key={item.id}>
                                  <Link 
                                    href={item.href} 
                                    className="text-black hover:text-[#00B9B9] transition-colors text-sm cursor-pointer"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      
                      {/* Right Column */}
                      <div className="space-y-6">
                        {servicesData.slice(2).map((section) => (
                          <div key={section.id}>
                            <h3 className="text-[#00B9B9] font-semibold text-lg mb-3">{section.title}</h3>
                            <ul className="space-y-2">
                              {section.items.map((item) => (
                                <li key={item.id}>
                                  <Link 
                                    href={item.href} 
                                    className="text-black hover:text-[#00B9B9] transition-colors text-sm cursor-pointer"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="text-black font-normal text-base leading-6 flex items-center space-x-1 transition-colors cursor-pointer">
                  <span>Insights</span>
                  <svg className="w-5 h-5 text-[#00B9B9] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {/* Insights Dropdown Menu */}
                <div className="absolute top-10 left-0 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50 min-w-48 py-2">
                  <ul className="space-y-1">
                    {insightsData.map((item) => (
                      <li key={item.id}>
                        <a 
                          href={item.href} 
                          className="block px-4 py-2 text-black hover:text-[#00B9B9] transition-colors text-sm cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(item.href);
                          }}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative group">
                <button className="text-black font-normal text-base leading-6 flex items-center space-x-1 transition-colors cursor-pointer">
                  <span>Industries</span>
                  <svg className="w-5 h-5 text-[#00B9B9] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {/* Industries Dropdown Menu */}
                <div className="absolute top-10 left-0 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50 min-w-48 py-2">
                  <ul className="space-y-1">
                    {industriesData.map((item) => (
                      <li key={item.id}>
                        <a 
                          href={item.href} 
                          className="block px-4 py-2 text-black hover:text-[#00B9B9] transition-colors text-sm cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(item.href);
                          }}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative group">
                <button className="text-black font-normal text-base leading-6 flex items-center space-x-1 transition-colors cursor-pointer">
                  <span>About</span>
                  <svg className="w-5 h-5 text-[#00B9B9] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {/* About Dropdown Menu */}
                <div className="absolute top-10 left-0 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50 min-w-48 py-2">
                  <ul className="space-y-1">
                    {aboutData.map((item) => (
                      <li key={item.id}>
                        <a 
                          href={item.href} 
                          className="block px-4 py-2 text-black hover:text-[#00B9B9] transition-colors text-sm cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(item.href);
                          }}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {mainNavigationLinks.map((link) => (
                <a 
                  key={link.id}
                  href={link.href} 
                  className="text-black font-normal text-base leading-6 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              ))}

              <button 
                className="text-[#00B9B9] hover:text-teal-600 transition-colors cursor-pointer"
                onClick={() => handleButtonClick('Search')}
              >
                <img src={icons.search} alt="Search" className="w-5 h-5" />
              </button>
            </nav>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <button 
                className="text-[#00B9B9] hover:text-teal-600 transition-colors cursor-pointer"
                onClick={() => handleButtonClick('Search')}
              >
                <img src={icons.search} alt="Search" className="w-5 h-5" />
              </button>
              <button
                onClick={toggleMobileMenu}
                className="text-[#00B9B9] hover:text-teal-600 transition-colors cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleMobileMenu}></div>
          <div className="fixed inset-y-0 left-0 w-full bg-white shadow-xl">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <Link href="/" className="cursor-pointer" onClick={toggleMobileMenu}>
                  <Image
                    src={icons.logo}
                    alt="Nexia Logo"
                    width={120}
                    height={40}
                    className="h-6 sm:h-8 w-auto"
                  />
                </Link>
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Menu Content */}
              <div className="flex-1 overflow-y-auto">
                <nav className="p-6 space-y-1">
                  {/* Services Dropdown */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex-1 py-3 text-left text-gray-900 hover:text-[#00B9B9] transition-colors cursor-pointer font-medium">
                        Services
                      </div>
                      <button
                        onClick={() => toggleDropdown('services')}
                        className="p-3 text-[#00B9B9] hover:text-[#00B9B9] transition-colors cursor-pointer"
                      >
                        <svg 
                          className={`w-5 h-5 text-[#00B9B9] transition-transform ${openDropdowns.has('services') ? 'rotate-180' : ''}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    {openDropdowns.has('services') && (
                      <div className="ml-4 space-y-1 mt-2">
                        {servicesMobileData.map((section) => (
                          <div key={section.id}>
                            <button
                              onClick={() => toggleSubDropdown(section.id)}
                              className="w-full flex items-center justify-between py-2 text-left text-[#00B9B9] font-semibold text-sm hover:text-[#00B9B9] transition-colors cursor-pointer"
                            >
                              <span>{section.title}</span>
                              <svg 
                                className={`w-4 h-4 text-[#00B9B9] transition-transform ${openSubDropdowns.has(section.id) ? 'rotate-180' : ''}`} 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSubDropdowns.has(section.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                              <ul className="space-y-1 ml-2 mt-1">
                                {section.items.map((item) => (
                                  <li key={item.id}>
                                    <Link 
                                      href={item.href} 
                                      className="block py-1 text-gray-700 hover:text-[#00B9B9] transition-colors text-sm cursor-pointer"
                                      onClick={() => toggleMobileMenu()}
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Other Navigation Items */}
                  <div>
                    <button
                      onClick={() => toggleDropdown('insights')}
                      className="w-full flex items-center justify-between py-3 text-left text-gray-900 hover:text-[#00B9B9] transition-colors cursor-pointer"
                    >
                      <span className="font-medium">Insights</span>
                      <svg 
                        className={`w-5 h-5 text-[#00B9B9] transition-transform ${openDropdowns.has('insights') ? 'rotate-180' : ''}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {openDropdowns.has('insights') && (
                      <div className="ml-4 space-y-1 mt-2">
                        {insightsMobileData.map((section) => (
                          <div key={section.id}>
                            <button
                              onClick={() => toggleSubDropdown(section.id)}
                              className="w-full flex items-center justify-between py-2 text-left text-[#00B9B9] font-semibold text-sm hover:text-[#00B9B9] transition-colors cursor-pointer"
                            >
                              <span>{section.title}</span>
                              <svg 
                                className={`w-4 h-4 text-[#00B9B9] transition-transform ${openSubDropdowns.has(section.id) ? 'rotate-180' : ''}`} 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSubDropdowns.has(section.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                              <ul className="space-y-1 ml-2 mt-1">
                                {section.items.map((item) => (
                                  <li key={item.id}>
                                    <a 
                                      href={item.href} 
                                      className="block py-1 text-gray-700 hover:text-[#00B9B9] transition-colors text-sm cursor-pointer"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick(item.href);
                                        toggleMobileMenu();
                                      }}
                                    >
                                      {item.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <button
                      onClick={() => toggleDropdown('industries')}
                      className="w-full flex items-center justify-between py-3 text-left text-gray-900 hover:text-[#00B9B9] transition-colors cursor-pointer"
                    >
                      <span className="font-medium">Industries</span>
                      <svg 
                        className={`w-5 h-5 text-[#00B9B9] transition-transform ${openDropdowns.has('industries') ? 'rotate-180' : ''}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {openDropdowns.has('industries') && (
                      <div className="ml-4 space-y-1 mt-2">
                        {industriesMobileData.map((section) => (
                          <div key={section.id}>
                            <button
                              onClick={() => toggleSubDropdown(section.id)}
                              className="w-full flex items-center justify-between py-2 text-left text-[#00B9B9] font-semibold text-sm hover:text-[#00B9B9] transition-colors cursor-pointer"
                            >
                              <span>{section.title}</span>
                              <svg 
                                className={`w-4 h-4 text-[#00B9B9] transition-transform ${openSubDropdowns.has(section.id) ? 'rotate-180' : ''}`} 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSubDropdowns.has(section.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                              <ul className="space-y-1 ml-2 mt-1">
                                {section.items.map((item) => (
                                  <li key={item.id}>
                                    <a 
                                      href={item.href} 
                                      className="block py-1 text-gray-700 hover:text-[#00B9B9] transition-colors text-sm cursor-pointer"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick(item.href);
                                        toggleMobileMenu();
                                      }}
                                    >
                                      {item.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <button
                      onClick={() => toggleDropdown('about')}
                      className="w-full flex items-center justify-between py-3 text-left text-gray-900 hover:text-[#00B9B9] transition-colors cursor-pointer"
                    >
                      <span className="font-medium">About</span>
                      <svg 
                        className={`w-5 h-5 text-[#00B9B9] transition-transform ${openDropdowns.has('about') ? 'rotate-180' : ''}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {openDropdowns.has('about') && (
                      <div className="ml-4 space-y-1 mt-2">
                        {aboutMobileData.map((section) => (
                          <div key={section.id}>
                            <button
                              onClick={() => toggleSubDropdown(section.id)}
                              className="w-full flex items-center justify-between py-2 text-left text-[#00B9B9] font-semibold text-sm hover:text-[#00B9B9] transition-colors cursor-pointer"
                            >
                              <span>{section.title}</span>
                              <svg 
                                className={`w-4 h-4 text-[#00B9B9] transition-transform ${openSubDropdowns.has(section.id) ? 'rotate-180' : ''}`} 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSubDropdowns.has(section.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                              <ul className="space-y-1 ml-2 mt-1">
                                {section.items.map((item) => (
                                  <li key={item.id}>
                                    <a 
                                      href={item.href} 
                                      className="block py-1 text-gray-700 hover:text-[#00B9B9] transition-colors text-sm cursor-pointer"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick(item.href);
                                        toggleMobileMenu();
                                      }}
                                    >
                                      {item.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Simple Navigation Links */}
                  {mainNavigationLinks.map((link) => (
                    <a 
                      key={link.id}
                      href={link.href} 
                      className="block py-3 text-gray-900 hover:text-[#00B9B9] transition-colors cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                        toggleMobileMenu();
                      }}
                    >
                      {link.label}
                    </a>
                  ))}

                  {/* Mobile Action Buttons - Now in scrollable area */}
                  <div className="pt-6 space-y-3">
                    {actionButtons.map((button) => (
                      <Button
                        key={button.id}
                        id={button.id}
                        label={button.label}
                        icon={button.icon}
                        action={button.action}
                        isHighlighted={button.isHighlighted}
                        onClick={(action) => {
                          handleButtonClick(action);
                          toggleMobileMenu();
                        }}
                        className="w-full justify-center"
                      />
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar