var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = new Schema({
    codigo: {type: String, required: true, max: 20},
    descripcion: {type: String, required: true, max: 50},
    stock: {type: Number, required: true},
    precio: {type: Number, required: true},
    marca: {type: String, required: true, max: 20},
    modelo: {type: String, required: true, max: 20},
    categoria: {type: String, required: true, max:20},
    fecha_produccion: { type: String, required: true}
});

module.exports = mongoose.model('Producto', ProductoSchema);
