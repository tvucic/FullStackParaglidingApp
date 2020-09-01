<template>
  <div class="team">
    <h3 class="subheading grey--text">Team</h3>
    <v-container class="my-5">
      <v-row>
        <v-col cols="12" sm="6" md="4" xl="3" v-for="(person, index) in team" :key="index">
          <v-card class="mx-auto" max-width="400">
            <v-img :src="person.avatar" height="200px"></v-img>
            <v-card-title>{{person.name}}</v-card-title>

            <v-card-subtitle>{{person.role}}</v-card-subtitle>
            <v-card-actions>
              <v-btn small depressed outlined color="green">
                <v-icon left>mdi-share</v-icon>
                <span>Share</span>
              </v-btn>
              <v-btn small depressed outlined color="#2979FF" dark>Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Team",
  data() {
    return {
      team: [
        {
          name: "Mirko Miletina",
          role: "Pilot",
          avatar:
            "https://scontent.fzag1-1.fna.fbcdn.net/v/t31.0-0/p480x480/286394_2299611647881_5550099_o.jpg?_nc_cat=107&_nc_sid=e007fa&_nc_ohc=YuRVyhsn4IQAX-31xsU&_nc_ht=scontent.fzag1-1.fna&_nc_tp=6&oh=6f0bf6afd3897351d4307773b4a9f58d&oe=5F6A2B25"
        },
        {
          name: "Krešo Lipno",
          role: "Pilot",
          avatar:
            "https://scontent.fzag1-1.fna.fbcdn.net/v/t31.0-0/p640x640/18839763_1728954444069400_4633145720079398356_o.jpg?_nc_cat=105&_nc_sid=e007fa&_nc_ohc=JFdqxEbrQaUAX94RkTy&_nc_ht=scontent.fzag1-1.fna&_nc_tp=6&oh=984f0a87e0499474fe6066762a4212d3&oe=5F67ED0D"
        },
        {
          name: "Ivo Dole",
          role: "Pilot",
          avatar:
            "https://scontent.fzag1-1.fna.fbcdn.net/v/t31.0-0/p180x540/15675794_362080210814335_8415551225128385595_o.jpg?_nc_cat=106&_nc_sid=110474&_nc_ohc=wY7wz5mQ_GMAX-o4-Ya&_nc_ht=scontent.fzag1-1.fna&_nc_tp=6&oh=534183d091c55256915cad7f17348568&oe=5F679A54"
        },
        {
          name: "Marko Veljaci",
          role: "Pilot",
          avatar:
            "https://scontent.fzag1-1.fna.fbcdn.net/v/t1.0-9/547166_10150921645039938_1337660286_n.jpg?_nc_cat=102&_nc_sid=e007fa&_nc_ohc=yd6JiVv26loAX-6q_aK&_nc_ht=scontent.fzag1-1.fna&oh=bf67cad7d61bf22e70d3f432db14dc62&oe=5F6AC26E"
        },
        {
          name: "Luka Humac",
          role: "Pilot",
          avatar:
            "https://scontent.fzag1-1.fna.fbcdn.net/v/t1.0-9/15355621_10154867638262962_3896719681698439294_n.jpg?_nc_cat=111&_nc_sid=110474&_nc_ohc=H5oftOD-LmsAX9PGG7i&_nc_ht=scontent.fzag1-1.fna&oh=eb4f0922dde25c85f107c789d19d145b&oe=5F698972"
        },
        {
          name: "Tandem Flights",
          role: "Unique expirience flying in pair",
          avatar:
            "https://scontent.fzag1-1.fna.fbcdn.net/v/t1.0-9/116336388_10220761549621865_3281970150796580464_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=AcIAkLFIM-kAX8dyhEp&_nc_oc=AQnAu0Uf7bDNnREtr_rzBYPJshIonBzwUX1Pk0bxOs6BSyncIAxEXyJgADh6mz8bySA&_nc_ht=scontent.fzag1-1.fna&oh=c38bac344049ae249296a338ec634d13&oe=5F6899CB"
        }
      ]
    };
  }
};
</script>

<style></style>
