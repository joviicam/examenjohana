<template>
    <div>
        <b-container fluid>
            <b-row>
                <b-col>
                    <b-navbar style="z-index: 2" toggleable="lg" type="light" variant="light" class="shadow-sm" fixed="top">
                        <b-navbar-brand>Logo</b-navbar-brand>
                        <b-navbar-toggle target="navbar-nav"></b-navbar-toggle>

                        <b-collapse id="navbar-nav" is-nav>
                            <b-navbar-nav class="ml-auto">
                                <b-nav-item :to="{ name: 'about' }">Inicio</b-nav-item>
                            </b-navbar-nav>
                        </b-collapse>

                        <p class="m-0">Bienvenido/a</p>
                    </b-navbar>
                </b-col>
            </b-row>

            <b-row>
                <b-col sm="3" md="4" lg="4">
                    <b-sidebar z-index="1" id="sidebar" shadow visible no-close-on-route-change no-header-close>
                        <b-nav vertical class="pt-5">
                            <b-nav-item :to="{ name: 'form' }"> Formulario
                            </b-nav-item>

                            <b-nav-item :to="{ name: 'pagination' }">Paginación</b-nav-item>

                            <b-nav-item :to="{ name: 'principal' }">Principal
                            </b-nav-item>
                        </b-nav>
                    </b-sidebar>
                </b-col>
                <b-col class="content" sm="9" md="8" lg="8">
                    <b-breadcrumb>
                        <b-breadcrumb-item :to="{ name: 'principal' }">
                            <b-icon icon="fridge-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                            Principal
                        </b-breadcrumb-item>
                        <b-breadcrumb-item :to="{ name: 'form' }">
                            <b-icon icon="fridge-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                            Formulario
                        </b-breadcrumb-item>
                        <b-breadcrumb-item :to="{ name: 'pagination' }">
                            <b-icon icon="fridge-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                            Paginación
                        </b-breadcrumb-item>
                    </b-breadcrumb>

                    <router-view />
                </b-col>
            </b-row>
        </b-container>

    </div>
</template>
  
<script>
export default {
    data() {
        return {
            items: [
                {
                    text: "Inicio",
                    href: "#",
                },
            ],
        };
    },
    methods: {
    },
};
</script>
  
<style>
.content {
    margin-top: -20rem;
    margin-left: 20rem;
    padding: 0 1rem;
    transition: margin-left 0.5s;
}


.breadcrumb-item.active {
    color: #6c1f1f;
}
</style>