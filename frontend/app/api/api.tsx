import { CompanySearch } from "@/types/company";
import axios from "axios";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    const { data } = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Axios error message: ", error.message);
      return error.message;
    } else if (error instanceof Error) {
      console.log("General error message: ", error.message);
      return error.message;
    } else {
      console.log("An unexpected error occurred");
      return "An unexpected error occurred";
    }
  }
};
