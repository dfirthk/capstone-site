import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "095768fab18f41019538928c56897873",
  },
});

class APICleint<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async getAll(params: Record<string, any> = {}): Promise<FetchResponse<T>> {
    const response = await axiosInstance.get<FetchResponse<T>>(this.endpoint, { params });
    return response.data;
  }

  async getAllPaginated(params: Record<string, any> = {}, maxPages: number = 5): Promise<T[]> {
    let results: T[] = [];
    let nextPage = 1;
    let hasMore = true;

    while (hasMore && nextPage <= maxPages) {
      const data = await this.getAll({ ...params, page: nextPage });
      results = results.concat(data.results);
      hasMore = !!data.next;
      nextPage++;
    }

    return results;
  }

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then(res => res.data);
  };
}

export default APICleint;