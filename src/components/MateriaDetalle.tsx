import { useState } from 'react'
import { Materia } from '../types'

interface Props {
  materia: Materia
  onVolver: () => void
  onAbrirChat: (contexto: string) => void
}

export default function MateriaDetalle({ materia, onVolver, onAbrirChat }: Props) {
  const [moduloAbierto, setModuloAbierto] = useState<number | null>(null)

  const toggleModulo = (i: number) => {
    setModuloAbierto(prev => prev === i ? null : i)
  }

  return (
    <div className="space-y-4 pb-6">
      {/* Header */}
      <div className={`bg-gradient-to-br ${materia.color} rounded-3xl p-6 shadow-xl relative overflow-hidden`}>
        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/10 blur-xl" />
        <button
          onClick={onVolver}
          className="flex items-center gap-2 text-white/80 hover:text-white mb-5 text-sm transition-colors"
        >
          <span>←</span> Volver
        </button>
        <div className="relative flex items-center gap-4">
          <div className="text-5xl">{materia.icono}</div>
          <div>
            <h2 className="text-white font-display font-bold text-2xl leading-tight">{materia.nombre}</h2>
            <p className="text-white/80 text-sm mt-1 leading-relaxed">{materia.descripcion}</p>
          </div>
        </div>
      </div>

      {/* Ask IA */}
      <button
        onClick={() => onAbrirChat(materia.nombre)}
        className="w-full rounded-2xl p-4 flex items-center gap-3 transition-all active:scale-[0.97] text-left"
        style={{
          background: 'linear-gradient(135deg, #7c3aed, #c026d3)',
          boxShadow: '0 6px 24px rgba(192,38,211,0.3)'
        }}
      >
        <span className="text-2xl">🤖</span>
        <div className="flex-1">
          <span className="text-white font-display font-bold block">¿Tienes dudas, Tita?</span>
          <span className="text-purple-200 text-sm">Pregúntale al Profe IA sobre {materia.nombre}</span>
        </div>
        <span className="text-white text-xl">→</span>
      </button>

      {/* ✅ Módulos expandibles */}
      <div className="glass rounded-2xl p-5">
        <h3 className="text-white font-display font-bold text-base mb-4 flex items-center gap-2">
          <span>🗂️</span> Módulos del Año
        </h3>
        <div className="space-y-2">
          {materia.modulos.map((mod, i) => (
            <div key={i} className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              {/* Cabecera del módulo */}
              <button
                onClick={() => toggleModulo(i)}
                className="w-full flex items-center gap-3 p-3 text-left transition-colors hover:bg-white/10"
                style={{ background: moduloAbierto === i ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.04)' }}
              >
                <span className={`w-7 h-7 bg-gradient-to-br ${materia.color} rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {i + 1}
                </span>
                <span className="text-purple-100 text-sm font-medium flex-1">{mod.titulo}</span>
                <span className="text-purple-400 text-xs transition-transform duration-200"
                  style={{ transform: moduloAbierto === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  ▼
                </span>
              </button>

              {/* Contenido expandible */}
              {moduloAbierto === i && (
                <div className="px-4 pb-4 pt-2" style={{ background: 'rgba(124,58,237,0.08)' }}>
                  <p className="text-purple-200 text-sm leading-relaxed mb-3">
                    {mod.contenido}
                  </p>
                  <div>
                    <p className="text-purple-400 text-xs font-semibold uppercase tracking-wide mb-2">Subtemas</p>
                    <div className="flex flex-wrap gap-1.5">
                      {mod.subtemas.map((sub, j) => (
                        <span key={j} className="text-xs px-2.5 py-1 rounded-full text-purple-200"
                          style={{
                            background: 'rgba(124,58,237,0.25)',
                            border: '1px solid rgba(167,139,250,0.2)'
                          }}>
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => onAbrirChat(materia.nombre)}
                    className="mt-3 text-xs px-3 py-1.5 rounded-full text-fuchsia-300 hover:text-white transition-colors flex items-center gap-1"
                    style={{ background: 'rgba(192,38,211,0.2)', border: '1px solid rgba(192,38,211,0.3)' }}
                  >
                    🤖 Preguntarle al Profe IA sobre esto
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Temas */}
      <div className="glass rounded-2xl p-5">
        <h3 className="text-white font-display font-bold text-base mb-4 flex items-center gap-2">
          <span>📚</span> Temas que Estudiarás
        </h3>
        <div className="grid gap-2">
          {materia.temas.map((tema, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                {i + 1}
              </span>
              <span className="text-purple-100 text-sm">{tema}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="rounded-2xl p-5" style={{
        background: 'linear-gradient(135deg, rgba(253,224,71,0.1), rgba(251,146,60,0.1))',
        border: '1px solid rgba(253,224,71,0.15)'
      }}>
        <h3 className="text-white font-display font-bold text-base mb-4 flex items-center gap-2">
          <span>💡</span> Tips para {materia.nombre}
        </h3>
        <div className="space-y-3">
          {materia.tips.map((tip, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-yellow-400 mt-0.5 flex-shrink-0">✦</span>
              <p className="text-yellow-100 text-sm leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Recursos con enlaces reales */}
      <div className="glass rounded-2xl p-5">
        <h3 className="text-white font-display font-bold text-base mb-4 flex items-center gap-2">
          <span>🔗</span> Recursos Útiles
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {materia.recursos.map((r, i) => (
            <a
              key={i}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl transition-all active:scale-[0.97] hover:bg-white/15 cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span className="text-xl">{r.icono}</span>
              <div>
                <div className="text-white font-medium text-sm">{r.nombre}</div>
                <div className="text-purple-300 text-xs">{r.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
