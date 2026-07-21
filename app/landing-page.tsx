import { siteConfig } from "./site-config";

type Locale = "en" | "ja";

type PageCopy = {
  nav: readonly string[]; lang: string; langHref: string; eyebrow: string; hero: string; lead: string;
  explore: string; viewArchitecture: string; problem: string; problemBody: string; concept: string; conceptBody: string;
  boundary: string; existingTitle: string; existingBody: string; layerTitle: string; boundaryQuote: string; boundaryStrong: string;
  components: string; componentsLead: string; componentLink: string; example: string; exampleLead: string;
  architecture: string; architectureBody: string; useCases: string; principles: string; roadmap: string; roadmapLead: string;
  inProgress: string; planned: string; cta: string; ctaBody: string; github: string; followRoadmap: string; footer: string;
};

const copy: Record<Locale, PageCopy> = {
  en: {
    nav: ["Overview", "Components", "Architecture", "Examples", "Roadmap"], lang: "JA", langHref: "/ja/",
    eyebrow: "A CONSISTENT MODEL FOR DATA APPLICATIONS",
    hero: "One interface, wherever the data moves.",
    lead: "Alopex Data UI keeps backend differences out of the interface, so forms, grids, charts, graphs, maps, and exploration tools can evolve as one coherent system.",
    explore: "Explore Components", viewArchitecture: "View Architecture",
    problem: "Backend choices should not reshape the product experience",
    problemBody: "When queries, schema conversion, filters, and selection state are tied directly to a backend, infrastructure decisions spill into the product. Alopex Data UI keeps that complexity at the boundary.",
    concept: "Different backends. One way of building.",
    conceptBody: "Adapters translate schema, queries, filters, selections, and editable records into one DataSource contract. Components work with that contract, while backend-specific behavior stays behind the boundary.",
    boundary: "Proven UI engines. A stable data boundary.",
    existingTitle: "Rendering and interaction engines",
    existingBody: "Rendering, controls, virtualization, charts, maps, graph layouts, and editors stay with mature libraries.",
    layerTitle: "The data-application layer",
    boundaryQuote: "Alopex Data UI does not replace your database or UI libraries.",
    boundaryStrong: "It keeps them replaceable through shared application contracts.",
    components: "Compose the interface your data work needs", componentsLead: "Use focused components on their own, or combine them into complete exploration and operations surfaces.", componentLink: "VIEW COMPONENT",
    example: "Keep backend details at the boundary", exampleLead: "Whether data arrives from AlopexDB, DuckDB, an API, a file, or an internal service, the component tree keeps the same shape. Only the boundary knows how the data is reached.",
    architecture: "A clean boundary between data and presentation", architectureBody: "Each backend connects at the data-source adapter layer. UI components depend on a stable contract, not database internals, transport protocols, or storage formats.",
    useCases: "Built for real data workflows", principles: "Open at every layer", roadmap: "Roadmap", roadmapLead: "Product direction, not a promise of fixed delivery dates.",
    inProgress: "IN PROGRESS", planned: "PLANNED", cta: "Let the data move. Keep the product coherent.", ctaBody: "Build today without letting today’s backend choices determine tomorrow’s interface.", github: "View on GitHub", followRoadmap: "Follow the Roadmap", footer: "A consistent UI model for data applications",
  },
  ja: {
    nav: ["概要", "コンポーネント", "設計", "コード例", "ロードマップ"], lang: "EN", langHref: "/",
    eyebrow: "データアプリケーションのための共通UIモデル",
    hero: "変わるデータに、変わらない使い心地を。",
    lead: "Alopex Data UIは、データの違いを画面に持ち込みません。フォーム、グリッド、チャート、グラフ、地図を、一貫したモデルで組み立てられます。",
    explore: "コンポーネントを見る", viewArchitecture: "設計を見る",
    problem: "データの違いまで、画面の違いにしない。",
    problemBody: "クエリ、スキーマ変換、絞り込み、選択状態がバックエンドへ直結していると、基盤の判断がそのまま画面の制約になります。Alopex Data UIは、その複雑さを境界の内側へ収めます。",
    concept: "つなぎ方の違いは、境界で整える。",
    conceptBody: "アダプターが、スキーマ、クエリ、フィルター、選択状態、レコード編集を共通のDataSource契約へ変換します。コンポーネントはその契約だけを見て、接続先固有の処理は境界の内側に留めます。",
    boundary: "実績あるUIを活かし、データとの境界だけを整える。",
    existingTitle: "描画と操作は、成熟したライブラリに任せる",
    existingBody: "コントロール、仮想スクロール、チャート、地図、グラフ描画、エディターは、実績あるライブラリの強みをそのまま活用します。",
    layerTitle: "Alopex Data UIが担う領域",
    boundaryQuote: "Alopex Data UIは、データベースもUIライブラリも置き換えません。",
    boundaryStrong: "両者を共通の契約でつなぎ、必要に応じて入れ替えられる状態をつくります。",
    components: "データ業務に必要な画面を、無理なく組み立てる。", componentsLead: "部品をひとつずつ使うことも、探索・編集・可視化をまとめた画面として使うこともできます。", componentLink: "詳しく見る",
    example: "バックエンドの都合を、画面まで持ち込まない。", exampleLead: "AlopexDB、DuckDB、API、ファイル、社内サービス。データの届き方が違っても、コンポーネントの組み方は変わりません。違いを知るのは、境界だけです。",
    architecture: "画面はUIの責務に、接続は境界の責務に。", architectureBody: "データベース、API、ファイルなどの違いは、データソース・アダプター層で吸収します。UIコンポーネントが依存するのは、接続方式や保存形式ではなく、安定したDataSource契約です。",
    useCases: "現場のデータ業務から逆算した使い方", principles: "どの層も、ひとつの選択肢に縛らない。", roadmap: "これから実現すること", roadmapLead: "ここに示すのは、確定した納期ではなく、製品開発の方向性です。",
    inProgress: "開発中", planned: "計画中", cta: "データが変わっても、プロダクトの体験は変えない。", ctaBody: "いま選ぶバックエンドに、これから育てる画面を縛らせないために。", github: "GitHubで見る", followRoadmap: "ロードマップを見る", footer: "データの違いを、画面の違いにしないUI基盤",
  },
};

const problemItems = {
  en: ["Schema normalization", "Query translation", "Filter mapping", "Selection sync", "Column definitions", "Edit lifecycle", "Source adapters", "Shared UI states"],
  ja: ["スキーマの共通化", "クエリの変換", "フィルターの受け渡し", "選択状態の同期", "列定義の生成", "編集処理の管理", "接続先別アダプター", "共通の画面状態"],
};

const componentCopy = {
  en: [
    ["Filter Builder", "Build typed conditions from schema information and pass the same filter to every connected view.", "filter"],
    ["Data Grid", "Connect a DataSource to virtualized grid engines through one consistent grid contract.", "grid"],
    ["Record Editor", "Generate editable forms from schema and keep validation and update flows consistent.", "edit"],
    ["Data Chart", "Map dimensions, measures, filters, and selections to the chart engine you choose.", "chart"],
    ["Data Pivot", "Explore grouping, aggregation, and pivot analysis without coupling the UI to a database.", "pivot"],
    ["Data Graph", "Visualize large relationship datasets with GPU-accelerated graph engines.", "graph"],
    ["Data Map", "Connect geographic data to MapLibre GL and deck.gl through the shared source model.", "map"],
    ["Data Explorer", "Combine filters, grids, charts, schema inspection, and record detail in one reusable workspace.", "explore"],
  ],
  ja: [
    ["Filter Builder", "スキーマから型のある検索条件を組み立て、グリッドやチャートへ同じ絞り込みを渡します。", "filter"],
    ["Data Grid", "仮想スクロール対応のグリッドへ、共通のDataSource契約でデータを接続します。", "grid"],
    ["Record Editor", "スキーマをもとに編集フォームを生成し、検証から更新までの流れを揃えます。", "edit"],
    ["Data Chart", "ディメンション、指標、絞り込み、選択状態を、用途に合うチャートエンジンへ渡します。", "chart"],
    ["Data Pivot", "データベース固有の実装に縛られず、集計・グルーピング・ピボット分析を行えます。", "pivot"],
    ["Data Graph", "大規模な関係データを、GPU対応のグラフ描画エンジンで探索します。", "graph"],
    ["Data Map", "地理データを共通のDataSourceからMapLibre GLやdeck.glへ接続します。", "map"],
    ["Data Explorer", "絞り込み、一覧、可視化、スキーマ確認、レコード詳細をひとつの探索画面にまとめます。", "explore"],
  ],
} as const;

const useCaseCopy = {
  en: [["Data Explorer", "Search, filter, compare, and visualize large datasets."], ["Operational Dashboard", "Bring forms, live lists, charts, and status views into one operational surface."], ["Graph Explorer", "Explore connected data and knowledge graphs at scale."], ["Database Studio", "Inspect schemas and query results, then edit records without changing UI conventions."]],
  ja: [["データ探索", "大量データを検索・絞り込み・比較し、必要な切り口ですぐ可視化します。"], ["業務ダッシュボード", "入力、一覧、チャート、進捗表示を、日々の業務に合うひとつの画面へまとめます。"], ["関係データの探索", "つながりの多いデータやナレッジグラフを、規模を問わずたどれます。"], ["データベース管理画面", "スキーマとクエリ結果を確認し、同じ操作体系のままレコードを編集します。"]],
};

const principleCopy = {
  en: [["FRAMEWORK-INDEPENDENT", "Use Web Components from React, Vue, Svelte, or vanilla JavaScript."], ["STABLE DATA BOUNDARY", "Keep backend-specific behavior behind the DataSource boundary."], ["RENDERER-INDEPENDENT", "Change grid or chart engines without rewriting application state."], ["SCHEMA-DRIVEN", "Let schema information drive forms, filters, columns, and formats."], ["LARGE-DATA READY", "Use virtualization, Canvas, WebGL, and GPU engines where they perform best."]],
  ja: [["フレームワークを選ばない", "Web Componentsを境界に、React、Vue、Svelte、Vanilla JavaScriptから利用できます。"], ["違いは境界の内側へ", "接続先ごとの処理をDataSource境界の内側に収めます。"], ["描画エンジンを固定しない", "アプリケーション状態を作り直さず、グリッドやチャートの実装を選べます。"], ["スキーマを設計の起点に", "フォーム、フィルター、列、表示形式へ、スキーマ情報を一貫して反映します。"], ["大規模データを前提に", "仮想化、Canvas、WebGL、GPUを、得意な処理へ適切に使い分けます。"]],
};

const phaseCopy = {
  en: [["01", "Core contracts", "DataSource · Schema · Filter · Selection · Record editing · Built-in Adapters · Custom Adapter API"], ["02", "Exploration", "Filter Builder · Data Grid · Data Chart · Data Pivot · Data Explorer"], ["03", "Spatial & connected", "Data Map · Data Graph · Timeline · Log Viewer · Visualization Workspace"], ["04", "Application systems", "Dashboard components · Master-detail layouts · Plugin system · Alopex Studio integration"]],
  ja: [["01", "共通契約を固める", "DataSource · Schema · Filter · Selection · Record Editing · Built-in Adapters · Custom Adapter API"], ["02", "探索機能を揃える", "Filter Builder · Data Grid · Data Chart · Data Pivot · Data Explorer"], ["03", "空間・関係・時系列へ広げる", "Data Map · Data Graph · Timeline · Log Viewer · Visualization Workspace"], ["04", "業務アプリの基盤へ育てる", "Dashboard Components · Master-detail Layouts · Plugin System · Alopex Studio Integration"]],
};

function Mark({ small = false }: { small?: boolean }) { return <span className={small ? "mark small" : "mark"} aria-hidden="true"><i/><i/><i/></span>; }
const SectionIndex = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => <div className={`section-index ${light ? "light" : ""}`}>{children}</div>;

export function LandingPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const components = componentCopy[locale];
  const useCases = useCaseCopy[locale];
  const principles = principleCopy[locale];
  const phases = phaseCopy[locale];
  const ids = ["#overview", "#components", "#architecture", "#examples", "#roadmap"];
  const sectionLabels = locale === "ja" ? ["01 / 課題", "02 / 共通モデル", "03 / 境界", "04 / コンポーネント", "05 / コード例", "06 / ユースケース", "07 / ロードマップ"] : ["01 / THE PROBLEM", "02 / THE MODEL", "03 / THE BOUNDARY", "04 / COMPONENTS", "05 / COMPOSITION", "06 / USE CASES", "07 / ROADMAP"];
  const layers = locale === "ja" ? [["06","APPLICATION","あなたのプロダクト"],["05","APPLICATION COMPONENTS","Data Explorer / Record Editor / Master Detail"],["04","DATA COMPONENTS","Grid / Chart / Pivot / Map / Graph"],["03","UI CORE","DataSource / Schema / Filter / Selection"],["02","DATA SOURCE ADAPTERS","AlopexDB / DuckDB / API / File / Custom"],["01","RENDERER ADAPTERS","RevoGrid / ECharts / Perspective / deck.gl / cosmos.gl"],["00","PROVEN ENGINES","データ処理・描画・操作を担う既存エンジン"]] : [["06","APPLICATION","Your product"],["05","APPLICATION COMPONENTS","Data Explorer / Record Editor / Master Detail"],["04","DATA COMPONENTS","Grid / Chart / Pivot / Map / Graph"],["03","UI CORE","DataSource / Schema / Filter / Selection"],["02","DATA SOURCE ADAPTERS","AlopexDB / DuckDB / API / File / Custom"],["01","RENDERER ADAPTERS","RevoGrid / ECharts / Perspective / deck.gl / cosmos.gl"],["00","PROVEN ENGINES","Data, rendering, and interaction engines"]];

  return <main lang={locale}>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Alopex Data UI home"><Mark small/><span>Alopex <b>Data UI</b></span></a>
      <nav aria-label="Main navigation">{t.nav.map((item, i) => <a href={ids[i]} key={item}>{item}</a>)}</nav>
      <div className="header-actions"><a className="lang" href={t.langHref}>{t.lang}</a><a className="button mini" href={siteConfig.githubUrl}>GitHub <span>↗</span></a></div>
    </header>

    <section className="hero shell" id="top">
      <div className="hero-copy"><p className="eyebrow"><span/>{t.eyebrow}</p><h1>{t.hero}</h1><p className="hero-lead">{t.lead}</p>
        <div className="button-row"><a className="button primary" href="#components">{t.explore} <span>↓</span></a><a className="button ghost" href="#architecture">{t.viewArchitecture}</a></div>
        <div className="package-line"><span>$</span> npm install @alopex-data-ui/core</div>
      </div>
      <div className="hero-console" aria-label={locale === "ja" ? "複数の接続先を共通のデータ境界で束ねるフロー図" : "Multiple backends meeting one stable data boundary"}>
        <div className="console-bar"><span><i/><i/><i/></span><code>alopex-data-ui / data source adapters</code><b>READY</b></div>
        <div className="flow-stage"><div className="engine-switch"><div className="db-node active"><Mark/><div><b>AlopexDB</b><small>DATABASE</small></div></div><span>OR</span><div className="db-node duck"><div className="duck-mark">D</div><div><b>DuckDB</b><small>ANALYTICS</small></div></div><span>OR</span><div className="db-node custom"><div className="source-mark">+</div><div><b>CUSTOM</b><small>API / FILE / STREAM</small></div></div></div><div className="flow-line"><span>ADAPTER</span></div>
          <div className="core-node"><small>STABLE DATASOURCE CONTRACT</small><strong>{locale === "ja" ? "違いは境界で整える" : "One contract. One UI."}</strong><div>{["DataSource", "Schema", "Filter", "Selection"].map(x => <em key={x}>{x}</em>)}</div></div><div className="fan-lines"/>
          <div className="ui-nodes">{["FORM", "GRID", "CHART", "GRAPH", "MAP"].map((x,i) => <div key={x}><span className={`glyph g${i}`}/>{x}</div>)}</div>
        </div><div className="console-status"><span>boundary: stable</span><span>adapters: extensible</span><span>ui: coherent</span></div>
      </div>
    </section>

    <section className="signal-strip five" aria-label="Product principles"><div><b>01</b> STABLE DATA BOUNDARY</div><div><b>02</b> FRAMEWORK INDEPENDENT</div><div><b>03</b> RENDERER INDEPENDENT</div><div><b>04</b> SCHEMA DRIVEN</div><div><b>05</b> LARGE-DATA READY</div></section>

    <section className="section shell problem" id="overview"><SectionIndex>{sectionLabels[0]}</SectionIndex><div className="problem-copy"><h2>{t.problem}</h2><p>{t.problemBody}</p></div>
      <div className="problem-grid">{problemItems[locale].map((item,i) => <div key={item}><span>{String(i+1).padStart(2,"0")}</span>{item}</div>)}</div>
    </section>

    <section className="section concept" id="architecture"><div className="shell"><SectionIndex light>{sectionLabels[1]}</SectionIndex><div className="section-heading split"><h2>{t.concept}</h2><p>{t.conceptBody}</p></div>
      <div className="model-diagram"><div className="engine-inputs"><span>AlopexDB</span><i>/</i><span>DuckDB</span><i>/</i><span>API · FILE · CUSTOM</span></div><div className="model-core"><span>ALOPEX DATA UI CORE</span><div>{["DataSource", "Schema", "Filter", "Selection"].map(x => <b key={x}>{x}</b>)}</div></div><div className="model-rail"/>
        <div className="engine-row">{[["FORM","Vaadin"],["GRID","RevoGrid"],["CHART","ECharts"],["GRAPH","cosmos.gl"],["MAP","deck.gl"]].map(([a,b],i) => <div key={a}><span className={`glyph g${i}`}/><strong>{a}</strong><small>{b}</small></div>)}</div>
      </div></div></section>

    <section className="section shell boundary"><SectionIndex>{sectionLabels[2]}</SectionIndex><div className="section-heading"><h2>{t.boundary}</h2></div>
      <div className="boundary-grid"><article className="existing"><header><span>PROVEN LIBRARIES</span><b>{t.existingTitle}</b></header><div className="tag-cloud">{["Lit","Vaadin","RevoGrid","AG Grid","Apache ECharts","Perspective","deck.gl","MapLibre GL","cosmos.gl","CodeMirror","Dockview"].map(x=><span key={x}>{x}</span>)}</div><p>{t.existingBody}</p></article>
        <div className="boundary-arrow">→</div><article className="alopex-layer"><header><span>ALOPEX DATA UI</span><b>{t.layerTitle}</b></header><ul>{["DataSource contract","Schema model","Filter AST","Selection model","Record editing","Grid & chart adapters","Shared UI states","Data Explorer","Built-in source adapters","Custom adapter API"].map(x=><li key={x}>{x}</li>)}</ul></article></div>
      <blockquote>{t.boundaryQuote}<strong>{t.boundaryStrong}</strong></blockquote>
    </section>

    <section className="section components" id="components"><div className="shell"><SectionIndex light>{sectionLabels[3]}</SectionIndex><div className="section-heading split"><h2>{t.components}</h2><p>{t.componentsLead}</p></div>
      <div className="component-grid">{components.map(([name,desc,icon],i)=><article key={name}><div className={`component-icon ${icon}`}><span/><span/><span/></div><span className="component-number">0{i+1}</span><h3>{name}</h3><p>{desc}</p><a href="#examples">{t.componentLink} <span>↗</span></a></article>)}</div>
    </div></section>

    <section className="section shell examples" id="examples"><SectionIndex>{sectionLabels[4]}</SectionIndex><div className="section-heading split"><h2>{t.example}</h2><p>{t.exampleLead}</p></div>
      <div className="code-tabs"><span className="active">TypeScript</span><span>DataSource contract</span><span>Custom adapter</span></div><div className="code-window"><div className="line-numbers">1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12</div><pre><code><span className="muted">{"// Adapt any backend to the stable DataSource contract."}</span>{`\n`}<span className="blue">const</span> source: <span className="pink">DataSource</span> = {'{'}{`\n  `}schema: () =&gt; backend.getSchema(),{`\n  `}query: (request) =&gt; backend.query(request),{`\n  `}update: (change) =&gt; backend.update(change),{`\n`}{'}'};{`\n\n`}<span className="muted">{"// Every component consumes the same contract."}</span>{`\n`}grid.dataSource = source;{`\n`}chart.dataSource = source;{`\n`}form.dataSource = source;{`\n`}explorer.dataSource = source;</code></pre></div>
    </section>

    <section className="section architecture-map"><div className="shell"><div className="section-heading split"><h2>{t.architecture}</h2><p>{t.architectureBody}</p></div><div className="layer-stack">
      {layers.map(([n,a,b],i)=><div key={n} className={i===3?"accent":""}><span>{n}</span><b>{a}</b><p>{b}</p></div>)}
      <div className="db-adapter engine-card"><span className="engine-card-label">DATA SOURCES</span><div><b>AlopexDB</b><small>Built-in adapter</small></div><div><b>DuckDB</b><small>Built-in adapter</small></div><div><b>Custom Backend</b><small>Adapter</small></div><span>{locale === "ja" ? "接続先の違いは境界で吸収" : "Backend details stay at the boundary"}</span></div></div></div></section>

    <section className="section shell use-cases"><SectionIndex>{sectionLabels[5]}</SectionIndex><div className="section-heading"><h2>{t.useCases}</h2></div><div className="use-case-grid">{useCases.map(([name,desc],i)=><article key={name}><span className={`scene scene-${i}`}><i/><i/><i/><i/></span><div><small>0{i+1}</small><h3>{name}</h3><p>{desc}</p></div></article>)}</div></section>

    <section className="section principles"><div className="shell"><div className="section-heading"><h2>{t.principles}</h2></div><div className="principle-grid">{principles.map(([a,b],i)=><article key={a}><span>0{i+1}</span><h3>{a}</h3><p>{b}</p></article>)}</div></div></section>

    <section className="section shell roadmap" id="roadmap"><SectionIndex>{sectionLabels[6]}</SectionIndex><div className="section-heading split"><h2>{t.roadmap}</h2><p>{t.roadmapLead}</p></div><div className="roadmap-list">{phases.map(([phase,title,items],i)=><article key={phase}><div className="phase"><span>PHASE</span><b>{phase}</b></div><div><h3>{title}</h3><p>{items}</p></div><span className={i===0?"status active":"status"}>{i===0?t.inProgress:t.planned}</span></article>)}</div></section>

    <section className="final-cta"><div className="shell"><Mark/><p>DATABASE / API / FILE / STREAM / ONE UI MODEL</p><h2>{t.cta}</h2><span>{t.ctaBody}</span><div className="button-row centered"><a className="button primary" href={siteConfig.githubUrl}>{t.github} <b>↗</b></a><a className="button ghost light" href="#architecture">{t.viewArchitecture}</a><a className="text-link" href="#roadmap">{t.followRoadmap} →</a></div></div></section>

    <footer><div className="shell footer-grid"><div className="brand"><Mark small/><span>Alopex <b>Data UI</b></span></div><p>{t.footer}</p><div><a href={siteConfig.githubUrl}>GitHub</a><a href="#components">Components</a><a href="#roadmap">Roadmap</a></div></div><div className="shell footer-bottom"><span>{siteConfig.repository} · {siteConfig.packageScope}</span><span>© 2026 Alopex Project</span></div></footer>
  </main>;
}
