<template>
  <div>
    <h1 style="color: #d90429; font-family: sans-serif">Detalles de Creditos</h1>
      <div class="response">
        <b-card title="Saldo Total" header-tag="header" footer-tag="footer"
                header-bg-variant="dark"
                footer-border-variant="dark"
                body-text-variant="dark">
          <template #header>
            <h6 class="mb-0">Nombre cliente</h6>
          </template>
          <b-card-text style="color: #d90429; font-size: 19px">$000.000.000</b-card-text>
          <template #footer>
            <!--            <em>Footer Slot</em>-->
            <b-button href="#" variant="primary">Ver Detalle</b-button>
          </template>
        </b-card>
      </div>

  </div>
</template>

<script>

</script>

<style scoped>
.response{
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  gap: 2%;
  margin-right: 4%;
}
</style>
