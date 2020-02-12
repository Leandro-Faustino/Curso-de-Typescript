"use strict";
var geometria;
(function (geometria) {
    let Area;
    (function (Area) {
        const Pi = 3.14;
        function Circunferencia(raio) {
            return Pi * Math.pow(raio, 2);
        }
        Area.Circunferencia = Circunferencia;
    })(Area = geometria.Area || (geometria.Area = {}));
})(geometria || (geometria = {}));
//# sourceMappingURL=geometriaCirc.js.map