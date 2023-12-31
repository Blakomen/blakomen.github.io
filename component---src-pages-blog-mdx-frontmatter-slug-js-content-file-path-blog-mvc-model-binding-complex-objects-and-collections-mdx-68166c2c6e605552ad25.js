"use strict";(self.webpackChunkhenry_chong=self.webpackChunkhenry_chong||[]).push([[645],{3325:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return h}});var l=n(1151),r=n(7294);function a(e){const t=Object.assign({p:"p",strong:"strong",em:"em",pre:"pre",code:"code",h2:"h2",a:"a"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"Also known as ",r.createElement(t.strong,null,r.createElement(t.em,null,'"Why is my ViewModel returning null values to my HttpPost action?"')),"  The answer is at the very bottom if you feel like skipping straight to it."),"\n",r.createElement(t.p,null,"Let's say for example you have the following ViewModel and classes:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-csharp"},"public class MyViewModel\r\n{\r\n    public ComplexObject MyComplexObject { get; set; }\r\n    public int Value { get; set; }\r\n    public IEnumerable<ComplexObject> ComplexCollection { get; set; }\r\n}\n")),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-csharp"},"public class ComplexObject\r\n{\r\n    public int ID { get; set; }\r\n    public string Name { get; set; }\r\n}\n")),"\n",r.createElement(t.h2,null,"Attempt #1"),"\n",r.createElement(t.p,null,"If you had the following in your view:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-csharp"},'@using (Html.BeginForm())\r\n{\r\n    <input type="submit" value="Submit" />\r\n}\n')),"\n",r.createElement(t.p,null,"Looking in your controller:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-csharp"},"[HttpPost]\r\npublic ActionResult Submit(MyViewModel viewModel)\r\n{\r\n     // some stuff here\r\n\r\n     return new ContentAction();\r\n}\n")),"\n",r.createElement(t.p,null,"If you put a breakpoint and debug, you'll see that ",r.createElement(t.code,null,"viewModel")," won't actually have any of the values you need.\r\nThat's fine, we know how to handle that - ",r.createElement(t.strong,null,"we need to actually provide form input fields so that the data can be sent to the controller"),".\r\nWe'll use Hidden fields, and everything will be fine; a standard HTML concept. Let's try and get our complex object back."),"\n",r.createElement(t.h2,null,"Attempt #2"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-csharp"},'@using (Html.BeginForm())\r\n{\r\n    @Html.HiddenFor(m => Model.MyComplexObject)\r\n    <input type="submit" value="Submit" />\r\n}\n')),"\n",r.createElement(t.p,null,"So we added in a hidden field for the complex object - but if you breakpoint and debug, it'll still be null. What gives? It turns out you'll need to actually bind the individual properties of the object, or the default model binder will just ignore you."),"\n",r.createElement(t.h2,null,"Attempt #3"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-csharp"},'@using (Html.BeginForm())\r\n{\r\n    @Html.HiddenFor(m => Model.MyComplexObject.Name)\r\n    <input type="submit" value="Submit" />\r\n}\n')),"\n",r.createElement(t.p,null,"Excellent! Now we have the Name property when we debug (ID will still be unbound, though). What about our list? Let's try and bind that…"),"\n",r.createElement(t.h2,null,"Attempt #4"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-csharp"},'@using (Html.BeginForm())\r\n{\r\n    @Html.HiddenFor(m => Model.MyComplexObject.Name)\r\n    @Html.HiddenFor(m => Model.ComplexCollection)\r\n    <input type="submit" value="Submit" />\r\n}\n')),"\n",r.createElement(t.p,null,"No good - but we kind of knew that would happen anyway - the model binder doesn't magic up entire objects for us, so it's not too surprising it won't do a collection either.\r\nAfter a ",r.createElement(t.a,{href:"https://haacked.com/archive/2008/10/23/model-binding-to-a-list.aspx/"},"trawl of the internet")," to figure out why, the answer to binding a collection is that you need to explicitly provide an ID, as well as the properties you want bound.\r\nThe simplest way to do this is to change the ",r.createElement(t.code,null,"IEnumerable<>")," to an ",r.createElement(t.code,null,"IList<>")," (",r.createElement(t.a,{href:"http://stackoverflow.com/q/11677831/167018"},"there are other ways to do this if you don't want to use ",r.createElement(t.code,null,"IList<>")),"), and then for each item in your collection, create the hidden inputs."),"\n",r.createElement(t.h2,null,"Attempt #5"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-csharp"},'@using (Html.BeginForm())\r\n{\r\n    @Html.HiddenFor(m => Model.MyComplexObject.Name)\r\n    for (var i = 0; i < Model.ComplexCollection.Count; i++)\r\n    {\r\n        @Html.HiddenFor(x => x.ComplexCollection[i].ID)\r\n        @Html.HiddenFor(x => x.ComplexCollection[i].Name)\r\n    }\r\n    <input type="submit" value="Submit" />\r\n}\n')),"\n",r.createElement(t.p,null,"Now if you debug, you should see the values you expect! Congratulations!"),"\n",r.createElement(t.p,null,"The answer then, in summary:"),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"You must explicitly create a hidden input for each property in your complex object")," that you want to be bound - being lazy and attempting to create a hidden input for the entire object directly won't work (unless you create a Template for it - which is probably also better practice…)"),"\n",r.createElement(t.p,null,"IEnumerables and binding don't play very nicely directly out of the box - it looks like MVC has better base support for ",r.createElement(t.code,null,"IList<>")," and ",r.createElement(t.strong,null,"arrays"),", but you'll still have to ",r.createElement(t.strong,null,"enumerate the collection and create hidden inputs for each item"),"."),"\n",r.createElement(t.p,null,"Good luck out there!"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},i=n(1883),c=n(8032),u=n(5312),m=n(9357),s=n(62);const d=e=>{let{data:t,children:n}=e;const l=(0,c.c)(t.mdx.frontmatter.hero_image);return r.createElement(u.Z,{pageTitle:t.mdx.frontmatter.title},r.createElement("p",null,r.createElement("time",{dateTime:t.mdx.frontmatter.isoDate},t.mdx.frontmatter.date)),r.createElement("figure",null,r.createElement(c.G,{image:l,alt:t.mdx.frontmatter.hero_image_alt}),r.createElement("figcaption",null,r.createElement("p",null,"📷:"," ",r.createElement("a",{href:t.mdx.frontmatter.hero_image_credit_link,target:"_blank",rel:"noreferrer"},t.mdx.frontmatter.hero_image_credit_text)))),n,r.createElement("div",{className:s.L},r.createElement("button",null,r.createElement(i.Link,{to:"/blog"},"🔙 Back to all posts"))))},p=e=>{let{data:t}=e;return r.createElement(m.Z,{title:t.mdx.frontmatter.title,description:t.mdx.excerpt})};function h(e){return r.createElement(d,e,r.createElement(o,e))}},62:function(e,t,n){n.d(t,{L:function(){return l}});var l="mdx-frontmatter__slug-module--blogNavigation--7494c"}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-blog-mvc-model-binding-complex-objects-and-collections-mdx-68166c2c6e605552ad25.js.map