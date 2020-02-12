"use strict";
var geometria;
(function (geometria) {
    let Area;
    (function (Area) {
        function Retangulo(base, altura) {
            return base * altura;
        }
        Area.Retangulo = Retangulo;
    })(Area = geometria.Area || (geometria.Area = {}));
})(geometria || (geometria = {}));
//# sourceMappingURL=geometriaRect.js.map