export type CatApiResponse = {
  id: number;
  breeds: unknown[];
  url: string;
  width: number;
  height: number;
}

export type DogApiResponse = {
  message: string[];
  status: string;
};