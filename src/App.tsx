import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import ContactForm from "./pages/contact-form/contact-form";
import ContactUsPage from "./pages/contact-us-page/contact-us-page";
import SalesPage from "./pages/sales-page/sales-page";
import ScrollToTop from "./features/scrollToTop/scrollToTop";

function App() {
  return (
    <Router basename="/file4-page">
      <ScrollToTop>
        <Routes>
          <Route path='' element={<SalesPage />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/contact-us' element={<ContactUsPage />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;