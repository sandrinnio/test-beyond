"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("./utils");
const getInfluencers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield axios_1.default.get("http://localhost:5000");
        const topInfluencersPerCategory = (0, utils_1.getMostFollowedPerCategory)(data);
        const topInfluencersPerCountry = (0, utils_1.getMostFollowedPerCountry)(data);
        return { topInfluencersPerCategory, topInfluencersPerCountry };
    }
    catch (error) {
        console.error("error: ", error);
    }
});
getInfluencers().then(console.log);
//# sourceMappingURL=index.js.map