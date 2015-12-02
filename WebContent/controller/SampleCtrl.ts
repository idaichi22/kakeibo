module test {

    interface testScope extends ng.IScope {
        dto: addDto.TestInter;
        entity: addEntity.AddEntity;
        add(): void;
        routing():void;
    }


    export class SampleCtrl {

        testSv: testService.TestService;
        $scope: testScope;
        $state: ng.ui.IStateService;

        constructor($scope: testScope, $state, testService: testService.TestService) {
            this.$scope = $scope;
            this.testSv = testService;
            this.$scope.add = this.add.bind(this);
            this.$state = $state;
            this.$scope.routing = this.routing.bind(this);

        }

        add() {
            var test = this.testSv.serviceAdd(this.$scope.dto).then(
                (data: addEntity.AddEntity): void => {
                    this.$scope.entity = data;
                }
            );
        }

        routing() {
           this.$state.go('rireki');
        }
    }
}

var app = angular.module('myApp')
app.controller('SampleCtrl', ['$scope', '$state','TestService', test.SampleCtrl]);
