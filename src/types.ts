export type Vista = 'dashboard' | 'chat' | 'materia' | 'perfil'

export interface ModuloMateria {
  titulo: string
  contenido: string
  subtemas: string[]
}

export interface RecursoMateria {
  icono: string
  nombre: string
  desc: string
  url: string
}

export interface Materia {
  id: string
  nombre: string
  icono: string
  color: string
  accentColor: string
  descripcion: string
  temas: string[]
  tips: string[]
  modulos: ModuloMateria[]
  recursos: RecursoMateria[]
}

export interface Mensaje {
  id: string
  rol: 'usuario' | 'ia'
  contenido: string
  timestamp: number
}
