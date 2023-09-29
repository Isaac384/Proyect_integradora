// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Doctor from "layouts/tables/DoctorComponent";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// Soft UI Dashboard React icons
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";
import DoctorComponent from "layouts/tables/DoctorComponent";
import EnfermedadComponent from "layouts/tables/EnfermedadComponent";
import CitaComponent from "layouts/tables/CitaComponent";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Paciente",
    key: "paciente",
    route: "/paciente",
    icon: <AssistWalkerIcon size="12px" />,
    component: <Tables />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Doctor",
    key: "doctor",
    route: "/doctor",
    icon: <MedicalInformationIcon size="12px" />,
    component: <DoctorComponent />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Enfermedades",
    key: "enfermedad",
    route: "/enfermedad",
    icon: <VaccinesIcon size="12px" />,
    component: <EnfermedadComponent />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Citas",
    key: "citas",
    route: "/citas",
    icon: <ScheduleIcon size="12px" />,
    component: <CitaComponent />,
    noCollapse: true,
  },
  /*{
    type: "collapse",
    name: "Billing",
    key: "billing",
    route: "/billing",
    icon: <CreditCard size="12px" />,
    component: <Billing />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Virtual Reality",
    key: "virtual-reality",
    route: "/virtual-reality",
    icon: <Cube size="12px" />,
    component: <VirtualReality />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "RTL",
    key: "rtl",
    route: "/rtl",
    icon: <Settings size="12px" />,
    component: <RTL />,
    noCollapse: true,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },*/
];

export default routes;
