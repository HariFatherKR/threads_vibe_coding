import type { CSSProperties } from "react";

const impactMetrics = [
  { value: "4.8x", label: "캠페인 제작 속도" },
  { value: "62%", label: "회의 시간 감소" },
  { value: "92%", label: "팀 온보딩 만족도" },
];

const featureCards = [
  {
    title: "한 번의 브리프로 전체 채널 제작",
    description:
      "제품 포지셔닝을 한 줄로 입력하면 광고, SNS, 상세페이지 카피까지 한 흐름으로 생성합니다.",
  },
  {
    title: "브랜드 보이스 자동 고정",
    description:
      "톤앤매너를 학습해 팀원이 바뀌어도 결과물의 말투와 메시지 구조가 무너지지 않습니다.",
  },
  {
    title: "실시간 성과 시뮬레이션",
    description:
      "출시 전 예상 반응과 클릭 흐름을 비교해서 가장 높은 전환 시나리오를 먼저 실행할 수 있습니다.",
  },
];

const timeline = [
  {
    step: "01",
    title: "전략 캡처",
    body: "핵심 타깃, 경쟁 우위, 금지 문구까지 템플릿으로 수집합니다.",
  },
  {
    step: "02",
    title: "콘텐츠 생성",
    body: "스토리텔링 구조로 랜딩, 이메일, 소셜 스크립트를 동시 생성합니다.",
  },
  {
    step: "03",
    title: "성과 최적화",
    body: "실시간 실험 결과를 기반으로 다음 배치를 자동 추천합니다.",
  },
];

const plans = [
  {
    tier: "Starter",
    price: "₩39,000",
    desc: "작은 팀이 빠르게 메시지를 통일할 때",
    cta: "무료로 시작",
    featured: false,
  },
  {
    tier: "Growth",
    price: "₩99,000",
    desc: "멀티 채널 캠페인을 주도하는 팀",
    cta: "가장 많이 선택",
    featured: true,
  },
  {
    tier: "Scale",
    price: "문의",
    desc: "브랜드/사업부 단위 운영과 권한 관리",
    cta: "데모 요청",
    featured: false,
  },
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden pb-20">
      <div className="gradient-orb gradient-orb-top" aria-hidden="true" />
      <div className="gradient-orb gradient-orb-bottom" aria-hidden="true" />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-8 md:px-8">
        <a className="brand-mark cursor-pointer" href="#hero">
          Threads Vibe
        </a>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-[color:var(--text-muted)] md:flex">
          <a className="cursor-pointer transition-colors hover:text-[color:var(--brand-deep)]" href="#features">
            기능
          </a>
          <a className="cursor-pointer transition-colors hover:text-[color:var(--brand-deep)]" href="#flow">
            워크플로우
          </a>
          <a className="cursor-pointer transition-colors hover:text-[color:var(--brand-deep)]" href="#pricing">
            요금제
          </a>
        </nav>
        <a className="btn-secondary hidden md:inline-flex" href="#cta">
          도입 상담
        </a>
      </header>

      <main className="mx-auto w-full max-w-6xl space-y-20 px-5 md:px-8">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]" id="hero">
          <div className="space-y-7" data-reveal="true">
            <p className="section-tag">Story-led Product Engine</p>
            <h1 className="display-title">
              제품의 진짜 매력을
              <br />
              고객 언어로 즉시 전환하세요.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[color:var(--text-muted)]">
              Threads Vibe는 제품 브리프를 읽고 채널별 메시지와 크리에이티브 시퀀스를
              자동으로 설계합니다. 출시 일정은 단축하고, 팀 전체의 카피 퀄리티는
              일정하게 유지하세요.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a className="btn-primary" href="#pricing">
                14일 무료 체험
              </a>
              <a className="btn-secondary" href="#flow">
                사용 흐름 보기
              </a>
            </div>
            <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3">
              {impactMetrics.map((metric, index) => (
                <article
                  className="metric-tile"
                  key={metric.label}
                  data-reveal="true"
                  style={{ "--delay": `${120 + index * 120}ms` } as CSSProperties}
                >
                  <p className="text-3xl font-semibold text-[color:var(--brand-deep)]">{metric.value}</p>
                  <p className="text-sm text-[color:var(--text-muted)]">{metric.label}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="hero-panel" data-reveal="true" style={{ "--delay": "220ms" } as CSSProperties}>
            <p className="hero-panel__label">Launch Snapshot</p>
            <h2 className="hero-panel__title">이번 주 신규 제품 런칭 계획</h2>
            <div className="space-y-4">
              <div className="hero-panel__line">
                <span>스토리 훅 작성</span>
                <strong>완료</strong>
              </div>
              <div className="hero-panel__line">
                <span>랜딩 + 광고 카피 동기화</span>
                <strong>진행 중</strong>
              </div>
              <div className="hero-panel__line">
                <span>전환 실험 시나리오 3안</span>
                <strong>예정</strong>
              </div>
            </div>
            <div className="hero-panel__footer">
              <p>예상 리드 상승</p>
              <p>+38%</p>
            </div>
          </aside>
        </section>

        <section className="space-y-8" id="features">
          <div className="space-y-3" data-reveal="true">
            <p className="section-tag">Why Teams Switch</p>
            <h2 className="section-title">한 팀처럼 말하는 제품 마케팅 시스템</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featureCards.map((card, index) => (
              <article
                className="feature-card"
                key={card.title}
                data-reveal="true"
                style={{ "--delay": `${120 + index * 130}ms` } as CSSProperties}
              >
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8" id="flow">
          <div className="space-y-3" data-reveal="true">
            <p className="section-tag">Workflow</p>
            <h2 className="section-title">아이디어에서 출시까지 3단계</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {timeline.map((item, index) => (
              <article
                className="timeline-card"
                key={item.step}
                data-reveal="true"
                style={{ "--delay": `${140 + index * 130}ms` } as CSSProperties}
              >
                <p className="timeline-card__step">{item.step}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="quote-block" data-reveal="true">
          <p>
            &ldquo;런칭 회의가 길어질수록 실행이 늦어졌는데, Threads Vibe를 도입한
            후에는 같은 인원으로도 한 주에 두 배 이상 실험합니다.&rdquo;
          </p>
          <span>마케팅 리드, Orbit Labs</span>
        </section>

        <section className="space-y-8" id="pricing">
          <div className="space-y-3" data-reveal="true">
            <p className="section-tag">Pricing</p>
            <h2 className="section-title">팀 성장 단계에 맞춘 요금제</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {plans.map((plan, index) => (
              <article
                className={`pricing-card ${plan.featured ? "pricing-card--featured" : ""}`}
                key={plan.tier}
                data-reveal="true"
                style={{ "--delay": `${120 + index * 130}ms` } as CSSProperties}
              >
                <h3>{plan.tier}</h3>
                <p className="pricing-card__price">{plan.price}</p>
                <p className="pricing-card__desc">{plan.desc}</p>
                <a className={plan.featured ? "btn-primary" : "btn-secondary"} href="#cta">
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-panel" id="cta" data-reveal="true">
          <p className="section-tag">Start Today</p>
          <h2 className="section-title">
            이번 분기 제품 메시지, <br className="hidden sm:block" />
            더 빠르게 검증하세요.
          </h2>
          <p className="cta-panel__body">
            단 15분 온보딩으로 기존 캠페인 문서를 가져오고, 오늘 바로 첫 번째
            자동 시나리오를 실행할 수 있습니다.
          </p>
          <a className="btn-primary" href="mailto:hello@threadsvibe.ai">
            hello@threadsvibe.ai
          </a>
        </section>
      </main>
    </div>
  );
}
