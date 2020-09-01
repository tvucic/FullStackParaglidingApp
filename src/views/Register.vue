<template>
  <v-container>
    <v-row>
      <v-col cols="8" sm="10" md="12" xl="12">
        <v-card flat width="700" class="mx-12 mt-8">
          <v-card-title class="headline grey lighten-2"
            >Register a New Account</v-card-title
          >
          <v-card-text>
            <v-form class="px-3" ref="form">
              <v-text-field
                label="First Name"
                v-model="firstName"
                prepend-icon="mdi-account-circle"
              ></v-text-field>
              <v-text-field
                label="Last Name"
                v-model="lastName"
                prepend-icon="mdi-account-circle"
              ></v-text-field>
              <v-text-field
                label="Email"
                v-model="email"
                prepend-icon="mdi-email"
              ></v-text-field>
              <v-text-field
                :type="showPasswordOrg ? 'text' : 'password'"
                label="Password"
                v-model="password"
                prepend-icon="mdi-lock"
                :append-icon="showPasswordOrg ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPasswordOrg = !showPasswordOrg"
              ></v-text-field>

              <v-btn
                depressed
                class="mx-0 mt-3"
                color="success"
                :loading="loading"
                @click="fetchUsers()"
                >Submit</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      showPasswordOrg: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    fetchUsers: function() {
      const newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };
      axios
        .post("http://localhost:8080/paragliding/users", newUser)
        .then((res) => {
          console.log("Result is " + res.data);
        })
        .catch((err) => {
          console.log("Error is " + err);
        });
    },
  },
  created() {},
};
</script>

<style></style>
