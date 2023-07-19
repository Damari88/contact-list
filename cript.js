const btn = document.querySelector("[data-form-btn]");

console.log(btn);

btn.addEventListener("click",  function () {
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
});

let personas=[
    {
        nombreApellidos: "Jose Ochoa",
        id: "0101-1985-03364",
        teléfono: 9483-9328,
        ubicacion: "Honduras, Atlántida",
        ciudad: "La Ceiba",
        dirección:"Col. Irías Navas" 


    }
]
function agregarContactos(nombreApellidos, id, teléfono, ubicacio,   ciudad, dirección){
    let nuevo = {
      
        nombreApellidos: nombreApellidos,
        id: id,
        teléfono: teléfono ,
        ubicacio:  ubicacio,
        ciudad:  ciudad,
        dirección: dirección,
    }
    personas.push(nuevo); //esto es un array
    console.log(nuevo);
}
agregarContactos("Jannet Molina","0501-1976-30036",9970-5959, "Honduras,San Pedro Sula", "Cortez","col.satelite 1 etapa");
agregarContactos("Wilfredo Dilbert","0101-1968-22907",9438-9396,"Honduras, Atlántida","La Ceiba","col.Miramar");
agregarContactos("Juan Ochoa","01010-1998 47390",3274-4278,"Honduras, Atlántida","La Ceiba","Col.Irias Navas");