import React from 'react'

const TopicsLayout = ({children}) => {
  return (
    <div>
        <h1>This is only displied for route that start with topics/</h1>
        <span>{children}</span>
    </div>
    
  )
}

export default TopicsLayout