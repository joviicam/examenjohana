<template>
    <div>
        <p>FORMULARIO</p>
        <b-form @submit.prevent="submit">
            <b-form-group id="input-group-1" label="Marca:" label-for="input-1">
                <b-form-input id="input-1" v-model="marca" pattern="[A-Za-z0-9]+" required></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Modelo:" label-for="input-2">
                <b-form-input id="input-2" v-model="modelo" pattern="[A-Za-z0-9]+" required></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-3" label="Año:" label-for="input-3">
                <b-form-input type="number" id="input-3" v-model="anio" :max="getCurrentYear()" required></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-4" label="Numero de Serie:" label-for="input-4">
                <b-form-input id="input-4" v-model="nserie" pattern="[A-Za-z]{4}[0-9]{3}-[0-9]{2}[A-Za-z]{2}"
                    required></b-form-input>
            </b-form-group>
            <br>
            <b-button type="submit">Guardar</b-button>
        </b-form>
    </div>
</template>

<script>
import vehiculoService from "../services/Vehiculo";
export default {
    data() {
        return {
            marca: '',
            modelo: '',
            anio: 0,
            nserie: '',
            vehiculo: {
                brand: '',
                model: '',
                year: 0,
                serie: ''
            }
        }
    },
    methods: {
        submit() {
            alert('Formulario enviado');
            this.vehiculo.brand = this.marca;
            this.vehiculo.model = this.modelo;
            this.vehiculo.year = this.anio;
            this.vehiculo.serie = this.nserie;
            this.crearVehiculo();
        },
        getCurrentYear() {
            return new Date().getFullYear();
        },
        async crearVehiculo() {
            console.log(this.vehiculo);
            try {
                const data = await vehiculoService.saveVehiculo(
                    this.vehiculo
                );
                if (data) {
                    alert('Vehiculo guardado');
                    this.marca = '';
                    this.modelo = '';
                    this.anio = 0;
                    this.nserie = '';

                }
            } catch (error) {
                console.error(error);
            }
        },

    }
}
</script>
