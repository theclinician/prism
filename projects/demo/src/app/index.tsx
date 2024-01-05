/* @refresh reload */
import { render } from "solid-js/web"
import { Router } from "@solidjs/router";
import { Button, PrismWrap } from "@zedoc/prism";
import '@zedoc/prism/dist/style.css';

// import { routes } from "$/app/routes";
// import { TranslationContextProvider } from "$p/solid-i18next";
// import { PrismWrap } from "$p/prism";
// import translationResources from "TRANSLATIONS.json";
// import { AppMenuProvider, DropdownProvider } from "$b/appMenu";

// import "./index.scss";


render(() => (
    <PrismWrap>
  <div>

    <Button>Boo</Button>
    Blah!
  </div>
    </PrismWrap>
  // <PrismWrap>
  //   <TranslationContextProvider resources={translationResources}>
  //     <AppMenuProvider>
  //       <DropdownProvider>
  //         <Router>
  //           {routes}
  //         </Router>
  //       </DropdownProvider>
  //     </AppMenuProvider>
  //   </TranslationContextProvider>
  // </PrismWrap>
), document.getElementById("root")!)

