import { materias } from '../data/materias'
import { Materia } from '../types'

interface DashboardProps {
  onSeleccionarMateria: (m: Materia) => void
  onAbrirChat: () => void
}

const tipDelDia = {
  titulo: 'Técnica Pomodoro 🍅',
  texto: 'Estudia 25 min, descansa 5 min. Después de 4 rondas, toma 15-30 min de descanso. Tu cerebro aprende mejor en bloques cortos.'
}

const stats = [
  { icono: '📚', num: '10', label: 'Materias' },
  { icono: '📝', num: '70+', label: 'Temas' },
  { icono: '💡', num: '40+', label: 'Tips' },
  { icono: '🤖', num: '24/7', label: 'Profe IA' },
]

export default function Dashboard({ onSeleccionarMateria, onAbrirChat }: DashboardProps) {
  return (
    <div className="space-y-6 pb-6">
      {/* Hero */}
      <div className="relative rounded-3xl overflow-hidden p-6 pt-8"
        style={{
          background: 'linear-gradient(135deg, rgba(124,58,237,0.3) 0%, rgba(192,38,211,0.25) 50%, rgba(236,72,153,0.2) 100%)',
          border: '1px solid rgba(167,139,250,0.2)'
        }}>
        {/* Decorative orbs */}
        <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #c026d3 0%, transparent 70%)' }} />
        <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }} />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #c026d3)' }}>
              🎓
            </div>
            <div>
              <p className="text-purple-300 text-sm font-medium font-display">Profe IA</p>
              <h1 className="text-white font-display font-bold text-xl leading-tight">
                1° Medio 2026
              </h1>
            </div>
          </div>
          <h2 className="text-white font-display font-bold text-2xl mb-2">
            ¡Hola, Tita! 👋
          </h2>
          <p className="text-purple-200 text-sm leading-relaxed">
            Tu tutor personal con IA real. Pregunta cualquier cosa sobre tus materias.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-2">
        {stats.map((s, i) => (
          <div key={i} className="glass rounded-2xl p-3 text-center">
            <div className="text-xl mb-1">{s.icono}</div>
            <div className="text-white font-display font-bold text-base leading-none">{s.num}</div>
            <div className="text-purple-300 text-xs mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Chat CTA */}
      <button
        onClick={onAbrirChat}
        className="w-full rounded-2xl p-5 text-left transition-all active:scale-[0.98] hover:scale-[1.01] relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #7c3aed 0%, #c026d3 60%, #ec4899 100%)',
          boxShadow: '0 8px 32px rgba(192,38,211,0.35)'
        }}>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, white 0%, transparent 60%)' }} />
        <div className="relative flex items-center gap-4">
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
            🤖
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-display font-bold text-lg">Pregúntale al Profe IA</h3>
            <p className="text-purple-100 text-sm">Respuestas reales con inteligencia artificial</p>
          </div>
          <div className="text-white text-xl flex-shrink-0">→</div>
        </div>
      </button>

      {/* Materias Grid */}
      <div>
        <h3 className="text-white font-display font-bold text-lg mb-3 flex items-center gap-2">
          <span>📚</span> Tus Materias
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {materias.map((m) => (
            <button
              key={m.id}
              onClick={() => onSeleccionarMateria(m)}
              className={`bg-gradient-to-br ${m.color} rounded-2xl p-4 text-left shadow-lg transition-all active:scale-[0.96] hover:scale-[1.02] hover:shadow-xl group`}
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                {m.icono}
              </div>
              <h4 className="text-white font-display font-semibold text-sm leading-tight">
                {m.nombre}
              </h4>
              <p className="text-white/70 text-xs mt-1 line-clamp-1">{m.descripcion.split('.')[0]}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Tip del día */}
      <div className="glass rounded-2xl p-5"
        style={{ border: '1px solid rgba(253,224,71,0.2)' }}>
        <h3 className="text-white font-display font-bold text-base mb-2 flex items-center gap-2">
          <span>💡</span> Tip del Día para Tita
        </h3>
        <p className="text-yellow-300 font-semibold text-sm mb-1">{tipDelDia.titulo}</p>
        <p className="text-purple-100 text-sm leading-relaxed">{tipDelDia.texto}</p>
      </div>
    </div>
  )
}
