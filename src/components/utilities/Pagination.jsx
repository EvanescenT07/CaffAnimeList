const Pagination = ( {page, lastPage, setPage} ) => {

      const resetPage = () => {
            scrollTo({
                  behavior: "smooth",
                  top: 0
            })
      }

      const handleNextPage = () => {
            setPage((prevState) => prevState + 1)
            resetPage()
      }

      const handlePrevPage = () => {
            if (page > 1) {
                  setPage((prevState) => prevState - 1)
                  resetPage()
            }
      }

      return(
            <div className="flex justify-center items-center px-2 py-4 gap-4 text-color-white text-xl">
                  <button onClick={handlePrevPage} className="transition-all hover:text-color-secondary">Prev</button>
                  <p>{page} of {lastPage}</p>
                  <button onClick={handleNextPage} className="transition-all hover:text-color-secondary">Next</button>
            </div>
      )
}

export default Pagination