function modulo(cedula, factor, mod) {
  let digitoComparar = 9;
  if (cedula[2] == 6) {
    //console.log('corrige 6');
    digitoComparar--;
  }
  let suma = 0;
  if (mod == 11) {
    for (let i = 0; i < factor.length; i++) {
      suma += parseInt(cedula[i]) * parseInt(factor[i]);
      //console.log(parseInt(cedula[i]), parseInt(factor[i]));
    }
  }

  if (mod == 10) {
    for (let i = 0; i < factor.length; i++) {
      let temp = parseInt(cedula[i]) * factor[i];
      if (temp > 9) temp -= 9;
      suma += temp;
    }
  }
  //console.log('posicion compara', digitoComparar);
  //console.log('suma', suma, 'mod', mod, 'resultado', mod - (suma % mod));
  return parseInt(cedula[digitoComparar]) == mod - (suma % mod);
}

export function ValidarCedula(cedula): boolean {
  if (!cedula || (cedula.length != 10 && cedula.length != 13)) return false;
  const factorcedula = {
    0: [2, 1, 2, 1, 2, 1, 2, 1, 2],
    9: [4, 3, 2, 7, 6, 5, 4, 3, 2],
    6: [3, 2, 7, 6, 5, 4, 3, 2],
  };
  try {
    cedula = cedula.toString();
    const separada = cedula.split('').map(Number);
    if (separada.findIndex(Number.isNaN) > 0) return false;
    //console.log('arreglo' + separada);
    //primera comparacion
    if (parseInt(separada[0] + separada[1]) > 24) return false;
    if (parseInt(separada[2]) > 6 && parseInt(separada[2]) != 9) return false;

    //console.log('para switch', separada[2]);
    switch (separada[2]) {
      case 9:
        //console.log('entra a 9');
        return modulo(separada, factorcedula[9], 11);

      case 6:
        //console.log('entra a 6');
        return modulo(separada, factorcedula[6], 11);
      default:
        //console.log('entra a 0');
        return modulo(separada, factorcedula[0], 10);
    }
  } catch (e) {
    //console.log('cedula invalida por error:', e);
    return false;
  }
}
