import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPerPageAmount, setSortBy } from "../../store/actions/filterAction";

const perPageList = [8, 16, 32];
const sortList = ['Popularity', 'Date', 'Price'];

const Sidebar = () => {
  const dispatch = useDispatch();
  const {activePerPage} = useSelector(({filters}) => ({
    activePerPage: filters.productsPerPage
  }));
  const {activeSortBy} = useSelector(({filters}) => ({
    activeSortBy: filters.sortBy
  }));

  const productsPerPageChange = (count) => {
    dispatch(setPerPageAmount(count));
    console.log(activePerPage, count);
  };

  const sortByChange = (sortBy) => {
    dispatch(setSortBy(sortBy));
  };
  return (
    <aside id="sidebar">
      <div className="widget">
        <h3>Products per page:</h3>
        <fieldset>
          {perPageList.map((item, index) => {
            return (
                <label 
                className={`crf ${item === activePerPage ? 'checked'  : ''}`} 
                key={`${item}_${index}`}
                style={{cursor: "pointer"}}
                onClick={() => productsPerPageChange(item)}
                >
                  {item}
                </label>
            );
          })}
        </fieldset>
      </div>
      <div className="widget">
        <h3>Sort by:</h3>
        <fieldset>
        {sortList.map((item, index) => {
            return (
                <label 
                className={`crf ${item === activeSortBy ? 'checked'  : ''}`} 
                key={`${item}_${index}`}
                style={{cursor: "pointer"}}
                onClick={() => sortByChange(item)}
                >
                  {item}
                </label>
            );
          })}


        </fieldset>
      </div>
      <div className="widget">
        <h3>Condition:</h3>
        <fieldset>
          <input
            defaultChecked=""
            type="checkbox"
            id="crf-input-6"
            className="crf-i"
            style={{ position: "absolute", left: "-9999em" }}
          />
          <label className="crf checked" htmlFor="crf-input-6">
            New
          </label>
          <input
            type="checkbox"
            id="crf-input-7"
            className="crf-i"
            style={{ position: "absolute", left: "-9999em" }}
          />
          <label className="crf" htmlFor="crf-input-7">
            Used
          </label>
        </fieldset>
      </div>
      <div className="widget">
        <h3>Price range:</h3>
        <fieldset>
          <div
            id="price-range"
            className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
            aria-disabled="false"
          >
            <div
              className="ui-slider-range ui-widget-header ui-corner-all"
              style={{ left: "10%", width: "60%" }}
            ></div>
            <a
              className="ui-slider-handle ui-state-default ui-corner-all"
              href="/"
              style={{ left: "10%" }}
            >
              <span>$500</span>
            </a>
            <a
              className="ui-slider-handle ui-state-default ui-corner-all"
              href="/"
              style={{ left: "70%" }}
            >
              <span>$3500</span>
            </a>
          </div>
        </fieldset>
      </div>
    </aside>
  );
};

export default Sidebar;
