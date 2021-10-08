
class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;
      console.log("this", this);
    }
    getFullName() {
      return ` ${usuario.apellido}, ${usuario.nombre} `;
    }
    addMascota(nombre) {
      this.mascotas.push(nombre);
      return this.mascotas;
    }
    countMascotas() {
      return this.mascotas.length ? this.mascotas.length : "No tiene mascotas.";
    }
    getBookNames() {
      return this.libros.map((libro) => (libro = libro.nombre));
    }
  }
  
  const usuario = new Usuario(
    "Juan Pablo",
    "Pagotto",
    [
      { nombre: "Camino de Servidumbre", autor: "Hayek" },
      { nombre: "La Riqueza", autor: "Adam Smith" },
      { nombre: "Libertad", autor: "Carl Popper" },
    ],
    ["Nala", "Simba", "Timon", "Pumba"]
  );
  
  console.log("usuario", usuario);
  console.log("getFullName", usuario.getFullName());
  console.log("addMascotas", usuario.addMascota("Scar"));
  console.log("countMascotas", usuario.countMascotas());
  console.log("getBookNames", usuario.getBookNames());
