import React from 'react'

const Pagination = () => {
    return (
        <div className="pagination">
        <ul>
          <li>
            <a href="#">
              <span className="ico-prev"></span>
            </a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li className="active">
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li>
            <a href="#">
              <span className="ico-next"></span>
            </a>
          </li>
        </ul>
      </div>
     
    )
}

export default Pagination
