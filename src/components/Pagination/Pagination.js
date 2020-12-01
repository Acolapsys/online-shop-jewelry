import React from "react";
import { useDispatch, useSelector } from "react-redux";



import {setActivePage} from "../../store/actions/filterAction"




const Pagination = () => {
  const { productsQuantity, productsPerPage, activePage } = useSelector(
    ({ productsPage, filters }) => ({
      productsQuantity: productsPage.products.length,
      productsPerPage: filters.productsPerPage,
      activePage: filters.activePage,
    })
  );
  const dispatch = useDispatch()

  const pages = Math.floor(productsQuantity / productsPerPage) + 1;

  const arrPages = [...Array(pages).keys()].map(el => el + 1)
  const onPageClick = (page) => {
    console.log(page);
    dispatch(setActivePage(page))
  }
  const onPrevClick = () => {
    if (activePage > 1) {
    dispatch(setActivePage(activePage - 1))
  }
  }
  const onNextClick = () => {
    if (activePage < pages) {
      dispatch(setActivePage(activePage + 1))
  }
  }
  

  return (
    <div className="pagination">
      <ul>
        <li onClick={onPrevClick}>
          <a>
            <span className="ico-prev"></span>
          </a>
        </li>

        {arrPages.map((page) => (
          <li
            key={page}
            className={activePage === page ? "active" : ""}
            onClick={() => onPageClick(page)}
          >
            <a>{page}</a>
          </li>
        ))}

        <li onClick={onNextClick}>
          <a>
            <span className="ico-next"></span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
