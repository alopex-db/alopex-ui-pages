import { siteConfig } from "./site-config";

type Locale = "en" | "ja";
const copy = {
  en: {
    nav: ["Overview", "Components", "Architecture", "Examples", "Roadmap"], lang: "JA", langHref: "/ja/",
    eyebrow: "DATA APPLICATION COMPONENTS FOR ALOPEXDB",
    hero: "Build data applications directly on AlopexDB",
    lead: "Forms, grids, charts, graphs, maps, and data exploration components connected through one unified data model.",
    problem: "Data-heavy applications need more than a component library",
    problemBody: "General UI libraries provide excellent controls. But every grid, chart, map, and graph has its own data model—leaving applications to rebuild the same integration layer.",
    concept: "One data model. Multiple UI engines.",
    conceptBody: "Keep the rendering performance, accessibility, and interaction quality of proven libraries. Alopex Data UI adds the shared model that turns them into one data application.",
    boundary: "Built on proven libraries. Focused on the missing layer.",
    components: "Composable by design", componentsLead: "Use individual components or combine them into complete data exploration experiences.",
    example: "Connect once. Compose everywhere.", architecture: "A clear, layered architecture",
    architectureBody: "AlopexDB connects at the adapter boundary. Internal WASM implementation details stay out of the UI contract.",
    useCases: "Designed for real data work", principles: "Principles that keep the stack open", roadmap: "Roadmap",
    roadmapLead: "A direction of travel, not a promise of fixed delivery dates.",
    cta: "Build your next data application on AlopexDB", ctaBody: "Use the UI engines you trust. Share the data model your application needs.",
  },
  ja: {
    nav: ["概要", "コンポーネント", "アーキテクチャ", "使用例", "ロードマップ"], lang: "EN", langHref: "/",
    eyebrow: "ALOPEXDB 向けデータアプリケーションコンポーネント",
    hero: "AlopexDBから、データアプリケーションを直接構築",
    lead: "AlopexDBのデータを、フォーム、グリッド、チャート、グラフ、地図へ。ひとつの共通データモデルで接続します。",
    problem: "データ中心のアプリに必要なのは、コンポーネント集だけではありません",
    problemBody: "一般的なUIライブラリは優れた操作部品を提供します。一方で、グリッド、チャート、地図、グラフは別々のデータモデルを持ち、接続層はアプリごとに実装されてきました。",
    concept: "ひとつのデータモデル。複数のUIエンジン。",
    conceptBody: "既存ライブラリの描画性能、アクセシビリティ、操作性をそのまま活用。Alopex Data UIが共通モデルを提供し、ひとつのデータアプリに統合します。",
    boundary: "実績あるライブラリを活用し、欠けていた層に集中",
    components: "組み合わせるための設計", componentsLead: "個別コンポーネントとしても、完成されたデータ探索画面としても使えます。",
    example: "一度つなぎ、どこでも構成", architecture: "責務が明確なレイヤー構成",
    architectureBody: "AlopexDBとの接続はアダプター境界に集約。WASM内部の実装詳細をUIの契約に持ち込みません。",
    useCases: "実際のデータ業務のために", principles: "スタックを開いたままにする設計原則", roadmap: "ロードマップ",
    roadmapLead: "固定されたリリース期日ではなく、製品開発の方向性です。",
    cta: "AlopexDBで、次のデータアプリケーションを", ctaBody: "信頼するUIエンジンはそのままに。アプリに必要なデータモデルを共通化します。",
  },
} as const;

const components = [
  ["Filter Builder", "Build typed filter expressions from schema information and share them across every view.", "filter"],
  ["Data Grid", "Connect Alopex data sources to virtualized grid engines through one consistent API.", "grid"],
  ["Record Editor", "Generate editable forms from schema information using controls you already trust.", "edit"],
  ["Data Chart", "Map dimensions, measures, and selections to mature chart engines.", "chart"],
  ["Data Pivot", "Explore grouping, aggregation, and pivot analysis through Perspective.", "pivot"],
  ["Data Graph", "Visualize large relationship datasets with GPU-accelerated graph engines.", "graph"],
  ["Data Map", "Connect geographic datasets to MapLibre GL and deck.gl.", "map"],
  ["Data Explorer", "Combine filters, grids, charts, schema inspection, and record detail in one surface.", "explore"],
] as const;
const useCases = [["Data Explorer", "Search, filter, sort, inspect, and visualize large datasets."], ["Operational Dashboard", "Forms, live lists, charts, and status views for operational data."], ["Graph Explorer", "Explore connected data and knowledge graphs at scale."], ["Database Studio", "Inspect schemas, query results, editable records, and execution output."]];
const phases = [["01", "Core foundation", "DataSource · Schema · Filter Builder · Record Editor · Grid · Chart · AlopexDB Adapter"], ["02", "Exploration", "Data Pivot · Column Selector · Query Result Viewer · JSON Viewer · Data Explorer"], ["03", "Spatial & connected", "Data Map · Data Graph · Timeline · Log Viewer · Visualization Workspace"], ["04", "Application systems", "Dashboard components · Master-detail layouts · Plugin system · Alopex Studio integration"]];

function Mark({ small = false }: { small?: boolean }) { return <span className={small ? "mark small" : "mark"} aria-hidden="true"><i/><i/><i/></span>; }
const SectionIndex = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => <div className={`section-index ${light ? "light" : ""}`}>{children}</div>;

export function LandingPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const ids = ["#overview", "#components", "#architecture", "#examples", "#roadmap"];
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Alopex Data UI home"><Mark small/><span>Alopex <b>Data UI</b></span></a>
      <nav aria-label="Main navigation">{t.nav.map((item, i) => <a href={ids[i]} key={item}>{item}</a>)}</nav>
      <div className="header-actions"><a className="lang" href={t.langHref}>{t.lang}</a><a className="button mini" href={siteConfig.githubUrl}>GitHub <span>↗</span></a></div>
    </header>

    <section className="hero shell" id="top">
      <div className="hero-copy"><p className="eyebrow"><span/>{t.eyebrow}</p><h1>{t.hero}</h1><p className="hero-lead">{t.lead}</p>
        <div className="button-row"><a className="button primary" href="#components">Explore Components <span>↓</span></a><a className="button ghost" href="#architecture">View Architecture</a></div>
        <div className="package-line"><span>$</span> npm install @alopex-data-ui/core</div>
      </div>
      <div className="hero-console" aria-label="AlopexDBからUIコンポーネントへのデータフロー図">
        <div className="console-bar"><span><i/><i/><i/></span><code>alopex-data-ui / live model</code><b>CONNECTED</b></div>
        <div className="flow-stage"><div className="db-node"><Mark/><div><b>AlopexDB</b><small>DATA ENGINE</small></div></div><div className="flow-line"><span>ADAPTER</span></div>
          <div className="core-node"><small>ALOPEX DATA UI CORE</small><strong>One shared application model</strong><div>{["DataSource", "Schema", "Filter", "Selection"].map(x => <em key={x}>{x}</em>)}</div></div><div className="fan-lines"/>
          <div className="ui-nodes">{["FORM", "GRID", "CHART", "GRAPH", "MAP"].map((x,i) => <div key={x}><span className={`glyph g${i}`}/>{x}</div>)}</div>
        </div><div className="console-status"><span>schema: orders_v3</span><span>selection: 12 rows</span><span>latency: 8ms</span></div>
      </div>
    </section>

    <section className="signal-strip" aria-label="Product principles"><div><b>01</b> FRAMEWORK INDEPENDENT</div><div><b>02</b> RENDERER INDEPENDENT</div><div><b>03</b> SCHEMA DRIVEN</div><div><b>04</b> LARGE-DATA READY</div></section>

    <section className="section shell problem" id="overview"><SectionIndex>01 / THE PROBLEM</SectionIndex><div className="problem-copy"><h2>{t.problem}</h2><p>{t.problemBody}</p></div>
      <div className="problem-grid">{["Schema transforms", "Filter translation", "Selection sync", "Column definitions", "Data fetching", "Edit lifecycle", "Engine adapters", "Shared UI states"].map((item,i) => <div key={item}><span>{String(i+1).padStart(2,"0")}</span>{item}</div>)}</div>
    </section>

    <section className="section concept" id="architecture"><div className="shell"><SectionIndex light>02 / THE MODEL</SectionIndex><div className="section-heading split"><h2>{t.concept}</h2><p>{t.conceptBody}</p></div>
      <div className="model-diagram"><div className="model-core"><span>ALOPEX DATA UI CORE</span><div>{["DataSource", "Schema", "Filter", "Selection"].map(x => <b key={x}>{x}</b>)}</div></div><div className="model-rail"/>
        <div className="engine-row">{[["FORM","Vaadin"],["GRID","RevoGrid"],["CHART","ECharts"],["GRAPH","cosmos.gl"],["MAP","deck.gl"]].map(([a,b],i) => <div key={a}><span className={`glyph g${i}`}/><strong>{a}</strong><small>{b}</small></div>)}</div>
      </div></div></section>

    <section className="section shell boundary"><SectionIndex>03 / THE BOUNDARY</SectionIndex><div className="section-heading"><h2>{t.boundary}</h2></div>
      <div className="boundary-grid"><article className="existing"><header><span>EXISTING LIBRARIES</span><b>Rendering engines</b></header><div className="tag-cloud">{["Lit","Vaadin","RevoGrid","AG Grid","Apache ECharts","Perspective","deck.gl","MapLibre GL","cosmos.gl","CodeMirror","Dockview"].map(x=><span key={x}>{x}</span>)}</div><p>Rendering, controls, virtualization, charts, maps, graph layouts, and editors stay with mature libraries.</p></article>
        <div className="boundary-arrow">→</div><article className="alopex-layer"><header><span>ALOPEX DATA UI</span><b>The data-application layer</b></header><ul>{["DataSource contract","Schema model","Filter AST","Selection model","Schema-driven forms","Grid & chart adapters","Record Editor","Data Explorer","Shared UI states","AlopexDB adapter"].map(x=><li key={x}>{x}</li>)}</ul></article></div>
      <blockquote>Alopex Data UI does not replace existing UI and visualization libraries.<strong>It provides the missing data-application layer that connects them.</strong></blockquote>
    </section>

    <section className="section components" id="components"><div className="shell"><SectionIndex light>04 / COMPONENTS</SectionIndex><div className="section-heading split"><h2>{t.components}</h2><p>{t.componentsLead}</p></div>
      <div className="component-grid">{components.map(([name,desc,icon],i)=><article key={name}><div className={`component-icon ${icon}`}><span/><span/><span/></div><span className="component-number">0{i+1}</span><h3>{name}</h3><p>{desc}</p><a href="#examples">VIEW COMPONENT <span>↗</span></a></article>)}</div>
    </div></section>

    <section className="section shell examples" id="examples"><SectionIndex>05 / COMPOSITION</SectionIndex><div className="section-heading split"><h2>{t.example}</h2><p>Schema, filter, selection, and record state travel with the source—not the renderer.</p></div>
      <div className="code-tabs"><span className="active">HTML</span><span>TypeScript</span><span>React / Vue / Svelte</span></div><div className="code-window"><div className="line-numbers">1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12</div><pre><code><span className="muted">&lt;!-- One source. Three coordinated views. --&gt;</span>{`\n`}<span className="pink">&lt;alopex-filter-builder</span> <span className="blue">source</span>=<span className="green">&quot;orders&quot;</span><span className="pink">&gt;&lt;/alopex-filter-builder&gt;</span>{`\n\n`}<span className="pink">&lt;alopex-data-grid</span>{`\n  `}<span className="blue">source</span>=<span className="green">&quot;orders&quot;</span>{`\n  `}<span className="blue">renderer</span>=<span className="green">&quot;revogrid&quot;</span><span className="pink">&gt;</span>{`\n`}<span className="pink">&lt;/alopex-data-grid&gt;</span>{`\n\n`}<span className="pink">&lt;alopex-data-chart</span> <span className="blue">source</span>=<span className="green">&quot;orders&quot;</span>{`\n  `}<span className="blue">type</span>=<span className="green">&quot;bar&quot;</span> <span className="blue">dimension</span>=<span className="green">&quot;region&quot;</span>{`\n  `}<span className="blue">measure</span>=<span className="green">&quot;revenue&quot;</span><span className="pink">&gt;&lt;/alopex-data-chart&gt;</span></code></pre></div>
    </section>

    <section className="section architecture-map"><div className="shell"><div className="section-heading split"><h2>{t.architecture}</h2><p>{t.architectureBody}</p></div><div className="layer-stack">
      {[["05","APPLICATION","Your product"],["04","APPLICATION COMPONENTS","Data Explorer / Record Editor / Master Detail"],["03","DATA COMPONENTS","Grid / Chart / Pivot / Map / Graph"],["02","UI CORE","DataSource / Schema / Filter / Selection"],["01","ADAPTERS","RevoGrid / ECharts / Perspective / deck.gl / cosmos.gl"],["00","EXISTING LIBRARIES","Rendering and interaction engines"]].map(([n,a,b],i)=><div key={n} className={i===3?"accent":""}><span>{n}</span><b>{a}</b><p>{b}</p></div>)}
      <div className="db-adapter"><Mark small/><b>ALOPEXDB ADAPTER</b><span>Data boundary</span></div></div></div></section>

    <section className="section shell use-cases"><SectionIndex>06 / USE CASES</SectionIndex><div className="section-heading"><h2>{t.useCases}</h2></div><div className="use-case-grid">{useCases.map(([name,desc],i)=><article key={name}><span className={`scene scene-${i}`}><i/><i/><i/><i/></span><div><small>0{i+1}</small><h3>{name}</h3><p>{desc}</p></div></article>)}</div></section>

    <section className="section principles"><div className="shell"><div className="section-heading"><h2>{t.principles}</h2></div><div className="principle-grid">{[["FRAMEWORK-INDEPENDENT","Web Components work from React, Vue, Svelte, and vanilla JavaScript."],["RENDERER-INDEPENDENT","Swap engines without rewriting the application data model."],["SCHEMA-DRIVEN","Let schema information drive forms, filters, columns, and formats."],["LARGE-DATA READY","Use virtualization, Canvas, WebGL, and GPU engines where they perform best."],["COMPOSABLE","Build with focused primitives and complete data-application components."]].map(([a,b],i)=><article key={a}><span>0{i+1}</span><h3>{a}</h3><p>{b}</p></article>)}</div></div></section>

    <section className="section shell roadmap" id="roadmap"><SectionIndex>07 / ROADMAP</SectionIndex><div className="section-heading split"><h2>{t.roadmap}</h2><p>{t.roadmapLead}</p></div><div className="roadmap-list">{phases.map(([phase,title,items],i)=><article key={phase}><div className="phase"><span>PHASE</span><b>{phase}</b></div><div><h3>{title}</h3><p>{items}</p></div><span className={i===0?"status active":"status"}>{i===0?"IN PROGRESS":"PLANNED"}</span></article>)}</div></section>

    <section className="final-cta"><div className="shell"><Mark/><p>DATA APPLICATIONS / BUILT ON ALOPEXDB</p><h2>{t.cta}</h2><span>{t.ctaBody}</span><div className="button-row centered"><a className="button primary" href={siteConfig.githubUrl}>View on GitHub <b>↗</b></a><a className="button ghost light" href="#architecture">Explore the Architecture</a><a className="text-link" href="#roadmap">Follow the Roadmap →</a></div></div></section>

    <footer><div className="shell footer-grid"><div className="brand"><Mark small/><span>Alopex <b>Data UI</b></span></div><p>Data Application Components for AlopexDB</p><div><a href={siteConfig.githubUrl}>GitHub</a><a href="#components">Components</a><a href="#roadmap">Roadmap</a></div></div><div className="shell footer-bottom"><span>{siteConfig.repository} · {siteConfig.packageScope}</span><span>© 2026 Alopex Project</span></div></footer>
  </main>;
}
