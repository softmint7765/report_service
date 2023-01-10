/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.Softmint.com/product/argon-dashboard-react
* Copyright 2022 Softmint Tim (https://www.Softmint.com)
* Licensed under MIT (https://github.com/Softmintofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Softmint

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";

import AuthLayout from "layouts/Auth.js";
import Recharge from "views/examples/Recharge";

// import Logi from "views/examples/Logi";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
     
      {/* <Report /> */}
      {/* <Route exact path="/admin/logi"   component={Logi}  render={(props) => <AdminLayout {...props} />} /> */}
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
     
      
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route exact path="/admin/recharge"   component={Recharge}  render={(props) => <AdminLayout {...props} />} />
      <Redirect from="/" to="/auth/login" />
    </Switch>
  </BrowserRouter>
);
