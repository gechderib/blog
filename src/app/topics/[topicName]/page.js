import BreadCrumbs from '@/app/components/BreadCrumbs'
import React from 'react'

const apiUrl = "https://api.openai.com/v1/chat/completions";

const Topic = async ({ params: { topicName } }) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
          "content": "You write a blog posts."
        },
        {
          "role": "user",
          "content": `Generate a post about ${topicName}!`
        }
      ]
    })
  })

  const data = await response.json()
  
  return (
    <div>
      <h1>{topicName}</h1>
      {!data && <p>loading...</p>}
      {data && <p>
        {data.choices[0].message.content}
        </p>}
    </div>
  )
}

export default Topic