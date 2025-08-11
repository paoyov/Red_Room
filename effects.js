// Advanced Visual Effects for Red Room
class VisualEffects {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.isActive = false;
        
        this.init();
    }

    init() {
        this.createCanvas();
        this.setupEventListeners();
        this.startEffects();
    }

    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '1';
        this.canvas.style.opacity = '0.3';
        
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    setupEventListeners() {
        // Add mouse tracking for particle effects
        document.addEventListener('mousemove', (e) => {
            if (this.isActive && Math.random() < 0.1) {
                this.addParticle(e.clientX, e.clientY);
            }
        });

        // Add keyboard effects
        document.addEventListener('keydown', (e) => {
            if (e.key === 'g' && e.ctrlKey) {
                this.toggleGlitchMode();
            }
        });
    }

    startEffects() {
        this.isActive = true;
        this.animate();
        
        // Start periodic effects
        setInterval(() => {
            this.randomGlitch();
        }, 8000);
        
        setInterval(() => {
            this.addRandomParticle();
        }, 2000);
    }

    addParticle(x, y) {
        this.particles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 1,
            decay: 0.02,
            color: `hsl(${Math.random() * 60 + 120}, 100%, 50%)`
        });
    }

    addRandomParticle() {
        this.addParticle(
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight
        );
    }

    animate() {
        if (!this.isActive) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];
            
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life -= particle.decay;
            
            if (particle.life <= 0) {
                this.particles.splice(i, 1);
                continue;
            }
            
            this.ctx.save();
            this.ctx.globalAlpha = particle.life;
            this.ctx.fillStyle = particle.color;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        }
        
        requestAnimationFrame(() => this.animate());
    }

    randomGlitch() {
        const elements = document.querySelectorAll('.message, .chat-header, .video-header');
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        
        if (randomElement) {
            randomElement.style.filter = 'hue-rotate(180deg) brightness(1.5)';
            setTimeout(() => {
                randomElement.style.filter = 'none';
            }, 100);
        }
    }

    toggleGlitchMode() {
        const body = document.body;
        if (body.classList.contains('glitch-mode')) {
            body.classList.remove('glitch-mode');
        } else {
            body.classList.add('glitch-mode');
        }
    }

    // Matrix rain effect
    createMatrixRain() {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '0';
        canvas.style.opacity = '0.1';
        
        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        const matrixArray = matrix.split("");
        
        const fontSize = 10;
        const columns = canvas.width / fontSize;
        const drops = [];
        
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }
        
        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#0F0';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        
        setInterval(draw, 35);
    }
}

// CRT monitor effect
class CRTEffect {
    constructor() {
        this.init();
    }

    init() {
        this.addCRTStyles();
        this.addScanlines();
    }

    addCRTStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .crt-effect {
                position: relative;
                overflow: hidden;
            }
            
            .crt-effect::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(
                    transparent 50%,
                    rgba(0, 0, 0, 0.5) 50%
                );
                background-size: 100% 4px;
                pointer-events: none;
                z-index: 2;
                animation: scanlines 0.1s linear infinite;
            }
            
            .crt-effect::after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: radial-gradient(
                    ellipse at center,
                    transparent 0%,
                    rgba(0, 0, 0, 0.2) 100%
                );
                pointer-events: none;
                z-index: 3;
            }
            
            @keyframes scanlines {
                0% { transform: translateY(0); }
                100% { transform: translateY(4px); }
            }
        `;
        document.head.appendChild(style);
        
        // Apply CRT effect to main interface
        const mainInterface = document.getElementById('main-interface');
        if (mainInterface) {
            mainInterface.classList.add('crt-effect');
        }
    }

    addScanlines() {
        const scanlines = document.createElement('div');
        scanlines.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(0, 0, 0, 0.1) 2px,
                rgba(0, 0, 0, 0.1) 4px
            );
            pointer-events: none;
            z-index: 1;
        `;
        document.body.appendChild(scanlines);
    }
}

// Audio visualizer effect
class AudioVisualizer {
    constructor() {
        this.audioContext = null;
        this.analyser = null;
        this.dataArray = null;
        this.canvas = null;
        this.ctx = null;
        
        this.init();
    }

    init() {
        this.createVisualizerCanvas();
        this.setupAudio();
    }

    createVisualizerCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 60px;
            pointer-events: none;
            z-index: 1;
            opacity: 0.3;
        `;
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        
        this.canvas.width = window.innerWidth;
        this.canvas.height = 60;
        
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
        });
    }

    setupAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.analyser = this.audioContext.createAnalyser();
            this.analyser.fftSize = 256;
            
            const bufferLength = this.analyser.frequencyBinCount;
            this.dataArray = new Uint8Array(bufferLength);
            
            // Create noise source
            const bufferSize = this.audioContext.sampleRate * 0.1;
            const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
            const output = buffer.getChannelData(0);
            
            for (let i = 0; i < bufferSize; i++) {
                output[i] = Math.random() * 2 - 1;
            }
            
            const noise = this.audioContext.createBufferSource();
            noise.buffer = buffer;
            noise.loop = true;
            
            const gainNode = this.audioContext.createGain();
            gainNode.gain.value = 0.01;
            
            noise.connect(this.analyser);
            this.analyser.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            // Start audio after user interaction
            document.addEventListener('click', () => {
                noise.start();
                this.animate();
            }, { once: true });
            
        } catch (error) {
            console.log('Audio not supported');
        }
    }

    animate() {
        if (!this.analyser) return;
        
        this.analyser.getByteFrequencyData(this.dataArray);
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        const barWidth = (this.canvas.width / this.dataArray.length) * 2.5;
        let barHeight;
        let x = 0;
        
        for (let i = 0; i < this.dataArray.length; i++) {
            barHeight = this.dataArray[i] / 2;
            
            this.ctx.fillStyle = `hsl(${120 + barHeight}, 100%, 50%)`;
            this.ctx.fillRect(x, this.canvas.height - barHeight, barWidth, barHeight);
            
            x += barWidth + 1;
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize all effects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Start effects after a delay to avoid overwhelming the user
    setTimeout(() => {
        new VisualEffects();
        new CRTEffect();
        new AudioVisualizer();
    }, 3000);
}); 