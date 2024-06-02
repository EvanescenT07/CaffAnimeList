import AnimeList from "@/components/ListAnime"
import Header from "@/components/ListAnime/Header"

const Page = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ANIME_BASE_URL}/top/anime?limit=8`)
  const topAnime = await res.json()
  
  return (
    <>
      {/* Most Populer */}
      <section>
        <Header title="Most Popular Anime" linkTitle="See All" linkHref="/populerAnime" />
        <AnimeList api={topAnime}/>
      </section>
    </>
  )
}

export default Page;



