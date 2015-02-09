Ext.data.JsonP.Router({"tagname":"class","name":"Router","autodetected":{},"files":[{"filename":"Router.js","href":"Router.html#Router"}],"uses":["EventEmitter"],"members":[{"name":"back","tagname":"method","owner":"Router","id":"method-back","meta":{}},{"name":"checkRoute","tagname":"method","owner":"Router","id":"method-checkRoute","meta":{}},{"name":"getPath","tagname":"method","owner":"Router","id":"method-getPath","meta":{}},{"name":"isSupported","tagname":"method","owner":"Router","id":"method-isSupported","meta":{}},{"name":"navigate","tagname":"method","owner":"Router","id":"method-navigate","meta":{}},{"name":"route","tagname":"method","owner":"Router","id":"method-route","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Router","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"html":"<div><pre class=\"hierarchy\"><h4>Uses</h4><div class='dependency'><a href='#!/api/EventEmitter' rel='EventEmitter' class='docClass'>EventEmitter</a></div><h4>Files</h4><div class='dependency'><a href='source/Router.html#Router' target='_blank'>Router.js</a></div></pre><div class='doc-contents'><p>Provides navigation routing and location information</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-back' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Router'>Router</span><br/><a href='source/Router.html#Router-method-back' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Router-method-back' class='name expandable'>back</a>( <span class='pre'></span> ) : jQuery.Deferred<span class=\"signature\"></span></div><div class='description'><div class='short'>Navigate to the previous route. ...</div><div class='long'><p>Navigate to the previous route. This is a wrapper for window.history.back</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>jQuery.Deferred</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-checkRoute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Router'>Router</span><br/><a href='source/Router.html#Router-method-checkRoute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Router-method-checkRoute' class='name expandable'>checkRoute</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Check the current route and run appropriate callback if it matches. ...</div><div class='long'><p>Check the current route and run appropriate callback if it matches.</p>\n</div></div></div><div id='method-getPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Router'>Router</span><br/><a href='source/Router.html#Router-method-getPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Router-method-getPath' class='name expandable'>getPath</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Get current path (hash). ...</div><div class='long'><p>Get current path (hash).</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>Current path.</p>\n</div></li></ul></div></div></div><div id='method-isSupported' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Router'>Router</span><br/><a href='source/Router.html#Router-method-isSupported' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Router-method-isSupported' class='name expandable'>isSupported</a>( <span class='pre'></span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Determine if current browser supports onhashchange event ...</div><div class='long'><p>Determine if current browser supports onhashchange event</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-navigate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Router'>Router</span><br/><a href='source/Router.html#Router-method-navigate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Router-method-navigate' class='name expandable'>navigate</a>( <span class='pre'>path</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Navigate to a specific route. ...</div><div class='long'><p>Navigate to a specific route. This is only a wrapper for changing the\nhash now.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>String with a route (hash without #).</p>\n</div></li></ul></div></div></div><div id='method-route' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Router'>Router</span><br/><a href='source/Router.html#Router-method-route' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Router-method-route' class='name expandable'>route</a>( <span class='pre'>path, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Bind a specific callback to a hash-based route, e.g. ...</div><div class='long'><p>Bind a specific callback to a hash-based route, e.g.</p>\n\n<pre class='inline-example '><code>route( 'alert', function () { alert( 'something' ); } );\nroute( /hi-(.*)/, function ( name ) { alert( 'Hi ' + name ) } );\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>String or RegExp to match.</p>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Callback to be run when hash changes to one\nthat matches.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});