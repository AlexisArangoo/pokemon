import { useEffect, useState } from "react";
import './styles/Pagination.css'

const Pagination = ({ cardPerPage, currentPage, setCurrentPage, totalCard }) => {
  
  const [visiblePageNumbers, setVisiblePageNumbers] = useState([]);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCard / cardPerPage); i++) {
    pageNumbers.push(i);
  }
  
  useEffect(() => {
    setVisiblePageNumbers(pageNumbers.slice(0, 4));
  }, [totalCard, cardPerPage]);


  const onPreviousPage = () => {  
    const previousPage = currentPage - 1;

    if (currentPage > 1) {
      if (!visiblePageNumbers.includes(previousPage) && previousPage > 0) {
        const startIndex = pageNumbers.indexOf(previousPage);
        setVisiblePageNumbers(pageNumbers.slice(startIndex, startIndex + 4));
      }
      setCurrentPage(previousPage);
    }
  }

  const onNextPage = () => {
    
      const nextPage = currentPage + 1;
      
      if (currentPage < pageNumbers.length) {
        if (!visiblePageNumbers.includes(nextPage) && nextPage <= pageNumbers.length) {
          const startIndex = pageNumbers.indexOf(nextPage) - 3;
          setVisiblePageNumbers(pageNumbers.slice(startIndex, startIndex + 4));
        }
        setCurrentPage(nextPage);
      }
    
  }


  const onSpecifiPage = (x) => {
    setCurrentPage(x)
  }
  
 useEffect(() => {
  if (currentPage === pageNumbers.length) {
    setVisiblePageNumbers(pageNumbers.slice(pageNumbers.length - 4, pageNumbers.length))
  }
 }, [currentPage])
 
  return (
    <nav
      className="pagination is-centered is-rounded"
      role="navigation"
      aria-label="pagination"
    >
      <button className="pagination-previous" onClick={onPreviousPage}><i className='bx bx-arrow-from-right' ></i></button>
      <button className="pagination-next" onClick={onNextPage}><i className='bx bx-arrow-from-left'></i></button>
      <ul className="pagination-list">
        {
            visiblePageNumbers.map(numPage => (
              <li key={numPage}>
                <a className={`pagination-link ${numPage === currentPage ? 'is-current' : ''}`} onClick={()=> onSpecifiPage(numPage)}>{numPage}</a>
              </li>
            ))
        }
        {
          !visiblePageNumbers.includes(pageNumbers.length)

          ?(
            <>
              <li>
               <span className="pagination-ellipsis">&hellip;</span>
              </li>
              <li>
                <a className={`pagination-link ${pageNumbers.length === currentPage ? 'is-current' : ''}`} onClick={()=> onSpecifiPage(pageNumbers.length)}>{pageNumbers.length}</a>
              </li>
            </>
          )

          :('')
        }
      </ul>
    </nav>
  );
};

export default Pagination;
