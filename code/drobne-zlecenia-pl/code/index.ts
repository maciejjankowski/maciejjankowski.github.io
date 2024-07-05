import { createBrowserRouter, RouterProvider } from "next/router";
import Home from "./pages/Home.ts";
import About from "./pages/index.ts";
import HowItWorks from "./pages/HowItWorks.ts";
import FindAJob from "./pages/FindAJob.ts";
import AddAJob from "./pages/AddAJob.ts";
import LegalAdvice from "./pages/LegalAdvice.ts";
import Security from "./pages/Security.ts";
import Blog from "./pages/Blog.ts";
import Contact from "./pages/Contact.ts";
import Help from "./pages/Help.ts";
import Forum from "./pages/Forum.ts";
import ForBusinesses from "./pages/ForBusinesses.ts";

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
