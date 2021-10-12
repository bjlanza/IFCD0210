module.exports = (app) => {
    const alumnos = require("../controllers/alumno.controller.js");
  
    app.post("/alumno", alumnos.create);
    
    app.get("/alumno", alumnos.findAll);
  
    app.put("/alumno/:idalumno", alumnos.update);
  
    app.delete("/alumno/:idalumno", alumnos.delete);
  };
  
