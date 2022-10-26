
class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre=nombre
        this.apellido=apellido
        this.libros=libros
        this.mascotas=mascotas
    }
    getFullName(){
        console.log(`el nombre completo es: ${this.nombre} ${this.apellido}`);
    }
    addMascota(nombreDeMascota){
        this.mascotas.push(nombreDeMascota);
    }
    countMascotas(){
        console.log(`cantidad de mascotas que tiene ${this.nombre}: ${this.mascotas.length}`);
    }
    addBook(nombreDelLibro, autorDelLibro){
        this.libros.push({nombre: nombreDelLibro, autor: autorDelLibro});
    }
    getBookNames(){
        const nombreDeLibros = this.libros.map((libro)=>libro.nombre);
        console.log(`libros de ${this.nombre}: ${nombreDeLibros}`);
    }
}





const usuario = new Usuario("Emilio", "Martinez", [{nombre: "el señor de los anillos", autor: "J. J. R. Tolkien"}],["manchita"]);

usuario.getFullName();

usuario.addMascota("bigotes");

usuario.countMascotas();

usuario.addBook("juego de tronos", "George R. R. Martin");

usuario.getBookNames();

