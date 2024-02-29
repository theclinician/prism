/* @refresh reload */
import { render } from "solid-js/web"
import { Router } from "@solidjs/router";
import { Button, PrismWrap } from "@theclinician/prism";

import "./theme-clinic.css";

import "@fontsource/fira-mono";
import "@fontsource-variable/signika";
import "@theclinician/prism/dist/style.css";

import { routes } from "$/app/routes";

render(() => (
    <PrismWrap>
      <Router>
        {routes}
      </Router>
    </PrismWrap>
), document.getElementById("root")!)

