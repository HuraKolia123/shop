import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RickAndMortyBaseUrl } from "../constants/rickAndMortyBaseUrl";
import { characterQueryKeys } from "@/enteties/character/libs/constants/characterQueryKeys";
import { episodeQueryKey } from "@/enteties/episode/libs/constants/episodeQueryKeys";
import { locationQueryKey } from "@/enteties/location/libs/constants/locationQueryKeys";

export const rickAndMortyAPI = createApi({
  reducerPath: "rickAndMorty",
  baseQuery: fetchBaseQuery({ baseUrl: RickAndMortyBaseUrl }),
  endpoints: () => ({}),
  tagTypes: [
    characterQueryKeys.queryKey,
    ...episodeQueryKey.all,
    ...locationQueryKey.all,
  ],
});
