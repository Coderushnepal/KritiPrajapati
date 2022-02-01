var body = document.body;
var mainWrapper = document.createElement("div");
mainWrapper.classList.add("main-wrapper");
var loaderWrapper = document.createElement("div");
var loader = document.createElement("div");
mainWrapper.appendChild(loaderWrapper);
loaderWrapper.appendChild(loader);
loader.className = "loading";
loaderWrapper.style = `
  position: fixed;
  bottom: 17px;
  left: 47%;
  width: 100%;
  opacity:0;
  color: #FF6200;
`;

body.style = `
    background-color: #f4f4f4;
    font-family: 'Lato', sans-serif;
    padding-bottom: 15px;

`;
body.appendChild(mainWrapper);

let mainTitle = document.createElement("h1");
mainTitle.innerHTML = "My Blog";
mainTitle.style = `    
  margin: 20px;
  text-align: center;
  color: #FF6200;
`;
mainWrapper.appendChild(mainTitle);

let filterContainer = document.createElement("div");
mainWrapper.appendChild(filterContainer);

let filterInput = document.createElement("input");
filterInput.type = "text";
filterInput.id = "filter";
filterInput.className = "filter";
filterInput.placeholder = "Filter posts...";

filterContainer.style = `
  margin: 20px auto;
  width: 80vw;
  max-width: 800px;
  border-color:#FF6200;
`;
filterInput.style = `
  width: 100%;
  padding: 12px;
  font-size: 16px;
`;
filterContainer.appendChild(filterInput);

let allBlogPosts = [];

for (let i = 1; i < 50; i++) {
  let blogPost = {
    id: i,
    title: "sunt aut facere repellat provident occaecati excepturi optio",
    content: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
  };
  allBlogPosts.push(blogPost);
}

let initialNumber = 5;

let blogPosts = allBlogPosts.slice(0, initialNumber);
displayBlogPosts(blogPosts);

function displayBlogPosts(blogPosts) {
  blogPosts.forEach((blogpost) => {
    const post = new Post(blogpost.id, blogpost.title, blogpost.content);
    post.create(mainWrapper);
  });
}

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    loaderWrapper.style.opacity = 1;

    setTimeout(() => {
      if (initialNumber >= allBlogPosts.length) {
        loaderWrapper.innerHTML = "No more Blogs";
        return;
      }
      loaderWrapper.style.opacity = 0;
      setTimeout(() => {
        previousNumber = initialNumber;
        initialNumber += 5;
        blogPosts = allBlogPosts.slice(previousNumber, initialNumber);
        displayBlogPosts(blogPosts);
      }, 300);
    }, 3000);
  }
});
