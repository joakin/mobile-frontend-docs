Ext.data.JsonP.user({"tagname":"class","name":"user","autodetected":{},"files":[{"filename":"user.js","href":"user.html#user"}],"singleton":true,"members":[{"name":"getEditCount","tagname":"method","owner":"user","id":"method-getEditCount","meta":{}},{"name":"getGroups","tagname":"method","owner":"user","id":"method-getGroups","meta":{}},{"name":"getSessionId","tagname":"method","owner":"user","id":"method-getSessionId","meta":{}},{"name":"inUserBucketA","tagname":"method","owner":"user","id":"method-inUserBucketA","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-user","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/user.html#user' target='_blank'>user.js</a></div></pre><div class='doc-contents'><p>Utility library for looking up details on the current user</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getEditCount' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='user'>user</span><br/><a href='source/user.html#user-method-getEditCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/user-method-getEditCount' class='name expandable'>getEditCount</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Find current users edit count ...</div><div class='long'><p>Find current users edit count</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>the edit count of the current user on the current wiki.</p>\n</div></li></ul></div></div></div><div id='method-getGroups' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='user'>user</span><br/><a href='source/user.html#user-method-getGroups' target='_blank' class='view-source'>view source</a></div><a href='#!/api/user-method-getGroups' class='name expandable'>getGroups</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>FIXME: Not sure why mw.user is asynchronous when the information is available\nFor reasons I do not understand getGrou...</div><div class='long'><p>FIXME: Not sure why mw.user is asynchronous when the information is available\nFor reasons I do not understand getGroups in core causes an unnecessary ajax request\nThe information this returns is identical to the content of the config variable.\nTo avoid an unnecessary ajax request on every page view simply use config variable.</p>\n</div></div></div><div id='method-getSessionId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='user'>user</span><br/><a href='source/user.html#user-method-getSessionId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/user-method-getSessionId' class='name expandable'>getSessionId</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieve and, if not present, generate a random session ID\n(32 alphanumeric characters). ...</div><div class='long'><p>Retrieve and, if not present, generate a random session ID\n(32 alphanumeric characters).\nFIXME: use settings module</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-inUserBucketA' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='user'>user</span><br/><a href='source/user.html#user-method-inUserBucketA' target='_blank' class='view-source'>view source</a></div><a href='#!/api/user-method-inUserBucketA' class='name expandable'>inUserBucketA</a>( <span class='pre'></span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>User Bucketing for A/B testing\n(we want this to be the same everywhere) ...</div><div class='long'><p>User Bucketing for A/B testing\n(we want this to be the same everywhere)</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});