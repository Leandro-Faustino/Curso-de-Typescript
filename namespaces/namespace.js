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
        function Retangulo(base, altura) {
            return base * altura;
        }
        Area.Retangulo = Retangulo;
    })(Area = geometria.Area || (geometria.Area = {}));
})(geometria || (geometria = {}));
console.log(geometria.Area.Circunferencia(10));
console.log(geometria.Area.Retangulo(10, 20));
//# sourceMappingURL=namespace.js.map