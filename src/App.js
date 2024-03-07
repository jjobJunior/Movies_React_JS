import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Header />
      <Banner image="assistir"/>
      <Container>
        <h1>Hello world!</h1>
        <p>Estou estudando React JS</p>
      </Container>
      <Footer />
    </>
  );
}

export default App;
