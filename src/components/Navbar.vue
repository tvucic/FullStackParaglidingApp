<template>
  <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Awesome! You added new blog post.</span>
      <v-btn depressed outlined class="text--black ml-3" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-app-bar app flat dense color="blue lighten-1" dark>
      <v-app-bar-nav-icon @click="toggleDrawer()"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Paragliding</span>
        <span>Flights</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Dropdown Menu-->
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small class="font-weight-light mr-2" outlined dark v-bind="attrs" v-on="on">
              <v-icon left>mdi-chevron-down</v-icon>
              <span>Menu</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(link, index) in links" :key="index" router :to="link.route">
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-btn router to="/login" class="success lighten-1 white--text mr-2" depressed small>
        <v-icon left>mdi-login</v-icon>
        <span>Log in</span>
      </v-btn>
      <v-btn class="blue darken-4 white--text mr-2" depressed small>
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-col align-center class="text-center">
        <v-item class="mt-5">
          <v-avatar size="100">
            <img
              src="https://scontent.fzag1-1.fna.fbcdn.net/v/t1.0-9/11902298_10206401967041275_2369490686386205293_n.jpg?_nc_cat=100&_nc_sid=7aed08&_nc_ohc=EIiiRUKqi38AX-WmB8m&_nc_ht=scontent.fzag1-1.fna&oh=2100cddc967ae422b951c97e3be1886b&oe=5F67BBAE"
              alt="Josip"
            />
          </v-avatar>
        </v-item>
        <p class="subheading mt-1 white--text">Josip Vucic</p>
        <v-item class="mt-3 mb-4">
          <app-popup @projectAdded="snackbar = true"></app-popup>
        </v-item>
      </v-col>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon color="white">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{
              link.text
              }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup.vue";
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/dashboard" },
        { icon: "mdi-account", text: "Team", route: "/team" },
        { icon: "mdi-home", text: "My Account", route: "/myaccount" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        {
          icon: "mdi-account-plus",
          text: "Register",
          route: "/register"
        },
        { icon: "mdi-account-key", text: "Login", route: "/login" }
      ],
      snackbar: false
    };
  },
  methods: {
    toggleDrawer: function() {
      this.drawer = !this.drawer;
    }
  },
  components: {
    "app-popup": Popup
  }
};
</script>

<style></style>
