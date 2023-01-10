/*!

========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.Softmint.com/product/argon-dashboard-react
* Copyright 2022 Softmint (https://www.Softmint.com)
* Licensed under MIT (https://github.com/Softmintofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Softmint

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import Logi from "views/examples/Logi";
import Login from "views/examples/Login.js";
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Recharge from "views/examples/Recharge";
import ICICI from "views/examples/ICICI";
import Money from "views/examples/Money";
import AEPS from "views/examples/AEPS";
import Transiction from "views/examples/Transiction";
import Earning from "views/examples/Earning";






var routes = [
  // {
  //   path: "/logi",
  //   name: "Logi",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: Logi,
  //   layout: "/admin"
  // },
 
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
 
  
 
  {
    path: "/report",
    name: "Report",
    icon: "ni ni-planet text-blue",
    component: Icons, 
    layout: "/admin"
  },
 
 
 
  
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin"
  // },
  {
    // path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/admin"
  // },
 
  {
    // path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    // layout: "/auth"
  },
  {
    path: "/login",
    // name: "Login",
    // icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
   {
    path: "/recharge",
    // name: "Recharge",
    // icon: "ni ni-key-25 text-info",
    component: Recharge,
    layout: "/admin"
  },
  {
    path: "/transiction",
    // name: "Recharge",
    // icon: "ni ni-key-25 text-info",
    component: Transiction,
    layout: "/admin"
  },
  
  {
    path: "/AEPS",
    // name: "AEPS",
    // icon: "ni ni-key-25 text-info",
    component: AEPS,
    layout: "/admin"
  },
  {
    path: "/Earning",
    // name: "AEPS",
    // icon: "ni ni-key-25 text-info",
    component: Earning,
    layout: "/admin"
  },
  {
    path: "/ICICI",
    // name: "ICIC Report",
    // icon: "ni ni-key-25 text-info",
    component: ICICI,
    layout: "/admin"
  },
  
  {
    path: "/Money",
    // name: "Money Transfer Report",
    // icon: "ni ni-key-25 text-info",
    component: Money,
    layout: "/admin"
  },
  
];
export default routes;
