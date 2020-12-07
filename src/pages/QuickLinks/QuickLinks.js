import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchLastBlogs } from '../../store/actions/blogActions'
import './QuickLinks.css'



const QuickLinks = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchLastBlogs())  
  }, [])

  const {blogs} = useSelector(({blogsPage}) => ({
    blogs: blogsPage.blogs
  }))
    return 	<section className="quick-links">
      {blogs.map(blog => (
        <article key={blog.id} style={{ backgroundImage: `url(${blog.image})` }}>
        <Link to={`/blog/${blog.id}`} className="table">
          <div className="cell">
            <div className="text">
              <h4>{blog.title}</h4>
              <hr />
              <h3>{blog.subtitle}</h3>
            </div>
          </div>
        </Link>
      </article>

      ))}

  </section>


}

export default QuickLinks