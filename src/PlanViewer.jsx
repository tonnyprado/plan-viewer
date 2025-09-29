// src/PlanViewer.jsx
import React from "react";

const cardHover =
  "card bg-base-200 transition-all duration-200 " +
  "hover:-translate-y-0.5 hover:shadow-xl hover:ring-1 hover:ring-primary/30 hover:bg-secondary/20";

function Table({ columns, rows }) {
  return (
    <div className="overflow-x-auto rounded-box border border-base-300 bg-base-100 transition-all duration-200 hover:ring-1 hover:ring-primary/30 hover:shadow-lg">
      <table className="table table-zebra text-sm">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c} className="font-semibold">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, idx) => (
            <tr key={idx} className="align-top transition-colors duration-150 hover:bg-secondary/20">
              {r.map((cell, i) => (
                <td key={i} className="py-3">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PlanViewer() {
  const compras = [
    { item: "Pechuga de pollo", qty: "7 kg", price: 525 },
    { item: "Huevo", qty: "5 docenas", price: 250 },
    { item: "Atún en agua (lata)", qty: "10 pzas", price: 200 },
    { item: "Lenteja / frijol", qty: "3 kg", price: 120 },
    { item: "Arroz (blanco o integral)", qty: "4 kg", price: 120 },
    { item: "Avena", qty: "3 kg", price: 100 },
    { item: "Frutas surtidas", qty: "—", price: 200 },
    { item: "Verduras surtidas", qty: "—", price: 260 },
    { item: "Aceite + semillas", qty: "1 L + 250 g", price: 150 },
    { item: "Condimentos básicos", qty: "—", price: 25 },
  ];
  const total = compras.reduce((s, r) => s + r.price, 0);

  const plan = [
    { comida: "Desayuno", comp: "Avena 90 g + plátano + 4 claras + 1 huevo · canela", macros: "40 / 75 / 10" },
    { comida: "Snack 1", comp: "1 lata de atún + 3 tortillas de maíz + pico de gallo", macros: "30 / 40 / 6" },
    { comida: "Comida", comp: "Pechuga 180 g + arroz 200 g cocido + brócoli 150 g + 1 cdita aceite", macros: "45 / 70 / 15" },
    { comida: "Snack 2 (pre/post)", comp: "2 manzanas + 2 cdas crema de cacahuate", macros: "10 / 50 / 15" },
    { comida: "Cena", comp: "Pollo 150 g + lentejas 150 g + verduras salteadas + 1 cdita aceite", macros: "40 / 35 / 12" },
    { comida: "Snack 3 (rotativo)", comp: "Opciones sin lácteos (abajo) o 1 vez/semana yogur", macros: "≈15 / 20–30 / 8–12" },
  ];

  const snacks = [
    { name: "Atún rápido", ing: "1 lata de atún + 3 galletas integrales o 1 tortilla", macros: "20 / 15 / 4" },
    { name: "Hummus + verduras", ing: "4 cdas hummus + bastones de zanahoria/pepino", macros: "10 / 25 / 8" },
    { name: "Rollitos de pavo", ing: "100 g pechuga de pavo + 1/2 aguacate", macros: "18 / 10 / 8" },
    { name: "Fruta + crema de cacahuate", ing: "1 manzana + 1 cda crema de cacahuate", macros: "6 / 30 / 10" },
    { name: "Proteína vegetal", ing: "20 g proteína de arveja/soya en agua + 20 g almendras", macros: "15 / 20 / 12" },
  ];

  const objetivos = [
    { v: "≈160 g", l: "Proteína" },
    { v: "≈320 g", l: "Carbohidratos" },
    { v: "≈70 g", l: "Grasas" },
  ];

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Hero / encabezado */}
      <section className="border-b border-base-300 bg-secondary/20">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">
            Plan alimenticio económico — Tony Prado
          </h1>
          <p className="opacity-80 mt-1">
            Meta: subir de 75 → 80 kg. Presupuesto: ≤ <b>$2,000 MXN/mes</b>. Objetivo calórico: <b>≈ 2,700 kcal/día</b>.
          </p>
          <div className="mt-3 flex flex-wrap gap-2 items-center">
            <span className="badge badge-outline badge-accent">2,700 kcal/día</span>
            <button onClick={() => window.print()} className="btn btn-primary btn-sm md:btn-md">
              Descargar PDF
            </button>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        {/* 1) Objetivos + Tips */}
        <section className="grid md:grid-cols-2 gap-4">
          <article className={cardHover}>
            <div className="card-body">
              <h2 className="card-title">Resumen de objetivos</h2>
              <p className="opacity-80">Macronutrientes para ganar músculo sin acumular mucha grasa:</p>

              <div className="grid grid-cols-3 gap-2 mt-3">
                {objetivos.map((k) => (
                  <div
                    key={k.l}
                    className="rounded-box border border-base-300 bg-base-100 p-3 text-center transition-all duration-200 hover:ring-1 hover:ring-primary/30 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <div className="text-lg font-extrabold">{k.v}</div>
                    <div className="opacity-70 text-sm">{k.l}</div>
                  </div>
                ))}
              </div>

              <div className="alert alert-info mt-3">
                <span>Ajusta ±100–200 kcal según progreso cada 2 semanas.</span>
              </div>
            </div>
          </article>

          <article className={cardHover}>
            <div className="card-body">
              <h2 className="card-title">Tips rápidos</h2>
              <ul className="space-y-2">
                {[
                  "Compra a granel (arroz, avena, frijol/lenteja) y aprovecha ofertas de pollo/atún.",
                  "Meal prep 2–3 veces/semana y congela porciones.",
                  "Pre-entreno: fruta + carbo simple; Post-entreno: proteína + arroz/tortilla.",
                  "Si no subes peso en 2 semanas, añade 30 g de arroz o avena al día.",
                ].map((t, i) => (
                  <li
                    key={i}
                    className="rounded-box border border-base-300 bg-base-100 p-3 transition-all duration-200 hover:ring-1 hover:ring-primary/30 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        {/* 2) Lista de compras */}
        <section className={cardHover}>
          <div className="card-body space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="card-title">Lista de compras + precios (≤ $2,000 MXN)</h2>
              <span className="badge badge-outline badge-success">
                Total estimado: ${total} MXN
              </span>
            </div>
            <p className="opacity-70 text-sm">Precios de referencia CDMX (septiembre 2025). Ajusta según mercado/tienda.</p>

            <Table
              columns={["Alimento", "Cantidad aprox.", "Precio"]}
              rows={compras.map((r) => [r.item, r.qty, `$${r.price}`])}
            />
            <p className="opacity-70 text-sm">Puedes mover cantidades según ofertas manteniendo el total ≤ $2,000 MXN.</p>
          </div>
        </section>

        {/* 3) Plan alimenticio */}
        <section className={cardHover}>
          <div className="card-body space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="card-title">Plan alimenticio diario (≈ 2,700 kcal)</h2>
              <span className="badge badge-outline badge-warning">Ajusta por apetito/entreno</span>
            </div>

            <Table
              columns={["Comida", "Composición", "Macros (P/C/G)"]}
              rows={plan.map((r) => [r.comida, r.comp, r.macros])}
            />

            <p className="opacity-70 text-sm">Si no subes ~0.3 kg/semana, añade 30 g de arroz/avena por día.</p>
          </div>
        </section>

        {/* 4) Snacks */}
        <section className={cardHover}>
          <div className="card-body space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="card-title">Snack 3 — Rotación sin lácteos</h2>
              <span className="badge badge-outline badge-success">200–250 kcal</span>
            </div>

            <Table
              columns={["Opción", "Ingredientes", "Macros (P/C/G)"]}
              rows={snacks.map((s) => [s.name, s.ing, s.macros])}
            />

            <p className="opacity-70 text-sm">
              Usa opciones altas en proteína (Atún/Pavo/Proteína vegetal) los días de entreno pesado.
            </p>
          </div>
        </section>

        {/* 5–6) Horarios y seguimiento */}
        <section className="grid md:grid-cols-2 gap-4">
          <article className={cardHover}>
            <div className="card-body">
              <h2 className="card-title">Horarios y flexibilidad</h2>
              <ul className="space-y-2">
                {[
                  <><b>Entreno madrugada:</b> Snack ligero (fruta + 1 tostada/avena), entreno, luego Desayuno completo.</>,
                  <><b>Entreno tarde/noche:</b> Mantén Snack 2 como pre-entreno; usa la <i>Cena</i> como post-entreno.</>,
                  <><b>Agua:</b> 2–3 L/día; Creatina monohidratada 5 g/día opcional.</>,
                ].map((t, i) => (
                  <li
                    key={i}
                    className="rounded-box border border-base-300 bg-base-100 p-3 transition-all duration-200 hover:ring-1 hover:ring-primary/30 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className={cardHover}>
            <div className="card-body">
              <h2 className="card-title"> Seguimiento</h2>
              <ul className="space-y-2">
                {[
                  "Pésate 1–2 veces por semana (misma hora, mismas condiciones).",
                  "Ajusta porciones si subes muy rápido (>0.5 kg/sem) o muy lento (<0.1 kg/sem).",
                  "Usa especias para variedad sin subir el costo (pimienta, cúrcuma, ajo, chipotle).",
                ].map((t, i) => (
                  <li
                    key={i}
                    className="rounded-box border border-base-300 bg-base-100 p-3 transition-all duration-200 hover:ring-1 hover:ring-primary/30 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        <p className="text-xs opacity-60">
          Documento para Tony Prado. Imprime o guarda como PDF con el botón de arriba. Esto no sustituye consejo médico.
        </p>
      </main>
    </div>
  );
}
