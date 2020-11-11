import React from "react";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <div className="widget">
        <h3>Products per page:</h3>
        <fieldset>
          <input
            checked=""
            type="checkbox"
            id="crf-input-0"
            className="crf-i"
            style={{ position: "absolute", left: "-9999em" }}
          />
          <label className="crf checked" for="crf-input-0">
            8
          </label>
          <input
            type="checkbox"
            id="crf-input-1"
            className="crf-i"
            style={{ position: "absolute", left: "-9999em" }}
          />
          <label className="crf" for="crf-input-1">
            16
          </label>
          <input
            type="checkbox"
            id="crf-input-2"
            className="crf-i"
            style={{ position: "absolute", left: "-9999em" }}
          />
          <label className="crf" for="crf-input-2">
            32
          </label>
        </fieldset>
      </div>
      <div className="widget">
        <h3>Sort by:</h3>
        <fieldset>
          <input
            checked=""
            type="checkbox"
            id="crf-input-3"
            className="crf-i"
            style={{ position: "absolute", left: "-9999em" }}
          />
          <label className="crf checked" for="crf-input-3">
            Popularity
          </label>
          <input
            type="checkbox"
            id="crf-input-4"
            className="crf-i"
            style={{ position: "absolute", left: "-9999em" }}
          />
          <label className="crf" for="crf-input-4">
            Date
          </label>
          <input
            type="checkbox"
            id="crf-input-5"
            className="crf-i"
            style={{ position: "absolute", left: "-9999em" }}
          />
          <label className="crf" for="crf-input-5">
            Price
          </label>
        </fieldset>
      </div>
      <div className="widget">
        <h3>Condition:</h3>
        <fieldset>
          <input
            checked=""
            type="checkbox"
            id="crf-input-6"
            className="crf-i"
            style={{ position: "absolute", left: "-9999em" }}
          />
          <label className="crf checked" for="crf-input-6">
            New
          </label>
          <input
            type="checkbox"
            id="crf-input-7"
            className="crf-i"
            style={{ position: "absolute", left: "-9999em" }}
          />
          <label className="crf" for="crf-input-7">
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
              style={{left: '10%', width: '60%'}}
            ></div>
            <a
              className="ui-slider-handle ui-state-default ui-corner-all"
              href="#"
              style={{left: '10%'}}
            >
              <span>$500</span>
            </a>
            <a
              className="ui-slider-handle ui-state-default ui-corner-all"
              href="#"
              style={{left: '70%'}}
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
