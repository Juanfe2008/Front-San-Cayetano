<template>
  <section id="pricing" class="pricing-content section-padding">
	<div class="container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <div class="row">
        <div class="col-sm-6">
          <b-form-group id="input-group-2" label="Nombres" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Ingrese el Nombre"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Apellidos" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.lastName"
              placeholder="Ingrese el Apellido"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Identificaicon" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.identification"
              placeholder="Ingrese su # de Identificación"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Teléfono" label-for="input-2">
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
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Ingrese su E-mail" required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Direccion" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.address"
              placeholder="Ingrese su Direccion"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Nombre de Usuario"  label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.username"
              placeholder="Ingrese su Nombre de Usuario"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Constraseña"  label-for="input-2" description="Su contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales ni emoji.">
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


      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
	</div>
</section>
</template>

<script>
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

    show: true
  }
},
methods:{

  onSubmit(event) {
    event.preventDefault()
    alert(JSON.stringify(this.form))
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
}
}
</script>

<style scoped>
body{margin-top:20px;}

.single-pricing{
background:#fff;
padding:40px 20px;
border-radius:30px;
position:relative;
z-index:2;
border:1px solid #eee;
box-shadow: 0 10px 40px -10px rgba(0,64,128,.09);
transition:0.3s;
}
@media only screen and (max-width:480px) {
.single-pricing {margin-bottom:30px;}
}
.single-pricing:hover{
box-shadow:0px 60px 60px rgba(0,0,0,0.1);
z-index:100;
transform: translate(0, -10px);
}
.price-label {
    color: #fff;
	background: #ffaa17;
	font-size: 16px;
	width: 100px;
	margin-bottom: 15px;
	display: block;
	-webkit-clip-path: polygon(100% 0%, 90% 50%, 100% 100%, 0% 100%, 0 50%, 0% 0%);
	clip-path: polygon(100% 0%, 90% 50%, 100% 100%, 0% 100%, 0 50%, 0% 0%);
	margin-left: -20px;
	position: absolute;
}
.price-head h2 {
	font-weight: 600;
	margin-bottom: 0px;
	text-transform: capitalize;
	font-size: 26px;
}
.price-head span {
	display: inline-block;
	background:#ffaa17;
	width: 6px;
	height: 6px;
	border-radius: 30px;
	margin-bottom: 20px;
	margin-top: 15px;
}
.price {
	font-weight: 500;
	font-size: 50px;
	margin-bottom: 0px;
}
.single-pricing h5 {
	font-size: 14px;
	margin-bottom: 0px;
	text-transform: uppercase;
}
.single-pricing ul{
list-style: none;
margin-bottom: 20px;
margin-top: 30px;
}

.single-pricing ul li{line-height: 35px;}
.single-pricing a {
background:none;
border: 2px solid #ffaa17;
border-radius: 5000px;
color: #ffaa17;
display: inline-block;
font-size: 16px;
overflow: hidden;
padding:10px 45px;
text-transform: capitalize;
transition: all 0.3s ease 0s;
}
.single-pricing a:hover, .single-pricing a:focus{
background:#ffaa17;
color:#fff;
border: 2px solid #ffaa17;
}
.single-pricing-white{background: #232434}
.single-pricing-white ul li{color:#fff;}
.single-pricing-white h2{color:#fff;}
.single-pricing-white h1{color:#fff;}
.single-pricing-white h5{color:#fff;}
</style>
