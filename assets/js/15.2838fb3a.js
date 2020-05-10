(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{333:function(e,t,o){"use strict";o.r(t);var r=o(33),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"what-to-blog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-to-blog"}},[e._v("#")]),e._v(" What to blog?")]),e._v(" "),o("p",[o("em",[e._v("2015-01-07")])]),e._v(" "),o("p",[e._v("So, I moved my blog from "),o("a",{attrs:{href:"https://www.blogger.com/start",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google - Blogger"),o("OutboundLink")],1),e._v(", to "),o("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github Pages"),o("OutboundLink")],1),e._v(". It is powered by "),o("a",{attrs:{href:"http://jekyllrb.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jekyll"),o("OutboundLink")],1),e._v(". But now the problem is I don't really have anything to blog about. I have so far written about how Finance and Economics cons people, but the audience I am reaching out to is not really interested in that. So I thought I will write about how to get your blog up and running on "),o("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github Pages"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Why would you want to use Jekyll for your blog? Well, there is no real reason to switch, except that it is simple and elegant. You don't have worry about logins, databases and comments. So, if you feel you can move beyond Blogger and Wordpress, go ahead and try it. To do this, you don't really need to know programming. If you follow the steps below you should be good.")]),e._v(" "),o("p",[e._v("Before we start, it is good to know a few things. We will be writing the actual posts in "),o("a",{attrs:{href:"http://daringfireball.net/projects/markdown/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Markdown"),o("OutboundLink")],1),e._v(". For those who don't know much programming, that is a good thing because you don't really have to learn HTML. You can learn the basics of Markdown "),o("a",{attrs:{href:"http://markdowntutorial.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(". The tutorial will take you about 10 mins and will teach you enough to create your posts in markdown. You can also refer to this "),o("a",{attrs:{href:"http://assemble.io/docs/Cheatsheet-Markdown.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("cheatsheet"),o("OutboundLink")],1),e._v(". Jekyll is a static site generator. It will help us create the blog/site. It's written in the "),o("a",{attrs:{href:"https://www.ruby-lang.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ruby programming language"),o("OutboundLink")],1),e._v(". Finally, we will be hosting the blog on "),o("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github Pages"),o("OutboundLink")],1),e._v("."),o("br"),e._v("\nLet's begin.")]),e._v(" "),o("ol",[o("li",[e._v("First, you need to ensure that you have Ruby and Git installed on your system. If you are on a Mac, you will mostly have Ruby pre-installed. You can type "),o("code",[e._v("ruby --version")]),e._v(" on the Terminal to see if Ruby is installed. If not you can download it ("),o("a",{attrs:{href:"http://rubyinstaller.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows"),o("OutboundLink")],1),e._v("/"),o("a",{attrs:{href:"https://www.ruby-lang.org/en/documentation/installation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mac"),o("OutboundLink")],1),e._v("). After that install git. You can download it "),o("a",{attrs:{href:"http://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("Now you need to install "),o("a",{attrs:{href:"http://jekyllrb.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jekyll"),o("OutboundLink")],1),e._v(". If you are planning to host your site on GitHub pages you should install the GitHub-pages gem. Type "),o("code",[e._v("gem install gitHub-pages")]),e._v(" from the terminal. This will also install Jekyll.")]),e._v(" "),o("li",[e._v("To create the files for your blog, from the terminal do "),o("code",[e._v("Jekyll new your_blog_name")]),e._v(". But this will use the standard theme. If you want to use a different theme, then download a "),o("a",{attrs:{href:"http://jekyllthemes.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jekyll theme"),o("OutboundLink")],1),e._v(". Unzip and rename the folder to blog name. Now edit the "),o("code",[e._v("_config.yml")]),e._v(" file to change the title, email and other contact details to the one's you want. All your posts will in the "),o("code",[e._v("_posts")]),e._v(" folder. You will have to name your posts using the following convention "),o("em",[e._v("yyyy-mm-dd-title.markdown")]),e._v(". Like I mentioned before you will be writing your posts in "),o("em",[e._v("markdown")]),e._v(". There will be sample posts in the "),o("code",[e._v("_posts")]),e._v(" folder. You can duplicate them to create your posts. Be sure to follow the naming conventions. Also, once you open the file, edit the "),o("em",[e._v("title")]),e._v(" and "),o("em",[e._v("date")]),e._v(", to the correct values. Also, edit the "),o("code",[e._v("about.md")]),e._v(" file. Now type the following from the terminal.")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("jekyll your_blog_name  \njekyll serve\n")])])]),o("p",[e._v("This will start a local server. Open a browser window and type in "),o("code",[e._v("http://localhost:4000")]),e._v(" to view your site."),o("br"),e._v("\n4. To host your blog on GitHub pages, you first need to sign up on "),o("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),o("OutboundLink")],1),e._v(". Choose the name of your blog as your username. Say if your blog is called "),o("em",[e._v("Awesome blog")]),e._v(" (ya not very imaginative), then choose "),o("em",[e._v("awesomeblog")]),e._v(" as your username. Once you sign in/sign up, there will be a tab called "),o("em",[e._v("Repositories")]),e._v(". Click on it. Then click on new. In the name of your repository enter "),o("em",[e._v("username.github.io")]),e._v(" where "),o("em",[e._v("username")]),e._v(" is your GitHub username. For hosting, you need to give this name to your repository. Now open up the terminal and type in the following.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ cd your_blog_name     \n$ git init \n$ git add . \n$ git commit -m 'First commit'  \n$ git remote add origin https://github.com/username/username.github.io.git  \n$ git push -u origin master\n")])])]),o("p",[e._v("Now go to "),o("code",[e._v("https://username.github.io")]),e._v(" and you can see your site. This is the URL where your site will be. To make the changes, you have made to your folder (like adding a post) reflect on your blog do")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ git add .  \n$ git commit -m 'Type a message for your commit'  \n$ git push\n")])])]),o("p",[e._v("Basically, that's all you need to know to start blogging using Jekyll and GitHub pages."),o("br"),e._v("\nIf you get stuck anywhere feel free to reach out to me.")]),e._v(" "),o("p",[o("em",[e._v("Update (2020-05-20): I ported my blog to "),o("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);