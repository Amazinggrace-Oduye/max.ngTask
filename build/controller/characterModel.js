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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovieCharacters = void 0;
var axios_1 = __importDefault(require("axios"));
var getMovieCharacters = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var sortBy, direction, gender, id, response, info, characterArray, characterUrl, i, characterDetails, characterData, result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 7, , 8]);
                sortBy = req.query.sortBy;
                direction = req.query.direction;
                gender = req.query.gender;
                id = req.params.id;
                if (id > 6 || id < 1)
                    return [2 /*return*/, res.status(400).json({ message: ' bad request' })];
                return [4 /*yield*/, axios_1.default.get("https://swapi.dev/api/films/" + id)];
            case 1:
                response = _a.sent();
                info = response.data;
                characterArray = [];
                characterUrl = '';
                i = 0;
                _a.label = 2;
            case 2:
                if (!(i < info.characters.length)) return [3 /*break*/, 5];
                characterUrl = info.characters[i];
                return [4 /*yield*/, axios_1.default.get(characterUrl)];
            case 3:
                characterDetails = _a.sent();
                characterData = characterDetails.data;
                characterArray.push(characterData);
                _a.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 2];
            case 5: return [4 /*yield*/, fetchAPI(gender, sortBy, direction, characterArray)];
            case 6:
                result = _a.sent();
                console.log(result);
                if (!result) {
                    return [2 /*return*/, res.status(404).json({ message: "Error data not found" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "Successful", result: result })];
            case 7:
                error_1 = _a.sent();
                console.log(error_1.message);
                return [2 /*return*/, res.status(400).json({ message: 'Error retrieving Data' })];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.getMovieCharacters = getMovieCharacters;
function fetchAPI(gender, sortBy, direction, characterArray) {
    if (gender === void 0) { gender = ''; }
    if (sortBy === void 0) { sortBy = "id"; }
    if (direction === void 0) { direction = "asc"; }
    return __awaiter(this, void 0, void 0, function () {
        var data, sortValue, genderValue;
        return __generator(this, function (_a) {
            sortValue = ['height', 'name'];
            genderValue = ['male', 'female'];
            if (sortValue.includes(sortBy)) {
                if (direction == 'asc') {
                    data = characterArray.sort(function (a, b) { return a[sortBy] - b[sortBy]; });
                    // return data
                }
                else if (direction == 'desc') {
                    data = characterArray.sort(function (a, b) { return b[sortBy] - a[sortBy]; });
                    // return data
                }
                else {
                    throw new Error("sortBy parameter is invalid");
                }
            }
            else {
                throw new Error("sortBy parameter is invalid");
            }
            if (genderValue.includes(gender)) {
                data = characterArray.filter(function (item) { return item.gender === gender; });
            }
            return [2 /*return*/, data];
        });
    });
}
