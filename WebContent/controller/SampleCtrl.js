var test;
(function (test_1) {
    var SampleCtrl = (function () {
        function SampleCtrl($scope, $state, testService) {
            this.$scope = $scope;
            this.testSv = testService;
            this.$scope.add = this.add.bind(this);
            this.$state = $state;
            this.$scope.routing = this.routing.bind(this);
        }
        SampleCtrl.prototype.add = function () {
            var _this = this;
            var test = this.testSv.serviceAdd(this.$scope.dto).then(function (data) {
                _this.$scope.entity = data;
            });
        };
        SampleCtrl.prototype.routing = function () {
            this.$state.go('rireki');
        };
        return SampleCtrl;
    })();
    test_1.SampleCtrl = SampleCtrl;
})(test || (test = {}));
var app = angular.module('myApp');
app.controller('SampleCtrl', ['$scope', '$state', 'TestService', test.SampleCtrl]);
//# sourceMappingURL=SampleCtrl.js.map