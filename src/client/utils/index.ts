export enum PayloadKey {
  Username = "Influencer insta name",
  Name = "Influencer name",
  Category1 = "category_1",
  Category2 = "category_2",
  Followers = "Followers",
  Country = "Audience country(mostly)",
  Engagement = "Authentic engagement\r\n",
  AvgEngagement = "Engagement avg\r\n",
}

export const getMostFollowedPerCountry = (
  influencers: Record<PayloadKey, string>[]
) => {
  const mostFollowedPerCountry = influencers.reduce((acc, curr) => {
    const country = curr[PayloadKey.Country];
    const engagementAvg = curr[PayloadKey.AvgEngagement].includes("K")
      ? Number(curr[PayloadKey.AvgEngagement].replace("K", "")) * 1_000
      : Number(curr[PayloadKey.AvgEngagement].replace("M", "")) * 1_000_000;
    if (!acc[country]) {
      acc[country] = {
        username: curr[PayloadKey.Username],
        engagementAvg,
      };
    } else {
      if (engagementAvg > acc[country].engagementAvg) {
        acc[country] = {
          username: curr[PayloadKey.Username],
          engagementAvg,
        };
      }
    }
    return acc;
  }, {} as Record<string, { username: string; engagementAvg: number }>);
  return Object.keys(mostFollowedPerCountry).map((item) => ({
    country: item,
    username: mostFollowedPerCountry[item].username,
  }));
};

export const getMostFollowedPerCategory = (
  influencers: Record<PayloadKey, string>[]
) => {
  const mostFollowedPerCategory = influencers.reduce((acc, curr) => {
    const category = curr[PayloadKey.Category1];
    const subCategory = curr[PayloadKey.Category2];
    const followers = curr[PayloadKey.Followers].includes("K")
      ? Number(curr[PayloadKey.Followers].replace("K", "")) * 1_000
      : Number(curr[PayloadKey.Followers].replace("M", "")) * 1_000_000;
    if (!acc[category]) {
      acc[category] = {
        username: curr[PayloadKey.Username],
        followers,
      };
    } else {
      if (followers > acc[category].followers) {
        acc[category] = {
          username: curr[PayloadKey.Username],
          followers,
        };
      }
    }
    if (!acc[subCategory]) {
      acc[subCategory] = {
        username: curr[PayloadKey.Username],
        followers,
      };
    } else {
      if (followers > acc[subCategory].followers) {
        acc[subCategory] = {
          username: curr[PayloadKey.Username],
          followers,
        };
      }
    }
    return acc;
  }, {} as Record<string, { username: string; followers: number }>);
  return Object.keys(mostFollowedPerCategory).map((item) => ({
    country: item,
    username: mostFollowedPerCategory[item].username,
  }));
};
