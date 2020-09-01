<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          depressed
          color="success"
          class="mt-4 mb-3"
          dark
          v-bind="attrs"
          v-on="on"
          >Add New Report</v-btn
        >
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2"
          >Add a New Report</v-card-title
        >
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
              label="Title"
              v-model="title"
              prepend-icon="mdi-folder"
              :rules="inputRules"
            ></v-text-field>
            <v-textarea
              label="information"
              v-model="content"
              prepend-icon="mdi-pencil"
              :rules="inputRules"
            ></v-textarea>

            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  label="Date"
                  :value="dateFormatted"
                  v-bind="attrs"
                  persistent-hint
                  prepend-icon="mdi-calendar-range"
                  v-on="on"
                  :rules="inputRules"
                ></v-text-field>
              </template>
              <v-date-picker v-model="due" no-title></v-date-picker>
            </v-menu>

            <v-btn
              depressed
              class="mx-0 mt-3"
              color="success"
              :loading="loading"
              @click="submitProject()"
              >Add Project</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import db from "@/fb";

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      inputRules: [
        (v) => !!v || "This field is required",
        (v) => v.length >= 3 || "Minimum length is 3 characters",
      ],
      loading: false,
      dialog: false,
    };
  },
  computed: {
    dateFormatted() {
      return this.due ? format(parseISO(this.due), "do MMM yyyy") : "";
    },
  },
  methods: {
    submitProject: function() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          due: format(parseISO(this.due), "do MMM yyyy"),
          person: "Jozo Crnopođanin",
          status: "ongoing",
        };

        db.collection("projects")
          .add(project)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit("projectAdded");
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
      }
    },
  },
};
</script>

<style></style>
