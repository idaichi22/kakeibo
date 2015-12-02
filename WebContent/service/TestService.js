var testService;
(function (testService) {
    var TestService = (function () {
        function TestService($http) {
            this.$http = $http;
            this.$http = $http;
        }
        TestService.prototype.serviceAdd = function (dto) {
            return this.$http.post("http://localhost:8080/TestWeb/rest/add/post", dto).then(function (response) {
                return response.data;
            }).catch(function () {
                alert("error");
            });
        };
        return TestService;
    })();
    testService.TestService = TestService;
})(testService || (testService = {}));
var add = angular.module("myApp");
add.service('TestService', ['$http', testService.TestService]);
//# sourceMappingURL=TestService.js.map