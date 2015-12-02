module testService {

    export class TestService {

        constructor(private $http: ng.IHttpService) {
            this.$http = $http
        }

        serviceAdd(dto: addDto.TestInter): ng.IPromise<any> {
            return this.$http.post("http://localhost:8080/TestWeb/rest/add/post", dto).then(
                (response: ng.IHttpPromiseCallbackArg<addEntity.AddEntity>): addEntity.AddEntity => {
                    return response.data;
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
add.service('TestService', ['$http', testService.TestService]);