window.AI_STUDY_DATA = {
  electrical: {
    label: '⚡ 전기기술팀 예시',
    gemini: {
      prompt:
        '[목적] 우리 사업장 고압 수변전 설비의 안전성 강화 및 점검 효율화\n[조사 내용] 최근 2년간 국내외 변압기·차단기 예지보전(PdM) 기술 사례와 한국전기설비규정(KEC) 주요 변경점을 조사해 줘.\n[형식] 부서장 보고용으로 핵심 요약 5줄, 도입 난이도별 비교표를 포함해 작성해 줘.',
      planTitle: '수변전 예지보전 및 KEC 동향',
      plan: [
        '최근 2년간(2024년 말~2026년) 국내외 고압 변압기 예지보전(PdM) 최신 기술 동향 및 적용 사례 조사 (DGA, 부분방전, 열화상, AI 잔존수명 예측)',
        '2025~2026년 전기설비기술기준·한국전기설비규정(KEC) 개정 핵심 사항 및 현장 안전 규제 확인',
        '도입 난이도 및 투자 효율별 단계적 적용 전략 비교표 작성'
      ],
      siteChips: [
        { domain: 'motir.go.kr', title: '전기설비기술기준 개정' },
        { domain: 'law.go.kr', title: '한국전기설비규정 > 행...' },
        { domain: 'keea.or.kr', title: '원격감시 및 제어 기준' },
        { domain: 'kess.kr', title: '자료실 - 한국전기안전...' },
        { domain: 'electimes...', title: '전력설비 진단, 한전...' },
        { domain: 'hankyung...', title: '글로벌 전력업계 PdM...' }
      ],
      sources: [
        { title: '전기설비기술기준 일부개정 고시(산업통상자원부 고시)', domain: 'www.motir.go.kr' },
        { title: '한국전기설비규정 > 행정규칙 - 국가법령정보센터', domain: 'www.law.go.kr' },
        { title: '한국전기설비규정 일부개정 공고', domain: 'mcee.go.kr' }
      ],
      reportHtml: `
        <h5>고압 수변전 설비 예지보전(PdM) 사례 및 KEC 개정 대응 보고</h5>
        <p><strong>핵심 요약</strong></p>
        <ul>
          <li><strong>1. 예지보전 고도화:</strong> 온라인 유중가스(DGA)·부분방전(PD)·광온도 센서와 AI 기반 잔존수명(RUL) 예측으로 고장 비용 절감 사례가 확산 중입니다. <span class="citation">[1]</span></li>
          <li><strong>2. KEC 안전규제 강화:</strong> 고압 이상 구리 접지도체 최소 단면적 상향(16 mm² 이상), 특고압 폐쇄 배전반 도어 개방 시 활선 경보장치 의무화 등이 반영되었습니다. <span class="citation">[2]</span></li>
          <li><strong>3. 단계적 도입 전략:</strong> 1단계 무정전 열화상·외부 PD 센서(난이도 하) → 2단계 차단기 코일전류 감시(난이도 중) → 3단계 핵심 노후 변압기 온라인 DGA(난이도 상) 순으로 적용을 권장합니다. <span class="citation">[3]</span></li>
        </ul>
      `,
      templates: [
        {
          title: '설비 신기술 & 안전규정 동향 조사',
          text: '[목적] 우리 사업장 고압 수변전 설비의 안전성 강화 및 점검 효율화\n[조사 내용] 최근 2년간 국내외 변압기·차단기 예지보전(PdM) 기술 사례와 한국전기설비규정(KEC) 주요 변경점을 조사해 줘.\n[형식] 부서장 보고용으로 핵심 요약 5줄, 도입 난이도별 비교표를 포함해 작성해 줘.'
        },
        {
          title: '전력 품질·에너지 절감 벤치마킹',
          text: '[목적] 공장 내 피크전력 관리 및 역률 개선 방안 도출\n[조사 내용] 제조 사업장의 ESS 연계 및 AI 피크제어 성공 사례 3가지를 찾아 투자 회수 기간과 주의사항을 정리해 줘.'
        }
      ]
    },
    claude: {
      folderName: '전기기술팀_점검자료',
      files: [
        '📄 11월_변전실_점검일지.csv',
        '📄 2026_설비보수_예산안.xlsx',
        '📄 안전점검_체크리스트.txt',
        '📁 과거_장애이력_모음'
      ],
      steps: [
        {
          btn: '① 이 폴더에 무슨 파일이 있는지 요약해 줘',
          user: '현재 폴더에 있는 파일들을 확인하고, 어떤 데이터들이 들어있는지 요약해 줘.',
          tool: 'Read(./11월_변전실_점검일지.csv), ListDir(.)',
          ai: '현재 폴더에는 총 4개의 항목이 있습니다. 특히 <code>11월_변전실_점검일지.csv</code>에는 A동/B동 변압기 6대의 일일 온도, 부하율, 절연저항 데이터가 들어있으며, <strong>B동 2호기 변압기의 피크 부하율이 86%로 주의 수준</strong>입니다.'
        },
        {
          btn: '② 주의가 필요한 설비만 뽑아서 보고서 초안 만들어 줘',
          user: '부하율 80% 이상이거나 점검 미완료인 설비만 추려서 팀장 보고용 markdown 보고서(report.md)를 만들어 줘.',
          tool: 'Write(./report.md)',
          ai: '<code>report.md</code> 파일을 생성했습니다.<br/>• <strong>긴급 확인:</strong> B동 변압기 #2 (부하율 86%, 온도 68℃)<br/>• <strong>점검 지연:</strong> C동 태양광 인버터 #1 (월간 점검 미실시)<br/>내일 오전 현장 점검 일정에 바로 반영하실 수 있도록 정리했습니다.'
        },
        {
          btn: '③ 방금 만든 보고서를 대시보드 웹페이지로 바꿔줘',
          user: '방금 분석한 점검일지 데이터를 바탕으로 부서장이 한눈에 볼 수 있는 index.html 대시보드를 만들어 줘.',
          tool: 'Write(./index.html) — 차트 및 필터 기능 구현 완료',
          ai: '<code>index.html</code> 작성을 완료했습니다! 파일이 있는 폴더에서 더블클릭하시면 설비별 부하율 그래프와 점검 상태 필터가 작동하는 동적 대시보드가 바로 열립니다.'
        }
      ]
    },
    mcp: {
      question: '사내 파일 시스템(MCP)을 통해 "최근 3개월 전기설비 장애 이력" 폴더에서 가장 자주 발생한 고장 원인을 찾아 요약해 줘.',
      toolName: 'filesystem / search_and_read (경로: ./과거_장애이력_모음)',
      answer: '사내 폴더의 최근 3개월 장애 보고서 14건을 직접 읽어 분석했습니다.<br/><strong>1위:</strong> 배전반 접속부 접촉 불량 및 과열 (6건, 43%)<br/><strong>2위:</strong> 낙뢰/서지로 인한 보호계전기 오동작 (5건, 36%)<br/><strong>권고:</strong> 우기 전 접지저항 일제 측정 및 열화상 점검 주기를 월 2회로 단축하는 것을 권장합니다.'
    },
    dashboard: {
      title: '⚡ 전기기술팀 설비·전력 통합 대시보드',
      subtitle: '수변전 설비 부하율, 점검 현황 및 이상 징후 실시간 모니터링 (샘플)',
      groups: [
        { value: 'all', label: '전체 구역' },
        { value: 'substationA', label: 'A동 변전실' },
        { value: 'panelB', label: 'B동 배전반' },
        { value: 'solarC', label: 'C동 태양광/ESS' }
      ],
      chartTitle: '구역별 평균 부하율 (%)',
      tableTitle: '주요 설비 점검 상태',
      datasets: {
        month: {
          all: {
            kpis: [
              { label: '평균 전력 부하율', value: '72.4%', delta: '전월 대비 +3.1%', tone: 'warn' },
              { label: '정기 점검 완료율', value: '94.2%', delta: '목표 95% 근접', tone: 'good' },
              { label: '주의/이상 설비', value: '2건', delta: 'B동 변압기 등 확인 필요', tone: 'warn' },
              { label: '평균 역률', value: '96.8%', delta: '양호 (기준 90% 이상)', tone: 'good' }
            ],
            bars: [
              { name: 'A동 변전실', value: 68, color: '#2563eb' },
              { name: 'B동 배전반', value: 86, color: '#d97706' },
              { name: 'C동 태양광', value: 61, color: '#059669' },
              { name: '유틸리티동', value: 74, color: '#2563eb' }
            ],
            rows: [
              { name: 'A동 주변압기 #1', metric: '부하 68% / 54℃', status: '정상', cls: 'ok' },
              { name: 'B동 변압기 #2', metric: '부하 86% / 68℃', status: '주의', cls: 'warn' },
              { name: 'B동 고압배전반', metric: '부분방전 미검출', status: '정상', cls: 'ok' },
              { name: 'C동 인버터 #1', metric: '정기점검 지연', status: '점검필요', cls: 'bad' }
            ]
          },
          substationA: {
            kpis: [
              { label: 'A동 평균 부하율', value: '68.0%', delta: '안정 범위', tone: 'good' },
              { label: '점검 완료율', value: '100%', delta: '전 항목 완료', tone: 'good' },
              { label: '주의/이상 설비', value: '0건', delta: '특이사항 없음', tone: 'good' },
              { label: '평균 역률', value: '97.2%', delta: '매우 양호', tone: 'good' }
            ],
            bars: [
              { name: '주변압기 #1', value: 68, color: '#2563eb' },
              { name: '주변압기 #2', value: 64, color: '#2563eb' },
              { name: '특고압 VCB', value: 71, color: '#059669' }
            ],
            rows: [
              { name: 'A동 주변압기 #1', metric: '부하 68% / 54℃', status: '정상', cls: 'ok' },
              { name: 'A동 주변압기 #2', metric: '부하 64% / 51℃', status: '정상', cls: 'ok' },
              { name: 'A동 특고압 VCB', metric: '절연저항 양호', status: '정상', cls: 'ok' }
            ]
          },
          panelB: {
            kpis: [
              { label: 'B동 평균 부하율', value: '86.0%', delta: '피크 시간대 주의', tone: 'warn' },
              { label: '점검 완료율', value: '91.0%', delta: '열화상 1건 대기', tone: 'warn' },
              { label: '주의/이상 설비', value: '1건', delta: '변압기 #2 온도 상승', tone: 'warn' },
              { label: '평균 역률', value: '95.1%', delta: '양호', tone: 'good' }
            ],
            bars: [
              { name: '변압기 #2', value: 86, color: '#d97706' },
              { name: 'MCC 반 #1', value: 79, color: '#2563eb' },
              { name: 'MCC 반 #2', value: 72, color: '#2563eb' }
            ],
            rows: [
              { name: 'B동 변압기 #2', metric: '부하 86% / 68℃', status: '주의', cls: 'warn' },
              { name: 'B동 고압배전반', metric: '부분방전 미검출', status: '정상', cls: 'ok' }
            ]
          },
          solarC: {
            kpis: [
              { label: 'C동 발전 효율', value: '61.0%', delta: '일조량 보통', tone: 'good' },
              { label: '점검 완료율', value: '82.0%', delta: '인버터 #1 미실시', tone: 'warn' },
              { label: '주의/이상 설비', value: '1건', delta: '점검 일정 도래', tone: 'warn' },
              { label: 'ESS 충전율', value: '88.0%', delta: '정상 대기', tone: 'good' }
            ],
            bars: [
              { name: '인버터 #1', value: 58, color: '#d97706' },
              { name: '인버터 #2', value: 64, color: '#059669' },
              { name: 'ESS 뱅크', value: 88, color: '#2563eb' }
            ],
            rows: [
              { name: 'C동 인버터 #1', metric: '정기점검 지연', status: '점검필요', cls: 'bad' },
              { name: 'C동 인버터 #2', metric: '발전 정상', status: '정상', cls: 'ok' }
            ]
          }
        },
        quarter: {
          all: {
            kpis: [
              { label: '분기 평균 부하율', value: '70.1%', delta: '전분기 대비 -1.4%', tone: 'good' },
              { label: '분기 점검 완료율', value: '97.8%', delta: '목표 초과 달성', tone: 'good' },
              { label: '누적 주의/이상', value: '5건', delta: '3건 조치 완료', tone: 'good' },
              { label: '분기 평균 역률', value: '96.5%', delta: '전력비 절감 기여', tone: 'good' }
            ],
            bars: [
              { name: 'A동 변전실', value: 66, color: '#2563eb' },
              { name: 'B동 배전반', value: 81, color: '#d97706' },
              { name: 'C동 태양광', value: 64, color: '#059669' },
              { name: '유틸리티동', value: 70, color: '#2563eb' }
            ],
            rows: [
              { name: 'A동 주변압기 #1', metric: '분기 무사고', status: '정상', cls: 'ok' },
              { name: 'B동 변압기 #2', metric: '하계 부하 증가', status: '주의', cls: 'warn' },
              { name: 'C동 인버터 #1', metric: '점검 주기 도래', status: '점검필요', cls: 'bad' }
            ]
          }
        }
      },
      templates: [
        {
          title: '전기기술팀 동적 대시보드 제작 요청 프롬프트',
          text: '이 폴더에 있는 설비 점검 데이터(CSV/엑셀)를 읽어서, 전기기술팀 부서장이 한눈에 볼 수 있는 동적 대시보드(index.html)를 만들어 줘.\n[필수 기능]\n1. 상단에 기간별/구역별(변전실, 배전반 등) 필터 드롭다운\n2. 핵심 KPI 카드 4개 (평균 부하율, 점검 완료율, 주의 설비 수, 평균 역률)\n3. 설비별 부하율 막대 그래프 (80% 이상은 주황색으로 강조)\n4. 별도 서버 없이 index.html 파일 하나만 열어도 바로 작동하게 만들어 줘.'
        }
      ]
    }
  },

  general: {
    label: '📊 일반 부서장 예시',
    gemini: {
      prompt:
        '2025~2026년 국내외 대기업의 사내 AI 도입 및 부서장 업무 생산성 향상 성공 사례를 조사하고, 우리 부서(20명 규모)에 즉시 적용 가능한 업무 자동화 우선순위 3가지를 표로 정리해 줘.',
      planTitle: '사내 AI 도입 및 부서 생산성 혁신 동향',
      plan: [
        '국내외 주요 기업의 AI 기반 보고·회의·데이터 분석 도입 사례 수집',
        '보직장(팀장/그룹장)의 핵심 업무별 시간 절감 효과 및 보안 거버넌스 분석',
        '부서장 의사결정용 요약 표 및 실행 로드맵 작성'
      ],
      siteChips: [
        { domain: 'mckinsey.com', title: 'AI Productivity 2026' },
        { domain: 'gartner.com', title: 'Enterprise AI Adoption...' },
        { domain: 'hankyung.com', title: '국내 대기업 AI 업무혁신' },
        { domain: 'etnews.com', title: '사내 AI 에이전트 사례' },
        { domain: 'hbr.org', title: 'Managers & AI Workflow' },
        { domain: 'chosun.com', title: '보직장 디지털 전환 리포트' }
      ],
      sources: [
        { title: '2026 글로벌 기업 AI 업무 생산성 리포트', domain: 'www.mckinsey.com' },
        { title: '국내 주요 기업 사내 AI 도입 및 보안 가이드', domain: 'www.etnews.com' },
        { title: '부서 단위 AI 워크플로우 자동화 사례집', domain: 'hbr.org' }
      ],
      reportHtml: `
        <h5>부서 단위 AI 도입 및 업무 생산성 혁신 동향 보고서</h5>
        <p>단순 챗봇 사용을 넘어 <strong>문서 작성·데이터 취합·의사결정 보조</strong>에 AI를 연결한 부서는 주간 보고 준비 시간을 평균 45% 단축했습니다. <span class="citation">[1]</span></p>
        <ul>
          <li><strong>1순위 — 주간/월간 회의록 및 실행과제(Action Item) 자동 정리:</strong> 회의 종료 후 3분 만에 담당자별 할 일 표가 생성됩니다. <span class="citation">[2]</span></li>
          <li><strong>2순위 — 산재된 팀별 엑셀/보고서 취합 자동화:</strong> Claude Code를 활용해 여러 파일을 한 번에 읽어 부서장 요약본을 생성합니다. <span class="citation">[3]</span></li>
          <li><strong>3순위 — 정적 PPT 대신 동적 웹 대시보드 보고:</strong> 실시간 필터링이 가능한 HTML 보고서로 임원 보고 효율을 높입니다.</li>
        </ul>
      `,
      templates: [
        {
          title: '경영·시장 동향 및 경쟁사 리서치',
          text: '[목적] 내년 사업계획 수립을 위한 시장 환경 파악\n[조사 내용] 최근 1년간 우리 업계의 주요 트렌드 변화와 경쟁사의 신사업/조직 개편 동향을 조사해 줘.\n[형식] 임원 보고용으로 기회 요인과 리스크를 표로 비교해 줘.'
        },
        {
          title: '조직 관리·업무 효율화 벤치마킹',
          text: '[목적] 팀 내 반복 보고 업무 줄이기\n[조사 내용] AI 도구를 활용해 주간보고, 회의록, KPI 관리를 자동화한 기업 사례 3가지를 찾고 도입 시 주의할 보안 수칙을 정리해 줘.'
        }
      ]
    },
    claude: {
      folderName: '부서_주간보고_취합',
      files: [
        '📄 1팀_주간실적.docx',
        '📄 2팀_프로젝트현황.xlsx',
        '📄 3팀_예산집행내역.csv',
        '📁 지난_회의록_모음'
      ],
      steps: [
        {
          btn: '① 이 폴더에 있는 팀별 보고서들 요약해 줘',
          user: '폴더 안에 있는 1, 2, 3팀의 보고 파일을 모두 읽고, 부서장 입장에서 꼭 챙겨야 할 핵심 이슈만 요약해 줘.',
          tool: 'Read(./1팀_주간실적.docx, ./2팀_프로젝트현황.xlsx, ./3팀_예산집행내역.csv)',
          ai: '3개 팀 자료를 모두 확인했습니다.<br/>• <strong>1팀:</strong> 신규 과제 일정 순항 중 (달성률 94%)<br/>• <strong>2팀:</strong> 외주 업체 납기 지연으로 <strong>일정 리스크 1건 발생</strong><br/>• <strong>3팀:</strong> 4분기 예산 집행률이 62%로 잔여 예산 관리가 필요합니다.'
        },
        {
          btn: '② 임원 보고용 1장 요약 보고서 만들어 줘',
          user: '방금 요약한 내용을 바탕으로 임원 주간회의에 제출할 깔끔한 보고서(executive_summary.md)를 만들어 줘.',
          tool: 'Write(./executive_summary.md)',
          ai: '<code>executive_summary.md</code> 파일을 작성했습니다. [주요 성과] - [지연 이슈 및 대응방안] - [예산 현황] 3단 구조로 정리해 바로 회의에 활용하실 수 있습니다.'
        },
        {
          btn: '③ 이걸 인터랙티브 대시보드로 만들어 줘',
          user: '팀별 KPI와 예산 집행 현황을 필터로 골라볼 수 있는 동적 대시보드(index.html)를 만들어 줘.',
          tool: 'Write(./index.html) — KPI 카드 및 팀별 필터 구현 완료',
          ai: '<code>index.html</code> 생성이 완료되었습니다! 브라우저로 열면 팀별 선택에 따라 차트와 표가 즉시 바뀌는 대시보드를 확인하실 수 있습니다.'
        }
      ]
    },
    mcp: {
      question: '사내 파일 시스템(MCP)을 통해 "지난_회의록_모음" 폴더에서 지난 3개월간 반복해서 지적된 미해결 과제를 찾아줘.',
      toolName: 'filesystem / search_and_read (경로: ./지난_회의록_모음)',
      answer: '지난 회의록 12건을 직접 조회해 교차 분석했습니다.<br/><strong>반복 미해결 과제 1위:</strong> 타 부서 간 데이터 양식 불일치로 인한 취합 지연 (4회 언급)<br/><strong>2위:</strong> 신규 입사자 온보딩 매뉴얼 부재 (3회 언급)<br/>다음 주간회의 안건으로 "공통 데이터 양식 표준화"를 상정하시는 것을 추천합니다.'
    },
    dashboard: {
      title: '📊 부서장용 팀 성과·예산 통합 대시보드',
      subtitle: '팀별 KPI 달성률, 프로젝트 진행 현황 및 예산 집행률 모니터링 (샘플)',
      groups: [
        { value: 'all', label: '전체 팀' },
        { value: 'team1', label: '기획 1팀' },
        { value: 'team2', label: '운영 2팀' },
        { value: 'team3', label: '지원 3팀' }
      ],
      chartTitle: '팀별 KPI 목표 달성률 (%)',
      tableTitle: '주요 프로젝트 진행 현황',
      datasets: {
        month: {
          all: {
            kpis: [
              { label: '부서 평균 KPI 달성률', value: '88.5%', delta: '전월 대비 +4.2%', tone: 'good' },
              { label: '예산 집행률', value: '74.0%', delta: '계획 대비 적정', tone: 'good' },
              { label: '진행 중 핵심 과제', value: '12건', delta: '지연 과제 1건 포함', tone: 'warn' },
              { label: '리스크 관리 건수', value: '2건', delta: '대응 계획 수립 중', tone: 'warn' }
            ],
            bars: [
              { name: '기획 1팀', value: 94, color: '#059669' },
              { name: '운영 2팀', value: 82, color: '#d97706' },
              { name: '지원 3팀', value: 90, color: '#2563eb' }
            ],
            rows: [
              { name: '신규 프로세스 도입', metric: '기획 1팀 · 95%', status: '순항', cls: 'ok' },
              { name: '시스템 고도화 과제', metric: '운영 2팀 · 68%', status: '지연주의', cls: 'warn' },
              { name: '연간 교육 프로그램', metric: '지원 3팀 · 90%', status: '순항', cls: 'ok' },
              { name: '협력사 계약 갱신', metric: '운영 2팀 · 대기', status: '확인필요', cls: 'bad' }
            ]
          },
          team1: {
            kpis: [
              { label: '기획 1팀 KPI', value: '94.0%', delta: '부서 내 1위', tone: 'good' },
              { label: '예산 집행률', value: '78.5%', delta: '적정', tone: 'good' },
              { label: '진행 과제', value: '4건', delta: '모두 정상', tone: 'good' },
              { label: '리스크 건수', value: '0건', delta: '특이사항 없음', tone: 'good' }
            ],
            bars: [
              { name: '신규 프로세스', value: 95, color: '#059669' },
              { name: '시장 조사', value: 92, color: '#2563eb' }
            ],
            rows: [
              { name: '신규 프로세스 도입', metric: '진척률 95%', status: '순항', cls: 'ok' },
              { name: '시장 조사 보고서', metric: '진척률 92%', status: '순항', cls: 'ok' }
            ]
          },
          team2: {
            kpis: [
              { label: '운영 2팀 KPI', value: '82.0%', delta: '일정 만회 필요', tone: 'warn' },
              { label: '예산 집행률', value: '71.0%', delta: '적정', tone: 'good' },
              { label: '진행 과제', value: '5건', delta: '지연 1건 포함', tone: 'warn' },
              { label: '리스크 건수', value: '2건', delta: '부서장 지원 필요', tone: 'warn' }
            ],
            bars: [
              { name: '시스템 고도화', value: 68, color: '#d97706' },
              { name: '정기 운영', value: 91, color: '#2563eb' }
            ],
            rows: [
              { name: '시스템 고도화 과제', metric: '진척률 68%', status: '지연주의', cls: 'warn' },
              { name: '협력사 계약 갱신', metric: '검토 대기', status: '확인필요', cls: 'bad' }
            ]
          },
          team3: {
            kpis: [
              { label: '지원 3팀 KPI', value: '90.0%', delta: '안정적 진행', tone: 'good' },
              { label: '예산 집행률', value: '72.0%', delta: '계획 일치', tone: 'good' },
              { label: '진행 과제', value: '3건', delta: '정상 진행', tone: 'good' },
              { label: '리스크 건수', value: '0건', delta: '특이사항 없음', tone: 'good' }
            ],
            bars: [
              { name: '연간 교육', value: 90, color: '#059669' },
              { name: '예산 결산', value: 89, color: '#2563eb' }
            ],
            rows: [
              { name: '연간 교육 프로그램', metric: '진척률 90%', status: '순항', cls: 'ok' }
            ]
          }
        },
        quarter: {
          all: {
            kpis: [
              { label: '분기 평균 KPI 달성률', value: '91.2%', delta: '전분기 대비 +5.8%', tone: 'good' },
              { label: '분기 예산 집행률', value: '81.5%', delta: '목표 범위 내', tone: 'good' },
              { label: '완료된 핵심 과제', value: '9건', delta: '총 12건 중', tone: 'good' },
              { label: '해소된 리스크', value: '4건', delta: '신속 대응 완료', tone: 'good' }
            ],
            bars: [
              { name: '기획 1팀', value: 96, color: '#059669' },
              { name: '운영 2팀', value: 86, color: '#2563eb' },
              { name: '지원 3팀', value: 92, color: '#059669' }
            ],
            rows: [
              { name: '신규 프로세스 도입', metric: '기획 1팀 · 완료', status: '순항', cls: 'ok' },
              { name: '시스템 고도화 과제', metric: '운영 2팀 · 80%', status: '지연주의', cls: 'warn' }
            ]
          }
        }
      },
      templates: [
        {
          title: '부서장용 동적 대시보드 제작 요청 프롬프트',
          text: '이 폴더에 있는 팀별 실적/예산 파일들을 읽어서, 부서장이 회의 때 바로 띄워놓고 볼 수 있는 동적 대시보드(index.html)를 만들어 줘.\n[필수 기능]\n1. 상단에 기간별/팀별 필터 드롭다운\n2. 핵심 KPI 카드 4개 (KPI 달성률, 예산 집행률, 진행 과제 수, 리스크 건수)\n3. 팀별 목표 달성률 막대 그래프\n4. 별도 설치 없이 index.html 파일만 열면 바로 작동하게 만들어 줘.'
        }
      ]
    }
  }
};
