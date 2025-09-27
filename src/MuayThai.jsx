// src/MuayThai.jsx
import { useRef } from "react";

const cardHover =
  "card bg-base-200 transition-all duration-200 " +
  "hover:-translate-y-0.5 hover:shadow-xl hover:ring-1 hover:ring-primary/30 hover:bg-secondary/20";

function RoundRow({ title, work, rest, reps, notes }) {
  return (
    <tr className="align-top transition-colors duration-150 hover:bg-secondary/20">
      <td className="py-3">{title}</td>
      <td className="py-3">{work}</td>
      <td className="py-3">{rest}</td>
      <td className="py-3">{reps}</td>
      <td className="py-3">{notes}</td>
    </tr>
  );
}

export default function MuayThai() {
  const preRef = useRef(null);

  const copyPlain = async () => {
    const text = preRef.current?.innerText ?? "";
    try {
      await navigator.clipboard.writeText(text);
      const el = document.createElement("div");
      el.textContent = "Plan copiado ✅";
      el.className =
        "fixed bottom-4 left-1/2 -translate-x-1/2 px-3 py-2 rounded-btn bg-primary text-primary-content shadow";
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1400);
    } catch {}
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* top bar */}
      <section className="border-b border-base-300 bg-secondary/20">
        <div className="max-w-5xl mx-auto px-4 py-6 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold">Muay Thai — Entrenamiento en Casa</h1>
          <button onClick={copyPlain} className="btn btn-primary btn-sm md:btn-md">Copiar</button>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        {/* Resumen */}
        <section className={cardHover}>
          <div className="card-body">
            <h2 className="card-title">Resumen del plan (3 días/semana)</h2>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="stat bg-base-100 rounded-box border border-base-300">
                <div className="stat-title">Día 1</div>
                <div className="stat-value text-lg">Técnica + Cardio</div>
                <div className="stat-desc">45–55 min</div>
              </div>
              <div className="stat bg-base-100 rounded-box border border-base-300">
                <div className="stat-title">Día 2</div>
                <div className="stat-value text-lg">Potencia + Core</div>
                <div className="stat-desc">45–60 min</div>
              </div>
              <div className="stat bg-base-100 rounded-box border border-base-300">
                <div className="stat-title">Día 3</div>
                <div className="stat-value text-lg">Fluidez + Sparring</div>
                <div className="stat-desc">50–60 min</div>
              </div>
            </div>
            <p className="opacity-70 text-sm">
              Progresión: añade 1 ronda cada 2–3 semanas o aumenta 15–30 s por ronda manteniendo técnica limpia.
            </p>
          </div>
        </section>

        {/* Día 1 */}
        <section className={cardHover}>
          <div className="card-body space-y-4">
            <h2 className="card-title">Día 1 — Técnica + Cardio</h2>

            <div className="alert bg-base-100 border border-base-300">
              <span className="font-semibold">Calentamiento (10 min):</span>
              <ul className="list-disc pl-6">
                <li>3′ cuerda o jumping jacks</li>
                <li>Movilidad de hombros, cadera, tobillos (3′)</li>
                <li>4′ shadow boxing suave (en guardia, pasos, guardia alta)</li>
              </ul>
            </div>

            <div className="overflow-x-auto rounded-box border border-base-300 bg-base-100">
              <table className="table table-zebra text-sm">
                <thead>
                  <tr>
                    <th>Bloque</th>
                    <th>Trabajo</th>
                    <th>Descanso</th>
                    <th>Rondas</th>
                    <th>Notas</th>
                  </tr>
                </thead>
                <tbody>
                  <RoundRow
                    title="Shadow Boxing (técnica)"
                    work="3′"
                    rest="1′"
                    reps="4"
                    notes="Jab, cross, hook, uppercut, teep, round kick; precisión y guardia."
                  />
                  <RoundRow
                    title="Combinaciones dirigidas"
                    work="2′"
                    rest="1′"
                    reps="3"
                    notes="Jab–cross–low kick / Cross–hook–teep / Jab–teep–round kick."
                  />
                  <RoundRow
                    title="Rodillas explosivas"
                    work="1′"
                    rest="30″"
                    reps="3"
                    notes="Alternadas, cadera al frente, manos controlando clinch imaginario."
                  />
                </tbody>
              </table>
            </div>

            <div className="alert bg-base-100 border border-base-300">
              <span className="font-semibold">Finisher:</span> 4× (30″ burpees + 30″ descanso).
            </div>

            <p className="opacity-70 text-sm">Enfriamiento 5′: estiramientos de isquios, cadera, hombros.</p>
          </div>
        </section>

        {/* Día 2 */}
        <section className={cardHover}>
          <div className="card-body space-y-4">
            <h2 className="card-title">Día 2 — Potencia + Core</h2>

            <div className="alert bg-base-100 border border-base-300">
              <span className="font-semibold">Calentamiento (8 min):</span> high knees/cuerda + movilidad espinal/caderas.
            </div>

            <div className="overflow-x-auto rounded-box border border-base-300 bg-base-100">
              <table className="table table-zebra text-sm">
                <thead>
                  <tr>
                    <th>Ejercicio</th>
                    <th>Series</th>
                    <th>Reps/Tiempo</th>
                    <th>Notas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-secondary/20">
                    <td>Push-ups explosivos</td>
                    <td>5</td>
                    <td>10</td>
                    <td>Salida rápida, control al bajar</td>
                  </tr>
                  <tr className="hover:bg-secondary/20">
                    <td>Squat jump</td>
                    <td>4</td>
                    <td>12</td>
                    <td>Aterriza suave, rodillas alineadas</td>
                  </tr>
                  <tr className="hover:bg-secondary/20">
                    <td>Lunges</td>
                    <td>4</td>
                    <td>15 c/pierna</td>
                    <td>Torso erguido</td>
                  </tr>
                  <tr className="hover:bg-secondary/20">
                    <td>Abdominal bici</td>
                    <td>4</td>
                    <td>20</td>
                    <td>Controlado, sin tirar del cuello</td>
                  </tr>
                  <tr className="hover:bg-secondary/20">
                    <td>Plancha lateral</td>
                    <td>3</td>
                    <td>30″ por lado</td>
                    <td>Cadera alta, core activo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto rounded-box border border-base-300 bg-base-100">
              <table className="table text-sm">
                <thead>
                  <tr>
                    <th>Bloque técnico</th>
                    <th>Trabajo</th>
                    <th>Descanso</th>
                    <th>Rondas</th>
                    <th>Enfoque</th>
                  </tr>
                </thead>
                <tbody>
                  <RoundRow
                    title="Shadow Boxing (potencia)"
                    work="2′"
                    rest="1′"
                    reps="6"
                    notes="Patada circular y rodillas con intención; respiración con impacto."
                  />
                </tbody>
              </table>
            </div>

            <p className="opacity-70 text-sm">Enfriamiento 5′.</p>
          </div>
        </section>

        {/* Día 3 */}
        <section className={cardHover}>
          <div className="card-body space-y-4">
            <h2 className="card-title">Día 3 — Fluidez + Sparring imaginario</h2>

            <div className="alert bg-base-100 border border-base-300">
              <span className="font-semibold">Calentamiento (10 min):</span> 5′ cuerda/jogging + 5′ movilidad y shadow suave.
            </div>

            <div className="overflow-x-auto rounded-box border border-base-300 bg-base-100">
              <table className="table table-zebra text-sm">
                <thead>
                  <tr>
                    <th>Bloque</th>
                    <th>Trabajo</th>
                    <th>Descanso</th>
                    <th>Rondas</th>
                    <th>Notas</th>
                  </tr>
                </thead>
                <tbody>
                  <RoundRow
                    title="Shadow Sparring (visualización)"
                    work="3′"
                    rest="1′"
                    reps="5"
                    notes="Imagina un rival real: fintas, entradas/salidas, contras."
                  />
                  <RoundRow
                    title="Drills de defensa"
                    work="3′"
                    rest="1′"
                    reps="3"
                    notes="Bloqueos, checks de low kick, slips y rolls, guardia alta."
                  />
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto rounded-box border border-base-300 bg-base-100">
              <table className="table text-sm">
                <thead>
                  <tr>
                    <th>HIIT final</th>
                    <th>Trabajo</th>
                    <th>Descanso</th>
                    <th>Rondas</th>
                    <th>Notas</th>
                  </tr>
                </thead>
                <tbody>
                  <RoundRow
                    title="Rodillas al pecho + Mountain climbers"
                    work="30″ + 30″"
                    rest="30″"
                    reps="4"
                    notes="Mantén técnica bajo fatiga; respira por la nariz cuando puedas."
                  />
                </tbody>
              </table>
            </div>

            <p className="opacity-70 text-sm">Enfriamiento 5′ (énfasis en cuádriceps, isquios y cadera).</p>
          </div>
        </section>

        {/* Consejos generales */}
        <section className={cardHover}>
          <div className="card-body">
            <h2 className="card-title">Consejos</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Sube la dificultad con 1 ronda extra o +15–30″ por ronda cada 2–3 semanas.</li>
              <li>Mantén la guardia alta y el mentón bajo, incluso en cardio alto.</li>
              <li>Si tienes cuerda, úsala para calentar; si tienes espejo, úsalo para corregir postura.</li>
              <li>Hidrátate; si golpeas saco, usa vendajes/guantes.</li>
            </ul>
          </div>
        </section>

        {/* Texto plano para copiar */}
        <section className="card bg-base-100 border border-base-300 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:ring-1 hover:ring-primary/30">
          <div className="card-body">
            <p className="text-sm opacity-70">Versión en texto plano:</p>
            <div className="max-h-[40vh] overflow-auto rounded-box border border-base-300">
              <pre
                ref={preRef}
                className="p-3 text-xs leading-relaxed whitespace-pre-wrap font-mono"
              >{`Muay Thai en casa (3 días/semana)

Día 1 — Técnica + Cardio
Calentamiento 10': 3' cuerda/jumping jacks + movilidad + 4' shadow suave
Rondas: 4×3' shadow (1' desc) | 3×2' combos (1' desc) | 3×1' rodillas (30" desc)
Finisher: 4× (30" burpees + 30" desc)
Enfriamiento 5'

Día 2 — Potencia + Core
Calentamiento 8'
Fuerza: 5×10 push-ups exp. | 4×12 squat jump | 4×15 lunges/ pierna | 4×20 bici | 3×30" plancha lat/ lado
Técnica: 6×2' shadow de potencia (1' desc)
Enfriamiento 5'

Día 3 — Fluidez + Sparring imaginario
Calentamiento 10'
Trabajo: 5×3' shadow sparring (1' desc) | 3×3' defensa (1' desc)
HIIT: 4 rondas — 30" rodillas / 30" climbers / 30" desc
Enfriamiento 5'

Progresión: +1 ronda cada 2–3 semanas o +15–30" por ronda.
Seguridad: técnica limpia > velocidad; hidrátate.`}</pre>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
