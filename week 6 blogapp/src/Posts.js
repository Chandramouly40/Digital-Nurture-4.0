
import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null,
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
   
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {

    console.error("Component did catch an error:", error, errorInfo);

    alert(`An error occurred in a child component: ${error.message}\nCheck console for details.`);
  }

  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.setState({ posts: data, error: null }); 
    } catch (error) {
      console.error("Error fetching posts:", error);
      this.setState({ error: error });
    }
  };

  componentDidMount() {
    console.log('Posts component mounted. Fetching data...');
    this.loadPosts();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <p>We are working to fix this issue.</p>
        </div>
      );
    }

    const { posts, error } = this.state;

    if (error) {
      return (
        <div>
          <h2>Blog Posts</h2>
          <p style={{ color: 'red' }}>Error: {error.message}</p>
          <p>Please check your network connection or the API URL.</p>
        </div>
      );
    }

    if (posts.length === 0) {
      return (
        <div>
          <h2>Blog Posts</h2>
          <p>Loading posts...</p>
        </div>
      );
    }

    return (
      <div>
        <h2>Blog Posts</h2>
        {posts.map(post => (
          <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;