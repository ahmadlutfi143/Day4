let blogs = [];

function submitBlog() {
  
  let title = document.getElementById('project').value;
  let content = document.getElementById('description').value;

  let startdate = document.getElementById('start').value;
  let stopdate = document.getElementById('end').value;

  let image = document.getElementById('upload').files[0];
  image = URL.createObjectURL(image);

  let ceklis = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(item => item.value);

  let blog = {
    author: 'Ahmad Lutfi Afifi',
    title,
    startdate,
    stopdate,
    content,
    image,
    ceklis,
  };

  blogs.push(blog);
  renderBlogs();
}


function renderBlogs() {

  lengthData = blogs.length;
  let blogContainer = document.getElementById("stock");
  blogContainer.innerHTML = firstBlogContent();

  let i = 0;
  for (i; i < lengthData; i++) {

    let icons = blogs[i].ceklis.map(value => `<img src="${value}">`)
   
    blogContainer.innerHTML += `
        <article class="isi-materi">
    <img src="${blogs[i].image}" style="width: 100%; border-radius: 10px" />
    <div class="posting" id="posting-card">
      <h3><a href="blog-detail.html" target="_blank">${blogs[i].title}</a></h3>
      <span class="post-date">
        <time class="post-date"> Duration : ${blogs[i].startdate, blogs[i].stopdate}</time>
      </span>
      <p>${blogs[i].content}</p>
      <div>
      <i class="fa-brands fa-html5">
      </i><i class="fa-brands fa-react">
      </i><i class="fa-brands fa-js-square"></i>
      </div>
      <div class="btn-submit">
        <button type="submit">edit</button>
        <button type="submit">delete</button>
      </div>
    </div>    
  </article>
      `;

}

  // Non Looping 2x
  function firstBlogContent() {
    return `<article class="isi-materi">
    <img src="tech.jpg" style="width: 100%; border-radius: 10px" />
    <div class="posting" id="posting-card">
      <h3><a href="blog-detail.html" target="_blank">Javascript Mobile</a></h3>
      <span class="post-date">
        <time class="post-date">durasi : 3 bulan</time>
      </span>
      <p>App that used for Dumbways student, it was deployed and can downloaded on playstore. Happy download</p>
      <div>
      <i class="fa-brands fa-html5"></i>
      <i class="fa-brands fa-react"></i>
      <i class="fa-brands fa-css3-alt"></i>
      <i class="fa-brands fa-js-square"></i>
      </div>
      <div class="btn-submit">
        <button type="submit">edit</button>
        <button type="submit">delete</button>
      </div>
    </div>    
  </article>`;
}



}


    let cb_html = document.getElementById('Html').checked;
    let cb_css = document.getElementById('Css').checked;
    let cb_react = document.getElementById('React').checked;
    let cb_java = document.getElementById('Java').checked;
    
    // tech.push(cb_vue, cb_angular, cb_node, cb_react);

    // let tech = {
    //     cb_vue : 'Vue Js',
    //     cb_angular :
    // }

    const objHtml = {
        name: 'Html',
        checked : cb_html,
    }

    const objCss = {
        name: 'Css',
        checked : cb_html,
    }

    const objReact = {
        name: 'React',
        checked : cb_react,
    }

    const objJava = {
        name: 'Java',
        checked : cb_java,
    }


    techn.push(objHtml,objCss,objReact,objJava);
