/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Coffee from '../buttons/Coffee'
import styles from '../../styles/Coffee.module.css'
import React from 'react'
import { useRouter } from 'next/router'
import { StarFilled } from '@ant-design/icons'
import { languageList } from '../data/languageList'
import { frameworkList } from '../data/frameworkList'
import { gitList } from '../data/gitList'
import { roadmapList } from '../data/roadmapList'
import { communityList } from '../data/communityList'
import { UserButton, useUser } from '@clerk/nextjs'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false)
  const [isFrameworkDropdownOpen, setFrameworkDropdownOpen] = useState(false)
  const [isGitSelectionDropdownOpen, setGitSelectionDropdownOpen] =
    useState(false)
  const [isRoadmapDropdownOpen, setRoadmapDropdownOpen] = useState(false)
  const [isCommunityDropdownOpen, setCommunityDropdownOpen] = useState(false)
  const node = useRef<HTMLLIElement | null>(null)
  const frameworkNode = useRef<HTMLLIElement | null>(null)
  const gitSelectionNode = useRef<HTMLLIElement | null>(null)
  const roadmapNode = useRef<HTMLLIElement | null>(null)
  const communityNode = useRef<HTMLLIElement | null>(null)
  const router = useRouter()
  const [starCount, setStarCount] = useState<number | null>(null)
  const { user, isLoaded } = useUser()

  useEffect(() => {
    fetch('https://api.github.com/repos/nikohoffren/fork-commit-merge')
      .then(response => response.json())
      .then(data => {
        setStarCount(data.stargazers_count)
      })
      .catch(error => {
        console.error('Failed fetching star count:', error)
      })
  }, [])

  const toggleSideNav = () => {
    setIsOpen(!isOpen)
  }

  const navigateToLanguage = (link: string) => {
    router.push(link)
    setLanguageDropdownOpen(false)
  }

  const navigateToFramework = (link: string) => {
    router.push(link)
    setFrameworkDropdownOpen(false)
  }

  const navigateToGitSelection = (link: string) => {
    router.push(link)
    setGitSelectionDropdownOpen(false)
  }

  const navigateToRoadmap = (link: string) => {
    router.push(link)
    setRoadmapDropdownOpen(false)
  }

  const navigateToCommunity = (link: string) => {
    router.push(link)
    setCommunityDropdownOpen(false)
  }

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!isLanguageDropdownOpen)
    setFrameworkDropdownOpen(false)
    setGitSelectionDropdownOpen(false)
    setRoadmapDropdownOpen(false)
    setCommunityDropdownOpen(false)
  }

  const toggleFrameworkDropdown = () => {
    setFrameworkDropdownOpen(!isFrameworkDropdownOpen)
    setLanguageDropdownOpen(false)
    setGitSelectionDropdownOpen(false)
    setRoadmapDropdownOpen(false)
    setCommunityDropdownOpen(false)
  }

  const toggleGitSelectionDropdown = () => {
    setGitSelectionDropdownOpen(!isGitSelectionDropdownOpen)
    setLanguageDropdownOpen(false)
    setFrameworkDropdownOpen(false)
    setRoadmapDropdownOpen(false)
    setCommunityDropdownOpen(false)
  }

  const toggleRoadmapDropdown = () => {
    setRoadmapDropdownOpen(!isRoadmapDropdownOpen)
    setLanguageDropdownOpen(false)
    setFrameworkDropdownOpen(false)
    setGitSelectionDropdownOpen(false)
    setCommunityDropdownOpen(false)
  }

  const toggleCommunityDropdown = () => {
    setCommunityDropdownOpen(!isCommunityDropdownOpen)
    setLanguageDropdownOpen(false)
    setFrameworkDropdownOpen(false)
    setGitSelectionDropdownOpen(false)
    setRoadmapDropdownOpen(false)
  }

  return (
    <>
      <nav className='bg-secondary'>
        <div className='mx-auto max-w-5xl py-3'>
          <div className='flex items-center justify-between'>
            <div></div>
            <div className='mr-6 md:hidden'>
              <button onClick={toggleSideNav}>
                {isOpen ? (
                  <XIcon className='h-6 w-6' />
                ) : (
                  <MenuIcon className='h-6 w-6' />
                )}
              </button>
            </div>
            <nav className='hidden md:block'>
              <ul className='items-center space-x-3 md:flex md:gap-2'>
                <li>
                  <Link
                    href='/resources'
                    onClick={() => setIsOpen(false)}
                    className='hover:/75 block cursor-pointer px-4 py-2 text-sm font-medium hover:text-gray-300'
                  >
                    Resources
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href='/leaderboard'
                    className='hover:/75 block cursor-pointer px-4 py-2 text-sm font-medium hover:text-gray-300'
                  >
                    Leaderboard
                  </Link>
                </li> */}
                <li>
                  <Link href='/ide' onClick={() => setIsOpen(false)}>
                    <div className='hover:/75 block cursor-pointer px-4 py-2 text-sm font-medium hover:text-gray-300'>
                      IDE:s
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href='/faq'
                    onClick={() => setIsOpen(false)}
                    className='hover:/75 block cursor-pointer px-4 py-2 text-sm font-medium hover:text-gray-300'
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    className='flex rounded-lg bg-white p-0.5 px-2 transition-transform hover:scale-105'
                    href='https://www.buymeacoffee.com/nikohoffren'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Buy me a coffee'
                  >
                    <span className='sr-only'>Buy me a coffee</span>

                    <img
                      className=''
                      src='https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg'
                      alt='Buy me a coffee'
                      width='20px'
                      height='20px'
                    />
                  </Link>
                </li>

                <li className='inline-flex overflow-hidden rounded-md bg-white shadow-sm'>
                  <div className='inline-block border-e px-2 py-1 text-sm font-medium text-black hover:bg-gray-50 focus:relative'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='icon icon-tabler icon-tabler-heart'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      strokeWidth='2'
                      stroke='currentColor'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                      <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572'></path>
                    </svg>
                    <span className='sr-only'>heart icon</span>
                  </div>

                  <Link
                    href={'https://github.com/sponsors/fork-commit-merge?o=esb'}
                    target='blank'
                    className='flex items-center gap-x-1 px-2 py-1 text-sm font-bold text-black hover:bg-gray-200 focus:relative'
                  >
                    Sponsor
                  </Link>
                </li>

                <li className='inline-flex overflow-hidden rounded-md bg-white shadow-sm'>
                  <div className='inline-block border-e px-2 py-0.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='icon icon-tabler icon-tabler-brand-github'
                      width='28'
                      height='28'
                      viewBox='0 0 24 24'
                      strokeWidth='2'
                      stroke='currentColor'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                      <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
                    </svg>
                    <span className='sr-only'>github icon</span>
                  </div>

                  <Link
                    href={'https://github.com/nikohoffren/fork-commit-merge'}
                    target='blank'
                    className='flex items-center gap-x-1 px-2 py-0.5 text-sm font-bold text-black hover:bg-gray-200 focus:relative'
                  >
                    {starCount !== null ? (
                      <>
                        {starCount}
                        <StarFilled color='currentColor' />
                      </>
                    ) : (
                      ''
                    )}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className='fixed left-0 top-0 z-20 h-full w-64 overflow-auto bg-transparent px-1 pt-6 backdrop-blur-md md:hidden [&>a>div]:font-bold [&>li>div]:font-bold [&>li>div]:transition-all'>
          {!user && (
            <Link
              href='/dashboard'
              onClick={() => setIsOpen(false)}
              className='group relative mb-2 block rounded-md px-6 text-sm font-medium text-black focus:outline-none'
            >
              <span className='relative block rounded bg-slate-100 px-4 py-2 text-sm font-semibold transition-colors hover:bg-slate-300'>
                Login
                {/* Replace "Login" text with "Dashboard" after Dashboard is implemented and move it out from the !user condition check to show it always */}
              </span>
            </Link>
          )}
          <div className='ml-6 pt-2'>
            {isLoaded && user && <UserButton afterSignOutUrl='/' />}
          </div>

          <Link href='/' onClick={() => setIsOpen(false)}>
            <div className='mb-3 mt-4 block cursor-pointer px-6 text-sm transition-transform hover:scale-105'>
              <Image
                src='/fork-commit-merge-logo.jpg'
                alt='Fork, Commit, Merge -logo'
                width={40}
                height={40}
                unoptimized
              />
            </div>
          </Link>

          <li ref={node} className='list-none'>
            <div
              className='hover:/75 block cursor-pointer px-6 py-2 text-sm'
              onClick={toggleLanguageDropdown}
            >
              Languages
            </div>
            {isLanguageDropdownOpen && (
              <ul className='absolute mt-2 w-48 rounded-md bg-slate-920 py-1 shadow-lg'>
                {languageList.map((lang, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      navigateToLanguage(lang.link)
                      setIsOpen(false)
                    }}
                  >
                    <div className='cursor-pointer px-4 py-2 text-sm hover:bg-slate-800'>
                      {lang.name}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li ref={frameworkNode} className='list-none'>
            <div
              className='hover:/75 block cursor-pointer px-6 py-2 text-sm'
              onClick={toggleFrameworkDropdown}
            >
              Frameworks | Libraries
            </div>
            {isFrameworkDropdownOpen && (
              <ul className='absolute mt-2 w-48 rounded-md bg-slate-920 py-1 shadow-lg'>
                {frameworkList.map((framework, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      navigateToFramework(framework.link)
                      setIsOpen(false)
                    }}
                  >
                    <div className='cursor-pointer px-4 py-2 text-sm hover:bg-slate-800'>
                      {framework.name}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li ref={gitSelectionNode} className='list-none'>
            <div
              className='hover:/75 block cursor-pointer px-6 py-2 text-sm'
              onClick={toggleGitSelectionDropdown}
            >
              Git
            </div>
            {isGitSelectionDropdownOpen && (
              <ul className='absolute mt-2 w-48 rounded-md bg-slate-920 py-1 shadow-lg'>
                {gitList.map((git, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      navigateToGitSelection(git.link)
                      setIsOpen(false)
                    }}
                  >
                    <div className='cursor-pointer px-4 py-2 text-sm hover:bg-slate-800'>
                      {git.name}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li ref={roadmapNode} className='list-none'>
            <div
              className='cursor-pointerhover:/75 block px-6 py-2 text-sm'
              onClick={toggleRoadmapDropdown}
            >
              Roadmaps
            </div>
            {isRoadmapDropdownOpen && (
              <ul className='absolute mt-2 w-48 rounded-md bg-slate-920 py-1 shadow-lg'>
                {roadmapList.map((roadmap, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      navigateToRoadmap(roadmap.link)
                      setIsOpen(false)
                    }}
                  >
                    <div className='cursor-pointer px-4 py-2 text-sm hover:bg-slate-800'>
                      {roadmap.name}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li ref={communityNode} className='list-none'>
            <div
              className='hover:/75 block cursor-pointer px-6 py-2 text-sm'
              onClick={toggleCommunityDropdown}
            >
              Community
            </div>
            {isCommunityDropdownOpen && (
              <ul className='absolute mt-2 w-48 rounded-md bg-slate-920 py-1 shadow-lg'>
                {communityList.map((community, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      navigateToCommunity(community.link)
                      setIsOpen(false)
                    }}
                  >
                    <div className='cursor-pointer px-4 py-2 text-sm hover:bg-slate-800'>
                      {community.name}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <Link href='/ide' onClick={() => setIsOpen(false)}>
            <div className='hover:/75 block cursor-pointer px-6 py-2 text-sm'>
              IDE:s
            </div>
          </Link>
          <Link href='/faq' onClick={() => setIsOpen(false)}>
            <div className='hover:/75 block cursor-pointer px-6 py-2 text-sm'>
              FAQ
            </div>
          </Link>
          <Link href='/resources' onClick={() => setIsOpen(false)}>
            <div className='hover:/75 block cursor-pointer px-6 py-2 text-sm'>
              Resources
            </div>
          </Link>
          {/* <Link href='/leaderboard' onClick={() => setIsOpen(false)}>
            <div className='hover:/75 block cursor-pointer px-6 py-2 text-sm'>
              Leaderboard
            </div>
          </Link> */}

          <li className='ml-6 mt-4 inline-flex overflow-hidden rounded-md bg-white shadow-sm'>
            <div className='inline-block border-e px-2 py-0.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-brand-github'
                width='28'
                height='28'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
              </svg>
              <span className='sr-only'>github icon</span>
            </div>

            <Link
              href={'https://github.com/nikohoffren/fork-commit-merge'}
              target='blank'
              className='flex items-center gap-x-1 px-2 py-0.5 text-sm font-bold text-black hover:bg-gray-200 focus:relative'
            >
              {starCount !== null ? (
                <>
                  {starCount}
                  <StarFilled color='currentColor' />
                </>
              ) : (
                ''
              )}
            </Link>
          </li>
          <div className='flex-column mt-2'>
            <li className='ml-6 inline-flex overflow-hidden rounded-md bg-white shadow-sm'>
              <div className='inline-block border-e px-2 py-1 text-sm font-medium text-black hover:bg-gray-50 focus:relative'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-heart'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572'></path>
                </svg>
                <span className='sr-only'>heart icon</span>
              </div>

              <Link
                href={'https://github.com/sponsors/nikohoffren?o=esb'}
                target='blank'
                className='flex items-center gap-x-1 px-2 py-1 text-sm font-bold text-black hover:bg-gray-200 focus:relative'
              >
                Sponsor
              </Link>
            </li>
          </div>
          <div className='mb-10 ml-6 mt-2'>
            <div className={styles.buyButton}>
              <Coffee />
            </div>
          </div>
        </div>
      )}

      <header className='sticky top-0 z-10 mb-6 hidden w-full bg-transparent shadow-bottom backdrop-blur md:block'>
        <div className='shadow-top mx-auto max-w-5xl py-2'>
          <div className='items-center justify-between md:flex'>
            <div className='flex flex-1 items-center space-x-1'>
              <Link
                href='/'
                onClick={() => setIsOpen(false)}
                className='block cursor-pointer text-sm transition-transform hover:scale-105'
              >
                <Image
                  className='rounded'
                  src='/fork-commit-merge-logo.jpg'
                  alt='Fork, Commit, Merge -logo'
                  width={50}
                  height={50}
                  unoptimized
                />
              </Link>
            </div>

            <div className='flex items-center space-x-1 [&>li>div]:font-semibold [&>li>div]:transition-all'>
              <li ref={node} className='list-none'>
                <div
                  className='hover:/75 block cursor-pointer px-4 py-2 text-sm transition-all hover:text-gray-300'
                  onClick={toggleLanguageDropdown}
                >
                  Languages
                </div>
                {isLanguageDropdownOpen && (
                  <ul className='scrollable-dropdown absolute mt-2 w-48 rounded-md bg-slate-920 py-1 shadow-lg backdrop-blur-lg'>
                    {languageList.map((lang, index) => (
                      <li
                        key={index}
                        onClick={() => navigateToLanguage(lang.link)}
                      >
                        <div className='cursor-pointer px-4 py-2 text-sm hover:bg-slate-800'>
                          {lang.name}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li ref={frameworkNode} className='list-none'>
                <div
                  className='hover:/75 block cursor-pointer px-4 py-2 text-sm hover:text-gray-300'
                  onClick={toggleFrameworkDropdown}
                >
                  Frameworks | Libraries
                </div>
                {isFrameworkDropdownOpen && (
                  <ul className='scrollable-dropdown absolute mt-2 w-48 rounded-md bg-slate-920 py-1 shadow-lg'>
                    {frameworkList.map((framework, index) => (
                      <li
                        key={index}
                        onClick={() => navigateToFramework(framework.link)}
                      >
                        <div className='cursor-pointer px-4 py-2 text-sm hover:bg-slate-800'>
                          {framework.name}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li ref={gitSelectionNode} className='list-none'>
                <div
                  className='hover:/75 block cursor-pointer px-4 py-2 text-sm hover:text-gray-300'
                  onClick={toggleGitSelectionDropdown}
                >
                  Git
                </div>
                {isGitSelectionDropdownOpen && (
                  <ul className='absolute mt-2 w-48 rounded-md bg-slate-920 py-1 shadow-lg'>
                    {gitList.map((git, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          navigateToGitSelection(git.link)
                          setIsOpen(false)
                        }}
                      >
                        <div className='cursor-pointer px-4 py-2 text-sm hover:bg-slate-800'>
                          {git.name}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li ref={roadmapNode} className='list-none'>
                <div
                  className='hover:/75 block cursor-pointer px-4 py-2 text-sm hover:text-gray-300'
                  onClick={toggleRoadmapDropdown}
                >
                  Roadmaps
                </div>
                {isRoadmapDropdownOpen && (
                  <ul className='absolute mt-2 w-48 rounded-md bg-slate-920 py-1 shadow-lg'>
                    {roadmapList.map((roadmap, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          navigateToRoadmap(roadmap.link)
                          setIsOpen(false)
                        }}
                      >
                        <div className='cursor-pointer px-4 py-2 text-sm hover:bg-slate-800'>
                          {roadmap.name}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li ref={communityNode} className='list-none'>
                <div
                  className='hover:/75 block cursor-pointer px-4 py-2 text-sm hover:text-gray-300'
                  onClick={toggleCommunityDropdown}
                >
                  Community
                </div>
                {isCommunityDropdownOpen && (
                  <ul className='absolute mt-2 w-48 rounded-md bg-slate-920 py-1 shadow-lg'>
                    {communityList.map((community, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          navigateToCommunity(community.link)
                          setIsOpen(false)
                        }}
                      >
                        <div className='cursor-pointer px-4 py-2 text-sm hover:bg-slate-800'>
                          {community.name}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {!user && (
                <Link
                  href='/dashboard'
                  onClick={() => setIsOpen(false)}
                  className='group relative block rounded-md pl-4 text-sm font-medium text-black focus:outline-none'
                >
                  <span className='relative block rounded bg-slate-100 px-4 py-1 text-sm font-semibold transition-colors hover:bg-slate-300'>
                    Login
                    {/* Replace "Login" text with "Dashboard" after Dashboard is implemented and move it out from the !user condition check to show it always */}
                  </span>
                </Link>
              )}

              {isLoaded && user && (
                <div className='pl-4'>
                  <UserButton afterSignOutUrl='/' />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
