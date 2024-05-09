import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import ContactForm from "./pages/contact-form/contact-form";
import SalesPage from "./pages/sales-page/sales-page";
import ScrollToTop from "./features/scrollToTop/scrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<SalesPage />} />
          <Route path='/contact' element={<ContactForm />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;