import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

import GlobalLoadingIndicator from "./components/GlobalLoadingIndicator";
import InstallPWA from "./components/InstallPWA";

import "./index.css";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

const Home = lazy(() => import("./pages/Home"));
const Details = lazy(() => import("./pages/Details"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const AppRouter = () => (
  <Suspense fallback={<h1>Chargement ...</h1>}>
    <Switch>
      <Route path="/:name" component={Details} />
      <Route path="/" component={Home} />
    </Switch>
  </Suspense>
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <>
          <InstallPWA />
          <nav
            style={{
              display: "flex",
              borderBottom: "1px solid #333",
              padding: "1rem",
            }}
          >
            POKEFLEX
          </nav>

          <main style={{ padding: "1rem" }}>
            <AppRouter />
          </main>
          <ReactQueryDevtools />
          <GlobalLoadingIndicator />
        </>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
