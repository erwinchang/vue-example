<template>
  <nav class="navbar"
       role="navigation"
       aria-label="main navigation">

    <div id="navbarBasicExample"
         class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/inventory"
                         class="button is-primary">
              <strong> Inventory</strong>
            </router-link>
            <router-link to="/"
                         class="button is-warning">
              <p>
                Total cart items:
                <span> 00 </span>
              </p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>