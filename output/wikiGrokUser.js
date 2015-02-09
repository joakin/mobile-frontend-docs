Ext.data.JsonP.wikiGrokUser({"tagname":"class","name":"wikiGrokUser","autodetected":{},"files":[{"filename":"wikigrokuser.js","href":"wikigrokuser.html#wikiGrokUser"}],"singleton":true,"members":[{"name":"getToken","tagname":"method","owner":"wikiGrokUser","id":"method-getToken","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-wikiGrokUser","short_doc":"The wikiGrokUser object encapsulates the WikiGrok A/B test specific\nstate of the user, e.g. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/wikigrokuser.html#wikiGrokUser' target='_blank'>wikigrokuser.js</a></div></pre><div class='doc-contents'><p>The <code>wikiGrokUser</code> object encapsulates the WikiGrok A/B test specific\nstate of the user, e.g. whether or not they have seen WikiGrok while\nbrowsing anonymously, whereas the <code>user</code> object encapsulates their\ngeneral state, e.g. their ID and name.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getToken' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='wikiGrokUser'>wikiGrokUser</span><br/><a href='source/wikigrokuser.html#wikiGrokUser-method-getToken' target='_blank' class='view-source'>view source</a></div><a href='#!/api/wikiGrokUser-method-getToken' class='name expandable'>getToken</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the user's token from the \"-wikiGrokUserToken\" cookie. ...</div><div class='long'><p>Gets the user's token from the \"-wikiGrokUserToken\" cookie. If the cookie\nisn't set, then a token is generated and then stored in the cookie for 90\ndays, and then returned.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});