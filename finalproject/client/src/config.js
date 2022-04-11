const config = {
    apiUrl: process.env.REACT_APP_API_URL,
  
    endpoints: {
      me:'/me',
      signup:'/signup',
      login: '/login',
      posts: "/posts", //for infinite scrolling of post
      post: "/posts/:id", // for individual 
      addPost: '/post',
      deletePost: '/posts/:id',
      donatePost: '/donate'
    },
  };
  
  export default config;