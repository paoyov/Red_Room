# Instrucciones de Uso - Red Room

## 🚀 Cómo Iniciar la Experiencia

1. **Abrir el archivo**: Haz doble clic en `index.html` o ábrelo en tu navegador web
2. **Esperar la carga**: Observa la secuencia de carga atmosférica
3. **Leer la advertencia**: Aparecerá un modal con información importante
4. **Continuar**: Haz clic en "CONTINUAR" para acceder a la experiencia
5. **Interactuar**: Escribe mensajes y observa las respuestas de los "extraños"

## 🎮 Controles y Atajos

### Teclado
- **Enter**: Enviar mensaje en el chat
- **Ctrl + N**: Cambiar al siguiente usuario automáticamente
- **Ctrl + L**: Limpiar el historial del chat (para testing)
- **Ctrl + G**: Activar/desactivar modo glitch
- **Ctrl + E**: Activar/desactivar efectos visuales

### Mouse
- **Clic izquierdo**: Interactuar con botones y elementos
- **Movimiento**: Genera partículas visuales (efecto sutil)

## 🎨 Personalización

### Cambiar Colores
Edita el archivo `config.js` y modifica la sección `colors`:

```javascript
colors: {
    primary: "#00ff00",      // Color principal (verde)
    secondary: "#ff0000",    // Color secundario (rojo)
    background: "#000000",   // Color de fondo (negro)
    // ... más colores
}
```

### Agregar Nuevos Usuarios
En `config.js`, dentro de `chat.strangers`, puedes agregar nuevos perfiles:

```javascript
{
    id: 'nuevo_usuario',
    name: 'Nombre_Usuario',
    personality: 'tipo_personalidad',
    messages: [
        "Mensaje 1",
        "Mensaje 2",
        // ... más mensajes
    ],
    responseDelay: [2000, 3000, 4000] // Tiempos en milisegundos
}
```

### Ajustar Efectos Visuales
En `config.js`, sección `effects`:

```javascript
effects: {
    particles: true,        // Efectos de partículas
    scanlines: true,        // Líneas de escaneo CRT
    glitch: true,          // Efectos de glitch
    matrix: false,         // Lluvia de Matrix (pesado)
    crt: true,            // Efecto CRT
    audioVisualizer: true  // Visualizador de audio
}
```

## 🔧 Configuración Avanzada

### Rendimiento
Si la página va lenta, ajusta en `config.js`:

```javascript
performance: {
    maxParticles: 30,      // Reducir partículas
    animationFrameRate: 30, // Reducir FPS
    enableVSync: false     // Desactivar VSync
}
```

### Audio
Para desactivar el audio:

```javascript
audio: {
    enabled: false,        // Desactivar completamente
    volume: 0.0,          // O poner volumen en 0
}
```

## 📁 Estructura de Archivos

```
Red_Room/
├── index.html           # Página principal
├── styles.css           # Estilos y animaciones
├── script.js            # Lógica principal
├── effects.js           # Efectos visuales avanzados
├── config.js            # Configuración personalizable
├── README.md            # Documentación técnica
└── INSTRUCCIONES.md     # Este archivo
```

## 🎯 Características Especiales

### Efectos Visuales
- **Glitch**: Efectos de distorsión aleatorios
- **Partículas**: Efectos de partículas que siguen el mouse
- **Scanlines**: Líneas de escaneo estilo CRT
- **Estática**: Efecto de estática en el video
- **Visualizador de Audio**: Barras de audio en la parte inferior

### Sistema de Chat
- **Usuarios automáticos**: 4 perfiles diferentes con personalidades únicas
- **Mensajes dinámicos**: Los usuarios cambian automáticamente
- **Estadísticas en vivo**: Contador de mensajes, tiempo online, espectadores
- **Simulación realista**: Ping variable, ubicación desconocida

## ⚠️ Advertencias Importantes

1. **Contenido sensible**: Esta es una simulación de contenido de la Dark Web
2. **Efectos visuales**: Puede contener efectos de parpadeo y colores intensos
3. **Propósito educativo**: Creado únicamente como experiencia narrativa
4. **No es real**: Todo el contenido es simulado y ficticio

## 🛠️ Solución de Problemas

### La página no carga
- Verifica que todos los archivos estén en la misma carpeta
- Asegúrate de que el navegador soporte JavaScript
- Intenta con un navegador diferente

### Efectos muy lentos
- Reduce `maxParticles` en la configuración
- Desactiva efectos pesados como `matrix`
- Cierra otras pestañas del navegador

### Audio no funciona
- Algunos navegadores requieren interacción del usuario para reproducir audio
- Haz clic en cualquier parte de la página
- Verifica que el audio del sistema esté activado

## 📞 Soporte

Si tienes problemas o quieres hacer modificaciones:

1. Revisa la configuración en `config.js`
2. Verifica que todos los archivos estén presentes
3. Prueba en diferentes navegadores
4. Revisa la consola del navegador para errores

---

**Disfruta de la experiencia Red Room! 🎭** 