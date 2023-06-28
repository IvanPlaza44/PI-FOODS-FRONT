import React from 'react'
import style from "./Pagination.module.css"

export const Pagination = ({recipesPerPage, currentPage, totalRecipes, setCurrentPage}) => {

  const pageNumbers = [];

  const totalPage = Math.ceil(totalRecipes / recipesPerPage)
  console.log(totalPage)

  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
    console.log(pageNumbers) //ASI HAGO MI PAGINACION DINAMICA
  }

  ////////////------------
  const onPreviusPage = ()=>{
    setCurrentPage(currentPage - 1)
  }
  ///--------------------
  const onNextPage = ()=>{
    setCurrentPage(currentPage + 1)
  }

  const onSpecificPage = (n)=>{
    setCurrentPage(n)
  }

  return (
    <div className={style.container}>
      <button onClick={onPreviusPage} className={currentPage === 1 ? "disabled" : style.btn} disabled={currentPage === 1}>Previous</button>

      {
        pageNumbers.map(noPage=>(
          <button onClick={()=> onSpecificPage(noPage)} className={currentPage === noPage ? style.btnCurrent : style.btn} key={noPage}>{noPage}</button>
        ))
      }

      <button onClick={onNextPage} className={currentPage >= pageNumbers.length ? "disabled" : style.btn} disabled={currentPage >= pageNumbers.length}>Next</button>
    </div>


  )
}
