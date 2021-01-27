import '../App.css'

const Search = ({handleChange, searchStock}) => {
    return (
        <div className="stock-search-container" >
            <input type="text" className="stock-search" onChange={handleChange} placeholder="Search" />
            <button onClick={searchStock}>Find</button>
        </div>
    )
}

export default Search;