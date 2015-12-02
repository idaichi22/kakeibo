var listService;
(function (listService) {
    var ListService = (function () {
        function ListService($http) {
            this.$http = $http;
        }
        ListService.prototype.serviceListGet = function () {
            return this.$http.get("http://localhost:8080/TestWeb/rest/list/get").then(function (response) {
                return response.data.resultList;
            }).catch(function () {
                alert("error");
            });
        };
        return ListService;
    })();
    listService.ListService = ListService;
})(listService || (listService = {}));
var add = angular.module("myApp");
add.service('listService', ['$http', listService.ListService]);
//# sourceMappingURL=ListService.js.map