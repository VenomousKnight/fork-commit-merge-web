/* eslint-disable import/no-anonymous-default-export */
import {
  getTopThreeUsersFromDb,
  storeTopThreeUsersInDb,
} from "../../utils/fetchTopUsersFromDb";
import { fetchTopThreeUsersByPullRequests } from "../../utils/fetchTopThreeUsersByPullRequests";

export default async (req, res) => {
  try {
    let data = await getTopThreeUsersFromDb();

    if (!data || data.length === 0) {
      data = await fetchTopThreeUsersByPullRequests(
        "nikohoffren/fork-commit-merge"
      );
      await storeTopThreeUsersInDb(data);
    }

    const topThreeData = data.slice(0, 3);

    return res.status(200).json(topThreeData);
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
