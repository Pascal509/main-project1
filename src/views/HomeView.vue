<template>
  <v-app id="home">
    <NavBar />
    <v-container fluid>
      <div class="head">
        <v-row>
          <v-col cols="5">
            <div style="position: relative" class="mt-16">
              <h1 class="text-grey">HELLO</h1>
              <h2 class="text-white">I'm Ezenagu Chinemerem</h2>
              <span lass="text-grey">Frontend Developer</span><br />
              <v-btn tile dark class="text-yellow mt-8" variant="outlined"
                >Contact Me</v-btn
              >
            </div>
          </v-col>
          <v-col cols="2">
            <div
              style="position: absolute; z-index: 9999; bottom: 0; margin-left: auto; margin-right: auto; left: 0; right; 0; text-align: center"
            >
              <v-icon>fas fa-angle-double-down</v-icon>
            </div>
          </v-col>
          <v-col cols="5">
            <div style="position: relative; z-index: 9999" class="mt-16">
              <!-- <v-hover v-slot="{isHovering, props}">
                <v-card :elevation="isHovering" :class="{'on-hover' : isHovering}" v-bind="props"> -->
                  <v-img src="pic.jpg" contain max-height="300" style="border-radius: 5%; overflow: hidden;"></v-img>
                <!-- </v-card>
              </v-hover> -->
            </div>
          </v-col>
        </v-row>
      </div>
      <v-col cols="12" class="mt-16" id="about">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="egg">
                <v-img src="" max-height="300"
                  >Lorem ipsum dolor <br/>
                  sit amet consectetur adipisicing elit.<br/>
                  Amet sequi corporis expedit.</v-img
                >
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <h2 class="mt-16">About Me</h2>
              <div style="width: 120px">
                <v-slider v-model="slider2" color="yellow">
                </v-slider>
              </div>
              <h4 class="mt-n4">I build responsive web applications</h4>
              <p class="text-grey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit adipisci eligendi, numquam blanditiis in quidem
                veritatis! Facere obcaecati quaerat quia asperiores
                exercitationem numquam quos? Repudiandae culpa accusamus harum
                vitae ratione.
              </p>
              <br />
              <p class="text-grey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt voluptatibus quia nam animi at obcaecati aut totam
                magnam consectetur? Praesentium, nihil neque! Id laudantium nemo
                in nobis numquam alias provident!
              </p>
              <v-btn tile dark color="yellow" class="mt-4"
                >Check Out My Resume</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </v-col>
      <div class="text-center mt-4">
        <h2>What I Do</h2>
        <div style="width: 120px; margin: 0, auto">
          <v-slider
            v-model="slider2"
            color="yellow"
          ></v-slider>
        </div>
      </div>
      <v-col cols="12" class="padd" id="portfolio">
        <div class="first" id="project">
          <v-row>
            <v-col cols="12">
              <div class="child">
                <v-btn
                  icon="fas fa-laptop"
                  color="#fbdf7e"
                  class="text-wite"
                ></v-btn>
                <h3 class="ml-3 mt-4">We Design</h3>
                <p class="text-grey ml-3 mt-4 text-caption">
                  Lorem ipsum dolor sit <br/> 
                  amet consectetur adipisicing <br/> elit.
                  Assumenda ulla <br/>
                </p>
              </div>
              <div class="child">
                <v-btn
                  icon="fas fa-mobile-alt"
                  color="#fbdf7e"
                  class="text-wite"
                ></v-btn>
                <h3 class="ml-3 mt-4">We Code</h3>
                <p class="text-grey ml-3 mt-4 text-caption">
                  Lorem ipsum dolor sit <br/> 
                  amet consectetur adipisicing <br/> elit.
                  Assumenda ulla <br/>
                </p>
              </div>
              <div class="child">
                <v-btn
                  icon="fas fa-hand"
                  color="#fbdf7e"
                  class="text-wite"
                ></v-btn>
                <h3 class="ml-3 mt-4">We Create</h3>
                <p class="text-grey ml-3 mt-4 text-caption">
                  Lorem ipsum dolor sit <br/> 
                  amet consectetur adipisicing <br/> elit.
                  Assumenda ulla <br/>
                </p>
              </div>
            </v-col>
          </v-row>
          <v-divider>

          </v-divider>
        </div>
      </v-col>
      <v-col cols="12" sm="12" id="services">
        <div class="d-flex" justify-center mb-6>
          <v-btn color="#fbdf7e" class="mr-2">All</v-btn>
          <router-link to="/project">
          <v-btn class="mr-2" variant="tonal">My Projects</v-btn>
          </router-link>
          <v-btn class="mr-2" variant="tonal">Qualifications</v-btn>
          <v-btn class="mr-2" variant="tonal">Know Me</v-btn>
        </div>
      </v-col>
      <v-col cols="12" class="imgHover">
        <v-row class="fill-height" align="center" justify="center">
          <!-- <template v-for=""(item,)></template> -->

        </v-row>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  name: "HomeView",
  setup() {
    return {
      slider2: 50,

      items: [
        {
          img: "img1.jpg",
        },
        {
          img: "img2.jpg",
        },
        {
          img: "img3.jpg",
        },
        {
          img: "img4.jpg",
        },
        {
          img: "img5.jpg",
        },
        {
          img: "img6.jpg",
        },
      ],
    };
  },

  components: {
    NavBar,
  },
});
</script>

<style scoped>
.v-container {
  padding: 16px 0;
}
.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
}
.head:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, 6deg);
}
.head::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, -6deg);
}

.egg {
  display: block;
  margin-left: 100px;
  margin-top: 50px;
  width: 356px;
  height: 300px;
  background-color: #fbdf7e;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 0%;
}

.first {
  width: 100%;
  height: 200px;
  text-align: center;
  padding: 2rem 2rem;
}

.child {
  display: inline-block;
  padding: 2rem, 1rem;
  vertical-align: middle;
  text-align: center;
  margin-right: 8px;
}

.imgHover {
  padding: 0 200px;
}
.pre {
  width: 100%;
  height: 300px;
  text-align: center;
  padding: 0 200px;
  background-color: #f5f5f5;
}
.hire {
  width: 100%;
  height: 200px;
  padding: 0, 200px;
  background-color: #e9e9e9;
  margin-top: -24px;
}
</style>
