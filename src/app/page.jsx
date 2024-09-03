import AnimeList from "@/components/ListAnime";
import Header from "@/components/ListAnime/Header";
import { fetchAPI } from "./libs/api";

const Page = async () => {
  const topAnime = await fetchAPI("top/anime", "limit=8");

  return (
    <>
      {/* Most Populer */}
      <section>
        <Header
          title="Most Popular Anime"
          linkTitle="See All"
          linkHref="/populerAnime"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
