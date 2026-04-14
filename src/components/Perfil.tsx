import { useChatStore } from '../store/chatStore'

interface Props {
  onVolver: () => void
}

export default function Perfil({ onVolver }: Props) {
  const { queryCount } = useChatStore()

  const logros = [
    { icono: '🌟', nombre: 'Primera Pregunta', desc: 'Le preguntaste al Profe IA por primera vez', done: queryCount >= 1 },
    { icono: '📚', nombre: 'Exploradora', desc: 'Hiciste 5 consultas al Profe IA', done: queryCount >= 5 },
    { icono: '🔥', nombre: 'En Racha', desc: 'Alcanzaste 20 preguntas al Profe IA', done: queryCount >= 20 },
    { icono: '🏆', nombre: 'Maestra del Estudio', desc: 'Hiciste 50 consultas al Profe IA', done: queryCount >= 50 },
  ]

  const logrosDesbloqueados = logros.filter(l => l.done).length

  return (
    <div className="space-y-5 pb-6">
      {/* Back */}
      <button
        onClick={onVolver}
        className="flex items-center gap-2 text-purple-300 hover:text-white text-sm transition-colors"
      >
        ← Volver
      </button>

      {/* Avatar */}
      <div className="flex flex-col items-center py-4">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full flex items-center justify-center text-4xl"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #c026d3)', padding: '3px' }}>
            <div className="w-full h-full rounded-full bg-[#1a0033] flex items-center justify-center">
              <span className="text-4xl">👩‍🎓</span>
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-sm"
            style={{ background: 'linear-gradient(135deg, #c026d3, #ec4899)', border: '2px solid #0f0020' }}>
            🎓
          </div>
        </div>
        <h2 className="text-white font-display font-bold text-2xl">Tita</h2>
        <span className="text-purple-300 text-sm mt-1 px-3 py-1 rounded-full"
          style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(167,139,250,0.3)' }}>
          1° Medio 2026 · Chile 🇨🇱
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icono: '🤖', num: queryCount.toString(), label: 'Consultas' },
          { icono: '📖', num: '10', label: 'Materias' },
          { icono: '🏅', num: logrosDesbloqueados.toString(), label: 'Logros' },
        ].map((s, i) => (
          <div key={i} className="glass rounded-2xl p-4 text-center">
            <div className="text-2xl mb-1">{s.icono}</div>
            <div className="text-white font-display font-bold text-xl">{s.num}</div>
            <div className="text-purple-300 text-xs">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Logros */}
      <div className="glass rounded-2xl p-5">
        <h3 className="text-white font-display font-bold text-base mb-4 flex items-center gap-2">
          <span>🏆</span> Mis Logros
        </h3>
        <div className="space-y-3">
          {logros.map((l, i) => (
            <div key={i} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
              l.done ? 'bg-white/10' : 'bg-white/5 opacity-50'
            }`}>
              <span className="text-2xl">{l.icono}</span>
              <div className="flex-1">
                <div className={`font-semibold text-sm ${l.done ? 'text-white' : 'text-purple-400'}`}>
                  {l.nombre}
                </div>
                <div className="text-purple-300 text-xs">{l.desc}</div>
              </div>
              {l.done
                ? <span className="text-green-400 text-base">✓</span>
                : <span className="text-purple-600 text-xs">🔒</span>
              }
            </div>
          ))}
        </div>
        {queryCount === 0 && (
          <p className="text-purple-400 text-xs text-center mt-3">
            ¡Hazle tu primera pregunta al Profe IA para desbloquear logros! 🚀
          </p>
        )}
      </div>

      {/* About */}
      <div className="glass rounded-2xl p-5">
        <h3 className="text-white font-display font-bold text-base mb-3 flex items-center gap-2">
          <span>🤖</span> Sobre Profe IA
        </h3>
        <p className="text-purple-200 text-sm leading-relaxed mb-3">
          Tu tutor personal impulsado por <strong className="text-fuchsia-400">Claude (Anthropic)</strong>,
          disponible 24/7 para ayudarte con todas las materias de 1° Medio.
          Hecho especialmente para <strong className="text-fuchsia-400">Tita</strong> 💜
        </p>
        <div className="flex items-center gap-2 text-xs text-purple-400">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Profe IA v2.0.0 · Hecho con 💜 para Tita
        </div>
      </div>
    </div>
  )
}
