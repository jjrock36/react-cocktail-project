import React from 'react'
import { useGlobalContext } from '../context'

const Loading = () => {
  const {loading} = useGlobalContext();

  return (
    <div className={`${loading && `loader`}`}>
    </div>
  )
}

export default Loading
