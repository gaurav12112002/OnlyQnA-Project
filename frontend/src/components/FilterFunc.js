import {useEffect} from "react";

function FilterFunc({setActiveGenre, activeGenre, setFiltered, popular}){
    useEffect(() =>{
        if (activeGenre === "general") {
            setFiltered(popular);
            return;
        }

        const filt = popular.filter((movie) =>
            movie.category.includes(activeGenre)
        );
        setFiltered(filt);


    }, [activeGenre])

    return(
        <div className="filter-container">
            <button className="but" onClick={() => setActiveGenre("general")}>All</button>
            <button className="but" onClick={() => setActiveGenre("labs")}>Labs</button>
            <button className="but" onClick={() => setActiveGenre("canteen")}>Canteen</button>

        </div>

    );
}

export default FilterFunc;