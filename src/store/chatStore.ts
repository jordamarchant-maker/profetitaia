import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Mensaje } from '../types'

interface ChatState {
  mensajes: Mensaje[]
  isTyping: boolean
  materiaContexto: string | null
  queryCount: number
  addMensaje: (msg: Omit<Mensaje, 'id' | 'timestamp'>) => void
  setTyping: (v: boolean) => void
  setMateriaContexto: (id: string | null) => void
  clearHistory: () => void
  incrementQueryCount: () => void
}

const BIENVENIDA: Mensaje = {
  id: 'welcome',
  rol: 'ia',
  contenido: '¡Hola, **Tita**! 🌟 Soy tu Profe IA, tu tutor personal de 1° Medio.\n\nPuedo ayudarte con todas tus materias:\n📖 Lenguaje · 🔢 Matemática · 🧬 Biología · ⚡ Física · 🧪 Química\n🌍 Historia · 🗣️ Inglés · 🎨 Artes · ⚽ Ed. Física · 💻 Tecnología\n\n¿Qué quieres aprender hoy? 😊',
  timestamp: Date.now()
}

export const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      mensajes: [BIENVENIDA],
      isTyping: false,
      materiaContexto: null,
      queryCount: 0,
      setTyping: (v) => set({ isTyping: v }),
      setMateriaContexto: (id) => set({ materiaContexto: id }),
      addMensaje: (msg) =>
        set((state) => ({
          mensajes: [
            ...state.mensajes,
            { ...msg, id: Math.random().toString(36).slice(2, 10), timestamp: Date.now() }
          ]
        })),
      incrementQueryCount: () =>
        set((state) => ({ queryCount: state.queryCount + 1 })),
      clearHistory: () => set({ mensajes: [BIENVENIDA], materiaContexto: null })
    }),
    {
      name: 'profe-ia-tita-storage',
      // Solo persistir el contador, no el historial completo
      partialize: (state) => ({ queryCount: state.queryCount })
    }
  )
)
