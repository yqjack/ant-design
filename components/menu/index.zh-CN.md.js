webpackJsonp([166],{1745:function(t,n){t.exports={content:["section",["p","\u4e3a\u9875\u9762\u548c\u529f\u80fd\u63d0\u4f9b\u5bfc\u822a\u7684\u83dc\u5355\u5217\u8868\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["p","\u5bfc\u822a\u83dc\u5355\u662f\u4e00\u4e2a\u7f51\u7ad9\u7684\u7075\u9b42\uff0c\u7528\u6237\u4f9d\u8d56\u5bfc\u822a\u5728\u5404\u4e2a\u9875\u9762\u4e2d\u8fdb\u884c\u8df3\u8f6c\u3002\u4e00\u822c\u5206\u4e3a\u9876\u90e8\u5bfc\u822a\u548c\u4fa7\u8fb9\u5bfc\u822a\uff0c\u9876\u90e8\u5bfc\u822a\u63d0\u4f9b\u5168\u5c40\u6027\u7684\u7c7b\u76ee\u548c\u529f\u80fd\uff0c\u4fa7\u8fb9\u5bfc\u822a\u63d0\u4f9b\u591a\u7ea7\u7ed3\u6784\u6765\u6536\u7eb3\u548c\u6392\u5217\u7f51\u7ad9\u67b6\u6784\u3002"],["p","\u66f4\u591a\u5e03\u5c40\u548c\u5bfc\u822a\u7684\u4f7f\u7528\u53ef\u4ee5\u53c2\u8003\uff1a",["a",{title:null,href:"/components/layout"},"\u901a\u7528\u5e03\u5c40"],"\u3002"]],meta:{category:"Components",cols:1,type:"Navigation",title:"Menu",subtitle:"\u5bfc\u822a\u83dc\u5355",filename:"components/menu/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f55\u65f6\u4f7f\u7528",title:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span><span class="token punctuation">></span></span>\u83dc\u5355\u9879<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SubMenu</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5b50\u83dc\u5355<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span><span class="token punctuation">></span></span>\u5b50\u83dc\u5355\u9879<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SubMenu</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu</span><span class="token punctuation">></span></span>'},["code",'<Menu>\n  <Menu.Item>\u83dc\u5355\u9879</Menu.Item>\n  <SubMenu title="\u5b50\u83dc\u5355">\n    <Menu.Item>\u5b50\u83dc\u5355\u9879</Menu.Item>\n  </SubMenu>\n</Menu>']],["h3","Menu"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","defaultOpenKeys"],["td","\u521d\u59cb\u5c55\u5f00\u7684 SubMenu \u83dc\u5355\u9879 key \u6570\u7ec4"],["td"],["td"]],["tr",["td","defaultSelectedKeys"],["td","\u521d\u59cb\u9009\u4e2d\u7684\u83dc\u5355\u9879 key \u6570\u7ec4"],["td","string","[","]"],["td"]],["tr",["td","forceSubMenuRender"],["td","\u5728\u5b50\u83dc\u5355\u5c55\u793a\u4e4b\u524d\u5c31\u6e32\u67d3\u8fdb DOM"],["td","boolean"],["td","false"]],["tr",["td","inlineCollapsed"],["td","inline \u65f6\u83dc\u5355\u662f\u5426\u6536\u8d77\u72b6\u6001"],["td","boolean"],["td","-"]],["tr",["td","inlineIndent"],["td","inline \u6a21\u5f0f\u7684\u83dc\u5355\u7f29\u8fdb\u5bbd\u5ea6"],["td","number"],["td","24"]],["tr",["td","mode"],["td","\u83dc\u5355\u7c7b\u578b\uff0c\u73b0\u5728\u652f\u6301\u5782\u76f4\u3001\u6c34\u5e73\u3001\u548c\u5185\u5d4c\u6a21\u5f0f\u4e09\u79cd"],["td","string: ",["code","vertical"]," ",["code","vertical-right"]," ",["code","horizontal"]," ",["code","inline"]],["td",["code","vertical"]]],["tr",["td","multiple"],["td","\u662f\u5426\u5141\u8bb8\u591a\u9009"],["td","boolean"],["td","false"]],["tr",["td","openKeys"],["td","\u5f53\u524d\u5c55\u5f00\u7684 SubMenu \u83dc\u5355\u9879 key \u6570\u7ec4"],["td","string","[","]"],["td"]],["tr",["td","selectable"],["td","\u662f\u5426\u5141\u8bb8\u9009\u4e2d"],["td","boolean"],["td","true"]],["tr",["td","selectedKeys"],["td","\u5f53\u524d\u9009\u4e2d\u7684\u83dc\u5355\u9879 key \u6570\u7ec4"],["td","string","[","]"],["td"]],["tr",["td","style"],["td","\u6839\u8282\u70b9\u6837\u5f0f"],["td","object"],["td"]],["tr",["td","subMenuCloseDelay"],["td","\u7528\u6237\u9f20\u6807\u79bb\u5f00\u5b50\u83dc\u5355\u540e\u5173\u95ed\u5ef6\u65f6\uff0c\u5355\u4f4d\uff1a\u79d2"],["td","number"],["td","0.1"]],["tr",["td","subMenuOpenDelay"],["td","\u7528\u6237\u9f20\u6807\u8fdb\u5165\u5b50\u83dc\u5355\u540e\u5f00\u542f\u5ef6\u65f6\uff0c\u5355\u4f4d\uff1a\u79d2"],["td","number"],["td","0"]],["tr",["td","theme"],["td","\u4e3b\u9898\u989c\u8272"],["td","string: ",["code","light"]," ",["code","dark"]],["td",["code","light"]]],["tr",["td","onClick"],["td","\u70b9\u51fb MenuItem \u8c03\u7528\u6b64\u51fd\u6570"],["td","function({ item, key, keyPath })"],["td","-"]],["tr",["td","onDeselect"],["td","\u53d6\u6d88\u9009\u4e2d\u65f6\u8c03\u7528\uff0c\u4ec5\u5728 multiple \u751f\u6548"],["td","function({ item, key, selectedKeys })"],["td","-"]],["tr",["td","onOpenChange"],["td","SubMenu \u5c55\u5f00/\u5173\u95ed\u7684\u56de\u8c03"],["td","function(openKeys: string","[","])"],["td","noop"]],["tr",["td","onSelect"],["td","\u88ab\u9009\u4e2d\u65f6\u8c03\u7528"],["td","function({ item, key, selectedKeys })"],["td","\u65e0 \xa0"]]]],["blockquote",["p","More options in ",["a",{title:null,href:"https://github.com/react-component/menu#api"},"rc-menu"]]],["h3","Menu.Item"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","disabled"],["td","\u662f\u5426\u7981\u7528"],["td","boolean"],["td","false"]],["tr",["td","key"],["td","item \u7684\u552f\u4e00\u6807\u5fd7"],["td","string"],["td"]]]],["h3","Menu.SubMenu"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","children"],["td","\u5b50\u83dc\u5355\u7684\u83dc\u5355\u9879"],["td","Array","<","MenuItem","|","SubMenu>"],["td"]],["tr",["td","disabled"],["td","\u662f\u5426\u7981\u7528"],["td","boolean"],["td","false"]],["tr",["td","key"],["td","\u552f\u4e00\u6807\u5fd7"],["td","string"],["td"]],["tr",["td","title"],["td","\u5b50\u83dc\u5355\u9879\u503c"],["td","string","|","ReactNode"],["td"]],["tr",["td","onTitleClick"],["td","\u70b9\u51fb\u5b50\u83dc\u5355\u6807\u9898"],["td","function({ key, domEvent })"],["td"]]]],["h3","Menu.ItemGroup"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","children"],["td","\u5206\u7ec4\u7684\u83dc\u5355\u9879"],["td","MenuItem","[","]"],["td"]],["tr",["td","title"],["td","\u5206\u7ec4\u6807\u9898"],["td","string","|","ReactNode"],["td"]]]],["h3","Menu.Divider"],["p","\u83dc\u5355\u9879\u5206\u5272\u7ebf\uff0c\u53ea\u7528\u5728\u5f39\u51fa\u83dc\u5355\u5185\u3002"]]}}});