<template>
  <q-page padding class="fit row wrap justify-evenly items-center content-start">
    <q-card
      v-for="patient in patients"
      :key="patient.id"
      flat
      bordered
      style="max-width: 300px; margin:5px; padding: auto"
      clickable
      @click="showDetails(patient.id)"
    >
      <img src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-card-section>
        <div class="text-h6">{{ patient.name }} {{ patient.surname }}</div>
        <div class="text-subtitle2">{{ patient.age }} years old</div>
        <div class="text-subtitle2">{{ patient.occupation }}</div>
      </q-card-section>
      <q-card-section>
        <router-link :to="'/patient/' + patient.id"> View Details </router-link>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DashboardView",
  computed: {
    ...mapState(["patient"]),
  },
  data() {
    return {
      patients: [
        {
          id: 1,
          name: "Alice",
          surname: " ECILA",
          age: 25,
          occupation: "Software Developer",
        },
        {
          id: 2,
          name: "Bob",
          surname: "BOB",
          age: 32,
          occupation: "Product Manager",
        },
        {
          id: 3,
          name: "Charlie",
          surname: "EILRAHC",
          age: 28,
          occupation: "Designer",
        },
        {
          id: 4,
          name: "Charlie",
          surname: "EILRAHC",
          age: 28,
          occupation: "Designer",
        },
        {
          id: 5,
          name: "Charlie",
          surname: "EILRAHC",
          age: 28,
          occupation: "Designer",
        },
        {
          id: 6,
          name: "Charlie",
          surname: "EILRAHC",
          age: 28,
          occupation: "Designer",
        },
        {
          id: 7,
          name: "Charlie",
          surname: "EILRAHC",
          age: 28,
          occupation: "Designer",
        },
        {
          id: 8,
          name: "Charlie",
          surname: "EILRAHC",
          age: 28,
          occupation: "Designer",
        },
        {
          id: 8,
          name: "Charlie",
          surname: "EILRAHC",
          age: 28,
          occupation: "Designer",
        },
        {
          id: 8,
          name: "Charlie",
          surname: "EILRAHC",
          age: 28,
          occupation: "Designer",
        },
        {
          id: 8,
          name: "Charlie",
          surname: "EILRAHC",
          age: 28,
          occupation: "Designer",
        },
        {
          id: 8,
          name: "Charlie",
          surname: "EILRAHC",
          age: 28,
          occupation: "Designer",
        },
        {
          id: 8,
          name: "Charlie",
          surname: "EILRAHC",
          age: 28,
          occupation: "Designer",
        },
        {
          id: 8,
          name: "Charlie",
          surname: "EILRAHC",
          age: 28,
          occupation: "Designer",
        },
        {
          id: 8,
          name: "Charlie",
          surname: "EILRAHC",
          age: 28,
          occupation: "Designer",
        },
        {
          id: 8,
          name: "Charlie",
          surname: "EILRAHC",
          age: 28,
          occupation: "Designer",
        },
        {
          id: 8,
          name: "Charlie",
          surname: "EILRAHC",
          age: 28,
          occupation: "Designer",
        },
      ],
    };
  },
  methods: {
    showDetails(id){
      console.log(id)
    }
  },
};
</script>
