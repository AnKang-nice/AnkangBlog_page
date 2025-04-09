import{_ as i,c as a,a4 as n,o as t}from"./chunks/framework.vOILIgLK.js";const o=JSON.parse('{"title":"Eslint（新版 9+）","description":"","frontmatter":{},"headers":[],"relativePath":"TutorialRecord/项目/项目规范流搭建/1.Eslint（新版9+）.md","filePath":"TutorialRecord/项目/项目规范流搭建/1.Eslint（新版9+）.md"}'),l={name:"TutorialRecord/项目/项目规范流搭建/1.Eslint（新版9+）.md"};function e(h,s,p,k,r,E){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="eslint-新版-9" tabindex="-1">Eslint（新版 9+） <a class="header-anchor" href="#eslint-新版-9" aria-label="Permalink to &quot;Eslint（新版 9+）&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p><a href="https://eslint.nodejs.cn/docs/latest/use/getting-started" target="_blank" rel="noreferrer">https://eslint.nodejs.cn/docs/latest/use/getting-started</a></p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><blockquote><p>阅读官方文档基本就妥了，这里简单记载下</p></blockquote><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pnpm create @eslint</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">config@latest</span></span></code></pre></div><h3 id="自动生成了-eslint-config-js-文件" tabindex="-1">自动生成了 eslint.config.js 文件 <a class="header-anchor" href="#自动生成了-eslint-config-js-文件" aria-label="Permalink to &quot;自动生成了 eslint.config.js 文件&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> js </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@eslint/js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pluginVue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;eslint-plugin-vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;eslint/config&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> globals </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;globals&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tseslint </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;typescript-eslint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { files: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;src/**/*.{js,mjs,cjs,ts,vue}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    files: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;src/**/*.{js,mjs,cjs,ts,vue}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    languageOptions: { globals: { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globals.browser, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globals.node } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    files: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;src/**/*.{js,mjs,cjs,ts,vue}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plugins: { js },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    extends: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;js/recommended&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  tseslint.configs.recommended,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pluginVue.configs[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;flat/essential&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    files: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;src/**/*.vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    languageOptions: { parserOptions: { parser: tseslint.parser } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { files: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;src/**/*.{js,mjs,cjs,ts,vue}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], rules: {} }, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Add your custom rules here</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span></code></pre></div><h3 id="验证是否生效" tabindex="-1">验证是否生效 <a class="header-anchor" href="#验证是否生效" aria-label="Permalink to &quot;验证是否生效&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eslint</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/your-file.vue</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --debug</span></span></code></pre></div><h3 id="解决与-prettier-的格式化冲突" tabindex="-1">解决与 Prettier 的格式化冲突 <a class="header-anchor" href="#解决与-prettier-的格式化冲突" aria-label="Permalink to &quot;解决与 Prettier 的格式化冲突&quot;">​</a></h3><p>参考 Prettier</p><h3 id="忽略某个文件" tabindex="-1">忽略某个文件 <a class="header-anchor" href="#忽略某个文件" aria-label="Permalink to &quot;忽略某个文件&quot;">​</a></h3><ol><li>ignore</li><li>注释标签</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint-disable */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这里的代码将不会被 ESLint 检查console.log(&#39;This code is ignored by ESLint.&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint-enable */</span></span></code></pre></div>`,16)]))}const c=i(l,[["render",e]]);export{o as __pageData,c as default};
