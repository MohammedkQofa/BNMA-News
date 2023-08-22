import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import PoliticsPage from "../views/PoliticsPage.vue";
import EconomicPage from "../views/EconomicPage.vue";
import SportPage from "../views/SportPage.vue";
import DetailsNews from "../views/DetailsNews.vue";
import AuthPage from "../views/AuthPage.vue";
import OurTeam from "../views/OurTeam.vue";
import LoadingPage from "../views/LoadingHomePage.vue";
import EditProfileView from "../views/EditProfile.vue";
import ProfileView from "../views/ProfilePage.vue";
import VerifyEmail from "../views/verifyEmail.vue";

const routes = [
  {
    path: "/loadingHome",
    name: "LoadingHomePage",
    component: LoadingPage,
  },
  {
    path: "/verifyEmail",
    name: "verifyEmail",
    component: VerifyEmail,
  },
  {
    path: "/authPage",
    name: "AuthPage",
    component: AuthPage,
  },
  {
    path: "/",
    name: "AuthPage",
    component: AuthPage,
  },
  {
    path: "/homePage",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/details",
    name: "DetailsNews",
    component: DetailsNews,
  },
  {
    path: "/sport",
    name: "SportPage",
    component: SportPage,
  },
  {
    path: "/politics",
    name: "PoliticsPage",
    component: PoliticsPage,
  },
  {
    path: "/Economic",
    name: "EconomicPage",
    component: EconomicPage,
  },
  {
    path: "/ourTeam",
    name: "OurTeam",
    component: OurTeam,
  },
  {
    path: "/profile",
    name: "ProfileView",
    component: ProfileView,
  },
  {
    path: "/editProfile",
    name: "EditProfileView",
    component: EditProfileView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
