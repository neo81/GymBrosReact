// --- State Management ---
let profile = JSON.parse(localStorage.getItem('gymbros_profile')) || null;
let routines = JSON.parse(localStorage.getItem('gymbros_routines')) || [];
let selectedSex = 'M';

// --- Navigation ---
function showScreen(screenId) {
    console.log(`Navigating to: ${screenId}`);
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.remove('active'));
    
    const target = document.getElementById(`screen-${screenId}`);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    } else {
        console.error(`Screen not found: screen-${screenId}`);
    }
    
    if (screenId === 'home') renderHome();
    if (screenId === 'profile') renderProfile();
}

function checkProfileAndHome() {
    if (profile) showScreen('home');
    else showScreen('register');
}

// --- Registration ---
function setSex(sex) {
    selectedSex = sex;
    document.querySelectorAll('.sex-btn').forEach(btn => {
        btn.classList.remove('btn-primary', 'shadow-none');
        btn.classList.add('btn-ghost', 'text-gray-400');
    });
    const activeBtn = document.getElementById(`sex-${sex.toLowerCase()}`);
    if (activeBtn) {
        activeBtn.classList.add('btn-primary');
        activeBtn.classList.remove('btn-ghost', 'text-gray-400', 'shadow-none');
    }
}

function handleRegister() {
    const name = document.getElementById('reg-name').value.trim();
    const weight = document.getElementById('reg-weight').value;
    const height = document.getElementById('reg-height').value;
    
    if (!name) {
        alert('Por favor, ingresá tu nombre.');
        return;
    }

    profile = {
        name,
        weight: parseFloat(weight) || 0,
        height: parseInt(height) || 0,
        sex: selectedSex,
        createdAt: new Date().toISOString()
    };

    localStorage.setItem('gymbros_profile', JSON.stringify(profile));
    showScreen('home');
}

// --- Home Rendering ---
function renderHome() {
    if (!profile) return;
    
    // Header & Greeting
    const greeting = document.getElementById('home-greeting');
    const hour = new Date().getHours();
    let greetText = 'Hola';
    if (hour < 12) greetText = 'Buen día';
    else if (hour < 20) greetText = 'Buenas tardes';
    else greetText = 'Buenas noches';
    greeting.innerText = `${greetText}, ${profile.name}`;

    // Avatar
    const avatar = document.getElementById('home-avatar');
    avatar.innerText = profile.name.charAt(0).toUpperCase();

    // Stats Bar
    document.getElementById('stat-name').innerText = profile.name.toUpperCase();
    document.getElementById('stat-routines').innerText = `${routines.length} RUTINAS`;
    document.getElementById('stat-weight').innerText = `${profile.weight} KG`;

    // Routines List
    const list = document.getElementById('routines-list');
    if (routines.length === 0) {
        list.innerHTML = `
            <div class="glass rounded-[2.5rem] p-12 text-center space-y-5">
                <div class="text-6xl animate-bounce">📋</div>
                <p class="text-gray-400 text-sm font-light leading-relaxed">No tenés rutinas creadas todavía.<br>Empezá creando una ahora.</p>
                <button onclick="showScreen('create-routine')" class="text-accent-light font-bold tracking-widest text-xs uppercase hover:underline">+ Crear mi primera rutina</button>
            </div>
        `;
    } else {
        list.innerHTML = routines.map((r, idx) => `
            <div class="glass rounded-[2rem] p-6 flex justify-between items-center group active:scale-[0.98] transition-all">
                <div class="flex items-center gap-5">
                    <div class="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-2xl shadow-inner">💪</div>
                    <div>
                        <h4 class="font-bold text-xl tracking-tight">${r.name}</h4>
                        <p class="text-gray-500 text-[10px] uppercase tracking-widest font-bold mt-1">
                            ${r.exercises ? r.exercises.length : 0} Ejercicios
                        </p>
                    </div>
                </div>
                <button onclick="deleteRoutine(${idx})" class="w-10 h-10 flex items-center justify-center text-danger/30 hover:text-danger transition-colors text-xl">✕</button>
            </div>
        `).join('');
    }
}

// --- Routine Management ---
function handleCreateRoutine() {
    const nameInput = document.getElementById('routine-name');
    const name = nameInput.value.trim();
    
    if (!name) {
        alert('Por favor, ponéle un nombre a la rutina.');
        return;
    }

    const newRoutine = {
        id: Date.now().toString(),
        name: name,
        exercises: [],
        createdAt: new Date().toISOString()
    };

    routines.push(newRoutine);
    localStorage.setItem('gymbros_routines', JSON.stringify(routines));
    
    console.log('Routine created:', newRoutine);
    nameInput.value = '';
    showScreen('home');
}

function deleteRoutine(index) {
    if (confirm('¿Estás seguro de que querés borrar esta rutina?')) {
        routines.splice(index, 1);
        localStorage.setItem('gymbros_routines', JSON.stringify(routines));
        renderHome();
    }
}

// --- Profile Rendering ---
function renderProfile() {
    if (!profile) return;
    
    const avatarLarge = document.getElementById('profile-avatar-large');
    avatarLarge.innerText = profile.name.charAt(0).toUpperCase();
    
    document.getElementById('profile-name').innerText = profile.name.toUpperCase();
    document.getElementById('profile-meta-top').innerText = `${profile.sex === 'M' ? 'Masculino' : 'Femenino'} • ${profile.age || 25} años`;
    
    document.getElementById('profile-weight').innerText = profile.weight;
    document.getElementById('profile-height').innerText = profile.height;
}

function logout() {
    if (confirm('¿Cerrar sesión? Se mantendrán tus datos locales.')) {
        profile = null;
        showScreen('welcome');
    }
}

function clearAllData() {
    if (confirm('¡ATENCIÓN! Se borrarán todos tus datos permanentemente. ¿Continuar?')) {
        localStorage.clear();
        profile = null;
        routines = [];
        window.location.reload();
    }
}

// --- Initialization ---
window.onload = () => {
    console.log('GymBros Vanilla PWA Initialized');
    if (profile) showScreen('home');
    else showScreen('welcome');
};
