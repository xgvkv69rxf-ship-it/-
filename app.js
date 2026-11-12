// Повний реєстр кодексів та основних законів України (завантажуються напряму з API ВРУ без бекенду)
const ACTS_REGISTRY = [
    {
        id: "constitution",
        category: "ОСНОВНИЙ ЗАКОН ДЕРЖАВИ",
        title: "КОНСТИТУЦІЯ УКРАЇНИ",
        nreg: "254к/96-вр",
        meta: "Прийнята на п'ятій сесії Верховної Ради України 28 червня 1996 року (№ 254к/96-ВР)"
    },
    {
        id: "criminal-code",
        category: "КОДЕКСИ УКРАЇНИ",
        title: "КРИМІНАЛЬНИЙ КОДЕКС УКРАЇНИ",
        nreg: "2341-14",
        meta: "Закон України від 5 квітня 2001 року № 2341-III"
    },
    {
        id: "criminal-procedure-code",
        category: "КОДЕКСИ УКРАЇНИ",
        title: "КРИМІНАЛЬНИЙ ПРОЦЕСУАЛЬНИЙ КОДЕКС УКРАЇНИ",
        nreg: "4651-17",
        meta: "Закон України від 13 квітня 2012 року № 4651-VI"
    },
    {
        id: "admin-offences-code",
        category: "КОДЕКСИ УКРАЇНИ",
        title: "КОДЕКС УКРАЇНИ ПРО АДМІНІСТРАТИВНІ ПРАВОПОРУШЕННЯ (КУпАП)",
        nreg: "80731-10",
        meta: "Закон від 7 грудня 1984 року № 8073-X"
    },
    {
        id: "civil-code",
        category: "КОДЕКСИ УКРАЇНИ",
        title: "ЦИВІЛЬНИЙ КОДЕКС УКРАЇНИ",
        nreg: "435-15",
        meta: "Закон України від 16 січня 2003 року № 435-IV"
    },
    {
        id: "civil-procedure-code",
        category: "КОДЕКСИ УКРАЇНИ",
        title: "ЦИВІЛЬНИЙ ПРОЦЕСУАЛЬНИЙ КОДЕКС УКРАЇНИ",
        nreg: "1618-15",
        meta: "Закон України від 18 березня 2004 року № 1618-IV"
    },
    {
        id: "admin-justice-code",
        category: "КОДЕКСИ УКРАЇНИ",
        title: "КОДЕКС АДМІНІСТРАТИВНОГО СУДОЧИНСТВА УКРАЇНИ (КАСУ)",
        nreg: "2747-15",
        meta: "Закон України від 6 липня 2005 року № 2747-IV"
    },
    {
        id: "commercial-code",
        category: "КОДЕКСИ УКРАЇНИ",
        title: "ГОСПОДАРСЬКИЙ КОДЕКС УКРАЇНИ",
        nreg: "436-15",
        meta: "Закон України від 16 січня 2003 року № 436-IV"
    },
    {
        id: "commercial-procedure-code",
        category: "КОДЕКСИ УКРАЇНИ",
        title: "ГОСПОДАРСЬКИЙ ПРОЦЕСУАЛЬНИЙ КОДЕКС УКРАЇНИ",
        nreg: "1798-12",
        meta: "Закон України від 6 листопада 1991 року № 1798-XII"
    },
    {
        id: "labor-code",
        category: "КОДЕКСИ УКРАЇНИ",
        title: "КОДЕКС ЗАКОНІВ ПРО ПРАЦЮ УКРАЇНИ (КЗпП)",
        nreg: "322-08",
        meta: "Закон від 10 грудня 1971 року № 322-VIII"
    },
    {
        id: "family-code",
        category: "КОДЕКСИ УКРАЇНИ",
        title: "СІМЕЙНИЙ КОДЕКС УКРАЇНИ",
        nreg: "2947-14",
        meta: "Закон України від 10 січня 2002 року № 2947-III"
    },
    {
        id: "land-code",
        category: "КОДЕКСИ УКРАЇНИ",
        title: "ЗЕМЕЛЬНИЙ КОДЕКС УКРАЇНИ",
        nreg: "2768-14",
        meta: "Закон України від 25 жовтня 2001 року № 2768-III"
    },
    {
        id: "tax-code",
        category: "КОДЕКСИ УКРАЇНИ",
        title: "ПОДАТКОВИЙ КОДЕКС УКРАЇНИ",
        nreg: "2755-17",
        meta: "Закон України від 2 грудня 2010 року № 2755-VI"
    },
    {
        id: "budget-code",
        category: "КОДЕКСИ УКРАЇНИ",
        title: "БЮДЖЕТНИЙ КОДЕКС УКРАЇНИ",
        nreg: "2456-17",
        meta: "Закон України від 8 липня 2010 року № 2456-VI"
    },
    {
        id: "customs-code",
        category: "КОДЕКСИ УКРАЇНИ",
        title: "МИТНИЙ КОДЕКС УКРАЇНИ",
        nreg: "4495-17",
        meta: "Закон України від 13 березня 2012 року № 4495-VI"
    },
    {
        id: "electoral-code",
        category: "КОДЕКСИ УКРАЇНИ",
        title: "ВИБОРЧИЙ КОДЕКС УКРАЇНИ",
        nreg: "396-20",
        meta: "Закон України від 19 грудня 2019 року № 396-IX"
    },
    {
        id: "criminal-executive-code",
        category: "КОДЕКСИ УКРАЇНИ",
        title: "КРИМІНАЛЬНО-ВИКОНАВЧИЙ КОДЕКС УКРАЇНИ",
        nreg: "1129-15",
        meta: "Закон України від 11 липня 2003 року № 1129-IV"
    },
    {
        id: "law-prosecutor",
        category: "ЗАКОНИ ПРО ДЕРЖАВНІ ТА ПРАВООХОРОННІ ОРГАНИ",
        title: "ЗАКОН УКРАЇНИ «ПРО ПРОКУРАТУРУ»",
        nreg: "1697-18",
        meta: "Закон України від 14 жовтня 2014 року № 1697-VII"
    },
    {
        id: "law-dbr",
        category: "ЗАКОНИ ПРО ДЕРЖАВНІ ТА ПРАВООХОРОННІ ОРГАНИ",
        title: "ЗАКОН УКРАЇНИ «ПРО ДЕРЖАВНЕ БЮРО РОЗСЛІДУВАНЬ»",
        nreg: "794-19",
        meta: "Закон України від 12 листопада 2015 року № 794-VIII"
    },
    {
        id: "law-sbu",
        category: "ЗАКОНИ ПРО ДЕРЖАВНІ ТА ПРАВООХОРОННІ ОРГАНИ",
        title: "ЗАКОН УКРАЇНИ «ПРО СЛУЖБУ БЕЗПЕКИ УКРАЇНИ»",
        nreg: "2229-12",
        meta: "Закон України від 25 березня 1992 року № 2229-XII"
    },
    {
        id: "law-police",
        category: "ЗАКОНИ ПРО ДЕРЖАВНІ ТА ПРАВООХОРОННІ ОРГАНИ",
        title: "ЗАКОН УКРАЇНИ «ПРО НАЦІОНАЛЬНУ ПОЛІЦІЮ»",
        nreg: "580-19",
        meta: "Закон України від 2 липня 2015 року № 580-VIII"
    },
    {
        id: "law-nabu",
        category: "ЗАКОНИ ПРО ДЕРЖАВНІ ТА ПРАВООХОРОННІ ОРГАНИ",
        title: "ЗАКОН УКРАЇНИ «ПРО НАЦІОНАЛЬНЕ АНТИКОРУПЦІЙНЕ БЮРО УКРАЇНИ»",
        nreg: "1698-18",
        meta: "Закон України від 14 жовтня 2014 року № 1698-VII"
    },
    {
        id: "law-judiciary",
        category: "ЗАКОНИ ПРО ДЕРЖАВНІ ТА ПРАВООХОРОННІ ОРГАНИ",
        title: "ЗАКОН УКРАЇНИ «ПРО СУДОУСТРІЙ І СТАТУС СУДДІВ»",
        nreg: "1402-19",
        meta: "Закон України від 2 червня 2016 року № 1402-VIII"
    },
    {
        id: "law-corruption",
        category: "ЗАКОНИ ПРО ДЕРЖАВНІ ТА ПРАВООХОРОННІ ОРГАНИ",
        title: "ЗАКОН УКРАЇНИ «ПРО ЗАПОБІГАННЯ КОРУПЦІЇ» (НАЗК)",
        nreg: "1700-18",
        meta: "Закон України від 14 жовтня 2014 року № 1700-VII"
    },
    {
        id: "law-beb",
        category: "ЗАКОНИ ПРО ДЕРЖАВНІ ТА ПРАВООХОРОННІ ОРГАНИ",
        title: "ЗАКОН УКРАЇНИ «ПРО БЮРО ЕКОНОМІЧНОЇ БЕЗПЕКИ УКРАЇНИ»",
        nreg: "1150-20",
        meta: "Закон України від 28 січня 2021 року № 1150-IX"
    },
    {
        id: "law-ngu",
        category: "ЗАКОНИ ПРО ДЕРЖАВНІ ТА ПРАВООХОРОННІ ОРГАНИ",
        title: "ЗАКОН УКРАЇНИ «ПРО НАЦІОНАЛЬНУ ГВАРДІЮ УКРАЇНИ»",
        nreg: "876-18",
        meta: "Закон України від 13 березня 2014 року № 876-VII"
    },
    {
        id: "law-dpsu",
        category: "ЗАКОНИ ПРО ДЕРЖАВНІ ТА ПРАВООХОРОННІ ОРГАНИ",
        title: "ЗАКОН УКРАЇНИ «ПРО ДЕРЖАВНУ ПРИКОРДОННУ СЛУЖБУ УКРАЇНИ»",
        nreg: "661-15",
        meta: "Закон України від 3 квітня 2003 року № 661-IV"
    },
    {
        id: "law-cabinet",
        category: "ЗАКОНИ ПРО ОРГАНИ ВИКОНАВЧОЇ ТА ЗАКОНОДАВЧОЇ ВЛАДИ",
        title: "ЗАКОН УКРАЇНИ «ПРО КАБІНЕТ МІНІСТРІВ УКРАЇНИ»",
        nreg: "794-18",
        meta: "Закон України від 27 лютого 2014 року № 794-VII"
    },
    {
        id: "law-vru-reglament",
        category: "ЗАКОНИ ПРО ОРГАНИ ВИКОНАВЧОЇ ТА ЗАКОНОДАВЧОЇ ВЛАДИ",
        title: "ЗАКОН УКРАЇНИ «ПРО РЕГЛАМЕНТ ВЕРХОВНОЇ РАДИ УКРАЇНИ»",
        nreg: "1861-17",
        meta: "Закон України від 10 лютого 2010 року № 1861-VI"
    },
    {
        id: "law-civil-service",
        category: "ЗАКОНИ ПРО ОРГАНИ ВИКОНАВЧОЇ ТА ЗАКОНОДАВЧОЇ ВЛАДИ",
        title: "ЗАКОН УКРАЇНИ «ПРО ДЕРЖАВНУ СЛУЖБУ»",
        nreg: "889-19",
        meta: "Закон України від 10 грудня 2015 року № 889-VIII"
    },
    {
        id: "law-local-gov",
        category: "ЗАКОНИ ПРО ОРГАНИ ВИКОНАВЧОЇ ТА ЗАКОНОДАВЧОЇ ВЛАДИ",
        title: "ЗАКОН УКРАЇНИ «ПРО МІСЦЕВЕ САМОВРЯДУВАННЯ В УКРАЇНІ»",
        nreg: "280/97-вр",
        meta: "Закон України від 21 травня 1997 року № 280/97-ВР"
    }
];

// Кеш розпарсених актів у пам'яті браузера
const PARSED_CACHE = {};

document.addEventListener("DOMContentLoaded", () => {
    const treeNav = document.getElementById("treeNav");
    const articlesContainer = document.getElementById("articlesContainer");
    const breadcrumbs = document.getElementById("breadcrumbs");
    const currentActCategory = document.getElementById("currentActCategory");
    const currentActTitle = document.getElementById("currentActTitle");
    const currentActMeta = document.getElementById("currentActMeta");
    const searchInput = document.getElementById("searchInput");
    const clearSearchBtn = document.getElementById("clearSearchBtn");
    const statsCounter = document.getElementById("statsCounter");
    const apiStatusIndicator = document.getElementById("apiStatusIndicator");

    let activeActId = ACTS_REGISTRY[0].id;
    let activeSectionIndex = 0;

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function highlightText(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${escapeRegExp(query)})`, "gi");
        return text.replace(regex, '<span class="highlight">$1</span>');
    }

    /**
     * Завантажує сирий текст акта напряму з відкритих даних ВРУ з автоматичним обходом CORS
     */
    async function fetchTextFromRadaDirect(nreg) {
        const encodedNreg = encodeURIComponent(nreg);
        const targetUrl = `https://data.rada.gov.ua/laws/show/${encodedNreg}.txt`;

        const endpoints = [
            targetUrl,
            `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`,
            `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`
        ];

        for (const url of endpoints) {
            try {
                const response = await fetch(url);
                if (!response.ok) continue;

                const buffer = await response.arrayBuffer();
                let text = new TextDecoder("utf-8").decode(buffer);

                // Перевірка, чи не повернувся текст у кодуванні Windows-1251
                if (text.includes("�") || !/[А-Яа-яІіЇїЄє]/.test(text.slice(0, 500))) {
                    text = new TextDecoder("windows-1251").decode(buffer);
                }

                if (text && text.length > 300 && /Стаття\s+\d+/i.test(text)) {
                    return text;
                }
            } catch (e) {
                // Переходимо до наступного проксі-каналу
            }
        }
        throw new Error("Не вдалося отримати текст нормативно-правового акта із сервера Верховної Ради України.");
    }

    /**
     * Розбирає монолітний документ ВРУ на ієрархію: Розділ -> Стаття -> Частини
     */
    function parseLegalDocument(rawText) {
        const lines = rawText.split(/?
/).map(l => l.trim()).filter(l => l.length > 0);

        const sectionRe = /^(РОЗДІЛ|Розділ|КНИГА|Книга|ЗАГАЛЬНА ЧАСТИНА|ОСОБЛИВА ЧАСТИНА)\s+([IVXLCDM0-9\-]+)?\.?\s*(.*)$/;
        const articleRe = /^Стаття\s+(\d+(?:-\d+)?)\.\s*(.*)$/;

        const sections = [];
        let currentSection = {
            title: "ЗАГАЛЬНІ ПОЛОЖЕННЯ",
            articles: []
        };
        let currentArticle = null;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.startsWith("{") && line.endsWith("}")) continue;
            if (line.startsWith("___") || line.startsWith("===")) continue;

            const secMatch = line.match(sectionRe);
            if (secMatch && line.length < 180) {
                if (currentArticle) {
                    currentSection.articles.push(currentArticle);
                    currentArticle = null;
                }
                if (currentSection.articles.length > 0) {
                    sections.push(currentSection);
                }

                const secPrefix = secMatch[1].toUpperCase();
                const secNum = secMatch[2] || "";
                let secRest = (secMatch[3] || "").trim();

                if (!secRest && i + 1 < lines.length && lines[i + 1] === lines[i + 1].toUpperCase() && !articleRe.test(lines[i + 1])) {
                    i++;
                    secRest = lines[i].trim();
                }

                let fullSecTitle = `${secPrefix} ${secNum}`.trim();
                if (secRest) fullSecTitle += `. ${secRest}`;

                currentSection = {
                    title: fullSecTitle,
                    articles: []
                };
                continue;
            }

            const artMatch = line.match(articleRe);
            if (artMatch) {
                if (currentArticle) {
                    currentSection.articles.push(currentArticle);
                }

                const artNum = `Стаття ${artMatch[1]}`;
                let artTitle = (artMatch[2] || "").trim();

                if (!artTitle && i + 1 < lines.length) {
                    const nextLine = lines[i + 1];
                    if (!/^\d+\./.test(nextLine) && !sectionRe.test(nextLine)) {
                        i++;
                        artTitle = nextLine.trim();
                    }
                }

                currentArticle = {
                    number: artNum,
                    title: artTitle || "Без назви",
                    paragraphs: []
                };
                continue;
            }

            if (currentArticle !== null) {
                currentArticle.paragraphs.push(line);
            }
        }

        if (currentArticle) {
            currentSection.articles.push(currentArticle);
        }
        if (currentSection.articles.length > 0) {
            sections.push(currentSection);
        }

        return sections;
    }

    function renderBreadcrumbs(items) {
        breadcrumbs.innerHTML = "";
        items.forEach((item, index) => {
            const span = document.createElement("span");
            span.textContent = item;
            if (index === items.length - 1) {
                span.className = "crumb-current";
            }
            breadcrumbs.appendChild(span);

            if (index < items.length - 1) {
                const sep = document.createElement("span");
                sep.className = "crumb-separator";
                sep.textContent = "--";
                breadcrumbs.appendChild(sep);
            }
        });
    }

    function createArticleCard(act, section, article, query = "") {
        const card = document.createElement("article");
        card.className = "article-card";

        const header = document.createElement("div");
        header.className = "article-card-header";

        const titleEl = document.createElement("h3");
        titleEl.className = "article-number";
        titleEl.innerHTML = highlightText(`${article.number}. ${article.title}`, query);

        const contextLabel = `${act.title} -- ${section.title}`;
        const contextEl = document.createElement("span");
        contextEl.className = "article-context";
        contextEl.textContent = contextLabel;

        header.appendChild(titleEl);
        header.appendChild(contextEl);

        const body = document.createElement("div");
        body.className = "article-body";

        article.paragraphs.forEach(pText => {
            const p = document.createElement("p");
            p.className = "article-paragraph";
            p.innerHTML = highlightText(pText, query);
            body.appendChild(p);
        });

        const actions = document.createElement("div");
        actions.className = "article-actions";

        const copyCitationBtn = document.createElement("button");
        copyCitationBtn.type = "button";
        copyCitationBtn.className = "copy-link-btn";
        copyCitationBtn.textContent = "Копіювати посилання на норму";
        copyCitationBtn.addEventListener("click", () => {
            const citation = `${contextLabel} -- ${article.number} (${article.title})`;
            navigator.clipboard.writeText(citation).then(() => {
                copyCitationBtn.textContent = "Скопійовано до буфера";
                setTimeout(() => {
                    copyCitationBtn.textContent = "Копіювати посилання на норму";
                }, 2000);
            });
        });

        const copyUrlBtn = document.createElement("button");
        copyUrlBtn.type = "button";
        copyUrlBtn.className = "copy-link-btn";
        copyUrlBtn.textContent = "Пряме посилання (URL)";
        copyUrlBtn.addEventListener("click", () => {
            const artNumClean = article.number.replace("Стаття ", "");
            const deepUrl = `${window.location.origin}${window.location.pathname}?act=${encodeURIComponent(act.id)}&art=${encodeURIComponent(artNumClean)}`;
            navigator.clipboard.writeText(deepUrl).then(() => {
                copyUrlBtn.textContent = "URL скопійовано";
                setTimeout(() => {
                    copyUrlBtn.textContent = "Пряме посилання (URL)";
                }, 2000);
            });
        });

        actions.appendChild(copyCitationBtn);
        actions.appendChild(copyUrlBtn);

        card.appendChild(header);
        card.appendChild(body);
        card.appendChild(actions);

        return card;
    }

    function renderNavigation() {
        treeNav.innerHTML = "";
        let lastCategory = null;

        ACTS_REGISTRY.forEach(act => {
            if (act.category && act.category !== lastCategory) {
                const catHeader = document.createElement("div");
                catHeader.className = "tree-category-header";
                catHeader.textContent = act.category;
                treeNav.appendChild(catHeader);
                lastCategory = act.category;
            }

            const actWrapper = document.createElement("div");
            actWrapper.className = "tree-act";

            const isActActive = act.id === activeActId;
            const actBtn = document.createElement("button");
            actBtn.type = "button";
            actBtn.className = `tree-act-btn ${isActActive ? "active" : ""}`;
            actBtn.innerHTML = `<span>${act.title}</span><span>${isActActive ? "−" : "+"}</span>`;

            actBtn.addEventListener("click", () => {
                searchInput.value = "";
                clearSearchBtn.hidden = true;
                window.history.replaceState({}, "", window.location.pathname);
                selectAct(act.id, 0);
            });

            actWrapper.appendChild(actBtn);

            if (isActActive && PARSED_CACHE[act.id]) {
                const sectionsList = document.createElement("div");
                sectionsList.className = "tree-sections open";

                PARSED_CACHE[act.id].forEach((section, idx) => {
                    const secBtn = document.createElement("button");
                    secBtn.type = "button";
                    secBtn.className = `tree-section-btn ${idx === activeSectionIndex ? "active" : ""}`;
                    secBtn.innerHTML = `<span>${section.title}</span><span class="sec-count-badge">${section.articles.length}</span>`;

                    secBtn.addEventListener("click", () => {
                        searchInput.value = "";
                        clearSearchBtn.hidden = true;
                        window.history.replaceState({}, "", window.location.pathname);
                        activeSectionIndex = idx;
                        renderNavigation();
                        renderSectionArticles(act, section);
                    });

                    sectionsList.appendChild(secBtn);
                });

                actWrapper.appendChild(sectionsList);
            }

            treeNav.appendChild(actWrapper);
        });
    }

    function renderSectionArticles(act, section) {
        renderBreadcrumbs([act.title, section.title]);
        currentActCategory.textContent = act.category;
        currentActTitle.textContent = `${act.title} — ${section.title}`;
        currentActMeta.textContent = act.meta;
        articlesContainer.innerHTML = "";

        section.articles.forEach(article => {
            articlesContainer.appendChild(createArticleCard(act, section, article));
        });

        const totalArticles = PARSED_CACHE[act.id].reduce((sum, s) => sum + s.articles.length, 0);
        statsCounter.textContent = `Розділів у акті: ${PARSED_CACHE[act.id].length} | Статей у акті: ${totalArticles}`;
    }

    async function selectAct(actId, sectionIdx = 0, targetArtNum = null) {
        activeActId = actId;
        activeSectionIndex = sectionIdx;
        const act = ACTS_REGISTRY.find(a => a.id === actId) || ACTS_REGISTRY[0];

        renderNavigation();

        if (!PARSED_CACHE[act.id]) {
            apiStatusIndicator.textContent = "ЗАВАНТАЖЕННЯ З СЕРВЕРА ВРУ...";
            renderBreadcrumbs([act.title, "СИНХРОНІЗАЦІЯ ТЕКСТУ"]);
            currentActCategory.textContent = act.category;
            currentActTitle.textContent = act.title;
            currentActMeta.textContent = act.meta;
            articlesContainer.innerHTML = '<div class="empty-state">Завантаження повного тексту акта з API Верховної Ради України та розбиття на розділи й статті...</div>';

            try {
                const rawText = await fetchTextFromRadaDirect(act.nreg);
                const sections = parseLegalDocument(rawText);
                PARSED_CACHE[act.id] = sections;
                apiStatusIndicator.textContent = "ДАНІ ВРУ СИНХРОНІЗОВАНО";
            } catch (error) {
                apiStatusIndicator.textContent = "ПОМИЛКА ДОСТУПУ ДО ВРУ";
                articlesContainer.innerHTML = `<div class="empty-state">${error.message}</div>`;
                return;
            }
        }

        const sections = PARSED_CACHE[act.id];
        if (!sections || sections.length === 0) {
            articlesContainer.innerHTML = '<div class="empty-state">Не вдалося структурувати статті даного документа.</div>';
            return;
        }

        if (targetArtNum) {
            for (let sIdx = 0; sIdx < sections.length; sIdx++) {
                const foundArt = sections[sIdx].articles.find(a => a.number.toLowerCase() === `стаття ${targetArtNum.toLowerCase()}`);
                if (foundArt) {
                    activeSectionIndex = sIdx;
                    renderNavigation();
                    renderBreadcrumbs([act.title, sections[sIdx].title, foundArt.number]);
                    currentActCategory.textContent = "ПРЯМИЙ ПЕРЕХІД ДО СТАТТІ";
                    currentActTitle.textContent = `${act.title} — ${foundArt.number}`;
                    currentActMeta.textContent = sections[sIdx].title;
                    articlesContainer.innerHTML = "";
                    articlesContainer.appendChild(createArticleCard(act, sections[sIdx], foundArt));
                    return;
                }
            }
        }

        const safeIdx = Math.min(sectionIdx, sections.length - 1);
        activeSectionIndex = safeIdx;
        renderNavigation();
        renderSectionArticles(act, sections[safeIdx]);
    }

    function performLocalActSearch(rawQuery) {
        const query = rawQuery.trim().toLowerCase();
        const act = ACTS_REGISTRY.find(a => a.id === activeActId) || ACTS_REGISTRY[0];
        const sections = PARSED_CACHE[act.id];

        if (!sections) return;

        if (!query) {
            clearSearchBtn.hidden = true;
            renderSectionArticles(act, sections[activeSectionIndex]);
            return;
        }

        clearSearchBtn.hidden = false;
        renderBreadcrumbs([act.title, `ПОШУК: "${rawQuery.trim()}"`]);
        currentActCategory.textContent = "РЕЗУЛЬТАТИ ПОШУКУ ПО АКТУ";
        currentActTitle.textContent = `${act.title} — знайдені норми`;
        currentActMeta.textContent = `Пошуковий запит: «${rawQuery.trim()}»`;
        articlesContainer.innerHTML = "";

        let foundCount = 0;
        sections.forEach(section => {
            section.articles.forEach(article => {
                const inNumber = article.number.toLowerCase().includes(query);
                const inTitle = article.title.toLowerCase().includes(query);
                const inParagraphs = article.paragraphs.some(p => p.toLowerCase().includes(query));

                if (inNumber || inTitle || inParagraphs) {
                    foundCount++;
                    articlesContainer.appendChild(createArticleCard(act, section, article, rawQuery.trim()));
                }
            });
        });

        statsCounter.textContent = `Знайдено статей у документі: ${foundCount}`;

        if (foundCount === 0) {
            articlesContainer.innerHTML = '<div class="empty-state">У цьому нормативно-правовому акті за вашим запитом нічого не знайдено.</div>';
        }
    }

    searchInput.addEventListener("input", (e) => {
        performLocalActSearch(e.target.value);
    });

    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        performLocalActSearch("");
        searchInput.focus();
    });

    // Перевірка параметрів URL для прямих посилань (?act=...&art=...)
    const params = new URLSearchParams(window.location.search);
    const paramAct = params.get("act");
    const paramArt = params.get("art");

    if (paramAct && ACTS_REGISTRY.some(a => a.id === paramAct)) {
        selectAct(paramAct, 0, paramArt);
    } else {
        selectAct(ACTS_REGISTRY[0].id, 0);
    }
});
