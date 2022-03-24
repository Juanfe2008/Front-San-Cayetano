<template>
  <div class="content" id="app">
    <form v-on:submit.prevent="procesar()" name="form" id="form">
      <h1 style="text-align: center;">Create account</h1>
      <br />

      <div class="form-group row col-sm-12">
        <label class="col-sm-1"> Name </label>
        <input
          class="col-sm-5 form-control"
          placeholder="Name"
          v-model="name"
        />
        <label class="col-sm-1"> Last Name </label>
        <input
          class="form-control col-sm-5"
          placeholder="Last Name"
          v-model="lastName"
        />
      </div>
      <div class="col-sm-12 row">
        <div class="form-group messaje col-sm-6">
          <div v-if="submited && !$v.name.required">
            *The name field is required
          </div>
          <div v-if="submited && !$v.name.minLength">
            *Must have a minimum of 1 characters
          </div>
          <div v-if="submited && !$v.name.maxLength">
            *Must have a maximum of 50 characters
          </div>
        </div>
        <div class="form-group messaje col-sm-6">
          <div v-if="submited && !$v.lastName.required">
            *The last name field is required
          </div>
          <div v-if="submited && !$v.lastName.minLength">
            *Must have a minimum of 1 characters
          </div>
          <div v-if="submited && !$v.lastName.maxLength">
            *Must have a maximum of 50 characters
          </div>
        </div>
      </div>

      <div class="form-group row col-sm-12">
        <label class="col-sm-1">Telephone</label>
        <input
          type="number"
          class="form-control col-sm-5"
          placeholder="Telephone"
          v-model="telephone"
        />
        <label class="col-sm-1">Address</label>
        <input
          class="form-control col-sm-5"
          placeholder="Address"
          v-model="address"
        />
      </div>

      <div class="col-sm-12 row">
        <div class="form-group messaje col-sm-6">
          <div v-if="submited && !$v.telephone.required">
            *The telephone field is required
          </div>
          <div v-if="submited && !$v.telephone.minLength">
            *Must have a minimum of 10 characters
          </div>
          <div v-if="submited && !$v.telephone.maxLength">
            *Must have a maximum of 10 charactersss prueba
          </div>
        </div>
        <div class="form-group messaje col-sm-6">
          <div v-if="submited && !$v.address.required">
            *The address field is required
          </div>
          <div v-if="submited && !$v.address.minLength">
            *Must have a minimum of 5 characters
          </div>
          <div v-if="submited && !$v.address.maxLength">
            *Must have a maximum of 20 characters
          </div>
        </div>
      </div>

      <!-- <div class="form-group row col-sm-12">
        <label class="col-sm-1">E-Mail</label>
        <input
          class="form-control col-sm-5"
          placeholder="E-Mail"
          v-model="email"
        />
        <label class="col-sm-1">Password</label>
        <input
          type="password"
          class="form-control col-sm-5"
          placeholder="Password"
          v-model="passwordUser"
        />
      </div> -->
      <!-- <div class="col-sm-12 row">
        <div class="col-sm-6 form-group messaje">
          <div v-if="submited && !$v.email.required">
            *The email field is required
          </div>
          <div v-if="submited && !$v.email.email">
            *You must write a valid email
          </div>
        </div>
        <div class="col-sm-6 form-group messaje">
          <div v-if="submited && !$v.passwordUser.required">
            *The password field is required
          </div>
          <div v-if="submited && !$v.passwordUser.minLength">
            *Must have a minimum of 8 characters
          </div>
          <div v-if="submited && !$v.passwordUser.maxLength">
            *Must have a maximum of 20 characters
          </div>
        </div>
      </div> -->

      <div class="col-sm-12" style="text-align: center;">
        <button type="submit" class="btn btn-post" @click="save">
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  email,
} from "vuelidate/lib/validators";
import axios from "axios";
import CrudService from "../pages/services/crudService";
export default {
  layout: "anonymous",
  head() {
    return {
      title: "Register",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Website abut tutorials",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    };
  },
  data() {
    return {
      submited: false,
      name: "",
      lastName: "",
      telephone: "",
      address: "",
      /* email: "",
      id: "",
      passwordUser: "", */
      user: [],
      personas: null,
      persona: {
        idCliente: null,
        nombres: null,
        apellidos: null,
        telefono: null,
        direccion: null,
       /*  email: null,
        password: null, */
      },
    };
  },
  methods: {
    procesar() {},
    save() {
      this.submited = true;
      if (this.$v.$invalid) {
        return false;
      }
      const persona = {
        nombres: this.name,
        apellidos: this.lastName,
        telefono: this.telephone,
        direccion: this.address,
        /* email: this.email,
        password: this.passwordUser, */
      };
      console.log(persona);
      this.crudService.save(persona).then((data) => {
        if (data.status === 201) {
          this.submited = false;
          (this.name = ""),
            (this.lastName = ""),
            (this.telephone = ""),
            (this.address = ""),
            /* (this.email = "");
          this.passwordUser = ""; */
          this.$router.push("/home");
        }
        console.log(data);
      });
    },
  },
  validations: {
    name: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(50),
    },
    lastName: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(50),
    },
    telephone: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(10),
    },
    address: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(20),
    },
    /* email: {
      required,
      email,
    },
    passwordUser: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(20),
    }, */
  },
  created() {
    this.crudService = new CrudService();
  },
};
</script>

<style scoped>
.messaje {
  padding-left: 6.5rem !important;
  color: dimgray;
}

.input-validate {
  border: 1px solid darkred;
  border-radius: 0.25rem;
  transition: border-color 0.15s cubic-bezier(0.42, 0, 0.76, 1.1),
    box-shadow 0.15s ease-in-out;
}
.input-validate:hover {
  border: 1px solid darkred;
  border-radius: 0.25rem;
  transition: border-color 0.15s cubic-bezier(0.42, 0, 0.76, 1.1),
    box-shadow 0.15s ease-in-out;
}

.content {
  border: 3px solid #312f2f;
  border-radius: 30px;
  box-shadow: -7px 9px 12px 7px #212529;
  background: #141a25;
}

.btn-post {
  font-size: 20px !important;
  background: #30323d !important;
  border-color: #252527 !important;
  border: 2px solid;
  color: white;
}

.btn-post:hover {
  font-size: 20px !important;
  background: #30323d !important;
  border-color: #25283d !important;
  color: white;
  box-shadow: 0px 0px 12px 0.5px #25283d;
}

.btn-post:focus{
  box-shadow: 0px 0px 0px 3px #25283d;
}

.btn-success {
  font-size: 20px !important;
  background: #30323d !important;
  border-color: #303235 !important;
}
</style>
