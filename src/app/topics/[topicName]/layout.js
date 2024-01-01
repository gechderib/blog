import React from 'react'
import BreadCrumbs from '../../../components/BreadCrumbs'

const TopicLayout = ({ children, params: { topicName } }) => {

  return (
    <>
      <BreadCrumbs topicName={topicName} />
      {children}
    </>
  )
}

export default TopicLayout