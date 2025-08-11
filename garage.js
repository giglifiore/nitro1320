// Lista de piezas del motor con sus valores reales de performance
const piezasMotor = [
    { id: "turbo1", nombre: "Turbo Básico", potencia: 30, torque: 20, imagen: "turbo_basico.png" },
    { id: "turbo2", nombre: "Turbo Avanzado", potencia: 50, torque: 35, imagen: "turbo_avanzado.png" },
    { id: "ecumap1", nombre: "ECU Stage 1", potencia: 15, torque: 10, imagen: "ecu_stage1.png" },
    { id: "ecumap2", nombre: "ECU Stage 2", potencia: 25, torque: 20, imagen: "ecu_stage2.png" }
];

let piezaSeleccionada = null;

const contenedor = document.getElementById("piecesContainer");

piezasMotor.forEach(pieza => {
    const div = document.createElement("div");
    div.classList.add("piece");
    div.innerHTML = `
        <h3>${pieza.nombre}</h3>
        <p>Potencia: +${pieza.potencia} HP</p>
        <p>Torque: +${pieza.torque} Nm</p>
        <img src="${pieza.imagen}" width="100">
    `;
    div.addEventListener("click", () => {
        document.querySelectorAll(".piece").forEach(el => el.classList.remove("selected"));
        div.classList.add("selected");
        piezaSeleccionada = pieza;
    });
    contenedor.appendChild(div);
});

document.getElementById("saveBtn").addEventListener("click", () => {
    if (!piezaSeleccionada) {
        alert("Selecciona una pieza primero");
        return;
    }
    // Guardar selección en localStorage
    localStorage.setItem("piezaMotorSeleccionada", JSON.stringify(piezaSeleccionada));
    // Volver al juego
    window.location.href = "index.html";
});
