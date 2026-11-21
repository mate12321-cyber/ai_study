(function () {
  const DATA = window.AI_STUDY_DATA;
  let currentDomain = 'electrical';
  let claudeView = 'cli';
  let geminiTimer = null;

  // Elements
  const domainBtns = document.querySelectorAll('.domain-btn');
  const fontSizeToggle = document.getElementById('fontSizeToggle');
  const toastEl = document.getElementById('toast');

  // Gemini elements
  const geminiDomainNote = document.getElementById('geminiDomainNote');
  const geminiScrollArea = document.getElementById('geminiScrollArea');
  const geminiGreeting = document.getElementById('geminiGreeting');
  const geminiPromptBubble = document.getElementById('geminiPromptBubble');
  const geminiPromptText = document.getElementById('geminiPromptText');
  const geminiInputBox = document.getElementById('geminiInputBox');
  const btnGemFillExample = document.getElementById('btnGemFillExample');
  const btnGemPlus = document.getElementById('btnGemPlus');
  const gemPlusMenu = document.getElementById('gemPlusMenu');
  const btnSelectDeepResearch = document.getElementById('btnSelectDeepResearch');
  const btnGeminiStart = document.getElementById('btnGeminiStart');
  const btnGeminiRun = document.getElementById('btnGeminiRun');
  const btnGeminiEditHint = document.getElementById('btnGeminiEditHint');
  const btnGeminiReset = document.getElementById('btnGeminiReset');
  const btnGeminiResetTop = document.getElementById('btnGeminiResetTop');
  const btnExportDocs = document.getElementById('btnExportDocs');
  const geminiStageThinking = document.getElementById('geminiStageThinking');
  const geminiStagePlan = document.getElementById('geminiStagePlan');
  const geminiPlanTitle = document.getElementById('geminiPlanTitle');
  const geminiSplitView = document.getElementById('geminiSplitView');
  const geminiMiniTitle = document.getElementById('geminiMiniTitle');
  const geminiMiniSub = document.getElementById('geminiMiniSub');
  const geminiScanPanelTitle = document.getElementById('geminiScanPanelTitle');
  const geminiSiteChips = document.getElementById('geminiSiteChips');
  const gemPhaseAnalyze = document.getElementById('gemPhaseAnalyze');
  const gemPhaseWrite = document.getElementById('gemPhaseWrite');
  const geminiStageScan = document.getElementById('geminiStageScan');
  const geminiStageReport = document.getElementById('geminiStageReport');
  const geminiPlanList = document.getElementById('geminiPlanList');
  const geminiReportBody = document.getElementById('geminiReportBody');
  const geminiSourcesList = document.getElementById('geminiSourcesList');
  const deepResearchTemplates = document.getElementById('deepResearchTemplates');

  // Claude elements
  const claudeSimContainer = document.getElementById('claudeSimContainer');
  const claudeWindowTitle = document.getElementById('claudeWindowTitle');
  const claudeFolderName = document.getElementById('claudeFolderName');
  const claudeCwdName = document.getElementById('claudeCwdName');
  const claudeFileTree = document.getElementById('claudeFileTree');
  const claudeChatLog = document.getElementById('claudeChatLog');
  const claudeQuickPrompts = document.getElementById('claudeQuickPrompts');
  const claudeUserInput = document.getElementById('claudeUserInput');
  const btnClaudeSend = document.getElementById('btnClaudeSend');
  const viewBtns = document.querySelectorAll('.view-btn');

  // MCP elements
  const btnMcpAsk = document.getElementById('btnMcpAsk');
  const btnMcpReset = document.getElementById('btnMcpReset');
  const mcpLog = document.getElementById('mcpLog');
  const mcpStep1 = document.getElementById('mcpStep1');
  const mcpStep2 = document.getElementById('mcpStep2');
  const mcpStep3 = document.getElementById('mcpStep3');
  const backToTopBtn = document.getElementById('backToTopBtn');

  // Dashboard elements
  const dashTitle = document.getElementById('dashTitle');
  const dashSubtitle = document.getElementById('dashSubtitle');
  const dashPeriodFilter = document.getElementById('dashPeriodFilter');
  const dashGroupFilter = document.getElementById('dashGroupFilter');
  const dashKpiGrid = document.getElementById('dashKpiGrid');
  const dashChartTitle = document.getElementById('dashChartTitle');
  const dashSvgChart = document.getElementById('dashSvgChart');
  const dashTableTitle = document.getElementById('dashTableTitle');
  const dashTable = document.getElementById('dashTable');
  const dashboardTemplates = document.getElementById('dashboardTemplates');

  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    setTimeout(() => toastEl.classList.remove('show'), 2200);
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => showToast('프롬프트가 복사되었습니다!'));
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast('프롬프트가 복사되었습니다!');
    }
  }

  // Font size toggle
  fontSizeToggle.addEventListener('click', () => {
    document.body.classList.toggle('large-text');
    fontSizeToggle.classList.toggle('active');
  });

  // Render Templates Helper
  function renderTemplates(container, list) {
    container.innerHTML = '';
    list.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'template-card';
      card.title = '클릭하면 프롬프트가 복사됩니다';
      card.innerHTML = `
        <div>
          <div class="template-title">${item.title}</div>
          <p class="template-text">${item.text}</p>
        </div>
        <button type="button" class="copy-btn">📋 클릭해서 복사하기</button>
      `;
      card.addEventListener('click', (e) => {
        const selection = window.getSelection ? window.getSelection().toString() : '';
        if (selection && e.target.tagName !== 'BUTTON') return;
        copyText(item.text);
        card.classList.add('copied');
        setTimeout(() => card.classList.remove('copied'), 700);
      });
      container.appendChild(card);
    });
  }

  // Gemini Deep Research Simulator
  function resetGemini() {
    if (geminiTimer) clearTimeout(geminiTimer);
    geminiScrollArea.classList.remove('has-content');
    geminiGreeting.classList.remove('hidden');
    geminiPromptBubble.classList.add('hidden');
    geminiStageThinking.classList.add('hidden');
    geminiStagePlan.classList.add('hidden');
    geminiSplitView.classList.add('hidden');
    geminiStageScan.classList.remove('hidden');
    geminiStageReport.classList.add('hidden');
    gemPhaseAnalyze.classList.remove('active');
    gemPhaseWrite.classList.remove('active');
    gemPlusMenu.classList.remove('open');
    btnGeminiStart.disabled = false;
  }

  function renderGemini() {
    const g = DATA[currentDomain].gemini;
    geminiDomainNote.textContent = DATA[currentDomain].label;
    geminiInputBox.value = '';
    geminiPlanTitle.textContent = g.planTitle;
    geminiMiniTitle.textContent = g.planTitle;
    geminiScanPanelTitle.textContent = g.planTitle;
    geminiPlanList.innerHTML = g.plan.map((p) => `<li>${p}</li>`).join('');
    geminiSiteChips.innerHTML = g.siteChips
      .map((s) => `<div class="gem-site-chip">🌐 <strong>${s.domain}</strong><span>${s.title}</span></div>`)
      .join('');
    geminiReportBody.innerHTML = g.reportHtml;
    geminiSourcesList.innerHTML = g.sources
      .map((src) => `<div class="gem-source-row"><span>${src.title}</span><span>${src.domain}</span></div>`)
      .join('');
    renderTemplates(deepResearchTemplates, g.templates);
    resetGemini();
  }

  btnGemFillExample.addEventListener('click', () => {
    geminiInputBox.value = DATA[currentDomain].gemini.prompt;
    geminiInputBox.focus();
  });

  btnGemPlus.addEventListener('click', (e) => {
    e.stopPropagation();
    gemPlusMenu.classList.toggle('open');
  });

  btnSelectDeepResearch.addEventListener('click', () => {
    gemPlusMenu.classList.remove('open');
    showToast('Deep Research 모드가 선택되었습니다. 프롬프트를 입력 후 전송(➤)해 보세요.');
  });

  document.addEventListener('click', (e) => {
    if (!gemPlusMenu.contains(e.target) && e.target !== btnGemPlus) {
      gemPlusMenu.classList.remove('open');
    }
  });

  function startGeminiFromInput() {
    const typed = geminiInputBox.value.trim();
    const promptToRun = typed || DATA[currentDomain].gemini.prompt;
    geminiPromptText.textContent = promptToRun;
    geminiInputBox.value = '';
    geminiScrollArea.classList.add('has-content');
    geminiGreeting.classList.add('hidden');
    geminiPromptBubble.classList.remove('hidden');
    geminiStageThinking.classList.remove('hidden');
    geminiStagePlan.classList.add('hidden');
    geminiSplitView.classList.add('hidden');
    gemPlusMenu.classList.remove('open');
    btnGeminiStart.disabled = true;

    geminiTimer = setTimeout(() => {
      geminiStageThinking.classList.add('hidden');
      geminiStagePlan.classList.remove('hidden');
    }, 650);
  }

  btnGeminiStart.addEventListener('click', startGeminiFromInput);
  geminiInputBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!btnGeminiStart.disabled) startGeminiFromInput();
    }
  });

  btnGeminiRun.addEventListener('click', () => {
    geminiStagePlan.classList.add('hidden');
    geminiSplitView.classList.remove('hidden');
    geminiStageScan.classList.remove('hidden');
    geminiStageReport.classList.add('hidden');
    geminiMiniSub.textContent = 'Researching websites...';
    gemPhaseAnalyze.classList.remove('active');
    gemPhaseWrite.classList.remove('active');

    geminiTimer = setTimeout(() => {
      gemPhaseAnalyze.classList.add('active');
      geminiMiniSub.textContent = '결과 분석 중...';
      geminiTimer = setTimeout(() => {
        gemPhaseWrite.classList.add('active');
        geminiMiniSub.textContent = '보고서 작성 중...';
        geminiTimer = setTimeout(() => {
          geminiStageScan.classList.add('hidden');
          geminiStageReport.classList.remove('hidden');
          geminiMiniSub.textContent = '리서치 보고서 완료';
        }, 900);
      }, 900);
    }, 1000);
  });

  btnGeminiReset.addEventListener('click', resetGemini);
  btnGeminiResetTop.addEventListener('click', resetGemini);
  btnGeminiEditHint.addEventListener('click', () => {
    showToast('실제 Gemini에서는 이 단계에서 조사 항목을 추가하거나 수정할 수 있습니다.');
  });
  btnExportDocs.addEventListener('click', () => {
    showToast('실제 화면에서는 Google Docs 새 문서로 바로 저장됩니다!');
  });

  // Claude Code Simulator
  function appendClaudeTurn(userText, toolText, aiText) {
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-msg user';
    userMsg.innerHTML = `<strong>&gt;</strong> ${userText}`;
    claudeChatLog.appendChild(userMsg);

    const aiMsg = document.createElement('div');
    aiMsg.className = 'chat-msg ai';
    aiMsg.innerHTML = `<div class="tool-trace">● ${toolText}<br/>&nbsp;&nbsp;⎿ 완료</div><div>${aiText}</div>`;
    claudeChatLog.appendChild(aiMsg);
    claudeChatLog.scrollTop = claudeChatLog.scrollHeight;
  }

  function handleClaudeCustomInput() {
    const val = claudeUserInput.value.trim();
    if (!val) return;
    claudeUserInput.value = '';
    const cmd = val.toLowerCase();

    if (cmd === '/clear') {
      renderClaude();
      const sysMsg = document.createElement('div');
      sysMsg.className = 'chat-msg system';
      sysMsg.textContent = '✓ /clear 실행됨 — 이전 대화 내역을 비우고 새 작업을 시작합니다.';
      claudeChatLog.appendChild(sysMsg);
      return;
    }

    if (cmd === '/help') {
      const userMsg = document.createElement('div');
      userMsg.className = 'chat-msg user';
      userMsg.innerHTML = `<strong>&gt;</strong> /help`;
      claudeChatLog.appendChild(userMsg);

      const helpMsg = document.createElement('div');
      helpMsg.className = 'chat-msg ai';
      helpMsg.innerHTML = `
        <div class="tool-trace">● Claude Code 사용 가능한 명령어</div>
        <div>
          <code>/help</code> — 사용 가능한 명령어 안내 보기<br/>
          <code>/clear</code> — 이전 대화 맥락을 비우고 새 작업 시작<br/>
          <code>/compact</code> — 길어진 대화를 핵심만 남겨 압축<br/>
          <code>Ctrl + C</code> / <code>Esc</code> — 진행 중인 작업 또는 입력 즉시 중단
        </div>
      `;
      claudeChatLog.appendChild(helpMsg);
      claudeChatLog.scrollTop = claudeChatLog.scrollHeight;
      return;
    }

    if (cmd === '/compact') {
      const msgCount = claudeChatLog.querySelectorAll('.chat-msg.user, .chat-msg.ai').length;
      claudeChatLog.innerHTML = `
        <div class="chat-msg ai">
          <div class="tool-trace">● /compact 실행 완료</div>
          <div>이전 대화 ${msgCount}건의 핵심 맥락만 압축하여 유지했습니다. (토큰 사용량 절약)</div>
        </div>
      `;
      return;
    }

    const c = DATA[currentDomain].claude;
    if (val.includes('대시보드') || cmd.includes('html')) {
      appendClaudeTurn(val, c.steps[2].tool, c.steps[2].ai);
    } else if (val.includes('보고서') || val.includes('요약') || val.includes('초안')) {
      appendClaudeTurn(val, c.steps[1].tool, c.steps[1].ai);
    } else {
      appendClaudeTurn(
        val,
        `Read(./${c.folderName} 내 파일 분석)`,
        `입력하신 지시(<em>"${val}"</em>)에 맞춰 현재 폴더의 자료를 분석하고 작업을 완료했습니다.`
      );
    }
  }

  function triggerClaudeInterrupt() {
    claudeUserInput.value = '';
    const sysMsg = document.createElement('div');
    sysMsg.className = 'chat-msg system';
    sysMsg.innerHTML = '⏹ <strong>Interrupted (Ctrl+C / Esc)</strong> — 진행 중인 입력 또는 작업을 즉시 중단했습니다.';
    claudeChatLog.appendChild(sysMsg);
    claudeChatLog.scrollTop = claudeChatLog.scrollHeight;
  }

  btnClaudeSend.addEventListener('click', handleClaudeCustomInput);
  claudeUserInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleClaudeCustomInput();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      triggerClaudeInterrupt();
    } else if (e.ctrlKey && e.key.toLowerCase() === 'c') {
      const sel = window.getSelection ? window.getSelection().toString() : '';
      if (!sel) {
        e.preventDefault();
        triggerClaudeInterrupt();
      }
    }
  });

  // Clickable cheat-sheet items
  document.querySelectorAll('.cheat-item[data-cmd]').forEach((item) => {
    item.addEventListener('click', () => {
      const cmd = item.dataset.cmd;
      if (cmd === 'interrupt') {
        triggerClaudeInterrupt();
      } else {
        claudeUserInput.value = cmd;
        handleClaudeCustomInput();
      }
      claudeUserInput.focus();
    });
  });

  function renderClaude() {
    const c = DATA[currentDomain].claude;
    claudeFolderName.textContent = c.folderName;
    claudeCwdName.textContent = c.folderName;
    claudeFileTree.innerHTML = c.files.map((f) => `<li>${f}</li>`).join('');
    claudeChatLog.innerHTML = `
      <div class="chat-msg system">
        아래 <strong>[실행 예시 버튼]</strong>을 누르거나, 하단 입력창에 프롬프트를 직접 붙여넣고 <kbd>Enter</kbd>를 눌러보세요.
      </div>
    `;
    claudeQuickPrompts.innerHTML = '';
    c.steps.forEach((step) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'prompt-chip';
      btn.textContent = step.btn;
      btn.addEventListener('click', () => appendClaudeTurn(step.user, step.tool, step.ai));
      claudeQuickPrompts.appendChild(btn);
    });
  }

  viewBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      claudeView = btn.dataset.claudeView;
      viewBtns.forEach((b) => b.classList.toggle('active', b === btn));
      claudeSimContainer.classList.toggle('cli-mode', claudeView === 'cli');
      claudeSimContainer.classList.toggle('app-mode', claudeView === 'app');
      claudeWindowTitle.textContent =
        claudeView === 'cli' ? 'Windows PowerShell — claude' : 'Claude Desktop — Claude Code';
    });
  });

  // MCP Simulator
  function setMcpStep(step) {
    mcpStep1.classList.toggle('active', step === 1);
    mcpStep2.classList.toggle('active', step === 2);
    mcpStep3.classList.toggle('active', step === 3);
  }

  function resetMcp() {
    mcpLog.innerHTML = `<div style="color:#9ca3af; font-family:'JetBrains Mono', monospace;">&gt; 상단의 [MCP 자료 조회 요청 보내기] 버튼을 눌러 시작하세요.</div>`;
    btnMcpAsk.disabled = false;
    setMcpStep(1);
  }

  btnMcpAsk.addEventListener('click', () => {
    const m = DATA[currentDomain].mcp;
    btnMcpAsk.disabled = true;
    setMcpStep(2);
    mcpLog.innerHTML = `
      <div class="chat-msg user"><strong>&gt;</strong> ${m.question}</div>
      <div class="mcp-cli-perm" id="mcpPermBox">
        <div>
          <strong>🔐 Claude Code 실행 승인 요청</strong><br/>
          <small style="color:#fcd34d;">도구: <code>${m.toolName}</code></small>
        </div>
        <div class="mcp-perm-options">
          <button type="button" class="mcp-opt-btn recommended" id="btnMcpAllow">❯ 1. Yes (이번 실행 허용)</button>
          <button type="button" class="mcp-opt-btn" id="btnMcpAllowSession">  2. Yes, allow all in this session (이번 세션 모두 허용)</button>
        </div>
      </div>
    `;
    const handleAllow = () => {
      document.getElementById('mcpPermBox').remove();
      setMcpStep(3);
      const res = document.createElement('div');
      res.className = 'chat-msg ai';
      res.innerHTML = `<div class="tool-trace">● ${m.toolName}<br/>&nbsp;&nbsp;⎿ 데이터 조회 완료</div><div>${m.answer}</div>`;
      mcpLog.appendChild(res);
    };
    document.getElementById('btnMcpAllow').addEventListener('click', handleAllow);
    document.getElementById('btnMcpAllowSession').addEventListener('click', handleAllow);
  });

  btnMcpReset.addEventListener('click', resetMcp);

  // Dynamic Dashboard
  function renderDashboardFilters() {
    const d = DATA[currentDomain].dashboard;
    dashTitle.textContent = d.title;
    dashSubtitle.textContent = d.subtitle;
    dashChartTitle.textContent = d.chartTitle;
    dashTableTitle.textContent = d.tableTitle;

    dashGroupFilter.innerHTML = d.groups
      .map((g) => `<option value="${g.value}">${g.label}</option>`)
      .join('');
    dashPeriodFilter.value = 'month';
    renderDashboardContent();
    renderTemplates(dashboardTemplates, d.templates);
  }

  function renderDashboardContent() {
    const d = DATA[currentDomain].dashboard;
    const period = dashPeriodFilter.value;
    const group = dashGroupFilter.value;

    // Fallback to 'all' if quarter + specific group isn't defined separately
    const periodObj = d.datasets[period] || d.datasets.month;
    const viewData = periodObj[group] || periodObj.all;

    // KPIs
    dashKpiGrid.innerHTML = viewData.kpis
      .map(
        (k) => `
      <div class="kpi-card">
        <div class="kpi-label">${k.label}</div>
        <div class="kpi-value">${k.value}</div>
        <div class="kpi-delta ${k.tone}">${k.delta}</div>
      </div>
    `
      )
      .join('');

    // SVG Bar Chart
    const bars = viewData.bars;
    const svgW = 460;
    const svgH = 220;
    const maxVal = 100;
    const barW = 54;
    const gap = (svgW - 60 - bars.length * barW) / Math.max(bars.length, 1);

    let svgParts = `<svg viewBox="0 0 ${svgW} ${svgH}" role="img" aria-label="대시보드 차트">`;
    // Grid lines
    [0, 25, 50, 75, 100].forEach((tick) => {
      const y = 180 - (tick / maxVal) * 145;
      svgParts += `<line x1="36" y1="${y}" x2="${svgW - 10}" y2="${y}" stroke="#e2e8f0" stroke-dasharray="3 3" />`;
      svgParts += `<text x="6" y="${y + 4}" font-size="11" fill="#64748b">${tick}%</text>`;
    });

    bars.forEach((b, i) => {
      const x = 48 + i * (barW + gap);
      const h = (b.value / maxVal) * 145;
      const y = 180 - h;
      svgParts += `
        <g>
          <rect x="${x}" y="${y}" width="${barW}" height="${h}" rx="6" fill="${b.color}">
            <title>${b.name}: ${b.value}%</title>
          </rect>
          <text x="${x + barW / 2}" y="${y - 6}" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">${b.value}%</text>
          <text x="${x + barW / 2}" y="202" text-anchor="middle" font-size="11.5" font-weight="600" fill="#334155">${b.name}</text>
        </g>
      `;
    });
    svgParts += `</svg>`;
    dashSvgChart.innerHTML = svgParts;

    // Table
    dashTable.innerHTML = `
      <thead>
        <tr>
          <th>항목</th>
          <th>핵심 수치</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        ${viewData.rows
          .map(
            (r) => `
          <tr>
            <td><strong>${r.name}</strong></td>
            <td>${r.metric}</td>
            <td><span class="status-pill ${r.cls}">${r.status}</span></td>
          </tr>
        `
          )
          .join('')}
      </tbody>
    `;
  }

  dashPeriodFilter.addEventListener('change', renderDashboardContent);
  dashGroupFilter.addEventListener('change', renderDashboardContent);

  // Domain Switching
  function setDomain(domain, notify = false) {
    currentDomain = domain;
    domainBtns.forEach((b) => b.classList.toggle('active', b.dataset.domain === domain));
    renderGemini();
    renderClaude();
    resetMcp();
    renderDashboardFilters();
    if (notify) showToast(`${DATA[domain].label}로 전환되었습니다.`);
  }

  domainBtns.forEach((btn) => {
    btn.addEventListener('click', () => setDomain(btn.dataset.domain, true));
  });

  // Scroll Spy for Sidebar & Back-to-Top
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    let currentId = 'module-0';
    sections.forEach((sec) => {
      const top = sec.getBoundingClientRect().top;
      if (top <= 140) currentId = sec.id;
    });
    navItems.forEach((item) => {
      item.classList.toggle('active', item.dataset.section === currentId);
    });
    backToTopBtn.classList.toggle('show', window.scrollY > 400);
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Init
  setDomain('electrical');
})();
