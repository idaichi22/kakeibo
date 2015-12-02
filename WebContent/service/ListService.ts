module listService {

    export class ListService {

        constructor(private $http: ng.IHttpService) {
        }

        serviceListGet(): ng.IPromise<any> {
            return this.$http.get("http://localhost:8080/TestWeb/rest/list/get").then(
                (response: ng.IHttpPromiseCallbackArg<Array<listEntity.ListEntity>>): Array<listEntity.ListEntity> => {
                    return response.data.resultList;
                }
            ).catch(
                () => {
                    alert("error");
                }
                );
        }
    }
}

var add = angular.module("myApp");
add.service('listService', ['$http', listService.ListService]);