import { useState } from 'react';

function ResultadoSoma({ a, b }) {
  const [values, setValues] = useState({ a, b });
  const resultado = values.a + values.b;

  function onChange(ev) {
    setValues({
      ...values,
      [ev.target.name]: Number(ev.target.value),
    });
  }

    return (
    <div>
      <input type="text" name='a' placeholder='a' value={values.a} onChange={onChange} />
      <input type="text" name='b' placeholder='b' value={values.b} onChange={onChange} />
      <div> A soma de {values.a} + {values.b} = {resultado} </div> 
    </div>
    );
}

export default function PagesCalculadora() {
  return (
    <div>
      <header>
        <h1> Calculadora </h1>
      </header>
      <ResultadoSoma a={0} b={0} />
    </div>
  );
}