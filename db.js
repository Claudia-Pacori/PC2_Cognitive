conn = new Mongo();
db = conn.getDB("bd_pc2");

db.usuarios.insert(
  [
   {codigo: 'A204', nombre: 'Silla', descripcion: '4 patas'}
 ]);

