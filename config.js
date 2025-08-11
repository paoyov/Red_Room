// Red Room Configuration
const RedRoomConfig = {
    // General Settings
    appName: "RED ROOM",
    version: "1.0.0",
    
    // Visual Settings
    colors: {
        primary: "#00ff00",      // Green text
        secondary: "#ff0000",    // Red accents
        background: "#000000",   // Black background
        warning: "#ffff00",      // Yellow warnings
        success: "#00ff00",      // Green success
        error: "#ff0000"         // Red errors
    },
    
    // Animation Settings
    animations: {
        glitchFrequency: 0.1,    // How often glitch effects occur (0-1)
        particleDensity: 0.3,    // Density of particle effects
        scanlineSpeed: 0.1,      // Speed of CRT scanlines
        fadeInDuration: 300      // Duration of fade-in animations
    },
    
    // Chat Settings
    chat: {
        maxMessageLength: 200,
        autoScroll: true,
        messageDelay: {
            min: 1000,           // Minimum delay between messages
            max: 5000            // Maximum delay between messages
        },
        strangers: [
            {
                id: 'dark_stranger_1',
                name: 'Dark_Stranger',
                personality: 'mysterious',
                messages: [
                    "Hola, ¿cómo estás?",
                    "¿Qué tal tu noche?",
                    "Somos estudiantes de informática, ¿te interesa la tecnología?",
                    "¿Vives cerca del centro?",
                    "Tenemos un proyecto interesante, ¿te gustaría verlo?",
                    "Es una página en construcción, pero está genial",
                    "¿Puedes hacer clic en este enlace?",
                    "Perfecto, gracias por tu ayuda",
                    "Nos vemos pronto..."
                ],
                responseDelay: [2000, 3000, 4000, 2000, 3000, 2000, 1500, 1000, 500]
            },
            {
                id: 'anonymous_001',
                name: 'Anonymous_001',
                personality: 'creepy',
                messages: [
                    "Hola chicas...",
                    "¿Qué están haciendo esta noche?",
                    "¿Están solas en casa?",
                    "Me gusta tu voz...",
                    "¿Puedo ver tu cara?",
                    "Enciende la cámara...",
                    "No tengas miedo...",
                    "Solo quiero ser tu amigo...",
                    "¿Por qué no respondes?"
                ],
                responseDelay: [3000, 4000, 3000, 5000, 4000, 3000, 2000, 3000, 2000]
            },
            {
                id: 'tech_guy',
                name: 'Tech_Guy_2024',
                personality: 'friendly',
                messages: [
                    "¡Hola! ¿Cómo va todo?",
                    "¿Les gusta la programación?",
                    "Estamos desarrollando una app genial",
                    "¿Quieren ser beta testers?",
                    "Es súper seguro, no se preocupen",
                    "Solo necesitamos algunos datos",
                    "¿Cuál es su ubicación aproximada?",
                    "Perfecto, gracias por la información",
                    "Nos pondremos en contacto pronto"
                ],
                responseDelay: [1500, 2000, 3000, 2500, 2000, 3000, 4000, 2000, 1000]
            },
            {
                id: 'hacker_1337',
                name: 'H4CK3R_1337',
                personality: 'technical',
                messages: [
                    "Greetings, fellow netizen...",
                    "I see you're exploring the deep web",
                    "Your IP address is quite interesting",
                    "Have you heard of Red Rooms?",
                    "They say the best ones are invitation-only",
                    "I could show you something... special",
                    "Just need to verify your location first",
                    "Perfect. You're exactly where I thought",
                    "Welcome to the real internet..."
                ],
                responseDelay: [4000, 3500, 3000, 5000, 4000, 3000, 2500, 2000, 1500]
            }
        ]
    },
    
    // Audio Settings
    audio: {
        enabled: true,
        volume: 0.01,            // Very low volume for ambient noise
        effects: {
            static: true,
            glitch: true,
            ambient: true
        }
    },
    
    // Effects Settings
    effects: {
        particles: true,
        scanlines: true,
        glitch: true,
        matrix: false,           // Matrix rain effect (can be heavy)
        crt: true,
        audioVisualizer: true
    },
    
    // Performance Settings
    performance: {
        maxParticles: 50,
        animationFrameRate: 60,
        enableVSync: true
    },
    
    // Warning Messages
    warnings: {
        title: "⚠️ ADVERTENCIA",
        content: [
            "Estás a punto de acceder a contenido de la Dark Web.",
            "Este sitio contiene material sensible y puede ser perturbador.",
            "La información que verás es simulada con fines educativos."
        ],
        continueText: "CONTINUAR",
        leaveText: "SALIR"
    },
    
    // Loading Messages
    loading: {
        messages: [
            "Conectando a la red oscura...",
            "Buscando servidores TOR...",
            "Encriptando conexión...",
            "Accediendo a la Dark Web...",
            "Conexión establecida..."
        ],
        duration: 3000
    },
    
    // Keyboard Shortcuts
    shortcuts: {
        sendMessage: "Enter",
        nextUser: "Ctrl+N",
        clearChat: "Ctrl+L",
        toggleGlitch: "Ctrl+G",
        toggleEffects: "Ctrl+E"
    },
    
    // Debug Settings
    debug: {
        enabled: false,
        showFPS: false,
        logMessages: false,
        showPerformance: false
    }
};

// Export configuration for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RedRoomConfig;
} 