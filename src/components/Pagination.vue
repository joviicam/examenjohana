<template>
    <b-container class="mt-5">
        <b-table id="my-table" :items="vehiculos" :per-page="perPage" :current-page="currentPage" :fields="fields"
            :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" label-sort-asc="" label-sort-desc="" small striped bordered
            responsive>
            <template #cell(marca)="data">
                <strong>{{ data.value }}</strong>
            </template>
            <template #cell(modelo)="data">
                <em>{{ data.value }}</em>
            </template>
        </b-table>
        <div class="overflow-auto">
            <b-pagination v-model="currentPage" :total-rows="vehiculos.length" :per-page="perPage"
                aria-controls="my-table"></b-pagination>
            <p class="mt-3">Current Page: {{ currentPage }}</p>
        </div>
    </b-container>
</template>
  
<script>
import vehiculoService from "../services/Vehiculo";

export default {
    data() {
        return {
            sortBy: "brand",
            sortDesc: false,
            perPage: 10,
            currentPage: 1,
            vehiculos: [],
            fields: [
                { key: "brand", label: "Marca", sortable: true },
                { key: "model", label: "Modelo", sortable: true },
                { key: "serie", label: "No. serie", sortable: true },
                { key: "year", label: "Año", sortable: true },
            ],
        };
    },
    mounted() {
        this.obtenerVehiculos();
    },
    methods: {
        async obtenerVehiculos() {
            try {
                const data = await vehiculoService.getVehiculos(
                    parseInt(this.currentPage),
                    parseInt(this.perPage),
                    this.sortBy,
                    this.sortDesc
                );
                this.vehiculos = data.content;
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>
  