import React from 'react'
import classes from './loading.module.css'

export default function Mealsloading() {
  return (
    <p className={classes.loading}>Fetching meals...</p>
  )
}
