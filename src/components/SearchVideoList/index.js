import styles from "./SearchVideoList.module.css";
import VideoList from "../../components/VideoList";
import { useState } from "react";

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
  return (
    <section className={styles.container}>
      <input
        type="search"
        placeholder="Pesquisar..."
        value={searchText}
        onChange={(e) => setsearchText(e.target.value)}
      />
      <VideoList
        videos={foundVideos}
        emptyHeading={`Sem vídeos sobre o termo de pesquisa "${searchText}"`}
      />
    </section>
  );
}
export default SearchVideoList;
