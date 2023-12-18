import React from 'react'

const Topic = ({params: {topicName} }) => {
    console.log(topicName)
  return (
    <div>{topicName}</div>
  )
}

export default Topic