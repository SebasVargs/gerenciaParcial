var methods = [
            {
                category: "Recopilación y Análisis de Datos",
                items: [
                    {
                        id: 1,
                        name: "Análisis de Alternativas",
                        desc: "Evaluar diversas opciones o enfoques",
                        story: {
                            problema: "Una empresa necesitaba elegir entre construir un sistema ERP propio, comprar uno comercial o contratar SaaS en la nube, pero no tenía claro cuál era mejor.",
                            solucion: "El equipo analizó 3 alternativas evaluando: costo total, tiempo de implementación, flexibilidad, riesgo y mantenimiento a 5 años.",
                            resultado: "Descubrieron que SaaS costaba menos inicialmente pero más a largo plazo. Eligieron comprar un ERP comercial que equilibraba costo ($200K) y personalización."
                        },
                        benefits: [
                            "Evita decisiones basadas en intuición",
                            "Considera múltiples factores simultáneamente",
                            "Documenta el razonamiento para decisiones futuras",
                            "Reduce el riesgo de elecciones inadecuadas"
                        ]
                    },
                    {
                        id: 2,
                        name: "Análisis FODA (SWOT)",
                        desc: "Evaluar Fortalezas, Oportunidades, Debilidades y Amenazas",
                        story: {
                            problema: "Una empresa quería lanzar un producto al mercado asiático pero no sabía si estaba preparada ni qué riesgos enfrentaría.",
                            solucion: "Realizaron un FODA: Fortalezas (producto innovador, patente), Oportunidades (mercado creciente), Debilidades (sin presencia local), Amenazas (competencia establecida).",
                            resultado: "Decidieron hacer alianza con distribuidor local para aprovechar oportunidades y mitigar debilidades. Lanzaron con éxito en 8 meses."
                        },
                        benefits: [
                            "Visión holística de la situación",
                            "Identifica factores internos y externos",
                            "Facilita la planificación estratégica",
                            "Involucra múltiples perspectivas del equipo"
                        ]
                    },
                    {
                        id: 3,
                        name: "Análisis del Valor Ganado (EVA)",
                        desc: "Medir desempeño integrando alcance, cronograma y costo",
                        story: {
                            problema: "Un proyecto de construcción llevaba 6 meses y habían gastado $800K de $1M presupuestados, pero nadie sabía si iban bien o mal.",
                            solucion: "Aplicaron EVA calculando: Valor Planificado ($700K), Valor Ganado ($550K), Costo Real ($800K). CPI=0.69, SPI=0.79.",
                            resultado: "¡Alerta roja! Estaban 21% atrasados y gastando 45% más de lo debido. Reasignaron recursos, ajustaron plan y evitaron un desastre de $500K."
                        },
                        benefits: [
                            "Detecta problemas antes que sea tarde",
                            "Integra tres dimensiones: alcance, tiempo y costo",
                            "Permite pronosticar el resultado final",
                            "Proporciona métricas objetivas de desempeño"
                        ]
                    },
                    {
                        id: 4,
                        name: "Mapeo del Flujo de Valor",
                        desc: "Método lean para mejorar flujo y eliminar desperdicios",
                        story: {
                            problema: "Una fábrica tardaba 30 días desde que recibía el pedido hasta entregar el producto, pero el tiempo de trabajo real era solo 3 días.",
                            solucion: "Mapearon todo el flujo: recepción, aprobación, producción, control de calidad, empaque, envío. Identificaron 18 días de esperas innecesarias.",
                            resultado: "Eliminaron aprobaciones duplicadas, reorganizaron la producción y redujeron el tiempo total a 8 días. Capacidad de producción aumentó 275%."
                        },
                        benefits: [
                            "Visualiza el flujo completo del proceso",
                            "Identifica desperdicios y cuellos de botella",
                            "Mejora tiempos de entrega dramáticamente",
                            "Reduce costos operativos significativamente"
                        ]
                    }
                ]
            },
            {
                category: "Estimación",
                items: [
                    {
                        id: 5,
                        name: "Estimación Análoga",
                        desc: "Usar datos históricos de proyectos similares",
                        story: {
                            problema: "Una consultora debía cotizar un proyecto de migración de datos pero era su primer proyecto de este tipo y no sabían cuánto cobrar.",
                            solucion: "Consultaron proyectos similares: hace 2 años migraron una base de datos de tamaño parecido que tomó 4 meses y costó $80K.",
                            resultado: "Ajustaron por inflación y complejidad: estimaron 5 meses y $95K. El proyecto real tomó 5.5 meses y costó $98K. Cliente satisfecho con precisión."
                        },
                        benefits: [
                            "Rápida cuando hay poca información",
                            "Aprovecha experiencia previa",
                            "Útil en fases tempranas del proyecto",
                            "Requiere mínimo esfuerzo de análisis"
                        ]
                    },
                    {
                        id: 6,
                        name: "Estimación Multipunto",
                        desc: "Promedio de escenarios optimista, pesimista y probable",
                        story: {
                            problema: "Un equipo de desarrollo debía estimar una funcionalidad compleja con mucha incertidumbre técnica, pero dar un solo número era arriesgado.",
                            solucion: "Estimaron tres puntos: Optimista (20 días), Más Probable (35 días), Pesimista (65 días). Usando PERT: (20+4*35+65)/6 = 38 días.",
                            resultado: "Presentaron rango de 35-42 días al cliente. El trabajo real tomó 40 días. El enfoque de rango generó confianza y evitó conflictos."
                        },
                        benefits: [
                            "Refleja la incertidumbre real",
                            "Más precisa que estimación de punto único",
                            "Identifica riesgos en la estimación",
                            "Facilita la planificación de contingencias"
                        ]
                    },
                    {
                        id: 7,
                        name: "Delphi de Banda Ancha",
                        desc: "Consenso de expertos mediante rondas iterativas",
                        story: {
                            problema: "Un proyecto de infraestructura tenía opiniones muy divididas: el arquitecto decía 6 meses, el gerente 3 meses, el ingeniero 10 meses.",
                            solucion: "Usaron Wideband Delphi: cada experto estimó anónimamente, compartieron resultados, discutieron diferencias, re-estimaron. Hicieron 3 rondas.",
                            resultado: "Convergieron en 7-8 meses con mejor entendimiento compartido. El proyecto tomó 7.5 meses. El proceso eliminó sesgos de autoridad."
                        },
                        benefits: [
                            "Elimina influencia de jerarquías",
                            "Aprovecha conocimiento de múltiples expertos",
                            "Identifica supuestos ocultos",
                            "Genera compromiso del equipo con la estimación"
                        ]
                    }
                ]
            },
            {
                category: "Reuniones y Eventos",
                items: [
                    {
                        id: 8,
                        name: "Reunión Diaria de Pie (Daily Standup)",
                        desc: "Reunión breve para revisar progreso y obstáculos",
                        story: {
                            problema: "Un equipo de 8 desarrolladores trabajaba en silos, descubrían conflictos de código al final del sprint y perdían días resolviéndolos.",
                            solucion: "Implementaron daily standup de 15 minutos: cada persona dice qué hizo ayer, qué hará hoy, qué obstáculos tiene. De pie para mantenerlo corto.",
                            resultado: "Detectaban conflictos el mismo día, coordinaban mejor. Redujeron retrabajos 60% y mejoraron velocidad del equipo de 25 a 38 puntos por sprint."
                        },
                        benefits: [
                            "Sincroniza al equipo diariamente",
                            "Identifica impedimentos rápidamente",
                            "Mejora la colaboración y transparencia",
                            "Mantiene el enfoque en objetivos diarios"
                        ]
                    },
                    {
                        id: 9,
                        name: "Retrospectiva",
                        desc: "Taller para mejorar proceso y producto continuamente",
                        story: {
                            problema: "Un equipo repetía los mismos errores sprint tras sprint: estimaciones muy optimistas, testing al final, documentación olvidada.",
                            solucion: "Al final de cada sprint hacen retrospectiva de 1 hora: qué salió bien, qué salió mal, qué mejorar. Definen 2-3 acciones concretas.",
                            resultado: "En 6 meses implementaron: definition of done, testing continuo, templates de documentación. Defectos bajaron 70% y satisfacción del equipo subió."
                        },
                        benefits: [
                            "Promueve mejora continua",
                            "Espacio seguro para expresar problemas",
                            "Convierte lecciones en acciones concretas",
                            "Aumenta el ownership del equipo"
                        ]
                    },
                    {
                        id: 10,
                        name: "Comité de Control de Cambios (CCB)",
                        desc: "Grupo que evalúa y aprueba cambios al proyecto",
                        story: {
                            problema: "En un proyecto de software, cada stakeholder pedía cambios directamente a los desarrolladores. Había 40 cambios en progreso, nadie sabía prioridades.",
                            solucion: "Crearon CCB con sponsor, gerente de proyecto, arquitecto y líder de QA. Se reúnen semanalmente, evalúan impacto de cada cambio, aprueban/rechazan formalmente.",
                            resultado: "De 40 cambios propuestos, aprobaron 12 críticos, rechazaron 20 y difirieron 8. Proyecto se entregó a tiempo con alcance controlado."
                        },
                        benefits: [
                            "Controla el scope creep",
                            "Decisiones basadas en impacto real",
                            "Protege objetivos originales del proyecto",
                            "Crea registro formal de cambios"
                        ]
                    }
                ]
            },
            {
                category: "Otros Métodos",
                items: [
                    {
                        id: 11,
                        name: "Esquema de Priorización (MoSCoW)",
                        desc: "Clasificar requisitos por importancia",
                        story: {
                            problema: "Una app tenía lista de 50 funcionalidades solicitadas pero solo 3 meses para el lanzamiento. El equipo no sabía qué desarrollar primero.",
                            solucion: "Usaron MoSCoW con stakeholders: Must have (login, pagos, catálogo: 8 items), Should have (notificaciones: 12), Could have (chat: 15), Won't have (gamificación: 15).",
                            resultado: "Lanzaron MVP con 8 Must have en 3 meses. Tuvieron 10K usuarios primer mes. Luego agregaron Should have basados en feedback real."
                        },
                        benefits: [
                            "Clarifica qué es realmente esencial",
                            "Alinea expectativas de stakeholders",
                            "Permite entregas tempranas de valor",
                            "Facilita trade-offs cuando hay restricciones"
                        ]
                    },
                    {
                        id: 12,
                        name: "Período de Tiempo Preestablecido (Timebox)",
                        desc: "Período fijo para completar trabajo",
                        story: {
                            problema: "Un equipo de diseño pasaba semanas perfeccionando logos y mockups, retrasando el desarrollo. El perfeccionismo paralizaba el proyecto.",
                            solucion: "Implementaron timeboxes: 2 días para concepto inicial, 3 días para mockups, 1 día para revisión. Al terminar el tiempo, se avanza con lo mejor logrado.",
                            resultado: "La restricción de tiempo forzó decisiones más rápidas. Calidad se mantuvo alta pero velocidad aumentó 300%. Proyecto completado 2 meses antes."
                        },
                        benefits: [
                            "Combate el perfeccionismo paralizante",
                            "Fuerza priorización constante",
                            "Crea ritmo predecible de trabajo",
                            "Previene análisis excesivo"
                        ]
                    },
                    {
                        id: 13,
                        name: "Modelado",
                        desc: "Crear representaciones simplificadas de sistemas",
                        story: {
                            problema: "Un proyecto de automatización era muy complejo de explicar. Stakeholders no técnicos no entendían qué se iba a construir exactamente.",
                            solucion: "Crearon prototipos clickeables, diagramas de flujo de procesos y mockups de interfaces. Los stakeholders pudieron 'tocar' y 'ver' el sistema futuro.",
                            resultado: "Detectaron 15 malentendidos en la primera revisión del prototipo. Los corrigieron antes de escribir código, ahorrando 3 meses de retrabajos."
                        },
                        benefits: [
                            "Hace tangible lo abstracto",
                            "Detecta malentendidos tempranamente",
                            "Facilita feedback de stakeholders",
                            "Reduce dramáticamente los retrabajos"
                        ]
                    }
                ]
            }
        ];

        var selectedMethod = null;

        function renderMethods() {
            var methodsList = document.getElementById('methodsList');
            var html = '';
            
            for (var i = 0; i < methods.length; i++) {
                var category = methods[i];
                html += '<div class="category-title">' + category.category + '</div>';
                
                for (var j = 0; j < category.items.length; j++) {
                    var method = category.items[j];
                    html += '<div class="method-item" onclick="selectMethod(' + method.id + ')">';
                    html += '<div class="method-name">' + method.name + '</div>';
                    html += '<div class="method-desc">' + method.desc + '</div>';
                    html += '</div>';
                }
            }
            
            methodsList.innerHTML = html;
        }

        function selectMethod(id) {
            selectedMethod = null;
            for (var i = 0; i < methods.length; i++) {
                for (var j = 0; j < methods[i].items.length; j++) {
                    if (methods[i].items[j].id === id) {
                        selectedMethod = methods[i].items[j];
                        break;
                    }
                }
                if (selectedMethod) break;
            }
            
            var items = document.querySelectorAll('.method-item');
            for (var i = 0; i < items.length; i++) {
                items[i].classList.remove('active');
            }
            
            var clickedItems = document.querySelectorAll('.method-item');
            var index = 0;
            for (var i = 0; i < methods.length; i++) {
                for (var j = 0; j < methods[i].items.length; j++) {
                    if (methods[i].items[j].id === id) {
                        clickedItems[index].classList.add('active');
                        break;
                    }
                    index++;
                }
            }

            renderCase();
        }

        function renderCase() {
            var caseContent = document.getElementById('caseContent');
            
            if (!selectedMethod) {
                caseContent.innerHTML = '<div class="case-empty"><div class="case-empty-icon">👈</div><h3>Selecciona un método</h3><p>Haz clic en cualquier método de la izquierda para ver su caso de uso práctico</p></div>';
                return;
            }

            var html = '<div class="case-details">';
            html += '<h2 class="case-title">' + selectedMethod.name + '</h2>';
            html += '<div class="case-subtitle">' + selectedMethod.desc + '</div>';
            
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

            html += '<div class="benefits"><h3>Beneficios Clave</h3>';
            for (var i = 0; i < selectedMethod.benefits.length; i++) {
                html += '<div class="benefit-item">' + selectedMethod.benefits[i] + '</div>';
            }
            html += '</div></div>';
            
            caseContent.innerHTML = html;
        }

        renderMethods();