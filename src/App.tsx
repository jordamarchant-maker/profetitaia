import { useState } from 'react'
import { Vista, Materia } from './types'
import Dashboard from './components/Dashboard'
import ChatIA from './components/ChatIA'
import MateriaDetalle from './components/MateriaDetalle'
import Perfil from './components/Perfil'
import { useChatStore } from './store/chatStore'

const navItems: { id: Vista; label: string; icon: string }[] = [
  { id: 'dashboard', label: 'Inicio', icon: '🏠' },
  { id: 'chat', label: 'Profe IA', icon: '🤖' },
  { id: 'perfil', label: 'Mi Perfil', icon: '👤' },
]

export default function App() {
  const [vista, setVista] = useState<Vista>('dashboard')
  const [materiaSeleccionada, setMateriaSeleccionada] = useState<Materia | null>(null)
  const { setMateriaContexto } = useChatStore()

  const ir = (v: Vista) => {
    setVista(v)
    if (v !== 'materia') setMateriaSeleccionada(null)
  }

  const abrirMateria = (m: Materia) => {
    setMateriaSeleccionada(m)
    setVista('materia')
  }

  const abrirChatConContexto = (nombre: string) => {
    setMateriaContexto(nombre)
    setVista('chat')
  }

  const activeNav = vista === 'materia' ? 'dashboard' : vista

  return (
    <div className="bg-mesh noise h-screen-safe flex flex-col overflow-hidden">
      {/* Header con safe area top para notch */}
      <header
        className="flex-shrink-0 z-40 safe-top"
        style={{
          background: 'rgba(15,0,32,0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(167,139,250,0.15)'
        }}>
        <div className="max-w-xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => ir('dashboard')}
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xl"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #c026d3)' }}>
              🎓
            </div>
            <div>
              <span className="text-white font-display font-bold text-base leading-none block">Profe IA · Tita</span>
              <span className="text-purple-400 text-xs">1° Medio 2026</span>
            </div>
          </button>

          {/* Status pill */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
            style={{
              background: 'rgba(34,197,94,0.15)',
              border: '1px solid rgba(34,197,94,0.3)'
            }}>
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 font-medium">IA activa</span>
          </div>
        </div>
      </header>

      {/* Main scrollable content */}
      <main className="flex-1 overflow-y-auto relative z-10">
        <div className="max-w-xl mx-auto px-4 pt-4">
          {vista === 'dashboard' && (
            <Dashboard
              onSeleccionarMateria={abrirMateria}
              onAbrirChat={() => {
                setMateriaContexto(null)
                ir('chat')
              }}
            />
          )}
          {vista === 'chat' && (
            <ChatIA onVolver={() => ir('dashboard')} />
          )}
          {vista === 'materia' && materiaSeleccionada && (
            <MateriaDetalle
              materia={materiaSeleccionada}
              onVolver={() => ir('dashboard')}
              onAbrirChat={abrirChatConContexto}
            />
          )}
          {vista === 'perfil' && (
            <Perfil onVolver={() => ir('dashboard')} />
          )}
        </div>
      </main>

      {/* Bottom Navigation con safe area bottom para iPhone */}
      <nav
        className="flex-shrink-0 z-40 safe-bottom"
        style={{
          background: 'rgba(15,0,32,0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(167,139,250,0.15)'
        }}>
        <div className="max-w-xl mx-auto flex">
          {navItems.map((item) => {
            const isActive = activeNav === item.id
            return (
              <button
                key={item.id}
                onClick={() => ir(item.id)}
                className="flex-1 flex flex-col items-center gap-1 py-3 px-2 transition-all relative"
              >
                {isActive && (
                  <span
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #7c3aed, #c026d3)' }}
                  />
                )}
                <span className={`text-xl transition-transform duration-200 ${isActive ? 'scale-110' : 'scale-100'}`}>
                  {item.icon}
                </span>
                <span className={`text-xs font-medium transition-colors ${
                  isActive ? 'text-fuchsia-400' : 'text-purple-500'
                }`}>
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
