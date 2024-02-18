'use client'
import { RxHamburgerMenu } from 'react-icons/rx'
import styles from './mobileMenu.module.css'
import { create } from 'zustand'
import SearchBar from '@/app/components/SearchBar'

interface MobileMenuState {
  isOpen: boolean
  searchInput: string
  setSearchInput: (newInput: string) => void
  setIsOpen: (newState: boolean) => void
}

const useMobileMenuState = create<MobileMenuState>((set) => ({
  isOpen: false,
  searchInput: '',
  setSearchInput: (newInput: string) => set({ searchInput: newInput }),
  setIsOpen: (newState: boolean) => set({ isOpen: newState }),
}))

export default function MobileMenu() {
  const isOpen = useMobileMenuState((state) => state.isOpen)
  const setIsOpen = useMobileMenuState((state) => state.setIsOpen)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleSubmit = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div className='w-20'>
        <button
          className='p-2 rounded-xl hover:bg-blue-400'
          onClick={handleClick}
        >
          <RxHamburgerMenu size={40} />
        </button>
      </div>
      <div
        className={`${isOpen ? '' : styles['menu-hidden']} ${styles.menu} shadow-md shadow-slate-300`}
      >
        <div className={styles['search-bar']}>
          <SearchBar onSubmit={handleSubmit} />
        </div>
        <p className='text-slate-600 mx-4 my-4'>
          We gratefully acknowledge support from our volunteer peer reviewers,
          member institutions, and all{' '}
          <a
            href='https://github.com/team-1280/eexiv/graphs/contributors'
            target='_blank'
          >
            open-source contributors
          </a>
          {'.'}
        </p>
      </div>
    </>
  )
}
