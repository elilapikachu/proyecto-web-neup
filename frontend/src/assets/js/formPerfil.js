document.addEventListener('DOMContentLoaded', () => {

    const DB_KEY = 'neup_perfil';

    function loadProfile() {
        try { return JSON.parse(localStorage.getItem(DB_KEY)) || null; }
        catch { return null; }
    }

    function saveProfile(data) {
        localStorage.setItem(DB_KEY, JSON.stringify(data));
    }

    const profile = loadProfile();
    const profileFilled = profile && profile.saved;

    if (profileFilled) {
        fillFormFromProfile(profile);
        updateStats(profile);
    }

    updateCompletionUI(profileFilled);
    updateBtnLabel(profileFilled);

    let formOpen = false;

    document.getElementById('btnToggleForm').addEventListener('click', () => {
        formOpen = !formOpen;
        const section = document.getElementById('formSection');
        section.classList.toggle('visible', formOpen);
        if (formOpen) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    window.scrollToForm = function () {
        const section = document.getElementById('formSection');
        if (!formOpen) {
            formOpen = true;
            section.classList.add('visible');
        }
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    window.switchTab = function (id, btn) {
        document.querySelectorAll('.tab-pane-neup').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.neup-tab').forEach(b => b.classList.remove('active'));
        document.getElementById(id).classList.add('active');
        if (btn) {
            btn.classList.add('active');
        } else {
            const tabs = document.querySelectorAll('.neup-tab');
            if (id === 'sec1') tabs[0].classList.add('active');
            if (id === 'sec2') tabs[1].classList.add('active');
        }
    };

    //Esto se cambiara apenas se implemente la base de datos, por ahora se guarda en el localStorage del navegador
    window.guardarPerfil = function () {
        const data = {
            saved: true,
            edad: document.getElementById('inputEdad').value,
            estatura: document.getElementById('inputEstatura').value,
            peso: document.getElementById('inputPeso').value,
            objetivo: document.getElementById('inputObjetivo').value,
            frecuencia: document.getElementById('inputFrecuencia').value,
            tipoActividad: document.getElementById('inputTipoActividad').value,
            dieta: document.getElementById('inputDieta').value,
            alergias: document.getElementById('inputAlergias').value,
            comidas: document.getElementById('inputComidas').value,
            comidaRapida: document.getElementById('inputComidarapida').value,
        };
        saveProfile(data);
        updateStats(data);
        updateCompletionUI(true);
        updateBtnLabel(true);
        showToast('✅ Perfil guardado correctamente');
    };

    function calcCompletion(p) {
        if (!p) return 0;
        const fields = ['edad', 'estatura', 'peso', 'objetivo', 'frecuencia',
            'tipoActividad', 'dieta', 'alergias', 'comidas', 'comidaRapida'];
        return Math.round(fields.filter(f => p[f] && p[f] !== '').length / fields.length * 100);
    }

    function updateCompletionUI(filled) {
        const pct = filled ? calcCompletion(loadProfile()) : 0;
        document.getElementById('completionBar').style.width = pct + '%';
        document.getElementById('completionPct').textContent = pct + '% completado';
    }

    function updateBtnLabel(filled) {
        document.getElementById('btnToggleForm').textContent =
            filled ? '✎ Editar perfil' : '✦ Completar perfil';
        document.getElementById('formTitle').textContent =
            filled ? 'Editar perfil' : 'Completa tu perfil';
    }

    function fillFormFromProfile(p) {
        if (!p) return;
        const sv = (id, v) => { const el = document.getElementById(id); if (el && v) el.value = v; };
        sv('inputEdad', p.edad); sv('inputEstatura', p.estatura);
        sv('inputPeso', p.peso); sv('inputObjetivo', p.objetivo);
        sv('inputFrecuencia', p.frecuencia); sv('inputTipoActividad', p.tipoActividad);
        sv('inputDieta', p.dieta); sv('inputAlergias', p.alergias);
        sv('inputComidas', p.comidas); sv('inputComidarapida', p.comidaRapida);
    }

    function updateStats(p) {
        document.getElementById('statPeso').textContent = p.peso || '—';
        document.getElementById('statEstatura').textContent = p.estatura || '—';
        const obj = p.objetivo || '—';
        document.getElementById('statObjetivo').textContent = obj.length > 7 ? obj.slice(0, 6) + '…' : obj;
        document.getElementById('statActividad').textContent =
            p.frecuencia ? p.frecuencia.split('–')[0] : '—';
    }

    function showToast(msg) {
        const t = document.getElementById('toastNeup');
        document.getElementById('toastMsg').textContent = msg;
        t.classList.add('show');
        setTimeout(() => t.classList.remove('show'), 3200);
    }

    const logoutBtn = document.getElementById('logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            showToast('👋 Sesión cerrada');
            setTimeout(() => window.location.href = '/', 1500);
        });
    }

});