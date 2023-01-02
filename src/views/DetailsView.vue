<template>
    <q-list bordered>
      <q-item v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" name="person" style="align-self: center" />
        </q-item-section>
        <q-item-section>Icon as avatar</q-item-section>
      </q-item>
      <q-item>
        <q-item-section top avatar>
          <q-avatar color="primary" text-color="white" icon="person" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption lines="2"
            >This is the page that opens on
            <strong>/patient/{{ $route.params.id }}</strong> route</q-item-label
          >
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
          <q-icon name="star" color="yellow" />
        </q-item-section>
      </q-item>
    </q-list>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DetailsView",
  computed: {
    ...mapState(["patients"]),
    patient() {
      console.log(this.patient);
      return this.patients.find(
        (patient) => patient.id === this.$route.params.id
      );
    },
  },
};
</script>
