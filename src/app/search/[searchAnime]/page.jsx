import AnimeList from "@/components/ListAnime"
import Header from "@/components/ListAnime/Header"

const Page = async ({ params }) => {
  const { searchAnime } = params
  const decodedSearch = decodeURI(searchAnime)
  const res = await fetch(`${process.env.NEXT_PUBLIC_ANIME_BASE_URL}/anime?q=${decodedSearch}`)
  const SearchAnimeList = await res.json()
  
  return (
    <>
      {/* Most Populer */}
      <section>
        <Header title={`Search Result for ${ decodedSearch }`} />
        <AnimeList api={SearchAnimeList}/>
      </section>
    </>
  )
}

export default Page;



