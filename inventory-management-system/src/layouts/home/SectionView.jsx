import React from 'react'
import LeftDescription from '../../components/sectionView/LeftDescription'
import RightImage from '../../components/sectionView/RightImage'

export default function SectionView() {
  return (
    <div style={{display: 'flex'}}>
        <LeftDescription/>
        <RightImage/>
    </div>
  )
}
