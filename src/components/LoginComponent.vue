<template>
  <q-card flat bordered style="max-width: 300px; margin: auto; padding: 20px">
    <q-form @submit.prevent="login" style="text-align: center">
      <q-btn v-if="!isAuthenticated && !isLoading" type="submit" color="primary"
        >Log In</q-btn
      >

      <div v-if="isAuthenticated" class="row items-center">
        <img
          :src="user.picture"
          alt="User's profile picture"
          class="nav-user-profile d-inline-block rounded-circle mr-3"
          width="50"
        />
        <div>
          <highlightjs language="json" :code="JSON.stringify(user, null, 2)" />
        </div>
      </div>
      <a
        v-if="isAuthenticated && !isLoading"
        id="qsLogoutBtn"
        href="#"
        class="dropdown-item"
        @click.prevent="logout"
      >
        <font-awesome-icon class="mr-3" icon="power-off" />Log out
      </a>
    </q-form>
  </q-card>
</template>

<script setup>
import { useAuth0 } from "@auth0/auth0-vue";
import { ref } from "vue";

const auth0 = useAuth0();
const isAuthenticated = ref(auth0.isAuthenticated);
const isLoading = ref(auth0.isLoading);
const user = ref(auth0.user);

function login() {
  auth0.loginWithRedirect();
}

function logout() {
  auth0.logout({
    returnTo: window.location.origin,
  });
}
</script>
