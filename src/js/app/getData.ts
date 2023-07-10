import { res } from "./../interfaces";

export default async function getData(baseUrl: string, path?: string) {
  let data: res | [res];
  if (path) {
    data = await fetch(baseUrl + path).then((res): Promise<res> => res.json());
  } else {
    data = await fetch(baseUrl).then((res): Promise<res> => res.json());
  }

  return data;
}
