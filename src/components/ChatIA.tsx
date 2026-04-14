import { useState, useRef, useEffect } from 'react'
import { useChatStore } from '../store/chatStore'
import { materias } from '../data/materias'

interface Props {
  onVolver: () => void
}

function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br/>')
}

export default function ChatIA({ onVolver }: Props) {
  const { mensajes, isTyping, materiaContexto, addMensaje, setTyping, clearHistory, incrementQueryCount } = useChatStore()
  const [input, setInput] = useState('')
  const chatRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [mensajes, isTyping])

  const enviar = async (texto?: string) => {
    const msg = (texto ?? input).trim()
    if (!msg || isTyping) return
    setInput('')

    addMensaje({ rol: 'usuario', contenido: msg })
    incrementQueryCount()
    setTyping(true)

    const materiaInfo = materiaContexto
      ? `La estudiante está consultando sobre la materia: ${materiaContexto}. Enfoca tus respuestas en ese contexto cuando sea relevante.`
      : ''

    const systemPrompt = `Eres el Profe IA, un tutor educativo experto para estudiantes de 1° Medio en Chile (aproximadamente 14-15 años).
Tu estudiante se llama Tita. Usa su nombre de vez en cuando para hacerla sentir cómoda y personalizar la experiencia.
Tu misión es explicar contenidos de todas las materias del currículo chileno de forma clara, motivadora y accesible.

Materias que dominas: Lenguaje y Literatura, Matemática, Biología, Física, Química, Historia y Geografía, Inglés, Artes y Música, Educación Física, Tecnología e Informática.

Reglas:
- Responde SIEMPRE en español (excepto cuando enseñes inglés)
- Usa un lenguaje cercano, motivador y positivo para adolescentes
- Sé conciso: respuestas de máximo 3-4 párrafos o usa listas cortas
- Usa emojis ocasionalmente para hacer la respuesta más amigable
- Da ejemplos concretos y cotidianos
- Si Tita comete un error, corrígelo con amabilidad
- Cuando expliques matemática o ciencias, muestra los pasos claramente
- Termina con una pregunta de seguimiento o una frase motivadora cuando sea apropiado
${materiaInfo}

Nunca respondas sobre temas ajenos a la educación. Si te preguntan algo inapropiado, redirige amablemente hacia el estudio.`

    try {
      const historial = mensajes
        .filter(m => m.id !== 'welcome')
        .slice(-10)
        .map(m => ({
          role: m.rol === 'usuario' ? 'user' : 'assistant',
          content: m.contenido
        }))

      // ✅ Llamada al proxy local — NO directamente a Anthropic
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: systemPrompt,
          messages: [...historial, { role: 'user', content: msg }]
        })
      })

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}))
        // errData.error puede ser string o {type, message} desde Anthropic
        const rawErr = errData.error
        const errMsg =
          typeof rawErr === 'string'
            ? rawErr
            : (rawErr?.message ?? errData.message ?? `Error ${response.status}`)
        throw new Error(errMsg)
      }

      const data = await response.json()
      // Anthropic puede devolver un objeto de error aunque el status sea 200
      const respuesta =
        data.content?.[0]?.text ??
        data.error?.message ??
        'Lo siento, hubo un problema. Intenta de nuevo.'

      setTyping(false)
      addMensaje({ rol: 'ia', contenido: respuesta })
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Error desconocido'
      console.error('Error IA:', errorMsg)
      setTyping(false)
      addMensaje({
        rol: 'ia',
        contenido: `⚠️ **${errorMsg}**\n\n💡 Si estás en Render, ve a tu servicio → **Environment** → agrega la variable \`ANTHROPIC_API_KEY\` con tu clave de Anthropic y haz redeploy.`
      })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      enviar()
    }
  }

  const sugeridas = materiaContexto
    ? [
        `Explícame los temas principales de ${materiaContexto}`,
        `Dame un ejercicio de ${materiaContexto}`,
        `Tips para estudiar ${materiaContexto}`,
        '¿Cómo me preparo para el próximo examen?'
      ]
    : [
        '¿Cómo resuelvo ecuaciones?',
        'Explícame la fotosíntesis',
        '¿Qué es el Present Simple?',
        'Tips para estudiar mejor 📚'
      ]

  return (
    <div className="flex flex-col" style={{ height: 'calc(100dvh - 64px - 72px)' }}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3 flex-shrink-0">
        <button
          onClick={onVolver}
          className="p-2 text-purple-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors text-sm flex items-center gap-1"
        >
          ← Volver
        </button>
        <div className="flex-1">
          <h2 className="text-white font-display font-bold text-lg flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
            Profe IA
          </h2>
          <p className="text-purple-300 text-xs">Tutor personal de Tita · claude-sonnet</p>
        </div>
        <button
          onClick={clearHistory}
          className="p-2 text-purple-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors text-xs"
          title="Limpiar chat"
        >
          🗑️
        </button>
      </div>

      {/* Chat */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto space-y-3 px-1 pb-2"
      >
        {mensajes.map((m) => (
          <div key={m.id} className={`flex ${m.rol === 'usuario' ? 'justify-end' : 'justify-start'}`}>
            {m.rol === 'ia' && (
              <div className="w-8 h-8 rounded-full flex-shrink-0 mr-2 flex items-center justify-center text-base"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #c026d3)' }}>
                🤖
              </div>
            )}
            <div
              className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                m.rol === 'usuario'
                  ? 'text-white rounded-br-md'
                  : 'text-purple-50 rounded-bl-md glass'
              }`}
              style={m.rol === 'usuario' ? {
                background: 'linear-gradient(135deg, #7c3aed, #c026d3)',
              } : {}}
              dangerouslySetInnerHTML={{
                __html: renderMarkdown(m.contenido)
              }}
            />
          </div>
        ))}

        {isTyping && (
          <div className="flex items-end gap-2">
            <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-base"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #c026d3)' }}>
              🤖
            </div>
            <div className="glass rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1">
              <span className="typing-dot w-2 h-2 bg-purple-300 rounded-full" />
              <span className="typing-dot w-2 h-2 bg-fuchsia-300 rounded-full" />
              <span className="typing-dot w-2 h-2 bg-pink-300 rounded-full" />
            </div>
          </div>
        )}
      </div>

      {/* Sugeridas */}
      <div className="flex gap-2 overflow-x-auto py-2 flex-shrink-0 no-scrollbar">
        {sugeridas.map((s, i) => (
          <button
            key={i}
            onClick={() => enviar(s)}
            disabled={isTyping}
            className="flex-shrink-0 text-xs px-3 py-2 rounded-full text-purple-200 hover:text-white transition-colors disabled:opacity-40"
            style={{ background: 'rgba(124,58,237,0.25)', border: '1px solid rgba(167,139,250,0.3)' }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2 flex-shrink-0 pt-1">
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escríbele al Profe IA..."
          rows={1}
          className="flex-1 resize-none rounded-2xl px-4 py-3 text-sm text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(167,139,250,0.25)',
            maxHeight: '100px',
            lineHeight: '1.5'
          }}
        />
        <button
          onClick={() => enviar()}
          disabled={!input.trim() || isTyping}
          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #c026d3)',
            boxShadow: '0 4px 16px rgba(192,38,211,0.35)'
          }}
        >
          <span className="text-white text-lg">↑</span>
        </button>
      </div>

      {/* Materias rápidas */}
      <div className="flex gap-2 overflow-x-auto pt-2 pb-1 flex-shrink-0 no-scrollbar">
        {materias.slice(0, 6).map((m) => (
          <button
            key={m.id}
            onClick={() => enviar(`Ayúdame con ${m.nombre}`)}
            disabled={isTyping}
            className={`flex-shrink-0 bg-gradient-to-r ${m.color} text-white text-xs px-3 py-2 rounded-full flex items-center gap-1.5 hover:opacity-90 transition-opacity disabled:opacity-40`}
          >
            <span>{m.icono}</span>
            <span className="hidden sm:inline font-medium">{m.nombre.split(' ')[0]}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
