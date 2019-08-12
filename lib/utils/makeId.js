"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeId(length) {
    if (length === void 0) { length = 5; }
    var result = 'y';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.default = makeId;
//# sourceMappingURL=makeId.js.map