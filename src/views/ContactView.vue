<template>
  <div>
    <NavBar />
    <v-col cols="12" sm="12" class="px-16" id="contact">
      <v-row>
        <v-col cols="12" sm="4">
          <div class="child">
            <h1>Contact Info</h1>
            <v-btn
              icon="fas fa-map-marker-alt"
              class="mt-10"
              variant="outlined"
            ></v-btn
            ><br />
            <span class="text-caption">My Address</span><br />
            <span class="text-caption">Umunwanlo Irete, Imo state, Nigeria</span
            ><br />
            <v-btn
              icon="fas fa-phone-alt"
              class="mt-10"
              variant="outlined"
            ></v-btn
            ><br />
            <span class="text-caption">Call me</span><br />
            <span class="text-caption">09028854415</span><br />
            <v-btn
              icon="fas fa-envelope"
              class="mt-10"
              variant="outlined"
            ></v-btn
            ><br />
            <span class="text-caption">E-mail</span><br />
            <span class="text-caption">ezenaguchinemerem@gmail.com</span><br />
          </div>
        </v-col>
        <v-col cols="12" sm="8">
          <h1 class="mt-8">Send Your Message</h1>
          <v-divider></v-divider>
          <span class="text-caption"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            commodi quod porro velit a enim maiores reiciendis autem alias!
            Fuga, alias iusto? Voluptatibus doloribus officia vitae maiores,
            perferendis accusantium delectus!</span
          >
          <v-row class="mt-10">
            <v-col cols="12" sm="6">
                <v-text-field label="Name" persistent-hint variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
                <v-text-field label="Phone No" persistent-hint variant="outlined"></v-text-field>
            </v-col>
          </v-row>
          <v-textarea label="Message" persistent-hint variant="outlined"></v-textarea>
          <v-btn color="#fbdf7e" class="mt-2">Submit Now</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "ContactView",
  components: {
    NavBar,
  },
};
</script>

<style></style>
