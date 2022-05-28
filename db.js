conn = new Mongo();
db = conn.getDB("bd_pc2");

db.categoria.insert(
  [
   {codigo: 'A204', nombre: 'Silla', descripcion: '4 patas'}
 ]);

