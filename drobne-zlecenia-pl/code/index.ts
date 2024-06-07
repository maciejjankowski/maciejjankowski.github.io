import { createBrowserRouter, RouterProvider } from "next/router";
import Home from "./pages/Home";
import About from "./pages/index.ts";
import HowItWorks from "./pages/HowItWorks";
import FindAJob from "./pages/FindAJob";
import AddAJob from "./pages/AddAJob";
import LegalAdvice from "./pages/LegalAdvice";
import Security from "./pages/Security";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Forum from "./pages/Forum";
import ForBusinesses from "./pages/ForBusinesses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/how-it-works",
    element: <HowItWorks />,
  },
  {
    path: "/find-a-job",
    element: <FindAJob />,
  },
  {
    path: "/add-a-commission",
    element: <AddAJob />,
  },
  {
    path: "/legal-advice",
    element: <LegalAdvice />,
  },
  {
    path: "/security",
    element: <Security />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/forum",
    element: <Forum />,
  },
  {
    path: "/for-businesses",
    element: <ForBusinesses />,
  },
  {
    path: "/success-stories",
    element: <SuccessStories />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
