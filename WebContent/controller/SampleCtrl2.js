var test2;
(function (test2) {
    var SampeStrl2 = (function () {
        function SampeStrl2($scope, $state, listService) {
            this.$scope = $scope;
            this.$state = $state;
            this.listService = listService;
            this.$scope.home = this.home.bind(this);
            this.init();
        }
        SampeStrl2.prototype.home = function () {
            this.$state.go('home');
        };
        SampeStrl2.prototype.init = function () {
            var _this = this;
            var test = this.listService.serviceListGet().then(function (data) {
                _this.$scope.results = data;
            });
            //            var testResults: Array<listEntity.ListEntity> = new Array();
            //            var result: listEntity.ListEntity = new listEntity.ListEntity();
            //            result.X = "1";
            //            result.Y = "2";
            //            result.Result = "4";
            //            testResults[0] = result;
            //            return testResults;
        };
        return SampeStrl2;
    })();
    test2.SampeStrl2 = SampeStrl2;
})(test2 || (test2 = {}));
var myApp = angular.module('myApp');
myApp.controller('SampleCtrl2', ['$scope', '$state', 'listService', test2.SampeStrl2]);
//# sourceMappingURL=SampleCtrl2.js.map