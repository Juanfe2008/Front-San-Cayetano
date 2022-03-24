<template>
  <div id="main-content" class="blog-page">
    <div class="container">
      <div class="row clearfix">
        <div class="col-lg-8 col-md-12 left-box">
          <div class="card single_post">
            <div class="header">
              <h2>Noticias</h2>
            </div>
            <div class="body">
              <h3>Titulo</h3>
              <p>
                Contenido
              </p>
            </div>
          </div>
          <!-- <div class="card">
            <div class="header">
              <h2>Comments</h2>
            </div>
            <div class="body">
              <ul class="comment-reply list-unstyled">
                <li class="row clearfix">
                  <div class="icon-box col-md-2 col-4">
                    <img
                      class="img-fluid img-thumbnail"
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Awesome Image"
                    />
                  </div>
                  <div class="text-box col-md-10 col-8 p-l-0 p-r0">
                    <h5 class="m-b-0">Nicolas Casallas</h5>
                    <p>It's one of the best blog posts I've ever seen.</p>
                    <ul class="list-inline">
                      <li><a href="">Sep 19 2021</a></li>
                      <li><a href="">Reply</a></li>
                    </ul>
                  </div>
                </li>
                <li class="row clearfix">
                  <div class="icon-box col-md-2 col-4">
                    <img
                      class="img-fluid img-thumbnail"
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      alt="Awesome Image"
                    />
                  </div>
                  <div class="text-box col-md-10 col-8 p-l-0 p-r0">
                    <h5 class="m-b-0">Daniela</h5>
                    <p>Great I'll post something soon.</p>
                    <ul class="list-inline">
                      <li><a href="">Sep 19 2021</a></li>
                      <li><a href="">Reply</a></li>
                    </ul>
                  </div>
                </li>
                <li class="row clearfix">
                  <div class="icon-box col-md-2 col-4">
                    <img
                      class="img-fluid img-thumbnail"
                      src="https://bootdey.com/img/Content/avatar/avatar4.png"
                      alt="Awesome Image"
                    />
                  </div>
                  <div class="text-box col-md-10 col-8 p-l-0 p-r0">
                    <h5 class="m-b-0">Felipe Garzón</h5>
                    <p>I like this page.</p>
                    <ul class="list-inline">
                      <li><a href="">Sep 17 2021</a></li>
                      <li><a href="">Reply</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div> -->
        </div>
        <div class="col-lg-4 col-md-12 right-box">
        <!--   <div class="card">
            <div class="header">
              <h2>Categories</h2>
            </div>
            <div class="body widget">
              <ul class="list-unstyled categories-clouds m-b-0">
                <li><a href="/posts">Science</a></li>
                <li><a href="/posts">Technologies</a></li>
                <li><a href="/posts">Nature</a></li>
              </ul>
            </div>
          </div> -->

          <!-- <div class="card">
            <div class="header">
              <h2>Popular Posts</h2>
            </div>
            <div class="body widget popular-post">
              <div class="row">
                <div class="col-lg-12">
                  <div class="single_post">
                    <p class="m-b-0">Apple Introduces Search Ads Basic</p>
                    <span>Sep 17, 2021</span>
                  </div>
                  <div class="single_post">
                    <p class="m-b-0">new rules, more cars, more races</p>
                    <span>Sep 17, 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div> -->

          <!-- <div class="card">
            <div class="header">
              <h2>Prices</h2>
            </div>
            <div class="body widget">
              <ul class="list-unstyled categories-clouds m-b-0">
                <h3>Plans Availables</h3>
                <li><a href="/prices">Starter</a></li>
                <li><a href="/prices">Popular</a></li>
                <li><a href="/prices">Advance</a></li>
              </ul>
            </div>
          </div> -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Home",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Website abut tutorials",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    };
  },
}
</script>

<style>
body {
  background-color: #f4f7f6;
  margin-top: 20px;
}
.card {
  background: #fff;
  transition: 0.5s;
  border: 0;
  margin-bottom: 30px;
  border-radius: 0.55rem;
  position: relative;
  width: 100%;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
}
.card .body {
  color: rgb(255, 255, 255);
  padding: 20px;
  font-weight: 400;
  background: #232434;
}
.card .header {
  color: rgb(255, 255, 255);
  padding: 20px;
  position: relative;
  box-shadow: none;
}
.single_post {
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.single_post .body {
  padding: 30px;
}

.single_post .img-post {
  position: relative;
  overflow: hidden;
  max-height: 500px;
  margin-bottom: 30px;
}

.single_post .img-post > img {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  opacity: 1;
  -webkit-transition: -webkit-transform 0.4s ease, opacity 0.4s ease;
  transition: transform 0.4s ease, opacity 0.4s ease;
  max-width: 100%;
  filter: none;
  -webkit-filter: grayscale(0);
  -webkit-transform: scale(1.01);
}

.single_post .img-post:hover img {
  -webkit-transform: scale(1.02);
  -ms-transform: scale(1.02);
  transform: scale(1.02);
  opacity: 0.7;
  filter: gray;
  -webkit-filter: grayscale(1);
  -webkit-transition: all 0.8s ease-in-out;
}

.single_post .img-post:hover .social_share {
  display: block;
}

.single_post .footer {
  padding: 0 30px 30px 30px;
}

.single_post .footer .actions {
  display: inline-block;
}

.single_post .footer .stats {
  cursor: default;
  list-style: none;
  padding: 0;
  display: inline-block;
  float: right;
  margin: 0;
  line-height: 35px;
}

.single_post .footer .stats li {
  border-left: solid 1px rgba(160, 160, 160, 0.3);
  display: inline-block;
  font-weight: 400;
  letter-spacing: 0.25em;
  line-height: 1;
  margin: 0 0 0 2em;
  padding: 0 0 0 2em;
  text-transform: uppercase;
  font-size: 13px;
}

.single_post .footer .stats li a {
  color: #777;
}

.single_post .footer .stats li:first-child {
  border-left: 0;
  margin-left: 0;
  padding-left: 0;
}

.single_post h3 {
  font-size: 20px;
  text-transform: uppercase;
}

.single_post h3 a {
  color: #242424;
  text-decoration: none;
}

.single_post p {
  font-size: 16px;
  line-height: 26px;
  font-weight: 300;
  margin: 0;
}

.single_post .blockquote p {
  margin-top: 0 !important;
}

.single_post .meta {
  list-style: none;
  padding: 0;
  margin: 0;
}

.single_post .meta li {
  display: inline-block;
  margin-right: 15px;
}

.single_post .meta li a {
  font-style: italic;
  color: #959595;
  text-decoration: none;
  font-size: 12px;
}

.single_post .meta li a i {
  margin-right: 6px;
  font-size: 12px;
}

.single_post2 {
  overflow: hidden;
}

.single_post2 .content {
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 80px;
  position: relative;
}

.single_post2 .content .actions_sidebar {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 60px;
}

.single_post2 .content .actions_sidebar a {
  display: inline-block;
  width: 100%;
  height: 60px;
  line-height: 60px;
  margin-right: 0;
  text-align: center;
  border-right: 1px solid #e4eaec;
}

.single_post2 .content .title {
  font-weight: 100;
}

.single_post2 .content .text {
  font-size: 15px;
}

.right-box .categories-clouds li {
  display: inline-block;
  margin-bottom: 5px;
}

.right-box .categories-clouds li a {
  display: block;
  border: 1px solid;
  padding: 6px 10px;
  border-radius: 3px;
}

.right-box .instagram-plugin {
  overflow: hidden;
}

.right-box .instagram-plugin li {
  float: left;
  overflow: hidden;
  border: 1px solid #fff;
}

.comment-reply li {
  margin-bottom: 15px;
}

.comment-reply li:last-child {
  margin-bottom: none;
}

.comment-reply li h5 {
  font-size: 18px;
}

.comment-reply li p {
  margin-bottom: 0px;
  font-size: 15px;
  color: #777;
}

.comment-reply .list-inline li {
  display: inline-block;
  margin: 0;
  padding-right: 20px;
}

.comment-reply .list-inline li a {
  font-size: 13px;
}

@media (max-width: 640px) {
  .blog-page .left-box .single-comment-box > ul > li {
    padding: 25px 0;
  }
  .blog-page .left-box .single-comment-box ul li .icon-box {
    display: inline-block;
  }
  .blog-page .left-box .single-comment-box ul li .text-box {
    display: block;
    padding-left: 0;
    margin-top: 10px;
  }
  .blog-page .single_post .footer .stats {
    float: none;
    margin-top: 10px;
  }
  .blog-page .single_post .body,
  .blog-page .single_post .footer {
    padding: 30px;
  }
}
</style>
