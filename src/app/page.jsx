import AnimeList from "@/components/ListAnime";
import Header from "@/components/ListAnime/Header";
import { fetchAPI, fetchNestedResponse, reproduceData } from "../libs/api";

const Page = async () => {
  const topAnime = await fetchAPI("top/anime", "limit=8");
  let recommendedAnime = await fetchNestedResponse(
    "recommendations/anime",
    "entry"
  );
  const test = reproduceData(recommendedAnime, 8);
  console.log(test);

  recommendedAnime = reproduceData(recommendedAnime, 8);

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
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
