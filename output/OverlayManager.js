Ext.data.JsonP.OverlayManager({"tagname":"class","name":"OverlayManager","autodetected":{},"files":[{"filename":"OverlayManager.js","href":"OverlayManager.html#OverlayManager"}],"extends":"Class","members":[{"name":"_checkRoute","tagname":"method","owner":"OverlayManager","id":"method-_checkRoute","meta":{"private":true}},{"name":"_hideOverlay","tagname":"method","owner":"OverlayManager","id":"method-_hideOverlay","meta":{"private":true}},{"name":"_matchRoute","tagname":"method","owner":"OverlayManager","id":"method-_matchRoute","meta":{"private":true}},{"name":"_onHideOverlay","tagname":"method","owner":"OverlayManager","id":"method-_onHideOverlay","meta":{"private":true}},{"name":"_processMatch","tagname":"method","owner":"OverlayManager","id":"method-_processMatch","meta":{"private":true}},{"name":"_showOverlay","tagname":"method","owner":"OverlayManager","id":"method-_showOverlay","meta":{"private":true}},{"name":"add","tagname":"method","owner":"OverlayManager","id":"method-add","meta":{}},{"name":"extend","tagname":"method","owner":"Class","id":"method-extend","meta":{}},{"name":"initialize","tagname":"method","owner":"OverlayManager","id":"method-initialize","meta":{}},{"name":"replaceCurrent","tagname":"method","owner":"OverlayManager","id":"method-replaceCurrent","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-OverlayManager","short_doc":"Manages opening and closing overlays when the URL hash changes to one\nof the registered values (see OverlayManager.ad...","component":false,"superclasses":["Class"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Class' rel='Class' class='docClass'>Class</a><div class='subclass '><strong>OverlayManager</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/OverlayManager.html#OverlayManager' target='_blank'>OverlayManager.js</a></div></pre><div class='doc-contents'><p>Manages opening and closing overlays when the URL hash changes to one\nof the registered values (see <a href=\"#!/api/OverlayManager-method-add\" rel=\"OverlayManager-method-add\" class=\"docClass\">OverlayManager.add</a>()).</p>\n\n<p>This allows overlays to function like real pages, with similar browser back/forward\nand refresh behavior.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_checkRoute' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='OverlayManager'>OverlayManager</span><br/><a href='source/OverlayManager.html#OverlayManager-method-_checkRoute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/OverlayManager-method-_checkRoute' class='name expandable'>_checkRoute</a>( <span class='pre'>ev</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>A callback for Router's route event. ...</div><div class='long'><p>A callback for Router's <code>route</code> event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ev</span> : jQuery.Event<div class='sub-desc'><p>Event object.</p>\n</div></li></ul></div></div></div><div id='method-_hideOverlay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='OverlayManager'>OverlayManager</span><br/><a href='source/OverlayManager.html#OverlayManager-method-_hideOverlay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/OverlayManager-method-_hideOverlay' class='name expandable'>_hideOverlay</a>( <span class='pre'>overlay</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Hide overlay ...</div><div class='long'><p>Hide overlay</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>overlay</span> : <a href=\"#!/api/Overlay\" rel=\"Overlay\" class=\"docClass\">Overlay</a><div class='sub-desc'><p>to hide</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>Whether the overlay has been hidden</p>\n</div></li></ul></div></div></div><div id='method-_matchRoute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='OverlayManager'>OverlayManager</span><br/><a href='source/OverlayManager.html#OverlayManager-method-_matchRoute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/OverlayManager-method-_matchRoute' class='name expandable'>_matchRoute</a>( <span class='pre'>path, entry</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|null<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Check if a given path matches one of the entries. ...</div><div class='long'><p>Check if a given path matches one of the entries.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Path (hash) to check.</p>\n</div></li><li><span class='pre'>entry</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Entry object created in <a href=\"#!/api/OverlayManager-method-add\" rel=\"OverlayManager-method-add\" class=\"docClass\">OverlayManager.add</a>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|null</span><div class='sub-desc'><p>Match object with factory function's result. Returns null if no match.\nor null if no match.</p>\n</div></li></ul></div></div></div><div id='method-_onHideOverlay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='OverlayManager'>OverlayManager</span><br/><a href='source/OverlayManager.html#OverlayManager-method-_onHideOverlay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/OverlayManager-method-_onHideOverlay' class='name expandable'>_onHideOverlay</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Don't try to hide the active overlay on a route change event triggered\nby hiding another overlay. ...</div><div class='long'><p>Don't try to hide the active overlay on a route change event triggered\nby hiding another overlay.\nCalled when hiding an overlay.</p>\n</div></div></div><div id='method-_processMatch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='OverlayManager'>OverlayManager</span><br/><a href='source/OverlayManager.html#OverlayManager-method-_processMatch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/OverlayManager-method-_processMatch' class='name expandable'>_processMatch</a>( <span class='pre'>match</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Show match's overlay if match is not null. ...</div><div class='long'><p>Show match's overlay if match is not null.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>match</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|null<div class='sub-desc'><p>Object with factory function's result. null if no match.</p>\n</div></li></ul></div></div></div><div id='method-_showOverlay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='OverlayManager'>OverlayManager</span><br/><a href='source/OverlayManager.html#OverlayManager-method-_showOverlay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/OverlayManager-method-_showOverlay' class='name expandable'>_showOverlay</a>( <span class='pre'>overlay</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Show the overlay and bind the 'om_hide' event to onHideOverlay. ...</div><div class='long'><p>Show the overlay and bind the '<em>om_hide' event to </em>onHideOverlay.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>overlay</span> : <a href=\"#!/api/Overlay\" rel=\"Overlay\" class=\"docClass\">Overlay</a><div class='sub-desc'><p>to show</p>\n</div></li></ul></div></div></div><div id='method-add' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='OverlayManager'>OverlayManager</span><br/><a href='source/OverlayManager.html#OverlayManager-method-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/OverlayManager-method-add' class='name expandable'>add</a>( <span class='pre'>route, factory</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add an overlay that should be shown for a specific fragment identifier. ...</div><div class='long'><p>Add an overlay that should be shown for a specific fragment identifier.</p>\n\n<p>The following code will display an overlay whenever a user visits a URL that\nend with '#/hi/name'. The value of <code>name</code> will be passed to the overlay.</p>\n\n<pre class='inline-example '><code>overlayManager.add( /\\/hi\\/(.*)/, function ( name ) {\n  var factoryResult = $.Deferred();\n\n  mw.using( 'mobile.HiOverlay', function () {\n    var HiOverlay = M.require( 'HiOverlay' );\n    factoryResult.resolve( new HiOverlay( { name: name } ) );\n  } );\n\n  return factoryResult;\n} );\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>route</span> : <a href=\"#!/api/RegExp\" rel=\"RegExp\" class=\"docClass\">RegExp</a><div class='sub-desc'><p>route regular expression, optionally with parameters.</p>\n</div></li><li><span class='pre'>factory</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>a function returning an overlay or a $.Deferred\nwhich resolves to an overlay.</p>\n</div></li></ul></div></div></div><div id='method-extend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/Class.html#Class-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-extend' class='name expandable'>extend</a>( <span class='pre'>prototype</span> ) : <a href=\"#!/api/Class\" rel=\"Class\" class=\"docClass\">Class</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Extends a class with new methods and member properties. ...</div><div class='long'><p>Extends a class with new methods and member properties.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prototype</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Prototype that should be incorporated into the new Class.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Class\" rel=\"Class\" class=\"docClass\">Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='OverlayManager'>OverlayManager</span><br/><a href='source/OverlayManager.html#OverlayManager-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/OverlayManager-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>router</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor, if you override it, use _super(). ...</div><div class='long'><p>Constructor, if you override it, use _super().</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>router</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/Class-method-initialize\" rel=\"Class-method-initialize\" class=\"docClass\">Class.initialize</a></p></div></div></div><div id='method-replaceCurrent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='OverlayManager'>OverlayManager</span><br/><a href='source/OverlayManager.html#OverlayManager-method-replaceCurrent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/OverlayManager-method-replaceCurrent' class='name expandable'>replaceCurrent</a>( <span class='pre'>overlay</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Replace the currently displayed overlay with a new overlay without changing the\nURL. ...</div><div class='long'><p>Replace the currently displayed overlay with a new overlay without changing the\nURL. This is useful for when you want to switch overlays, but don't want to\nchange the back button or close box behavior.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>overlay</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The overlay to display</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});