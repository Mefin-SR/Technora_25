document.addEventListener('DOMContentLoaded', function() {
    // Add any interactive functionality here
    
    // Button ripple effects
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            this.appendChild(ripple);
            
            // Get click position
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            // Position ripple
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });
    
    // Cursor trail effect
    const cursorTrail = document.createElement('div');
    cursorTrail.classList.add('cursor-trail');
    document.body.appendChild(cursorTrail);
    
    document.addEventListener('mousemove', (e) => {
        cursorTrail.style.left = `${e.pageX}px`;
        cursorTrail.style.top = `${e.pageY}px`;
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.fixed-header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(5, 1, 14, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(5, 217, 232, 0.2)';
        } else {
            header.style.background = 'rgba(13, 2, 33, 0.8)';
            header.style.boxShadow = 'none';
        }
    });
    
    // Random neon light bursts
    setInterval(() => {
        createRandomLightBurst();
    }, 3000);
    
    function createRandomLightBurst() {
        const burst = document.createElement('div');
        burst.classList.add('light-burst');
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        burst.style.left = `${x}%`;
        burst.style.top = `${y}%`;
        
        // Random color
        const colors = [var(--neon-pink), var(--neon-blue), var(--neon-purple), var(--neon-green)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        burst.style.boxShadow = `0 0 40px 20px ${color}`;
        
        document.querySelector('.background-effects').appendChild(burst);
        
        setTimeout(() => {
            burst.remove();
        }, 1000);
    }
});

// Add styles for cursor trail and ripple effect
const style = document.createElement('style');
style.textContent = `
    .cursor-trail {
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, var(--neon-purple) 0%, transparent 70%);
        pointer-events: none;
        transform: translate(-50%, -50%);
        z-index: 9999;
        mix-blend-mode: screen;
        transition: transform 0.1s ease;
    }
    
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.7);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    .light-burst {
        position: absolute;
        width: 0;
        height: 0;
        border-radius: 50%;
        pointer-events: none;
        animation: burst 1s forwards;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes burst {
        0% {
            transform: scale(0);
            opacity: 0.8;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);