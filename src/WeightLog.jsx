import { useEffect, useMemo, useState } from "react";

const LS_KEY = "weight-log-v1";

function useWeightData() {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(items));
  }, [items]);

  const add = (entry) => {
    setItems((arr) =>
      [...arr, entry].sort((a, b) => new Date(a.date) - new Date(b.date))
    );
  };
  const remove = (idx) => setItems((arr) => arr.filter((_, i) => i !== idx));
  const clear = () => setItems([]);

  return { items, add, remove, clear, setItems };
}

function Sparkline({ data }) {
  if (data.length < 2) return null;
  const w = 260, h = 64, pad = 6;
  const xs = data.map((_, i) => i);
  const ys = data;

  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const dx = (w - pad * 2) / (xs.length - 1 || 1);
  const dy = (h - pad * 2) / (maxY - minY || 1);

  const points = xs
    .map((x, i) => {
      const px = pad + x * dx;
      const py = h - pad - (ys[i] - minY) * dy; // invert Y
      return `${px},${py}`;
    })
    .join(" ");

  return (
    <svg width={w} height={h} className="rounded-box border border-base-300 bg-base-100">
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        points={points}
        className="text-primary"
      />
    </svg>
  );
}

export default function WeightLog() {
  const { items, add, remove, clear, setItems } = useWeightData();
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [weight, setWeight] = useState("");

  // agrupado por mes (YYYY-MM)
  const byMonth = useMemo(() => {
    const map = {};
    for (const it of items) {
      const key = it.date.slice(0, 7);
      (map[key] ||= []).push(it);
    }
    // ordenar por fecha dentro de cada mes
    Object.values(map).forEach(arr =>
      arr.sort((a, b) => new Date(a.date) - new Date(b.date))
    );
    return map;
  }, [items]);

  const months = Object.keys(byMonth).sort(); // cronológico

  const handleAdd = (e) => {
    e.preventDefault();
    const w = parseFloat(weight);
    if (!date || isNaN(w)) return;
    add({ date, weight: w });
    setWeight("");
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(items, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement("a"), {
      href: url, download: "weight-log.json",
    });
    a.click();
    URL.revokeObjectURL(url);
  };

  const importJSON = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      if (!Array.isArray(parsed)) throw new Error("Formato inválido");
      // Validación básica
      const clean = parsed
        .filter((x) => x && typeof x.date === "string" && typeof x.weight === "number")
        .map((x) => ({ date: x.date.slice(0, 10), weight: x.weight }));
      setItems(clean.sort((a, b) => new Date(a.date) - new Date(b.date)));
    } catch {
      alert("No pude importar el archivo. ¿Es un JSON exportado de aquí?");
    } finally {
      e.target.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <section className="border-b border-base-300 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 py-6 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold">Registro de peso</h1>
          <div className="flex gap-2">
            <button className="btn btn-primary btn-sm md:btn-md" onClick={exportJSON}>Exportar</button>
            <label className="btn btn-outline btn-sm md:btn-md">
              Importar
              <input type="file" accept="application/json" className="hidden" onChange={importJSON} />
            </label>
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Formulario */}
        <section className="card bg-base-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:ring-1 hover:ring-primary/30 hover:bg-secondary/20">
          <div className="card-body">
            <h2 className="card-title">Añadir registro</h2>
            <form onSubmit={handleAdd} className="grid md:grid-cols-4 gap-3 items-end">
              <div className="form-control">
                <label className="label"><span className="label-text">Fecha</span></label>
                <input type="date" className="input input-bordered" value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text">Peso (kg)</span></label>
                <input
                  type="number" step="0.1" min="0"
                  className="input input-bordered"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="75.0"
                />
              </div>
              <button className="btn btn-primary md:col-span-1" type="submit">Guardar</button>
              <button type="button" className="btn btn-outline" onClick={clear}>Limpiar todo</button>
            </form>
          </div>
        </section>

        {/* Meses */}
        {months.length === 0 ? (
          <p className="opacity-70">Aún no hay registros. Agrega tu primer peso arriba.</p>
        ) : (
          months.map((mKey) => {
            const arr = byMonth[mKey];
            const avg =
              Math.round((arr.reduce((s, x) => s + x.weight, 0) / arr.length) * 10) / 10;

            return (
              <section key={mKey} className="card bg-base-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:ring-1 hover:ring-primary/30 hover:bg-secondary/20">
                <div className="card-body space-y-3">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <h3 className="card-title">
                      {mKey} <span className="badge badge-outline ml-2">Promedio: {avg} kg</span>
                    </h3>
                    <Sparkline data={arr.map((x) => x.weight)} />
                  </div>

                  <div className="overflow-x-auto rounded-box border border-base-300 bg-base-100">
                    <table className="table text-sm">
                      <thead>
                        <tr>
                          <th>Fecha</th>
                          <th>Peso (kg)</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {arr.map((x, i) => {
                          // índice real en la lista global para poder borrar
                          const globalIdx = items.findIndex(
                            (it) => it.date === x.date && it.weight === x.weight
                          );
                          return (
                            <tr key={x.date + i} className="hover">
                              <td>{x.date}</td>
                              <td>{x.weight}</td>
                              <td className="text-right">
                                <button className="btn btn-xs btn-error" onClick={() => remove(globalIdx)}>
                                  borrar
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            );
          })
        )}
      </main>
    </div>
  );
}
