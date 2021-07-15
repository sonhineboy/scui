---   
home: true
---

<div class="banner" :style="{backgroundImage:'url('+$withBase('/home-bg.png')+')'}"">
	<div class="home-content">
		<div class="welcome">
			<h1>SCUI Admin</h1>
			<h2>高性能中后台前端解决方案</h2>
			<h4>基于 Vue3、elementPlus 持续性的提供独家组件和丰富的业务模板帮助你快速搭建企业级中后台前端任务。</h4>
			<p>
				<a href="guide/" class="nav-link action-button">快速开始使用</a>
				<a href="https://lolicode.gitee.io/scui-doc/demo/#/login" class="nav-link demo-button" target="_blank">在线预览</a>
			</p>
		</div>
		<div class="welcome-img">
			<img :src="$withBase('/hero-img.png')">
		</div>
	</div>
</div>

<div class="home-content">
	<div class="features">
		<div class="feature"><h2>简洁至上</h2> <p>凭借VUE组件化开发，以最小的代码量和最少的时间帮助你专注于业务。</p></div>
		<div class="feature"><h2>可用性</h2> <p>在超高可用性和视觉信息上做了个平衡，一切以用户体验为第一标准。</p></div>
		<div class="feature"><h2>高性能</h2> <p>在提高前端算力、减少带宽请求和代码执行力上多次优化，并且持续着。</p></div>
	</div>
</div>

<div class="footer">
    Copyright © SCUI
</div>

<style>
	body {}
	.home {max-width:none !important;padding: 3.6rem 0 0 0!important;}
	.home header {display: none;}
	
	.home-content {max-width:1140px;padding:0 2rem;margin:0 auto;}
	.banner {text-align: center;background-color: #fbfbfd;background-size: cover;background-position: center center;background-repeat: no-repeat;border-bottom: 1px solid #eaecef;padding-top:80px;}
	.welcome h1 {font-size: 50px;font-weight: bold;margin: 0;}
	.welcome h2 {font-size: 28px;font-weight: normal;border-bottom:0;}
	.welcome h4 {font-size: 14px;font-weight: normal;color: #999;line-height: 1.8;}
	.welcome p {margin: 40px 0;}
	.welcome .nav-link {display: inline-block;border-radius: 3px;padding: 12px 30px;font-size: 15px;background: #3887e5;color: #fff;transition: all .3s}
	.welcome .nav-link:hover {background: #66b1ff;}
	.welcome .nav-link.demo-button {border: 1px solid #3887e5;background: transparent;color: #3887e5;margin-left: 20px;}
	.welcome .nav-link.demo-button:hover {background: #ecf5ff;}
	.welcome-img img {width: 100%;vertical-align: bottom;}
	.home .features {margin-top: 0px !important;padding:50px 0 !important;align-items: center!important;border-top: 0!important;}
	.home .features .feature {text-align: center}
	.home .features .feature p {font-size: 14px;}
</style>