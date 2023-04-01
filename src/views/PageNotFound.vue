<template>
  <body>
    <div class="container">
      <h1>Oops! Page not found</h1>
      <h2>404 page</h2>
      <p>Sorry, we cant find the page you're looking for</p>
      <a href="/">
        <v-btn class="text-yellow">Go Back Home</v-btn>
      </a>
    </div>
  </body>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: "montserrat", sans serif;
  min-height: 100vh;
  background-image: linear-gradient(125deg, #6a89cc, #b8e994);
}

.container {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  color: #343434;
}

.container h1 {
  font-size: 40px;
  margin: 0;
  font-weight: 900;
  letter-spacing: 10px;
  background: url(../assets/chair.jpg) center no-repeat;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

.container a {
  text-decoration: none;
  color: #ffff;
  padding: 12px 24px;
  display: inline-block;
  border-radius: 25px;
  font-size: 14px;
  text-transform: uppercase;
  transition: 0.4s;
}

.container v-btn:hover {
  background: #e55039;
}
</style>
