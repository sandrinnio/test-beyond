"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const papaparse_1 = __importDefault(require("papaparse"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const port = 5000;
app.get("/", (req, res) => {
    const csvFilePath = path_1.default.join(path_1.default.resolve("./", "data"), "influencers.csv");
    const csvFile = fs_1.default.readFileSync(csvFilePath, "utf-8");
    const influencers = papaparse_1.default.parse(csvFile, { header: true }).data;
    res.json(influencers);
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map