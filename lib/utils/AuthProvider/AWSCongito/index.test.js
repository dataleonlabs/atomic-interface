"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
require("whatwg-fetch");
var index_1 = __importDefault(require("./index"));
describe('AWSCognitoLoginProvier', function () {
    var poolId = 'eu-central-1_5jBnZEuMX';
    var poolWebClientId = '543up50u5glbg9qlpkuhop779t';
    var regionName = 'eu-central-1';
    it('U-TEST-1 - Test configure with AWS Cognito', function () {
        var awsCognitoLoginProvier = new index_1.default();
        var configResult = awsCognitoLoginProvier.configure({
            // OPTIONAL - Amazon Cognito User Pool ID
            userPoolId: poolId,
            userPoolWebClientId: poolWebClientId,
            // REQUIRED - Amazon Cognito Region
            region: regionName,
        });
        expect(JSON.stringify(configResult)).toContain(poolId);
    });
    it('U-TEST-2 - Test login', function () { return __awaiter(_this, void 0, void 0, function () {
        var awsCognitoLoginProvier, signInCredentials, signInResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    awsCognitoLoginProvier = new index_1.default();
                    awsCognitoLoginProvier.configure({
                        // OPTIONAL - Amazon Cognito User Pool ID
                        userPoolId: poolId,
                        userPoolWebClientId: poolWebClientId,
                        // REQUIRED - Amazon Cognito Region
                        region: regionName,
                    });
                    signInCredentials = { email: 'gerard@youngapp.co', password: "Tµtij5fXY77€/5" };
                    return [4 /*yield*/, awsCognitoLoginProvier.signIn(signInCredentials)];
                case 1:
                    signInResult = _a.sent();
                    expect(typeof signInResult.username).toEqual('string');
                    expect(typeof signInResult.signInUserSession.refreshToken.token).toEqual('string');
                    expect(typeof signInResult.signInUserSession.accessToken.jwtToken).toEqual('string');
                    return [2 /*return*/];
            }
        });
    }); });
    it('U-TEST-3 - Test error NotAuthorizedException', function () { return __awaiter(_this, void 0, void 0, function () {
        var awsCognitoLoginProvier, signInCredentials, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    awsCognitoLoginProvier = new index_1.default();
                    awsCognitoLoginProvier.configure({
                        // OPTIONAL - Amazon Cognito User Pool ID
                        userPoolId: poolId,
                        userPoolWebClientId: poolWebClientId,
                        // REQUIRED - Amazon Cognito Region
                        region: regionName,
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    signInCredentials = { email: 'gerard@youngapp.co', password: '8NL4:@x&W-Zs[q}]' };
                    return [4 /*yield*/, awsCognitoLoginProvier.signIn(signInCredentials)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    expect(e_1.code).toContain('NotAuthorizedException');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    it('U-TEST-4 - Test error UserNotFoundException', function () { return __awaiter(_this, void 0, void 0, function () {
        var awsCognitoLoginProvier, signInCredentials, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    awsCognitoLoginProvier = new index_1.default();
                    awsCognitoLoginProvier.configure({
                        // OPTIONAL - Amazon Cognito User Pool ID
                        userPoolId: poolId,
                        userPoolWebClientId: poolWebClientId,
                        // REQUIRED - Amazon Cognito Region
                        region: regionName,
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    signInCredentials = { email: 'gerarddfdfdf@youngapp.co', password: '8NL4:@x&W-Zs[q}]' };
                    return [4 /*yield*/, awsCognitoLoginProvier.signIn(signInCredentials)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    expect(e_2.code).toContain('UserNotFoundException');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=index.test.js.map