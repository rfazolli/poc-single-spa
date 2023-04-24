import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@rf/single-header",
  app: () => System.import("@rf/single-header"),
  activeWhen: () => true,
});

registerApplication({
  name: "@rf/single-react",
  app: () => System.import("@rf/single-react"),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@single-angular",
  app: () => System.import("@single-angular"),
  activeWhen: (location) => location.pathname === "/angular",
});

start({
  urlRerouteOnly: true,
});
