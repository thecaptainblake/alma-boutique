<template>
  <div class="maintenance-container">
    <div class="content fade-in">
      <img src="/alma-boutique-logo.png" alt="Logo de Alma Boutique - Moda Femenina">
      
      <h1>¡Estamos Renovando!</h1>
      <p>Alma Boutique está trabajando arduamente para traerte la mejor experiencia de compra online. Nuestra nueva tienda estará lista **muy pronto**.</p>
      <p>Síguenos en nuestras redes sociales para ser el primero en saber sobre la gran apertura.</p>
      
      <div class="social-links">
        <a href="#" target="_blank">Instagram</a> | 
        <a href="#" target="_blank">Facebook</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // No necesitas lógica de JavaScript compleja por ahora,
  // solo el template y los estilos.
</script>

<style scoped>
/* ---------------------------------------------------- */
/* ESTILOS GLOBALES & TIPOGRAFÍA */
/* ---------------------------------------------------- */
.maintenance-container {
  font-family: 'Cormorant Garamond', serif;
  background-color: #FBEFF2; /* Blush Pink de tendencia */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  text-align: center;
  color: #333;
  padding: 20px; /* Aseguramos un padding mínimo en los bordes */
}

.content {
  padding: 40px 20px; 
  max-width: 90%;
  width: 550px;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

h1 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  font-size: 3em;
  letter-spacing: 0.1em;
  color: #333;
  margin-top: 0.5em;
  margin-bottom: 0.2em;
}

p {
  font-family: Arial, sans-serif;
  font-size: 1.1em;
  line-height: 1.6;
  max-width: 450px;
  margin: 10px auto;
}

.social-links {
    margin-top: 30px;
}

.social-links a {
  color: #000;
  text-decoration: none;
  font-weight: 600;
  margin: 0 15px;
  transition: color 0.3s ease;
}

.social-links a:hover {
    color: #a0525d;
}

/* ---------------------------------------------------- */
/* 📱 MEDIA QUERIES PARA CELULARES (iPhones, etc.) */
/* ---------------------------------------------------- */

@media (max-width: 600px) {
    /* En pantallas muy pequeñas (celulares verticales) */
    .content {
        padding: 20px 10px; /* Reducimos el padding interno */
    }

    h1 {
        font-size: 2.2em; /* Reducimos el tamaño del título */
        letter-spacing: 0.05em; /* Reducimos el espaciado para mejor legibilidad */
    }

    p {
        font-size: 1em; /* Reducimos el tamaño de la fuente del cuerpo */
        max-width: 100%;
    }
}

/* ---------------------------------------------------- */
/* ✨ ANIMACIÓN FADE IN Y ELEGANCIA */
/* ---------------------------------------------------- */

/* 1. Definición de la animación */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px); /* Empieza un poco abajo */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 2. Aplicación de la animación al contenido */
.fade-in {
  /* Inicialmente, los elementos deben estar invisibles */
  opacity: 0;
  
  /* Aplicamos la animación */
  animation: fadeIn 1.2s ease-out forwards; /* 1.2s de duración, suave al final */
}

/* 3. Retraso en la animación para los elementos de texto (opcional) */
/* Esto crea una sensación de "aparición escalonada" */
h1 {
    animation-delay: 0.3s;
    animation-fill-mode: backwards; /* Mantiene el estado 'from' antes de empezar */
}

p:nth-of-type(1) {
    animation-delay: 0.5s;
    animation-fill-mode: backwards;
}

p:nth-of-type(2) {
    animation-delay: 0.7s;
    animation-fill-mode: backwards;
}

.social-links {
    animation-delay: 0.9s;
    animation-fill-mode: backwards;
}
</style>