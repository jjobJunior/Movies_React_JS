import styles from "./SearchVideoList.module.css";
import VideoList from "../../components/VideoList";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";

//Filtrando videos por categoria ou titulo
function filterVideos(videos, searchText) {
  return videos.filter(
    (video) =>
      video.category.includes(searchText) || video.title.includes(searchText)
  );
}

function SearchVideoList({ videos }) {
  const [searchText, setsearchText] = useState();
  const foundVideos = filterVideos(videos, searchText);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <section className={styles.container}>
      <input
        type="search"
        placeholder="Pesquisar..."
        value={searchText}
        onChange={(e) => setsearchText(e.target.value)}
      />
      {loading ? (
        <Loader />
      ) : (
        <VideoList
          videos={foundVideos}
          emptyHeading={`Sem vídeos sobre o termo de pesquisa "${searchText}"`}
        />
      )}
    </section>
  );
}
export default SearchVideoList;
