const config = {
    apiUrl: process.env.REACT_APP_API_URL,
  
    endpoints: {
      posts: "/posts", //for infinite scrolling of post
      post: "/posts/:id", // for individual 
      addPost: '/post',
      updatePost: '/post',
      deletePost: '/donate',
      donatePost: '/donate'
    },
  };
  
  export default config;