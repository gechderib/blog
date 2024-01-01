import BreadCrumbs from '@/components/BreadCrumbs'
import React from 'react'

const apiUrl = "https://api.openai.com/v1/chat/completions";

const Topic = async ({ params }) => {
  // topicName
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
          "content": `Generate a post about ${params.topicName}!`
        }
      ]
    })
  })
  let content;
  try {
    const data = await response.json()
    if (data) {
      content = <div>
        <h1>{params.topicName}</h1>
        {data && <p>
          {data.choices[0].message.content}
        </p>}
      </div>
    }

  } catch (err) {
    content = <h1>{err.message}</h1>
  }

  return (content
  )
}

export default Topic