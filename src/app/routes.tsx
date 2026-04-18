import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProcessPage } from "./pages/ProcessPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "services", Component: ServicesPage },
      { path: "products", Component: ProductsPage },
      { path: "process", Component: ProcessPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
