import AnimeList from "@/components/ListAnime";
import Header from "@/components/ListAnime/Header";
import { fetchAPI, fetchNestedResponse } from "../libs/api";

const Page = async () => {
  
  function shuffleRecommend(recAnime) {
    for (let i = recAnime.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [recAnime[i], recAnime[j]] = [recAnime[j], recAnime[i]];
    }
    return recAnime;
  }

  const topAnime = await fetchAPI("top/anime", "limit=8");
  let recommendAnime = await fetchNestedResponse(
    "recommendations/anime",
    "entry"
  );
  recommendAnime = shuffleRecommend(recommendAnime);
  recommendAnime = { data: recommendAnime.slice(0, 8) };

  return (
    <>
      {/* Most Popular */}
      <section>
        <Header
          title="Most Popular Anime"
          linkTitle="See All"
          linkHref="/populerAnime"
        />
        <AnimeList api={topAnime} />
      </section>
      {/* Recommendation */}
      <section>
        <Header
          title="Recommendation Anime"
          linkTitle="See All"
          linkHref="/populerAnime"
        />
        <AnimeList api={recommendAnime} />
      </section>
    </>
  );
};

export default Page;
