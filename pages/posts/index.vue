<template>
  <div>
    <div class="model-style">
      <b-button v-b-modal.modal variant="primary">Nuevo Producto</b-button>

      <b-modal
        id="modal"
        ref="modal"
        size="lg"
        title="Nuevo Producto"
        :header-bg-variant="headerBgVariant"
        :header-text-variant="headerTextVariant"
        :body-bg-variant="bodyBgVariant"
        :body-text-variant="bodyTextVariant"
        :footer-bg-variant="footerBgVariant"
        :footer-text-variant="footerTextVariant"
      >
        <b-container fluid>
          <form ref="modal">
            <b-form-group invalid-feedback="Name is required">
              <b-row class="mb-1">
                <b-col cols="12"
                  >Nombre del Producto
                  <b-form-input
                    id="nombre-input"
                    v-model="nombreProducto"
                    :state="nombreEstado"
                    required
                  ></b-form-input>
                </b-col>
                <b-col cols="12"
                  >Valor del Producto
                  <b-form-input
                    id="valor-input"
                    type="number"
                    v-model="valorProducto"
                    :state="valorEstado"
                    required
                  ></b-form-input>
                </b-col>
                <b-col cols="12"
                  >Peso del Producto
                  <b-form-input
                    id="peso-input"
                    v-model="pesoProducto"
                    :state="pesoEstado"
                    required
                  ></b-form-input>
                </b-col>
                <b-col cols="12"
                  >Cantidad de ingreso
                  <b-form-input
                    id="cantidad-input"
                    type="number"
                    v-model="cantidadIngreso"
                    :state="cantidadEstado"
                    required
                  ></b-form-input>
                </b-col>
                <b-col cols="12"
                  >Unidad del Producto
                  <b-form-input
                    id="unidad-input"
                    v-model="unidadProducto"
                    :state="unidadEstado"
                    required
                  ></b-form-input>
                </b-col>
                <b-col cols="12"
                  >Proveedor del Producto
                  <b-form-input
                    id="proveedor-input"
                    v-model="proveedorProducto"
                    :state="proveedorEstado"
                    required
                  ></b-form-input>
                </b-col>
                <div class="col-sm-1" style="padding: 5px 15px">
                  <button class="btn btn-success" @click="save($event)">
                    Guardar
                  </button>
                </div>
              </b-row>
            </b-form-group>
          </form>
        </b-container>
      </b-modal>
    </div>
    <div>
      <b-modal ref="my-modal" hide-footer title="Detalles del Producto"
               :header-bg-variant="headerBgVariant"
               :header-text-variant="headerTextVariant"
               :body-bg-variant="bodyBgVariant"
               :body-text-variant="bodyTextVariant">
        <div class="d-block text-center">
          <b-container fluid>
            <form ref="modal">
              <b-form-group invalid-feedback="Name is required">
                <b-row class="mb-1">
                  <b-col style="text-align: initial" cols="12"
                  >Nombre del Producto
                    <b-form-input
                      id="nombre-input"
                      v-model="nombreProductoUpdate"
                      :state="nombreEstado"
                      required
                    ></b-form-input>
                  </b-col>
                  <b-col style="text-align: initial" cols="12"
                  >Valor del Producto
                    <b-form-input
                      id="valor-input"
                      type="number"
                      v-model="valorProductoUpdate"
                      :state="valorEstado"
                      required
                    ></b-form-input>
                  </b-col>
                  <b-col style="text-align: initial" cols="12"
                  >Peso del Producto
                    <b-form-input
                      id="peso-input"
                      v-model="pesoProductoUpdate"
                      :state="pesoEstado"
                      required
                    ></b-form-input>
                  </b-col>
                  <b-col style="text-align: initial" cols="12"
                  >Cantidad de ingreso
                    <b-form-input
                      id="cantidad-input"
                      type="number"
                      v-model="cantidadIngresoUpdate"
                      :state="cantidadEstado"
                      required
                    ></b-form-input>
                  </b-col>
                  <b-col style="text-align: initial" cols="12"
                  >Unidad del Producto
                    <b-form-input
                      id="unidad-input"
                      v-model="unidadProductoUpdate"
                      :state="unidadEstado"
                      required
                    ></b-form-input>
                  </b-col>
                  <b-col style="text-align: initial" cols="12"
                  >Proveedor del Producto
                    <b-form-input
                      id="proveedor-input"
                      v-model="proveedorProductoUpdate"
                      :state="proveedorEstado"
                      required
                    ></b-form-input>
                  </b-col>
<!--                  <div class="col-sm-12" style="padding: 5px 15px">
                    <b-alert
                      :show="dismissCountDown"
                      dismissible
                      :variant="variante"
                      @dismissed="dismissCountDown = 0"
                      @dismiss-count-down="countDownChanged"
                    >
                      {{ mensajeAlerta }}
                    </b-alert>
                  </div>-->
                </b-row>
              </b-form-group>
            </form>
          </b-container>
        </div>
        <b-button class="mt-3" variant="outline-success" block @click="updateModal">Actualizar</b-button>
        <b-button class="mt-3" variant="outline-warning" block @click="deleteProduct">Eliminar</b-button>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Cerrar</b-button>
      </b-modal>
    </div>
    <div class="table-style">
      <b-col lg="6" class="my-1">
        <b-form-group
          style="color: black"
          label="Filtro"
          label-for="filter-input"
          label-cols-sm="1"
          label-align-sm="left"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Escribe para Buscar"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-table
        :filter="filter"
        hover
        :fields="fields"
        id="my-table"
        :items="productos"
        :per-page="perPage"
        :current-page="currentPage"
        :select-mode="selectMode"
        small
        striped
        ref="selectableTable"
      >
        <template #cell(actions)="row">
          <b-button size="sm" @click="OpenDetail(row.item, row.index, $event.target)" class="mr-1"  variant="outline-success">
            Editar
          </b-button>
        </template>
      </b-table>
      <b-pagination
        style="justify-content: center"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
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
  </div>
</template>

<script>
import axios from "axios";
import Posts from "../../components/Posts";
import CrudService from "../services/crudService";

export default {
  components: {
    Posts,
  },
  data() {
    return {
      /* Selected */
      selectMode: 'single',
      selected: null,
      /* Alerta */
      dismissSecs: 5,
      dismissCountDown: 0,
      mensajeAlerta: "",
      variante: "",
      /* v-models del model */
      nombreProducto: "",
      nombreEstado: null,
      valorProducto: "",
      valorEstado: null,
      pesoProducto: "",
      pesoEstado: null,
      cantidadIngreso: "",
      cantidadEstado: null,
      unidadProducto: "",
      unidadEstado: null,
      proveedorProducto: "",
      proveedorEstado: null,

      nombreProductoUpdate: "",
      valorProductoUpdate: "",
      pesoProductoUpdate: "",
      cantidadIngresoUpdate: "",
      unidadProductoUpdate: "",
      proveedorProductoUpdate: "",
      idUpdate: "",
      /* Constantes para el save de nuevo producto */
      name: null,
      quantity: null,
      supplier: null,
      unit: null,
      value: null,
      weight: null,
      /* Colores para el modal */
      show: false,
      headerBgVariant: "dark",
      headerTextVariant: "light",
      bodyBgVariant: "light",
      bodyTextVariant: "dark",
      footerBgVariant: "light",
      footerTextVariant: "dark",

      /* Propiedades de la tabla */
      filter: null,
      filterOn: [],
      perPage: 10,
      currentPage: 1,
      productos: [],
      fields: [
        {
          key: "name",
          sortable: true,
        },
        {
          key: "value",
          sortable: true,
        },

        {
          key: "weight",
          sortable: true,
        },
        {
          key: "unit",
          sortable: true,
        },

        {
          key: "supplier",
          sortable: true,
        },
        { key: 'actions', label: 'Actions' }
      ],
    };
  },
  computed: {
    rows() {
      return this.productos.length;
    },
    sortOptions() {
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    OpenDetail(items, index){
      console.log(items.id)
      this.$refs['my-modal'].show()
      this.idUpdate = items.id;
      this.nombreProductoUpdate = items.name;
      this.cantidadIngresoUpdate = items.quantity;
      this.proveedorProductoUpdate = items.supplier;
      this.unidadProductoUpdate = items.unit;
      this.valorProductoUpdate = items.value;
      this.pesoProductoUpdate = items.weight;


    },
    updateModal() {
      const update = {
        id: this.idUpdate,
        name: this.nombreProductoUpdate,
        quantity: this.cantidadIngresoUpdate,
        supplier: this.proveedorProductoUpdate,
        unit: this.unidadProductoUpdate,
        value: this.valorProductoUpdate,
        weight: this.pesoProductoUpdate,
      }

      this.crudService.update(update).then((data) => {
        if (data.status === 201){
          this.nombreProductoUpdate = "";
          this.cantidadIngresoUpdate = "";
          this.proveedorProductoUpdate = "";
          this.unidadProductoUpdate = "";
          this.valorProductoUpdate = "";
          this.pesoProductoUpdate = "";
          this.$refs['my-modal'].hide()
          this.variante = "success"
          this.mensajeAlerta = data.data.message;
          this.dismissCountDown = this.dismissSecs;
          this.$refs.selectableTable.refresh()
        }else{
          this.variante = "danger"
          this.mensajeAlerta = data.data.message;
          this.dismissCountDown = this.dismissSecs;
        }
      })
    },
    hideModal() {
      this.$refs['my-modal'].hide()

    },
    deleteProduct(){
      console.log(this.idUpdate)
      this.crudService.delete(this.idUpdate).then((data) => {
        if (data.status === 200){
          this.$refs['my-modal'].hide()
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
    save: function ($event) {
      const producto = {
        name: this.nombreProducto,
        quantity: this.cantidadIngreso,
        supplier: this.proveedorProducto,
        unit: this.unidadProducto,
        value: this.valorProducto,
        weight: this.pesoProducto,
      };
      $event.preventDefault();
      this.crudService.save(producto).then((data) => {
        if (data.status === 201) {
          this.nombreProducto = "";
          this.cantidadIngreso = "";
          this.proveedorProducto = "";
          this.unidadProducto = "";
          this.valorProducto = "";
          this.pesoProducto = "";
          this.variante = "success"
          this.mensajeAlerta = data.data.message;
          this.dismissCountDown = this.dismissSecs;
          this.$refs.selectableTable.refresh();
          this.$refs['modal'].hide();
        }
        if(data.status === 400){
          this.variante = "danger"
          this.mensajeAlerta = data.data.message;
          this.dismissCountDown = this.dismissSecs;
        }

      });
    },
  },
  async created() {
    this.crudService = new CrudService();
  },
  async mounted() {
    await this.crudService.getAll().then((data) => {
      this.productos = data.data.products;
      console.log(this.productos);
    });
    this.totalRows = this.productos.length;
  },
};
</script>

<style scoped>
.post-enter,
.post-leave-to {
  opacity: 0;
}

.table-style {
  background-color: #EDF2F4;
  border-radius: 10px;
  border: none;
  padding: 10px;
}

.model-style {
  padding: 10px 0px;
  color: black !important;
}

.modal-title {
  color: black !important;
}

.post-enter-active,
.post-leave-to-active {
  transition: opacity 0.5s;
}
</style>>
