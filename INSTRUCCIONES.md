# 🎓 Profe IA · TITA — v2.1.0

Tutor personal de Tita con IA real (Claude de Anthropic).
Optimizado para móvil y listo para alojar en **Render.com**.

---

## 🖥️ Desarrollo local

```bash
npm install
cp .env.example .env     # luego pega tu API key adentro
npm run dev              # abre http://localhost:5173
```

---

## ☁️ Desplegar en Render.com (gratis)

### 1. Sube el código a GitHub
Crea un repo (puede ser privado) y sube todos los archivos.

### 2. Crea un Web Service en Render
- render.com → New → Web Service → conecta tu repo
- Render lee el `render.yaml` automáticamente, o configura manual:

| Campo | Valor |
|---|---|
| Environment | Node |
| Build Command | `npm install && npm run build` |
| Start Command | `npm start` |

### 3. Agrega la API Key
Render → tu servicio → Environment → Add Variable:
- Key: `ANTHROPIC_API_KEY`
- Value: `sk-ant-api03-...`

### 4. Deploy
Click "Manual Deploy" → espera ~2-3 min → listo en `https://tu-app.onrender.com`

> Plan Free duerme tras 15 min inactivo (primera carga lenta ~30s).

---

## 📱 Instalar como app (PWA)

**iPhone**: Safari → compartir ↑ → "Agregar a pantalla de inicio"
**Android**: Chrome → menú ⋮ → "Agregar a pantalla de inicio"

---

Hecho con 💜 para Tita · 1° Medio 2026 · Chile 🇨🇱
