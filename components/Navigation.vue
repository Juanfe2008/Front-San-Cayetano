<template style="background: #ffffff">
  <div style="background: #ffffff !important;">
    <b-navbar toggleable="lg" type="dark" style="background: #D90429 !important;">
      <b-navbar-brand>San Cayetano</b-navbar-brand>
      <nuxt-link class="nav-link" to="/home">Inicio</nuxt-link>
      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>

            <nuxt-link class="nav-link" to="/posts">Productos</nuxt-link>
            <nuxt-link class="nav-link" to="/prices">Registro</nuxt-link>
            <nuxt-link class="nav-link" to="/credito">Creditos</nuxt-link>
          </b-navbar-nav>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="/">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style>
html {
  background: #ffffff;
}
.header {
  background: #2c3e50;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  border-bottom: 1px dotted #2ecc71;
}

.header .text-title {
  font-family: "Oswald";
  font-size: 2rem;
  text-transform: uppercase;
}

.header .text-subtitle {
  font-family: "Oswald";
  font-size: 23px;
  text-transform: uppercase;
}

.header ul {
  display: flex;
  list-style: none;
}

.header a {
  color: #ffffff;
  background: #2d3436;
  padding: 0.3rem 1rem;
  margin-right: 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
}

.nav-link {
  font-size: larger;
  accent-color: white;
}

.header a:hover {
  background: #2c3e50;
  border: 1px solid #bdc3c7;
}
</style>
