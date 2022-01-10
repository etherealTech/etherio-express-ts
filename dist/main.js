"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var app_1 = require("@core/app");
app_1.app.listen(config_1.PORT, function () {
    return console.log("Your app is running on http://localhost:%d", config_1.PORT);
});
//# sourceMappingURL=main.js.map