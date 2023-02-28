import axios from "axios";
import { getMostFollowedPerCategory, getMostFollowedPerCountry } from "./utils";

const getInfluencers = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000");
    const topInfluencersPerCategory = getMostFollowedPerCategory(data);
    const topInfluencersPerCountry = getMostFollowedPerCountry(data);
    return { topInfluencersPerCategory, topInfluencersPerCountry };
  } catch (error) {
    console.error("error: ", error);
  }
};

getInfluencers().then(console.log);
