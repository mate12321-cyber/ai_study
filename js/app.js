(function () {
  const DATA = window.AI_STUDY_DATA;
  let currentDomain = 'electrical';
  let claudeView = 'cli';
  let geminiTimer = null;

  // Elements
  const domainBtns = document.querySelectorAll('.domain-btn');
  const fontSizeToggle = document.getElementById('fontSizeToggle');
  const toastEl = document.getElementById('toast');
  const topScrollFill = document.getElementById('topScrollFill');
  const headerDomainPill = document.getElementById('headerDomainPill');
  const geminiStepIndicator = document.getElementById('geminiStepIndicator');
  const btnClaudeResetTop = document.getElementById('btnClaudeResetTop');
  const btnDashExportDemo = document.getElementById('btnDashExportDemo');
  const glossarySearchInput = document.getElementById('glossarySearchInput');
  const glossaryGrid = document.getElementById('glossaryGrid');
  let toastTimer = null;

  // Gemini elements
  const geminiAppShell = document.getElementById('geminiAppShell');
  const geminiDocsShell = document.getElementById('geminiDocsShell');
  const gemTabMain = document.getElementById('gemTabMain');
  const gemTabDocs = document.getElementById('gemTabDocs');
  const gemDocsTabTitle = document.getElementById('gemDocsTabTitle');
  const btnCloseDocsTab = document.getElementById('btnCloseDocsTab');
  const gemOmniDomain = document.getElementById('gemOmniDomain');
  const gemOmniPath = document.getElementById('gemOmniPath');
  const gdocsTitleInput = document.getElementById('gdocsTitleInput');
  const gdocsPageBody = document.getElementById('gdocsPageBody');
  const btnBackToGemini = document.getElementById('btnBackToGemini');
  const btnDownloadWordDoc = document.getElementById('btnDownloadWordDoc');
  const btnShareGdocs = document.getElementById('btnShareGdocs');
  const btnGemSidebarToggle = document.getElementById('btnGemSidebarToggle');
  const btnGemModelPicker = document.getElementById('btnGemModelPicker');
  const gemModelMenu = document.getElementById('gemModelMenu');
  const gemCurrentModelLabel = document.getElementById('gemCurrentModelLabel');
  const gemHistoryList = document.getElementById('gemHistoryList');
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
  const btnGeminiQuickDemo = document.getElementById('btnGeminiQuickDemo');
  const btnGeminiRun = document.getElementById('btnGeminiRun');
  const btnGeminiEditHint = document.getElementById('btnGeminiEditHint');
  const geminiPlanEditBox = document.getElementById('geminiPlanEditBox');
  const geminiPlanAddInput = document.getElementById('geminiPlanAddInput');
  const btnGeminiPlanAddConfirm = document.getElementById('btnGeminiPlanAddConfirm');
  const btnGeminiReset = document.getElementById('btnGeminiReset');
  const btnGeminiResetTop = document.getElementById('btnGeminiResetTop');
  const btnExportDocs = document.getElementById('btnExportDocs');
  const btnCopyReport = document.getElementById('btnCopyReport');
  const geminiStageThinking = document.getElementById('geminiStageThinking');
  const geminiStagePlan = document.getElementById('geminiStagePlan');
  const geminiPlanTitle = document.getElementById('geminiPlanTitle');
  const geminiSplitView = document.getElementById('geminiSplitView');
  const geminiMiniTitle = document.getElementById('geminiMiniTitle');
  const geminiMiniSub = document.getElementById('geminiMiniSub');
  const geminiMiniPulse = document.getElementById('geminiMiniPulse');
  const geminiFollowupLog = document.getElementById('geminiFollowupLog');
  const geminiScanPanelTitle = document.getElementById('geminiScanPanelTitle');
  const geminiScanProgressFill = document.getElementById('geminiScanProgressFill');
  const geminiElapsed = document.getElementById('geminiElapsed');
  const geminiSearchQueries = document.getElementById('geminiSearchQueries');
  const geminiSiteChips = document.getElementById('geminiSiteChips');
  const gemPhaseAnalyze = document.getElementById('gemPhaseAnalyze');
  const gemPhaseWrite = document.getElementById('gemPhaseWrite');
  const geminiStageScan = document.getElementById('geminiStageScan');
  const geminiStageReport = document.getElementById('geminiStageReport');
  const geminiPlanList = document.getElementById('geminiPlanList');
  const geminiReportBody = document.getElementById('geminiReportBody');
  const geminiSourcesList = document.getElementById('geminiSourcesList');
  const deepResearchTemplates = document.getElementById('deepResearchTemplates');
  const geminiScenarioPicker = document.getElementById('geminiScenarioPicker');
  let geminiReportCompleted = false;
  let currentGeminiScenarioIdx = 0;

  // Claude elements
  const claudeSimContainer = document.getElementById('claudeSimContainer');
  const claudeWindowTitle = document.getElementById('claudeWindowTitle');
  const claudeWinTabIcon = document.getElementById('claudeWinTabIcon');
  const claudeFolderName = document.getElementById('claudeFolderName');
  const claudeCwdName = document.getElementById('claudeCwdName');
  const claudePsCwdName = document.getElementById('claudePsCwdName');
  const claudeInlineFileChips = document.getElementById('claudeInlineFileChips');
  const claudeFileTree = document.getElementById('claudeFileTree');
  const claudeChatLog = document.getElementById('claudeChatLog');
  const claudeQuickPrompts = document.getElementById('claudeQuickPrompts');
  const claudeUserInput = document.getElementById('claudeUserInput');
  const btnClaudeSend = document.getElementById('btnClaudeSend');
  const claudeContextMeter = document.getElementById('claudeContextMeter');
  const claudePreviewPane = document.getElementById('claudePreviewPane');
  const claudePreviewBadge = document.getElementById('claudePreviewBadge');
  const claudePreviewTitle = document.getElementById('claudePreviewTitle');
  const claudePreviewBody = document.getElementById('claudePreviewBody');
  const btnCloseClaudePreview = document.getElementById('btnCloseClaudePreview');
  const viewBtns = document.querySelectorAll('.view-btn');
  let claudeRuntimeFiles = [];
  let claudeContextPct = 12;

  // MCP elements
  const mcpSimContainer = document.getElementById('mcpSimContainer');
  const mcpWindowTitle = document.getElementById('mcpWindowTitle');
  const mcpWinTabIcon = document.getElementById('mcpWinTabIcon');
  const mcpPsCwdName = document.getElementById('mcpPsCwdName');
  const mcpConfigPathName = document.getElementById('mcpConfigPathName');
  const mcpInlineServerChips = document.getElementById('mcpInlineServerChips');
  const mcpViewBtns = document.querySelectorAll('.mcp-view-btn');
  const mcpServerList = document.getElementById('mcpServerList');
  const mcpSessionStatusBadge = document.getElementById('mcpSessionStatusBadge');
  const mcpPermModeLabel = document.getElementById('mcpPermModeLabel');
  const mcpQuickPrompts = document.getElementById('mcpQuickPrompts');
  const mcpUserInput = document.getElementById('mcpUserInput');
  const btnMcpSlashCmd = document.getElementById('btnMcpSlashCmd');
  const btnMcpConfigCmd = document.getElementById('btnMcpConfigCmd');
  const btnMcpConfigToggle = document.getElementById('btnMcpConfigToggle');
  const mcpConfigPane = document.getElementById('mcpConfigPane');
  const mcpConfigPaneTitle = document.getElementById('mcpConfigPaneTitle');
  const mcpConfigPaneBody = document.getElementById('mcpConfigPaneBody');
  const btnCloseMcpConfig = document.getElementById('btnCloseMcpConfig');
  const btnMcpAsk = document.getElementById('btnMcpAsk');
  const btnMcpReset = document.getElementById('btnMcpReset');
  const mcpLog = document.getElementById('mcpLog');
  const mcpStep1 = document.getElementById('mcpStep1');
  const mcpStep2 = document.getElementById('mcpStep2');
  const mcpStep3 = document.getElementById('mcpStep3');
  const backToTopBtn = document.getElementById('backToTopBtn');
  let mcpView = 'cli';
  let mcpSessionAutoAllow = false;
  let mcpPendingTimer = null;
  let activeMcpPermHandler = null;
  let activeMcpPermIndex = 0;
  let activeMcpModalEl = null;

  // Dashboard elements
  const dashTitle = document.getElementById('dashTitle');
  const dashSubtitle = document.getElementById('dashSubtitle');
  const dashBrowserTitle = document.getElementById('dashBrowserTitle');
  const dashVersionBadge = document.getElementById('dashVersionBadge');
  const dashStageTag = document.getElementById('dashStageTag');
  const dashAppContainer = document.getElementById('dashAppContainer');
  const dashEmptyState = document.getElementById('dashEmptyState');
  const btnDashEmptyStart = document.getElementById('btnDashEmptyStart');
  const dashBuildingOverlay = document.getElementById('dashBuildingOverlay');
  const dashBuildingText = document.getElementById('dashBuildingText');
  const dashPsCwdName = document.getElementById('dashPsCwdName');
  const dashBuilderLog = document.getElementById('dashBuilderLog');
  const dashQuickPrompts = document.getElementById('dashQuickPrompts');
  const dashUserInput = document.getElementById('dashUserInput');
  const btnDashPromptSend = document.getElementById('btnDashPromptSend');
  const btnDashBuilderReset = document.getElementById('btnDashBuilderReset');
  const dashBuildStep1 = document.getElementById('dashBuildStep1');
  const dashBuildStep2 = document.getElementById('dashBuildStep2');
  const btnDashAlertFilter = document.getElementById('btnDashAlertFilter');
  const dashPeriodFilter = document.getElementById('dashPeriodFilter');
  const dashGroupFilter = document.getElementById('dashGroupFilter');
  const dashKpiGrid = document.getElementById('dashKpiGrid');
  const dashChartTitle = document.getElementById('dashChartTitle');
  const dashSvgChart = document.getElementById('dashSvgChart');
  const dashTableTitle = document.getElementById('dashTableTitle');
  const dashTable = document.getElementById('dashTable');
  const dashboardTemplates = document.getElementById('dashboardTemplates');
  let dashBuildStage = 1;
  let dashAlertOnly = false;
  let dashBuildTimer = null;

  function showToast(msg) {
    if (!toastEl) return;
    if (toastTimer) clearTimeout(toastTimer);
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
      toastTimer = null;
    }, 2400);
  }

  function copyText(text, customToastMsg) {
    const doneMsg = customToastMsg || '📋 프롬프트가 클립보드에 복사되었습니다!';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => showToast(doneMsg));
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast(doneMsg);
    }
  }

  // Font size toggle
  fontSizeToggle.addEventListener('click', () => {
    const isLarge = document.body.classList.toggle('large-text');
    fontSizeToggle.classList.toggle('active', isLarge);
    fontSizeToggle.setAttribute('aria-pressed', String(isLarge));
    fontSizeToggle.textContent = isLarge ? '🔍 기본 크기로' : '🔍 글자 더 크게 (가+)';
    showToast(isLarge ? '특대 글자 모드가 적용되었습니다.' : '기본 글자 크기로 전환되었습니다.');
  });

  // Render Templates Helper
  function renderTemplates(container, list, onRunInSimulator) {
    container.innerHTML = '';
    list.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'template-card';
      card.title = '클릭하면 프롬프트가 복사됩니다';
      const simBtnHtml = onRunInSimulator
        ? `<button type="button" class="run-sim-btn">▶ 위 시뮬레이터에서 이 주제로 바로 실행</button>`
        : '';
      card.innerHTML = `
        <div>
          <div class="template-title">${item.title}</div>
          <p class="template-text">${item.text}</p>
        </div>
        <div class="template-actions">
          ${simBtnHtml}
          <button type="button" class="copy-btn">📋 클릭해서 복사하기</button>
        </div>
      `;
      const copyBtn = card.querySelector('.copy-btn');
      const runSimBtn = card.querySelector('.run-sim-btn');

      if (runSimBtn && onRunInSimulator) {
        runSimBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          onRunInSimulator(idx, item);
        });
      }

      card.addEventListener('click', (e) => {
        const selection = window.getSelection ? window.getSelection().toString() : '';
        if (selection && e.target.tagName !== 'BUTTON') return;
        copyText(item.text);
        card.classList.add('copied');
        if (copyBtn) copyBtn.textContent = '✓ 복사 완료!';
        setTimeout(() => {
          card.classList.remove('copied');
          if (copyBtn) copyBtn.textContent = '📋 클릭해서 복사하기';
        }, 1200);
      });
      container.appendChild(card);
    });
  }

  function setGeminiStepper(activeStep) {
    if (!geminiStepIndicator) return;
    geminiStepIndicator.querySelectorAll('.sim-step').forEach((el) => {
      const stepNum = Number(el.dataset.gemStep || 1);
      el.classList.toggle('active', stepNum === activeStep);
      el.classList.toggle('done', stepNum < activeStep);
    });
  }

  function switchGeminiBrowserTab(tabName) {
    const isDocs = tabName === 'docs';
    if (geminiAppShell) geminiAppShell.classList.toggle('hidden', isDocs);
    if (geminiDocsShell) geminiDocsShell.classList.toggle('hidden', !isDocs);
    if (gemTabMain) gemTabMain.classList.toggle('active', !isDocs);
    if (gemTabDocs) gemTabDocs.classList.toggle('active', isDocs);
    if (gemOmniDomain) {
      gemOmniDomain.textContent = isDocs ? 'docs.google.com' : 'gemini.google.com';
    }
    if (gemOmniPath) {
      gemOmniPath.textContent = isDocs ? '/document/d/1aBcDeFg_DeepResearch_Report/edit' : '/app';
    }
  }

  // Gemini Deep Research Simulator
  function resetGemini() {
    if (geminiTimer) clearTimeout(geminiTimer);
    geminiReportCompleted = false;
    switchGeminiBrowserTab('main');
    if (gemTabDocs) gemTabDocs.classList.add('hidden');
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
    if (gemModelMenu) gemModelMenu.classList.remove('open');
    if (geminiPlanEditBox) geminiPlanEditBox.classList.add('hidden');
    if (geminiFollowupLog) geminiFollowupLog.innerHTML = '';
    if (geminiScanProgressFill) geminiScanProgressFill.style.width = '18%';
    if (geminiMiniPulse) geminiMiniPulse.classList.remove('done');
    btnGeminiStart.disabled = false;
    geminiInputBox.value = '';
    setGeminiStepper(1);
  }

  function bindCitationClicks() {
    geminiReportBody.querySelectorAll('.citation[data-cite]').forEach((badge) => {
      badge.addEventListener('click', () => {
        const citeId = badge.getAttribute('data-cite');
        const targetRow = geminiSourcesList.querySelector(`.gem-source-row[data-source-id="${citeId}"]`);
        if (targetRow) {
          targetRow.classList.add('highlight');
          targetRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          setTimeout(() => targetRow.classList.remove('highlight'), 1600);
        }
      });
    });
  }

  function getActiveGeminiScenario() {
    const g = DATA[currentDomain].gemini;
    if (g.scenarios && g.scenarios[currentGeminiScenarioIdx]) {
      return g.scenarios[currentGeminiScenarioIdx];
    }
    return g;
  }

  function applyGeminiScenarioData(sc) {
    geminiPlanTitle.textContent = sc.planTitle;
    geminiMiniTitle.textContent = sc.planTitle;
    geminiScanPanelTitle.textContent = sc.planTitle;
    geminiPlanList.innerHTML = (sc.plan || []).map((p) => `<li>${p}</li>`).join('');
    if (geminiSearchQueries && sc.searchQueries) {
      geminiSearchQueries.innerHTML = sc.searchQueries
        .map((q) => `<div class="gem-query-pill">🔍 <span>"${q}"</span></div>`)
        .join('');
    }
    geminiSiteChips.innerHTML = (sc.siteChips || [])
      .map((s) => `<div class="gem-site-chip">🌐 <strong>${s.domain}</strong><span>${s.title}</span></div>`)
      .join('');
    geminiReportBody.innerHTML = sc.reportHtml;
    geminiSourcesList.innerHTML = (sc.sources || [])
      .map(
        (src, idx) => `
        <div class="gem-source-row" data-source-id="${src.id || idx + 1}">
          <div class="src-head">
            <span class="src-num">[${src.id || idx + 1}]</span>
            <strong>${src.title}</strong>
            <span class="src-domain">${src.domain}</span>
          </div>
          ${src.snippet ? `<div class="src-snippet">${src.snippet}</div>` : ''}
        </div>`
      )
      .join('');
    bindCitationClicks();
  }

  function renderGeminiScenarioChips() {
    if (!geminiScenarioPicker) return;
    const g = DATA[currentDomain].gemini;
    const scenarios = g.scenarios || [];
    geminiScenarioPicker.innerHTML = '';
    scenarios.forEach((sc, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `gem-scenario-chip${idx === currentGeminiScenarioIdx ? ' active' : ''}`;
      btn.textContent = `🔬 ${sc.shortLabel}`;
      btn.addEventListener('click', () => {
        currentGeminiScenarioIdx = idx;
        renderGeminiScenarioChips();
        applyGeminiScenarioData(getActiveGeminiScenario());
        geminiInputBox.value = sc.prompt;
        showToast(`'${sc.shortLabel}' 지시문이 선택되었습니다. [▶ 바로 실행] 또는 전송(➤)을 눌러보세요.`);
      });
      geminiScenarioPicker.appendChild(btn);
    });
  }

  function renderGemini() {
    const g = DATA[currentDomain].gemini;
    currentGeminiScenarioIdx = 0;
    geminiDomainNote.textContent = DATA[currentDomain].label;
    renderGeminiScenarioChips();
    applyGeminiScenarioData(getActiveGeminiScenario());
    renderTemplates(deepResearchTemplates, g.templates, (idx) => {
      currentGeminiScenarioIdx = idx;
      renderGeminiScenarioChips();
      const sc = getActiveGeminiScenario();
      resetGemini();
      applyGeminiScenarioData(sc);
      geminiInputBox.value = sc.prompt;
      if (geminiAppShell) {
        geminiAppShell.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      startGeminiFromInput();
    });
    resetGemini();
  }

  if (btnGemSidebarToggle && geminiAppShell) {
    btnGemSidebarToggle.addEventListener('click', () => {
      geminiAppShell.classList.toggle('sidebar-collapsed');
    });
  }

  if (btnGemModelPicker && gemModelMenu) {
    btnGemModelPicker.addEventListener('click', (e) => {
      e.stopPropagation();
      gemModelMenu.classList.toggle('open');
    });
    gemModelMenu.querySelectorAll('.gem-mm-item').forEach((item) => {
      item.addEventListener('click', () => {
        gemModelMenu.querySelectorAll('.gem-mm-item').forEach((i) => i.classList.remove('active'));
        item.classList.add('active');
        if (gemCurrentModelLabel) gemCurrentModelLabel.textContent = item.dataset.model;
        gemModelMenu.classList.remove('open');
        showToast(`Gemini 모델이 '${item.dataset.model}'(으)로 설정되었습니다.`);
      });
    });
  }

  if (gemHistoryList) {
    gemHistoryList.querySelectorAll('.gem-history-item').forEach((btn) => {
      btn.addEventListener('click', () => {
        gemHistoryList.querySelectorAll('.gem-history-item').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const idx = Number(btn.dataset.hist || 0);
        const g = DATA[currentDomain].gemini;
        if (idx === 0) {
          resetGemini();
          return;
        }
        const h = (g.historyChats && g.historyChats[idx]) || null;
        if (!h) return;
        if (geminiTimer) clearTimeout(geminiTimer);
        geminiScrollArea.classList.add('has-content');
        geminiGreeting.classList.add('hidden');
        geminiStageThinking.classList.add('hidden');
        geminiStagePlan.classList.add('hidden');
        geminiSplitView.classList.add('hidden');
        geminiPromptBubble.classList.remove('hidden');
        geminiPromptText.innerHTML = `<strong>${h.q}</strong><hr style="border:none;border-top:1px solid #3c4043;margin:10px 0;"/><div style="color:#a8c7fa;">✦ Gemini 답변:</div><div style="margin-top:6px;">${h.a}</div>`;
      });
    });
  }

  btnGemFillExample.addEventListener('click', () => {
    const g = DATA[currentDomain].gemini;
    if (g.scenarios && g.scenarios.length > 1) {
      // If current scenario prompt is already in the box, cycle to the other topic!
      const currSc = getActiveGeminiScenario();
      if (geminiInputBox.value.trim() === currSc.prompt.trim()) {
        currentGeminiScenarioIdx = (currentGeminiScenarioIdx + 1) % g.scenarios.length;
        renderGeminiScenarioChips();
      }
    }
    const sc = getActiveGeminiScenario();
    applyGeminiScenarioData(sc);
    geminiInputBox.value = sc.prompt;
    geminiInputBox.focus();
    showToast(`'${sc.shortLabel || sc.planTitle}' 지시문이 입력창에 채워졌습니다.`);
  });

  btnGemPlus.addEventListener('click', (e) => {
    e.stopPropagation();
    gemPlusMenu.classList.toggle('open');
  });

  btnSelectDeepResearch.addEventListener('click', () => {
    gemPlusMenu.classList.remove('open');
    showToast('Deep Research 모드가 활성화되어 있습니다. 전송(➤)을 눌러보세요.');
  });

  document.addEventListener('click', (e) => {
    if (!gemPlusMenu.contains(e.target) && e.target !== btnGemPlus) {
      gemPlusMenu.classList.remove('open');
    }
    if (gemModelMenu && !gemModelMenu.contains(e.target) && e.target !== btnGemModelPicker) {
      gemModelMenu.classList.remove('open');
    }
  });

  function startGeminiFromInput() {
    const typed = geminiInputBox.value.trim();

    // If report is already completed, treat input as a follow-up question in split view!
    if (geminiReportCompleted && !geminiSplitView.classList.contains('hidden')) {
      const followQ = typed || '위 보고서 내용을 임원 보고용 3줄로 요약해 줘.';
      geminiInputBox.value = '';
      const sc = getActiveGeminiScenario();
      const item = document.createElement('div');
      item.className = 'gem-followup-turn';
      item.innerHTML = `
        <div class="gem-fu-user">${followQ}</div>
        <div class="gem-fu-ai"><span class="gem-sparkle-spin">✦</span> 보고서 핵심 내용을 임원 보고용으로 재구성하는 중...</div>
      `;
      geminiFollowupLog.appendChild(item);
      item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      btnGeminiStart.disabled = true;
      setTimeout(() => {
        const aiBox = item.querySelector('.gem-fu-ai');
        if (aiBox) {
          aiBox.innerHTML = `✦ ${sc.followUpSummary || '요청하신 기준에 맞춰 핵심 요약표를 우측 보고서에 반영했습니다.'}`;
        }
        btnGeminiStart.disabled = false;
        item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 2800);
      return;
    }

    // Automatically match typed prompt to Scenario 1 or Scenario 2!
    const g = DATA[currentDomain].gemini;
    if (typed && g.scenarios && g.scenarios.length > 1) {
      if (
        typed.includes('피크') ||
        typed.includes('ESS') ||
        typed.includes('역률') ||
        typed.includes('에너지') ||
        typed.includes('사업계획') ||
        typed.includes('경쟁사') ||
        typed.includes('트렌드') ||
        typed.includes('신사업')
      ) {
        currentGeminiScenarioIdx = 1;
      } else if (
        typed.includes('예지보전') ||
        typed.includes('KEC') ||
        typed.includes('수변전') ||
        typed.includes('주간보고') ||
        typed.includes('회의록') ||
        typed.includes('반복 보고')
      ) {
        currentGeminiScenarioIdx = 0;
      }
      renderGeminiScenarioChips();
    }

    const activeSc = getActiveGeminiScenario();
    applyGeminiScenarioData(activeSc);
    const promptToRun = typed || activeSc.prompt;
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
      setGeminiStepper(2);
      geminiStagePlan.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 3200);
  }

  btnGeminiStart.addEventListener('click', startGeminiFromInput);
  if (btnGeminiQuickDemo) {
    btnGeminiQuickDemo.addEventListener('click', startGeminiFromInput);
  }
  geminiInputBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!btnGeminiStart.disabled || geminiReportCompleted) startGeminiFromInput();
    }
  });

  btnGeminiRun.addEventListener('click', () => {
    geminiStagePlan.classList.add('hidden');
    geminiSplitView.classList.remove('hidden');
    geminiStageScan.classList.remove('hidden');
    geminiStageReport.classList.add('hidden');
    geminiMiniSub.textContent = '웹사이트 실시간 탐색 중 (18/56)...';
    if (geminiScanProgressFill) geminiScanProgressFill.style.width = '28%';
    if (geminiElapsed) geminiElapsed.textContent = '00:03';
    gemPhaseAnalyze.classList.remove('active');
    gemPhaseWrite.classList.remove('active');
    setGeminiStepper(2);

    geminiTimer = setTimeout(() => {
      gemPhaseAnalyze.classList.add('active');
      geminiMiniSub.textContent = '출처 교차 검증 및 데이터 분석 중 (42/56)...';
      if (geminiScanProgressFill) geminiScanProgressFill.style.width = '68%';
      if (geminiElapsed) geminiElapsed.textContent = '00:07';
      geminiTimer = setTimeout(() => {
        gemPhaseWrite.classList.add('active');
        geminiMiniSub.textContent = '부서장 보고용 리포트 작성 중...';
        if (geminiScanProgressFill) geminiScanProgressFill.style.width = '94%';
        if (geminiElapsed) geminiElapsed.textContent = '00:11';
        geminiTimer = setTimeout(() => {
          geminiStageScan.classList.add('hidden');
          geminiStageReport.classList.remove('hidden');
          geminiMiniSub.textContent = '✓ 리서치 보고서 작성 완료';
          if (geminiMiniPulse) geminiMiniPulse.classList.add('done');
          geminiReportCompleted = true;
          btnGeminiStart.disabled = false;
          geminiInputBox.value = '';
          setGeminiStepper(3);
        }, 3800);
      }, 3800);
    }, 3800);
  });

  btnGeminiReset.addEventListener('click', resetGemini);
  btnGeminiResetTop.addEventListener('click', resetGemini);

  btnGeminiEditHint.addEventListener('click', () => {
    if (geminiPlanEditBox) {
      geminiPlanEditBox.classList.toggle('hidden');
      if (!geminiPlanEditBox.classList.contains('hidden') && geminiPlanAddInput) {
        geminiPlanAddInput.focus();
      }
    }
  });

  if (btnGeminiPlanAddConfirm && geminiPlanAddInput) {
    btnGeminiPlanAddConfirm.addEventListener('click', () => {
      const val = geminiPlanAddInput.value.trim() || '국내 동종 업계 도입 비용(ROI) 및 유지보수 주의사항 비교';
      const li = document.createElement('li');
      li.innerHTML = `<strong style="color:#8ab4f8;">[추가됨]</strong> ${val}`;
      geminiPlanList.appendChild(li);
      geminiPlanAddInput.value = '';
      geminiPlanEditBox.classList.add('hidden');
      showToast('조사 계획에 새 항목이 추가되었습니다. 이제 [▶ 연구 시작]을 눌러보세요.');
    });
  }

  if (btnCopyReport) {
    btnCopyReport.addEventListener('click', () => {
      copyText(geminiReportBody.innerText);
    });
  }

  btnExportDocs.addEventListener('click', () => {
    const g = getActiveGeminiScenario();
    const docTitle = `${g.planTitle} — Deep Research 보고서`;
    if (gdocsTitleInput) gdocsTitleInput.value = docTitle;
    if (gemDocsTabTitle) gemDocsTabTitle.textContent = `Google Docs — ${g.planTitle}`;
    if (gdocsPageBody) {
      const srcRows = (g.sources || [])
        .map((s, idx) => `<div>[${s.id || idx + 1}] <strong>${s.title}</strong> (${s.domain}) — ${s.snippet || ''}</div>`)
        .join('');
      gdocsPageBody.innerHTML = `
        ${g.reportHtml}
        <div class="gdocs-sources-footer">
          <strong>🔗 검증된 참고 문헌 및 출처</strong>
          <div style="margin-top:6px;display:flex;flex-direction:column;gap:4px;">${srcRows}</div>
        </div>
      `;
    }
    if (gemTabDocs) gemTabDocs.classList.remove('hidden');
    switchGeminiBrowserTab('docs');
    showToast('📄 Google Docs 새 문서 탭으로 보고서와 표가 내보내졌습니다! (직접 편집 및 파일 저장 가능)');
  });

  if (gemTabMain) {
    gemTabMain.addEventListener('click', () => switchGeminiBrowserTab('main'));
  }
  if (gemTabDocs) {
    gemTabDocs.addEventListener('click', (e) => {
      if (e.target === btnCloseDocsTab) return;
      switchGeminiBrowserTab('docs');
    });
  }
  if (btnCloseDocsTab) {
    btnCloseDocsTab.addEventListener('click', (e) => {
      e.stopPropagation();
      if (gemTabDocs) gemTabDocs.classList.add('hidden');
      switchGeminiBrowserTab('main');
    });
  }
  if (btnBackToGemini) {
    btnBackToGemini.addEventListener('click', () => switchGeminiBrowserTab('main'));
  }
  if (btnShareGdocs) {
    btnShareGdocs.addEventListener('click', () => {
      copyText(window.location.href, '🔗 Google Docs 보고서 공유 링크가 클립보드에 복사되었습니다!');
    });
  }
  if (btnDownloadWordDoc) {
    btnDownloadWordDoc.addEventListener('click', () => {
      const title = (gdocsTitleInput && gdocsTitleInput.value.trim()) || 'Deep_Research_보고서';
      const contentHtml = gdocsPageBody ? gdocsPageBody.innerHTML : geminiReportBody.innerHTML;
      const wordDoc = `
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
        <head><meta charset="utf-8"><title>${title}</title>
        <style>
          body { font-family: 'Malgun Gothic', 'Noto Sans KR', sans-serif; line-height: 1.6; color: #111; }
          table { border-collapse: collapse; width: 100%; margin: 12px 0; }
          th, td { border: 1px solid #888; padding: 8px 10px; text-align: left; }
          th { background: #f1f5f9; }
        </style>
        </head><body>${contentHtml}</body></html>
      `;
      const blob = new Blob(['\ufeff', wordDoc], { type: 'application/msword;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${title.replace(/\s+/g, '_')}.doc`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('⬇ 내 PC에 Word(.doc) 문서 파일로 다운로드되었습니다!');
    });
  }

  // Claude Code Simulator
  function stripFileEmoji(name) {
    return name.replace(/^[^\s]+\s+/, '').trim();
  }

  function openClaudeFilePreview(rawName) {
    const cleanName = stripFileEmoji(rawName);
    const c = DATA[currentDomain].claude;
    const entry = c.fileContents && c.fileContents[cleanName];
    if (!entry || !claudePreviewPane) return;

    claudePreviewPane.classList.remove('hidden');
    if (claudeSimContainer) claudeSimContainer.classList.add('preview-open');
    claudePreviewBadge.textContent = entry.badge || '파일 미리보기';
    claudePreviewTitle.textContent = cleanName;
    if (entry.type === 'html') {
      claudePreviewBody.innerHTML = entry.content;
    } else {
      claudePreviewBody.innerHTML = `<pre class="preview-code-box">${entry.content}</pre>`;
    }

    claudeFileTree.querySelectorAll('li').forEach((li) => {
      li.classList.toggle('active', li.dataset.cleanName === cleanName);
    });
  }

  if (btnCloseClaudePreview && claudePreviewPane) {
    btnCloseClaudePreview.addEventListener('click', () => {
      claudePreviewPane.classList.add('hidden');
      if (claudeSimContainer) claudeSimContainer.classList.remove('preview-open');
      claudeFileTree.querySelectorAll('li').forEach((li) => li.classList.remove('active'));
    });
  }

  function renderClaudeFileTree(highlightCleanName) {
    claudeFileTree.innerHTML = '';
    if (claudeInlineFileChips) claudeInlineFileChips.innerHTML = '';

    claudeRuntimeFiles.forEach((f) => {
      const clean = stripFileEmoji(f);
      const isNew = f.startsWith('✨') || f.startsWith('🌐');
      const li = document.createElement('li');
      li.dataset.cleanName = clean;
      li.className = 'file-tree-item';
      if (isNew) {
        li.classList.add('is-new');
      }
      if (highlightCleanName && clean === highlightCleanName) {
        li.classList.add('active');
      }
      li.innerHTML = `<span>${f}</span><span class="file-view-tag">보기</span>`;
      li.addEventListener('click', () => openClaudeFilePreview(clean));
      claudeFileTree.appendChild(li);

      if (claudeInlineFileChips) {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = `cfi-chip${isNew ? ' is-new' : ''}`;
        chip.textContent = f;
        chip.title = '클릭하면 파일 내용을 미리 봅니다';
        chip.addEventListener('click', () => openClaudeFilePreview(clean));
        claudeInlineFileChips.appendChild(chip);
      }
    });
  }

  function updateClaudeContext(delta) {
    claudeContextPct = Math.min(92, Math.max(8, claudeContextPct + delta));
    if (claudeContextMeter) {
      const leftPct = Math.max(5, 100 - claudeContextPct);
      claudeContextMeter.textContent = `Context left until auto-compact: ${leftPct}%`;
    }
  }

  let claudePendingTimer = null;

  function appendClaudeTurn(stepObj) {
    if (claudePendingTimer) {
      clearTimeout(claudePendingTimer);
      claudePendingTimer = null;
    }

    const userText = stepObj.user;
    const toolCall = stepObj.toolCall || stepObj.tool || 'Read(.)';
    const toolSub = stepObj.toolSub || 'Read completed';
    const aiText = stepObj.ai;

    const userMsg = document.createElement('div');
    userMsg.className = 'chat-msg user';
    userMsg.innerHTML = `<span class="tui-gt">&gt;</span> ${userText}`;
    claudeChatLog.appendChild(userMsg);

    // Phase 1: Authentic Claude Code TUI "* Thinking..."spinner
    const aiMsg = document.createElement('div');
    aiMsg.className = 'chat-msg ai';
    aiMsg.innerHTML = `
      <div class="tool-trace"><span class="gem-sparkle-spin">✻</span> Thinking... (esc to interrupt)</div>
    `;
    claudeChatLog.appendChild(aiMsg);
    claudeChatLog.scrollTop = claudeChatLog.scrollHeight;

    // Phase 2: Authentic Tool Call in progress: ● Read(...) / ● Write(...)
    claudePendingTimer = setTimeout(() => {
      aiMsg.innerHTML = `
        <div class="tui-tool-group">
          <div class="tui-tool-head"><span class="tui-bullet-green">●</span><span class="tui-tool-fn">${toolCall}</span></div>
          <div class="tui-tool-sub">⎿ &nbsp;Running...</div>
        </div>
      `;
      claudeChatLog.scrollTop = claudeChatLog.scrollHeight;

      // Phase 3: Complete & show authentic tree connector ⎿ + diff + ● AI response
      claudePendingTimer = setTimeout(() => {
        claudePendingTimer = null;
        const extraToolHtml = stepObj.extraToolCall
          ? `<div class="tui-tool-group">
               <div class="tui-tool-head"><span class="tui-bullet-green">●</span><span class="tui-tool-fn">${stepObj.extraToolCall}</span></div>
               <div class="tui-tool-sub">⎿ &nbsp;${stepObj.extraToolSub || 'Done'}</div>
             </div>`
          : '';
        const diffHtml =
          stepObj.diffLines && stepObj.diffLines.length
            ? `<div class="claude-diff-box">${stepObj.diffLines.map((l) => `<div class="diff-add">${l}</div>`).join('')}</div>`
            : '';
        const previewBtnHtml = stepObj.previewFile
          ? `<div class="claude-preview-trigger-row"><button type="button" class="claude-inline-preview-btn" data-preview="${stepObj.previewFile}">📄 파일 열람/미리보기 (${stepObj.previewFile})</button></div>`
          : '';

        aiMsg.innerHTML = `
          <div class="tui-block">
            <div class="tui-tool-group">
              <div class="tui-tool-head"><span class="tui-bullet-green">●</span><span class="tui-tool-fn">${toolCall}</span></div>
              <div class="tui-tool-sub">⎿ &nbsp;${toolSub}</div>
            </div>
            ${extraToolHtml}
            ${diffHtml}
            <div class="tui-answer-row">
              <span class="tui-bullet-white">●</span>
              <div class="claude-ai-answer">${aiText}${previewBtnHtml}</div>
            </div>
          </div>
        `;

        if (stepObj.newFile && !claudeRuntimeFiles.includes(stepObj.newFile)) {
          claudeRuntimeFiles.push(stepObj.newFile);
          renderClaudeFileTree(stepObj.previewFile);
        }

        if (stepObj.previewFile) {
          openClaudeFilePreview(stepObj.previewFile);
          const btn = aiMsg.querySelector('.claude-inline-preview-btn');
          if (btn) {
            btn.addEventListener('click', () => openClaudeFilePreview(stepObj.previewFile));
          }
        }

        updateClaudeContext(14);
        claudeChatLog.scrollTop = claudeChatLog.scrollHeight;
      }, 1400);
    }, 1000);
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
      sysMsg.textContent = '✓ /clear 실행됨 — 이전 대화 내역을 비우고 새 작업을 시작합니다. (Context 8%로 초기화)';
      claudeChatLog.appendChild(sysMsg);
      return;
    }

    if (cmd === '/help') {
      const userMsg = document.createElement('div');
      userMsg.className = 'chat-msg user';
      userMsg.innerHTML = `<strong>❯</strong> /help`;
      claudeChatLog.appendChild(userMsg);

      const helpMsg = document.createElement('div');
      helpMsg.className = 'chat-msg ai';
      helpMsg.innerHTML = `
        <div class="tool-trace">⏺ Claude Code 핵심 슬래시 명령어 안내</div>
        <div>
          <code>/help</code> — 사용 가능한 명령어 안내 보기<br/>
          <code>/status</code> — 현재 연결된 폴더 경로 및 AI 모델 상태 확인<br/>
          <code>/clear</code> — 이전 대화 맥락을 비우고 새 작업 시작<br/>
          <code>/compact</code> — 길어진 대화를 핵심만 남겨 압축 (토큰 절약)<br/>
          <code>Ctrl + C</code> / <code>Esc</code> — 진행 중인 작업 또는 입력 즉시 중단
        </div>
      `;
      claudeChatLog.appendChild(helpMsg);
      claudeChatLog.scrollTop = claudeChatLog.scrollHeight;
      return;
    }

    if (cmd === '/status') {
      const c = DATA[currentDomain].claude;
      const userMsg = document.createElement('div');
      userMsg.className = 'chat-msg user';
      userMsg.innerHTML = `<strong>❯</strong> /status`;
      claudeChatLog.appendChild(userMsg);

      const statMsg = document.createElement('div');
      statMsg.className = 'chat-msg ai';
      statMsg.innerHTML = `
        <div class="tool-trace">⏺ Claude Code 세션 상태 (/status)</div>
        <div>
          • <strong>작업 폴더(cwd):</strong> <code>C:\\Users\\GroupLead\\Desktop\\${c.folderName}</code><br/>
          • <strong>활성 모델:</strong> Claude Sonnet 4 (실무 문서·데이터 분석 최적화)<br/>
          • <strong>폴더 내 파일 수:</strong> ${claudeRuntimeFiles.length}개 항목 실시간 연결됨<br/>
          • <strong>보안 모드:</strong> 지정 폴더 외 접근 차단 및 파일 생성 시 승인 확인
        </div>
      `;
      claudeChatLog.appendChild(statMsg);
      claudeChatLog.scrollTop = claudeChatLog.scrollHeight;
      return;
    }

    if (cmd === '/compact') {
      const msgCount = claudeChatLog.querySelectorAll('.chat-msg.user, .chat-msg.ai').length;
      claudeContextPct = 14;
      updateClaudeContext(0);
      claudeChatLog.innerHTML = `
        <div class="chat-msg ai">
          <div class="tool-trace">⏺ /compact 대화 압축 완료</div>
          <div>이전 대화 ${msgCount}건의 핵심 맥락만 요약하여 유지했습니다. (Context 사용량이 14%로 최적화되었습니다.)</div>
        </div>
      `;
      return;
    }

    const c = DATA[currentDomain].claude;
    if (val.includes('대시보드') || cmd.includes('html')) {
      appendClaudeTurn({ ...c.steps[2], user: val });
    } else if (val.includes('보고서') || val.includes('요약') || val.includes('초안')) {
      appendClaudeTurn({ ...c.steps[1], user: val });
    } else {
      appendClaudeTurn({
        user: val,
        tool: `폴더 내 문서 탐색 및 분석: ./${c.folderName} [Read]`,
        previewFile: stripFileEmoji(c.files[0]),
        ai: `입력하신 지시(<em>"${val}"</em>)에 맞춰 현재 폴더(<code>${c.folderName}</code>)의 자료를 분석하고 작업을 완료했습니다.`
      });
    }
  }

  function triggerClaudeInterrupt() {
    if (claudePendingTimer) {
      clearTimeout(claudePendingTimer);
      claudePendingTimer = null;
    }
    claudeUserInput.value = '';
    const sysMsg = document.createElement('div');
    sysMsg.className = 'chat-msg system';
    sysMsg.innerHTML = '⏹ <strong>Interrupted (Ctrl+C / Esc)</strong> — 진행 중인 입력 또는 작업을 즉시 중단했습니다.';
    claudeChatLog.appendChild(sysMsg);
    claudeChatLog.scrollTop = claudeChatLog.scrollHeight;
  }

  btnClaudeSend.addEventListener('click', handleClaudeCustomInput);
  claudeUserInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
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
    if (claudePsCwdName) claudePsCwdName.textContent = c.folderName;
    claudeRuntimeFiles = [...c.files];
    claudeContextPct = 12;
    updateClaudeContext(0);
    if (claudePreviewPane) claudePreviewPane.classList.add('hidden');
    if (claudeSimContainer) claudeSimContainer.classList.remove('preview-open');
    renderClaudeFileTree();

    claudeChatLog.innerHTML = `
      <div class="chat-msg system">
        💡 하단 <strong>[① → ② → ③ 단계별 실행 버튼]</strong>을 클릭하거나 직접 한국어 지시를 입력해 보세요. (상단 파일 칩 클릭 시 원본 열람)
      </div>
    `;
    claudeQuickPrompts.innerHTML = '';
    c.steps.forEach((step) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'prompt-chip';
      btn.textContent = step.btn;
      btn.addEventListener('click', () => {
        btn.classList.add('done');
        appendClaudeTurn(step);
      });
      claudeQuickPrompts.appendChild(btn);
    });
  }

  if (btnClaudeResetTop) {
    btnClaudeResetTop.addEventListener('click', () => {
      renderClaude();
      showToast('Claude Code 실습 화면이 초기 상태로 되돌아갔습니다.');
    });
  }

  viewBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      claudeView = btn.dataset.claudeView;
      viewBtns.forEach((b) => b.classList.toggle('active', b === btn));
      claudeSimContainer.classList.toggle('cli-mode', claudeView === 'cli');
      claudeSimContainer.classList.toggle('app-mode', claudeView === 'app');
      if (claudeWinTabIcon) {
        claudeWinTabIcon.textContent = claudeView === 'cli' ? '❯_' : '✻';
      }
      claudeWindowTitle.textContent =
        claudeView === 'cli' ? 'Windows PowerShell — claude' : 'Claude Desktop — Claude Code';
    });
  });

  // Authentic Claude Code MCP Simulator
  function setMcpStep(step) {
    [mcpStep1, mcpStep2, mcpStep3].forEach((el, idx) => {
      if (!el) return;
      const sNum = idx + 1;
      el.classList.toggle('active', sNum === step);
      el.classList.toggle('done', sNum < step);
    });
  }

  function updateMcpSessionUI() {
    if (mcpSessionStatusBadge) {
      mcpSessionStatusBadge.textContent = mcpSessionAutoAllow
        ? '✓ 세션 전체 허용됨'
        : '매번 확인 (기본)';
      mcpSessionStatusBadge.style.color = mcpSessionAutoAllow ? '#34d399' : '';
    }
    if (mcpPermModeLabel) {
      mcpPermModeLabel.textContent = mcpSessionAutoAllow
        ? '🔓 MCP Permission: Session auto-approved (동일 세션 자동 승인 중)'
        : '🔐 MCP Permission: Ask before tool execution (보안 승인 모드)';
    }
  }

  function renderMcpServers(activeServerId) {
    if (!mcpServerList) return;
    const m = DATA[currentDomain].mcp;
    const c = DATA[currentDomain].claude;
    if (mcpPsCwdName && c) mcpPsCwdName.textContent = c.folderName;
    if (mcpConfigPathName && c) mcpConfigPathName.textContent = c.folderName;
    const servers = m.servers || [];
    mcpServerList.innerHTML = '';
    if (mcpInlineServerChips) mcpInlineServerChips.innerHTML = '';

    servers.forEach((srv, idx) => {
      const li = document.createElement('li');
      li.className = 'mcp-server-card';
      if (activeServerId && srv.id === activeServerId) {
        li.classList.add('active');
      }
      li.title = '클릭하면 이 MCP 서버를 호출하는 실무 시나리오를 실행합니다';
      li.innerHTML = `
        <div class="mcp-srv-head">
          <span class="mcp-srv-name"><span class="mcp-srv-dot"></span>${srv.name}</span>
          <span class="mcp-srv-tools">${srv.toolsCount} tools</span>
        </div>
        <div class="mcp-srv-label">${srv.label}</div>
        <div class="mcp-srv-desc">${srv.desc}</div>
      `;
      const runSrv = () => {
        const sc = (m.scenarios && m.scenarios[idx]) || (m.scenarios && m.scenarios[0]);
        if (sc) runMcpScenario(sc);
      };
      li.addEventListener('click', runSrv);
      mcpServerList.appendChild(li);

      if (mcpInlineServerChips) {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = `cfi-chip${activeServerId && srv.id === activeServerId ? ' is-new' : ''}`;
        chip.textContent = `● ${srv.name} (${srv.toolsCount} tools)`;
        chip.title = `${srv.label} — 클릭하면 조회 시나리오가 실행됩니다`;
        chip.addEventListener('click', runSrv);
        mcpInlineServerChips.appendChild(chip);
      }
    });
  }

  function openMcpConfigDrawer() {
    if (!mcpConfigPane || !mcpConfigPaneBody) return;
    const m = DATA[currentDomain].mcp;
    const c = DATA[currentDomain].claude;
    mcpConfigPane.classList.remove('hidden');
    if (mcpSimContainer) mcpSimContainer.classList.add('preview-open');
    if (mcpConfigPaneTitle) {
      mcpConfigPaneTitle.textContent = `${c ? c.folderName : ''}\\.mcp.json`;
    }
    const serverSpecsHtml = (m.servers || [])
      .map(
        (s) => `
        <div style="margin-bottom:10px;padding:9px 10px;border-radius:8px;border:1px solid rgba(148,163,184,0.25);">
          <div style="font-weight:700;color:#fb923c;">● ${s.name} — ${s.label}</div>
          <div style="font-size:0.75rem;opacity:0.85;margin-top:2px;">• 실행 방식: <code>${s.transport || 'stdio'}</code></div>
          <div style="font-size:0.75rem;opacity:0.85;">• 보안 범위: ${s.scope || s.desc}</div>
          <div style="font-size:0.75rem;opacity:0.85;">• 제공 도구: ${(s.tools || []).map((t) => `<code>${t}</code>`).join(', ')}</div>
        </div>`
      )
      .join('');
    mcpConfigPaneBody.innerHTML = `
      <div style="margin-bottom:10px;font-size:0.79rem;">
        작업 폴더의 <code>.mcp.json</code> 파일에 연결할 서버와 허용 경로(<code>READ_ONLY</code>)가 정의되어 있습니다.
      </div>
      <pre class="preview-code-box">${m.configJson || ''}</pre>
      <div style="margin:14px 0 6px;font-weight:700;font-size:0.82rem;">🔌 서버별 제공 도구(Tools) 및 권한 범위</div>
      ${serverSpecsHtml}
    `;
  }

  if (btnMcpConfigToggle) {
    btnMcpConfigToggle.addEventListener('click', () => {
      if (mcpConfigPane && !mcpConfigPane.classList.contains('hidden')) {
        mcpConfigPane.classList.add('hidden');
        if (mcpSimContainer) mcpSimContainer.classList.remove('preview-open');
      } else {
        openMcpConfigDrawer();
      }
    });
  }
  if (btnMcpConfigCmd) {
    btnMcpConfigCmd.addEventListener('click', openMcpConfigDrawer);
  }
  if (btnCloseMcpConfig && mcpConfigPane) {
    btnCloseMcpConfig.addEventListener('click', () => {
      mcpConfigPane.classList.add('hidden');
      if (mcpSimContainer) mcpSimContainer.classList.remove('preview-open');
    });
  }

  function renderMcpQuickPrompts() {
    if (!mcpQuickPrompts) return;
    const m = DATA[currentDomain].mcp;
    mcpQuickPrompts.innerHTML = '';
    (m.scenarios || []).forEach((sc) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'prompt-chip';
      btn.textContent = sc.btn;
      btn.addEventListener('click', () => {
        btn.classList.add('done');
        runMcpScenario(sc);
      });
      mcpQuickPrompts.appendChild(btn);
    });
  }

  function showMcpStatusCommand() {
    const m = DATA[currentDomain].mcp;
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-msg user';
    userMsg.innerHTML = `<span class="tui-gt">&gt;</span> /mcp`;
    mcpLog.appendChild(userMsg);

    const statusMsg = document.createElement('div');
    statusMsg.className = 'chat-msg ai';
    const srvBlocks = (m.servers || [])
      .map(
        (s) => `
        <div class="tui-mcp-srv-block">
          <div><strong style="color:#4ade80;">● ${s.name}</strong> — connected (${s.label})</div>
          <div style="color:#9ca3af;font-size:0.75rem;padding-left:14px;">command: ${s.transport || 'stdio'} | scope: ${s.scope || 'read-only'}</div>
          <div class="tui-mcp-tools-list">
            ${(s.tools || []).map((t) => `<span class="tui-tool-tag">${t}()</span>`).join('')}
          </div>
        </div>`
      )
      .join('');
    statusMsg.innerHTML = `
      <div class="tui-mcp-panel">
        <div class="tui-mcp-title">Manage MCP servers (3 connected)</div>
        ${srvBlocks}
      </div>
    `;
    mcpLog.appendChild(statusMsg);
    mcpLog.scrollTop = mcpLog.scrollHeight;
  }

  function updateMcpPermHighlight() {
    if (!activeMcpModalEl) return;
    const btns = activeMcpModalEl.querySelectorAll('[data-perm-choice]');
    btns.forEach((btn, idx) => {
      const isSel = idx === activeMcpPermIndex;
      btn.classList.toggle('kb-selected', isSel);
      const rawLabel = btn.getAttribute('data-raw-label') || btn.textContent.replace(/^❯\s*|^\s+/, '');
      btn.setAttribute('data-raw-label', rawLabel);
      btn.innerHTML = `${isSel ? '❯ ' : '&nbsp;&nbsp;'}${rawLabel}`;
    });
  }

  function runMcpScenario(sc) {
    if (mcpPendingTimer) {
      clearTimeout(mcpPendingTimer);
      mcpPendingTimer = null;
    }
    activeMcpPermHandler = null;
    activeMcpModalEl = null;
    renderMcpServers(sc.server);
    setMcpStep(1);

    const userMsg = document.createElement('div');
    userMsg.className = 'chat-msg user';
    userMsg.innerHTML = `<span class="tui-gt">&gt;</span> ${sc.user}`;
    mcpLog.appendChild(userMsg);

    const aiMsg = document.createElement('div');
    aiMsg.className = 'chat-msg ai';
    const tuiToolHeader = `${sc.server} - ${sc.tool} (MCP)`;
    aiMsg.innerHTML = `
      <div class="tool-trace"><span class="gem-sparkle-spin">✻</span> Thinking... (esc to interrupt)</div>
    `;
    mcpLog.appendChild(aiMsg);
    mcpLog.scrollTop = mcpLog.scrollHeight;

    const finishMcpTurn = (secondToolHtml) => {
      setMcpStep(3);
      aiMsg.innerHTML = `
        <div class="tui-block">
          <div class="tui-tool-group">
            <div class="tui-tool-head"><span class="tui-bullet-green">●</span><span class="tui-tool-fn">${tuiToolHeader}</span></div>
            <div class="tui-tool-sub">⎿ &nbsp;${sc.args}</div>
          </div>
          <div class="mcp-raw-output">${sc.rawResult}</div>
          ${secondToolHtml || ''}
          <div class="tui-answer-row">
            <span class="tui-bullet-white">●</span>
            <div class="claude-ai-answer">${sc.answer}</div>
          </div>
        </div>
      `;
      mcpLog.scrollTop = mcpLog.scrollHeight;
    };

    const executeApprovedTool = (approvalLabel) => {
      activeMcpPermHandler = null;
      activeMcpModalEl = null;
      aiMsg.innerHTML = `
        <div class="tui-tool-group">
          <div class="tui-tool-head"><span class="tui-bullet-green">●</span><span class="tui-tool-fn">${tuiToolHeader}</span></div>
          <div class="tui-tool-sub">⎿ &nbsp;${approvalLabel} — Running MCP tool...</div>
        </div>
      `;
      mcpLog.scrollTop = mcpLog.scrollHeight;

      mcpPendingTimer = setTimeout(() => {
        mcpPendingTimer = null;

        // If scenario has a chained 2nd MCP server call (Scenario 4), run it sequentially!
        if (sc.secondCall) {
          const sc2 = sc.secondCall;
          const tuiTool2Header = `${sc2.server} - ${sc2.tool} (MCP)`;
          renderMcpServers(sc2.server);
          aiMsg.innerHTML = `
            <div class="tui-block">
              <div class="tui-tool-group">
                <div class="tui-tool-head"><span class="tui-bullet-green">●</span><span class="tui-tool-fn">${tuiToolHeader}</span></div>
                <div class="tui-tool-sub">⎿ &nbsp;${sc.args}</div>
              </div>
              <div class="mcp-raw-output">${sc.rawResult}</div>
              <div class="tui-tool-group">
                <div class="tui-tool-head"><span class="tui-bullet-green">●</span><span class="tui-tool-fn">${tuiTool2Header}</span></div>
                <div class="tui-tool-sub">⎿ &nbsp;연속 교차 조회 실행 중 (${sc2.args})...</div>
              </div>
            </div>
          `;
          mcpLog.scrollTop = mcpLog.scrollHeight;

          mcpPendingTimer = setTimeout(() => {
            mcpPendingTimer = null;
            const secondHtml = `
              <div class="tui-tool-group">
                <div class="tui-tool-head"><span class="tui-bullet-green">●</span><span class="tui-tool-fn">${tuiTool2Header}</span></div>
                <div class="tui-tool-sub">⎿ &nbsp;${sc2.args}</div>
              </div>
              <div class="mcp-raw-output">${sc2.rawResult}</div>
            `;
            finishMcpTurn(secondHtml);
          }, 1500);
          return;
        }

        finishMcpTurn('');
      }, 1300);
    };

    const rejectTool = () => {
      activeMcpPermHandler = null;
      activeMcpModalEl = null;
      setMcpStep(1);
      aiMsg.innerHTML = `
        <div class="tui-tool-group">
          <div class="tui-tool-head"><span style="color:#f87171;margin-right:6px;">●</span><span class="tui-tool-fn">${tuiToolHeader}</span></div>
          <div class="tui-tool-sub" style="color:#f87171;">⎿ &nbsp;User rejected tool use (3. No) — 외부 데이터 접근이 취소되었습니다.</div>
        </div>
      `;
      mcpLog.scrollTop = mcpLog.scrollHeight;
      showToast('보안 승인 거절(3. No)을 선택하여 데이터 접근이 차단되었습니다.');
    };

    mcpPendingTimer = setTimeout(() => {
      mcpPendingTimer = null;

      // If session auto-allow was chosen earlier, skip prompt and run immediately!
      if (mcpSessionAutoAllow) {
        setMcpStep(2);
        executeApprovedTool('Session auto-approved (allow all)');
        return;
      }

      setMcpStep(2);
      activeMcpPermIndex = 0;
      aiMsg.innerHTML = `
        <div class="tui-tool-group">
          <div class="tui-tool-head"><span class="tui-bullet-green">●</span><span class="tui-tool-fn">${tuiToolHeader}</span></div>
        </div>
        <div class="claude-perm-modal">
          <div class="perm-modal-header">
            <span>Tool use</span>
            <span>MCP Server: ${sc.server} (↑/↓ 방향키 또는 마우스로 선택)</span>
          </div>
          <div class="perm-tool-spec">
            <div>&nbsp;&nbsp;<strong>${sc.server} - ${sc.tool} (MCP)</strong>(${sc.args})</div>
            <div style="color:#9ca3af;margin-top:4px;">&nbsp;&nbsp;${sc.permTitle}</div>
          </div>
          <div class="perm-question">Do you want to proceed?</div>
          <div class="mcp-perm-options">
            <button type="button" class="mcp-opt-btn kb-selected" data-perm-choice="1" data-raw-label="1. Yes (이번 작업 실행 승인)">❯ 1. Yes (이번 작업 실행 승인)</button>
            <button type="button" class="mcp-opt-btn" data-perm-choice="2" data-raw-label="2. Yes, and don't ask again for ${sc.server}:${sc.tool} commands in this project (세션 동안 자동 허용)">&nbsp;&nbsp;2. Yes, and don't ask again for ${sc.server}:${sc.tool} commands in this project (세션 동안 자동 허용)</button>
            <button type="button" class="mcp-opt-btn" data-perm-choice="3" data-raw-label="3. No, and tell Claude what to do differently (esc · 거절 및 취소)">&nbsp;&nbsp;3. No, and tell Claude what to do differently (esc · 거절 및 취소)</button>
          </div>
        </div>
      `;
      mcpLog.scrollTop = mcpLog.scrollHeight;
      activeMcpModalEl = aiMsg.querySelector('.claude-perm-modal');

      const handleChoice = (choice) => {
        if (choice === '1') {
          executeApprovedTool('Approved (1. Yes)');
        } else if (choice === '2') {
          mcpSessionAutoAllow = true;
          updateMcpSessionUI();
          showToast('세션 자동 허용(2. Yes, don\'t ask again)이 켜졌습니다. 다음 시나리오부터는 승인 창 없이 바로 실행됩니다!');
          executeApprovedTool('Approved for session (2. Yes, allow all)');
        } else if (choice === '3') {
          rejectTool();
        }
      };

      activeMcpPermHandler = handleChoice;
      aiMsg.querySelectorAll('[data-perm-choice]').forEach((btn, idx) => {
        btn.addEventListener('mouseenter', () => {
          activeMcpPermIndex = idx;
          updateMcpPermHighlight();
        });
        btn.addEventListener('click', () => handleChoice(btn.dataset.permChoice));
      });
    }, 800);
  }

  function handleMcpCustomInput() {
    const val = (mcpUserInput ? mcpUserInput.value : '').trim();
    const m = DATA[currentDomain].mcp;

    // If user clicked "실행 ↵" with empty input, run the primary scenario right away
    if (!val) {
      if (m.scenarios && m.scenarios[0]) {
        runMcpScenario(m.scenarios[0]);
      }
      return;
    }

    if (mcpUserInput) mcpUserInput.value = '';
    const low = val.toLowerCase();

    if (low === '/clear') {
      resetMcp();
      showToast('MCP 대화 내역이 초기화되었습니다.');
      return;
    }

    if (low === '/mcp' || low === '/status') {
      showMcpStatusCommand();
      return;
    }

    if (low === '/config' || low === '.mcp.json') {
      openMcpConfigDrawer();
      return;
    }

    // Match user prompt to closest scenario or create a dynamic one
    const scenarios = m.scenarios || [];
    let matched = scenarios[0];
    if (val.includes('복합') || val.includes('품의') || (val.includes('폴더') && val.includes('예산'))) {
      matched = scenarios[3] || scenarios[0];
    } else if (val.includes('법령') || val.includes('KEC') || val.includes('규정') || val.includes('매뉴얼') || val.includes('외주')) {
      matched = scenarios[1] || scenarios[0];
    } else if (val.includes('예산') || val.includes('DB') || val.includes('ERP') || val.includes('노후')) {
      matched = scenarios[2] || scenarios[0];
    }

    runMcpScenario({
      ...matched,
      user: val
    });
  }

  function resetMcp() {
    if (mcpPendingTimer) {
      clearTimeout(mcpPendingTimer);
      mcpPendingTimer = null;
    }
    activeMcpPermHandler = null;
    activeMcpModalEl = null;
    mcpSessionAutoAllow = false;
    if (mcpConfigPane) mcpConfigPane.classList.add('hidden');
    if (mcpSimContainer) mcpSimContainer.classList.remove('preview-open');
    updateMcpSessionUI();
    renderMcpServers();
    renderMcpQuickPrompts();
    setMcpStep(1);
    if (mcpUserInput) mcpUserInput.value = '';
    mcpLog.innerHTML = `
      <div class="chat-msg system">
        🔌 하단 <strong>[①~③ 단일 서버 조회]</strong> 또는 <strong>[④ 실전 복합 교차 분석]</strong> 버튼을 눌러보세요. 승인 창이 뜨면 키보드 <kbd>↑</kbd><kbd>↓</kbd> 방향키+<kbd>Enter</kbd>(또는 숫자 <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd>)로 실제 터미널처럼 조작할 수 있습니다.
      </div>
    `;
  }

  if (btnMcpAsk) {
    btnMcpAsk.addEventListener('click', handleMcpCustomInput);
  }
  if (btnMcpSlashCmd) {
    btnMcpSlashCmd.addEventListener('click', showMcpStatusCommand);
  }
  if (mcpUserInput) {
    mcpUserInput.addEventListener('keydown', (e) => {
      if (activeMcpPermHandler && !mcpUserInput.value.trim()) {
        if (['1', '2', '3'].includes(e.key)) {
          e.preventDefault();
          activeMcpPermHandler(e.key);
          return;
        }
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          activeMcpPermIndex = (activeMcpPermIndex + 1) % 3;
          updateMcpPermHighlight();
          return;
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          activeMcpPermIndex = (activeMcpPermIndex + 2) % 3;
          updateMcpPermHighlight();
          return;
        }
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          activeMcpPermHandler(String(activeMcpPermIndex + 1));
          return;
        }
      }
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleMcpCustomInput();
      } else if (e.key === 'Escape' && activeMcpPermHandler) {
        e.preventDefault();
        activeMcpPermHandler('3');
      }
    });
  }

  // Global keyboard shortcut ↑/↓/Enter & 1/2/3/Esc when MCP permission modal is waiting
  document.addEventListener('keydown', (e) => {
    if (!activeMcpPermHandler) return;
    const tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (['1', '2', '3'].includes(e.key)) {
      e.preventDefault();
      activeMcpPermHandler(e.key);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeMcpPermIndex = (activeMcpPermIndex + 1) % 3;
      updateMcpPermHighlight();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeMcpPermIndex = (activeMcpPermIndex + 2) % 3;
      updateMcpPermHighlight();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      activeMcpPermHandler(String(activeMcpPermIndex + 1));
    } else if (e.key === 'Escape') {
      e.preventDefault();
      activeMcpPermHandler('3');
    }
  });

  mcpViewBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      mcpView = btn.dataset.mcpView;
      mcpViewBtns.forEach((b) => b.classList.toggle('active', b === btn));
      if (mcpSimContainer) {
        mcpSimContainer.classList.toggle('cli-mode', mcpView === 'cli');
        mcpSimContainer.classList.toggle('app-mode', mcpView === 'app');
      }
      if (mcpWinTabIcon) {
        mcpWinTabIcon.textContent = mcpView === 'cli' ? '❯_' : '✻';
      }
      if (mcpWindowTitle) {
        mcpWindowTitle.textContent =
          mcpView === 'cli'
            ? 'Windows PowerShell — claude (MCP Servers: 3 connected)'
            : 'Claude Desktop — Claude Code (MCP Servers: 3 connected)';
      }
    });
  });

  btnMcpReset.addEventListener('click', () => {
    resetMcp();
    showToast('MCP 시뮬레이터와 보안 승인 설정이 초기 상태로 재설정되었습니다.');
  });

  // Dynamic Dashboard & Claude Code Dashboard Builder Simulator
  function applyDashBuildStageUI() {
    const c = DATA[currentDomain].claude;
    if (dashPsCwdName && c) dashPsCwdName.textContent = c.folderName;
    if (dashBrowserTitle && c) {
      dashBrowserTitle.textContent = `C:\\Users\\GroupLead\\Desktop\\${c.folderName}\\index.html — 브라우저 실시간 미리보기`;
    }

    if (dashBuildStep1 && dashBuildStep2) {
      dashBuildStep1.classList.toggle('active', dashBuildStage === 1);
      dashBuildStep1.classList.toggle('done', dashBuildStage > 1);
      dashBuildStep2.classList.toggle('active', dashBuildStage === 2);
    }

    if (dashBuildStage === 0) {
      if (dashEmptyState) dashEmptyState.classList.remove('hidden');
      if (dashAppContainer) dashAppContainer.classList.add('hidden');
      if (dashVersionBadge) {
        dashVersionBadge.textContent = '○ 파일 미생성 (생성 대기 중)';
        dashVersionBadge.classList.remove('live');
      }
      return;
    }

    if (dashEmptyState) dashEmptyState.classList.add('hidden');
    if (dashAppContainer) {
      dashAppContainer.classList.remove('hidden');
      dashAppContainer.classList.toggle('stage-2', dashBuildStage >= 2);
    }

    const isStage2 = dashBuildStage >= 2;
    if (dashVersionBadge) {
      dashVersionBadge.classList.add('live');
      dashVersionBadge.textContent = isStage2
        ? '● v2.0 임원 보고용 대시보드 (고도화 완료)'
        : '● v1.0 기본 동적 대시보드 동작 중';
    }
    if (dashStageTag) {
      dashStageTag.textContent = isStage2
        ? '✨ 2단계 임원 보고용 업그레이드 완료 (v2.0 · 다크 네이비 테마 & 이슈 필터)'
        : '1단계 기본 동적 대시보드 생성 완료 (v1.0)';
    }
    if (btnDashAlertFilter) {
      btnDashAlertFilter.classList.toggle('hidden', !isStage2);
      btnDashAlertFilter.textContent =
        currentDomain === 'electrical'
          ? dashAlertOnly
            ? '⚠️ 전체 설비 보기'
            : '⚠️ 주의/점검필요 설비만 보기'
          : dashAlertOnly
            ? '🚨 전체 과제 보기'
            : '🚨 중점 관리 이슈만 보기';
      btnDashAlertFilter.classList.toggle('active', dashAlertOnly);
      btnDashAlertFilter.setAttribute('aria-pressed', String(dashAlertOnly));
    }
    if (btnDashExportDemo) {
      btnDashExportDemo.classList.toggle('hidden', !isStage2);
    }
  }

  function runDashBuildStep(stepObj) {
    if (!stepObj || !dashBuilderLog) return;
    if (dashBuildTimer) {
      clearTimeout(dashBuildTimer);
      dashBuildTimer = null;
    }

    const userMsg = document.createElement('div');
    userMsg.className = 'chat-msg user';
    userMsg.innerHTML = `<span class="tui-gt">&gt;</span> ${stepObj.prompt}`;
    dashBuilderLog.appendChild(userMsg);

    const aiMsg = document.createElement('div');
    aiMsg.className = 'chat-msg ai';
    aiMsg.innerHTML = `
      <div class="tool-trace"><span class="gem-sparkle-spin">✻</span> Thinking... 데이터 구조 파악 및 대시보드 HTML/JS 코드 설계 중</div>
    `;
    dashBuilderLog.appendChild(aiMsg);
    dashBuilderLog.scrollTop = dashBuilderLog.scrollHeight;

    if (dashBuildingOverlay) {
      dashBuildingOverlay.classList.remove('hidden');
      if (dashBuildingText) {
        dashBuildingText.textContent =
          stepObj.stage === 2
            ? 'Claude Code가 index.html에 다크 네이비 테마와 주의 항목 필터를 추가하는 중...'
            : 'Claude Code가 폴더 내 데이터를 읽어 index.html 동적 대시보드를 생성하는 중...';
      }
    }

    dashBuildTimer = setTimeout(() => {
      aiMsg.innerHTML = `
        <div class="tui-block">
          <div class="tui-tool-group">
            <div class="tui-tool-head"><span class="tui-bullet-green">●</span><span class="tui-tool-fn">${stepObj.readCall}</span></div>
            <div class="tui-tool-sub">⎿ &nbsp;${stepObj.readSub}</div>
          </div>
          <div class="tui-tool-group">
            <div class="tui-tool-head"><span class="tui-bullet-green">●</span><span class="tui-tool-fn">${stepObj.writeCall}</span></div>
            <div class="tui-tool-sub">⎿ &nbsp;Writing HTML/CSS/SVG chart code...</div>
          </div>
        </div>
      `;
      dashBuilderLog.scrollTop = dashBuilderLog.scrollHeight;

      dashBuildTimer = setTimeout(() => {
        dashBuildTimer = null;
        if (dashBuildingOverlay) dashBuildingOverlay.classList.add('hidden');
        dashBuildStage = stepObj.stage || 1;
        if (dashBuildStage < 2) dashAlertOnly = false;

        const diffHtml = (stepObj.diffLines || [])
          .map((l) => `<div class="diff-add">${l}</div>`)
          .join('');
        aiMsg.innerHTML = `
          <div class="tui-block">
            <div class="tui-tool-group">
              <div class="tui-tool-head"><span class="tui-bullet-green">●</span><span class="tui-tool-fn">${stepObj.readCall}</span></div>
              <div class="tui-tool-sub">⎿ &nbsp;${stepObj.readSub}</div>
            </div>
            <div class="tui-tool-group">
              <div class="tui-tool-head"><span class="tui-bullet-green">●</span><span class="tui-tool-fn">${stepObj.writeCall}</span></div>
              <div class="tui-tool-sub">⎿ &nbsp;${stepObj.writeSub}</div>
            </div>
            <div class="claude-diff-box">${diffHtml}</div>
            <div class="tui-answer-row">
              <span class="tui-bullet-white">●</span>
              <div class="claude-ai-answer">${stepObj.ai}</div>
            </div>
          </div>
        `;
        dashBuilderLog.scrollTop = dashBuilderLog.scrollHeight;
        applyDashBuildStageUI();
        renderDashboardContent();
        showToast(
          dashBuildStage === 2
            ? '✨ 2단계 임원 보고용 대시보드(v2.0)로 업그레이드되었습니다!'
            : '📊 1단계 기본 동적 대시보드(index.html)가 생성되었습니다!'
        );
      }, 1400);
    }, 1000);
  }

  function renderDashBuilderTerminal(initialStage = 1) {
    const d = DATA[currentDomain].dashboard;
    dashBuildStage = initialStage;
    dashAlertOnly = false;
    if (dashBuildingOverlay) dashBuildingOverlay.classList.add('hidden');

    if (dashBuilderLog) {
      if (initialStage === 0) {
        dashBuilderLog.innerHTML = `
          <div class="chat-msg system">
            🛠️ 현재 <code>index.html</code> 생성 전입니다. 아래 <strong>[① 1단계 제작 지시]</strong> 버튼을 누르거나 프롬프트를 입력해 대시보드를 생성해 보세요.
          </div>
        `;
      } else {
        const s1 = (d.buildSteps && d.buildSteps[0]) || null;
        dashBuilderLog.innerHTML = s1
          ? `
            <div class="chat-msg user"><span class="tui-gt">&gt;</span> ${s1.prompt}</div>
            <div class="chat-msg ai">
              <div class="tui-block">
                <div class="tui-tool-group">
                  <div class="tui-tool-head"><span class="tui-bullet-green">●</span><span class="tui-tool-fn">${s1.readCall}</span></div>
                  <div class="tui-tool-sub">⎿ &nbsp;${s1.readSub}</div>
                </div>
                <div class="tui-tool-group">
                  <div class="tui-tool-head"><span class="tui-bullet-green">●</span><span class="tui-tool-fn">${s1.writeCall}</span></div>
                  <div class="tui-tool-sub">⎿ &nbsp;${s1.writeSub}</div>
                </div>
                <div class="tui-answer-row">
                  <span class="tui-bullet-white">●</span>
                  <div class="claude-ai-answer">${s1.ai} <br/><span style="color:#93c5fd;">💡 이어서 하단의 <strong>[② 2단계 고도화 지시]</strong>를 눌러 임원 보고용 기능(다크 네이비 테마·주의 항목 필터·PDF 인쇄 버튼)을 추가해 보세요!</span></div>
                </div>
              </div>
            </div>
          `
          : '';
      }
    }

    if (dashQuickPrompts) {
      dashQuickPrompts.innerHTML = '';
      (d.buildSteps || []).forEach((st) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `prompt-chip${st.stage <= initialStage ? ' done' : ''}`;
        btn.textContent = st.btn;
        btn.addEventListener('click', () => {
          btn.classList.add('done');
          runDashBuildStep(st);
        });
        dashQuickPrompts.appendChild(btn);
      });
    }

    applyDashBuildStageUI();
  }

  function handleDashCustomInput() {
    const val = (dashUserInput ? dashUserInput.value : '').trim();
    const d = DATA[currentDomain].dashboard;
    const steps = d.buildSteps || [];
    if (!val) {
      const nextStep = dashBuildStage < 1 ? steps[0] : steps[1] || steps[0];
      if (nextStep) runDashBuildStep(nextStep);
      return;
    }
    if (dashUserInput) dashUserInput.value = '';
    const low = val.toLowerCase();
    if (low === '/clear' || low === '초기화') {
      renderDashBuilderTerminal(0);
      showToast('대시보드가 생성 전(빈 상태)으로 초기화되었습니다.');
      return;
    }

    const isUpgrade =
      val.includes('2단계') ||
      val.includes('업그레이드') ||
      val.includes('네이비') ||
      val.includes('임원') ||
      val.includes('주의') ||
      val.includes('이슈') ||
      val.includes('인쇄') ||
      val.includes('pdf') ||
      dashBuildStage >= 1;

    const targetStep = isUpgrade ? steps[1] || steps[0] : steps[0];
    if (targetStep) {
      runDashBuildStep({
        ...targetStep,
        prompt: val
      });
    }
  }

  if (btnDashPromptSend) {
    btnDashPromptSend.addEventListener('click', handleDashCustomInput);
  }
  if (dashUserInput) {
    dashUserInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleDashCustomInput();
      }
    });
  }
  if (btnDashBuilderReset) {
    btnDashBuilderReset.addEventListener('click', () => {
      renderDashBuilderTerminal(0);
      showToast('빈 상태부터 대시보드 생성 과정을 직접 체험해 보세요!');
    });
  }
  if (btnDashEmptyStart) {
    btnDashEmptyStart.addEventListener('click', () => {
      const d = DATA[currentDomain].dashboard;
      if (d.buildSteps && d.buildSteps[0]) {
        runDashBuildStep(d.buildSteps[0]);
      }
    });
  }
  if (btnDashAlertFilter) {
    btnDashAlertFilter.addEventListener('click', () => {
      dashAlertOnly = !dashAlertOnly;
      applyDashBuildStageUI();
      renderDashboardContent();
      showToast(
        dashAlertOnly
          ? '⚠️ 주의/점검필요 항목만 필터링하여 표시합니다.'
          : '전체 항목을 표시합니다.'
      );
    });
  }

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
    renderDashBuilderTerminal(1);
    renderDashboardContent();
    renderTemplates(dashboardTemplates, d.templates, (idx, item) => {
      const steps = d.buildSteps || [];
      const chosen = steps[idx] || steps[0];
      if (chosen) {
        if (dashBuilderLog) {
          dashBuilderLog.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        runDashBuildStep({
          ...chosen,
          prompt: item.text
        });
      }
    });
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
      svgParts += `<line x1="40" y1="${y}" x2="${svgW - 10}" y2="${y}" stroke="#cbd5e1" stroke-dasharray="3 3" />`;
      svgParts += `<text x="6" y="${y + 4}" font-size="12" font-weight="600" fill="#334155">${tick}%</text>`;
    });

    bars.forEach((b, i) => {
      const x = 50 + i * (barW + gap);
      const h = (b.value / maxVal) * 145;
      const y = 180 - h;
      svgParts += `
        <g class="chart-bar-group" data-bar-name="${b.name}" data-bar-val="${b.value}">
          <rect x="${x}" y="${y}" width="${barW}" height="${h}" rx="6" fill="${b.color}">
            <title>${b.name}: ${b.value}% (클릭하여 상세 보기)</title>
          </rect>
          <text x="${x + barW / 2}" y="${y - 6}" text-anchor="middle" font-size="13" font-weight="800" fill="#0f172a">${b.value}%</text>
          <text x="${x + barW / 2}" y="204" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1e293b">${b.name}</text>
        </g>
      `;
    });
    svgParts += `</svg>`;
    dashSvgChart.innerHTML = svgParts;

    // Table (supports Stage 2 Alert-Only Filter!)
    const filteredRows = dashAlertOnly
      ? viewData.rows.filter((r) => r.cls !== 'ok')
      : viewData.rows;
    const rowsHtml = filteredRows.length
      ? filteredRows
          .map(
            (r) => `
          <tr data-row-name="${r.name}">
            <td><strong>${r.name}</strong></td>
            <td>${r.metric}</td>
            <td><span class="status-pill ${r.cls}">${r.status}</span></td>
          </tr>
        `
          )
          .join('')
      : `<tr><td colspan="3" style="text-align:center;color:#64748b;padding:18px;">해당 조건에서 주의/점검필요 항목이 없습니다 (모두 정상).</td></tr>`;

    dashTable.innerHTML = `
      <thead>
        <tr>
          <th>항목</th>
          <th>핵심 수치</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        ${rowsHtml}
      </tbody>
    `;

    // Interactive chart bar click highlights matching table row
    dashSvgChart.querySelectorAll('.chart-bar-group').forEach((grp) => {
      grp.addEventListener('click', () => {
        const name = grp.getAttribute('data-bar-name') || '';
        const val = grp.getAttribute('data-bar-val') || '';
        const prefix = name.split(' ')[0];
        let matched = false;
        dashTable.querySelectorAll('tbody tr').forEach((tr) => {
          const rName = tr.getAttribute('data-row-name') || '';
          const isMatch = prefix && rName.includes(prefix);
          tr.classList.toggle('row-highlight', Boolean(isMatch));
          if (isMatch) matched = true;
        });
        showToast(
          matched
            ? `📊 [${name} · ${val}%] 관련 항목이 우측 표에서 강조되었습니다.`
            : `📊 [${name}] 현재 수치: ${val}%`
        );
      });
    });
  }

  dashPeriodFilter.addEventListener('change', () => {
    renderDashboardContent();
    showToast(`대시보드가 '${dashPeriodFilter.options[dashPeriodFilter.selectedIndex].text}' 데이터로 갱신되었습니다.`);
  });
  dashGroupFilter.addEventListener('change', () => {
    renderDashboardContent();
    showToast(`분석 대상이 '${dashGroupFilter.options[dashGroupFilter.selectedIndex].text}'(으)로 필터링되었습니다.`);
  });

  if (btnDashExportDemo) {
    btnDashExportDemo.addEventListener('click', () => {
      showToast('🖨️ 실제 과제물에 이 버튼을 추가하면 브라우저 인쇄(Ctrl+P)를 통해 임원 보고용 PDF로 즉시 저장됩니다!');
    });
  }

  // Glossary Search Filter
  if (glossarySearchInput && glossaryGrid) {
    glossarySearchInput.addEventListener('input', () => {
      const q = glossarySearchInput.value.trim().toLowerCase();
      const cards = glossaryGrid.querySelectorAll('.glossary-card');
      cards.forEach((card) => {
        const txt = card.textContent.toLowerCase();
        card.classList.toggle('hidden', Boolean(q && !txt.includes(q)));
      });
    });
  }

  // Domain Switching
  function setDomain(domain, notify = false) {
    currentDomain = domain;
    domainBtns.forEach((b) => {
      const isAct = b.dataset.domain === domain;
      b.classList.toggle('active', isAct);
      b.setAttribute('aria-pressed', String(isAct));
    });
    if (headerDomainPill) {
      headerDomainPill.textContent =
        domain === 'electrical' ? '⚡ 전기기술팀 기준' : '📊 일반 부서장 기준';
    }
    renderGemini();
    renderClaude();
    resetMcp();
    renderDashboardFilters();
    if (notify) showToast(`${DATA[domain].label}로 모든 예시와 시뮬레이터가 전환되었습니다.`);
  }

  domainBtns.forEach((btn) => {
    btn.addEventListener('click', () => setDomain(btn.dataset.domain, true));
  });

  // Scroll Spy for Sidebar, Top Progress Bar & Back-to-Top
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    let currentId = 'module-0';
    sections.forEach((sec) => {
      const top = sec.getBoundingClientRect().top;
      if (top <= 150) currentId = sec.id;
    });
    navItems.forEach((item) => {
      const isCurrent = item.dataset.section === currentId;
      item.classList.toggle('active', isCurrent);
      if (isCurrent) {
        item.setAttribute('aria-current', 'true');
      } else {
        item.removeAttribute('aria-current');
      }
    });
    backToTopBtn.classList.toggle('show', window.scrollY > 400);

    if (topScrollFill) {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? Math.min(100, Math.max(0, (window.scrollY / docH) * 100)) : 0;
      topScrollFill.style.width = `${pct}%`;
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Init
  setDomain('electrical');
})();
