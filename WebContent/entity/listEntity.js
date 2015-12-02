var listEntity;
(function (listEntity) {
    var ListEntity = (function () {
        function ListEntity() {
        }
        Object.defineProperty(ListEntity.prototype, "X", {
            get: function () {
                return this.x;
            },
            set: function (value) {
                this.x = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListEntity.prototype, "Y", {
            get: function () {
                return this.y;
            },
            set: function (value) {
                this.y = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListEntity.prototype, "Result", {
            get: function () {
                return this.result;
            },
            set: function (value) {
                this.result = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListEntity.prototype, "ResultList", {
            set: function (value) {
                this.resultList = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListEntity.prototype, "ReslutList", {
            get: function () {
                return this.resultList;
            },
            enumerable: true,
            configurable: true
        });
        return ListEntity;
    })();
    listEntity.ListEntity = ListEntity;
    var Test = (function () {
        function Test() {
        }
        Object.defineProperty(Test.prototype, "X", {
            get: function () {
                return this.x;
            },
            set: function (value) {
                this.x = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Test.prototype, "Y", {
            get: function () {
                return this.y;
            },
            set: function (value) {
                this.y = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Test.prototype, "Result", {
            get: function () {
                return this.result;
            },
            set: function (value) {
                this.result = value;
            },
            enumerable: true,
            configurable: true
        });
        return Test;
    })();
})(listEntity || (listEntity = {}));
var myApp = angular.module('myApp');
myApp.controller('listEntity', [listEntity.ListEntity]);
//# sourceMappingURL=listEntity.js.map