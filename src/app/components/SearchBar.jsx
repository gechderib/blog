"use client"
import React, { useState } from 'react'

const SearchBar = ({userInput, onChangeUserInput}) => {
  return (
    <div>
        <h1>Search fo Topics</h1>
        <input value={userInput} type='text' onChange={(e)=>onChangeUserInput(e.target.value)}/>
    </div>
  )
}

export default SearchBar