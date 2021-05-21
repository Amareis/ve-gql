/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
}

export interface FilterCharacter {
  name?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  species?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  gender?: Maybe<Scalars["String"]>;
}

export interface FilterLocation {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  dimension?: Maybe<Scalars["String"]>;
}

export interface FilterEpisode {
  name?: Maybe<Scalars["String"]>;
  episode?: Maybe<Scalars["String"]>;
}

export enum CacheControlScope {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
}

export const scalarsEnumsHash: import("gqless").ScalarsEnumsHash = {
  ID: true,
  String: true,
  Int: true,
  Boolean: true,
  CacheControlScope: true,
  Upload: true,
};
export const generatedSchema = {
  query: {
    __typename: { __type: "String!" },
    character: { __type: "Character", __args: { id: "ID!" } },
    characters: {
      __type: "Characters",
      __args: { page: "Int", filter: "FilterCharacter" },
    },
    charactersByIds: { __type: "[Character]", __args: { ids: "[ID!]!" } },
    location: { __type: "Location", __args: { id: "ID!" } },
    locations: {
      __type: "Locations",
      __args: { page: "Int", filter: "FilterLocation" },
    },
    locationsByIds: { __type: "[Location]", __args: { ids: "[ID!]!" } },
    episode: { __type: "Episode", __args: { id: "ID!" } },
    episodes: {
      __type: "Episodes",
      __args: { page: "Int", filter: "FilterEpisode" },
    },
    episodesByIds: { __type: "[Episode]", __args: { ids: "[ID!]!" } },
  },
  mutation: {},
  subscription: {},
  Character: {
    __typename: { __type: "String!" },
    id: { __type: "ID" },
    name: { __type: "String" },
    status: { __type: "String" },
    species: { __type: "String" },
    type: { __type: "String" },
    gender: { __type: "String" },
    origin: { __type: "Location" },
    location: { __type: "Location" },
    image: { __type: "String" },
    episode: { __type: "[Episode]!" },
    created: { __type: "String" },
  },
  Location: {
    __typename: { __type: "String!" },
    id: { __type: "ID" },
    name: { __type: "String" },
    type: { __type: "String" },
    dimension: { __type: "String" },
    residents: { __type: "[Character]!" },
    created: { __type: "String" },
  },
  Episode: {
    __typename: { __type: "String!" },
    id: { __type: "ID" },
    name: { __type: "String" },
    air_date: { __type: "String" },
    episode: { __type: "String" },
    characters: { __type: "[Character]!" },
    created: { __type: "String" },
  },
  FilterCharacter: {
    name: { __type: "String" },
    status: { __type: "String" },
    species: { __type: "String" },
    type: { __type: "String" },
    gender: { __type: "String" },
  },
  Characters: {
    __typename: { __type: "String!" },
    info: { __type: "Info" },
    results: { __type: "[Character]" },
  },
  Info: {
    __typename: { __type: "String!" },
    count: { __type: "Int" },
    pages: { __type: "Int" },
    next: { __type: "Int" },
    prev: { __type: "Int" },
  },
  FilterLocation: {
    name: { __type: "String" },
    type: { __type: "String" },
    dimension: { __type: "String" },
  },
  Locations: {
    __typename: { __type: "String!" },
    info: { __type: "Info" },
    results: { __type: "[Location]" },
  },
  FilterEpisode: { name: { __type: "String" }, episode: { __type: "String" } },
  Episodes: {
    __typename: { __type: "String!" },
    info: { __type: "Info" },
    results: { __type: "[Episode]" },
  },
} as const;

export interface Query {
  __typename: "Query" | undefined;
  /**
   * Get a specific character by ID
   */
  character: (args: { id: Scalars["ID"] }) => Maybe<Character>;
  /**
   * Get the list of all characters
   */
  characters: (args?: {
    page?: Maybe<Scalars["Int"]>;
    filter?: Maybe<FilterCharacter>;
  }) => Maybe<Characters>;
  /**
   * Get a list of characters selected by ids
   */
  charactersByIds: (args: {
    ids: Array<Scalars["ID"]>;
  }) => Maybe<Array<Maybe<Character>>>;
  /**
   * Get a specific locations by ID
   */
  location: (args: { id: Scalars["ID"] }) => Maybe<Location>;
  /**
   * Get the list of all locations
   */
  locations: (args?: {
    page?: Maybe<Scalars["Int"]>;
    filter?: Maybe<FilterLocation>;
  }) => Maybe<Locations>;
  /**
   * Get a list of locations selected by ids
   */
  locationsByIds: (args: {
    ids: Array<Scalars["ID"]>;
  }) => Maybe<Array<Maybe<Location>>>;
  /**
   * Get a specific episode by ID
   */
  episode: (args: { id: Scalars["ID"] }) => Maybe<Episode>;
  /**
   * Get the list of all episodes
   */
  episodes: (args?: {
    page?: Maybe<Scalars["Int"]>;
    filter?: Maybe<FilterEpisode>;
  }) => Maybe<Episodes>;
  /**
   * Get a list of episodes selected by ids
   */
  episodesByIds: (args: {
    ids: Array<Scalars["ID"]>;
  }) => Maybe<Array<Maybe<Episode>>>;
}

export interface Mutation {
  __typename: "Mutation" | undefined;
}

export interface Subscription {
  __typename: "Subscription" | undefined;
}

export interface Character {
  __typename: "Character" | undefined;
  /**
   * The id of the character.
   */
  id?: Maybe<ScalarsEnums["ID"]>;
  /**
   * The name of the character.
   */
  name?: Maybe<ScalarsEnums["String"]>;
  /**
   * The status of the character ('Alive', 'Dead' or 'unknown').
   */
  status?: Maybe<ScalarsEnums["String"]>;
  /**
   * The species of the character.
   */
  species?: Maybe<ScalarsEnums["String"]>;
  /**
   * The type or subspecies of the character.
   */
  type?: Maybe<ScalarsEnums["String"]>;
  /**
   * The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
   */
  gender?: Maybe<ScalarsEnums["String"]>;
  /**
   * The character's origin location
   */
  origin?: Maybe<Location>;
  /**
   * The character's last known location
   */
  location?: Maybe<Location>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<ScalarsEnums["String"]>;
  /**
   * Episodes in which this character appeared.
   */
  episode: Array<Maybe<Episode>>;
  /**
   * Time at which the character was created in the database.
   */
  created?: Maybe<ScalarsEnums["String"]>;
}

export interface Location {
  __typename: "Location" | undefined;
  /**
   * The id of the location.
   */
  id?: Maybe<ScalarsEnums["ID"]>;
  /**
   * The name of the location.
   */
  name?: Maybe<ScalarsEnums["String"]>;
  /**
   * The type of the location.
   */
  type?: Maybe<ScalarsEnums["String"]>;
  /**
   * The dimension in which the location is located.
   */
  dimension?: Maybe<ScalarsEnums["String"]>;
  /**
   * List of characters who have been last seen in the location.
   */
  residents: Array<Maybe<Character>>;
  /**
   * Time at which the location was created in the database.
   */
  created?: Maybe<ScalarsEnums["String"]>;
}

export interface Episode {
  __typename: "Episode" | undefined;
  /**
   * The id of the episode.
   */
  id?: Maybe<ScalarsEnums["ID"]>;
  /**
   * The name of the episode.
   */
  name?: Maybe<ScalarsEnums["String"]>;
  /**
   * The air date of the episode.
   */
  air_date?: Maybe<ScalarsEnums["String"]>;
  /**
   * The code of the episode.
   */
  episode?: Maybe<ScalarsEnums["String"]>;
  /**
   * List of characters who have been seen in the episode.
   */
  characters: Array<Maybe<Character>>;
  /**
   * Time at which the episode was created in the database.
   */
  created?: Maybe<ScalarsEnums["String"]>;
}

export interface Characters {
  __typename: "Characters" | undefined;
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
}

export interface Info {
  __typename: "Info" | undefined;
  /**
   * The length of the response.
   */
  count?: Maybe<ScalarsEnums["Int"]>;
  /**
   * The amount of pages.
   */
  pages?: Maybe<ScalarsEnums["Int"]>;
  /**
   * Number of the next page (if it exists)
   */
  next?: Maybe<ScalarsEnums["Int"]>;
  /**
   * Number of the previous page (if it exists)
   */
  prev?: Maybe<ScalarsEnums["Int"]>;
}

export interface Locations {
  __typename: "Locations" | undefined;
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
}

export interface Episodes {
  __typename: "Episodes" | undefined;
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  Character: Character;
  Location: Location;
  Episode: Episode;
  Characters: Characters;
  Info: Info;
  Locations: Locations;
  Episodes: Episodes;
}
export type SchemaObjectTypesNames =
  | "Query"
  | "Mutation"
  | "Subscription"
  | "Character"
  | "Location"
  | "Episode"
  | "Characters"
  | "Info"
  | "Locations"
  | "Episodes";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  CacheControlScope: CacheControlScope | undefined;
}
