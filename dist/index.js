/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/citas.js":
/*!*****************************!*\
  !*** ./src/server/citas.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\nvar router = express.Router();\n//coneccion con la base de datos\nconst db = __webpack_require__(/*! ./db */ \"./src/server/db.js\");\n//queries para las citas\nvar QUERIES = __webpack_require__(/*! ./citas.queries */ \"./src/server/citas.queries.js\");\n\n//obtener todas las citas\nrouter.get(\"/\", (req, res) => {\n  db.query(QUERIES.SELECT_ALL_CITAS, (err, resul) => {\n    if (err) {\n      return res.send(err);\n    } else {\n      return res.json({\n        data: resul\n      });\n    }\n  });\n});\n//crear una nueva cita\nrouter.post(\"/\", (req, res) => {\n  const data = req.body;\n  db.query(QUERIES.INSERT_CITAS, data, (err, resul) => {\n    if (err) {\n      return err;\n    } else {\n      return res.send(\"Cita agregada correctamente!\");\n    }\n  });\n});\n\nmodule.exports = router;\n\n\n//# sourceURL=webpack:///./src/server/citas.js?");

/***/ }),

/***/ "./src/server/citas.queries.js":
/*!*************************************!*\
  !*** ./src/server/citas.queries.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// query para obtener todas las citas programadas\nconst SELECT_ALL_CITAS =\n  \"SELECT * FROM citas WHERE DATE_FORMAT(fecha, '%Y-%m-%e') <= fecha\";\n\n//query para insertar una nueva cita\nconst INSERT_CITAS = `INSERT INTO citas (nombre,identificacion,telefono,direccion,fecha, horario) VALUES(:nombre, :identificacion, :telefono, :direccion, :fecha, :horario);`;\n\nmodule.exports = { SELECT_ALL_CITAS, INSERT_CITAS };\n\n\n//# sourceURL=webpack:///./src/server/citas.queries.js?");

/***/ }),

/***/ "./src/server/db.js":
/*!**************************!*\
  !*** ./src/server/db.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mysql = __webpack_require__(/*! mysql */ \"mysql\");\n\nconst connection = mysql.createConnection({\n  host: process.env.DB_HOST,\n  user: process.env.DB_USER,\n  password: process.env.DB_PASS,\n  database: process.env.DB_NAME\n});\n\n/**\n * Configuracion para formatear forma segura una consulta \n * @example connection.query(\"UPDATE posts SET title = :title\", { title: \"Hello MySQL\" }); \n */\nconnection.config.queryFormat = function (query, values) {\n    if (!values) return query;\n    return query.replace(/\\:(\\w+)/g, function (txt, key) {\n      if (values.hasOwnProperty(key)) {\n        return this.escape(values[key]);\n      }\n      return txt;\n    }.bind(this));\n  };\n\n//se connecta con la base de datos\nconnection.connect(function(err) {\n  console.log(\"coneccion con la base de datos establecida correctamente\");\n\n  if (err) throw err;\n});\nmodule.exports = connection;\n\n\n//# sourceURL=webpack:///./src/server/db.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// carga variables de entorno del archivo .env\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst express = __webpack_require__(/*! express */ \"express\");\nconst cors = __webpack_require__(/*! cors */ \"cors\");\nconst app = express();\n\n//coneccion con la base de datos\nconst db = __webpack_require__(/*! ./db */ \"./src/server/db.js\");\n//ruta para las citas\nconst citas = __webpack_require__(/*! ./citas */ \"./src/server/citas.js\");\nconsole.log(path.resolve(\"dist/public\"));\n\napp.use(express.static(path.resolve(\"dist/public\")));\n\n// Settings\napp.use(cors());\napp.use(express.json());\napp.set(\"port\", process.env.PORT || 5000);\n\napp.get(\"/\", (req, res) => {\n  res.send(\"Servidor Home\");\n});\n\n//todas las peticiones hacia la ruta '/citas' son resueltas por el modulo ./citas.js\napp.use(\"/citas\", citas);\n\napp.listen(app.get(\"port\"), () => {\n  console.log(\"Server running on port 5000\");\n});\n\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./src/server/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/server/index.js */\"./src/server/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/server/index.js?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });