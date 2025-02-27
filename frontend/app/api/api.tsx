import { CompanyProfile, CompanySearch } from "@/types/company";
import axios from "axios";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (
  query: string
): Promise<CompanySearch[]> => {
  try {
    const { data } = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=20&exchange=NASDAQ&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Axios error message: ", error.message);
      return [];
    } else if (error instanceof Error) {
      console.log("General error message: ", error.message);
      return [];
    } else {
      console.log("An unexpected error occurred");
      return [];
    }
  }
};

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log("Error message from api: ", error.message);
  }
};
