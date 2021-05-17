import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchItem} = useGlobalContext();
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCocktail = () => {
    setSearchItem(searchValue.current.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="search">
            search for your favorite cocktail
            <input 
              type="text"
              id="search"
              name="search"
              ref={searchValue}
              onChange={searchCocktail}
            />
          </label>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
