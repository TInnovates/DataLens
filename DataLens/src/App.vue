<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="nav-bar">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
      <nav class="main-nav">
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </nav>
    </div>
  </header>
  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped>
header {
  width: 100vw;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  margin: 0;
  padding: 0 1rem;
  box-sizing: border-box;
}

.logo {
  margin-right: 1rem;
}

.main-nav {
  display: flex;
  gap: 1rem;
  font-size: 1.1rem;
}

.main-nav a {
  color: var(--color-text);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background 0.2s;
  margin: 0;
}

.main-nav a.router-link-exact-active {
  background: var(--color-background-soft);
  font-weight: bold;
}

.main-nav a:hover {
  background: var(--color-background-mute);
}

.content {
  aspect-ratio: 16 / 9;
  width: 100%;
  max-width: 80vw;
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: 56px; /* Höhe des Headers, damit Inhalt nicht darunter liegt */
}
</style>
