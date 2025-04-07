import{_ as o,c as l,a4 as t,o as s}from"./chunks/framework.vOILIgLK.js";const u=JSON.parse('{"title":"阿里云 oss 图床搭建 （最新 2024.11）","description":"","frontmatter":{},"headers":[],"relativePath":"TutorialRecord/博客/vitePress系列/2.阿里云oss图床搭建.md","filePath":"TutorialRecord/博客/vitePress系列/2.阿里云oss图床搭建.md"}'),n={name:"TutorialRecord/博客/vitePress系列/2.阿里云oss图床搭建.md"};function e(r,a,i,g,c,m){return s(),l("div",null,a[0]||(a[0]=[t('<h1 id="阿里云-oss-图床搭建-最新-2024-11" tabindex="-1">阿里云 oss 图床搭建 （最新 2024.11） <a class="header-anchor" href="#阿里云-oss-图床搭建-最新-2024-11" aria-label="Permalink to &quot;阿里云 oss 图床搭建 （最新 2024.11）&quot;">​</a></h1><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><blockquote><p>本来搭建的是 gitee 图床，但是 gitee 图床在搭建完成后发现展示图片有问题，查了查好像是开启了防盗链啥的，考虑了下就用阿里云 oss 了</p></blockquote><blockquote><ul><li>价格 - 五年 45RMB</li><li>软件成本 - 38RMB</li><li>流量充值 - 50RMB (可考虑下行流量包，我没买)</li></ul></blockquote><h2 id="阿里云-oss-准备" tabindex="-1">阿里云 oss 准备 <a class="header-anchor" href="#阿里云-oss-准备" aria-label="Permalink to &quot;阿里云 oss 准备&quot;">​</a></h2><h3 id="_1-购买-阿里云-oss-资源" tabindex="-1">1. 购买 <strong>阿里云 oss</strong> 资源 <a class="header-anchor" href="#_1-购买-阿里云-oss-资源" aria-label="Permalink to &quot;1. 购买 **阿里云 oss** 资源&quot;">​</a></h3><ul><li><p><a href="https://www.aliyun.com/" target="_blank" rel="noreferrer">阿里云官网</a><img src="https://ankang-blog-img.oss-cn-beijing.aliyuncs.com/myBlogImg/20241127/Pp83UG.png" alt="Pp83UG" data-fancybox="gallery" loading="lazy"></p></li><li><p>购买资源包</p><blockquote><p>本地冗余存储 40GB 做图床肯定够了 有特殊需求可以自行选择</p></blockquote><p><img src="https://ankang-blog-img.oss-cn-beijing.aliyuncs.com/myBlogImg/20241127/NSkJi5.png" alt="NSkJi5" data-fancybox="gallery" loading="lazy"></p></li></ul><h3 id="_2-创建-bucket-存储空间" tabindex="-1">2. 创建 <strong>bucket</strong> 存储空间 <a class="header-anchor" href="#_2-创建-bucket-存储空间" aria-label="Permalink to &quot;2. 创建 **bucket** 存储空间&quot;">​</a></h3><blockquote><p>创建时无法关闭<strong>阻止公共访问</strong>，需要后续设置。开启<strong>公共读</strong>权限也是需要后续打开</p></blockquote><p><img src="https://ankang-blog-img.oss-cn-beijing.aliyuncs.com/myBlogImg/20241127/89ZEau.png" alt="89ZEau" data-fancybox="gallery" loading="lazy"></p><h3 id="_3-ram-子用户创建-访问控制-用户授权" tabindex="-1">3. RAM <strong>子用户创建</strong> &amp; <strong>访问控制</strong> &amp; <strong>用户授权</strong> <a class="header-anchor" href="#_3-ram-子用户创建-访问控制-用户授权" aria-label="Permalink to &quot;3. RAM **子用户创建** &amp; **访问控制** &amp; **用户授权**&quot;">​</a></h3><ul><li><p>创建子用户</p><ul><li>鼠标<strong>悬浮</strong>在头像上，进入访问控制</li><li>进入用户选项、创建用户</li><li>勾选 <strong>使用永久 AccessKey 访问</strong><img src="https://ankang-blog-img.oss-cn-beijing.aliyuncs.com/myBlogImg/20241127/PUri4D.png" alt="PUri4D" data-fancybox="gallery" loading="lazy"><img src="https://ankang-blog-img.oss-cn-beijing.aliyuncs.com/myBlogImg/20241127/DhQC5S.png" alt="DhQC5S" data-fancybox="gallery" loading="lazy"></li></ul></li><li><p>用户权限授权</p><ul><li>选择<strong>子用户</strong>，点击<strong>添加权限</strong></li><li>只需要添加<strong>OSS</strong>权限即可 <img src="https://ankang-blog-img.oss-cn-beijing.aliyuncs.com/myBlogImg/20241127/2PwxNw.png" alt="2PwxNw" data-fancybox="gallery" loading="lazy"><img src="https://ankang-blog-img.oss-cn-beijing.aliyuncs.com/myBlogImg/20241127/NvBLdL.png" alt="NvBLdL" data-fancybox="gallery" loading="lazy"></li></ul></li><li><p>然后回到刚刚创建的 bucket，给新建的用户授权</p><ul><li>进入<strong>权限管理</strong>，<strong>bucket 授权策略</strong>，<strong>新增授权</strong></li><li>选择<strong>子账号</strong>，<strong>读写权限</strong>，<strong>保存</strong><img src="https://ankang-blog-img.oss-cn-beijing.aliyuncs.com/myBlogImg/20241127/FDmQBj.png" alt="FDmQBj" data-fancybox="gallery" loading="lazy"><img src="https://ankang-blog-img.oss-cn-beijing.aliyuncs.com/myBlogImg/20241127/iFE9hT.png" alt="iFE9hT" data-fancybox="gallery" loading="lazy"></li></ul></li></ul><h3 id="_4-创建-accesskey-和-secretkey" tabindex="-1">4. 创建 <strong>accessKey</strong> 和 <strong>secretKey</strong> <a class="header-anchor" href="#_4-创建-accesskey-和-secretkey" aria-label="Permalink to &quot;4. 创建 **accessKey** 和 **secretKey**&quot;">​</a></h3><ul><li><p>进入 RAM 访问控制，点击子用户，进入用户详情</p><ul><li><p>创建<strong>accessKey</strong> 和 <strong>secretKey</strong></p><blockquote><p><strong>注意</strong>：<strong>secretKey</strong> 只能看一次，所以要保存好</p></blockquote><p><img src="https://ankang-blog-img.oss-cn-beijing.aliyuncs.com/myBlogImg/20241127/8761B6.png" alt="8761B6" data-fancybox="gallery" loading="lazy"><img src="https://ankang-blog-img.oss-cn-beijing.aliyuncs.com/myBlogImg/20241127/Yp2rjt.png" alt="Yp2rjt" data-fancybox="gallery" loading="lazy"></p></li></ul></li></ul><h3 id="_5-开启水印功能-防盗链功能" tabindex="-1">5. 开启<strong>水印</strong>功能 &amp; <strong>防盗链</strong>功能 <a class="header-anchor" href="#_5-开启水印功能-防盗链功能" aria-label="Permalink to &quot;5. 开启**水印**功能 &amp; **防盗链**功能&quot;">​</a></h3><ul><li>水印大家都懂，就不多说了 <ul><li>bucket -&gt; 数据处理 -&gt; 图片处理</li><li>自定义分隔符 &amp; 自定义水印</li></ul></li><li>防盗链主要是防止出现恶意访问导致流量增加，钱哗哗的就没了 <ul><li>bucket -&gt; 数据安全-&gt; 防盗链</li></ul></li></ul><h2 id="图床工具准备" tabindex="-1">图床工具准备 <a class="header-anchor" href="#图床工具准备" aria-label="Permalink to &quot;图床工具准备&quot;">​</a></h2><h3 id="_6-mac-安装图床上传工具" tabindex="-1">6. mac 安装图床上传工具 <a class="header-anchor" href="#_6-mac-安装图床上传工具" aria-label="Permalink to &quot;6. mac 安装图床上传工具&quot;">​</a></h3><blockquote><p>这里我用的是 <strong>uPic</strong></p></blockquote><p><img src="https://ankang-blog-img.oss-cn-beijing.aliyuncs.com/myBlogImg/20241127/7B3JCd.png" alt="7B3JCd" data-fancybox="gallery" loading="lazy"></p><h3 id="_7-图床上传工具配置-测试" tabindex="-1">7. 图床上传工具配置 &amp; 测试 <a class="header-anchor" href="#_7-图床上传工具配置-测试" aria-label="Permalink to &quot;7. 图床上传工具配置 &amp; 测试&quot;">​</a></h3><p><img src="https://ankang-blog-img.oss-cn-beijing.aliyuncs.com/myBlogImg/20241127/opZGMK.png" alt="opZGMK" data-fancybox="gallery" loading="lazy"></p><h2 id="链接地址" tabindex="-1">链接地址 <a class="header-anchor" href="#链接地址" aria-label="Permalink to &quot;链接地址&quot;">​</a></h2><p><a href="https://www.aliyun.com/?spm=5176.8466032.console-base_top-nav.dlogo.713e1450eE5UVZ" target="_blank" rel="noreferrer">阿里云官网</a><a href="https://zhuanlan.zhihu.com/p/493097611" target="_blank" rel="noreferrer">参考教程</a></p>',24)]))}const h=o(n,[["render",e]]);export{u as __pageData,h as default};
