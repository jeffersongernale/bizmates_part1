<template>
    <div>
        <b-navbar variant="faded" type="light">
            <img src="images/weather-icon.svg" class="weather-icon" alt="Weather App Icon"/> 
            <b-navbar-brand tag="h1" class="mb-0">Weather App</b-navbar-brand>
        </b-navbar>
    </div>
</template>



<script>
export default {
  name: "Navbar",
};
</script>

<style  scope>
    .weather-icon {
        width: 60px;
        margin-right: 10px;
    }
    .navbar {
        border-top: 3px solid #327be9ee;
        width: 0%;
        animation: navbarLine 1s;
        animation-fill-mode: forwards;
    }

     @keyframes navbarLine {
        from {
            width: 0%;
        }
        to {
            width: 100%;
        }
    }
</style>