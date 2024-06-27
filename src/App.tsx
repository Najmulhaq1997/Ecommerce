import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Restaurants from "./pages/Restaurants";
import RestaurantsMenu from "./pages/RestaurantsMenu";
import RestaurantsMenuFullView from "./pages/RestaurantsMenuFullView";
import PersonalServices from "./pages/PersonalServices";
import ProfessionalServices from "./pages/ProfessionalServices";
import RetailAndShopping from "./pages/RetailAndShopping";
import AutomotiveServices from "./pages/AutomotiveServices";
import EducationAndTraining from "./pages/EducationAndTraining";
import EntertainmentAndRecreation from "./pages/EntertainmentAndRecreation";
import TravelAndAccommodation from "./pages/TravelAndAccommodation";
import EventsAndWeddings from "./pages/EventsAndWeddings";
import TechnologyAndElectronics from "./pages/TechnologyAndElectronics";
import HealthAndWellness from "./pages/HealthAndWellness";
import PetsAndAnimals from "./pages/PetsAndAnimals";
import RealEstate from "./pages/RealEstate";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import ListYourProductPage from "./pages/ListYourProductPage";
import Dashboard from "./pages/Dashboard";
import DashboardProducts from "./pages/DashboardProducts";
import DashboardAnalytics from "./pages/DashboardAnalytics";
import DashboardShopDetails from "./pages/DashboardShopDetails";
import HomeServices from "./pages/HomeServices";
import FoodAndDining from "./pages/FoodAndDining";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/restaurants":
        title = "";
        metaDescription = "";
        break;
      case "/restaurants-menu":
        title = "";
        metaDescription = "";
        break;
      case "/restaurants-menu-full-view":
        title = "";
        metaDescription = "";
        break;
      case "/personal-services":
        title = "";
        metaDescription = "";
        break;
      case "/professional-services":
        title = "";
        metaDescription = "";
        break;
      case "/retail-and-shopping":
        title = "";
        metaDescription = "";
        break;
      case "/automotive-services":
        title = "";
        metaDescription = "";
        break;
      case "/education-and-training":
        title = "";
        metaDescription = "";
        break;
      case "/entertainment-and-recreation":
        title = "";
        metaDescription = "";
        break;
      case "/travel-and-accommodation":
        title = "";
        metaDescription = "";
        break;
      case "/events-and-weddings":
        title = "";
        metaDescription = "";
        break;
      case "/technology-and-electronics":
        title = "";
        metaDescription = "";
        break;
      case "/health-and-wellness":
        title = "";
        metaDescription = "";
        break;
      case "/pets-and-animals":
        title = "";
        metaDescription = "";
        break;
      case "/real-estate":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/list-your-product-page":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-products":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-analytics":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-shop-details":
        title = "";
        metaDescription = "";
        break;
      case "/home-services":
        title = "";
        metaDescription = "";
        break;
      case "/food-and-dining":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/restaurants-menu" element={<RestaurantsMenu />} />
      <Route
        path="/restaurants-menu-full-view"
        element={<RestaurantsMenuFullView />}
      />
      <Route path="/personal-services" element={<PersonalServices />} />
      <Route path="/professional-services" element={<ProfessionalServices />} />
      <Route path="/retail-and-shopping" element={<RetailAndShopping />} />
      <Route path="/automotive-services" element={<AutomotiveServices />} />
      <Route
        path="/education-and-training"
        element={<EducationAndTraining />}
      />
      <Route
        path="/entertainment-and-recreation"
        element={<EntertainmentAndRecreation />}
      />
      <Route
        path="/travel-and-accommodation"
        element={<TravelAndAccommodation />}
      />
      <Route path="/events-and-weddings" element={<EventsAndWeddings />} />
      <Route
        path="/technology-and-electronics"
        element={<TechnologyAndElectronics />}
      />
      <Route path="/health-and-wellness" element={<HealthAndWellness />} />
      <Route path="/pets-and-animals" element={<PetsAndAnimals />} />
      <Route path="/real-estate" element={<RealEstate />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/list-your-product-page" element={<ListYourProductPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard-products" element={<DashboardProducts />} />
      <Route path="/dashboard-analytics" element={<DashboardAnalytics />} />
      <Route
        path="/dashboard-shop-details"
        element={<DashboardShopDetails />}
      />
      <Route path="/home-services" element={<HomeServices />} />
      <Route path="/food-and-dining" element={<FoodAndDining />} />
    </Routes>
  );
}
export default App;
