"use client"

import AnimeList from "@/components/ListAnime";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import { useEffect, useState } from "react";

const Page = () => {
      const [page, setPage] = useState(1)
      const [data, setData] = useState([])

      const fetchData = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_ANIME_BASE_URL}/top/anime?page=${page}`)
            const responseData = await res.json()
            setData(responseData)
      }

      useEffect(() => {
            fetchData()
      }, [page])

      return (
            <>
                  <HeaderMenu title={`Most Popular Anime #${page}`}/>
                  <AnimeList api={data}/>
                  <Pagination page={page} lastPage={data.pagination?.last_visible_page} setPage={setPage}/>
            </>
      )
}

export default Page