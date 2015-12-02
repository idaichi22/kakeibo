module listEntity {

    export class ListEntity {
        private x: string;
        private y: string;
        private result: string;
        private resultList: Test[];

        set X(value: string) {
            this.x = value;
        }

        get X(): string {
            return this.x;
        }

        set Y(value: string) {
            this.y = value;
        }

        get Y() {
            return this.y;
        }

        set Result(value: string) {
            this.result = value;
        }

        get Result(): string {
            return this.result;
        }

        set ResultList(value: Test[]) {
            this.resultList = value;
        }

        get ReslutList(): Test[] {
            return this.resultList;
        }

    }

    class Test {
        private x: string;
        private y: string;
        private result: string;

        set X(value: string) {
            this.x = value;
        }

        get X(): string {
            return this.x;
        }

        set Y(value: string) {
            this.y = value;
        }

        get Y() {
            return this.y;
        }

        set Result(value: string) {
            this.result = value;
        }

        get Result(): string {
            return this.result;
        }
    }

}


var myApp = angular.module('myApp');
myApp.controller('listEntity', [listEntity.ListEntity]);