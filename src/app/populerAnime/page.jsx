"use client";

import AnimeList from "@/components/ListAnime";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import { fetchAPI } from "../../libs/api";
import { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const populerAnime = async () => {
    const topAnime = await fetchAPI("top/anime", `page=${page}`);
    setData(topAnime);
  };

  useEffect(() => {
    populerAnime();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Most Popular Anime #${page}`} />
      <AnimeList api={data} />
      <Pagination
        page={page}
        lastPage={data.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
