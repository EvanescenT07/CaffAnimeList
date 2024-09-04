export const fetchAPI = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ANIME_BASE_URL}/${resource}?${query}`
  );
  const getResponse = await response.json();
  return getResponse;
};

export const fetchNestedResponse = async (resource, objectProps) => {
  const response = await fetchAPI(resource);
  return response.data.flatMap((data) => data.entry);
};
