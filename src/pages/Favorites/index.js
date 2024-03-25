import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Favorites.module.css";
import VideoList from "../../components/VideoList";
import { useFavoriteContext } from "../../context/Favorites";

function Favorites() {
  const { favorite } = useFavoriteContext();
  return (
    <>
      <Header />
      <Container>
        <section className={styles.favorites}>
          <h2>Meus favoritos</h2>
          {<VideoList videos={favorite} emptyHeading="Sem videos em favoritos"/>}
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Favorites;
