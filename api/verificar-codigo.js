import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

const codigosPath = path.resolve('./api.codigos.json');
let codigos = JSON.parse(readFileSync(codigosPath));

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ mensaje: 'Método no permitido' });
  }

  const { codigo } = req.body;

  if (!codigo) {
    return res.status(400).json({ mensaje: 'Código no ingresado' });
  }

  const codigoMayus = codigo.trim().toUpperCase();

  if (codigos[codigoMayus]) {
    // Guardamos que ya se usó
    delete codigos[codigoMayus];
    writeFileSync(codigosPath, JSON.stringify(codigos, null, 2));

    return res.status(200).json({ premio: true, mensaje: codigos[codigoMayus] });
  } else {
    return res.status(200).json({ premio: false });
  }
}
