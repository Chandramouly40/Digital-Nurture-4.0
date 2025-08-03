import React, { useState } from 'react';
import './App.css';
import CourseDetails from './CourseDetails';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';

function App() {
  const [showCourses, setShowCourses] = useState(true);
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);

  return (
    <div className="app-container">
      <div className="controls">
        <button onClick={() => setShowCourses(!showCourses)}>
          Toggle Courses
        </button>
        <button onClick={() => setShowBooks(!showBooks)}>
          Toggle Books
        </button>
        <button onClick={() => setShowBlogs(!showBlogs)}>
          Toggle Blogs
        </button>
      </div>
      <div className="details-container">
        {showCourses && <div className="component-wrapper"><CourseDetails /></div>}
        {showBooks && <div className="component-wrapper"><BookDetails /></div>}
        {showBlogs && <div className="component-wrapper blog-wrapper"><BlogDetails /></div>}
      </div>
    </div>
  );
}

export default App;