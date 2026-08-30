import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Domain from "./Pages/Domain";
import WebsiteHosting from "./Pages/WebsiteHosting";
import Commerce from "./Pages/Commerce";
import Email from "./Pages/Email";
import ExportService from "./Pages/ExportService";
import More from "./Pages/More";
import HelpCenter from "./Pages/HelpCenter";
import SignIn from "./Pages/SignIn";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";

export default function App() {
  return (
      <main className="mx-auto">
        <Navbar className="" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/domain-name" element={<Domain />} />
          <Route path="/website-hosting" element={<WebsiteHosting />} />
          <Route path="/commerce" element={<Commerce />} />
          <Route path="/email-marketing" element={<Email />} />
          <Route path="/export-service" element={<ExportService />} />
          <Route path="/more" element={<More />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </main>
  );
}
