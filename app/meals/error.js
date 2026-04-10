'use client'
import React from 'react'

export default function Error({error}) {
  return (
    <main className='error'>
        <h1>An error occurred!</h1>
        <p>Failed to fetch!</p>
    </main>
  )
}
