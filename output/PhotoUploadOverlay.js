Ext.data.JsonP.PhotoUploadOverlay({"tagname":"class","name":"PhotoUploadOverlay","autodetected":{},"files":[{"filename":"PhotoUploadOverlay.js","href":"PhotoUploadOverlay.html#PhotoUploadOverlay"}],"uses":["PhotoApi"],"extends":"Overlay","members":[{"name":"defaults","tagname":"cfg","owner":"PhotoUploadOverlay","id":"cfg-defaults","meta":{}},{"name":"String","tagname":"property","owner":"View","id":"property-String","meta":{}},{"name":"appendTo","tagname":"property","owner":"Overlay","id":"property-appendTo","meta":{}},{"name":"className","tagname":"property","owner":"Overlay","id":"property-className","meta":{}},{"name":"closeOnContentTap","tagname":"property","owner":"Overlay","id":"property-closeOnContentTap","meta":{}},{"name":"events","tagname":"property","owner":"View","id":"property-events","meta":{}},{"name":"fullScreen","tagname":"property","owner":"Overlay","id":"property-fullScreen","meta":{}},{"name":"hasFixedHeader","tagname":"property","owner":"Overlay","id":"property-hasFixedHeader","meta":{}},{"name":"template","tagname":"property","owner":"View","id":"property-template","meta":{}},{"name":"templatePartials","tagname":"property","owner":"View","id":"property-templatePartials","meta":{}},{"name":"$","tagname":"method","owner":"View","id":"method-S-","meta":{}},{"name":"_fixIosHeader","tagname":"method","owner":"Overlay","id":"method-_fixIosHeader","meta":{"private":true}},{"name":"_resizeContent","tagname":"method","owner":"Overlay","id":"method-_resizeContent","meta":{"private":true}},{"name":"_save","tagname":"method","owner":"PhotoUploadOverlay","id":"method-_save","meta":{"private":true}},{"name":"_showHidden","tagname":"method","owner":"Overlay","id":"method-_showHidden","meta":{"private":true}},{"name":"_submit","tagname":"method","owner":"PhotoUploadOverlay","id":"method-_submit","meta":{"private":true}},{"name":"clearSpinner","tagname":"method","owner":"Overlay","id":"method-clearSpinner","meta":{}},{"name":"delegate","tagname":"method","owner":"View","id":"method-delegate","meta":{}},{"name":"delegateEvents","tagname":"method","owner":"View","id":"method-delegateEvents","meta":{}},{"name":"extend","tagname":"method","owner":"Class","id":"method-extend","meta":{}},{"name":"getDescription","tagname":"method","owner":"PhotoUploadOverlay","id":"method-getDescription","meta":{}},{"name":"hide","tagname":"method","owner":"PhotoUploadOverlay","id":"method-hide","meta":{}},{"name":"initialize","tagname":"method","owner":"PhotoUploadOverlay","id":"method-initialize","meta":{}},{"name":"postRender","tagname":"method","owner":"PhotoUploadOverlay","id":"method-postRender","meta":{}},{"name":"preRender","tagname":"method","owner":"View","id":"method-preRender","meta":{}},{"name":"render","tagname":"method","owner":"View","id":"method-render","meta":{"chainable":true}},{"name":"setImageUrl","tagname":"method","owner":"PhotoUploadOverlay","id":"method-setImageUrl","meta":{}},{"name":"show","tagname":"method","owner":"PhotoUploadOverlay","id":"method-show","meta":{}},{"name":"showSpinner","tagname":"method","owner":"Overlay","id":"method-showSpinner","meta":{}},{"name":"undelegate","tagname":"method","owner":"View","id":"method-undelegate","meta":{}},{"name":"undelegateEvents","tagname":"method","owner":"View","id":"method-undelegateEvents","meta":{}},{"name":"_file-upload","tagname":"event","owner":"PhotoUploadOverlay","id":"event-_file-upload","meta":{}},{"name":"hide","tagname":"event","owner":"Overlay","id":"event-hide","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-PhotoUploadOverlay","component":false,"superclasses":["Class","EventEmitter","View","Overlay"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Class' rel='Class' class='docClass'>Class</a><div class='subclass '><a href='#!/api/EventEmitter' rel='EventEmitter' class='docClass'>EventEmitter</a><div class='subclass '><a href='#!/api/View' rel='View' class='docClass'>View</a><div class='subclass '><a href='#!/api/Overlay' rel='Overlay' class='docClass'>Overlay</a><div class='subclass '><strong>PhotoUploadOverlay</strong></div></div></div></div></div><h4>Uses</h4><div class='dependency'><a href='#!/api/PhotoApi' rel='PhotoApi' class='docClass'>PhotoApi</a></div><h4>Files</h4><div class='dependency'><a href='source/PhotoUploadOverlay.html#PhotoUploadOverlay' target='_blank'>PhotoUploadOverlay.js</a></div></pre><div class='doc-contents'><p>Overlay for photo upload</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-defaults' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PhotoUploadOverlay'>PhotoUploadOverlay</span><br/><a href='source/PhotoUploadOverlay.html#PhotoUploadOverlay-cfg-defaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PhotoUploadOverlay-cfg-defaults' class='name expandable'>defaults</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Default options hash. ...</div><div class='long'><p>Default options hash.</p>\n<ul><li><span class='pre'>page</span> : <a href=\"#!/api/Page\" rel=\"Page\" class=\"docClass\">Page</a><div class='sub-desc'><p>the page being uploaded to</p>\n</div></li><li><span class='pre'>descriptionPlaceholder</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Placeholder text prompting user to add\na mandatory caption to an image.</p>\n</div></li><li><span class='pre'>help</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>A link that allows the user to open more information\nabout photo ownership.</p>\n</div></li><li><span class='pre'>ownerStatement</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>A statement saying the user created the image.</p>\n</div></li><li><span class='pre'>heading</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>A heading instructing the user to describe uploaded image.</p>\n</div></li><li><span class='pre'>headerButtonsListClassName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Class name of the wrapper of the\nheader buttons.</p>\n</div></li><li><span class='pre'>headerButtons</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>Objects that will be used as defaults to create\nheader buttons. Defaults to the 'submit' button.</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Overlay-cfg-defaults\" rel=\"Overlay-cfg-defaults\" class=\"docClass\">Overlay.defaults</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-String' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-property-String' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-property-String' class='name expandable'>String</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Name of tag that contains the rendered template</p>\n</div><div class='long'><p>Name of tag that contains the rendered template</p>\n</div></div></div><div id='property-appendTo' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Overlay' rel='Overlay' class='defined-in docClass'>Overlay</a><br/><a href='source/Overlay.html#Overlay-property-appendTo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Overlay-property-appendTo' class='name expandable'>appendTo</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|jQuery.Object<span class=\"signature\"></span></div><div class='description'><div class='short'>use '#mw-mf-viewport' rather than 'body' - for some reasons this has\nodd consequences on Opera Mobile (see bug 52361) ...</div><div class='long'><p>use '#mw-mf-viewport' rather than 'body' - for some reasons this has\nodd consequences on Opera Mobile (see bug 52361)</p>\n<p>Defaults to: <code>&#39;#mw-mf-viewport&#39;</code></p></div></div></div><div id='property-className' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Overlay' rel='Overlay' class='defined-in docClass'>Overlay</a><br/><a href='source/Overlay.html#Overlay-property-className' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Overlay-property-className' class='name expandable'>className</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Default class name ...</div><div class='long'><p>Default class name</p>\n<p>Defaults to: <code>&#39;overlay&#39;</code></p></div></div></div><div id='property-closeOnContentTap' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Overlay' rel='Overlay' class='defined-in docClass'>Overlay</a><br/><a href='source/Overlay.html#Overlay-property-closeOnContentTap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Overlay-property-closeOnContentTap' class='name expandable'>closeOnContentTap</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Flag overlay to close on content tap ...</div><div class='long'><p>Flag overlay to close on content tap</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-events' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-property-events' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-property-events' class='name expandable'>events</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Default events map</p>\n</div><div class='long'><p>Default events map</p>\n</div></div></div><div id='property-fullScreen' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Overlay' rel='Overlay' class='defined-in docClass'>Overlay</a><br/><a href='source/Overlay.html#Overlay-property-fullScreen' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Overlay-property-fullScreen' class='name expandable'>fullScreen</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Is overlay fullscreen ...</div><div class='long'><p>Is overlay fullscreen</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-hasFixedHeader' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Overlay' rel='Overlay' class='defined-in docClass'>Overlay</a><br/><a href='source/Overlay.html#Overlay-property-hasFixedHeader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Overlay-property-hasFixedHeader' class='name expandable'>hasFixedHeader</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Identify whether the element contains position fixed elements ...</div><div class='long'><p>Identify whether the element contains position fixed elements</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-template' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-property-template' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-property-template' class='name expandable'>template</a> : Mixed<span class=\"signature\"></span></div><div class='description'><div class='short'>Specifies the template used in render(). ...</div><div class='long'><p>Specifies the template used in render(). Object|String|HoganTemplate</p>\n</div></div></div><div id='property-templatePartials' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-property-templatePartials' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-property-templatePartials' class='name expandable'>templatePartials</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Specifies partials (sub-templates) for the main template. ...</div><div class='long'><p>Specifies partials (sub-templates) for the main template. Example:</p>\n\n<pre class='inline-example '><code>// example content for the \"some\" template (sub-template will be\n// inserted where {{&gt;content}} is):\n// &lt;h1&gt;Heading&lt;/h1&gt;\n// {{&gt;content}}\n\nvar SomeView = <a href=\"#!/api/View-method-extend\" rel=\"View-method-extend\" class=\"docClass\">View.extend</a>( {\ntemplate: M.template.get( 'some.hogan' ),\ntemplatePartials: { content: M.template.get( 'sub.hogan' ) }\n}\n</code></pre>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-S-' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-method-S-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-method-S-' class='name expandable'>$</a>( <span class='pre'>query</span> ) : jQuery.Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Wraps this.$el.find, so that you can search for elements in the view's\n($el's) scope. ...</div><div class='long'><p>Wraps this.$el.find, so that you can search for elements in the view's\n($el's) scope.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>A jQuery CSS selector.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>jQuery.Object</span><div class='sub-desc'><p>jQuery object containing results of the search.</p>\n</div></li></ul></div></div></div><div id='method-_fixIosHeader' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Overlay' rel='Overlay' class='defined-in docClass'>Overlay</a><br/><a href='source/Overlay.html#Overlay-method-_fixIosHeader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Overlay-method-_fixIosHeader' class='name expandable'>_fixIosHeader</a>( <span class='pre'>el</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Resize .overlay-content to occupy 100% of screen space when virtual\nkeyboard is shown/hidden on iOS. ...</div><div class='long'><p>Resize .overlay-content to occupy 100% of screen space when virtual\nkeyboard is shown/hidden on iOS.</p>\n\n<p>This function supplements the custom styles for Overlays on iOS.\nOn iOS we scroll the content inside of .overlay-content div instead\nof scrolling the whole page to achieve a consistent sticky header\neffect (position: fixed doesn't work on iOS when the virtual keyboard\nis open).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>CSS selector for elements that may trigger virtual\nkeyboard (usually inputs, textareas, contenteditables).</p>\n</div></li></ul></div></div></div><div id='method-_resizeContent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Overlay' rel='Overlay' class='defined-in docClass'>Overlay</a><br/><a href='source/Overlay.html#Overlay-method-_resizeContent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Overlay-method-_resizeContent' class='name expandable'>_resizeContent</a>( <span class='pre'>windowHeight</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Fit the overlay content height to the window taking overlay header and footer heights\ninto consideration. ...</div><div class='long'><p>Fit the overlay content height to the window taking overlay header and footer heights\ninto consideration.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>windowHeight</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The height of the window</p>\n</div></li></ul></div></div></div><div id='method-_save' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PhotoUploadOverlay'>PhotoUploadOverlay</span><br/><a href='source/PhotoUploadOverlay.html#PhotoUploadOverlay-method-_save' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PhotoUploadOverlay-method-_save' class='name expandable'>_save</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Performs a file upload based on current state of PhotoUploadOverlay\nWhen succeeds either reloads page or emits a glob...</div><div class='long'><p>Performs a file upload based on current state of PhotoUploadOverlay\nWhen succeeds either reloads page or emits a global event _file-upload\nIf error occurs shows a toast</p>\n</div></div></div><div id='method-_showHidden' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Overlay' rel='Overlay' class='defined-in docClass'>Overlay</a><br/><a href='source/Overlay.html#Overlay-method-_showHidden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Overlay-method-_showHidden' class='name expandable'>_showHidden</a>( <span class='pre'>className</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Show elements that are selected by the className. ...</div><div class='long'><p>Show elements that are selected by the className.\nAlso hide .hideable elements\nCan't use jQuery's hide() and show() because show() sets display: block.\nAnd we want display: table for headers.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>className</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>CSS selector to show</p>\n</div></li></ul></div></div></div><div id='method-_submit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PhotoUploadOverlay'>PhotoUploadOverlay</span><br/><a href='source/PhotoUploadOverlay.html#PhotoUploadOverlay-method-_submit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PhotoUploadOverlay-method-_submit' class='name expandable'>_submit</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Submits a photo for upload, reveals a progress bar and hides the overlay. ...</div><div class='long'><p>Submits a photo for upload, reveals a progress bar and hides the overlay.\nInvokes _save method.</p>\n</div></div></div><div id='method-clearSpinner' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Overlay' rel='Overlay' class='defined-in docClass'>Overlay</a><br/><a href='source/Overlay.html#Overlay-method-clearSpinner' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Overlay-method-clearSpinner' class='name expandable'>clearSpinner</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Hide the spinner near to the input field. ...</div><div class='long'><p>Hide the spinner near to the input field.</p>\n</div></div></div><div id='method-delegate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-method-delegate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-method-delegate' class='name expandable'>delegate</a>( <span class='pre'>eventName, selector, listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add a single event listener to the view's element (or a child element\nusing selector). ...</div><div class='long'><p>Add a single event listener to the view's element (or a child element\nusing <code>selector</code>). This only works for delegate-able events: not <code>focus</code>,\n<code>blur</code>, and not <code>change</code>, <code>submit</code>, and <code>reset</code> in Internet Explorer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>selector</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>listener</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-delegateEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-method-delegateEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-method-delegateEvents' class='name expandable'>delegateEvents</a>( <span class='pre'>events</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set callbacks, where this.events is a hash of\n\n{\"event selector\": \"callback\"}\n\n{\n'mousedown .title': 'edit',\n'click ....</div><div class='long'><p>Set callbacks, where <code>this.events</code> is a hash of</p>\n\n<p>{\"event selector\": \"callback\"}</p>\n\n<p>{\n'mousedown .title': 'edit',\n'click .button': 'save',\n'click .open': function(e) { ... }\n}</p>\n\n<p>pairs. Callbacks will be bound to the view, with <code>this</code> set properly.\nUses event delegation for efficiency.\nOmitting the selector binds the event to <code>this.el</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>events</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Optionally set this events instead of the ones on this.</p>\n</div></li></ul></div></div></div><div id='method-extend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/Class.html#Class-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-extend' class='name expandable'>extend</a>( <span class='pre'>prototype</span> ) : <a href=\"#!/api/Class\" rel=\"Class\" class=\"docClass\">Class</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Extends a class with new methods and member properties. ...</div><div class='long'><p>Extends a class with new methods and member properties.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prototype</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Prototype that should be incorporated into the new Class.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Class\" rel=\"Class\" class=\"docClass\">Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDescription' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PhotoUploadOverlay'>PhotoUploadOverlay</span><br/><a href='source/PhotoUploadOverlay.html#PhotoUploadOverlay-method-getDescription' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PhotoUploadOverlay-method-getDescription' class='name expandable'>getDescription</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the user inputted description ...</div><div class='long'><p>Gets the user inputted description</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>of current value of description according to view</p>\n</div></li></ul></div></div></div><div id='method-hide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PhotoUploadOverlay'>PhotoUploadOverlay</span><br/><a href='source/PhotoUploadOverlay.html#PhotoUploadOverlay-method-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PhotoUploadOverlay-method-hide' class='name expandable'>hide</a>( <span class='pre'>[force]</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Detach the overlay from the current view ...</div><div class='long'><p>Detach the overlay from the current view</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>force</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'><p>Whether the overlay should be closed regardless of\nstate (see PhotoUploadProgress)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>Whether the overlay was successfully hidden or not</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Overlay-method-hide\" rel=\"Overlay-method-hide\" class=\"docClass\">Overlay.hide</a></p></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PhotoUploadOverlay'>PhotoUploadOverlay</span><br/><a href='source/PhotoUploadOverlay.html#PhotoUploadOverlay-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PhotoUploadOverlay-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Run once during construction to set up the View ...</div><div class='long'><p>Run once during construction to set up the View</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/Overlay-method-initialize\" rel=\"Overlay-method-initialize\" class=\"docClass\">Overlay.initialize</a></p></div></div></div><div id='method-postRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PhotoUploadOverlay'>PhotoUploadOverlay</span><br/><a href='source/PhotoUploadOverlay.html#PhotoUploadOverlay-method-postRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PhotoUploadOverlay-method-postRender' class='name expandable'>postRender</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Function called after the view is rendered. ...</div><div class='long'><p>Function called after the view is rendered. Can be redefined in\nobjects that extend View.</p>\n<p>Overrides: <a href=\"#!/api/Overlay-method-postRender\" rel=\"Overlay-method-postRender\" class=\"docClass\">Overlay.postRender</a></p></div></div></div><div id='method-preRender' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-method-preRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-method-preRender' class='name expandable'>preRender</a>( <span class='pre'>options</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Function called before the view is rendered. ...</div><div class='long'><p>Function called before the view is rendered. Can be redefined in\nobjects that extend View.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Object passed to the constructor.</p>\n\n</div></li></ul></div></div></div><div id='method-render' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-method-render' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-method-render' class='name expandable'>render</a>( <span class='pre'>data</span> ) : <a href=\"#!/api/View\" rel=\"View\" class=\"docClass\">View</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Fill this.$el with template rendered using data if template is set. ...</div><div class='long'><p>Fill this.$el with template rendered using data if template is set.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Template data.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/View\" rel=\"View\" class=\"docClass\">View</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setImageUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PhotoUploadOverlay'>PhotoUploadOverlay</span><br/><a href='source/PhotoUploadOverlay.html#PhotoUploadOverlay-method-setImageUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PhotoUploadOverlay-method-setImageUrl' class='name expandable'>setImageUrl</a>( <span class='pre'>url</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the url of the image in the preview. ...</div><div class='long'><p>Set the url of the image in the preview.\nThrows toast if for some reason image cannot render e.g. bad file type.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>usually a data uri</p>\n</div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PhotoUploadOverlay'>PhotoUploadOverlay</span><br/><a href='source/PhotoUploadOverlay.html#PhotoUploadOverlay-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PhotoUploadOverlay-method-show' class='name expandable'>show</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Attach overlay to current view and show it. ...</div><div class='long'><p>Attach overlay to current view and show it.</p>\n<p>Overrides: <a href=\"#!/api/Overlay-method-show\" rel=\"Overlay-method-show\" class=\"docClass\">Overlay.show</a></p></div></div></div><div id='method-showSpinner' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Overlay' rel='Overlay' class='defined-in docClass'>Overlay</a><br/><a href='source/Overlay.html#Overlay-method-showSpinner' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Overlay-method-showSpinner' class='name expandable'>showSpinner</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Shows the spinner right to the input field. ...</div><div class='long'><p>Shows the spinner right to the input field.</p>\n</div></div></div><div id='method-undelegate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-method-undelegate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-method-undelegate' class='name expandable'>undelegate</a>( <span class='pre'>eventName, selector, listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>A finer-grained undelegateEvents for removing a single delegated event. ...</div><div class='long'><p>A finer-grained <code>undelegateEvents</code> for removing a single delegated event.\n<code>selector</code> and <code>listener</code> are both optional.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>selector</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>listener</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-undelegateEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-method-undelegateEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-method-undelegateEvents' class='name expandable'>undelegateEvents</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Clears all callbacks previously bound to the view by delegateEvents. ...</div><div class='long'><p>Clears all callbacks previously bound to the view by <code>delegateEvents</code>.\nYou usually don't need to use this, but may wish to if you have multiple\nviews attached to the same DOM element.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-_file-upload' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PhotoUploadOverlay'>PhotoUploadOverlay</span><br/><a href='source/PhotoUploadOverlay.html#PhotoUploadOverlay-event-_file-upload' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PhotoUploadOverlay-event-_file-upload' class='name expandable'>_file-upload</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Emits global event _file-upload. ...</div><div class='long'><p>Emits global event _file-upload.\nFIXME: handle Special:Uploads case - find more generic way of doing this</p>\n</div></div></div><div id='event-hide' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Overlay' rel='Overlay' class='defined-in docClass'>Overlay</a><br/><a href='source/Overlay.html#Overlay-event-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Overlay-event-hide' class='name expandable'>hide</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the overlay is closed. ...</div><div class='long'><p>Fired when the overlay is closed.</p>\n</div></div></div></div></div></div></div>","meta":{}});