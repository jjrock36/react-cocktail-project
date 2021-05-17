import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {products, loading} = useGlobalContext();
  if(loading) {
    return <Loading />
  }
  else if(products.length < 1) {
    return (
      <h1 className="section-title">
        No cocktails match your search
      </h1>
    )
  }
  else {
    return (
      <div className="section">
        <div className="section-title">
          <h2>cocktails</h2>
        </div>
        <div className="cocktails-center">
          {products.map((cocktail) => {
            return <Cocktail key={cocktail.id} {...cocktail} />
          })}
        </div>
      </div>
    )
  }
}

export default CocktailList
