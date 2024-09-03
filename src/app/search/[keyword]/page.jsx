import { fetchAPI } from "@/app/libs/api";
import AnimeList from "@/components/ListAnime";
import Header from "@/components/ListAnime/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  
  const decodeKeyword = decodeURI(keyword);
  const searchAnime = await fetchAPI("anime", `q=${decodeKeyword}`);

  return (
    <>
      <section>
        <Header title={`Search Result for ${decodeKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
