// Red Room - Interactive Experience
class RedRoom {
    constructor() {
        this.isConnected = false;
        this.currentUser = null;
        this.messageCount = 0;
        this.startTime = Date.now();
        this.viewerCount = 1247;
        this.currentStranger = null;
        this.chatHistory = [];
        this.liveChatMessages = [];
        this.liveChatUsers = [];
        
        // Stranger profiles based on the story
        this.strangers = [
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
            }
        ];

        // Live chat users for Twitch-style chat
        this.liveChatUsers = [
            'DarkViewer_001', 'Anonymous_1337', 'RedRoomFan', 'HorrorLover', 'DarkWebExplorer',
            'StreamWatcher', 'NightOwl', 'DarkSide', 'RedRoomVeteran', 'AnonymousUser',
            'DarkWebSurfer', 'RedRoomNewbie', 'HorrorStreamer', 'DarkChatter', 'RedRoomMaster'
        ];

        // Live chat messages
        this.liveChatMessages = [
            "¡Qué transmisión más intensa! 🔥",
            "¿Alguien más siente esa tensión? 😰",
            "Esta es la mejor Red Room que he visto",
            "¡Increíble atmósfera! 👻",
            "¿Qué va a pasar ahora? 😱",
            "Me encanta este contenido oscuro",
            "¡Siguiente víctima! 😈",
            "Esta transmisión es adictiva",
            "¿Alguien sabe qué hora es?",
            "¡Red Room para siempre! 💀",
            "Esta noche va a ser épica",
            "¿Quién más está viendo esto?",
            "¡El chat está en llamas! 🔥",
            "Me encanta la música de fondo",
            "¿Alguien más tiene escalofríos?",
            "¡Esta es la verdadera Dark Web!",
            "¿Cuánto tiempo llevan transmitiendo?",
            "¡El streamer es un genio!",
            "¿Alguien más está solo en casa?",
            "¡Red Room es vida! 💯"
        ];

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.startLoadingSequence();
        this.updateStats();
        this.startLiveChat();
    }

    setupEventListeners() {
        // Live chat input
        const liveChatInput = document.getElementById('live-chat-input');
        const liveChatSend = document.getElementById('live-chat-send');

        liveChatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.sendLiveChatMessage();
            }
        });

        liveChatSend.addEventListener('click', () => this.sendLiveChatMessage());

        // Modal buttons
        document.getElementById('continue-btn').addEventListener('click', () => {
            this.hideWarningModal();
            this.showMainInterface();
        });

        document.getElementById('leave-btn').addEventListener('click', () => {
            window.close();
        });

        // Video functionality - Simplified and direct approach
        const video = document.getElementById('main-video');
        const playPauseBtn = document.getElementById('play-pause-btn');
        const muteBtn = document.getElementById('mute-btn');
        const videoStatus = document.getElementById('video-status');
        const statusText = document.getElementById('status-text');
        const videoInfo = document.getElementById('video-info');
        const infoText = document.getElementById('info-text');
        const videoOverlay = document.getElementById('video-overlay');

        // Global function to start video
        window.startVideo = function() {
            if (video) {
                console.log('Starting video...');
                video.muted = true;
                video.play().then(() => {
                    console.log('Video started successfully');
                    updateStatus('▶️ Video reproduciéndose');
                    videoOverlay.style.display = 'none';
                    if (playPauseBtn) playPauseBtn.textContent = '⏸️';
                }).catch((error) => {
                    console.error('Error starting video:', error);
                    updateStatus('❌ Error: ' + error.message);
                });
            }
        };

        function updateStatus(message) {
            if (statusText) {
                statusText.textContent = message;
            }
            console.log('Status:', message);
        }

        function updateInfo(message) {
            if (infoText) {
                infoText.textContent = message;
            }
        }

        if (video) {
            console.log('Video element found, setting up...');
            
            // Set video properties
            video.muted = true;
            video.volume = 0.5;
            
            // Play/Pause button functionality
            if (playPauseBtn) {
                playPauseBtn.addEventListener('click', () => {
                    if (video.paused) {
                        video.play().then(() => {
                            playPauseBtn.textContent = '⏸️';
                            updateStatus('▶️ Video reproduciéndose');
                            videoOverlay.style.display = 'none';
                        }).catch((error) => {
                            console.error('Error playing video:', error);
                            updateStatus('❌ Error: ' + error.message);
                        });
                    } else {
                        video.pause();
                        playPauseBtn.textContent = '▶️';
                        updateStatus('⏸️ Video pausado');
                    }
                });
            }

            // Mute button functionality
            if (muteBtn) {
                muteBtn.addEventListener('click', () => {
                    if (video.muted) {
                        video.muted = false;
                        muteBtn.textContent = '🔊';
                    } else {
                        video.muted = true;
                        muteBtn.textContent = '🔇';
                    }
                });
            }

            // Video event listeners
            video.addEventListener('loadstart', () => {
                updateStatus('🔄 Cargando video...');
            });

            video.addEventListener('loadedmetadata', () => {
                updateStatus('✅ Video cargado');
                updateInfo(`📊 ${video.duration}s | ${video.videoWidth}x${video.videoHeight}`);
            });

            video.addEventListener('canplay', () => {
                updateStatus('🎯 Video listo');
            });

            video.addEventListener('play', () => {
                updateStatus('▶️ Reproduciendo');
                if (playPauseBtn) playPauseBtn.textContent = '⏸️';
                videoOverlay.style.display = 'none';
            });

            video.addEventListener('pause', () => {
                updateStatus('⏸️ Pausado');
                if (playPauseBtn) playPauseBtn.textContent = '▶️';
            });

            video.addEventListener('ended', () => {
                updateStatus('🔄 Reiniciando...');
            });

            video.addEventListener('error', (e) => {
                updateStatus('❌ Error al cargar');
                console.error('Video error:', e);
                console.error('Error details:', video.error);
            });

            // Try autoplay after a short delay
            setTimeout(() => {
                if (video.paused) {
                    console.log('Attempting autoplay...');
                    video.play().then(() => {
                        console.log('Autoplay successful');
                        updateStatus('✅ Autoplay exitoso');
                        videoOverlay.style.display = 'none';
                    }).catch((error) => {
                        console.log('Autoplay failed:', error);
                        updateStatus('⚠️ Haz clic en "Reproducir Video"');
                    });
                }
            }, 2000);

        } else {
            console.error('Video element not found!');
        }

        // Streamer actions
        const followBtn = document.querySelector('.follow-btn');
        const subscribeBtn = document.querySelector('.subscribe-btn');

        if (followBtn) {
            followBtn.addEventListener('click', () => {
                this.toggleFollow();
            });
        }

        if (subscribeBtn) {
            subscribeBtn.addEventListener('click', () => {
                this.showSubscriptionModal();
            });
        }

        // Update ping randomly
        setInterval(() => {
            this.updatePing();
        }, 5000);
    }

    startLoadingSequence() {
        const loadingScreen = document.getElementById('loading-screen');
        const loadingText = document.querySelector('.loading-text');
        const loadingProgress = document.querySelector('.loading-progress');

        const loadingMessages = [
            "Conectando a la red oscura...",
            "Buscando servidores TOR...",
            "Encriptando conexión...",
            "Accediendo a la Dark Web...",
            "Conexión establecida..."
        ];

        let messageIndex = 0;
        let progress = 0;

        const loadingInterval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;
            
            loadingProgress.style.width = progress + '%';
            
            if (messageIndex < loadingMessages.length) {
                loadingText.textContent = loadingMessages[messageIndex];
                messageIndex++;
            }

            if (progress >= 100) {
                clearInterval(loadingInterval);
                setTimeout(() => {
                    loadingScreen.style.opacity = '0';
                    setTimeout(() => {
                        this.showWarningModal();
                    }, 500);
                }, 1000);
            }
        }, 800);
    }

    showWarningModal() {
        document.getElementById('warning-modal').classList.remove('hidden');
    }

    hideWarningModal() {
        document.getElementById('warning-modal').classList.add('hidden');
    }

    showMainInterface() {
        document.getElementById('main-interface').classList.remove('hidden');
        this.isConnected = true;
        this.startViewerCount();
    }

    startLiveChat() {
        // Add initial welcome messages
        setTimeout(() => {
            this.addLiveChatMessage('Sistema', '¡Bienvenidos a la Red Room! 🔴', 'system');
        }, 1000);

        setTimeout(() => {
            this.addLiveChatMessage('Dark_Streamer', '¡Hola a todos! Gracias por estar aquí en esta transmisión especial', 'streamer');
        }, 2000);

        // Start random chat messages
        setInterval(() => {
            this.addRandomLiveChatMessage();
        }, 3000 + Math.random() * 4000); // Random interval between 3-7 seconds
    }

    addRandomLiveChatMessage() {
        const randomUser = this.liveChatUsers[Math.floor(Math.random() * this.liveChatUsers.length)];
        const randomMessage = this.liveChatMessages[Math.floor(Math.random() * this.liveChatMessages.length)];
        
        this.addLiveChatMessage(randomUser, randomMessage, 'viewer');
    }

    addLiveChatMessage(username, message, type = 'viewer') {
        const liveChatMessages = document.getElementById('live-chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${type}`;
        
        const timestamp = new Date().toLocaleTimeString();
        
        // Escapar HTML para permitir cualquier texto sin problemas de seguridad
        const escapedMessage = this.escapeHtml(message);
        
        messageDiv.innerHTML = `
            <span class="username">${username}</span>
            <span class="message-text">${escapedMessage}</span>
        `;
        
        liveChatMessages.appendChild(messageDiv);
        liveChatMessages.scrollTop = liveChatMessages.scrollHeight;
        
        // Add to chat history
        this.liveChatMessages.push({
            username,
            message,
            type,
            timestamp: new Date()
        });

        // Limit messages to prevent memory issues
        if (this.liveChatMessages.length > 100) {
            this.liveChatMessages.shift();
            if (liveChatMessages.children.length > 100) {
                liveChatMessages.removeChild(liveChatMessages.firstChild);
            }
        }
    }

    sendLiveChatMessage() {
        const input = document.getElementById('live-chat-input');
        const message = input.value.trim();
        
        if (message) {
            this.addLiveChatMessage('Tú', message, 'user');
            input.value = '';
            this.messageCount++;
            this.updateStats();
            
            // Enfocar el input para continuar escribiendo
            input.focus();
        }
    }

    toggleFollow() {
        const followBtn = document.querySelector('.follow-btn');
        if (followBtn.textContent === '+ Seguir') {
            followBtn.textContent = '✓ Siguiendo';
            followBtn.style.background = '#9147ff';
            this.addLiveChatMessage('Sistema', '¡Ahora sigues a Dark_Streamer!', 'system');
        } else {
            followBtn.textContent = '+ Seguir';
            followBtn.style.background = '#9147ff';
            this.addLiveChatMessage('Sistema', 'Dejaste de seguir a Dark_Streamer', 'system');
        }
    }

    showSubscriptionModal() {
        this.addLiveChatMessage('Sistema', '💎 Función de suscripción próximamente disponible', 'system');
    }

    // Función para escapar HTML y permitir cualquier texto
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    updatePing() {
        const pingElement = document.getElementById('ping-value');
        const newPing = Math.floor(Math.random() * 200) + 50;
        pingElement.textContent = newPing + 'ms';
    }

    startViewerCount() {
        setInterval(() => {
            // Simulate viewer count changes
            const change = Math.floor(Math.random() * 20) - 10; // -10 to +10
            this.viewerCount = Math.max(1000, this.viewerCount + change);
            
            // Update all viewer count displays
            const viewerElements = document.querySelectorAll('#viewer-count');
            viewerElements.forEach(element => {
                element.textContent = this.formatViewerCount(this.viewerCount);
            });
        }, 5000);
    }

    formatViewerCount(count) {
        if (count >= 1000) {
            return (count / 1000).toFixed(1) + 'k';
        }
        return count.toString();
    }

    updateStats() {
        const now = Date.now();
        const timeDiff = now - this.startTime;
        const hours = Math.floor(timeDiff / 3600000);
        const minutes = Math.floor((timeDiff % 3600000) / 60000);
        const seconds = Math.floor((timeDiff % 60000) / 1000);
        
        document.getElementById('time-online').textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        document.getElementById('message-count').textContent = this.messageCount;
        document.getElementById('connection-count').textContent = this.isConnected ? '1' : '0';
    }

    // Update stats every second
    updateStatsInterval() {
        setInterval(() => {
            this.updateStats();
        }, 1000);
    }
}

// Initialize the Red Room experience when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const redRoom = new RedRoom();
    redRoom.updateStatsInterval();
});

// Add some ambient sound effects (optional)
function addAmbientEffects() {
    // Create subtle background noise effect
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    function createNoise() {
        const bufferSize = audioContext.sampleRate * 0.1;
        const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        const output = buffer.getChannelData(0);
        
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }
        
        const whiteNoise = audioContext.createBufferSource();
        whiteNoise.buffer = buffer;
        whiteNoise.loop = true;
        
        const gainNode = audioContext.createGain();
        gainNode.gain.value = 0.01; // Very low volume
        
        whiteNoise.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        whiteNoise.start();
    }
    
    // Only start audio after user interaction
    document.addEventListener('click', () => {
        createNoise();
    }, { once: true });
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'l') {
        // Ctrl+L to clear chat (for testing)
        const liveChatMessages = document.getElementById('live-chat-messages');
        if (liveChatMessages) {
            liveChatMessages.innerHTML = '';
        }
    }
    
    if (e.ctrlKey && e.key === 'f') {
        // Ctrl+F to focus chat input
        const liveChatInput = document.getElementById('live-chat-input');
        if (liveChatInput) {
            liveChatInput.focus();
        }
    }
});

// Add some visual effects
function addVisualEffects() {
    // Random glitch effect on the screen
    setInterval(() => {
        if (Math.random() < 0.05) { // 5% chance every 5 seconds
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 100);
        }
    }, 5000);

    // Add some stream-like effects to the video player
    const videoPlayer = document.getElementById('video-player');
    if (videoPlayer) {
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance
                videoPlayer.style.filter = 'brightness(1.1) contrast(1.1)';
                setTimeout(() => {
                    videoPlayer.style.filter = 'none';
                }, 200);
            }
        }, 3000);
    }
}

// Initialize effects
document.addEventListener('DOMContentLoaded', () => {
    addVisualEffects();
    addAmbientEffects();
}); 