import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

// import your pages
import HomeContent from "./components/HomeContent";
import AboutUs from "./pages/AboutUs";
import OurFirm from "./pages/OurFirm";
import OurTeam from "./pages/OurTeam";
import Service from "./pages/Service";
import PracticeArea from "./pages/PracticeArea";
import CorporateCommercial from "./pages/CorporateCommercial";
import BankingFinance from "./pages/BankingFinance";
import IntellectualProperty from "./pages/IntellectualProperty";
import LitigationArbitration from "./pages/LitigationArbitration";
import MergersAcquisitions from "./pages/MergersAcquisitions";
import NewsPublication from "./pages/NewsPublication";
import ContactUs from "./pages/ContactUs";
import JoinUs from "./pages/JoinUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomeContent />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="our-firm" element={<OurFirm />} />
          <Route path="team" element={<OurTeam />} />
          <Route path="services" element={<Service />} />
          <Route path="practice-area" element={<PracticeArea />} />
          <Route
            path="corporate-commercial"
            element={<CorporateCommercial />}
          />
          <Route path="banking-finance" element={<BankingFinance />} />
          <Route
            path="intellectual-property"
            element={<IntellectualProperty />}
          />
          <Route
            path="litigation-arbitration"
            element={<LitigationArbitration />}
          />
          <Route
            path="mergers-acquisitions"
            element={<MergersAcquisitions />}
          />
          <Route path="news-publication" element={<NewsPublication />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="join" element={<JoinUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
