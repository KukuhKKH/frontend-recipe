import Preloader from "./Component/Preloader"
import Connection from "./Component/Connection"
import Header from "./Component/Header"
import Offcanvas from "./Component/Offcanvas"
import Footer from "./Component/Footer"

import Dashboard from "./View/Dashboard"
import { Helmet } from "react-helmet"

function App() {
  return (
    <>
      <Preloader/>
      <Connection/>
      <Header/>
      <Offcanvas/>
      <Dashboard/>
      <Footer/>
      <Helmet>
        <script src="/template/js/bootstrap.bundle.min.js"></script>
        <script src="/template/js/slideToggle.min.js"></script>
        <script src="/template/js/internet-status.js"></script>
        <script src="/template/js/tiny-slider.js"></script>
        <script src="/template/js/baguetteBox.min.js"></script>
        <script src="/template/js/countdown.js"></script>
        <script src="/template/js/rangeslider.min.js"></script>
        <script src="/template/js/vanilla-dataTables.min.js"></script>
        <script src="/template/js/index.js"></script>
        <script src="/template/js/magic-grid.min.js"></script>
        <script src="/template/js/dark-rtl.js"></script>
        <script src="/template/js/active.js"></script>
      </Helmet>
    </>
  );
}

export default App;
