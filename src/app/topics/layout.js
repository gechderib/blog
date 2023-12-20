import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'

const TopicLayout = ({children}) => {
  return (
    <>
    <BreadCrumbs/>
    {children}
    </>
  )
}

export default TopicLayout