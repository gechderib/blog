import BreadCrumbs from '@/app/components/BreadCrumbs'
import React from 'react'

const Topic = ({params: {topicName} }) => {
  return (
    <div>
      {topicName}
    </div>
  )
}

export default Topic