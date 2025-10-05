var methods = [
            {
                id: 1,
                name: "Estimación",
                description: "Aproximación de costos, recursos y duración",
                story: {
                    problema: "Una empresa de software necesitaba cotizar un proyecto de app móvil para un cliente, pero no tenía certeza de cuánto tiempo tomaría ni cuánto costaría.",
                    solucion: "El equipo decidió usar estimación de tres puntos: escenario optimista (3 meses, $50K), más probable (5 meses, $80K), y pesimista (8 meses, $120K).",
                    resultado: "Usando la fórmula PERT calcularon: 5.2 meses y $83K. Presentaron al cliente un rango realista y el proyecto se completó en 5.5 meses con $85K, muy cerca de lo estimado."
                },
                characteristics: [
                    "Reduce incertidumbre en planificación",
                    "Permite tomar decisiones informadas",
                    "Facilita la negociación con clientes",
                    "Ayuda a identificar riesgos tempranos"
                ]
            },
            {
                id: 2,
                name: "Recopilación de Datos",
                description: "Obtención sistemática de información relevante",
                story: {
                    problema: "Una universidad quería crear una plataforma de cursos en línea, pero no sabía qué funcionalidades eran realmente importantes para profesores y estudiantes.",
                    solucion: "Realizaron 20 entrevistas con profesores, 3 grupos focales con estudiantes y enviaron una encuesta a 300 alumnos preguntando qué necesitaban.",
                    resultado: "Descubrieron que lo más importante no era tener videos fancy, sino foros de discusión y entregas fáciles. Desarrollaron esas funciones primero y lograron 85% de adopción."
                },
                characteristics: [
                    "Evita suposiciones incorrectas",
                    "Involucra a stakeholders desde el inicio",
                    "Identifica necesidades reales vs. deseadas",
                    "Reduce retrabajos costosos"
                ]
            },
            {
                id: 3,
                name: "Priorización",
                description: "Ordenar actividades por importancia y valor",
                story: {
                    problema: "Un hospital tenía 30 proyectos de mejora tecnológica solicitados, pero solo presupuesto para hacer 10 ese año.",
                    solucion: "Usaron el método MoSCoW clasificando: Must have (seguridad crítica: 6 proyectos), Should have (eficiencia: 12), Could have (comodidad: 8), Won't have (diferible: 4).",
                    resultado: "Se enfocaron en los 6 Must have y 4 Should have más impactantes. En 6 meses redujeron errores de medicación 40% y aumentaron satisfacción del personal 30%."
                },
                characteristics: [
                    "Maximiza el valor con recursos limitados",
                    "Alinea esfuerzos con objetivos estratégicos",
                    "Facilita la toma de decisiones difíciles",
                    "Comunica claramente qué es importante"
                ]
            },
            {
                id: 4,
                name: "Desarrollo Iterativo",
                description: "Ciclos cortos de desarrollo y retroalimentación",
                story: {
                    problema: "Una startup desarrolló durante 8 meses una app de delivery 'perfecta', pero al lanzarla nadie la usó porque la interfaz era muy complicada.",
                    solucion: "En el siguiente proyecto usaron sprints de 2 semanas. Después de 2 sprints lanzaron un MVP básico con solo 3 funciones a 20 usuarios beta.",
                    resultado: "Los usuarios dieron feedback inmediato: querían tracking en tiempo real, no 15 opciones de filtros. Pivotearon rápido y en 3 meses tenían 1000 usuarios activos."
                },
                characteristics: [
                    "Reduce riesgo de fracaso total",
                    "Permite adaptarse a cambios rápidamente",
                    "Genera valor temprano y continuo",
                    "Mejora la satisfacción del cliente"
                ]
            },
            {
                id: 5,
                name: "Descomposición",
                description: "Dividir el trabajo en partes manejables",
                story: {
                    problema: "Una constructora debía 'construir un edificio de oficinas' pero el equipo no sabía por dónde empezar. Era demasiado grande y complejo.",
                    solucion: "Crearon un WBS (Work Breakdown Structure) dividiéndolo en: Cimientos, Estructura, Instalaciones, Acabados. Cada uno se subdividió hasta tener tareas de máximo 2 semanas.",
                    resultado: "Terminaron con 250 paquetes de trabajo asignables. Cada supervisor sabía exactamente qué hacer, cuándo y con qué recursos. El proyecto se completó 2 meses antes."
                },
                characteristics: [
                    "Hace lo complejo manejable",
                    "Facilita la asignación de responsabilidades",
                    "Permite estimar con mayor precisión",
                    "Mejora el seguimiento y control"
                ]
            },
            {
                id: 6,
                name: "Modelado",
                description: "Representación visual de procesos y sistemas",
                story: {
                    problema: "Un call center tenía 45 minutos promedio de atención por cliente y muchas quejas. Nadie entendía realmente el proceso completo.",
                    solucion: "Dibujaron el flujo actual (AS-IS) con todos los pasos. Había 15 transferencias, 8 sistemas diferentes y 3 formularios duplicados.",
                    resultado: "Diseñaron el proceso futuro (TO-BE) eliminando pasos innecesarios. Implementaron el nuevo flujo y redujeron el tiempo a 18 minutos promedio."
                },
                characteristics: [
                    "Hace visible lo invisible",
                    "Identifica ineficiencias fácilmente",
                    "Facilita la comunicación del equipo",
                    "Permite simular mejoras antes de implementar"
                ]
            },
            {
                id: 7,
                name: "Listas de Verificación",
                description: "Herramientas para asegurar completitud",
                story: {
                    problema: "Una empresa farmacéutica había sido rechazada 3 veces en auditorías FDA por 'pequeños olvidos' en documentación. Cada rechazo costaba $50K y 2 meses.",
                    solucion: "Crearon 15 checklists detallados: uno para cada etapa del proceso, desde recepción de materias primas hasta liberación del producto final.",
                    resultado: "En la siguiente auditoría no tuvieron ni una observación. Las listas prevenían errores antes de que ocurrieran. Ahora las usan en todos los proyectos."
                },
                characteristics: [
                    "Previene errores por olvido",
                    "Estandariza procesos críticos",
                    "Facilita el cumplimiento normativo",
                    "Transfiere conocimiento fácilmente"
                ]
            }
        ];

        var selectedMethod = null;

        function renderMethods() {
            var methodsList = document.getElementById('methodsList');
            var html = '';
            
            for (var i = 0; i < methods.length; i++) {
                var method = methods[i];
                html += '<div class="method-item" onclick="selectMethod(' + method.id + ')">';
                html += '<div class="method-number">' + method.id + '</div>';
                html += '<div class="method-name">' + method.name + '</div>';
                html += '<div class="method-desc">' + method.description + '</div>';
                html += '</div>';
            }
            
            methodsList.innerHTML = html;
        }

        function selectMethod(id) {
            for (var i = 0; i < methods.length; i++) {
                if (methods[i].id === id) {
                    selectedMethod = methods[i];
                    break;
                }
            }
            
            var items = document.querySelectorAll('.method-item');
            for (var i = 0; i < items.length; i++) {
                if (i === id - 1) {
                    items[i].classList.add('active');
                } else {
                    items[i].classList.remove('active');
                }
            }

            renderCase();
        }

        function renderCase() {
            var caseContent = document.getElementById('caseContent');
            
            if (!selectedMethod) {
                caseContent.innerHTML = '<div class="case-empty"><div class="case-empty-icon">👈</div><h3>Selecciona un método</h3><p>Haz clic en cualquier método de la izquierda para ver su caso de uso</p></div>';
                return;
            }

            var html = '<div class="case-details">';
            html += '<h2 class="case-title">' + selectedMethod.name + '</h2>';
            
            html += '<div class="story-section">';
            html += '<div class="story-label">❌ El Problema</div>';
            html += '<div class="story-text">' + selectedMethod.story.problema + '</div>';
            html += '</div>';

            html += '<div class="story-section">';
            html += '<div class="story-label">💡 La Solución</div>';
            html += '<div class="story-text">' + selectedMethod.story.solucion + '</div>';
            html += '</div>';

            html += '<div class="story-section">';
            html += '<div class="story-label">✅ El Resultado</div>';
            html += '<div class="story-text">' + selectedMethod.story.resultado + '</div>';
            html += '</div>';

            html += '<div class="characteristics"><h3>Beneficios Clave</h3>';
            for (var i = 0; i < selectedMethod.characteristics.length; i++) {
                html += '<div class="char-item">' + selectedMethod.characteristics[i] + '</div>';
            }
            html += '</div></div>';
            
            caseContent.innerHTML = html;
        }

        renderMethods();