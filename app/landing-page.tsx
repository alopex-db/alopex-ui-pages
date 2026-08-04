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
    lead: "Alopex Data UI keeps backend differences at the boundary and unifies data, queries, panels, dashboards, and editing in one application framework—so every data experience can evolve as one coherent system.",
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
    lead: "Alopex Data UIは、接続先の違いを境界に閉じ込め、データ、クエリ、Panel、Dashboard、編集をひとつのApplication Frameworkで統合します。探索から運用まで、一貫した体験として育てられます。",
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
  en: [
    ["Schema normalization", "Normalize field types, names, relationships, and metadata into one shared schema."],
    ["Query translation", "Turn one query intent into backend-specific SQL, API requests, or file operations."],
    ["Filter mapping", "Use one typed filter across grids, charts, maps, and every connected data source."],
    ["Selection sync", "Share selected rows, ranges, nodes, and map features across every view."],
    ["Column definitions", "Generate columns, formats, sorting, and edit rules directly from schema."],
    ["Edit lifecycle", "Standardize validation, optimistic state, saving, conflicts, and error recovery."],
    ["Source adapters", "Keep database, API, and file-specific behavior behind the DataSource boundary."],
    ["Shared UI states", "Carry filters, time range, variables, focus, and drill-down context across the application."],
  ],
  ja: [
    ["スキーマの共通化", "型、フィールド名、関係、メタデータを、接続先に依存しない共通スキーマへ揃えます。"],
    ["クエリの変換", "ひとつの検索意図を、接続先ごとのSQL、APIリクエスト、ファイル操作へ変換します。"],
    ["フィルターの受け渡し", "型のある同じフィルターを、Grid、Chart、Map、各DataSourceで共有します。"],
    ["選択状態の同期", "選択した行、範囲、ノード、地物を、すべての表示部品へ同期します。"],
    ["列定義の生成", "列、表示形式、並べ替え、編集ルールを、スキーマから一貫して生成します。"],
    ["編集処理の管理", "検証、楽観的更新、保存、競合、エラー復旧までを同じ流れで扱います。"],
    ["接続先別アダプター", "Database、API、File固有の処理をDataSource境界の内側へ閉じ込めます。"],
    ["共通の画面状態", "Filter、Time Range、Variables、Focus、Drill-downをApplication全体で共有します。"],
  ],
} as const;

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

const dashboardFrameworkCopy = {
  en: {
    eyebrow: "DASHBOARD APPLICATION FRAMEWORK",
    title: "From data components to a complete application runtime",
    body: "Grafana-class dashboard UX needs more than another chart. Alopex Data UI adds a shared runtime for querying, transforming, composing, saving, and reusing interactive data applications.",
    items: [
      ["Panel", "The execution unit that brings queries, transforms, visualization settings, links, and interaction state together."],
      ["Dashboard Canvas", "A persistent authoring canvas for dragging, resizing, grouping, and arranging panels."],
      ["Query Runner", "A shared runtime for execution, cancellation, caching, streaming, retries, and query status."],
      ["Data Frame", "A columnar result model shared by charts, tables, maps, graphs, logs, and traces."],
      ["Transformation Pipeline", "Compose filters, joins, groups, calculations, pivots, sorting, and time alignment before rendering."],
      ["Time Range", "Share time range, timezone, zoom, and auto-refresh across an entire dashboard."],
      ["Dashboard Variables", "Drive queries, titles, links, filters, and repeated panels from reusable variables."],
      ["Visualization Registry", "Register and exchange charts, tables, logs, traces, maps, and graph renderers as plugins."],
      ["Dashboard Library", "Save, share, version, import, export, and reuse dashboards, panels, and templates."],
    ],
  },
  ja: {
    eyebrow: "DASHBOARD APPLICATION FRAMEWORK",
    title: "部品の集合から、データアプリケーションの実行基盤へ。",
    body: "Grafana相当のダッシュボード体験に必要なのは、チャートの追加ではありません。クエリ、変換、配置、保存、再利用を一貫して扱う共通ランタイムを、Alopex Data UIの正式な製品スコープとして加えます。",
    items: [
      ["Panel", "クエリ、変換、表示設定、可視化、リンク、操作状態をまとめる基本実行単位。"],
      ["Dashboard Canvas", "Panelをドラッグ、リサイズ、グループ化し、配置を保存できる編集キャンバス。"],
      ["Query Runner", "実行、キャンセル、キャッシュ、ストリーミング、再試行、状態管理を共通化。"],
      ["Data Frame", "チャート、表、地図、グラフ、ログ、トレースで共有できる列指向の結果モデル。"],
      ["Transformation Pipeline", "フィルター、結合、集約、計算、ピボット、並べ替え、時間整列を表示前に構成。"],
      ["Time Range", "時間範囲、タイムゾーン、ズーム、自動更新をDashboard全体へ共有。"],
      ["Dashboard Variables", "クエリ、タイトル、リンク、フィルター、Panelの繰り返しを動的に制御。"],
      ["Visualization Registry", "チャート、表、ログ、トレース、地図、グラフをプラグインとして登録・交換。"],
      ["Dashboard Library", "Dashboard、Panel、テンプレートを保存、共有、履歴管理、再利用。"],
    ],
  },
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
  en: [["01", "Core contracts", "DataSource · Schema · Filter · Selection · Record editing · Built-in Adapters · Custom Adapter API"], ["02", "Exploration", "Filter Builder · Data Grid · Data Chart · Data Pivot · Data Explorer"], ["03", "Spatial & connected", "Data Map · Data Graph · Timeline · Log Viewer · Visualization Workspace"], ["04", "Dashboard Runtime", "Panel Model · DataFrame & Field Configuration · Query Runner · Transformation Pipeline · Time Range · Variables · Dashboard Document"], ["05", "Dashboard Authoring", "Dashboard Canvas · Panel Editor · Visualization Registry · Links & Drill-down · Annotations · Library Panels · Version History · Import / Export"], ["06", "Observability", "Time Series · Logs · Trace Waterfall · Service Map · Alert Views · SLO Views · Alopex OTel Integration"], ["07", "Application Studio", "Master-detail · Operational Actions · Record Editing Panels · Plugin System · Alopex Studio · AI-assisted Composition"]],
  ja: [["01", "共通契約を固める", "DataSource · Schema · Filter · Selection · Record Editing · Built-in Adapters · Custom Adapter API"], ["02", "探索機能を揃える", "Filter Builder · Data Grid · Data Chart · Data Pivot · Data Explorer"], ["03", "空間・関係・時系列へ広げる", "Data Map · Data Graph · Timeline · Log Viewer · Visualization Workspace"], ["04", "Dashboard Runtime", "Panel Model · DataFrame & Field Configuration · Query Runner · Transformation Pipeline · Time Range · Variables · Dashboard Document"], ["05", "Dashboard Authoring", "Dashboard Canvas · Panel Editor · Visualization Registry · Links & Drill-down · Annotations · Library Panels · Version History · Import / Export"], ["06", "Observability", "Time Series · Logs · Trace Waterfall · Service Map · Alert Views · SLO Views · Alopex OTel Integration"], ["07", "Application Studio", "Master-detail · Operational Actions · Record Editing Panels · Plugin System · Alopex Studio · AI-assisted Composition"]],
};

function Mark({ small = false }: { small?: boolean }) { return <span className={small ? "mark small" : "mark"} aria-hidden="true"><i/><i/><i/></span>; }
const SectionIndex = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => <div className={`section-index ${light ? "light" : ""}`}>{children}</div>;

export function LandingPage({ locale, basePath = "" }: { locale: Locale; basePath?: string }) {
  const t = copy[locale];
  const components = componentCopy[locale];
  const useCases = useCaseCopy[locale];
  const principles = principleCopy[locale];
  const phases = phaseCopy[locale];
  const dashboardFramework = dashboardFrameworkCopy[locale];
  const ids = ["#overview", "#components", "#architecture", "#examples", "#roadmap"];
  const sectionLabels = locale === "ja" ? ["01 / 課題", "02 / 共通モデル", "03 / 境界", "04 / コンポーネント", "05 / コード例", "06 / ユースケース", "07 / ロードマップ"] : ["01 / THE PROBLEM", "02 / THE MODEL", "03 / THE BOUNDARY", "04 / COMPONENTS", "05 / COMPOSITION", "06 / USE CASES", "07 / ROADMAP"];
  const layers = locale === "ja" ? [["06","APPLICATION / STUDIO","業務アプリケーションとAlopex Studio"],["05","DASHBOARD / WORKSPACE","Dashboard · Explorer · Grid · Map · Graph · Editor"],["04","PANEL RUNTIME","Query · Transform · Visualization · Interaction"],["03","DATA MODEL","DataFrame · Schema · Filter · Selection"],["02","DATA SOURCE ADAPTERS","AlopexDB / DuckDB / API / File / Custom"],["01","RENDERER ADAPTERS","RevoGrid / ECharts / Perspective / deck.gl / cosmos.gl"],["00","PROVEN ENGINES","データ処理・描画・操作を担う既存エンジン"]] : [["06","APPLICATION / STUDIO","Your product and Alopex Studio"],["05","DASHBOARD / WORKSPACE","Dashboard · Explorer · Grid · Map · Graph · Editor"],["04","PANEL RUNTIME","Query · Transform · Visualization · Interaction"],["03","DATA MODEL","DataFrame · Schema · Filter · Selection"],["02","DATA SOURCE ADAPTERS","AlopexDB / DuckDB / API / File / Custom"],["01","RENDERER ADAPTERS","RevoGrid / ECharts / Perspective / deck.gl / cosmos.gl"],["00","PROVEN ENGINES","Data, rendering, and interaction engines"]];

  return <main lang={locale} className="site">
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Alopex Data UI home"><Mark small/><span>Alopex <b>Data UI</b></span></a>
      <nav aria-label="Main navigation">{t.nav.map((item, i) => <a href={ids[i]} key={item}>{item}</a>)}</nav>
      <div className="header-actions"><a className="lang" href={basePath + t.langHref}>{t.lang}</a><a className="button mini" href={siteConfig.githubUrl}>GitHub <span>↗</span></a></div>
    </header>

    <section className="hero-wrap" id="top">
      <div className="hero shell">
        <div className="hero-copy"><p className="eyebrow"><span/>{t.eyebrow}</p><h1>{t.hero}</h1><p className="hero-lead">{t.lead}</p>
          <div className="button-row"><a className="button primary" href="#components">{t.explore} <span>→</span></a><a className="button ghost light" href="#architecture">{t.viewArchitecture}</a></div>
          <div className="package-line"><span>$</span> npm install @alopex-data-ui/core</div>
        </div>

        <div className="data-landscape architecture-landscape" aria-label={locale === "ja" ? "Alopex Data UIのアプリケーションアーキテクチャ" : "Alopex Data UI application architecture"}>
          <div className="landscape-header"><span><i/><i/><i/></span><code>alopex-data-ui / application architecture</code><b>DASHBOARD FRAMEWORK</b></div>
          <div className="architecture-flow">
            {[
              ["01", "DATA SOURCES", "BOUNDARY", ["AlopexDB", "DuckDB", "API / Files", "Custom"]],
              ["02", "DATA MODEL", "SHARED CONTRACT", ["DataSource", "DataFrame", "Schema / Filter", "Selection"]],
              ["03", "QUERY + CONTEXT", "RUNTIME", ["Query Runner", "Transform Pipeline", "Time Range", "Variables"]],
              ["04", "PANEL RUNTIME", "EXECUTION UNIT", ["Panel Model", "Field Config", "Visualization", "Links / Actions"]],
              ["05", "DASHBOARD / STUDIO", "APPLICATION", ["Dashboard Canvas", "Workspace", "Library / History", "Alopex Studio"]],
            ].map(([n,title,label,items],i)=><div className="architecture-step-wrap" key={String(title)}>
              <article className={`architecture-step step-${i+1}`}><header><span>{String(n)}</span><small>{String(label)}</small></header><h3>{String(title)}</h3><div>{(items as string[]).map(item=><span key={item}>{item}</span>)}</div></article>
              {i<4&&<div className="architecture-connector" aria-hidden="true"><i/><b>→</b></div>}
            </div>)}
          </div>
          <div className="architecture-engine-rail"><span>RENDERER ADAPTERS + PROVEN ENGINES</span><div>{["RevoGrid", "ECharts", "Perspective", "deck.gl", "cosmos.gl", "CodeMirror"].map(item=><b key={item}>{item}</b>)}</div></div>
          <div className="landscape-status"><span>DataSource → DataFrame → Query / Transform → Panel → Dashboard</span><span>one coherent application context</span></div>        </div>
      </div>
    </section>

    <section className="signal-strip five" aria-label="Product principles"><div><b>01</b> STABLE DATA BOUNDARY</div><div><b>02</b> FRAMEWORK INDEPENDENT</div><div><b>03</b> RENDERER INDEPENDENT</div><div><b>04</b> SCHEMA DRIVEN</div><div><b>05</b> LARGE-DATA READY</div></section>

    <section className="section shell problem" id="overview"><SectionIndex>{sectionLabels[0]}</SectionIndex><div className="problem-copy"><h2>{t.problem}</h2><p>{t.problemBody}</p></div>
      <div className="problem-grid">{problemItems[locale].map(([title, description],i) => <article key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
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
      <div className="framework-intro"><span>{dashboardFramework.eyebrow}</span><h3>{dashboardFramework.title}</h3><p>{dashboardFramework.body}</p></div>
      <div className="framework-grid">{dashboardFramework.items.map(([name,desc],i)=><article key={name}><span>{String(i+1).padStart(2,"0")}</span><h3>{name}</h3><p>{desc}</p></article>)}</div>
    </div></section>

    <section className="section shell examples" id="examples"><SectionIndex>{sectionLabels[4]}</SectionIndex><div className="section-heading split"><h2>{t.example}</h2><p>{t.exampleLead}</p></div>
      <div className="code-tabs"><span className="active">TypeScript</span><span>DataSource contract</span><span>Custom adapter</span></div><div className="code-window"><div className="line-numbers">1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12</div><pre><code><span className="muted">{"// Adapt any backend to the stable DataSource contract."}</span>{`\n`}<span className="blue">const</span> source: <span className="pink">DataSource</span> = {'{'}{`\n  `}schema: () =&gt; backend.getSchema(),{`\n  `}query: (request) =&gt; backend.query(request),{`\n  `}update: (change) =&gt; backend.update(change),{`\n`}{'}'};{`\n\n`}<span className="muted">{"// Every component consumes the same contract."}</span>{`\n`}grid.dataSource = source;{`\n`}chart.dataSource = source;{`\n`}form.dataSource = source;{`\n`}explorer.dataSource = source;</code></pre></div>
    </section>

    <section className="section architecture-map"><div className="shell"><div className="section-heading split"><h2>{t.architecture}</h2><p>{t.architectureBody}</p></div><div className="layer-stack">
      {layers.map(([n,a,b],i)=><div key={n} className={i===2||i===3?"accent":""}><span>{n}</span><b>{a}</b><p>{b}</p></div>)}
      <div className="db-adapter engine-card"><span className="engine-card-label">DATA SOURCES</span><div><b>AlopexDB</b><small>Built-in adapter</small></div><div><b>DuckDB</b><small>Built-in adapter</small></div><div><b>Custom Backend</b><small>Adapter</small></div><span>{locale === "ja" ? "接続先の違いは境界で吸収" : "Backend details stay at the boundary"}</span></div></div></div></section>

    <section className="section shell use-cases"><SectionIndex>{sectionLabels[5]}</SectionIndex><div className="section-heading"><h2>{t.useCases}</h2></div><div className="use-case-grid">{useCases.map(([name,desc],i)=><article key={name}><span className={`scene scene-${i}`}><i/><i/><i/><i/></span><div><small>0{i+1}</small><h3>{name}</h3><p>{desc}</p></div></article>)}</div></section>

    <section className="section principles"><div className="shell"><div className="section-heading"><h2>{t.principles}</h2></div><div className="principle-grid">{principles.map(([a,b],i)=><article key={a}><span>0{i+1}</span><h3>{a}</h3><p>{b}</p></article>)}</div></div></section>

    <section className="section shell roadmap" id="roadmap"><SectionIndex>{sectionLabels[6]}</SectionIndex><div className="section-heading split"><h2>{t.roadmap}</h2><p>{t.roadmapLead}</p></div><div className="roadmap-list">{phases.map(([phase,title,items],i)=><article key={phase}><div className="phase"><span>PHASE</span><b>{phase}</b></div><div><h3>{title}</h3><p>{items}</p></div><span className={i===0?"status active":"status"}>{i===0?t.inProgress:t.planned}</span></article>)}</div></section>

    <section className="final-cta"><div className="shell"><Mark/><p>DATABASE / API / FILE / STREAM / ONE UI MODEL</p><h2>{t.cta}</h2><span>{t.ctaBody}</span><div className="button-row centered"><a className="button primary" href={siteConfig.githubUrl}>{t.github} <b>↗</b></a><a className="button ghost light" href="#architecture">{t.viewArchitecture}</a><a className="text-link" href="#roadmap">{t.followRoadmap} →</a></div></div></section>

    <footer><div className="shell footer-grid"><div className="brand"><Mark small/><span>Alopex <b>Data UI</b></span></div><p>{t.footer}</p><div><a href={siteConfig.githubUrl}>GitHub</a><a href="#components">Components</a><a href="#roadmap">Roadmap</a></div></div><div className="shell footer-bottom"><span>{siteConfig.repository} · {siteConfig.packageScope}</span><span>© 2026 Alopex Project</span></div></footer>
  </main>;
}
