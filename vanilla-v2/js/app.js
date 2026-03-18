// --- State Management ---
let profile = JSON.parse(localStorage.getItem('gymbros_profile')) || null;
let routines = JSON.parse(localStorage.getItem('gymbros_routines')) || [];
let selectedSex = 'M';

// Temporary state for forms
let currentRoutine = null; 
let routineDays = [];
let routineExercises = [];
let editingExerciseIndex = -1;
let selectedMuscle = "";
let currentMuscleGroup = "";
let selectedExerciseInfo = "";
let isFrontView = true;
let currentSeriesCount = 3;
let navigationSource = 'home'; // 'home', 'create-routine', 'routine-detail'

// Exercise Database (Expanded with info and secondary muscles)
const EXERCISE_DB = {
    "Pecho": [
        { name: "Press de Banca", info: "Empuje horizontal para pectoral mayor.", secondary: "Tríceps, Hombros" },
        { name: "Press Inclinado", info: "Enfoque en la parte superior del pecho.", secondary: "Tríceps, Hombros" },
        { name: "Aperturas con Mancuernas", info: "Estiramiento profundo del pectoral.", secondary: "Bíceps" },
        { name: "Flexiones de Brazos", info: "Ejercicio básico de peso corporal.", secondary: "Tríceps" }
    ],
    "Abdominales": [
        { name: "Crunches", info: "Aislamiento de la zona abdominal superior.", secondary: "Oblicuos" },
        { name: "Plancha Abdominal", info: "Estabilidad del core y resistencia.", secondary: "Hombros, Espalda" },
        { name: "Elevación de Piernas", info: "Enfoque en abdominales inferiores.", secondary: "Flexores de cadera" }
    ],
    "Bíceps": [
        { name: "Curl con Barra", info: "Básico para masa en bíceps.", secondary: "Antebrazos" },
        { name: "Curl Martillo", info: "Enfoque en braquial y antebrazo.", secondary: "Bíceps" },
        { name: "Curl Concentrado", info: "Aislamiento para el pico del bíceps.", secondary: "Bíceps" },
        { name: "Curl con Mancuernas", info: "Flexión de codo con supinación.", secondary: "Antebrazos" }
    ],
    "Tríceps": [
        { name: "Extensiones en Polea", info: "Aislamiento de la cabeza larga.", secondary: "Tríceps" },
        { name: "Press Francés", info: "Básico para volumen en tríceps.", secondary: "Hombros" },
        { name: "Fondos en Paralelas", info: "Potencia en tríceps y pecho bajo.", secondary: "Pecho" },
        { name: "Copa a una mano", info: "Extensión vertical de tríceps.", secondary: "Hombros" }
    ],
    "Cuádriceps": [
        { name: "Sentadillas", info: "El rey de los ejercicios de pierna.", secondary: "Glúteos, Isquios" },
        { name: "Prensa de Piernas", info: "Empuje controlado para cuádriceps.", secondary: "Glúteos" },
        { name: "Extensiones de Cuádriceps", info: "Aislamiento frontal de la pierna.", secondary: "Cuádriceps" }
    ],
    "Isquios": [
        { name: "Peso Muerto Rumano", info: "Estiramiento y fuerza en isquios.", secondary: "Glúteos, Espalda baja" },
        { name: "Curl Femoral Tumbado", info: "Aislamiento de la parte posterior.", secondary: "Isquios" }
    ],
    "Pantorrillas": [
        { name: "Elevación de Talones", info: "Fuerza y volumen en gemelos.", secondary: "Sóleo" }
    ],
    "Espalda": [
        { name: "Dominadas", info: "Ancho de espalda y fuerza tracción.", secondary: "Bíceps, Hombros" },
        { name: "Remo con Barra", info: "Grosor de espalda y estabilidad.", secondary: "Bíceps, Hombros" },
        { name: "Jalón al Pecho", info: "Alternativa a dominadas para latissimus.", secondary: "Bíceps" }
    ],
    "Hombros": [
        { name: "Press Militar", info: "Fuerza general de hombros.", secondary: "Tríceps" },
        { name: "Elevaciones Laterales", info: "Enfoque en la cabeza lateral.", secondary: "Trapecio" },
        { name: "Pájaros", info: "Enfoque en deltoides posterior.", secondary: "Trapecio" }
    ],
    "Glúteos": [
        { name: "Hip Thrust", info: "El mejor ejercicio para glúteos.", secondary: "Isquios" },
        { name: "Zancadas", info: "Fuerza unilateral y estabilidad.", secondary: "Cuádriceps" }
    ]
};

// --- Navigation ---
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.remove('active'));
    
    const target = document.getElementById(`screen-${screenId}`);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }
    
    if (screenId === 'home') renderHome();
    if (screenId === 'profile') renderProfile();
    if (screenId === 'routine-detail') renderRoutineDetail();
    if (screenId === 'progress') renderProgress();
}

function renderProgress() {
    // Placeholder for future logic to calculate real stats
    console.log('Rendering progress screen...');
}

function checkProfileAndHome() {
    if (profile) showScreen('home');
    else showScreen('welcome');
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

function openRegister() {
    document.getElementById('reg-title').innerText = "Mi Perfil";
    document.getElementById('reg-name').value = "";
    document.getElementById('reg-weight').value = "";
    document.getElementById('reg-height').value = "";
    document.getElementById('reg-submit-btn').innerText = "Empezar a entrenar 💪";
    document.getElementById('reg-back-btn').setAttribute('onclick', "showScreen('welcome')");
    setSex('M');
    showScreen('register');
}

function openEditProfile() {
    if (!profile) return;
    document.getElementById('reg-title').innerText = "Editar Perfil";
    document.getElementById('reg-name').value = profile.name;
    document.getElementById('reg-weight').value = profile.weight;
    document.getElementById('reg-height').value = profile.height;
    document.getElementById('reg-submit-btn').innerText = "Guardar Cambios";
    document.getElementById('reg-back-btn').setAttribute('onclick', "showScreen('profile')");
    setSex(profile.sex);
    showScreen('register');
}

function handleRegister() {
    const name = document.getElementById('reg-name').value.trim();
    const weight = document.getElementById('reg-weight').value;
    const height = document.getElementById('reg-height').value;
    
    if (!name) return alert('Por favor, ingresá tu nombre.');

    const isEditing = profile !== null;

    profile = {
        ...profile,
        name,
        weight: parseFloat(weight) || 0,
        height: parseInt(height) || 0,
        sex: selectedSex,
        createdAt: profile ? profile.createdAt : new Date().toISOString()
    };

    localStorage.setItem('gymbros_profile', JSON.stringify(profile));
    
    if (isEditing) {
        showScreen('profile');
    } else {
        showScreen('home');
    }
}

// --- Home Rendering ---
function renderHome() {
    if (!profile) return;
    
    const greeting = document.getElementById('home-greeting');
    const hour = new Date().getHours();
    let greetText = hour < 12 ? 'Buen día' : (hour < 20 ? 'Buenas tardes' : 'Buenas noches');
    greeting.innerText = `${greetText}, ${profile.name}`;

    const avatar = document.getElementById('home-avatar');
    avatar.innerText = profile.name.charAt(0).toUpperCase();

    document.getElementById('stat-name').innerText = profile.name.toUpperCase();
    document.getElementById('stat-routines').innerText = `${routines.length} RUTINAS`;
    document.getElementById('stat-weight').innerText = `${profile.weight} KG`;

    const list = document.getElementById('routines-list');
    const title = document.getElementById('home-list-title');

    title.innerText = "MIS RUTINAS";
    if (routines.length === 0) {
        list.innerHTML = `
            <div class="glass rounded-[2.5rem] p-12 text-center space-y-5">
                <div class="text-6xl animate-bounce">📋</div>
                <p class="text-gray-400 text-sm font-light leading-relaxed">No tenés rutinas creadas todavía.<br>Empezá creando una ahora.</p>
                <button onclick="openCreateRoutine()" class="text-accent-light font-bold tracking-widest text-xs uppercase hover:underline">+ Crear mi primera rutina</button>
            </div>
        `;
    } else {
        list.innerHTML = routines.map((r, idx) => {
            const days = r.days || [];
            const name = r.name || "Rutina sin nombre";
            return `
                <div class="glass rounded-[2rem] p-6 space-y-4 active:scale-[0.98] transition-all" onclick="openRoutineDetail(${idx})">
                    <div class="flex justify-between items-start">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-xl shadow-inner">💪</div>
                            <div>
                                <h4 class="font-bold text-lg tracking-tight">${name}</h4>
                                <div class="flex gap-1 mt-1">
                                    ${days.map(d => `<span class="text-[8px] bg-accent/20 text-accent-light px-1.5 py-0.5 rounded-md font-bold">${d}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                        <button onclick="event.stopPropagation(); deleteRoutine(${idx})" class="w-8 h-8 flex items-center justify-center text-danger/30 hover:text-danger transition-colors text-lg">✕</button>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// --- Routine Management ---
function openCreateRoutine() {
    currentRoutine = null;
    routineDays = [];
    routineExercises = [];
    navigationSource = 'create-routine';
    document.getElementById('routine-form-title').innerText = "NUEVA RUTINA";
    document.getElementById('routine-name').value = "";
    updateDaysUI();
    renderCreateRoutineExercises();
    showScreen('create-routine');
}

function openEditRoutine(index) {
    currentRoutine = { ...routines[index], index };
    routineDays = [...currentRoutine.days];
    routineExercises = [...currentRoutine.exercises];
    navigationSource = 'create-routine';
    document.getElementById('routine-form-title').innerText = "EDITAR RUTINA";
    document.getElementById('routine-name').value = currentRoutine.name;
    updateDaysUI();
    renderCreateRoutineExercises();
    showScreen('create-routine');
}

function toggleDay(day) {
    const idx = routineDays.indexOf(day);
    if (idx > -1) routineDays.splice(idx, 1);
    else routineDays.push(day);
    updateDaysUI();
    renderCreateRoutineExercises();
}

function renderCreateRoutineExercises() {
    const container = document.getElementById('create-routine-exercises-container');
    if (!container) return;

    if (routineDays.length === 0) {
        container.innerHTML = "";
        return;
    }

    container.innerHTML = routineDays.map(day => {
        const dayExercises = routineExercises.filter(ex => ex.days.includes(day));
        return `
            <div class="space-y-3">
                <div class="flex items-center gap-2 px-2">
                    <div class="w-2 h-2 rounded-full bg-accent"></div>
                    <h4 class="text-[10px] font-bold uppercase tracking-widest text-gray-400">EJERCICIOS - ${day}</h4>
                </div>
                <div class="space-y-3">
                    ${dayExercises.map((ex, idx) => {
                        const globalIdx = routineExercises.indexOf(ex);
                        return `
                            <div class="exercise-card p-4 flex justify-between items-center">
                                <div onclick="openEditExercise(${globalIdx})" class="flex-1 cursor-pointer">
                                    <div class="flex items-center gap-2">
                                        <h5 class="font-bold text-sm">${ex.name}</h5>
                                        <span class="text-[8px] bg-accent/10 text-accent-light px-1.5 py-0.5 rounded-md font-bold uppercase">${ex.muscle || 'Gral'}</span>
                                    </div>
                                    <p class="text-[10px] text-gray-500">${ex.series.length} Series</p>
                                </div>
                                <button onclick="removeExerciseFromTemp(${globalIdx})" class="text-danger/50 text-xs p-2">✕</button>
                            </div>
                        `;
                    }).join('')}
                    <button onclick="openAddExerciseToDay('${day}')" class="btn-dashed py-4">
                        + AGREGAR EJERCICIO A ${day}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function removeExerciseFromTemp(index) {
    routineExercises.splice(index, 1);
    renderCreateRoutineExercises();
}

function updateDaysUI() {
    document.querySelectorAll('#screen-create-routine .day-chip').forEach(chip => {
        const day = chip.getAttribute('data-day');
        if (routineDays.includes(day)) chip.classList.add('active');
        else chip.classList.remove('active');
    });
}

function handleSaveRoutine() {
    const name = document.getElementById('routine-name').value.trim();
    if (!name) return alert('Ponéle un nombre a la rutina.');
    if (routineDays.length === 0) return alert('Seleccioná al menos un día.');

    const routineData = {
        id: currentRoutine ? currentRoutine.id : Date.now().toString(),
        name,
        days: routineDays,
        exercises: routineExercises,
        updatedAt: new Date().toISOString()
    };

    if (currentRoutine !== null) {
        routines[currentRoutine.index] = routineData;
    } else {
        routines.push(routineData);
    }

    localStorage.setItem('gymbros_routines', JSON.stringify(routines));
    showScreen('home');
}

function deleteRoutine(index) {
    if (confirm('¿Borrar esta rutina?')) {
        routines.splice(index, 1);
        localStorage.setItem('gymbros_routines', JSON.stringify(routines));
        showScreen('home');
    }
}

// --- Routine Detail (Day Accordion) ---
function openRoutineDetail(index) {
    currentRoutine = { ...routines[index], index };
    navigationSource = 'routine-detail';
    showScreen('routine-detail');
}

let activeDayIndex = -1;

function renderRoutineDetail() {
    if (!currentRoutine) return;
    
    document.getElementById('detail-routine-name').innerText = currentRoutine.name;
    document.getElementById('btn-edit-routine').onclick = () => openEditRoutine(currentRoutine.index);
    document.getElementById('btn-delete-routine').onclick = () => deleteRoutine(currentRoutine.index);

    const container = document.getElementById('detail-days-container');
    
    container.innerHTML = currentRoutine.days.map((day, dIdx) => {
        const dayExercises = currentRoutine.exercises.filter(ex => ex.days.includes(day));
        const isActive = dIdx === activeDayIndex ? 'active' : '';
        
        return `
            <div class="day-accordion ${isActive}" id="day-accordion-${dIdx}">
                <div class="day-header" onclick="toggleDayAccordion(${dIdx})">
                    <div class="flex items-center gap-4">
                        <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent-light font-bold">${day.charAt(0)}</div>
                        <h3 class="font-display text-2xl tracking-wider uppercase">${day}</h3>
                    </div>
                    <div class="flex items-center gap-3">
                        <span class="text-[10px] font-bold text-gray-500">${dayExercises.length} EJ.</span>
                        <span class="chevron">▼</span>
                    </div>
                </div>
                <div class="day-content">
                    <div class="p-4 space-y-4">
                        <div class="space-y-4">
                            ${dayExercises.map((ex, idxInDay) => {
                                const globalIdx = currentRoutine.exercises.indexOf(ex);
                                return `
                                    <div class="exercise-card p-5 space-y-4" style="animation-delay: ${idxInDay * 0.1}s">
                                        <div class="flex justify-between items-start">
                                            <div class="flex-1">
                                                <div class="flex items-center gap-2 flex-wrap">
                                                    <h4 class="font-bold text-lg">${ex.name}</h4>
                                                    <span class="text-[10px] bg-accent/10 text-accent-light px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">${ex.muscle || 'Gral'}</span>
                                                    <button onclick="alert('${ex.info || "Sin descripción."}')" class="text-gray-500 text-xs">ⓘ</button>
                                                </div>
                                                <table class="series-table">
                                                    <thead>
                                                        <tr>
                                                            <th>SERIE</th>
                                                            <th>REPS</th>
                                                            <th>PESO (KG)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        ${ex.series.map((s, sIdx) => `
                                                            <tr>
                                                                <td>${sIdx + 1}</td>
                                                                <td>${s.reps}</td>
                                                                <td>${s.weight}</td>
                                                            </tr>
                                                        `).join('')}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="flex flex-col gap-2 ml-4">
                                                <div class="flex gap-1">
                                                    <button onclick="moveExercise(${globalIdx}, -1, '${day}')" class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-xs border border-white/5">▲</button>
                                                    <button onclick="moveExercise(${globalIdx}, 1, '${day}')" class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-xs border border-white/5">▼</button>
                                                </div>
                                                <div class="flex gap-1">
                                                    <button onclick="openEditExercise(${globalIdx})" class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent-light text-xs border border-accent/10">✎</button>
                                                    <button onclick="removeExercise(${globalIdx})" class="w-8 h-8 rounded-lg bg-danger/10 flex items-center justify-center text-danger text-xs border border-danger/10">✕</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                            ${dayExercises.length === 0 ? '<p class="text-[10px] text-gray-600 italic text-center py-4">No hay ejercicios para este día</p>' : ''}
                        </div>
                        <button onclick="openAddExerciseToDay('${day}')" class="btn-dashed mt-4">
                            <span>+ AGREGAR EJERCICIO A ${day.toUpperCase()}</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function toggleDayAccordion(index) {
    const item = document.getElementById(`day-accordion-${index}`);
    const isActive = item.classList.contains('active');
    
    document.querySelectorAll('.day-accordion').forEach(i => i.classList.remove('active'));
    
    if (!isActive) {
        item.classList.add('active');
        activeDayIndex = index;
    } else {
        activeDayIndex = -1;
    }
}

function moveExercise(index, direction, day) {
    const exercises = currentRoutine.exercises;
    const dayExercises = exercises.filter(ex => ex.days.includes(day));
    
    const currentEx = exercises[index];
    const indexInDay = dayExercises.indexOf(currentEx);
    const targetIndexInDay = indexInDay + direction;
    
    if (targetIndexInDay >= 0 && targetIndexInDay < dayExercises.length) {
        const targetEx = dayExercises[targetIndexInDay];
        const targetGlobalIndex = exercises.indexOf(targetEx);
        
        // Swap in global array
        const temp = exercises[index];
        exercises[index] = exercises[targetGlobalIndex];
        exercises[targetGlobalIndex] = temp;
        
        routines[currentRoutine.index].exercises = exercises;
        localStorage.setItem('gymbros_routines', JSON.stringify(routines));
        renderRoutineDetail();
    }
}

// --- Exercise Management ---
function openAddExerciseToDay(day) {
    targetDayForNewExercise = day;
    editingExerciseIndex = -1;
    showScreen('muscle-selection');
}

function selectMuscle(muscle) {
    currentMuscleGroup = muscle;
    selectedMuscle = muscle;
    document.querySelectorAll('.muscle-path').forEach(p => p.classList.remove('active'));
    const path = document.querySelector(`.muscle-path[onclick*="${muscle}"]`);
    if (path) path.classList.add('active');
    
    renderExerciseList();
    showScreen('exercise-list');
}

function rotateFigure() {
    isFrontView = !isFrontView;
    const front = document.getElementById('figure-front');
    const back = document.getElementById('figure-back');
    if (isFrontView) {
        front.classList.remove('hidden');
        back.classList.add('hidden');
    } else {
        front.classList.add('hidden');
        back.classList.remove('hidden');
    }
}

function renderExerciseList(filter = "") {
    const container = document.getElementById('exercise-list-container');
    let exercises = EXERCISE_DB[selectedMuscle] || [];
    
    if (filter) {
        exercises = exercises.filter(ex => ex.name.toLowerCase().includes(filter.toLowerCase()));
    }
    
    document.getElementById('exercise-list-title').innerText = selectedMuscle;
    
    container.innerHTML = `
        <button onclick="selectExerciseFromList('', '')" class="exercise-list-card border-dashed border-accent/30">
            <div class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent-light text-xl">+</div>
            <h4 class="font-bold text-sm">MANUAL</h4>
            <p class="text-[10px] text-gray-500">Agregá un ejercicio personalizado</p>
        </button>
    ` + exercises.map((ex, idx) => `
        <button onclick="selectExerciseFromDB('${selectedMuscle}', ${idx})" class="exercise-list-card">
            <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-xl">🏋️</div>
            <h4 class="font-bold text-sm">${ex.name}</h4>
            <p class="text-[10px] text-gray-500">${ex.secondary || "Básico"}</p>
        </button>
    `).join('');
}

function handleExerciseSearch(query) {
    renderExerciseList(query);
}

function selectExerciseFromDB(muscle, idx) {
    currentMuscleGroup = muscle;
    const ex = EXERCISE_DB[muscle][idx];
    selectedMuscle = ex.name;
    selectedExerciseInfo = ex.info;
    openExerciseForm();
}

function selectExerciseFromList(name, info) {
    selectedMuscle = name;
    selectedExerciseInfo = info;
    openExerciseForm();
}

function openExerciseForm() {
    const isEdit = editingExerciseIndex > -1;
    const ex = isEdit ? (currentRoutine ? currentRoutine.exercises[editingExerciseIndex] : routineExercises[editingExerciseIndex]) : null;

    document.getElementById('exercise-form-title').innerText = isEdit ? "EDITAR" : "DETALLES";
    document.getElementById('ex-name').value = isEdit ? ex.name : selectedMuscle;
    document.getElementById('ex-notes').value = isEdit ? (ex.notes || "") : "";
    
    if (isEdit) {
        selectedExerciseInfo = ex.info;
        currentSeriesCount = ex.series.length;
        currentMuscleGroup = ex.muscle || "";
    } else {
        currentSeriesCount = 3;
    }

    document.getElementById('ex-muscle-info').innerText = currentMuscleGroup || "General";

    renderSeriesInputs(ex ? ex.series : null);

    const daysContainer = document.getElementById('ex-days-container');
    const activeDays = isEdit ? ex.days : [targetDayForNewExercise];
    
    const availableDays = currentRoutine ? currentRoutine.days : routineDays;
    
    daysContainer.innerHTML = availableDays.map(day => `
        <div class="day-chip ${activeDays.includes(day) ? 'active' : ''}" 
             data-day="${day}" 
             onclick="this.classList.toggle('active')">
            ${day}
        </div>
    `).join('');

    showScreen('exercise-form');
}

function openEditExercise(index) {
    editingExerciseIndex = index;
    openExerciseForm();
}

function renderSeriesInputs(existingSeries = null) {
    const container = document.getElementById('series-inputs-container');
    container.innerHTML = "";
    
    for (let i = 1; i <= currentSeriesCount; i++) {
        const reps = existingSeries && existingSeries[i-1] ? existingSeries[i-1].reps : "";
        const weight = existingSeries && existingSeries[i-1] ? existingSeries[i-1].weight : "";
        
        const row = document.createElement('div');
        row.className = "series-row-form";
        row.innerHTML = `
            <div class="series-number-badge">${i}</div>
            <div class="series-input-group">
                <input type="number" id="ex-reps-${i}" placeholder="0" value="${reps}" oninput="replicateSeries(${i}, 'reps')">
                <span class="series-input-label">REPS</span>
            </div>
            <div class="series-input-group">
                <input type="number" id="ex-weight-${i}" placeholder="0" value="${weight}" oninput="replicateSeries(${i}, 'weight')">
                <span class="series-input-label">KG</span>
            </div>
            ${i > 1 ? `<button onclick="removeSeries(${i})" class="btn-delete-series">✕</button>` : '<div class="w-7"></div>'}
        `;
        container.appendChild(row);
    }
}

function addSeries() {
    currentSeriesCount++;
    const container = document.getElementById('series-inputs-container');
    const i = currentSeriesCount;
    const row = document.createElement('div');
    row.className = "series-row-form";
    row.innerHTML = `
        <div class="series-number-badge">${i}</div>
        <div class="series-input-group">
            <input type="number" id="ex-reps-${i}" placeholder="0" oninput="replicateSeries(${i}, 'reps')">
            <span class="series-input-label">REPS</span>
        </div>
        <div class="series-input-group">
            <input type="number" id="ex-weight-${i}" placeholder="0" oninput="replicateSeries(${i}, 'weight')">
            <span class="series-input-label">KG</span>
        </div>
        <button onclick="removeSeries(${i})" class="btn-delete-series">✕</button>
    `;
    container.appendChild(row);
}

function removeSeries(index) {
    if (currentSeriesCount <= 1) return;
    
    // Collect current values
    const currentValues = [];
    for (let i = 1; i <= currentSeriesCount; i++) {
        if (i === index) continue;
        currentValues.push({
            reps: document.getElementById(`ex-reps-${i}`).value,
            weight: document.getElementById(`ex-weight-${i}`).value
        });
    }
    
    currentSeriesCount--;
    
    // Re-render with new values
    const container = document.getElementById('series-inputs-container');
    container.innerHTML = "";
    
    currentValues.forEach((val, idx) => {
        const i = idx + 1;
        const row = document.createElement('div');
        row.className = "series-row-form";
        row.innerHTML = `
            <div class="series-number-badge">${i}</div>
            <div class="series-input-group">
                <input type="number" id="ex-reps-${i}" placeholder="0" value="${val.reps}" oninput="replicateSeries(${i}, 'reps')">
                <span class="series-input-label">REPS</span>
            </div>
            <div class="series-input-group">
                <input type="number" id="ex-weight-${i}" placeholder="0" value="${val.weight}" oninput="replicateSeries(${i}, 'weight')">
                <span class="series-input-label">KG</span>
            </div>
            ${i > 1 ? `<button onclick="removeSeries(${i})" class="btn-delete-series">✕</button>` : '<div class="w-7"></div>'}
        `;
        container.appendChild(row);
    });
}

function replicateSeries(sourceIdx, type) {
    const val = document.getElementById(`ex-${type}-${sourceIdx}`).value;
    if (sourceIdx === 1) {
        for (let i = 2; i <= currentSeriesCount; i++) {
            const input = document.getElementById(`ex-${type}-${i}`);
            // Replicate if target is empty or if we want to force sync (user request implies they want it to work)
            // To fix "solo replica el primer digito", we remove the !input.value check
            // but only if the user hasn't manually changed it? 
            // Actually, the simplest fix for "solo replica el primer digito" is to always update if it's the first one.
            if (input) input.value = val;
        }
    }
}

function handleSaveExercise() {
    const name = document.getElementById('ex-name').value.trim();
    const notes = document.getElementById('ex-notes').value.trim();
    if (!name) return alert('Nombre requerido');

    const series = [];
    for (let i = 1; i <= currentSeriesCount; i++) {
        series.push({
            reps: parseInt(document.getElementById(`ex-reps-${i}`).value) || 0,
            weight: parseFloat(document.getElementById(`ex-weight-${i}`).value) || 0
        });
    }

    const selectedExDays = [];
    document.querySelectorAll('#ex-days-container .day-chip.active').forEach(chip => {
        selectedExDays.push(chip.getAttribute('data-day'));
    });

    if (selectedExDays.length === 0) return alert('Seleccioná al menos un día');

    const exerciseData = { 
        name, 
        series, 
        notes,
        days: selectedExDays,
        muscle: currentMuscleGroup,
        info: selectedExerciseInfo || "Ejercicio personalizado."
    };

    if (navigationSource === 'create-routine') {
        if (editingExerciseIndex > -1) {
            routineExercises[editingExerciseIndex] = exerciseData;
        } else {
            routineExercises.push(exerciseData);
        }
        renderCreateRoutineExercises();
        showScreen('create-routine');
    } else {
        if (editingExerciseIndex > -1) {
            currentRoutine.exercises[editingExerciseIndex] = exerciseData;
        } else {
            currentRoutine.exercises.push(exerciseData);
        }
        routines[currentRoutine.index].exercises = currentRoutine.exercises;
        localStorage.setItem('gymbros_routines', JSON.stringify(routines));
        showScreen('routine-detail');
    }
}

function removeExercise(index) {
    if (confirm('¿Quitar ejercicio?')) {
        currentRoutine.exercises.splice(index, 1);
        routines[currentRoutine.index].exercises = currentRoutine.exercises;
        localStorage.setItem('gymbros_routines', JSON.stringify(routines));
        renderRoutineDetail();
    }
}

function closeMuscleSelection() {
    showScreen(navigationSource);
}

function closeExerciseForm() {
    showScreen(navigationSource);
}

function showExerciseInfo() {
    const name = document.getElementById('ex-name').value || "Ejercicio";
    document.getElementById('modal-info-title').innerText = name;
    document.getElementById('modal-info-text').innerText = selectedExerciseInfo || "No hay información adicional disponible para este ejercicio.";
    document.getElementById('modal-info').classList.add('active');
}

function closeModal(id) {
    document.getElementById(`modal-${id}`).classList.remove('active');
}

// --- Profile Rendering ---
function calculateIMC(weight, height) {
    if (!weight || !height) return "0.0";
    const heightInMeters = height / 100;
    const imc = weight / (heightInMeters * heightInMeters);
    return imc.toFixed(1);
}

function renderProfile() {
    if (!profile) return;
    const avatarLarge = document.getElementById('profile-avatar-large');
    avatarLarge.innerText = profile.name.charAt(0).toUpperCase();
    document.getElementById('profile-name').innerText = profile.name.toUpperCase();
    document.getElementById('profile-meta-top').innerText = `${profile.sex === 'M' ? 'Masculino' : 'Femenino'}`;
    document.getElementById('profile-weight').innerText = profile.weight;
    document.getElementById('profile-height').innerText = profile.height;
    document.getElementById('profile-imc').innerText = calculateIMC(profile.weight, profile.height);
}

function logout() {
    if (confirm('¿Cerrar sesión?')) {
        profile = null;
        showScreen('welcome');
    }
}

function clearAllData() {
    if (confirm('¡ATENCIÓN! Se borrarán todos tus datos.')) {
        localStorage.clear();
        window.location.reload();
    }
}

// --- Initialization ---
window.onload = () => {
    console.log('GymBros Vanilla PWA v2.4 Initialized');
    if (profile) showScreen('home');
    else showScreen('welcome');
};
