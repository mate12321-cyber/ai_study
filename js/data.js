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
        { domain: 'motir.go.kr', title: '전기설비기술기준 개정 고시' },
        { domain: 'law.go.kr', title: '한국전기설비규정(KEC) 행정규칙' },
        { domain: 'keea.or.kr', title: '수변전 원격감시 및 제어 기준' },
        { domain: 'kess.kr', title: '한국전기안전공사 기술자료실' },
        { domain: 'electimes.com', title: '전력설비 예지보전·AI 진단 사례' },
        { domain: 'epj.co.kr', title: '고압 변압기 온라인 DGA 동향' }
      ],
      searchQueries: [
        '고압 수변전 변압기 예지보전 DGA 부분방전 도입 사례 2025 2026',
        '한국전기설비규정 KEC 개정 고압 접지도체 활선 경보장치 의무화',
        '제조 사업장 수변전 설비 단계별 예지보전 ROI 투자 효율 비교'
      ],
      sources: [
        {
          id: 1,
          title: '전기설비기술기준 및 판단기준 일부개정 고시 (산업통상자원부)',
          domain: 'www.motir.go.kr',
          snippet: '고압 및 특고압 수변전 설비의 온라인 상태감시(유중가스·부분방전) 권고 및 원격 감시 제어 안전 기준 명시.'
        },
        {
          id: 2,
          title: '한국전기설비규정(KEC) 개정 행정규칙 전문 — 국가법령정보센터',
          domain: 'www.law.go.kr',
          snippet: '고압 이상 구리 접지도체 최소 단면적 16mm² 상향 및 특고압 배전반 활선 경보장치 설치 기준 강화.'
        },
        {
          id: 3,
          title: '국내 주요 제조사업장 전력설비 예지보전(PdM) 적용 성과 분석',
          domain: 'www.electimes.com',
          snippet: '1단계 열화상/초음파 → 2단계 차단기 코일전류 → 3단계 온라인 DGA 도입 시 돌발 정전 사고 68% 감소.'
        }
      ],
      reportHtml: `
        <h5>고압 수변전 설비 예지보전(PdM) 사례 및 KEC 개정 대응 보고서</h5>
        <p class="report-meta">작성: Gemini Deep Research · 검토 대상: 56개 기술 문서 및 법령 고시 교차 검증</p>
        <p><strong>1. 핵심 요약 (Executive Summary)</strong></p>
        <ul>
          <li><strong>예지보전 기술 고도화:</strong> 기존의 정기 정전 점검에서 온라인 유중가스(DGA)·부분방전(PD)·광온도 센서와 AI 기반 잔존수명(RUL) 예측 체계로 전환되며 돌발 고장 비용을 평균 60% 이상 절감하고 있습니다. <span class="citation" data-cite="1">[1]</span> <span class="citation" data-cite="3">[3]</span></li>
          <li><strong>KEC 안전규제 강화 대응:</strong> 최근 개정된 한국전기설비규정(KEC)에서는 고압 이상 구리 접지도체 최소 단면적 상향(16 mm² 이상), 특고압 폐쇄 배전반 도어 개방 시 활선 경보장치 의무화 등 현장 안전 규제가 한층 강화되었습니다. <span class="citation" data-cite="2">[2]</span></li>
          <li><strong>단계적 도입 권고:</strong> 전면 교체보다 설비 중요도와 투자 효율(ROI)에 맞춰 3단계로 나누어 적용하는 것이 가장 효과적입니다. <span class="citation" data-cite="3">[3]</span></li>
        </ul>
        <p><strong>2. 도입 난이도 및 투자 효율별 단계적 적용 비교표</strong></p>
        <table class="gem-report-table">
          <thead>
            <tr>
              <th>단계</th>
              <th>적용 기술 항목</th>
              <th>도입 난이도</th>
              <th>기대 효과 및 권장 대상</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1단계 (즉시)</strong></td>
              <td>무정전 열화상 창 + 외장형 부분방전(PD) 센서</td>
              <td>하 (무정전 시공)</td>
              <td>배전반 접속부 과열·아크 조기 감지 (전 구역 공통)</td>
            </tr>
            <tr>
              <td><strong>2단계 (단기)</strong></td>
              <td>VCB/ACB 차단기 트립코일 전류·동작시간 감시</td>
              <td>중 (제어선 연계)</td>
              <td>차단기 기계적 고착 및 조작불량 사전 예방 (A·B동)</td>
            </tr>
            <tr>
              <td><strong>3단계 (중장기)</strong></td>
              <td>주변압기 온라인 유중가스(DGA) + AI 수명 예측</td>
              <td>상 (핵심 설비)</td>
              <td>노후 주변압기 내부 절연열화 실시간 감시 (15년 이상 설비)</td>
            </tr>
          </tbody>
        </table>
      `,
      followUpSummary:
        '<strong>[임원 보고용 3줄 핵심 요약]</strong><br/>1. <strong>규제 대응:</strong> KEC 개정에 따라 특고압 배전반 활선 경보장치 및 접지 규격(16mm²) 보강이 필수적입니다.<br/>2. <strong>예지보전 ROI:</strong> 정전 없이 설치 가능한 1단계(열화상·외장형 PD 센서) 우선 도입 시 돌발 정전 리스크를 즉시 40% 이상 낮출 수 있습니다.<br/>3. <strong>실행안:</strong> 부하율이 높은 B동 변전실부터 1·2단계 센서를 시범 적용 후 내년도 예산에 3단계(온라인 DGA)를 반영하는 안을 건의합니다.',
      historyChats: [
        {
          title: 'Deep Research 리포트',
          q: '[목적] 고압 수변전 설비 예지보전(PdM) 및 KEC 개정 대응 조사',
          a: '우측 Canvas 보고서 및 56개 출처 검증이 완료되었습니다.'
        },
        {
          title: '주간 핵심 이슈 요약',
          q: '이번 주 변전실 점검 특이사항을 본부장 보고용 3줄로 요약해 줘.',
          a: '1. A동 주변압기 #1·#2 정상 가동 중 (평균 부하율 68%)<br/>2. <strong>B동 변압기 #2 피크 부하율 86% 도달</strong> — 하계 냉방 부하 분산 조치 예정<br/>3. C동 태양광 인버터 #1 정기점검 금주 금요일 완료 예정'
        },
        {
          title: '안전·규정 개정 비교표',
          q: '산업안전보건법 및 KEC 전기작업 안전수칙 핵심 변경점만 알려줘.',
          a: '활선 근접 작업 시 절연 방호구 착용 기준과 특고압 배전반 인터록·경보장치 점검 의무가 강화되었습니다. 현장 체크리스트에 즉시 반영 가능합니다.'
        }
      ],
      templates: [
        {
          title: '주제 1 · 설비 신기술 & 안전규정 동향 조사',
          text: '[목적] 우리 사업장 고압 수변전 설비의 안전성 강화 및 점검 효율화\n[조사 내용] 최근 2년간 국내외 변압기·차단기 예지보전(PdM) 기술 사례와 한국전기설비규정(KEC) 주요 변경점을 조사해 줘.\n[형식] 부서장 보고용으로 핵심 요약 5줄, 도입 난이도별 비교표를 포함해 작성해 줘.'
        },
        {
          title: '주제 2 · 전력 품질·에너지 절감 벤치마킹',
          text: '[목적] 공장 내 피크전력 관리 및 역률 개선 방안 도출\n[조사 내용] 제조 사업장의 ESS 연계 및 AI 피크제어 성공 사례 3가지를 찾아 투자 회수 기간과 주의사항을 정리해 줘.'
        }
      ],
      scenarios: [
        {
          shortLabel: '주제 1: 설비 예지보전 & KEC 동향',
          prompt:
            '[목적] 우리 사업장 고압 수변전 설비의 안전성 강화 및 점검 효율화\n[조사 내용] 최근 2년간 국내외 변압기·차단기 예지보전(PdM) 기술 사례와 한국전기설비규정(KEC) 주요 변경점을 조사해 줘.\n[형식] 부서장 보고용으로 핵심 요약 5줄, 도입 난이도별 비교표를 포함해 작성해 줘.',
          planTitle: '수변전 예지보전 및 KEC 동향',
          plan: [
            '최근 2년간(2024년 말~2026년) 국내외 고압 변압기 예지보전(PdM) 최신 기술 동향 및 적용 사례 조사 (DGA, 부분방전, 열화상, AI 잔존수명 예측)',
            '2025~2026년 전기설비기술기준·한국전기설비규정(KEC) 개정 핵심 사항 및 현장 안전 규제 확인',
            '도입 난이도 및 투자 효율별 단계적 적용 전략 비교표 작성'
          ],
          siteChips: [
            { domain: 'motir.go.kr', title: '전기설비기술기준 개정 고시' },
            { domain: 'law.go.kr', title: '한국전기설비규정(KEC) 행정규칙' },
            { domain: 'keea.or.kr', title: '수변전 원격감시 및 제어 기준' },
            { domain: 'kess.kr', title: '한국전기안전공사 기술자료실' },
            { domain: 'electimes.com', title: '전력설비 예지보전·AI 진단 사례' },
            { domain: 'epj.co.kr', title: '고압 변압기 온라인 DGA 동향' }
          ],
          searchQueries: [
            '고압 수변전 변압기 예지보전 DGA 부분방전 도입 사례 2025 2026',
            '한국전기설비규정 KEC 개정 고압 접지도체 활선 경보장치 의무화',
            '제조 사업장 수변전 설비 단계별 예지보전 ROI 투자 효율 비교'
          ],
          sources: [
            {
              id: 1,
              title: '전기설비기술기준 및 판단기준 일부개정 고시 (산업통상자원부)',
              domain: 'www.motir.go.kr',
              snippet: '고압 및 특고압 수변전 설비의 온라인 상태감시(유중가스·부분방전) 권고 및 원격 감시 제어 안전 기준 명시.'
            },
            {
              id: 2,
              title: '한국전기설비규정(KEC) 개정 행정규칙 전문 — 국가법령정보센터',
              domain: 'www.law.go.kr',
              snippet: '고압 이상 구리 접지도체 최소 단면적 16mm² 상향 및 특고압 배전반 활선 경보장치 설치 기준 강화.'
            },
            {
              id: 3,
              title: '국내 주요 제조사업장 전력설비 예지보전(PdM) 적용 성과 분석',
              domain: 'www.electimes.com',
              snippet: '1단계 열화상/초음파 → 2단계 차단기 코일전류 → 3단계 온라인 DGA 도입 시 돌발 정전 사고 68% 감소.'
            }
          ],
          reportHtml: `
            <h5>고압 수변전 설비 예지보전(PdM) 사례 및 KEC 개정 대응 보고서</h5>
            <p class="report-meta">작성: Gemini Deep Research · 검토 대상: 56개 기술 문서 및 법령 고시 교차 검증</p>
            <p><strong>1. 핵심 요약 (Executive Summary)</strong></p>
            <ul>
              <li><strong>예지보전 기술 고도화:</strong> 기존의 정기 정전 점검에서 온라인 유중가스(DGA)·부분방전(PD)·광온도 센서와 AI 기반 잔존수명(RUL) 예측 체계로 전환되며 돌발 고장 비용을 평균 60% 이상 절감하고 있습니다. <span class="citation" data-cite="1">[1]</span> <span class="citation" data-cite="3">[3]</span></li>
              <li><strong>KEC 안전규제 강화 대응:</strong> 최근 개정된 한국전기설비규정(KEC)에서는 고압 이상 구리 접지도체 최소 단면적 상향(16 mm² 이상), 특고압 폐쇄 배전반 도어 개방 시 활선 경보장치 의무화 등 현장 안전 규제가 한층 강화되었습니다. <span class="citation" data-cite="2">[2]</span></li>
              <li><strong>단계적 도입 권고:</strong> 전면 교체보다 설비 중요도와 투자 효율(ROI)에 맞춰 3단계로 나누어 적용하는 것이 가장 효과적입니다. <span class="citation" data-cite="3">[3]</span></li>
            </ul>
            <p><strong>2. 도입 난이도 및 투자 효율별 단계적 적용 비교표</strong></p>
            <table class="gem-report-table">
              <thead>
                <tr>
                  <th>단계</th>
                  <th>적용 기술 항목</th>
                  <th>도입 난이도</th>
                  <th>기대 효과 및 권장 대상</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1단계 (즉시)</strong></td>
                  <td>무정전 열화상 창 + 외장형 부분방전(PD) 센서</td>
                  <td>하 (무정전 시공)</td>
                  <td>배전반 접속부 과열·아크 조기 감지 (전 구역 공통)</td>
                </tr>
                <tr>
                  <td><strong>2단계 (단기)</strong></td>
                  <td>VCB/ACB 차단기 트립코일 전류·동작시간 감시</td>
                  <td>중 (제어선 연계)</td>
                  <td>차단기 기계적 고착 및 조작불량 사전 예방 (A·B동)</td>
                </tr>
                <tr>
                  <td><strong>3단계 (중장기)</strong></td>
                  <td>주변압기 온라인 유중가스(DGA) + AI 수명 예측</td>
                  <td>상 (핵심 설비)</td>
                  <td>노후 주변압기 내부 절연열화 실시간 감시 (15년 이상 설비)</td>
                </tr>
              </tbody>
            </table>
          `,
          followUpSummary:
            '<strong>[임원 보고용 3줄 핵심 요약]</strong><br/>1. <strong>규제 대응:</strong> KEC 개정에 따라 특고압 배전반 활선 경보장치 및 접지 규격(16mm²) 보강이 필수적입니다.<br/>2. <strong>예지보전 ROI:</strong> 정전 없이 설치 가능한 1단계(열화상·외장형 PD 센서) 우선 도입 시 돌발 정전 리스크를 즉시 40% 이상 낮출 수 있습니다.<br/>3. <strong>실행안:</strong> 부하율이 높은 B동 변전실부터 1·2단계 센서를 시범 적용 후 내년도 예산에 3단계(온라인 DGA)를 반영하는 안을 건의합니다.'
        },
        {
          shortLabel: '주제 2: 피크전력·ESS 에너지 절감',
          prompt:
            '[목적] 공장 내 피크전력 관리 및 역률 개선 방안 도출\n[조사 내용] 제조 사업장의 ESS 연계 및 AI 피크제어 성공 사례 3가지를 찾아 투자 회수 기간과 주의사항을 정리해 줘.',
          planTitle: '제조 사업장 ESS·AI 피크전력 제어 및 역률 개선 벤치마킹',
          plan: [
            '국내 제조 사업장의 산업용 전력요금(계시별 요금제) 대응 ESS 연계 및 AI 피크제어(EMS) 도입 성공 사례 3건 수집',
            '자동 역률 제어(APFC) 및 능동형 고조파 필터 결합을 통한 기본요금·전력손실 절감 효과와 투자 회수 기간(ROI) 분석',
            'ESS 배터리실 화재 안전 기준(NFPC/KEC) 및 현장 도입 시 운영 주의사항 비교표 작성'
          ],
          siteChips: [
            { domain: 'kepco.co.kr', title: '산업용(을) 피크요금제·역률 요금 기준' },
            { domain: 'energy.or.kr', title: '한국에너지공단 FEMS·ESS 구축 사례집' },
            { domain: 'electimes.com', title: '제조공장 AI 피크전력 제어 ROI 분석' },
            { domain: 'kess.kr', title: 'ESS 전기저장장치 KEC 안전 점검 기준' },
            { domain: 'etnews.com', title: '스마트공장 전력품질·역률 개선 동향' },
            { domain: 'motir.go.kr', title: '고효율 에너지설비 투자 세액공제 고시' }
          ],
          searchQueries: [
            '제조 사업장 ESS 연계 AI 피크전력 제어 FEMS 성공 사례 투자회수기간',
            '고압 수변전 자동역률제어 APFC 역률 95% 개선 기본요금 절감 효과',
            '전기저장장치 ESS KEC 화재안전 기준 충전율 SOC 제한 주의사항'
          ],
          sources: [
            {
              id: 1,
              title: '한국에너지공단 — 제조 사업장 FEMS·ESS 피크제어 우수 구축 사례집 (2025~2026)',
              domain: 'www.energy.or.kr',
              snippet: '15분 단위 최대수요전력(Peak Demand)을 AI로 사전 예측해 ESS 방전 및 냉동기 부하 제어를 수행한 사업장은 연간 기본요금 18~24% 절감.'
            },
            {
              id: 2,
              title: '한전 산업용 전력요금 역률 할인·할증 제도 및 고압 콘덴서(APFC) 최적 운영 가이드',
              domain: 'online.kepco.co.kr',
              snippet: '주간 평균 역률 90% 기준 최대 95%까지 1%당 기본요금 0.2% 할인 적용. 노후 진상용 콘덴서 직렬리액터 점검 필수.'
            },
            {
              id: 3,
              title: '한국전기안전공사 — ESS(전기저장장치) KEC 개정 안전기준 및 옥내 설치 주의사항',
              domain: 'www.kess.kr',
              snippet: '옥내 ESS 충전율(SOC) 80% 이하 관리, 배터리실 독립 방화구획·가스감지기 연동 및 비상정지(EPO) 계통 분리 의무화.'
            }
          ],
          reportHtml: `
            <h5>공장 피크전력(Peak) 관리 및 역률 개선 벤치마킹 보고서</h5>
            <p class="report-meta">작성: Gemini Deep Research · 검토 대상: 49개 에너지공단 사례 및 한전 요금규정 교차 검증</p>
            <p><strong>1. 핵심 요약 (Executive Summary)</strong></p>
            <ul>
              <li><strong>피크전력(15분 최대수요전력) 10% 감축 시 연간 기본요금 대폭 절감:</strong> 한전 산업용(을) 요금제 특성상 연중 단 1회의 15분 피크치가 향후 1년간의 기본요금을 결정하므로, AI 수요예측과 ESS/부하차단 연동이 가장 확실한 비용 절감 수단입니다. <span class="citation" data-cite="1">[1]</span></li>
              <li><strong>역률 95% 상시 유지 및 고조파 관리:</strong> 인버터·태양광 설비 증가로 인한 역률 저하와 고조파 과열을 막기 위해 자동역률제어반(APFC)과 직렬리액터(6~7%)를 병행하면 기본요금 1% 추가 할인과 변압기 손실 감소를 동시에 달성합니다. <span class="citation" data-cite="2">[2]</span></li>
              <li><strong>ESS 도입 시 화재·안전 규제 준수 필수:</strong> 초기 투자비 부담이 클 경우 정부 에너지절약시설 세액공제나 ESCO(에너지절약전문기업) 모델을 활용하되, KEC 배터리실 방화구획 및 SOC(충전율) 상한 기준을 반드시 반영해야 합니다. <span class="citation" data-cite="3">[3]</span></li>
            </ul>
            <p><strong>2. 제조 사업장 피크제어·역률 개선 성공 사례 3선 및 투자 회수 기간(ROI)</strong></p>
            <table class="gem-report-table">
              <thead>
                <tr>
                  <th>구분 (적용 사례)</th>
                  <th>핵심 적용 기술</th>
                  <th>투자 회수 기간</th>
                  <th>도입 효과 및 실무 주의사항</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>사례 A (자동차부품 공장)</strong></td>
                  <td>AI 피크예측 + 공조/컴프레서 순차 부하제어</td>
                  <td><strong>약 1.4년</strong> (저비용·고효율)</td>
                  <td>피크전력 12% 감축 (연 1.1억 절감) / 생산라인 영향 없는 비핵심 부하 우선 분류 필수</td>
                </tr>
                <tr>
                  <td><strong>사례 B (정밀화학 사업장)</strong></td>
                  <td>1.5MWh 피크저감용 ESS + 경부하 충전/최대부하 방전</td>
                  <td><strong>약 3.8년</strong> (세액공제 반영)</td>
                  <td>계약전력 증설 회피 및 요금 연 2.8억 절감 / KEC 옥내 SOC 80% 제한·소방 연동 필수</td>
                </tr>
                <tr>
                  <td><strong>사례 C (반도체·전자 라인)</strong></td>
                  <td>고압 APFC(자동역률제어) + 능동형 고조파 필터(AHF)</td>
                  <td><strong>약 1.8년</strong></td>
                  <td>평균 역률 91%→97% 개선, 콘덴서 소손 방지 / 인버터 부하 비중 높은 B·C동 우선 권장</td>
                </tr>
              </tbody>
            </table>
          `,
          followUpSummary:
            '<strong>[임원 보고용 3줄 핵심 요약]</strong><br/>1. <strong>최우선 추진(사례 A+C 결합):</strong> 대규모 ESS 투자 전, 회수 기간이 1.5년 이내인 <strong>AI 피크알람·비핵심 공조 부하 제어</strong>와 <strong>고압 자동역률제어(APFC) 현대화</strong>를 우선 추진하는 것이 투자 효율이 가장 높습니다.<br/>2. <strong>기대 효과:</strong> 하계·동절기 15분 최대수요전력을 10%만 낮추고 역률을 95% 이상 유지해도 사업장 연간 전력 기본요금의 약 12~15%를 즉시 절감할 수 있습니다.<br/>3. <strong>주의사항:</strong> 향후 ESS 도입 검토 시에는 KEC 안전기준에 따른 충전율(SOC 80~90%) 제한과 독립 소방설비 구축 비용을 총사업비(CAPEX)에 반드시 포함해야 합니다.'
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
      fileContents: {
        '11월_변전실_점검일지.csv': {
          badge: 'CSV 원본 데이터',
          type: 'code',
          content: `설비코드,설비명,구역,피크부하율(%),온도(℃),절연저항(MΩ),점검상태
TR-A01,A동 주변압기 #1,A동 변전실,68.0,54.2,1250,정상
TR-A02,A동 주변압기 #2,A동 변전실,64.0,51.0,1310,정상
TR-B02,B동 변압기 #2,B동 배전반,86.0,68.4,890,주의(피크과부하)
PN-B01,B동 고압배전반,B동 배전반,74.0,46.0,1500,정상
PV-C01,C동 태양광 인버터 #1,C동 태양광,58.0,49.5,980,점검지연(미실시)`
        },
        '2026_설비보수_예산안.xlsx': {
          badge: '엑셀 예산표 미리보기',
          type: 'html',
          content: `
            <table class="preview-table">
              <thead><tr><th>항목</th><th>대상 설비</th><th>예산(백만원)</th><th>우선순위</th></tr></thead>
              <tbody>
                <tr><td>무정전 열화상·PD 센서</td><td>B동 배전반 / 변압기 #2</td><td>18.5</td><td><strong>1순위 (긴급)</strong></td></tr>
                <tr><td>노후 VCB 차단기 보수</td><td>A동 변전실</td><td>24.0</td><td>2순위</td></tr>
                <tr><td>태양광 인버터 팬 교체</td><td>C동 태양광</td><td>6.2</td><td>3순위</td></tr>
              </tbody>
            </table>
          `
        },
        '안전점검_체크리스트.txt': {
          badge: '텍스트 문서',
          type: 'code',
          content: `[전기기술팀 월간 필수 안전점검 기준]
1. 변압기 피크 부하율 80% 이상 또는 상시 온도 65℃ 초과 시 즉시 부하 분산 검토
2. 특고압 배전반 활선 경보장치 및 접지 상태 월 1회 이상 필수 확인
3. 미실시 점검 항목 발생 시 익월 첫째 주 내 최우선 조치`
        },
        '과거_장애이력_모음': {
          badge: '하위 폴더 (14건)',
          type: 'code',
          content: `📁 과거_장애이력_모음/
 ├── 2026_09_B동_배전반_접속부_과열조치.pdf
 ├── 2026_10_낙뢰서지_보호계전기_동작보고.docx
 └── 2026_11_C동_인버터_통신점검_이력.xlsx
(총 14건의 장애 원인 및 조치 보고서가 저장되어 있습니다)`
        },
        '설비점검_핵심요약보고.md': {
          badge: '✨ AI 생성 요약 보고서',
          type: 'html',
          content: `
            <div class="preview-doc">
              <h4>📑 11월 수변전 설비 점검 핵심 요약 보고 (부서장 보고용)</h4>
              <p><strong>1. 긴급 점검 및 부하 관리 대상</strong></p>
              <ul>
                <li><strong style="color:#d97706;">B동 변압기 #2 (주의):</strong> 피크 부하율 <strong>86.0%</strong>, 온도 <strong>68.4℃</strong>로 사내 기준(80% / 65℃) 초과. 유틸리티동 예비 선로로 일부 부하 분산 권고.</li>
                <li><strong style="color:#dc2626;">C동 태양광 인버터 #1 (점검지연):</strong> 11월 정기 점검 미실시 상태. 금주 내 열화상 및 절연 측정 우선 배정 필요.</li>
              </ul>
              <p><strong>2. 예산 연계 검토 의견</strong></p>
              <p>2026년 보수 예산안의 1순위 항목(무정전 열화상·PD 센서, 1,850만 원)을 B동 변압기 #2에 우선 배정하면 정전 없이 상시 감시 체계 구축이 가능합니다.</p>
            </div>
          `
        },
        'index.html': {
          badge: '✨ AI 생성 동적 대시보드 (실시간 미리보기)',
          type: 'html',
          content: `
            <div class="preview-dash-mini">
              <div class="pdm-head">
                <strong>⚡ 전기기술팀 설비·전력 실시간 상황판 (index.html)</strong>
                <span>● 브라우저에서 즉시 열림</span>
              </div>
              <div class="pdm-kpis">
                <div class="pdm-kpi"><span>평균 부하율</span><strong>72.4%</strong></div>
                <div class="pdm-kpi warn"><span>주의 설비</span><strong>B동 #2 (86%)</strong></div>
                <div class="pdm-kpi bad"><span>점검 지연</span><strong>C동 인버터</strong></div>
              </div>
              <div class="pdm-bars">
                <div class="pdm-bar-row"><span>A동 주변압기 #1</span><div class="pdm-bar"><i style="width:68%;background:#2563eb;"></i></div><strong>68%</strong></div>
                <div class="pdm-bar-row"><span>B동 변압기 #2</span><div class="pdm-bar"><i style="width:86%;background:#d97706;"></i></div><strong>86%</strong></div>
                <div class="pdm-bar-row"><span>C동 인버터 #1</span><div class="pdm-bar"><i style="width:58%;background:#059669;"></i></div><strong>58%</strong></div>
              </div>
              <p class="pdm-foot">💡 하단 Module 4에서 이 대시보드의 전체 필터 기능을 직접 조작해 보실 수 있습니다.</p>
            </div>
          `
        }
      },
      steps: [
        {
          btn: '① 이 폴더에 무슨 파일이 있는지 요약해 줘',
          user: '현재 폴더에 있는 파일들을 확인하고, 어떤 데이터들이 들어있는지 요약해 줘.',
          toolCall: 'Read(11월_변전실_점검일지.csv)',
          toolSub: 'Read 6 lines (ctrl+r to expand)',
          extraToolCall: 'Read(2026_설비보수_예산안.xlsx)',
          extraToolSub: 'Read 4 rows from sheet1',
          previewFile: '11월_변전실_점검일지.csv',
          ai: '현재 폴더에는 총 4개의 항목이 있습니다. 특히 <code>11월_변전실_점검일지.csv</code>(엑셀 표 데이터)에는 A동/B동 변압기 6대의 일일 온도, 부하율, 절연저항 데이터가 들어있으며, <strong>B동 2호기 변압기의 피크 부하율이 86%로 주의 수준</strong>입니다. (우측 미리보기 창에서 원본 데이터를 확인하실 수 있습니다.)'
        },
        {
          btn: '② 주의가 필요한 설비만 뽑아서 보고서 초안 만들어 줘',
          user: '부하율 80% 이상이거나 점검 미완료인 설비만 추려서 부서장 보고용 핵심 요약 문서로 저장해 줘.',
          toolCall: 'Write(설비점검_핵심요약보고.md)',
          toolSub: 'Wrote 18 lines to 설비점검_핵심요약보고.md',
          newFile: '✨ 설비점검_핵심요약보고.md',
          previewFile: '설비점검_핵심요약보고.md',
          diffLines: [
            '  1 + # 11월 수변전 설비 점검 핵심 요약 보고',
            '  2 + - [긴급 확인] B동 변압기 #2 : 피크 부하율 86.0% / 온도 68.4℃ (기준 초과)',
            '  3 + - [점검 지연] C동 태양광 인버터 #1 : 월간 정기점검 미실시 (금주 내 배정 권고)',
            '  4 + - [예산 연계] 2026 보수예산 1순위(무정전 열화상 센서) B동 우선 적용 건의'
          ],
          ai: '<code>설비점검_핵심요약보고.md</code> 문서 파일을 폴더에 새로 생성했습니다!<br/>• <strong>긴급 확인:</strong> B동 변압기 #2 (부하율 86%, 온도 68.4℃)<br/>• <strong>점검 지연:</strong> C동 태양광 인버터 #1 (월간 점검 미실시)<br/>폴더에 새 파일이 생성되었으며, 우측 미리보기에서 완성된 보고서를 바로 확인하실 수 있습니다.'
        },
        {
          btn: '③ 방금 만든 보고서를 대시보드 웹페이지로 바꿔줘',
          user: '방금 분석한 점검일지 데이터를 바탕으로 부서장이 한눈에 볼 수 있는 동적 대시보드 파일(index.html)을 만들어 줘.',
          toolCall: 'Write(index.html)',
          toolSub: 'Wrote 142 lines to index.html',
          newFile: '🌐 index.html',
          previewFile: 'index.html',
          diffLines: [
            '  1 + <!DOCTYPE html> <!-- 전기기술팀 설비·전력 실시간 통합 대시보드 -->',
            '  2 + <header>구역별 필터(A동/B동/C동) 및 기간 선택 드롭다운 구성</header>',
            '  3 + <section class="kpi-cards">평균 부하율 72.4% | 주의 설비 2건 | 평균 역률 96.8%</section>',
            '  4 + <script>80% 이상 고부하 설비(B동 변압기 #2) 주황색 자동 강조 차트 렌더링</script>'
          ],
          ai: '<code>index.html</code>(브라우저용 대시보드 파일) 작성을 완료했습니다! 생성된 <code>index.html</code>이나 우측 미리보기를 보시면 설비별 부하율 그래프와 점검 상태가 시각화된 대시보드가 즉시 열립니다.'
        }
      ]
    },
    mcp: {
      configJson: `{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "./과거_장애이력_모음"],
      "env": { "ACCESS_MODE": "READ_ONLY" }
    },
    "kepco_law_search": {
      "command": "node",
      "args": ["./mcp-servers/kec-law-bridge.js"],
      "env": { "TARGET": "law.go.kr, kess.kr" }
    },
    "scada_erp_db": {
      "command": "python",
      "args": ["-m", "mcp_erp_connector", "--dept", "electrical_tech"],
      "env": { "DB_ROLE": "READONLY_VIEWER" }
    }
  }
}`,
      servers: [
        {
          id: 'filesystem',
          name: 'filesystem',
          label: '내 PC 장애이력·점검일지 폴더',
          status: 'connected',
          transport: 'stdio · npx @modelcontextprotocol/server-filesystem',
          scope: './과거_장애이력_모음 (지정 폴더 외 접근 차단)',
          toolsCount: 4,
          tools: ['search_and_read_files', 'list_directory', 'read_text_file', 'get_file_info'],
          desc: 'C:\\Users\\GroupLead\\Desktop\\전기기술팀_점검자료\\과거_장애이력_모음'
        },
        {
          id: 'kepco_law_search',
          name: 'kepco_law_search',
          label: 'KEC 전기설비규정 & 안전고시 검색',
          status: 'connected',
          transport: 'stdio · node kec-law-bridge.js',
          scope: '국가법령정보센터·전기안전공사 공개 API 조회 전용',
          toolsCount: 2,
          tools: ['query_kec_regulation', 'get_safety_notice_detail'],
          desc: '국가법령정보센터 및 한국전기안전공사 최신 고시 실시간 조회'
        },
        {
          id: 'scada_erp_db',
          name: 'scada_erp_db',
          label: '수변전 설비자산·보수이력 DB',
          status: 'connected',
          transport: 'stdio · python -m mcp_erp_connector',
          scope: '사내 설비 ERP 읽기 전용 뷰(SELECT 권한만 허용)',
          toolsCount: 3,
          tools: ['get_asset_and_budget_status', 'list_maintenance_history', 'check_spare_parts'],
          desc: '사내 설비관리 ERP (변압기·VCB 정격, 설치연도, 잔여 보수예산 조회)'
        }
      ],
      scenarios: [
        {
          btn: '① [폴더 MCP] 최근 3개월 전기설비 장애 이력 원인 분석',
          user: '과거_장애이력_모음 폴더에서 최근 3개월간 가장 자주 발생한 전기설비 고장 원인을 찾아 요약해 줘.',
          server: 'filesystem',
          tool: 'search_and_read_files',
          args: '{ "path": "./과거_장애이력_모음", "pattern": "*.pdf, *.docx, *.xlsx", "limit": 14 }',
          permTitle: '로컬 장애이력 폴더(./과거_장애이력_모음) 내 문서 14건 열람을 허용하시겠습니까?',
          rawResult: `Found 14 files in ./과거_장애이력_모음:\n- 2026_09_B동_배전반_접속부_과열조치.pdf (원인: 부스바 볼트 이완 및 접촉저항 증가)\n- 2026_10_낙뢰서지_보호계전기_동작보고.docx (원인: 순간 서지 유입으로 OCR 오동작)\n- 2026_11_C동_인버터_통신점검_이력.xlsx 외 11건 텍스트 추출 완료 (총 6건 과열, 5건 서지, 3건 기타)`,
          answer: '<code>filesystem</code> MCP 도구로 최근 3개월 장애 보고서 14건을 직접 읽어 분석했습니다.<br/>• <strong>고장 원인 1위:</strong> 배전반 접속부 접촉 불량 및 과열 (6건, <strong>43%</strong>)<br/>• <strong>고장 원인 2위:</strong> 낙뢰/서지로 인한 보호계전기 오동작 (5건, <strong>36%</strong>)<br/>• <strong>권장 조치:</strong> 동절기 피크 전 접지저항 일제 측정 및 B동 배전반 열화상 점검 주기를 월 2회로 단축하는 것이 효과적입니다.'
        },
        {
          btn: '② [법령 MCP] KEC 특고압 배전반 활선 경보장치 최신 기준 조회',
          user: '특고압 배전반 활선 경보장치와 고압 접지도체 단면적에 관한 KEC 최신 개정 기준을 확인해 줘.',
          server: 'kepco_law_search',
          tool: 'query_kec_regulation',
          args: '{ "keywords": ["특고압 배전반 활선 경보장치", "고압 접지도체 최소 단면적"], "year": "2025-2026" }',
          permTitle: '외부 KEC 기술기준·국가법령정보 API 실시간 조회를 허용하시겠습니까?',
          rawResult: `[KEC 행정규칙 조회 완료 - 국가법령정보센터]\n- KEC 142.3 (접지도체): 고압 및 특고압 전기설비 구리 접지도체 최소 단면적 16mm² 이상 적용\n- KEC 341.12 (배전반 안전시설): 특고압 폐쇄배전반 도어 개방 시 활선 상태 시각·청각 경보장치 설치 의무화`,
          answer: '<code>kepco_law_search</code> MCP로 최신 KEC 개정 조항을 조회했습니다.<br/>• <strong>접지도체 규격 강화:</strong> 고압 이상 구리 접지도체 최소 단면적이 기존 대비 <strong>16 mm² 이상</strong>으로 상향 적용됩니다.<br/>• <strong>활선 경보장치 의무화:</strong> 특고압 배전반 도어 개방 시 감전 사고 예방을 위한 활선 경보장치 설치 및 월간 작동 점검이 필수 항목입니다.'
        },
        {
          btn: '③ [사내 DB MCP] B동 변압기 #2 노후도 및 잔여 보수예산 조회',
          user: '설비 ERP DB에서 과부하 상태인 "B동 변압기 #2"의 설치연도, 최근 절연유(DGA) 판정 결과와 잔여 보수예산을 조회해 줘.',
          server: 'scada_erp_db',
          tool: 'get_asset_and_budget_status',
          args: '{ "asset_id": "TR-B02", "include_dga": true, "budget_year": 2026 }',
          permTitle: '사내 설비자산 ERP DB(읽기 전용)에서 TR-B02 설비 이력 및 예산 조회를 허용하시겠습니까?',
          rawResult: `SELECT asset_id, install_year, rated_kva, dga_status, remaining_budget_krw FROM erp_assets WHERE asset_id='TR-B02';\n-> TR-B02 | 설치: 2013년 (13년 경과) | 정격: 2,000kVA | DGA: 아세틸렌 미검출, 총가연성가스(TCG) 주의 단계 | 잔여 보수예산: 28,500,000원`,
          answer: '<code>scada_erp_db</code> MCP로 사내 ERP 데이터를 실시간 조회했습니다.<br/>• <strong>설비 이력:</strong> B동 변압기 #2(<code>TR-B02</code>, 2,000kVA)는 2013년 도입(13년 경과) 설비로 최근 유중가스(TCG) 수치가 주의 기준에 근접해 있습니다.<br/>• <strong>예산 가용성:</strong> 전기기술팀 잔여 보수예산이 <strong>2,850만 원</strong> 확보되어 있어, 1순위 과제인 무정전 열화상·부분방전(PD) 센서(1,850만 원) 즉시 발주가 가능합니다.'
        },
        {
          btn: '④ ⚡ [실전 복합 분석] 장애이력 폴더 + ERP 예산 연속 조회 후 투자 품의안 작성',
          user: 'B동 배전반·변압기 과거 장애 이력(폴더)과 현재 잔여 보수예산(ERP DB)을 둘 다 조회해서, 즉시 집행 가능한 예방보전 품의 요약안을 작성해 줘.',
          server: 'filesystem',
          tool: 'search_and_read_files',
          args: '{ "path": "./과거_장애이력_모음", "query": "B동 배전반 변압기 과열" }',
          permTitle: '[1/2단계] 로컬 장애이력 폴더에서 B동 설비 장애 보고서 조회를 허용하시겠습니까?',
          rawResult: `[1/2 filesystem 조회 완료] 2026_09_B동_배전반_접속부_과열조치.pdf 외 3건 확인: B동 변압기 #2 및 배전반 피크 시간대 접촉부 과열 재발 위험 높음`,
          secondCall: {
            server: 'scada_erp_db',
            tool: 'get_asset_and_budget_status',
            args: '{ "asset_id": "TR-B02", "check_quote": "thermal_pd_sensor_package" }',
            rawResult: `[2/2 scada_erp_db 연속 조회 완료] 전기기술팀 가용 보수예산: 28,500,000원 | 무정전 열화상·PD 센서 패키지 표준 견적: 18,500,000원 (집행 후 잔액 10,000,000원)`
          },
          answer: '<strong>2개의 MCP 서버(<code>filesystem</code> → <code>scada_erp_db</code>)를 연속 조회</strong>하여 교차 검증을 완료했습니다.<br/>• <strong>현장 리스크 (폴더 이력):</strong> B동 배전반·변압기 #2는 지난 9월 접속부 과열 조치를 받았으나 피크 부하율(86%) 지속으로 재발 위험이 가장 높습니다.<br/>• <strong>예산 및 견적 대조 (ERP DB):</strong> 현재 팀 잔여 보수예산 <strong>2,850만 원</strong> 중 <strong>1,850만 원</strong>을 투입하면 무정전 열화상 창 및 외장형 PD 센서를 정전 없이 즉시 시공할 수 있습니다. (집행 후 예비비 1,000만 원 확보 가능)'
        }
      ]
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
          },
          substationA: {
            kpis: [
              { label: 'A동 분기 부하율', value: '66.0%', delta: '전분기 대비 -2.0%', tone: 'good' },
              { label: '분기 점검 완료율', value: '100%', delta: '무결점 유지', tone: 'good' },
              { label: '누적 주의/이상', value: '0건', delta: '무사고 지속', tone: 'good' },
              { label: '분기 평균 역률', value: '97.4%', delta: '최적 상태', tone: 'good' }
            ],
            bars: [
              { name: '주변압기 #1', value: 66, color: '#2563eb' },
              { name: '주변압기 #2', value: 62, color: '#2563eb' },
              { name: '특고압 VCB', value: 69, color: '#059669' }
            ],
            rows: [
              { name: 'A동 주변압기 #1', metric: '분기 평균 66%', status: '정상', cls: 'ok' },
              { name: 'A동 주변압기 #2', metric: '분기 평균 62%', status: '정상', cls: 'ok' }
            ]
          },
          panelB: {
            kpis: [
              { label: 'B동 분기 부하율', value: '81.0%', delta: '피크 관리 필요', tone: 'warn' },
              { label: '분기 점검 완료율', value: '96.5%', delta: '열화상 1회 추가', tone: 'good' },
              { label: '누적 주의/이상', value: '3건', delta: '2건 조치 완료', tone: 'warn' },
              { label: '분기 평균 역률', value: '95.4%', delta: '양호', tone: 'good' }
            ],
            bars: [
              { name: '변압기 #2', value: 81, color: '#d97706' },
              { name: 'MCC 반 #1', value: 76, color: '#2563eb' },
              { name: 'MCC 반 #2', value: 70, color: '#2563eb' }
            ],
            rows: [
              { name: 'B동 변압기 #2', metric: '분기 평균 81%', status: '주의', cls: 'warn' },
              { name: 'B동 고압배전반', metric: '이상 없음', status: '정상', cls: 'ok' }
            ]
          },
          solarC: {
            kpis: [
              { label: 'C동 분기 효율', value: '64.0%', delta: '전분기 대비 +3.0%', tone: 'good' },
              { label: '분기 점검 완료율', value: '92.0%', delta: '인버터 #1 예정', tone: 'warn' },
              { label: '누적 주의/이상', value: '2건', delta: '점검 일정 도래', tone: 'warn' },
              { label: 'ESS 평균 충전율', value: '89.5%', delta: '정상 가동', tone: 'good' }
            ],
            bars: [
              { name: '인버터 #1', value: 60, color: '#d97706' },
              { name: '인버터 #2', value: 68, color: '#059669' },
              { name: 'ESS 뱅크', value: 90, color: '#2563eb' }
            ],
            rows: [
              { name: 'C동 인버터 #1', metric: '분기 점검 도래', status: '점검필요', cls: 'bad' },
              { name: 'C동 인버터 #2', metric: '발전 양호', status: '정상', cls: 'ok' }
            ]
          }
        }
      },
      templates: [
        {
          title: '1단계 · 전기기술팀 동적 대시보드 기본 제작 프롬프트',
          text: '이 폴더에 있는 설비 점검 데이터(CSV/엑셀)를 읽어서, 전기기술팀 부서장이 한눈에 볼 수 있는 동적 대시보드(index.html)를 만들어 줘.\n[필수 기능]\n1. 상단에 기간별/구역별(변전실, 배전반 등) 필터 드롭다운\n2. 핵심 KPI 카드 4개 (평균 부하율, 점검 완료율, 주의 설비 수, 평균 역률)\n3. 설비별 부하율 막대 그래프 (80% 이상은 주황색으로 강조)\n4. 별도 서버 없이 index.html 파일 하나만 열어도 바로 작동하게 만들어 줘.'
        },
        {
          title: '2단계 · 임원 보고용 시각 완성도 & 기능 추가 프롬프트',
          text: '방금 만든 index.html 대시보드를 임원 보고용으로 업그레이드해 줘.\n[추가 요청]\n1. 상단 헤더를 신뢰감 있는 다크 네이비 톤으로 정돈하고 한글 폰트(Noto Sans KR) 적용\n2. 부하율 80% 이상이거나 점검 지연인 설비만 모아보는 [⚠️ 주의 설비만 보기] 토글 버튼 추가\n3. 우측 상단에 회의 자료로 바로 출력할 수 있는 [🖨️ 인쇄 / PDF 저장] 버튼을 만들어 줘.'
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
        { domain: 'mckinsey.com', title: 'Enterprise AI Productivity 2026' },
        { domain: 'gartner.com', title: 'AI Workloads & Manager ROI' },
        { domain: 'hankyung.com', title: '국내 대기업 AI 업무혁신 사례' },
        { domain: 'etnews.com', title: '사내 문서 연동 AI 에이전트 동향' },
        { domain: 'hbr.org', title: 'How Managers Lead with AI' },
        { domain: 'kdi.re.kr', title: '기업 생성형 AI 도입 효과 분석' }
      ],
      searchQueries: [
        '국내외 대기업 생성형 AI 부서 단위 업무 자동화 ROI 사례 2025 2026',
        '보직장 팀장 주간보고 회의록 데이터 취합 시간 절감 효과 통계',
        '사내 AI 도입 보안 가이드라인 및 로컬 폴더 연동 거버넌스'
      ],
      sources: [
        {
          id: 1,
          title: '2026 글로벌 기업 AI 업무 생산성 및 관리자 의사결정 리포트',
          domain: 'www.mckinsey.com',
          snippet: '단순 챗봇 질의를 넘어 부서 문서·데이터 취합에 AI를 연결한 조직은 주간 보고 준비 시간을 평균 45% 단축.'
        },
        {
          id: 2,
          title: '국내 주요 대기업 사내 AI 에이전트 도입 성과 및 보안 가이드',
          domain: 'www.etnews.com',
          snippet: '회의록 액션 아이템 추출과 다수 부서 엑셀 취합 자동화가 현장 부서장 만족도 1·2위를 기록.'
        },
        {
          id: 3,
          title: '부서 단위 AI 워크플로우 자동화 및 동적 대시보드 전환 사례집',
          domain: 'hbr.org',
          snippet: '고정형 PPT 장표 대신 실시간 필터링이 가능한 HTML 대시보드 보고로 임원 회의 의사결정 속도 향상.'
        }
      ],
      reportHtml: `
        <h5>부서 단위 AI 도입 및 업무 생산성 혁신 동향 보고서</h5>
        <p class="report-meta">작성: Gemini Deep Research · 검토 대상: 48개 국내외 기업 사례 및 연구 보고서 교차 검증</p>
        <p><strong>1. 핵심 요약 (Executive Summary)</strong></p>
        <p>단순 챗봇 사용을 넘어 <strong>문서 작성·데이터 취합·의사결정 보조</strong>에 AI를 연결한 부서는 주간 보고 준비 시간을 평균 45% 단축했습니다. <span class="citation" data-cite="1">[1]</span></p>
        <ul>
          <li><strong>1순위 — 주간/월간 회의록 및 실행과제(Action Item) 자동 정리:</strong> 회의 종료 후 3분 만에 담당자별 할 일과 마감일 표가 생성됩니다. <span class="citation" data-cite="2">[2]</span></li>
          <li><strong>2순위 — 산재된 팀별 엑셀/보고서 취합 자동화:</strong> Claude Code를 활용해 여러 팀의 파일을 한 번에 읽어 부서장 요약본을 즉시 생성합니다. <span class="citation" data-cite="2">[2]</span> <span class="citation" data-cite="3">[3]</span></li>
          <li><strong>3순위 — 정적 PPT 대신 동적 웹 대시보드 보고:</strong> 실시간 필터링이 가능한 HTML 상황판으로 임원 보고 효율을 극대화합니다. <span class="citation" data-cite="3">[3]</span></li>
        </ul>
        <p><strong>2. 20명 규모 부서 즉시 적용 우선순위 비교표</strong></p>
        <table class="gem-report-table">
          <thead>
            <tr>
              <th>우선순위</th>
              <th>적용 업무 영역</th>
              <th>시간 절감 효과</th>
              <th>도입 방법 및 핵심 도구</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1순위 (즉시)</strong></td>
              <td>주간 실적 보고서 &amp; 회의록 요약</td>
              <td>주 3.5시간 절감</td>
              <td>팀별 보고서 폴더에 Claude Code 실행 후 1장 요약 지시</td>
            </tr>
            <tr>
              <td><strong>2순위 (단기)</strong></td>
              <td>외부 시장·법령·경쟁사 심층 조사</td>
              <td>건당 4~6시간 절감</td>
              <td>Gemini Deep Research로 출처 검증된 사전 조사서 확보</td>
            </tr>
            <tr>
              <td><strong>3순위 (확산)</strong></td>
              <td>부서 KPI·예산 실시간 동적 대시보드</td>
              <td>월간 장표 작업 70% 감소</td>
              <td>엑셀 원본과 연동된 단일 <code>index.html</code> 상황판 제작</td>
            </tr>
          </tbody>
        </table>
      `,
      followUpSummary:
        '<strong>[임원 보고용 3줄 핵심 요약]</strong><br/>1. <strong>도입 효과:</strong> 부서 내 산재된 보고서 취합과 시장 조사에 AI를 적용할 경우 보직장 및 팀원의 보고 준비 시간을 평균 45% 절감할 수 있습니다.<br/>2. <strong>핵심 과제:</strong> ① 팀별 주간보고 일괄 취합(Claude Code), ② 외부 동향 심층 조사(Deep Research), ③ 실시간 KPI 웹 상황판 전환 순으로 추진하는 것이 가장 효과적입니다.<br/>3. <strong>보안 준수:</strong> 외부 웹 조사 시에는 사내 기밀 수치를 익명화하고, 내부 파일 분석은 지정된 로컬 폴더 내에서만 승인 하에 실행하여 보안을 유지합니다.',
      historyChats: [
        {
          title: 'Deep Research 리포트',
          q: '2025~2026년 국내외 대기업 사내 AI 도입 및 부서 생산성 향상 사례 조사',
          a: '우측 Canvas 보고서 및 우선순위 비교표 작성이 완료되었습니다.'
        },
        {
          title: '주간 핵심 이슈 요약',
          q: '1·2·3팀 주간보고에서 이번 주 임원회의에 보고할 핵심 리스크만 뽑아줘.',
          a: '1. 기획 1팀·지원 3팀 핵심 과제 일정대로 정상 진행 중 (달성률 90% 이상)<br/>2. <strong>운영 2팀 시스템 고도화 과제 외주 납기 지연 리스크 발생</strong> — 협력사 대체 일정 협의 중<br/>3. 4분기 잔여 예산 집행 계획 금주 내 확정 예정'
        },
        {
          title: '안전·규정 개정 비교표',
          q: '사내 생성형 AI 활용 시 부서장이 꼭 챙겨야 할 보안 수칙 3가지만 정리해 줘.',
          a: '① 고객 개인정보 및 미공개 재무 수치 입력 금지(익명화 처리)<br/>② 외부 통계·법령 인용 시 Deep Research 원문 출처 링크 교차 확인<br/>③ 로컬 파일 작업 시 지정된 업무 폴더에서만 Claude Code 실행 승인'
        }
      ],
      templates: [
        {
          title: '주제 1 · 조직 관리·업무 효율화 벤치마킹',
          text: '[목적] 팀 내 반복 보고 업무 줄이기\n[조사 내용] AI 도구를 활용해 주간보고, 회의록, KPI 관리를 자동화한 기업 사례 3가지를 찾고 도입 시 주의할 보안 수칙을 정리해 줘.'
        },
        {
          title: '주제 2 · 경영·시장 동향 및 경쟁사 리서치',
          text: '[목적] 내년 사업계획 수립을 위한 시장 환경 파악\n[조사 내용] 최근 1년간 우리 업계의 주요 트렌드 변화와 경쟁사의 신사업/조직 개편 동향을 조사해 줘.\n[형식] 임원 보고용으로 기회 요인과 리스크를 표로 비교해 줘.'
        }
      ],
      scenarios: [
        {
          shortLabel: '주제 1: 부서 보고·회의 업무 자동화',
          prompt:
            '[목적] 팀 내 반복 보고 업무 줄이기\n[조사 내용] AI 도구를 활용해 주간보고, 회의록, KPI 관리를 자동화한 기업 사례 3가지를 찾고 도입 시 주의할 보안 수칙을 정리해 줘.',
          planTitle: '사내 AI 도입 및 부서 생산성 혁신 동향',
          plan: [
            '국내외 주요 기업의 AI 기반 주간보고·회의록·KPI 관리 자동화 도입 사례 3건 수집',
            '보직장(팀장/그룹장)의 핵심 업무별 시간 절감 효과 및 사내 데이터 보안 거버넌스 분석',
            '부서장 의사결정용 우선순위 비교표 및 보안 수칙 가이드 작성'
          ],
          siteChips: [
            { domain: 'mckinsey.com', title: 'Enterprise AI Productivity 2026' },
            { domain: 'gartner.com', title: 'AI Workloads & Manager ROI' },
            { domain: 'hankyung.com', title: '국내 대기업 AI 업무혁신 사례' },
            { domain: 'etnews.com', title: '사내 문서 연동 AI 에이전트 동향' },
            { domain: 'hbr.org', title: 'How Managers Lead with AI' },
            { domain: 'kdi.re.kr', title: '기업 생성형 AI 도입 효과 분석' }
          ],
          searchQueries: [
            '국내외 대기업 생성형 AI 부서 단위 업무 자동화 ROI 사례 2025 2026',
            '보직장 팀장 주간보고 회의록 데이터 취합 시간 절감 효과 통계',
            '사내 AI 도입 보안 가이드라인 및 로컬 폴더 연동 거버넌스'
          ],
          sources: [
            {
              id: 1,
              title: '2026 글로벌 기업 AI 업무 생산성 및 관리자 의사결정 리포트',
              domain: 'www.mckinsey.com',
              snippet: '단순 챗봇 질의를 넘어 부서 문서·데이터 취합에 AI를 연결한 조직은 주간 보고 준비 시간을 평균 45% 단축.'
            },
            {
              id: 2,
              title: '국내 주요 대기업 사내 AI 에이전트 도입 성과 및 보안 가이드',
              domain: 'www.etnews.com',
              snippet: '회의록 액션 아이템 추출과 다수 부서 엑셀 취합 자동화가 현장 부서장 만족도 1·2위를 기록.'
            },
            {
              id: 3,
              title: '부서 단위 AI 워크플로우 자동화 및 동적 대시보드 전환 사례집',
              domain: 'hbr.org',
              snippet: '고정형 PPT 장표 대신 실시간 필터링이 가능한 HTML 대시보드 보고로 임원 회의 의사결정 속도 향상.'
            }
          ],
          reportHtml: `
            <h5>부서 단위 AI 도입 및 업무 생산성 혁신 동향 보고서</h5>
            <p class="report-meta">작성: Gemini Deep Research · 검토 대상: 48개 국내외 기업 사례 및 연구 보고서 교차 검증</p>
            <p><strong>1. 핵심 요약 (Executive Summary)</strong></p>
            <p>단순 챗봇 사용을 넘어 <strong>문서 작성·데이터 취합·의사결정 보조</strong>에 AI를 연결한 부서는 주간 보고 준비 시간을 평균 45% 단축했습니다. <span class="citation" data-cite="1">[1]</span></p>
            <ul>
              <li><strong>1순위 — 주간/월간 회의록 및 실행과제(Action Item) 자동 정리:</strong> 회의 종료 후 3분 만에 담당자별 할 일과 마감일 표가 생성됩니다. <span class="citation" data-cite="2">[2]</span></li>
              <li><strong>2순위 — 산재된 팀별 엑셀/보고서 취합 자동화:</strong> Claude Code를 활용해 여러 팀의 파일을 한 번에 읽어 부서장 요약본을 즉시 생성합니다. <span class="citation" data-cite="2">[2]</span> <span class="citation" data-cite="3">[3]</span></li>
              <li><strong>3순위 — 정적 PPT 대신 동적 웹 대시보드 보고:</strong> 실시간 필터링이 가능한 HTML 상황판으로 임원 보고 효율을 극대화합니다. <span class="citation" data-cite="3">[3]</span></li>
            </ul>
            <p><strong>2. 20명 규모 부서 즉시 적용 우선순위 비교표</strong></p>
            <table class="gem-report-table">
              <thead>
                <tr>
                  <th>우선순위</th>
                  <th>적용 업무 영역</th>
                  <th>시간 절감 효과</th>
                  <th>도입 방법 및 핵심 보안 수칙</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1순위 (즉시)</strong></td>
                  <td>주간 실적 보고서 &amp; 회의록 요약</td>
                  <td>주 3.5시간 절감</td>
                  <td>지정된 로컬 업무 폴더 내에서만 Claude Code 실행 승인</td>
                </tr>
                <tr>
                  <td><strong>2순위 (단기)</strong></td>
                  <td>외부 시장·법령·경쟁사 심층 조사</td>
                  <td>건당 4~6시간 절감</td>
                  <td>사내 대외비 수치 익명화 후 Gemini Deep Research 출처 검증</td>
                </tr>
                <tr>
                  <td><strong>3순위 (확산)</strong></td>
                  <td>부서 KPI·예산 실시간 동적 대시보드</td>
                  <td>월간 장표 작업 70% 감소</td>
                  <td>외부 클라우드 업로드 없이 사내 PC 로컬 <code>index.html</code>로 공유</td>
                </tr>
              </tbody>
            </table>
          `,
          followUpSummary:
            '<strong>[임원 보고용 3줄 핵심 요약]</strong><br/>1. <strong>도입 효과:</strong> 부서 내 산재된 보고서 취합과 시장 조사에 AI를 적용할 경우 보직장 및 팀원의 보고 준비 시간을 평균 45% 절감할 수 있습니다.<br/>2. <strong>핵심 과제:</strong> ① 팀별 주간보고 일괄 취합(Claude Code), ② 외부 동향 심층 조사(Deep Research), ③ 실시간 KPI 웹 상황판 전환 순으로 추진하는 것이 가장 효과적입니다.<br/>3. <strong>보안 준수:</strong> 외부 웹 조사 시에는 사내 기밀 수치를 익명화하고, 내부 파일 분석은 지정된 로컬 폴더 내에서만 승인 하에 실행하여 보안을 유지합니다.'
        },
        {
          shortLabel: '주제 2: 내년도 시장·경쟁사 리서치',
          prompt:
            '[목적] 내년 사업계획 수립을 위한 시장 환경 파악\n[조사 내용] 최근 1년간 우리 업계의 주요 트렌드 변화와 경쟁사의 신사업/조직 개편 동향을 조사해 줘.\n[형식] 임원 보고용으로 기회 요인과 리스크를 표로 비교해 줘.',
          planTitle: '내년도 사업계획 수립을 위한 업계 트렌드 및 경쟁사 조직개편 분석',
          plan: [
            '최근 1년간(2025~2026년) 국내외 주력 산업군 핵심 트렌드 변화(AI 기반 운영 최적화, 친환경·에너지 효율 규제, 공급망 다변화) 조사',
            '주요 경쟁사 3사의 신사업 투자 방향 및 2026년 하반기 조직 개편(AX 전담 조직 신설, 현장 안전·운영 통합 등) 동향 비교',
            '임원 사업계획 보고용 기회 요인(Opportunity) 대 리스크(Risk) 비교표 및 부서 대응 전략 도출'
          ],
          siteChips: [
            { domain: 'kdi.re.kr', title: 'KDI 2027 경제전망 및 산업동향' },
            { domain: 'seri.org', title: '국내 대기업 사업구조 재편 리포트' },
            { domain: 'hankyung.com', title: '주요 기업 2027 조직개편·신사업 분석' },
            { domain: 'mk.co.kr', title: '산업계 AX(AI 전환) 전담조직 확산' },
            { domain: 'gartner.com', title: '2027 Strategic Business Trends' },
            { domain: 'motir.go.kr', title: '산업통상자원부 주력산업 정책방향' }
          ],
          searchQueries: [
            '2026 2027 국내 주요 기업 내년도 사업계획 핵심 키워드 신사업 동향',
            '경쟁사 조직 개편 AX AI 전환 전담팀 신설 및 운영 효율화 사례',
            '내년도 경영환경 기회 요인 리스크 비교 임원 보고서 프레임워크'
          ],
          sources: [
            {
              id: 1,
              title: '2027 국내 주요 산업군 경영환경 전망 및 사업계획 핵심 어젠다 (경제연구원)',
              domain: 'www.kdi.re.kr',
              snippet: '고금리·원가 상승 장기화에 따라 외형 확장보다 AI·데이터 기반 원가 절감(Operational Excellence)과 고부가 서비스 전환이 1순위 과제로 부상.'
            },
            {
              id: 2,
              title: '국내 주요 선도기업 조직 개편 분석 — "현장 부서 주도형 AX(AI 전환) 체제로 재편"',
              domain: 'www.hankyung.com',
              snippet: '본사 IT 부서 중심에서 벗어나 각 현업 부서(생산·설비·기획·영업) 내부에 AI 실무 리더를 배치하는 분산형 조직 개편이 주류로 자리잡음.'
            },
            {
              id: 3,
              title: 'Gartner Strategic Predictions — 자율형 업무 에이전트 및 규제 준수 리스크 관리',
              domain: 'www.gartner.com',
              snippet: '실시간 데이터 대시보드와 로컬 AI 에이전트를 결합한 조직이 경쟁사 대비 분기 의사결정 속도를 2.1배 단축.'
            }
          ],
          reportHtml: `
            <h5>내년도 사업계획 수립을 위한 시장 트렌드 및 경쟁사 동향 보고서</h5>
            <p class="report-meta">작성: Gemini Deep Research · 검토 대상: 52개 경제연구소 전망 및 기업 공시·언론 보도 교차 검증</p>
            <p><strong>1. 핵심 요약 (Executive Summary)</strong></p>
            <ul>
              <li><strong>시장 트렌드 변화 (외형 확장 → 운영 효율화):</strong> 원가 및 에너지 비용 변동성이 커지면서 업계 전반의 내년도 사업계획 초점이 '신규 설비 증설'에서 <strong>'AI·데이터 기반 기존 자산 가동률 향상 및 비용 절감'</strong>으로 이동하고 있습니다. <span class="citation" data-cite="1">[1]</span></li>
              <li><strong>경쟁사 신사업 및 조직 개편 핵심:</strong> 주요 경쟁사들은 본사 지원 조직을 효율화하는 대신, <strong>현업 부서 단위로 데이터 분석·자동화를 직접 수행하는 '현장 중심 AI 실무 조직'</strong>을 확대했습니다. <span class="citation" data-cite="2">[2]</span></li>
              <li><strong>우리 부서 시사점:</strong> 내년도 사업계획 보고 시 단순 예산 증액 요구보다, 기존 업무의 자동화를 통한 시간·비용 절감 목표(KPI)를 함께 제시할 때 설득력이 높아집니다. <span class="citation" data-cite="3">[3]</span></li>
            </ul>
            <p><strong>2. 내년도 경영 환경 기회 요인(Opportunity) vs 리스크(Risk) 비교표</strong></p>
            <table class="gem-report-table">
              <thead>
                <tr>
                  <th>분석 영역</th>
                  <th>기회 요인 (Opportunity)</th>
                  <th>리스크 요인 (Risk)</th>
                  <th>부서 사업계획 반영 전략</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>운영 및 원가</strong></td>
                  <td>AI·예지보전 도입으로 반복 운영비 15~25% 절감 가능</td>
                  <td>전력비·외주 용역 단가 상승으로 고정비 부담 가중</td>
                  <td>부서 내 수작업 취합 업무 50% 자동화 및 외주 계약 분할 검수제 도입</td>
                </tr>
                <tr>
                  <td><strong>조직 및 인력</strong></td>
                  <td>현업 중심 AI 도구(Claude Code 등) 활용으로 업무 처리 속도 향상</td>
                  <td>부서 간 디지털 활용 격차 발생 및 숙련 인력 퇴직에 따른 노하우 유실</td>
                  <td>부서 표준 매뉴얼·이력 폴더의 MCP 데이터화 및 전 팀원 프롬프트 템플릿 공유</td>
                </tr>
                <tr>
                  <td><strong>규제 및 컴플라이언스</strong></td>
                  <td>안전·에너지 고효율 설비 투자 시 정부 세액공제 및 정책 자금 확대</td>
                  <td>산업안전·데이터 보안 규제 강화로 위반 시 법적·평판 리스크 증대</td>
                  <td>Deep Research 기반 분기별 법령 개정 상시 모니터링 체계 구축</td>
                </tr>
              </tbody>
            </table>
          `,
          followUpSummary:
            '<strong>[임원 보고용 3줄 핵심 요약]</strong><br/>1. <strong>업계 흐름:</strong> 최근 경쟁사들은 외형 확장보다 현업 부서 단위의 AI 전환(AX)을 통해 고정비를 낮추고 의사결정 속도를 높이는 방향으로 조직을 개편하고 있습니다.<br/>2. <strong>기회와 리스크:</strong> 외주 단가·원가 상승 리스크가 존재하나, 부서 내 데이터 취합 자동화와 설비·프로젝트 사전 리스크 관리를 결합하면 예산 증액 없이도 핵심 KPI를 15% 이상 개선할 수 있습니다.<br/>3. <strong>내년도 부서 중점 과제:</strong> ① 현업 데이터 표준화(MCP 연동), ② 월간/분기 동적 대시보드 보고 체계 정착, ③ 법령·시장 동향 상시 리서치 프로세스를 내년도 사업계획 3대 실행과제로 상정합니다.'
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
      fileContents: {
        '1팀_주간실적.docx': {
          badge: 'Word 보고서 내용',
          type: 'code',
          content: `[기획 1팀 주간 업무 실적 보고]
• 핵심 과제: 신규 업무 프로세스 표준화 도입 (진척률 95%, 정상 진행)
• 시장 조사: 내년도 사업계획 수립용 고객 동향 조사 완료 (진척률 92%)
• 특이사항: 특이 리스크 없음. 다음 주 전사 공유회 자료 배포 예정.`
        },
        '2팀_프로젝트현황.xlsx': {
          badge: '엑셀 프로젝트 현황표',
          type: 'html',
          content: `
            <table class="preview-table">
              <thead><tr><th>과제명</th><th>담당</th><th>진척률</th><th>상태 및 이슈</th></tr></thead>
              <tbody>
                <tr><td>사내 시스템 고도화</td><td>운영 2팀</td><td>68%</td><td><strong style="color:#d97706;">지연주의 (외주 모듈 납기 1주 지연)</strong></td></tr>
                <tr><td>정기 운영 안정화</td><td>운영 2팀</td><td>91%</td><td>정상</td></tr>
                <tr><td>협력사 연간 계약 갱신</td><td>운영 2팀</td><td>대기</td><td><strong style="color:#dc2626;">부서장 단가 검토 필요</strong></td></tr>
              </tbody>
            </table>
          `
        },
        '3팀_예산집행내역.csv': {
          badge: 'CSV 예산 데이터',
          type: 'code',
          content: `항목코드,예산항목,연간배정(백만원),누적집행(백만원),집행률(%),비고
BG-301,사내 직무교육 운영,120.0,108.0,90.0%,정상 집행 중
BG-302,부서 운영지원비,80.0,49.6,62.0%,4분기 집행 계획 점검 필요
BG-303,시스템 유지보수,150.0,115.5,77.0%,적정`
        },
        '지난_회의록_모음': {
          badge: '하위 폴더 (12건)',
          type: 'code',
          content: `📁 지난_회의록_모음/
 ├── 2026_09_부서장_주간회의록.docx
 ├── 2026_10_부서장_주간회의록.docx
 └── 2026_11_부서장_주간회의록.docx
(최근 3개월간 주간회의록 12건이 보관되어 있습니다)`
        },
        '임원회의_핵심요약보고.md': {
          badge: '✨ AI 생성 임원 보고서',
          type: 'html',
          content: `
            <div class="preview-doc">
              <h4>📑 주간 부서 핵심 성과 및 이슈 요약 (임원 회의 보고용)</h4>
              <p><strong>1. 주요 성과 (기획 1팀 · 지원 3팀)</strong></p>
              <ul>
                <li>신규 프로세스 도입(95%) 및 연간 직무교육 프로그램(90%) 목표 일정대로 정상 진행 중.</li>
              </ul>
              <p><strong>2. 중점 관리 이슈 및 대응 방안 (운영 2팀)</strong></p>
              <ul>
                <li><strong style="color:#d97706;">시스템 고도화 일정 지연(진척률 68%):</strong> 외주 업체 모듈 납기 1주 지연 발생 → 대체 개발 인력 투입 및 단계별 검수로 만회 계획 수립.</li>
                <li><strong style="color:#dc2626;">협력사 계약 갱신:</strong> 금주 목요일 부서장 단가 확정 회의 후 체결 예정.</li>
              </ul>
              <p><strong>3. 예산 집행 현황</strong></p>
              <p>부서 전체 평균 집행률 74.0%로 적정 수준이나, 지원 3팀 운영지원비(62%)는 연말 이월 방지를 위해 12월 집행 일정을 확정함.</p>
            </div>
          `
        },
        'index.html': {
          badge: '✨ AI 생성 동적 대시보드 (실시간 미리보기)',
          type: 'html',
          content: `
            <div class="preview-dash-mini">
              <div class="pdm-head">
                <strong>📊 부서장용 팀 성과·예산 통합 대시보드 (index.html)</strong>
                <span>● 브라우저에서 즉시 열림</span>
              </div>
              <div class="pdm-kpis">
                <div class="pdm-kpi"><span>평균 KPI 달성률</span><strong>88.5%</strong></div>
                <div class="pdm-kpi"><span>예산 집행률</span><strong>74.0%</strong></div>
                <div class="pdm-kpi warn"><span>지연/관리 과제</span><strong>운영 2팀 (2건)</strong></div>
              </div>
              <div class="pdm-bars">
                <div class="pdm-bar-row"><span>기획 1팀</span><div class="pdm-bar"><i style="width:94%;background:#059669;"></i></div><strong>94%</strong></div>
                <div class="pdm-bar-row"><span>운영 2팀</span><div class="pdm-bar"><i style="width:82%;background:#d97706;"></i></div><strong>82%</strong></div>
                <div class="pdm-bar-row"><span>지원 3팀</span><div class="pdm-bar"><i style="width:90%;background:#2563eb;"></i></div><strong>90%</strong></div>
              </div>
              <p class="pdm-foot">💡 하단 Module 4에서 이 대시보드의 전체 필터 기능을 직접 조작해 보실 수 있습니다.</p>
            </div>
          `
        }
      },
      steps: [
        {
          btn: '① 이 폴더에 있는 팀별 보고서들 요약해 줘',
          user: '폴더 안에 있는 1, 2, 3팀의 보고 파일을 모두 읽고, 부서장 입장에서 꼭 챙겨야 할 핵심 이슈만 요약해 줘.',
          toolCall: 'Read(1팀_주간실적.docx)',
          toolSub: 'Read 14 lines (ctrl+r to expand)',
          extraToolCall: 'Read(2팀_프로젝트현황.xlsx)',
          extraToolSub: 'Read 3 rows from project_status',
          previewFile: '2팀_프로젝트현황.xlsx',
          ai: '3개 팀 자료를 모두 확인했습니다.<br/>• <strong>1팀:</strong> 신규 과제 일정 정상 진행 중 (달성률 94%)<br/>• <strong>2팀:</strong> 외주 업체 납기 지연으로 <strong>일정 리스크 1건 발생</strong> (우측 미리보기 표 참고)<br/>• <strong>3팀:</strong> 4분기 예산 집행률이 62%로 잔여 예산 관리가 필요합니다.'
        },
        {
          btn: '② 임원 보고용 1장 요약 보고서 만들어 줘',
          user: '방금 요약한 내용을 바탕으로 임원 주간회의에 제출할 깔끔한 핵심 요약 보고서 파일로 저장해 줘.',
          toolCall: 'Write(임원회의_핵심요약보고.md)',
          toolSub: 'Wrote 21 lines to 임원회의_핵심요약보고.md',
          newFile: '✨ 임원회의_핵심요약보고.md',
          previewFile: '임원회의_핵심요약보고.md',
          diffLines: [
            '  1 + # 주간 부서 핵심 성과 및 이슈 요약 (임원 회의 보고용)',
            '  2 + 1. 주요 성과 : 기획 1팀 신규 프로세스(95%), 지원 3팀 직무교육(90%) 정상 진행',
            '  3 + 2. 중점 관리 : 운영 2팀 시스템 고도화(68%) 외주 납기 지연 및 만회 대책',
            '  4 + 3. 예산 현황 : 부서 평균 집행률 74.0% (잔여 운영비 12월 집행 일정 확정)'
          ],
          ai: '<code>임원회의_핵심요약보고.md</code> 문서 파일을 폴더에 새로 생성했습니다! [주요 성과] - [지연 이슈 및 대응방안] - [예산 현황] 3단 구조로 정리되었으며, 우측 미리보기 패널에서 완성본을 바로 확인하실 수 있습니다.'
        },
        {
          btn: '③ 이걸 인터랙티브 대시보드로 만들어 줘',
          user: '팀별 KPI와 예산 집행 현황을 필터로 골라볼 수 있는 동적 대시보드 파일(index.html)을 만들어 줘.',
          toolCall: 'Write(index.html)',
          toolSub: 'Wrote 136 lines to index.html',
          newFile: '🌐 index.html',
          previewFile: 'index.html',
          diffLines: [
            '  1 + <!DOCTYPE html> <!-- 부서장용 팀 성과·예산 통합 대시보드 -->',
            '  2 + <header>기간별(월간/분기) 및 팀별(1팀/2팀/3팀) 실시간 필터 드롭다운</header>',
            '  3 + <section class="kpi-cards">평균 KPI 88.5% | 예산 집행률 74.0% | 관리 이슈 2건</section>',
            '  4 + <script>팀 선택 시 막대그래프 및 프로젝트 현황표 즉시 갱신 로직</script>'
          ],
          ai: '<code>index.html</code>(브라우저용 대시보드 파일) 생성이 완료되었습니다! 생성된 <code>index.html</code>이나 우측 미리보기를 확인하시면 팀별 성과와 리스크가 한눈에 보이는 웹 상황판이 즉시 나타납니다.'
        }
      ]
    },
    mcp: {
      configJson: `{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "./지난_회의록_모음"],
      "env": { "ACCESS_MODE": "READ_ONLY" }
    },
    "company_erp_kpi": {
      "command": "python",
      "args": ["-m", "mcp_erp_budget", "--dept", "biz_planning"],
      "env": { "DB_ROLE": "READONLY_VIEWER" }
    },
    "groupware_docs": {
      "command": "node",
      "args": ["./mcp-servers/groupware-manual-search.js"],
      "env": { "CATEGORY": "구매·계약·인사표준" }
    }
  }
}`,
      servers: [
        {
          id: 'filesystem',
          name: 'filesystem',
          label: '내 PC 주간회의록·보고서 폴더',
          status: 'connected',
          transport: 'stdio · npx @modelcontextprotocol/server-filesystem',
          scope: './지난_회의록_모음 (지정 폴더 외 접근 차단)',
          toolsCount: 4,
          tools: ['search_and_read_files', 'list_directory', 'read_text_file', 'get_file_info'],
          desc: 'C:\\Users\\GroupLead\\Desktop\\부서_주간보고_취합\\지난_회의록_모음'
        },
        {
          id: 'company_erp_kpi',
          name: 'company_erp_kpi',
          label: '사내 예산·KPI 통합 DB',
          status: 'connected',
          transport: 'stdio · python -m mcp_erp_budget',
          scope: '경영관리 ERP 예산·KPI 조회 전용 뷰(SELECT 전용)',
          toolsCount: 3,
          tools: ['query_department_budget', 'get_team_kpi_metrics', 'list_pending_approvals'],
          desc: '전사 경영관리 시스템 (팀별 예산 잔액, 분기 KPI 달성률 실시간 조회)'
        },
        {
          id: 'groupware_docs',
          name: 'groupware_docs',
          label: '사내 문서함·노션 규정집',
          status: 'connected',
          transport: 'stdio · node groupware-manual-search.js',
          scope: '사내 표준 사규·매뉴얼 검색 전용',
          toolsCount: 2,
          tools: ['search_internal_manual', 'get_contract_guideline'],
          desc: '부서 업무 매뉴얼, 외주 계약 표준 가이드라인 및 회의 액션아이템 조회'
        }
      ],
      scenarios: [
        {
          btn: '① [폴더 MCP] 지난 3개월 주간회의록에서 반복된 미해결 과제 추출',
          user: '지난_회의록_모음 폴더에서 최근 3개월간 반복해서 지적된 미해결 과제를 찾아 요약해 줘.',
          server: 'filesystem',
          tool: 'search_and_read_files',
          args: '{ "path": "./지난_회의록_모음", "pattern": "*_주간회의록.docx", "limit": 12 }',
          permTitle: '로컬 회의록 폴더(./지난_회의록_모음) 내 주간회의록 12건 열람을 허용하시겠습니까?',
          rawResult: `Found 12 files in ./지난_회의록_모음:\n- 2026_09_부서장_주간회의록.docx (이슈: 팀별 실적 엑셀 양식 상이로 취합 지연)\n- 2026_10_부서장_주간회의록.docx (이슈: 외주 협력사 납기 점검 프로세스 미비)\n- 2026_11_부서장_주간회의록.docx 외 9건 텍스트 추출 완료`,
          answer: '<code>filesystem</code> MCP 도구로 지난 회의록 12건을 직접 조회해 교차 분석했습니다.<br/>• <strong>반복 미해결 과제 1위:</strong> 팀 간 데이터 양식 불일치로 인한 주간보고 취합 지연 (<strong>4회 언급</strong>)<br/>• <strong>반복 미해결 과제 2위:</strong> 신규 입사자 및 파견 인력 온보딩 매뉴얼 부재 (<strong>3회 언급</strong>)<br/>• <strong>권장 조치:</strong> 차주 부서장 회의 안건으로 "Claude Code 기반 공통 데이터 양식 표준화"를 상정하시는 것을 권장합니다.'
        },
        {
          btn: '② [사내 DB MCP] 4분기 팀별 미집행 잔여 예산 및 이월 리스크 조회',
          user: '사내 예산 DB에서 현재 우리 부서(1·2·3팀)의 4분기 잔여 예산과 연말 미집행 리스크 항목을 조회해 줘.',
          server: 'company_erp_kpi',
          tool: 'query_department_budget',
          args: '{ "dept": "경영기술부문", "teams": ["기획1팀", "운영2팀", "지원3팀"], "quarter": "2026-Q4" }',
          permTitle: '사내 경영관리 ERP DB(읽기 전용)에서 부서 예산 집행 내역 조회를 허용하시겠습니까?',
          rawResult: `SELECT team_name, account_name, allocated_m, spent_m, rate_pct FROM erp_budget WHERE quarter='2026-Q4';\n-> 기획1팀 | 시장조사·세미나 | 배정 80.0M | 집행 68.0M (85.0%)\n-> 운영2팀 | 시스템 유지보수 | 배정 150.0M | 집행 115.5M (77.0%)\n-> 지원3팀 | 부서 운영지원비 | 배정 80.0M | 집행 49.6M (62.0% - 집행부진 주의)`,
          answer: '<code>company_erp_kpi</code> MCP로 사내 ERP 예산 원장을 실시간 조회했습니다.<br/>• <strong>부서 전체 집행률:</strong> 평균 <strong>74.0%</strong>로 계획 범위 내 정상 집행 중입니다.<br/>• <strong>중점 관리 항목:</strong> 지원 3팀의 <code>부서 운영지원비</code> 집행률이 <strong>62.0%(잔액 3,040만 원)</strong>로 가장 낮습니다. 연말 불용 예산이 발생하지 않도록 12월 사내 직무교육 및 환경개선 집행 품의를 금주 내 확정하도록 안내하시는 것이 좋습니다.'
        },
        {
          btn: '③ [문서함 MCP] 외주 용역 납기 지연 시 사내 표준 대응 매뉴얼 확인',
          user: '사내 문서함에서 운영 2팀의 "외주 모듈 납기 지연" 같은 상황 발생 시 조치해야 할 표준 계약·검수 가이드라인을 찾아줘.',
          server: 'groupware_docs',
          tool: 'search_internal_manual',
          args: '{ "query": "외주 용역 납기 지연 대응 및 분할 검수 기준", "category": "구매·계약규정" }',
          permTitle: '사내 문서함(Groupware/Notion) 규정집 검색 도구 실행을 허용하시겠습니까?',
          rawResult: `[사내 표준 매뉴얼 검색 결과 - 문서번호: STD-PROC-2026-08]\n1. 납기 지연 5영업일 이상 예상 시: 협력사 주간 공정표 징구 및 핵심 모듈 우선 분할 검수 전환\n2. 부서장 승인 사항: 대체 인력 투입 요청 공문 발송 및 지체상금 유예 조건부 만회 일정 합의서 작성`,
          answer: '<code>groupware_docs</code> MCP로 사내 구매·계약 표준 매뉴얼(<code>STD-PROC-2026-08</code>)을 확인했습니다.<br/>• <strong>1단계 (즉시):</strong> 1주 이상 납기 지연 시 전체 일괄 납품 대신 <strong>핵심 기능 우선 분할 검수 체제</strong>로 전환해야 합니다.<br/>• <strong>2단계 (부서장 결재):</strong> 금주 목요일 협력사 미팅 시 "대체 개발 인력 투입 및 만회 일정 합의서"를 징구하면 일정 리스크를 최소화할 수 있습니다.'
        },
        {
          btn: '④ ⚡ [실전 복합 분석] 회의록 폴더 + ERP 예산 연속 조회 후 연말 실행안 작성',
          user: '지난 회의록 폴더에서 미해결된 "온보딩 매뉴얼·교육 부족" 이슈를 확인하고, ERP 예산 DB에서 지원 3팀의 잔여 운영비를 조회해 연말 집행 계획안을 짜줘.',
          server: 'filesystem',
          tool: 'search_and_read_files',
          args: '{ "path": "./지난_회의록_모음", "query": "온보딩 매뉴얼 직무교육" }',
          permTitle: '[1/2단계] 로컬 회의록 폴더에서 온보딩·교육 관련 미해결 안건 조회를 허용하시겠습니까?',
          rawResult: `[1/2 filesystem 조회 완료] 9~11월 회의록 3회 반복 지적: "신규·파견 인력 온보딩 매뉴얼 및 실무 AI 교육 프로그램 부재로 초기 업무 적응 지연"`,
          secondCall: {
            server: 'company_erp_kpi',
            tool: 'query_department_budget',
            args: '{ "team": "지원3팀", "account": "BG-302 부서 운영지원비" }',
            rawResult: `[2/2 company_erp_kpi 연속 조회 완료] 지원3팀 부서 운영지원비 잔여 가용액: 30,400,000원 (12월 중 집행 품의 가능)`
          },
          answer: '<strong>2개의 MCP 서버(<code>filesystem</code> → <code>company_erp_kpi</code>)를 연속 조회</strong>하여 미해결 과제와 잔여 예산을 매칭했습니다.<br/>• <strong>미해결 과제 (회의록 폴더):</strong> 최근 3개월간 신규 인력 온보딩 매뉴얼 및 실무 교육 제작이 예산·일정 미확정으로 지연되었습니다.<br/>• <strong>가용 예산 매칭 (ERP DB):</strong> 현재 지원 3팀의 미집행 운영지원비 잔액이 <strong>3,040만 원</strong> 남아 있으므로, 이 중 <strong>1,200만 원</strong>을 배정해 12월 둘째 주까지 사내 온보딩 가이드북 제작 및 직무 워크숍을 추진하면 미해결 과제 해소와 예산 적기 집행을 동시에 달성할 수 있습니다.'
        }
      ]
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
              { name: '신규 프로세스 도입', metric: '기획 1팀 · 95%', status: '정상', cls: 'ok' },
              { name: '시스템 고도화 과제', metric: '운영 2팀 · 68%', status: '지연주의', cls: 'warn' },
              { name: '연간 교육 프로그램', metric: '지원 3팀 · 90%', status: '정상', cls: 'ok' },
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
              { name: '신규 프로세스 도입', metric: '진척률 95%', status: '정상', cls: 'ok' },
              { name: '시장 조사 보고서', metric: '진척률 92%', status: '정상', cls: 'ok' }
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
              { name: '연간 교육 프로그램', metric: '진척률 90%', status: '정상', cls: 'ok' }
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
              { name: '신규 프로세스 도입', metric: '기획 1팀 · 완료', status: '정상', cls: 'ok' },
              { name: '시스템 고도화 과제', metric: '운영 2팀 · 80%', status: '지연주의', cls: 'warn' }
            ]
          },
          team1: {
            kpis: [
              { label: '기획 1팀 분기 KPI', value: '96.0%', delta: '목표 초과 달성', tone: 'good' },
              { label: '분기 예산 집행률', value: '83.0%', delta: '적정', tone: 'good' },
              { label: '완료 과제', value: '4건', delta: '전원 완료', tone: 'good' },
              { label: '리스크 건수', value: '0건', delta: '특이사항 없음', tone: 'good' }
            ],
            bars: [
              { name: '신규 프로세스', value: 98, color: '#059669' },
              { name: '시장 조사', value: 94, color: '#059669' }
            ],
            rows: [
              { name: '신규 프로세스 도입', metric: '완료 (98%)', status: '정상', cls: 'ok' },
              { name: '시장 조사 보고서', metric: '완료 (94%)', status: '정상', cls: 'ok' }
            ]
          },
          team2: {
            kpis: [
              { label: '운영 2팀 분기 KPI', value: '86.0%', delta: '전분기 대비 +4.0%', tone: 'good' },
              { label: '분기 예산 집행률', value: '79.0%', delta: '계획 일치', tone: 'good' },
              { label: '진행 과제', value: '3건', delta: '지연 1건 관리 중', tone: 'warn' },
              { label: '해소된 리스크', value: '2건', delta: '대응 완료', tone: 'good' }
            ],
            bars: [
              { name: '시스템 고도화', value: 80, color: '#d97706' },
              { name: '정기 운영', value: 92, color: '#2563eb' }
            ],
            rows: [
              { name: '시스템 고도화 과제', metric: '진척률 80%', status: '지연주의', cls: 'warn' },
              { name: '협력사 계약 갱신', metric: '최종 검토', status: '정상', cls: 'ok' }
            ]
          },
          team3: {
            kpis: [
              { label: '지원 3팀 분기 KPI', value: '92.0%', delta: '안정적 달성', tone: 'good' },
              { label: '분기 예산 집행률', value: '82.5%', delta: '적정', tone: 'good' },
              { name: '완료 과제', value: '2건', delta: '정상 완료', tone: 'good' },
              { label: '리스크 건수', value: '0건', delta: '특이사항 없음', tone: 'good' }
            ],
            bars: [
              { name: '연간 교육', value: 93, color: '#059669' },
              { name: '예산 결산', value: 91, color: '#2563eb' }
            ],
            rows: [
              { name: '연간 교육 프로그램', metric: '완료 (93%)', status: '정상', cls: 'ok' }
            ]
          }
        }
      },
      templates: [
        {
          title: '1단계 · 부서장용 동적 대시보드 기본 제작 프롬프트',
          text: '이 폴더에 있는 팀별 실적/예산 파일들을 읽어서, 부서장이 회의 때 바로 띄워놓고 볼 수 있는 동적 대시보드(index.html)를 만들어 줘.\n[필수 기능]\n1. 상단에 기간별/팀별 필터 드롭다운\n2. 핵심 KPI 카드 4개 (KPI 달성률, 예산 집행률, 진행 과제 수, 리스크 건수)\n3. 팀별 목표 달성률 막대 그래프\n4. 별도 설치 없이 index.html 파일만 열면 바로 작동하게 만들어 줘.'
        },
        {
          title: '2단계 · 임원 보고용 시각 완성도 & 기능 추가 프롬프트',
          text: '방금 만든 index.html 대시보드를 임원 주간회의 보고용으로 업그레이드해 줘.\n[추가 요청]\n1. 전체 컬러를 깔끔한 기업형 네이비·블루 톤으로 맞추고 표 가독성 개선\n2. 지연주의 또는 확인필요 상태인 안건만 필터링하는 [🚨 중점 관리 이슈만 보기] 버튼 추가\n3. 우측 상단에 보고서 출력용 [🖨️ 인쇄 / PDF 저장] 버튼을 추가해 줘.'
        }
      ]
    }
  }
};
