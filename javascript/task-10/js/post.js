class Post {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }

  create(parent) {
    let postdiv = document.createElement("div");
    postdiv.className = "postdiv";
    let numberdiv=document.createElement("div");
    numberdiv.className = "number";
    numberdiv.innerHTML = this.id;

    let postInfo = document.createElement("div");
    postInfo.className = "post-info";

    let postTitle = document.createElement("h2");
    postTitle.className = "post-title";
    postTitle.innerHTML = this.title;

    let postBody = document.createElement("p");
    postBody.innerHTML = "post-body";
    postBody.innerHTML = this.content;

    postdiv.style =`
        position: relative;
        box-shadow: 0 2px 4px rgb(0 0 0 / 30%);
        border-radius: 3px;
        margin: 40px auto;
        max-width: 800px; 
    `;

    numberdiv.style =`
        position: absolute;
        top: -15px;
        left: -15px;
        font-size: 20px;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: #FF6200;
        color: white;
        padding: 10px 13px;
    `;

    postInfo.style = `
        background-color: #FFF;
        border: 1px solid #FFF;
        padding: 30px;
        border-radius: 6px;
        width: 100%;
    `;

    postTitle.style=`
        font-weight: 700;
        line-height: 1.5;
        color : #FF6200;
    `;

    postBody.style=`
        padding: 20px 0;
        line-height: 1.3;
    `;








    postInfo.appendChild(postTitle);
    postInfo.appendChild(postBody);
    postdiv.appendChild(numberdiv);
    postdiv.appendChild(postInfo);
    parent.appendChild(postdiv);

  }    
}
