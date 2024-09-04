export const fetchAPI = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ANIME_BASE_URL}/${resource}?${query}`
  );
  const getResponse = await response.json();
  return getResponse;
};

export const fetchNestedResponse = async (resource, objectProps) => {
  const response = await fetchAPI(resource);
  return response.data.flatMap((item) => item[objectProps]);
};

export const reproduceData = (data, gapData) => {
  const firstData = ~~(Math.random() * (data.length - gapData) + 1);
  const lastData = firstData + gapData;

  const response = {
    data: data.slice(firstData, lastData),
  };

  return response;
};
