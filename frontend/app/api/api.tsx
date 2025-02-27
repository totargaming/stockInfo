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
    return data.data;
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    console.error("Error message from api: ", (error as any).message);
    return [];
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
