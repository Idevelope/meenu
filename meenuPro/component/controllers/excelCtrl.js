/**
 * Created by sheel on 16/7/15.
 */
app.controller('ExcelController', [
    '$scope',
    '$firebaseObject',
    'trackNodesFactory',
    'projectFactory',
    function($scope,$firebaseObject, trackNodesFactory, projectFactory) {
        var ref = new Firebase("https://simpleex.firebaseio.com/data");
        // download the data into a local object
        var syncObject = $firebaseObject(ref);
        // synchronize the object with a three-way data binding
        // click on `index.html` above to see it used in the DOM!
        syncObject.$bindTo($scope, "data");
        projectFactory.init();
        trackNodesFactory();
        projectFactory.addGuest(uniqueId(), {name:"sheel", lastname:"gautam"});
        $scope.gridOptions = {
            enableSorting: true,
            enableCellSelection: true,
            enableCellEditOnFocus: true,
            onRegisterApi: function (gridApi) {
                $scope.gridApi = gridApi;
                gridApi.edit.on.afterCellEdit($scope, function (rowEntity, colDef, newValue, oldValue) {
                    $scope.$apply();
                    //alert(rowEntity);
                    console.log(rowEntity + colDef + newValue + oldValue );
                    var temp = angular.copy(rowEntity);
                    projectFactory.addGuest(uniqueId(),temp);
                });
            },
            columnDefs: [
                { name:'firstName', field: 'firstName' },
                { name:'1stFriend', field: 'lastName' },
                { name:'company', field: 'company'},
                { name:'employed', field: 'employed', enableCellEdit:false}
            ]
//            enableGridMenu: true,
//            enableSelectAll: true,
//            exporterCsvFilename: 'myFile.csv',
//            exporterPdfDefaultStyle: {fontSize: 9},
//            exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
//            exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
//            exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
//            exporterPdfFooter: function ( currentPage, pageCount ) {
//                return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
//            },
//            exporterPdfCustomFormatter: function ( docDefinition ) {
//                docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
//                docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
//                return docDefinition;
//            },
//            exporterPdfOrientation: 'portrait',
//            exporterPdfPageSize: 'LETTER',
//            exporterPdfMaxGridWidth: 500,
//            exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location"))

        };
        $scope.gridOptions.enableCellEditOnFocus = true;
        $scope.gridOptions.data = [
            {
                "firstName": "Cox",
                "lastName": "Carney",
                "company": "Enormo",
                "employed": true
            },
            {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "company": "Comveyer",
                "employed": false
            },
            {
                "firstName": "Nancy",
                "lastName": "Waters",
                "company": "Fuelton",
                "employed": false
            }
        ];

        $scope.addData = function() {
            var n = $scope.gridOptions.data.length + 1;
            $scope.gridOptions.data.push({
                "firstName": "New " + n,
                "lastName": "Person " + n,
                "company": "abc",
                "employed": true
            });
        };

        function uniqueId () {
            // always start with a letter (for DOM friendliness)
            var idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
            do {
                // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
                var ascicode = Math.floor((Math.random() * 42) + 48);
                if (ascicode < 58 || ascicode > 64) {
                    // exclude all chars between : (58) and @ (64)
                    idstr += String.fromCharCode(ascicode);
                }
            } while (idstr.length < 32);
            return (idstr);
        }

        //$scope.gridOptions.rowIdentity = function(row) {
        //    alert(row.id);
        //};
        //$scope.gridOptions.getRowIdentity = function(row) {
        //    alert(row.id + "1");
        //};


//
//        $http.get('/data/100.json')
//        .success(function(data) {
//            $scope.gridOptions.data = data;
//        });
//        alert("welcome");
//        $scope.myData = [
//            {
//                "firstName": "Cox",
//                "lastName": "Carney",
//                "company": "Enormo",
//                "employed": true
//            },
//            {
//                "firstName": "Lorraine",
//                "lastName": "Wise",
//                "company": "Comveyer",
//                "employed": false
//            },
//            {
//                "firstName": "Nancy",
//                "lastName": "Waters",
//                "company": "Fuelton",
//                "employed": false
//            }
//        ];
    }]);
/**
 * Created by sheel on 17/7/15.
 */
