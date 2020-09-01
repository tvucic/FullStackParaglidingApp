<template>
  <v-container>
    <v-row>
      <v-col cols="8" sm="10" md="12" xl="12">
        <v-card flat width="700" class="mx-12 mt-8">
          <v-card-title class="headline grey lighten-2"
            >Login to your account</v-card-title
          >
          <v-card-text>
            <v-form class="px-3" ref="form">
              <v-text-field
                label="Email"
                v-model="email"
                prepend-icon="mdi-email"
              ></v-text-field>
              <v-text-field
                label="password"
                v-model="password"
                prepend-icon="mdi-lock"
                :append-icon="showPasswordOrg ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPasswordOrg = !showPasswordOrg"
              ></v-text-field>
            </v-form>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn
                depressed
                @click="userLogIn()"
                class="blue darken-2 white--text"
                >Log in</v-btn
              >
              <v-spacer></v-spacer>
              <v-btn depressed class="blue white--text" router to="/register"
                >Create Account</v-btn
              >
            </v-card-actions>
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
      showPasswordOrg: false,
      email: "",
      password: "",
    };
  },
  methods: {
    userLogIn: function() {
      const user = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("http://localhost:8080/paragliding/users/login", user)
        .then((res) => {
          console.log("Response is " + res);
          console.log(user);
        })
        .catch((err) => {
          console.log("Error is " + err);
        });
    },
  },
};
</script>

<style></style>
