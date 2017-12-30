<template>
<div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/resume">Resume</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><a href="mailto:mike.dvorscak@gmail.com">Contact Me</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'navBar'
};
</script>
<style>
nav{
  background-color: #27ae60;
}
.nav-wrapper{
  margin: 0 auto;
  display: block;
  width: 75vw;
}
.nav-wrapper ul{
  display: inline-flex;
  height: 100%;
  flex-direction: row;
}
.nav-wrapper ul a{
  font-size: 3vw;
}
@media (min-width: 600px) { 
  .nav-wrapper ul a{
    font-size: 18px; /* 600 * 3vw (600 * .03) */
  }
}
@media (max-width: 405px) { 
  .nav-wrapper ul a{
    font-size: 2.4vw; 
  }
}
</style>