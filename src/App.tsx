import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  ChevronLeft, 
  ChevronDown,
  ChevronUp,
  User, 
  Dumbbell, 
  Trash2, 
  Edit2, 
  Star, 
  Info, 
  Timer, 
  Save, 
  RotateCcw,
  Search,
  TrendingUp,
  X
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

import { Profile, Routine, AppHistory, Exercise, RoutineExercise, Series } from './types';
import { EXERCISES_DB, ALL_MUSCLES, MUSCLES_FRONT, MUSCLES_BACK } from './constants';
import { cn, genId, dateStrAR, friendlyDate, greetingByHour } from './utils';

// --- Components ---

interface ConfigureExerciseProps {
  ctxExercise: Exercise | null;
  ctxRoutine: Routine | null;
  ctxDay: string | null;
  ctxEditingIdx: number | null;
  onBack: () => void;
  onSave: (series: Series[], note: string) => void;
}

const ConfigureExercise = ({ ctxExercise, ctxRoutine, ctxDay, ctxEditingIdx, onBack, onSave }: ConfigureExerciseProps) => {
  const ex = ctxExercise;
  const initialSeries = ctxEditingIdx !== null && ctxRoutine && ctxDay 
    ? ctxRoutine.days[ctxDay].exercises[ctxEditingIdx].series 
    : [{ reps: '', weight: '' }, { reps: '', weight: '' }, { reps: '', weight: '' }];
  const initialNote = ctxEditingIdx !== null && ctxRoutine && ctxDay 
    ? ctxRoutine.days[ctxDay].exercises[ctxEditingIdx].note 
    : '';

  const [series, setSeries] = useState<Series[]>(initialSeries);
  const [note, setNote] = useState(initialNote);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="min-h-screen p-6 space-y-6">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="text-accent-light flex items-center gap-1">
          <ChevronLeft size={20} /> Atrás
        </button>
        <span className="font-semibold">Configurar Ejercicio</span>
        <button onClick={() => onSave(series, note)} className="text-accent-light font-bold text-sm">Guardar</button>
      </div>

      <Card className="flex items-center gap-4 relative">
        <div className="w-16 h-16 bg-bg-card rounded-2xl flex items-center justify-center text-4xl overflow-hidden">
          {ex?.gifUrl ? (
            <img src={ex.gifUrl} alt={ex.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          ) : (
            <span className="animate-bob">{ex?.emoji}</span>
          )}
        </div>
        <div className="flex-1">
          <h4 className="font-bold">{ex?.name}</h4>
          <p className="text-[10px] text-text-muted uppercase tracking-widest">{ex?.muscles.join(', ')}</p>
        </div>
        <button 
          onClick={() => setShowInfo(true)}
          className="p-2 text-accent-light hover:bg-accent/10 rounded-full transition-colors"
        >
          <Info size={20} />
        </button>
      </Card>

      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h5 className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Series</h5>
          <button 
            onClick={() => setSeries([...series, { reps: '', weight: '' }])}
            className="text-accent-light text-[10px] font-bold uppercase tracking-widest"
          >
            + Agregar Serie
          </button>
        </div>

        <div className="space-y-3">
          {series.map((s, i) => (
            <div key={i} className="flex items-center gap-3 bg-bg-soft border border-white/5 rounded-2xl p-3">
              <div className="w-8 h-8 rounded-full bg-bg-card flex items-center justify-center text-xs font-bold text-text-muted">
                {i + 1}
              </div>
              <div className="flex-1 grid grid-cols-2 gap-3">
                <div className="relative">
                  <input 
                    type="number" 
                    placeholder="Reps"
                    className="w-full bg-bg-card border border-white/10 rounded-xl px-3 py-2 text-sm text-center outline-none focus:border-accent"
                    value={s.reps}
                    onChange={(e) => {
                      const val = e.target.value;
                      const oldVal = series[i].reps;
                      const newSeries = [...series];
                      newSeries[i].reps = val;
                      
                      // Autocomplete if it's the first series
                      if (i === 0) {
                        for (let j = 1; j < newSeries.length; j++) {
                          if (newSeries[j].reps === oldVal || !newSeries[j].reps) {
                            newSeries[j].reps = val;
                          }
                        }
                      }
                      setSeries(newSeries);
                    }}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[8px] font-bold text-text-muted pointer-events-none">REPS</span>
                </div>
                <div className="relative">
                  <input 
                    type="number" 
                    placeholder="Peso"
                    className="w-full bg-bg-card border border-white/10 rounded-xl px-3 py-2 text-sm text-center outline-none focus:border-accent"
                    value={s.weight}
                    onChange={(e) => {
                      const val = e.target.value;
                      const oldVal = series[i].weight;
                      const newSeries = [...series];
                      newSeries[i].weight = val;
                      
                      // Autocomplete if it's the first series
                      if (i === 0) {
                        for (let j = 1; j < newSeries.length; j++) {
                          if (newSeries[j].weight === oldVal || !newSeries[j].weight) {
                            newSeries[j].weight = val;
                          }
                        }
                      }
                      setSeries(newSeries);
                    }}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[8px] font-bold text-text-muted pointer-events-none">KG</span>
                </div>
              </div>
              <button 
                onClick={() => setSeries(series.filter((_, idx) => idx !== i))}
                className="text-danger/40 hover:text-danger p-1"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-1">Notas</label>
        <textarea 
          className="w-full bg-bg-card border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-accent resize-none h-24"
          placeholder="Ej: Enfocarse en la fase excéntrica..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      <AnimatePresence>
        {showInfo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-bg-card border border-white/10 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Info className="text-accent" size={20} /> Información
                  </h3>
                  <button onClick={() => setShowInfo(false)} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                    <X size={20} />
                  </button>
                </div>

                <div className="aspect-video bg-bg-soft rounded-2xl overflow-hidden flex items-center justify-center text-6xl">
                  {ex?.gifUrl ? (
                    <img src={ex.gifUrl} alt={ex.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  ) : (
                    ex?.emoji
                  )}
                </div>

                <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-1">Músculos Trabajados</h4>
                    <div className="flex flex-wrap gap-2">
                      {ex?.muscles.map(m => (
                        <span key={m} className="px-3 py-1 bg-accent/10 text-accent-light text-[10px] font-bold rounded-full uppercase">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-1">Instrucciones</h4>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {ex?.desc || "No hay instrucciones detalladas para este ejercicio todavía."}
                    </p>
                  </div>
                </div>

                <Button className="w-full" onClick={() => setShowInfo(false)}>Entendido</Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Button = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { 
  variant?: 'primary' | 'ghost' | 'danger' | 'danger-outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}) => {
  const variants = {
    primary: 'bg-accent text-white shadow-[0_4px_24px_rgba(108,99,255,0.32)] active:scale-95',
    ghost: 'bg-bg-card text-text-muted border border-white/10 active:scale-95',
    danger: 'bg-danger text-white active:scale-95',
    'danger-outline': 'bg-danger/10 text-danger border border-danger active:scale-95',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-4 text-base',
    xl: 'w-full py-4 text-lg',
  };

  return (
    <button 
      className={cn(
        'rounded-2xl font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => (
  <div 
    onClick={onClick}
    className={cn('bg-bg-soft border border-white/5 rounded-3xl p-5 shadow-xl', onClick && 'cursor-pointer active:scale-[0.98] transition-transform', className)}
  >
    {children}
  </div>
);

const Input = ({ label, className, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label?: string }) => (
  <div className="space-y-2">
    {label && <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-1">{label}</label>}
    <input 
      className={cn(
        "w-full bg-bg-card border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder:text-white/20 outline-none focus:border-accent transition-colors",
        className
      )}
      {...props}
    />
  </div>
);

// --- Main App ---

const DAYS_ORDER = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

export default function App() {
  const [screen, setScreen] = useState<'welcome' | 'register' | 'home' | 'profile' | 'create-routine' | 'select-muscle' | 'exercise-list' | 'configure-exercise' | 'routine-detail' | 'progress'>('welcome');
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [routines, setRoutines] = useState<Routine[]>([]);
  const [history, setHistory] = useState<AppHistory>({});
  const [favs, setFavs] = useState<string[]>([]);
  const [customEx, setCustomEx] = useState<Exercise[]>([]);
  const [regSex, setRegSex] = useState<'M' | 'F'>('M');
  
  // Context state
  const [ctxRoutine, setCtxRoutine] = useState<Routine | null>(null);
  const [ctxDay, setCtxDay] = useState<string | null>(null);
  const [ctxMuscle, setCtxMuscle] = useState<string | null>(null);
  const [ctxExercise, setCtxExercise] = useState<Exercise | null>(null);
  const [ctxEditingIdx, setCtxEditingIdx] = useState<number | null>(null);
  const [ctxDetailId, setCtxDetailId] = useState<string | null>(null);
  const [expandedDays, setExpandedDays] = useState<Record<string, boolean>>({});
  const [showExInfo, setShowExInfo] = useState(false);
  const [showManualModal, setShowManualModal] = useState(false);
  const [manualExName, setManualExName] = useState('');
  const [bodyFront, setBodyFront] = useState(true);
  const [filterMode, setFilterMode] = useState<'all' | 'muscle' | 'favs'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [returnToDetail, setReturnToDetail] = useState(false);
  const [routineError, setRoutineError] = useState<string | null>(null);

  // Load data
  useEffect(() => {
    const p = localStorage.getItem('gymbros_profile');
    const r = localStorage.getItem('gymbros_routines');
    const h = localStorage.getItem('gymbros_history');
    const f = localStorage.getItem('gymbros_favs');
    const c = localStorage.getItem('gymbros_custom_ex');

    if (p) {
      setProfile(JSON.parse(p));
      setScreen('home');
    }
    if (r) setRoutines(JSON.parse(r));
    if (h) setHistory(JSON.parse(h));
    if (f) setFavs(JSON.parse(f));
    if (c) setCustomEx(JSON.parse(c));
  }, []);

  // Save data
  useEffect(() => {
    if (profile) localStorage.setItem('gymbros_profile', JSON.stringify(profile));
    localStorage.setItem('gymbros_routines', JSON.stringify(routines));
    localStorage.setItem('gymbros_history', JSON.stringify(history));
    localStorage.setItem('gymbros_favs', JSON.stringify(favs));
    localStorage.setItem('gymbros_custom_ex', JSON.stringify(customEx));
  }, [profile, routines, history, favs, customEx]);

  const handleRegister = () => {
    const name = (document.getElementById('reg-name') as HTMLInputElement).value;
    if (!name) return;
    const newProfile: Profile = {
      name,
      age: parseInt((document.getElementById('reg-age') as HTMLInputElement).value) || 0,
      weight: parseFloat((document.getElementById('reg-weight') as HTMLInputElement).value) || 0,
      height: parseInt((document.getElementById('reg-height') as HTMLInputElement).value) || 0,
      sex: regSex, 
      createdAt: dateStrAR(),
    };
    setProfile(newProfile);
    setScreen('home');
  };

  const startNewRoutine = () => {
    setCtxRoutine({ id: genId(), name: '', days: {} });
    setCtxDay('Lunes');
    setCtxMuscle(null);
    setSearchQuery('');
    setScreen('create-routine');
  };

  const saveRoutine = () => {
    if (!ctxRoutine || !ctxRoutine.name.trim()) {
      setRoutineError('Por favor, ingresá un nombre para la rutina.');
      return;
    }
    setRoutineError(null);
    const updatedRoutines = [...routines];
    const idx = updatedRoutines.findIndex(r => r.id === ctxRoutine.id);
    if (idx >= 0) updatedRoutines[idx] = ctxRoutine;
    else updatedRoutines.push(ctxRoutine);
    setRoutines(updatedRoutines);
    setScreen('home');
  };

  const selectMuscle = (id: string) => {
    setCtxMuscle(id);
    setSearchQuery('');
    setFilterMode('muscle');
    setScreen('exercise-list');
  };

  const addExerciseToRoutine = (ex: Exercise) => {
    if (!ctxRoutine || !ctxDay) return;
    
    setCtxExercise(ex);
    setCtxEditingIdx(null);
    setScreen('configure-exercise');
  };

  const saveExerciseToRoutine = (series: Series[], note: string) => {
    if (!ctxRoutine || !ctxDay || !ctxExercise) return;

    const updatedRoutine = { ...ctxRoutine };
    if (!updatedRoutine.days[ctxDay]) {
      updatedRoutine.days[ctxDay] = { exercises: [] };
    }

    const exEntry: RoutineExercise = {
      id: ctxEditingIdx !== null ? updatedRoutine.days[ctxDay].exercises[ctxEditingIdx].id : genId(),
      exerciseId: ctxExercise.id,
      name: ctxExercise.name,
      emoji: ctxExercise.emoji,
      muscles: ctxExercise.muscles,
      series,
      note
    };

    if (ctxEditingIdx !== null) {
      updatedRoutine.days[ctxDay].exercises[ctxEditingIdx] = exEntry;
    } else {
      updatedRoutine.days[ctxDay].exercises.push(exEntry);
    }

    setCtxRoutine(updatedRoutine);
    setCtxEditingIdx(null);
    setCtxMuscle(null);
    setSearchQuery('');
    
    if (returnToDetail) {
      // Also update the main routines list so changes persist
      const updatedRoutines = [...routines];
      const rIdx = updatedRoutines.findIndex(r => r.id === updatedRoutine.id);
      if (rIdx >= 0) {
        updatedRoutines[rIdx] = updatedRoutine;
        setRoutines(updatedRoutines);
      }
      setScreen('routine-detail');
      setReturnToDetail(false);
    } else {
      setScreen('create-routine');
    }
  };

  const editExerciseInRoutine = (day: string, idx: number, fromDetail = false) => {
    const ex = (fromDetail ? routines.find(r => r.id === ctxDetailId) : ctxRoutine)?.days[day].exercises[idx];
    if (!ex) return;
    
    if (fromDetail) {
      setCtxRoutine(routines.find(r => r.id === ctxDetailId) || null);
      setReturnToDetail(true);
    }
    
    setCtxDay(day);
    setCtxEditingIdx(idx);
    setCtxExercise({
      id: ex.exerciseId,
      name: ex.name,
      emoji: ex.emoji,
      muscles: ex.muscles,
      desc: '', 
    });
    setScreen('configure-exercise');
  };

  const deleteExerciseFromRoutine = (day: string, idx: number) => {
    if (!ctxDetailId) return;
    
    const updatedRoutines = [...routines];
    const rIdx = updatedRoutines.findIndex(r => r.id === ctxDetailId);
    if (rIdx === -1) return;

    const updatedRoutine = { ...updatedRoutines[rIdx] };
    const updatedExercises = [...updatedRoutine.days[day].exercises];
    updatedExercises.splice(idx, 1);
    
    updatedRoutine.days[day] = {
      ...updatedRoutine.days[day],
      exercises: updatedExercises
    };

    updatedRoutines[rIdx] = updatedRoutine;
    setRoutines(updatedRoutines);
  };

  const moveExerciseInRoutine = (day: string, idx: number, direction: 'up' | 'down') => {
    if (!ctxDetailId) return;
    
    const updatedRoutines = [...routines];
    const rIdx = updatedRoutines.findIndex(r => r.id === ctxDetailId);
    if (rIdx === -1) return;

    const updatedRoutine = { ...updatedRoutines[rIdx] };
    const updatedExercises = [...updatedRoutine.days[day].exercises];
    
    const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= updatedExercises.length) return;

    // Swap
    [updatedExercises[idx], updatedExercises[targetIdx]] = [updatedExercises[targetIdx], updatedExercises[idx]];
    
    updatedRoutine.days[day] = {
      ...updatedRoutine.days[day],
      exercises: updatedExercises
    };

    updatedRoutines[rIdx] = updatedRoutine;
    setRoutines(updatedRoutines);
  };

  const addManualExercise = () => {
    if (!ctxRoutine || !ctxDay || !manualExName) return;
    const manualEx: Exercise = {
      id: 'manual_' + genId(),
      name: manualExName,
      emoji: '📝',
      muscles: [ctxMuscle || 'Manual'],
      desc: 'Ejercicio añadido manualmente.'
    };
    setCtxExercise(manualEx);
    setCtxEditingIdx(null);
    setManualExName('');
    setShowManualModal(false);
    setScreen('configure-exercise');
  };

  const renderWelcome = () => (
    <div className="relative h-screen flex flex-col justify-end p-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-16 w-80 h-80 bg-accent rounded-full blur-[80px] opacity-20 orb-float" />
        <div className="absolute top-[40%] -right-20 w-60 h-60 bg-danger rounded-full blur-[80px] opacity-20 orb-float" style={{ animationDelay: '-3s' }} />
      </div>
      
      <div className="relative z-10 space-y-12">
        <div>
          <span className="text-5xl block mb-2 drop-shadow-[0_0_20px_rgba(108,99,255,0.8)]">⚡</span>
          <h1 className="font-display text-8xl tracking-wider leading-[0.9]">
            GYM<span className="text-accent-light">BROS</span>
          </h1>
          <p className="text-text-muted mt-2 font-light tracking-wide">Tu entrenamiento, inteligente.</p>
        </div>
        
        <div className="space-y-3">
          <Button size="xl" onClick={() => setScreen('register')}>Crear mi perfil</Button>
          <Button size="xl" variant="ghost" onClick={() => profile && setScreen('home')}>Ya tengo perfil</Button>
          <a href="/vanilla-v2/index.html" className="block text-center text-[10px] text-text-muted uppercase tracking-widest mt-4 hover:text-accent transition-colors">
            Probar Versión Vanilla PWA (v2)
          </a>
        </div>
      </div>
    </div>
  );

  const renderRegister = () => (
    <div className="min-h-screen p-6 space-y-8">
      <div className="flex items-center justify-between">
        <button onClick={() => setScreen('welcome')} className="text-accent-light flex items-center gap-1">
          <ChevronLeft size={20} /> Atrás
        </button>
        <span className="font-semibold">Mi Perfil</span>
        <div className="w-12" />
      </div>

      <div className="text-center space-y-2">
        <div className="text-5xl">🏋️</div>
        <p className="text-text-muted text-sm">Contanos sobre vos para personalizar tu experiencia.</p>
      </div>

      <div className="space-y-4">
        <Input id="reg-name" label="¿Cómo te llamás?" placeholder="Tu nombre" />
        <div className="grid grid-cols-2 gap-4">
          <Input id="reg-age" label="Edad" type="number" placeholder="25" />
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-1">Sexo</label>
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => setRegSex('M')}
                className={cn(
                  "border rounded-2xl py-3 text-sm font-semibold transition-all",
                  regSex === 'M' ? "bg-accent border-accent text-white shadow-[0_0_15px_rgba(108,99,255,0.4)]" : "bg-bg-card border-white/10 text-text-muted"
                )}
              >
                ♂ Masc
              </button>
              <button 
                onClick={() => setRegSex('F')}
                className={cn(
                  "border rounded-2xl py-3 text-sm font-semibold transition-all",
                  regSex === 'F' ? "bg-accent border-accent text-white shadow-[0_0_15px_rgba(108,99,255,0.4)]" : "bg-bg-card border-white/10 text-text-muted"
                )}
              >
                ♀ Fem
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input id="reg-weight" label="Peso (kg)" type="number" placeholder="75" />
          <Input id="reg-height" label="Altura (cm)" type="number" placeholder="175" />
        </div>
        
        <Button size="xl" className="mt-8" onClick={handleRegister}>Empezar a entrenar 💪</Button>
      </div>
    </div>
  );

  const renderHome = () => (
    <div className="min-h-screen p-6 space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-text-muted text-xs mb-1">{greetingByHour()}, {profile?.name}</p>
          <div className="flex items-center gap-2">
            <span className="text-2xl drop-shadow-[0_0_8px_rgba(108,99,255,0.5)]">⚡</span>
            <h2 className="font-display text-4xl tracking-wider">GYM<span className="text-accent-light">BROS</span></h2>
          </div>
        </div>
        <button 
          onClick={() => setScreen('profile')}
          className="w-11 h-11 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center text-accent-light font-bold"
        >
          {profile?.name.charAt(0).toUpperCase() || '?'}
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        <span className="bg-bg-card border border-white/5 rounded-full px-4 py-1.5 text-[10px] font-bold whitespace-nowrap">
          {profile?.name}
        </span>
        <span className="bg-bg-card border border-white/5 rounded-full px-4 py-1.5 text-[10px] font-bold whitespace-nowrap">
          {routines.length} rutinas
        </span>
        <span className="bg-bg-card border border-white/5 rounded-full px-4 py-1.5 text-[10px] font-bold whitespace-nowrap">
          {Object.keys(history).length} registros
        </span>
      </div>

      <Button size="xl" onClick={startNewRoutine}>
        <Plus size={20} /> Nueva Rutina
      </Button>

      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">Mis Rutinas</h3>
          <button onClick={() => setScreen('progress')} className="text-accent-light text-[10px] font-bold uppercase tracking-widest">Ver Progreso</button>
        </div>

        <div className="space-y-3">
          {routines.length === 0 ? (
            <div className="text-center py-12 space-y-3 opacity-50">
              <div className="text-4xl">🏋️</div>
              <p className="text-sm">Aún no tenés rutinas.<br/>¡Creá la primera!</p>
            </div>
          ) : (
            routines.map(r => (
              <div key={r.id} className="relative group">
                <Card onClick={() => { setCtxDetailId(r.id); setScreen('routine-detail'); }}>
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold">{r.name}</h4>
                      <div className="flex items-center gap-1">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setCtxRoutine(r);
                            setCtxDay('Lunes');
                            setCtxMuscle(null);
                            setSearchQuery('');
                            setScreen('create-routine');
                          }}
                          className="p-2 text-accent-light hover:bg-accent/10 rounded-xl transition-colors"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setRoutines(routines.filter(rout => rout.id !== r.id));
                          }}
                          className="p-2 text-red-400 hover:bg-red-400/10 rounded-xl transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  <div className="flex gap-3 text-[10px] text-text-muted font-semibold">
                    <span>{Object.keys(r.days).length} días</span>
                    <span>{Object.values(r.days).reduce((acc: number, d) => acc + (d as { exercises: RoutineExercise[] }).exercises.length, 0)} ejercicios</span>
                  </div>
                  <div className="flex gap-1.5 mt-4">
                    {Object.keys(r.days)
                      .sort((a, b) => DAYS_ORDER.indexOf(a) - DAYS_ORDER.indexOf(b))
                      .map(d => (
                      <span key={d} className="bg-accent/10 text-accent-light text-[9px] font-bold px-2.5 py-1 rounded-full uppercase">
                        {d.slice(0, 3)}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );

  const renderSelectMuscle = () => {
    const muscles = bodyFront ? MUSCLES_FRONT : MUSCLES_BACK;
    return (
      <div className="min-h-screen p-6 space-y-6">
        <div className="flex items-center justify-between">
          <button onClick={() => { setCtxMuscle(null); setScreen('create-routine'); }} className="text-accent-light flex items-center gap-1">
            <ChevronLeft size={20} /> Atrás
          </button>
          <span className="font-semibold">Seleccionar Músculo</span>
          <div className="w-12" />
        </div>

        <div className="relative flex flex-col items-center">
          <div className="w-full max-w-[320px] aspect-[4/5] relative bg-bg-soft/50 rounded-[40px] border border-white/5 overflow-hidden shadow-2xl">
            <svg viewBox="0 0 320 400" className="w-full h-full">
              <defs>
                <radialGradient id="bodyGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2D2D50" />
                  <stop offset="100%" stopColor="#1E1E38" />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Sharper Athletic Silhouette */}
              <g fill="url(#bodyGrad)" opacity="0.9" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.2">
                {/* Head */}
                <ellipse cx="160" cy="30" rx="10" ry="14" />
                {/* Neck */}
                <path d="M155 44 L152 58 H168 L165 44 Z" />
                {/* Torso (V-Taper) */}
                <path d="M152 58 
                         C120 58 100 65 85 85 
                         L100 120 
                         C110 150 120 180 130 225 
                         H190 
                         C200 180 210 150 220 120 
                         L235 85 
                         C220 65 200 58 168 58 
                         Z" />
                {/* Arms */}
                <path d="M85 85 L60 120 L45 180 Q45 195 60 195 L75 180 L85 130 L100 120 Z" />
                <path d="M235 85 L260 120 L275 180 Q275 195 260 195 L245 180 L235 130 L220 120 Z" />
                {/* Legs */}
                <path d="M135 225 L90 310 L110 420 Q140 425 155 415 L160 320 L165 415 Q180 425 210 420 L230 310 L185 225 Z" />
              </g>

              {/* Muscle Group Segments */}
              <g fill="#ffffff" fillOpacity="0.06" stroke="white" strokeWidth="0.3" strokeOpacity="0.1">
                {bodyFront ? (
                  <>
                    {/* Pectorals */}
                    <path d="M115 95 Q140 90 160 105 Q180 90 205 95 Q215 130 160 140 Q105 130 115 95 Z" />
                    {/* Abdominals */}
                    <path d="M140 150 H180 V215 H140 Z" fillOpacity="0.08" />
                    <path d="M140 173 H180 M140 196 H180 M160 150 V215" strokeOpacity="0.2" />
                    {/* Shoulders */}
                    <path d="M85 90 Q95 85 110 110 L100 130 Q80 120 85 90 Z" />
                    <path d="M235 90 Q225 85 210 110 L220 130 Q240 120 235 90 Z" />
                    {/* Quads */}
                    <path d="M130 235 Q140 245 150 300 L140 330 Q125 300 130 235 Z" />
                    <path d="M190 235 Q180 245 170 300 L180 330 Q195 300 190 235 Z" />
                  </>
                ) : (
                  <>
                    {/* Traps */}
                    <path d="M160 65 L135 90 L160 140 L185 90 Z" fillOpacity="0.1" />
                    {/* Lats */}
                    <path d="M135 110 Q115 140 125 190 L160 210 L195 190 Q205 140 185 110 Z" fillOpacity="0.08" />
                    {/* Glutes */}
                    <path d="M140 220 Q160 210 180 220 Q190 250 160 260 Q130 250 140 220 Z" fillOpacity="0.1" />
                    {/* Hamstrings */}
                    <path d="M125 270 Q140 280 150 330 L140 350 Q120 320 125 270 Z" />
                    <path d="M195 270 Q180 280 170 330 L180 350 Q200 320 195 270 Z" />
                  </>
                )}
              </g>

              {/* Anatomical Definition Lines */}
              <g fill="none" stroke="white" strokeWidth="0.4" strokeOpacity="0.15">
                <path d="M160 65 V220" />
                {bodyFront && (
                  <>
                    <path d="M110 115 Q160 130 210 115" />
                    <path d="M125 220 Q160 235 195 220" />
                  </>
                )}
              </g>
              
              {muscles.map(m => (
                <g key={m.id} className="cursor-pointer group" onClick={() => selectMuscle(m.id)}>
                  <circle 
                    cx={m.cx} cy={m.cy} r={m.r + 10} 
                    fill="transparent" 
                  />
                  <circle 
                    cx={m.cx} cy={m.cy} r={m.r} 
                    fill={ctxMuscle === m.id ? "#6C63FF" : "rgba(108,99,255,0.2)"}
                    stroke={ctxMuscle === m.id ? "#8B84FF" : "rgba(108,99,255,0.4)"}
                    strokeWidth="1.5"
                    filter={ctxMuscle === m.id ? "url(#glow)" : ""}
                    className="transition-all duration-300 group-hover:fill-accent/60 group-hover:r-[110%]"
                  />
                  <line 
                    x1={m.cx} y1={m.cy} 
                    x2={m.cx > 160 ? m.cx + 25 : m.cx - 25} 
                    y2={m.cy} 
                    stroke="white" strokeOpacity="0.2" strokeWidth="1"
                  />
                  <text 
                    x={m.cx > 160 ? m.cx + 30 : m.cx - 30} 
                    y={m.cy + 4} 
                    className="text-[9px] font-bold fill-white/80 pointer-events-none uppercase tracking-tighter"
                    textAnchor={m.cx > 160 ? "start" : "end"}
                  >
                    {m.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <Button 
            variant="ghost" 
            className="mt-4" 
            onClick={() => setBodyFront(!bodyFront)}
          >
            <RotateCcw size={16} /> Girar Cuerpo
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {muscles.map(m => (
            <button 
              key={m.id}
              onClick={() => selectMuscle(m.id)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-bold transition-all",
                ctxMuscle === m.id ? "bg-accent text-white" : "bg-bg-card text-text-muted border border-white/10"
              )}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderExerciseList = () => {
    const exercises = ctxMuscle ? EXERCISES_DB[ctxMuscle] || [] : [];
    return (
      <div className="min-h-screen p-6 space-y-6">
        <div className="flex items-center justify-between">
          <button onClick={() => { setCtxMuscle(null); setScreen('select-muscle'); }} className="text-accent-light flex items-center gap-1">
            <ChevronLeft size={20} /> Atrás
          </button>
          <span className="font-semibold">Ejercicios</span>
          <div className="w-12" />
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
          <input 
            type="text" 
            placeholder="Buscar ejercicio..."
            className="w-full bg-bg-card border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-white outline-none focus:border-accent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card 
            className="border-dashed flex flex-col items-center justify-center py-8 gap-3 opacity-60 hover:opacity-100 transition-opacity"
            onClick={() => setShowManualModal(true)}
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent-light">
              <Plus size={24} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest">Manual</span>
          </Card>

          {exercises.filter(ex => ex.name.toLowerCase().includes(searchQuery.toLowerCase())).map(ex => (
            <div key={ex.id}>
              <Card onClick={() => addExerciseToRoutine(ex)}>
                <div className="aspect-square bg-bg-card rounded-2xl mb-3 flex items-center justify-center overflow-hidden relative">
                  {ex.gifUrl ? (
                    <img src={ex.gifUrl} alt={ex.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  ) : (
                    <span className="text-5xl animate-bob">{ex.emoji}</span>
                  )}
                  <button 
                    className={cn(
                      "absolute top-2 right-2 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center transition-colors",
                      favs.includes(ex.id) ? "text-yellow-400" : "text-white/40"
                    )}
                    onClick={(e) => {
                      e.stopPropagation();
                      const newFavs = [...favs];
                      if (newFavs.includes(ex.id)) newFavs.splice(newFavs.indexOf(ex.id), 1);
                      else newFavs.push(ex.id);
                      setFavs(newFavs);
                    }}
                  >
                    <Star size={14} fill={favs.includes(ex.id) ? "currentColor" : "none"} />
                  </button>
                </div>
                <h5 className="text-xs font-bold leading-tight">{ex.name}</h5>
                <p className="text-[10px] text-text-muted mt-1">{ex.muscles.join(', ')}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCreateRoutine = () => (
    <div className="min-h-screen p-6 space-y-6">
      <div className="flex items-center justify-between">
        <button 
          onClick={() => {
            setRoutineError(null);
            if (routines.find(r => r.id === ctxRoutine?.id)) {
              setScreen('routine-detail');
            } else {
              setScreen('home');
            }
          }} 
          className="text-accent-light flex items-center gap-1"
        >
          <ChevronLeft size={20} /> Atrás
        </button>
        <span className="font-semibold">{ctxRoutine?.id && routines.find(r => r.id === ctxRoutine.id) ? 'Editar Rutina' : 'Nueva Rutina'}</span>
        <button onClick={saveRoutine} className="text-accent-light font-bold text-sm">Guardar</button>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Input 
            label="Nombre de la Rutina" 
            placeholder="Ej: Fuerza + Volumen" 
            value={ctxRoutine?.name || ''}
            onChange={(e) => {
              setCtxRoutine(prev => prev ? { ...prev, name: e.target.value } : null);
              if (routineError) setRoutineError(null);
            }}
            className={cn(routineError && "border-danger focus:border-danger")}
          />
          <AnimatePresence>
            {routineError && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-danger text-[10px] font-bold px-1"
              >
                {routineError}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-1">Días de Entrenamiento</label>
          <div className="grid grid-cols-4 gap-2">
            {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map(day => (
              <button 
                key={day}
                onClick={() => setCtxDay(day)}
                className={cn(
                  "py-3 rounded-2xl text-xs font-bold transition-all border",
                  ctxDay === day ? "bg-accent/10 border-accent text-accent-light" : "bg-bg-card border-white/10 text-text-muted"
                )}
              >
                {day.slice(0, 3)}
              </button>
            ))}
          </div>
        </div>

        {ctxDay && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-accent-light">{ctxDay}</h4>
              <button onClick={() => { setCtxMuscle(null); setScreen('select-muscle'); }} className="text-accent-light flex items-center gap-1 text-xs font-bold">
                <Plus size={14} /> Agregar Ejercicio
              </button>
            </div>

            <div className="space-y-3">
              {(ctxRoutine?.days[ctxDay]?.exercises || []).map((ex, idx) => (
                <div key={ex.id} className="bg-bg-soft border border-white/5 rounded-2xl p-4 flex items-center gap-4 active:scale-[0.98] transition-transform cursor-pointer" onClick={() => editExerciseInRoutine(ctxDay, idx)}>
                  <div className="w-12 h-12 bg-bg-card rounded-xl flex items-center justify-center text-2xl">
                    {ex.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm font-bold truncate">{ex.name}</h5>
                    <p className="text-[10px] text-text-muted">{ex.series.length} series · {ex.series.filter(s => s.reps).length} cargadas</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 text-accent-light/60">
                      <Edit2 size={16} />
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const updated = { ...ctxRoutine! };
                        updated.days[ctxDay!].exercises.splice(idx, 1);
                        setCtxRoutine(updated);
                      }}
                      className="text-danger/40 hover:text-danger transition-colors p-2"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>
              ))}
              {(ctxRoutine?.days[ctxDay]?.exercises || []).length === 0 && (
                <div className="text-center py-8 border border-dashed border-white/10 rounded-2xl opacity-40">
                  <p className="text-xs">No hay ejercicios para este día</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderRoutineDetail = () => {
    const r = routines.find(r => r.id === ctxDetailId);
    if (!r) return null;

    return (
      <div className="min-h-screen p-6 space-y-6">
        <div className="flex items-center justify-between">
          <button onClick={() => setScreen('home')} className="text-accent-light flex items-center gap-1">
            <ChevronLeft size={20} /> Mis Rutinas
          </button>
          <span className="font-semibold">Rutina</span>
          <button onClick={() => { setCtxRoutine(r); setCtxDay('Lunes'); setCtxMuscle(null); setSearchQuery(''); setScreen('create-routine'); }} className="text-accent-light font-bold text-sm">Editar</button>
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-display tracking-wider">{r.name}</h3>

          <div className="space-y-4">
            {Object.entries(r.days)
              .sort(([dayA], [dayB]) => DAYS_ORDER.indexOf(dayA) - DAYS_ORDER.indexOf(dayB))
              .map(([day, data]) => {
              const dayData = data as { exercises: RoutineExercise[] };
              const isExpanded = !!expandedDays[day]; // Default closed
              
              return (
                <div key={day} className="space-y-4">
                  <button 
                    onClick={() => setExpandedDays(prev => ({ ...prev, [day]: !isExpanded }))}
                    className="w-full flex items-center gap-3 group"
                  >
                    <span className="bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">{day}</span>
                    <div className="h-px flex-1 bg-white/5" />
                    <div className="text-text-muted group-hover:text-accent-light transition-colors">
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                      {dayData.exercises.map((ex, idx) => (
                        <div key={ex.id}>
                          <Card>
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-4">
                                <div className="text-3xl">{ex.emoji}</div>
                                <div>
                                  <h5 className="font-bold">{ex.name}</h5>
                                  <p className="text-[10px] text-text-muted">{ex.muscles.join(', ')}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="flex flex-col gap-1 mr-2">
                                  <button 
                                    disabled={idx === 0}
                                    onClick={() => moveExerciseInRoutine(day, idx, 'up')}
                                    className="p-1 text-text-muted hover:text-accent-light disabled:opacity-20 transition-colors"
                                  >
                                    <ChevronUp size={16} />
                                  </button>
                                  <button 
                                    disabled={idx === dayData.exercises.length - 1}
                                    onClick={() => moveExerciseInRoutine(day, idx, 'down')}
                                    className="p-1 text-text-muted hover:text-accent-light disabled:opacity-20 transition-colors"
                                  >
                                    <ChevronDown size={16} />
                                  </button>
                                </div>
                                <button 
                                  onClick={() => editExerciseInRoutine(day, idx, true)}
                                  className="p-2 text-accent-light hover:bg-accent/10 rounded-xl transition-colors"
                                >
                                  <Edit2 size={18} />
                                </button>
                                <button 
                                  onClick={() => deleteExerciseFromRoutine(day, idx)}
                                  className="p-2 text-red-400 hover:bg-red-400/10 rounded-xl transition-colors"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </div>
                            </div>
                            
                            <table className="w-full text-center">
                            <thead>
                              <tr className="text-[9px] uppercase tracking-widest text-text-muted">
                                <th className="pb-2">Serie</th>
                                <th className="pb-2">Reps</th>
                                <th className="pb-2">Peso (kg)</th>
                              </tr>
                            </thead>
                            <tbody className="text-sm font-bold">
                              {ex.series.map((s, i) => (
                                <tr key={i} className="border-t border-white/5">
                                  <td className="py-2 text-text-muted font-normal">{i + 1}</td>
                                  <td className="py-2">{s.reps || '—'}</td>
                                  <td className="py-2">{s.weight || '—'}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </Card>
                      </div>
                    ))}
                    <div className="pt-2">
                      <button 
                        onClick={() => {
                          setCtxRoutine(r);
                          setCtxDay(day);
                          setCtxMuscle(null);
                          setSearchQuery('');
                          setReturnToDetail(true);
                          setScreen('select-muscle');
                        }}
                        className="w-full py-4 rounded-2xl border border-dashed border-white/10 text-accent-light text-xs font-bold flex items-center justify-center gap-2 hover:bg-accent/5 transition-colors"
                      >
                        <Plus size={14} /> Agregar Ejercicio a {day}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          </div>

          <Button 
            variant="danger-outline" 
            size="xl" 
            onClick={() => {
              setRoutines(routines.filter(rout => rout.id !== r.id));
              setScreen('home');
            }}
          >
            <Trash2 size={18} /> Eliminar Rutina
          </Button>
        </div>
      </div>
    );
  };

  const renderProgressScreen = () => {
    const keys = Object.keys(history);
    const currentKey = ctxDetailId || keys[0];
    const data = history[currentKey];

    return (
      <div className="min-h-screen p-6 space-y-6">
        <div className="flex items-center justify-between">
          <button onClick={() => setScreen('home')} className="text-accent-light flex items-center gap-1">
            <ChevronLeft size={20} /> Atrás
          </button>
          <span className="font-semibold">Progreso</span>
          <div className="w-12" />
        </div>

        {keys.length === 0 ? (
          <div className="text-center py-20 opacity-50 space-y-4">
            <TrendingUp size={48} className="mx-auto" />
            <p>Aún no hay historial.<br/>Entrená para ver tu progreso.</p>
          </div>
        ) : (
          <>
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              {keys.map(k => (
                <button 
                  key={k}
                  onClick={() => setCtxDetailId(k)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all",
                    ctxDetailId === k ? "bg-accent text-white" : "bg-bg-card text-text-muted border border-white/10"
                  )}
                >
                  {history[k].exerciseName}
                </button>
              ))}
            </div>

            {data && (
              <div className="space-y-6">
                <Card className="p-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-4">Peso Máximo (kg)</h4>
                  <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={data.entries}>
                        <defs>
                          <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6C63FF" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#6C63FF" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                        <XAxis 
                          dataKey="date" 
                          hide 
                        />
                        <YAxis 
                          stroke="#7B7AA0" 
                          fontSize={10} 
                          tickLine={false} 
                          axisLine={false}
                          tickFormatter={(val) => `${val}kg`}
                        />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1E1E35', border: 'none', borderRadius: '12px', fontSize: '12px' }}
                        />
                        <Area type="monotone" dataKey="maxWeight" stroke="#6C63FF" fillOpacity={1} fill="url(#colorWeight)" strokeWidth={2} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </Card>

                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-1">Historial de Sesiones</h4>
                  {data.entries.slice().reverse().map((e, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-bg-soft rounded-2xl border border-white/5">
                      <span className="text-xs text-text-muted font-semibold">{friendlyDate(e.date)}</span>
                      <div className="text-right">
                        <div className="text-sm font-bold">{e.maxWeight}kg <span className="text-text-muted font-normal">max</span></div>
                        <div className="text-[10px] text-text-muted">{e.totalReps} reps totales</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto bg-bg min-h-screen font-sans selection:bg-accent/30 overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {screen === 'welcome' && renderWelcome()}
          {screen === 'register' && renderRegister()}
          {screen === 'home' && renderHome()}
          {screen === 'progress' && renderProgressScreen()}
          {screen === 'create-routine' && renderCreateRoutine()}
          {screen === 'select-muscle' && renderSelectMuscle()}
          {screen === 'exercise-list' && renderExerciseList()}
          {screen === 'configure-exercise' && (
            <ConfigureExercise 
              ctxExercise={ctxExercise}
              ctxRoutine={ctxRoutine}
              ctxDay={ctxDay}
              ctxEditingIdx={ctxEditingIdx}
              onBack={() => {
                if (returnToDetail) {
                  setScreen('routine-detail');
                  setReturnToDetail(false);
                } else {
                  setScreen(ctxEditingIdx !== null ? 'create-routine' : 'exercise-list');
                }
              }}
              onSave={saveExerciseToRoutine}
            />
          )}
          {screen === 'routine-detail' && renderRoutineDetail()}

          <AnimatePresence>
            {showManualModal && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="bg-bg-card border border-white/10 rounded-[32px] w-full max-w-md overflow-hidden shadow-2xl"
                >
                  <div className="p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">Ejercicio Manual</h3>
                      <button onClick={() => setShowManualModal(false)} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                        <X size={20} />
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-1">Nombre del Ejercicio</label>
                        <input 
                          type="text"
                          autoFocus
                          className="w-full bg-bg-soft border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-accent"
                          placeholder="Ej: Press de Banca con Cadenas"
                          value={manualExName}
                          onChange={(e) => setManualExName(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && addManualExercise()}
                        />
                      </div>
                      <p className="text-[10px] text-text-muted leading-relaxed px-1 italic">
                        * El ejercicio se agregará a la categoría actual ({ctxMuscle || 'Manual'}).
                      </p>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button variant="ghost" className="flex-1" onClick={() => setShowManualModal(false)}>Cancelar</Button>
                      <Button className="flex-1" onClick={addManualExercise} disabled={!manualExName.trim()}>Agregar</Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
          
          {/* Other screens would be implemented similarly */}
          {screen === 'profile' && (
            <div className="min-h-screen p-6 space-y-6">
               <div className="flex items-center justify-between">
                <button 
                  onClick={() => {
                    if (isEditingProfile) setIsEditingProfile(false);
                    else setScreen('home');
                  }} 
                  className="text-accent-light flex items-center gap-1"
                >
                  <ChevronLeft size={20} /> Atrás
                </button>
                <span className="font-semibold">Mi Perfil</span>
                <button 
                  onClick={() => setIsEditingProfile(!isEditingProfile)}
                  className="text-accent-light font-bold text-sm"
                >
                  {isEditingProfile ? 'Cancelar' : 'Editar'}
                </button>
              </div>
              
              {isEditingProfile ? (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                  <Input 
                    label="Nombre" 
                    value={profile?.name || ''} 
                    onChange={(e) => setProfile(prev => prev ? { ...prev, name: e.target.value } : null)}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input 
                      label="Edad" 
                      type="number" 
                      value={profile?.age || ''} 
                      onChange={(e) => setProfile(prev => prev ? { ...prev, age: parseInt(e.target.value) || 0 } : null)}
                    />
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-1">Sexo</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button 
                          onClick={() => setProfile(prev => prev ? { ...prev, sex: 'M' } : null)}
                          className={cn(
                            "border rounded-2xl py-3 text-sm font-semibold transition-all",
                            profile?.sex === 'M' ? "bg-accent/10 border-accent text-accent-light" : "bg-bg-card border-white/10 text-text-muted"
                          )}
                        >♂ Masc</button>
                        <button 
                          onClick={() => setProfile(prev => prev ? { ...prev, sex: 'F' } : null)}
                          className={cn(
                            "border rounded-2xl py-3 text-sm font-semibold transition-all",
                            profile?.sex === 'F' ? "bg-accent/10 border-accent text-accent-light" : "bg-bg-card border-white/10 text-text-muted"
                          )}
                        >♀ Fem</button>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input 
                      label="Peso (kg)" 
                      type="number" 
                      value={profile?.weight || ''} 
                      onChange={(e) => setProfile(prev => prev ? { ...prev, weight: parseFloat(e.target.value) || 0 } : null)}
                    />
                    <Input 
                      label="Altura (cm)" 
                      type="number" 
                      value={profile?.height || ''} 
                      onChange={(e) => setProfile(prev => prev ? { ...prev, height: parseInt(e.target.value) || 0 } : null)}
                    />
                  </div>
                  <Button size="xl" className="mt-4" onClick={() => setIsEditingProfile(false)}>Guardar Cambios</Button>
                </div>
              ) : (
                <>
                  <Card className="overflow-hidden p-0">
                    <div className="bg-accent/10 p-8 flex flex-col items-center gap-4">
                      <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center text-4xl font-bold text-white shadow-xl">
                        {profile?.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="text-center">
                        <h3 className="text-2xl font-bold">{profile?.name}</h3>
                        <p className="text-text-muted text-sm">{profile?.sex === 'M' ? 'Masculino' : profile?.sex === 'F' ? 'Femenino' : 'No especificado'} · {profile?.age} años</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 border-t border-white/5">
                      <div className="p-6 text-center border-r border-white/5">
                        <div className="font-display text-4xl text-accent-light">{profile?.weight}</div>
                        <div className="text-[10px] text-text-muted uppercase font-bold">Peso (kg)</div>
                      </div>
                      <div className="p-6 text-center">
                        <div className="font-display text-4xl text-accent-light">{profile?.height}</div>
                        <div className="text-[10px] text-text-muted uppercase font-bold">Altura (cm)</div>
                      </div>
                    </div>
                  </Card>

                  <div className="space-y-3">
                    <Button 
                      variant="ghost" 
                      size="xl" 
                      onClick={() => {
                        setProfile(null);
                        setScreen('welcome');
                      }}
                    >
                      <RotateCcw size={18} /> Cerrar Sesión
                    </Button>

                    <Button 
                      variant="danger-outline" 
                      size="xl" 
                      onClick={() => {
                        localStorage.clear();
                        window.location.reload();
                      }}
                    >
                      <Trash2 size={18} /> Borrar todos los datos
                    </Button>

                    <div className="pt-8 border-t border-white/5">
                      <a href="/vanilla-v2/index.html" className="block text-center text-[10px] text-accent uppercase tracking-widest hover:underline">
                        Cambiar a Versión Vanilla PWA (v2)
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
