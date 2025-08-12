function calcularPotenciaTotal() {
  // Prueba manual de piezas seleccionadas (sin depender de localStorage)
  const motorPieces = ['piston', 'turbo']; // simula piezas seleccionadas
  
  let potenciaExtra = 0;
 
  motorPieces.forEach(pieceName => {
    if (piezasMotor[pieceName]) {
      potenciaExtra += piezasMotor[pieceName];
    }
  });

  const potenciaBase = civicConfig.potenciaBaseHP || 150;
  const potenciaTotal = potenciaBase + potenciaExtra;

  return { potenciaBase, potenciaExtra, potenciaTotal };
}