<template>
  <div class="dashboard">
    <h3 class="subheading grey--text">Dashboard</h3>
    <v-container class="my-5">
      <v-row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              depressed
              small
              color="grey lighten-2"
              @click="sortBy('title')"
              v-on="on"
            >
              <v-icon left small>mdi-folder</v-icon>
              <span right class="caption text-lowercase">by project title</span>
            </v-btn>
          </template>
          <span>Sorts projects by title</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              small
              depressed
              color="grey lighten-2"
              class="ml-2"
              @click="sortBy('person')"
              v-on="on"
            >
              <v-icon left small>mdi-account</v-icon>
              <span right class="caption text-lowercase">by project name</span>
            </v-btn>
          </template>
          <span>Sorts projects by name</span>
        </v-tooltip>
      </v-row>
      <v-card v-for="(project, index) in projects" :key="index">
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Report Title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Date</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2" class="pr-6">
            <div class="text-right">
              <v-chip
                small
                :class="
                  `${project.status} v-chip--active white--text caption my-2`
                "
                >{{ project.status }}</v-chip
              >
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from "@/fb";
export default {
  name: "Dashboard",
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
  created() {
    db.collection("projects").onSnapshot((res) => {
      const changes = res.docChanges();
      changes.forEach((change) => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
      });
    });
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: #ffaa2c;
}
.v-chip.overdue {
  background: #f83e70;
}
</style>
