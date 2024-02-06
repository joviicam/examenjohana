<template>
  <div id="about" class="bg-image" :style="{
    'background-image': `url(${require('../assets/hog.jpg')})`
  }">
    <header class="text-light text-center py-5" style="flex: 1;">

      <h2 class="display-4 mt-4">Bienvenido/a a mi Landing Page</h2>
      <p class="lead">Descubre mi catálogo de autos</p>
      <a href="principal" class="btn btn-primary btn-lg mt-3">Da click</a>
    </header>

    <section class="container my-5">
      <h2 class="text-center mb-4">Exámen</h2>
    </section>

    <footer class="text-light text-center py-3">
      <p>&copy; Johana Gálvez álvarez. Todos los derechos reservados.</p>
      <div class="social-icons mt-3">
        <a href="#" class="text-light me-3"><i class="fab fa-twitter"></i></a>
        <a href="#" class="text-light me-3"><i class="fab fa-facebook"></i></a>
        <a href="#" class="text-light me-3"><i class="fab fa-linkedin"></i></a>
        <a href="#" class="text-light"><i class="fab fa-instagram"></i></a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
#about {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-self: start;
  justify-content: space-between;
  background-color: #6991ba;
  width: 100%;
  height: 100%;
  font-style: italic;
  color: #000000;
}
</style>