import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [searchItem, setSearchItem] = useState('a');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchItem}`);
      const cocktails = await response.json();
      const {drinks} = cocktails;

      if(drinks){
        const newCocktails = drinks.map((item)=> {
          const {
            idDrink, 
            strDrink, 
            strDrinkThumb, 
            strAlcoholic, 
            strGlass
          } = item;
          return {
            id: idDrink, 
            name: strDrink, 
            image: strDrinkThumb, 
            info: strAlcoholic, 
            glass: strGlass,
          }
        })
        setProducts(newCocktails)
      }
      else {
        setProducts([])
      }
      
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }

  }, [searchItem])

  useEffect(() => {
    getProducts();
    
  }, [searchItem, getProducts])

  return <AppContext.Provider 
    value={{
      searchItem,
      products,
      loading,
      setSearchItem,
      setLoading,
      setProducts,
    }}
  >
    {children}
  </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
