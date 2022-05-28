conn = new Mongo();
db = conn.getDB("bd_pc2");

db.estudiantes.insert(
  [
   {codigo: '201810239', nombre: 'Claudia', apellido: 'Pacori', email: 'cpacori@abc.com', estado:'M'}
 ]);

