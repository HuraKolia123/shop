import { routeConfig } from "@/app/config/route";

export const getHomeRoute = () => routeConfig.home;

export const getCharactersRoute = () => routeConfig.characters;

export const getEpisodesRoute = () => routeConfig.episodes;

export const getLocationsRoute = () => routeConfig.locations;

export const getCharacterRoute = (id: number | string) =>
  `${routeConfig.character.replace(
    ":id",
    typeof id === "number" ? id.toString() : id
  )}`;

export const getEpisodeRoute = (id: number | string) =>
  `${routeConfig.episode.replace(
    ":id",
    typeof id === "number" ? id.toString() : id
  )}`;

export const getLocationRoute = (id: number | string) =>
  `${routeConfig.location.replace(
    ":id",
    typeof id === "number" ? id.toString() : id
  )}`;
