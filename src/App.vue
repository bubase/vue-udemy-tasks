<template>
<div id="app" class="app">
  <div class="nav">
    <ul>
        <li><router-link to="/monster_slayer">Мини-игра Monster slayer</router-link><a href="https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/5941784#content">(cсылка на раздел курса)</a></li>
        <li><router-link to="/server_components">Vue-components</router-link><a href="https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/practice/72/introduction#content">(cсылка на раздел курса)</a></li>
    </ul>
  </div>
  <div class="views">
    <router-view></router-view>
  </div>
</div>

</template>

<style scoped>
html, body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: #2c3e50;
}

.nav {
  width: 20%;
  border-right: solid 1px #4fc08d;
}

.views {
  width: 80%;
  padding-left: 10px;
}

.app {
  min-height: 720px;
  display: flex;
}

ul {
  padding: 0;
}

li {
  text-align: center;
  margin: 0 20px;
  border-bottom: solid 1px #4fc08d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

a {
  color: #7f8c8d;
  text-decoration: none;
}

.router-link-active {
  color: red;
}

a:hover {
  color: #4fc08d;
}

</style>
