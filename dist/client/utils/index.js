"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMostFollowedPerCategory = exports.getMostFollowedPerCountry = exports.PayloadKey = void 0;
var PayloadKey;
(function (PayloadKey) {
    PayloadKey["Username"] = "Influencer insta name";
    PayloadKey["Name"] = "Influencer name";
    PayloadKey["Category1"] = "category_1";
    PayloadKey["Category2"] = "category_2";
    PayloadKey["Followers"] = "Followers";
    PayloadKey["Country"] = "Audience country(mostly)";
    PayloadKey["Engagement"] = "Authentic engagement\r\n";
    PayloadKey["AvgEngagement"] = "Engagement avg\r\n";
})(PayloadKey = exports.PayloadKey || (exports.PayloadKey = {}));
const getMostFollowedPerCountry = (influencers) => {
    const mostFollowedPerCountry = influencers.reduce((acc, curr) => {
        const country = curr[PayloadKey.Country];
        const engagementAvg = curr[PayloadKey.AvgEngagement].includes("K")
            ? Number(curr[PayloadKey.AvgEngagement].replace("K", "")) * 1000
            : Number(curr[PayloadKey.AvgEngagement].replace("M", "")) * 1000000;
        if (!acc[country]) {
            acc[country] = {
                username: curr[PayloadKey.Username],
                engagementAvg,
            };
        }
        else {
            if (engagementAvg > acc[country].engagementAvg) {
                acc[country] = {
                    username: curr[PayloadKey.Username],
                    engagementAvg,
                };
            }
        }
        return acc;
    }, {});
    return Object.keys(mostFollowedPerCountry).map((item) => ({
        country: item,
        username: mostFollowedPerCountry[item].username,
    }));
};
exports.getMostFollowedPerCountry = getMostFollowedPerCountry;
const getMostFollowedPerCategory = (influencers) => {
    const mostFollowedPerCategory = influencers.reduce((acc, curr) => {
        const category = curr[PayloadKey.Category1];
        const subCategory = curr[PayloadKey.Category2];
        const followers = curr[PayloadKey.Followers].includes("K")
            ? Number(curr[PayloadKey.Followers].replace("K", "")) * 1000
            : Number(curr[PayloadKey.Followers].replace("M", "")) * 1000000;
        if (!acc[category]) {
            acc[category] = {
                username: curr[PayloadKey.Username],
                followers,
            };
        }
        else {
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
        }
        else {
            if (followers > acc[subCategory].followers) {
                acc[subCategory] = {
                    username: curr[PayloadKey.Username],
                    followers,
                };
            }
        }
        return acc;
    }, {});
    return Object.keys(mostFollowedPerCategory).map((item) => ({
        country: item,
        username: mostFollowedPerCategory[item].username,
    }));
};
exports.getMostFollowedPerCategory = getMostFollowedPerCategory;
//# sourceMappingURL=index.js.map