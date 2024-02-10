'use client'
import styles from './documentViewer.module.css'
import { Zilla_Slab } from 'next/font/google'
import { saveAs } from 'file-saver'

const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500'] })

export default function Page({
  params,
}: Readonly<{ params: { docName: string } }>) {
  const handleDownload = () => {
    saveAs(`/download/${params.docName}/file.pdf`, `${params.docName}.pdf`)
  }

  type ItemType = 'report' | 'presentation' | 'other'
  const generateItemBadge = (itemName: ItemType) => {
    let itemStyle: string
    switch (itemName) {
      case 'report':
        itemStyle = `${styles.itemType} bg-green-400`
        break
      case 'presentation':
        itemStyle = `${styles.itemType} bg-blue-400`
        break
      case 'other':
        itemStyle = `${styles.itemType} bg-amber-400`
    }
    return (
      <p className={itemStyle}>
        {itemName.charAt(0).toUpperCase()}
        {itemName.slice(1)}
      </p>
    )
  }

  return (
    <div id='content'>
      <div>
        <h3
          className={`
            ${styles.itemTitle}
            text-slate-800
            ${zillaSlab.className}
          `}
        >
          2024 Controls/Programming DWM
        </h3>
        <p className={`${styles.itemAuthors} text-slate-800 mt-2`}>
          <a href='../author/#mbohsali'>Majd Bohsali</a> and{' '}
          <a href='../author/#avenkatesh'>Ananth Venkatesh</a>
        </p>
        <p className='mt-4'>Published Jan 22, 2024</p>
        {generateItemBadge('report')}
        <p className={styles.itemRevision}>Revision 1</p>
        <h4 className={styles.itemAbstractHeader}>Abstract</h4>
        <p className='my-2 text-xl text-slate-600'>
          This document outlines the first two weeks of prototyping conducted by
          the EECS subteam for Team 1280. Action items are presented in a
          doing/working/moving format to keep track of new developments related
          to EECS projects.
        </p>
        <p className='my-2'>
          <strong>Topics</strong>:{' '}
          <a href='../topic/#frc'>FIRST Robotics Competition</a>,{' '}
          <a href='../topic/#eecs'>
            Electrical Engineering and Computer Science
          </a>
        </p>
        <p className='my-2'>
          <strong>Code</strong>:{' '}
          <a href='https://github.com/Team-1280/Swerve' target='_blank'>
            https://github.com/Team-1280/Swerve
          </a>
          ,{' '}
          <a href='https://github.com/Team-1280/Jankboard' target='_blank'>
            https://github.com/Team-1280/Jankboard
          </a>
          ,{' '}
          <a href='https://github.com/Team-1280/identity' target='_blank'>
            https://github.com/Team-1280/identity
          </a>
        </p>
        <button
          className='bg-blue-600 text-slate-100 hover:bg-blue-300 font-semibold rounded py-2 px-4 my-2'
          onClick={handleDownload}
        >
          Download PDF
        </button>
      </div>
    </div>
  )
}
