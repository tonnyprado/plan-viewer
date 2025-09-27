// src/Calisthenics.jsx
import { useRef } from "react";

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
            <tr
              key={idx}
              className="align-top transition-colors duration-150 hover:bg-secondary/20"
            >
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

export default function Calisthenics() {
  const preRef = useRef(null);

  const copyPlain = async () => {
    const text = preRef.current?.innerText ?? "";
    try {
      await navigator.clipboard.writeText(text);
      const el = document.createElement("div");
      el.textContent = "Copiado ✅";
      el.className =
        "fixed bottom-4 left-1/2 -translate-x-1/2 px-3 py-2 rounded-btn bg-primary text-primary-content shadow";
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1400);
    } catch {}
  };

  const tips = [
    "Rest: Ensure you get adequate rest between workouts and listen to your body.",
    "Nutrition: Eat a balanced diet with sufficient protein to aid muscle recovery and growth.",
    "Consistency: Stick to the program and gradually increase intensity as you get stronger.",
  ];

  const m1Intro = [
    "Weeks 1–4: Full Body Workouts",
    "Frequency: 3 times a week (e.g., Monday, Wednesday, Friday)",
  ];

  const m1Cols = ["Exercise", "Sets", "Reps/Duration", "Video Tutorial", "Notes"];
  const m1Rows = [
    ["Warm-up", "—", "5–10 minutes", "(Light cardio)", "Jumping jacks, light jogging, high knees"],
    [
      "Push-ups",
      "3",
      "8–12 reps",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=IODxDxX7oi4" target="_blank" rel="noreferrer">Push-up Tutorial</a>,
      "Keep body straight, avoid sagging hips",
    ],
    [
      "Pull-ups or Inverted Rows",
      "3",
      "5–8 reps",
      <>
        <a className="link link-accent mr-1" href="https://www.youtube.com/watch?v=Y3ntNsIS2Q8" target="_blank" rel="noreferrer">Pull-ups</a>
        /
        <a className="link link-accent ml-1" href="https://www.youtube.com/watch?v=GdyhjXlxE-U" target="_blank" rel="noreferrer">Inverted Rows</a>
      </>,
      "Use a resistance band if needed",
    ],
    [
      "Dips",
      "3",
      "8–12 reps",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=l41SoWZiowI" target="_blank" rel="noreferrer">Dips Tutorial</a>,
      "Use parallel bars or bench",
    ],
    [
      "Squats",
      "3",
      "15–20 reps",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=xqvCmoLULNY" target="_blank" rel="noreferrer">Squat Tutorial</a>,
      "Keep knees tracking over toes",
    ],
    [
      "Lunges",
      "3",
      "10–15 per leg",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=wrwwXE_x-pQ" target="_blank" rel="noreferrer">Lunge Tutorial</a>,
      "Keep torso upright",
    ],
    [
      "Plank",
      "3",
      "30–60 seconds",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=ASdvN_XEl_c" target="_blank" rel="noreferrer">Plank Tutorial</a>,
      "Engage core fully",
    ],
    ["Cool down", "—", "5–10 minutes", "(Stretching routine)", "Stretch all worked muscles"],
  ];

  const m2Intro = [
    "Weeks 5–8: Split Routine and Skill Training",
    "Frequency: 4 times a week (e.g., Monday, Tuesday, Thursday, Friday)",
  ];

  const m2UCols = ["Exercise", "Sets", "Reps/Duration", "Video Tutorial", "Notes"];
  const m2URows = [
    ["Warm-up", "—", "5–10 minutes", "(General light cardio)", "Jogging, jumping jacks, dynamic stretches"],
    [
      "Push-ups",
      "4",
      "10–15 reps",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=IODxDxX7oi4" target="_blank" rel="noreferrer">The Perfect Push-Up</a>,
      "Keep elbows tucked slightly",
    ],
    [
      "Pull-ups or Inverted Rows",
      "4",
      "6–10 reps",
      <>
        <a className="link link-accent mr-1" href="https://www.youtube.com/watch?v=Y3ntNsIS2Q8" target="_blank" rel="noreferrer">Pull-up Tutorial</a>
        /
        <a className="link link-accent ml-1" href="https://www.youtube.com/watch?v=GdyhjXlxE-U" target="_blank" rel="noreferrer">Inverted Row Tutorial</a>
      </>,
      "Use band assistance if needed",
    ],
    [
      "Dips",
      "4",
      "10–15 reps",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=l41SoWZiowI" target="_blank" rel="noreferrer">Dip Tutorial</a>,
      "Focus on controlled movement",
    ],
    [
      "Pike Push-ups",
      "3",
      "8–12 reps",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=x7_I5SUAd00" target="_blank" rel="noreferrer">Pike Push-Up Tutorial</a>,
      "Elevate hips to target shoulders",
    ],
    [
      "Plank to Push-up",
      "3",
      "10–15 reps",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=56vUOad6Irs" target="_blank" rel="noreferrer">Plank to Push-Up Tutorial</a>,
      "Core tight, avoid sagging",
    ],
    ["Cool down", "—", "5–10 minutes", "(Stretching routine)", "Focus on arms, shoulders, and chest"],
  ];

  const m2LCols = ["Exercise", "Sets", "Reps/Duration", "Video Tutorial", "Notes"];
  const m2LRows = [
    ["Warm-up", "—", "5–10 minutes", "(General light cardio)", "Dynamic leg swings, light jogging"],
    [
      "Squats",
      "4",
      "20–25 reps",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=xqvCmoLULNY" target="_blank" rel="noreferrer">Squat Tutorial</a>,
      "Keep knees tracking over toes",
    ],
    [
      "Lunges",
      "4",
      "15–20 per leg",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=wrwwXE_x-pQ" target="_blank" rel="noreferrer">Lunge Tutorial</a>,
      "Keep torso upright",
    ],
    [
      "Glute Bridges",
      "3",
      "20–25 reps",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=wPM8icPu6H8" target="_blank" rel="noreferrer">Glute Bridge Tutorial</a>,
      "Squeeze glutes at the top",
    ],
    [
      "Calf Raises",
      "3",
      "20–25 reps",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=gwLzBJYoWlI" target="_blank" rel="noreferrer">Calf Raises</a>,
      "Controlled movement, full range",
    ],
    [
      "Hanging Leg Raises",
      "3",
      "8–12 reps",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=Pr1ieGZ5atk" target="_blank" rel="noreferrer">Hanging Leg Raise Tutorial</a>,
      "Use bar, keep legs straight",
    ],
    [
      "Russian Twists",
      "3",
      "20 reps per side",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=JyUqwkVpsi8" target="_blank" rel="noreferrer">Russian Twist Tutorial</a>,
      "Keep torso upright, move with control",
    ],
    ["Cool down", "—", "5–10 minutes", "(Stretching routine)", "Stretch hamstrings, glutes, quads"],
  ];

  const m2SCols = ["Skill Training", "Sets", "Duration/Reps", "Video Tutorial", "Notes"];
  const m2SRows = [
    [
      "Handstand Practice",
      "3",
      "20–30 seconds",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=eFmjckKXEoA" target="_blank" rel="noreferrer">Handstand Tutorial</a>,
      "Wall-assisted, progress to freestanding",
    ],
    [
      "L-Sit Progressions",
      "3",
      "10–15 seconds",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=HxDP7SqggpI" target="_blank" rel="noreferrer">L-Sit Progression</a>,
      "Use parallettes or floor",
    ],
  ];

  const m3Intro = [
    "Weeks 9–12: Advanced Workouts and Skill Mastery",
    "Frequency: 4–5 times a week",
  ];

  const m3UCols = ["Exercise", "Sets", "Reps/Duration", "Video Tutorial", "Notes"];
  const m3URows = [
    ["Warm-up", "—", "5–10 minutes", "(General light cardio)", "Jump rope, jogging, dynamic stretches"],
    [
      "Decline Push-ups",
      "4",
      "10–15 reps",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=SKPab2YC8BE" target="_blank" rel="noreferrer">Decline Push-up Tutorial</a>,
      "Feet elevated on bench or box",
    ],
    [
      "Pull-ups",
      "4",
      "8–12 reps",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=Y3ntNsIS2Q8" target="_blank" rel="noreferrer">Pull-up Tutorial</a>,
      "Use band assistance if needed",
    ],
    [
      "Dips",
      "4",
      "10–15 reps",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=l41SoWZiowI" target="_blank" rel="noreferrer">Dip Tutorial</a>,
      "Use parallel bars or bench",
    ],
    [
      "Archer Push-ups",
      "3",
      "6–10 per side",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=MxVbNel13Ek" target="_blank" rel="noreferrer">Archer Push-up Tutorial</a>,
      "Focus on control, can elevate hands for easier version",
    ],
    [
      "Plank to Push-up",
      "3",
      "15–20 reps",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=56vUOad6Irs" target="_blank" rel="noreferrer">Plank to Push-up Tutorial</a>,
      "Keep core tight",
    ],
    ["Cool-down", "—", "5–10 minutes", "(Stretching routine)", "Focus on upper body stretches"],
  ];

  const m3LCols = ["Exercise", "Sets", "Reps/Duration", "Video Tutorial", "Notes"];
  const m3LRows = [
    ["Warm-up", "—", "5–10 minutes", "(General light cardio)", "Light jogging, dynamic leg swings"],
    [
      "Pistol Squats (Assisted)",
      "4",
      "6–10 per leg",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=tiA23NSUm7A" target="_blank" rel="noreferrer">Assisted Pistol Squat Tutorial</a>,
      "Use support for balance",
    ],
    [
      "Bulgarian Split Squats",
      "4",
      "10–15 per leg",
      <a className="link link-accent" href="https://www.youtube.com/shorts/9p5e2BSvoLs" target="_blank" rel="noreferrer">Bulgarian Split Squat Tutorial</a>,
      "Rear foot elevated on bench",
    ],
    [
      "Single-Leg Glute Bridges",
      "3",
      "15–20 per leg",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=3NXv0Nany-Q" target="_blank" rel="noreferrer">Single Leg Glute Bridge</a>,
      "Squeeze glutes at the top",
    ],
    [
      "Calf Raises",
      "3",
      "25–30 reps",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=c5Kv6-fnTj8" target="_blank" rel="noreferrer">Calf Raises Tutorial</a>,
      "Full range, slow controlled movement",
    ],
    [
      "Hanging Leg Raises",
      "3",
      "10–15 reps",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=EYe6dc_i4L0" target="_blank" rel="noreferrer">Hanging Leg Raise Tutorial</a>,
      "Use bar, keep legs straight",
    ],
    [
      "Windshield Wipers",
      "3",
      "10–15 per side",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=ygwS-vtkhew" target="_blank" rel="noreferrer">Windshield Wipers Exercise</a>,
      "Keep shoulders down, controlled core engagement",
    ],
    ["Cool-down", "—", "5–10 minutes", "(Stretching routine)", "Lower body stretches focusing on quads and hamstrings"],
  ];

  const m3SCols = ["Skill Training", "Sets", "Duration/Reps", "Video Tutorial", "Notes"];
  const m3SRows = [
    [
      "Handstand Practice",
      "3",
      "20–30 seconds",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=X9fRDlIeGTU" target="_blank" rel="noreferrer">Handstand Tutorial</a>,
      "Progress from wall-assisted to free-standing",
    ],
    [
      "L-Sit Hold",
      "3",
      "10–20 seconds",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=eywCpp0p7lg" target="_blank" rel="noreferrer">L-Sit Tutorial</a>,
      "Use parallettes or floor",
    ],
    [
      "Muscle-Up Progressions",
      "3",
      "3–5 reps",
      <a className="link link-accent" href="https://www.youtube.com/watch?v=6v6IsZcvqCA" target="_blank" rel="noreferrer">Muscle-Up Progression Tutorial</a>,
      "Band-assisted or jumping muscle-ups",
    ],
  ];

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <section className="border-b border-base-300 bg-secondary/20">
        <div className="max-w-5xl mx-auto px-4 py-6 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold">Calistenia</h1>
          <button onClick={copyPlain} className="btn btn-primary btn-sm md:btn-md">Copiar</button>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <section className={cardHover}>
          <div className="card-body">
            <h2 className="card-title">Additional Tips</h2>
            <ul className="list-disc pl-6 space-y-1">
              {tips.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </div>
        </section>

        <section className={cardHover}>
          <div className="card-body space-y-3">
            <h2 className="card-title">Month 1: Building Foundation</h2>
            <ul className="space-y-1">{m1Intro.map((t, i) => <li key={i}>{t}</li>)}</ul>
            <Table columns={m1Cols} rows={m1Rows} />
          </div>
        </section>

        <section className={cardHover}>
          <div className="card-body space-y-6">
            <div>
              <h2 className="card-title">Month 2: Increasing Intensity and Skill Introduction</h2>
              <ul className="mt-1 space-y-1">{m2Intro.map((t, i) => <li key={i}>{t}</li>)}</ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Day 1 &amp; 4: Upper Body</h3>
              <Table columns={m2UCols} rows={m2URows} />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Day 2 &amp; 3: Lower Body &amp; Core</h3>
              <Table columns={m2LCols} rows={m2LRows} />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Skill Training (2–3 times a week after the main workout)</h3>
              <Table columns={m2SCols} rows={m2SRows} />
            </div>
          </div>
        </section>

        <section className={cardHover}>
          <div className="card-body space-y-6">
            <div>
              <h2 className="card-title">Month 3: Skill Focus and Advanced Workouts</h2>
              <ul className="mt-1 space-y-1">{m3Intro.map((t, i) => <li key={i}>{t}</li>)}</ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Day 1 &amp; 4: Upper Body</h3>
              <Table columns={m3UCols} rows={m3URows} />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Day 2 &amp; 3: Lower Body &amp; Core</h3>
              <Table columns={m3LCols} rows={m3LRows} />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Skill Training (3–4 times a week)</h3>
              <Table columns={m3SCols} rows={m3SRows} />
            </div>
          </div>
        </section>

        <section className="card bg-base-100 border border-base-300 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:ring-1 hover:ring-primary/30">
          <div className="card-body">
            <p className="text-sm opacity-70">Versión en texto plano (para copiar/pegar rápido):</p>
            <div className="max-h-[40vh] overflow-auto rounded-box border border-base-300">
              <pre ref={preRef} className="p-3 text-xs leading-relaxed whitespace-pre-wrap font-mono">
{`Additional Tips:
- ${tips[0]}
- ${tips[1]}
- ${tips[2]}

Month 1: Building Foundation
${m1Intro[0]}
${m1Intro[1]}

[Table] Full Body (see tables above)

Month 2: Increasing Intensity and Skill Introduction
${m2Intro[0]}
${m2Intro[1]}

Day 1 & 4: Upper Body — [Table]
Day 2 & 3: Lower Body & Core — [Table]
Skill Training (2–3 times a week) — [Table]

Month 3: Skill Focus and Advanced Workouts
${m3Intro[0]}
${m3Intro[1]}

Day 1 & 4: Upper Body — [Table]
Day 2 & 3: Lower Body & Core — [Table]
Skill Training (3–4 times a week) — [Table]`}
              </pre>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
