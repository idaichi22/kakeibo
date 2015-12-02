module test2 {

    interface test2Scope extends ng.IScope {
        home(): void;
        results: Array<listEntity.ListEntity>;
    }

    export class SampeStrl2 {

        constructor(private $scope: test2Scope, private $state: ng.ui.IStateService, private listService: listService.ListService) {

            this.$scope.home = this.home.bind(this);
            this.init();
        }

        home(): void {
            this.$state.go('home');
        }

        init(): void {

            var test = this.listService.serviceListGet().then(
                (data: Array<listEntity.ListEntity>): void => {
                    this.$scope.results = data;
                }
            );

            //            var testResults: Array<listEntity.ListEntity> = new Array();
            //            var result: listEntity.ListEntity = new listEntity.ListEntity();
            //            result.X = "1";
            //            result.Y = "2";
            //            result.Result = "4";
            //            testResults[0] = result;
            //            return testResults;
        }

    }
}


var myApp = angular.module('myApp');
myApp.controller('SampleCtrl2', ['$scope', '$state', 'listService', test2.SampeStrl2]);