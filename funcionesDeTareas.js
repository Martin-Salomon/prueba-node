let fs = require("fs");

let archivoTareas = {
    leerArchivo: function(){
        let tareasJson = fs.readFileSync("tareas.json", "utf-8");
        return JSON.parse(tareasJson);
    },
    escribirJson: function(tareas){
        tareasJson = JSON.stringify(tareas, null, " ")
        fs.writeFileSync("tareas.json", tareasJson);
    },
    guardarTarea: function(tarea){
        // leer el array de tareas
        let tareas = this.leerArchivo();
        // agregamos la tarea al final del array
        tareas.push(tarea);
        // guardamos en el json
        this.escribirJson(tareas);
    },
    filtrarPorEstado: function(estado){
        // leer el array de tareas
        let tareas = this.leerArchivo();
        // utilizamos un filter para crear el nuevo array ya filtrado
        let tareasFiltradas = tareas.filter((tarea) => {
            return tarea.estado === estado;
        });
        // devolvemos el array ya filtrado
        return tareasFiltradas;
    }
}

module.exports = archivoTareas;

console.log();