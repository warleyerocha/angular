/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular
        .module('pessoas', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'listar.html'
                    })
                    .when('/pessoa/adicionar', {
                        templateUrl: 'adicionar.html',
                        controller: 'CtrlAdicionar'
                    })
                    .when('/pessoa/editar/:index', {
                        templateUrl: 'editar.html',
                        controller: 'CtrlEditar'
                    });
        })
        .controller('CtrlPessoas', function ($scope) {
            $scope.pessoas = [
                {nome: "maria", cidade: "guarapari"},
                {nome: "joao", cidade: "vitoria"},
                {nome: "jose", cidade: "sete lagoas"},
                {nome: "nilce", cidade: "prudente"},
                {nome: "warley", cidade: "bh"}
            ];
            $scope.remover = function(index){
                   $scope.pessoas.splice(index,1);                   
            };
        })
        .controller('CtrlAdicionar', function ($scope) {
            $scope.adicionar = function () {
                $scope.pessoas.push($scope.pessoa);
                $scope.pessoa = "";
                $scope.result = "Registro adicionado com sucesso!";
            };
        })
        .controller('CtrlEditar', function ($scope, $routeParams) {
            $scope.pessoa = $scope.pessoas[$routeParams.index];            
        });
        
