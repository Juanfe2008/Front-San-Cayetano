<template>
  <div>
    <h1 style="color: #d90429; font-family: sans-serif">Detalles de Creditos</h1>
    <div style="display: grid; grid-template-columns: 25% 25% 25% 25%">


      <div class="response" v-for="(user,index) in users" :key="users.id" >
        <b-card title="Saldo Total" header-tag="header" footer-tag="footer"
                header-bg-variant="dark"
                footer-border-variant="dark"
                body-text-variant="dark"  >
          <template #header>
            <h6 class="mb-0">{{user.name}} {{user.lastname}}</h6>
          </template>
          <b-card-text style="color: #d90429; font-size: 19px">${{user.totalValue}}</b-card-text>
          <template #footer>
            <!--            <em>Footer Slot</em>-->
            <b-button size="sm" @click="OpenDetail(user)" class="mr-1"  variant="outline-success">
              Ver Detalle
            </b-button>
          </template>
        </b-card>
      </div>

    </div>
    <div>
      <b-modal ref="my-modal-creditos" hide-footer title="Detalle Operación"
               :header-bg-variant="headerBgVariant"
               :header-text-variant="headerTextVariant"
               :body-bg-variant="bodyBgVariant"
               :body-text-variant="bodyTextVariant">
        <b-card-text style="color: #000000; font-size: 19px">Usuario: {{userCredito}} Saldo: {{valor}}</b-card-text>
        <div class="d-block text-center">
          <b-container fluid>
            <form ref="modal">
              <b-form-group invalid-feedback="Name is required">
                <b-row class="mb-1">
                  <b-col style="text-align: initial" cols="12"
                  >Usuario Operación
                    <b-form-input
                      id="nombre-input"
                      v-model="nombreUser"
                      :state="nombreUserState"
                      required
                    ></b-form-input>
                  </b-col>
                  <b-col style="text-align: initial" cols="12"
                  >Valor Transacción
                    <b-form-input
                      id="valor-input"
                      type="number"
                      v-model="valorProductoOperacion"
                      :state="valorOperacion"
                      required
                    ></b-form-input>
                  </b-col>
                </b-row>
              </b-form-group>
            </form>
          </b-container>
        </div>
        <b-button class="mt-3" variant="outline-success" block @click="abonoCuenta">Abono</b-button>
        <b-button class="mt-3" variant="outline-danger" block @click="CreditoCuenta">Credito</b-button>
        <b-button class="mt-3" variant="outline-primary" block @click="hideModal">Cerrar</b-button>
      </b-modal>
    </div>
  </div>

</template>

<script>
import UsersService from "~/pages/services/usersService";
export default {

  data(){
    return {
      users: [],

      /*Inpust para creditos*/
      valor:"",
      userCredito:"",
      iduser:"",
      valorDefinivo:"",
      /*Constantes para el update para creditos*/
      nombreUser:"",
      nombreUserState:null,
      valorProductoOperacion:"",
      valorOperacion:null,

      headerBgVariant: "dark",
      headerTextVariant: "light",
      bodyBgVariant: "light",
      bodyTextVariant: "dark",
      footerBgVariant: "light",
      footerTextVariant: "dark",

    }
  },
  methods:{
    OpenDetail(event) {
      this.$refs['my-modal-creditos'].show();

      console.log(event.name);
      this.userCredito = event.name +" "+ event.lastname;
      this.valor = event.totalValue;
      this.iduser = event.id;
    },
    hideModal() {
      this.$refs['my-modal-creditos'].hide()
      this.nombreUser = "";
      this.valorProductoOperacion = "";
    },
    abonoCuenta() {
      this.$refs['my-modal-creditos'].hide()
      console.log("Valor "+ this.valor);
      console.log("id" + this.iduser);
      this.valorDefinivo = this.valor - this.valorProductoOperacion;

      const userUpdate = {
        id: this.iduser,
        totalValue: this.valorDefinivo
      }

      this.userService.update(userUpdate).then((data) => {
        if (data.status === 201){
          this.nombreUser = "";
          this.valorProductoOperacion = "";
          console.log("Actualizado")
        }
      })
    }
    ,
    CreditoCuenta() {
      this.$refs['my-modal-creditos'].hide()
      this.valorDefinivo = this.valor + this.valorProductoOperacion;

      const userUpdate = {
        id: this.iduser,
        totalValue: this.valorDefinivo
      }

      this.userService.update(userUpdate).then((data) => {
        if (data.status === 201){
          this.nombreUser = "";
          this.valorProductoOperacion = "";
          console.log("Actualizado")
        }
      })
    }


  },
  async created(){
    this.userService = new UsersService();
  },
  async mounted(){
    await this.userService.getAll().then((data) => {
      this.users = data.data.users;
      console.log(this.users);
    })
  }
}

</script>

<style scoped>
.response{
  display: grid;
  grid-template-columns: 95% 25% 25% 25%;
  gap: 2%;
  margin-right: 4%;
}
</style>
