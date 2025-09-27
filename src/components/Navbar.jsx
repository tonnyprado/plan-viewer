// src/components/Navbar.jsx
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const loc = useLocation();

  // cierra al cambiar de ruta
  useEffect(() => setOpen(false), [loc.pathname]);

  // cierra al click fuera
  useEffect(() => {
    const onDown = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, []);

  // cierra con ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav className="sticky top-0 z-50">
      <div className="navbar bg-base-100 border-b border-base-300">
        <div className="max-w-5xl mx-auto w-full flex justify-between items-center px-4">
          {/* Brand */}
          <Link to="/" className=" btn-ghost normal-case text-lg flex items-center gap-2 text-base-content">
            <motion.span
              initial={{ rotate: -20, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <Dumbbell className="w-5 h-5 text-primary" />
            </motion.span>
            MyPlan
          </Link>

          <Link to="/peso" className="btn btn-ghost normal-case text-lg flex items-center gap-2 text-base-content">Registro de Peso</Link>

          {/* Dropdown DaisyUI */}
          <div
            ref={ref}
            className={`dropdown dropdown-end ${open ? "dropdown-open" : ""}`}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              onClick={() => setOpen(v => !v)}
              onFocus={() => setOpen(true)}
              aria-expanded={open}
              aria-haspopup="menu"
              className="btn btn-ghost gap-1 text-base-content"
            >
              Workouts
              <motion.span
                initial={false}
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                ▾
              </motion.span>
            </button>

            {/* Menú: DaisyUI controla visibilidad; framer-motion solo anima */}
            <AnimatePresence>
              {open && (
                <motion.ul
                  role="menu"
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.14 }}
                  className="dropdown-content z-50 menu menu-sm p-2 shadow rounded-box border border-base-300 bg-base-100 w-56"
                >
                  <li>
                    <Link className="text-base-content" to="/calisthenics">
                      Rutina de Calistenia
                    </Link>
                  </li>
                  {/* más items aquí */}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}
