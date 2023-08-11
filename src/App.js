import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import MenuSection from "./components/MenuSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import ReserveSection from "./components/ReserveSection";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <AboutSection />
          <MenuSection />
          <ReserveSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
