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
    if (isOpen) {
      document.body.style.overflow = 'auto'
      setIsOpen(false)
    } else {
      document.body.style.overflow = 'hidden'
      setIsOpen(true)
    }
  }

  const handleSubmit = () => {
    setIsOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className='w-20'>
      <button
        className='p-2 rounded-xl hover:bg-blue-400'
        onClick={handleClick}
      >
        <RxHamburgerMenu size={40} />
      </button>
      <div className={`${isOpen ? '' : styles['menu-hidden']} ${styles.menu}`}>
        <span className={styles['search-bar']}>
          <SearchBar onSubmit={handleSubmit} />
        </span>
        <p className='text-slate-600 mx-4 my-4'>
          We gratefully acknowledge support from our volunteer peer reviewers,
          member institutions, and all{' '}
          <a
            href='https://github.com/couscousdude/eeXiv-2/graphs/contributors'
            target='_blank'
          >
            open-source contributors
          </a>
          .
        </p>
      </div>
    </div>
  )
}
