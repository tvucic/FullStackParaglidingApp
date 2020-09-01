<template>
  <div class="projects">
    <h3 class="subheading grey--text">Reports</h3>

    <v-container class="my-5">
      <v-row justify="center">
        <v-expansion-panels accordion>
          <v-expansion-panel
            v-for="(project, index) in myProjects"
            :key="index"
          >
            <v-expansion-panel-header>{{
              project.title
            }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card flat>
                <v-card-text class="px-4 grey--text">
                  <div class="font-weight-bold">Date {{ project.due }}</div>
                  <div>{{ project.content }}</div>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import db from "@/fb";
export default {
  name: "About",
  data() {
    return {
      projects: [],
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => {
        return project.person === "Jozo Crnopođanin";
      });
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

<style></style>
