<template>
  <section id="pricing" class="pricing-content section-padding">
	<div class="container">
    <h1 style="color: #d90429; font-family: sans-serif">Registro de Clientes</h1>
    <br>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <div class="row">
        <div class="col-sm-6">
          <b-form-group id="input-group-2" label="Nombres" class="text-label" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Ingrese el Nombre"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Apellidos" class="text-label" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.lastName"
              placeholder="Ingrese el Apellido"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Identificaicon" class="text-label" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.identification"
              placeholder="Ingrese su # de Identificación"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Teléfono" class="text-label" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.telephone"
              type="number"
              placeholder="Ingrese el Numero de Teléfono"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-sm-6">

          <b-form-group
            id="input-group-1"
            label="Email"
            label-for="input-1"
            class="text-label"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Ingrese su E-mail" required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Direccion" class="text-label" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.address"
              placeholder="Ingrese su Direccion"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Nombre de Usuario" class="text-label" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.username"
              placeholder="Ingrese su Nombre de Usuario"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Constraseña"  label-for="input-2" class="text-label">
            <b-form-input
              type="password"
              id="input-2"
              v-model="form.password"
              placeholder="Ingrese su Constraseña"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>

      <b-button type="submit" variant="success">Guardar</b-button>
      <b-button type="reset" variant="danger">Limpiar</b-button>
    </b-form>

	</div>
    <div class="col-sm-12" style="padding: 5px 15px">
      <b-alert
        :show="dismissCountDown"
        dismissible
        :variant="variante"
        @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged"
      >
        {{ mensajeAlerta }}
      </b-alert>
    </div>
</section>
</template>

<script>
import UsersService from "~/pages/services/usersService";
export default {

data(){
  return{
    form: {
      email: '',
      name: '',
      lastName: '',
      telephone: '',
      identification:'',
      password:'',
      username:'',
      address: ''
    },
    /* Alerta */
    dismissSecs: 5,
    dismissCountDown: 0,
    mensajeAlerta: "",
    variante: "",
    show: true
  }
},
methods:{
  countDownChanged(dismissCountDown) {
    this.dismissCountDown = dismissCountDown;
  },
  onSubmit(event) {
    event.preventDefault()

    const user = {
      name: this.form.name,
      lastname: this.form.lastName,
      email: this.form.email,
      phone: this.form.telephone,
      identification: this.form.identification,
      addres: this.form.address,
      username: this.form.username,
      password: this.form.password
    }

    this.userService.save(user).then((data) => {
      if (data.status === 201){
        this.form.name = "",
        this.form.lastName = "",
        this.form.email = "",
        this.form.telephone  = "",
        this.form.identification = "",
        this.form.address = "",
        this.form.username = "",
        this.form.password = "",
        this.variante = "success"
        this.mensajeAlerta = data.data.message;
        this.dismissCountDown = this.dismissSecs;
      }else{
        this.variante = "danger"
        this.mensajeAlerta = data.data.message;
        this.dismissCountDown = this.dismissSecs;
      }
    })
  },
  onReset(event) {
    event.preventDefault()
    // Reset our form values
    this.form.email = ''
    this.form.name = ''
    this.form.lastName = ""
    this.form.telephone = ""
    this.form.identification = ""
    this.form.password = ""
    this.form.username = ""
    this.form.address = ""

    // Trick to reset/clear native browser form validation state
    this.show = false
    this.$nextTick(() => {
      this.show = true
    })
  }
},

async created(){
  this.userService = new UsersService();
}
}
</script>

<style scoped>
.text-label{
  color: black;
}
</style>
