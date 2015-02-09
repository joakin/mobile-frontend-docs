Ext.data.JsonP.Panel({"tagname":"class","name":"Panel","autodetected":{},"files":[{"filename":"Panel.js","href":"Panel.html#Panel"}],"extends":"View","members":[{"name":"defaults","tagname":"cfg","owner":"View","id":"cfg-defaults","meta":{}},{"name":"String","tagname":"property","owner":"View","id":"property-String","meta":{}},{"name":"events","tagname":"property","owner":"View","id":"property-events","meta":{}},{"name":"template","tagname":"property","owner":"View","id":"property-template","meta":{}},{"name":"templatePartials","tagname":"property","owner":"View","id":"property-templatePartials","meta":{}},{"name":"$","tagname":"method","owner":"View","id":"method-S-","meta":{}},{"name":"delegate","tagname":"method","owner":"View","id":"method-delegate","meta":{}},{"name":"delegateEvents","tagname":"method","owner":"View","id":"method-delegateEvents","meta":{}},{"name":"extend","tagname":"method","owner":"Class","id":"method-extend","meta":{}},{"name":"hide","tagname":"method","owner":"Panel","id":"method-hide","meta":{}},{"name":"initialize","tagname":"method","owner":"View","id":"method-initialize","meta":{}},{"name":"isVisible","tagname":"method","owner":"Panel","id":"method-isVisible","meta":{}},{"name":"postRender","tagname":"method","owner":"Panel","id":"method-postRender","meta":{}},{"name":"preRender","tagname":"method","owner":"View","id":"method-preRender","meta":{}},{"name":"render","tagname":"method","owner":"View","id":"method-render","meta":{"chainable":true}},{"name":"show","tagname":"method","owner":"Panel","id":"method-show","meta":{}},{"name":"toggle","tagname":"method","owner":"Panel","id":"method-toggle","meta":{}},{"name":"undelegate","tagname":"method","owner":"View","id":"method-undelegate","meta":{}},{"name":"undelegateEvents","tagname":"method","owner":"View","id":"method-undelegateEvents","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Panel","component":false,"superclasses":["Class","EventEmitter","View"],"subclasses":["Drawer","WikiGrokDialog"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Class' rel='Class' class='docClass'>Class</a><div class='subclass '><a href='#!/api/EventEmitter' rel='EventEmitter' class='docClass'>EventEmitter</a><div class='subclass '><a href='#!/api/View' rel='View' class='docClass'>View</a><div class='subclass '><strong>Panel</strong></div></div></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Drawer' rel='Drawer' class='docClass'>Drawer</a></div><div class='dependency'><a href='#!/api/WikiGrokDialog' rel='WikiGrokDialog' class='docClass'>WikiGrokDialog</a></div><h4>Files</h4><div class='dependency'><a href='source/Panel.html#Panel' target='_blank'>Panel.js</a></div></pre><div class='doc-contents'><p>An abstract class for a <a href=\"#!/api/View\" rel=\"View\" class=\"docClass\">View</a> that comprises a simple panel.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-defaults' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-cfg-defaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-cfg-defaults' class='name expandable'>defaults</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>A set of default options that are merged with options passed into the initialize function.Default options hash. ...</div><div class='long'><p>A set of default options that are merged with options passed into the initialize function.Default options hash.</p>\n<p>Defaults to: <code>{}</code></p><ul><li><span class='pre'>el</span> : jQuery.Object|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>jQuery selector to use for rendering.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-String' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-property-String' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-property-String' class='name expandable'>String</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Name of tag that contains the rendered template</p>\n</div><div class='long'><p>Name of tag that contains the rendered template</p>\n</div></div></div><div id='property-events' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-property-events' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-property-events' class='name expandable'>events</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Default events map</p>\n</div><div class='long'><p>Default events map</p>\n</div></div></div><div id='property-template' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-property-template' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-property-template' class='name expandable'>template</a> : Mixed<span class=\"signature\"></span></div><div class='description'><div class='short'>Specifies the template used in render(). ...</div><div class='long'><p>Specifies the template used in render(). Object|String|HoganTemplate</p>\n</div></div></div><div id='property-templatePartials' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-property-templatePartials' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-property-templatePartials' class='name expandable'>templatePartials</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Specifies partials (sub-templates) for the main template. ...</div><div class='long'><p>Specifies partials (sub-templates) for the main template. Example:</p>\n\n<pre class='inline-example '><code>// example content for the \"some\" template (sub-template will be\n// inserted where {{&gt;content}} is):\n// &lt;h1&gt;Heading&lt;/h1&gt;\n// {{&gt;content}}\n\nvar SomeView = <a href=\"#!/api/View-method-extend\" rel=\"View-method-extend\" class=\"docClass\">View.extend</a>( {\ntemplate: M.template.get( 'some.hogan' ),\ntemplatePartials: { content: M.template.get( 'sub.hogan' ) }\n}\n</code></pre>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-S-' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-method-S-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-method-S-' class='name expandable'>$</a>( <span class='pre'>query</span> ) : jQuery.Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Wraps this.$el.find, so that you can search for elements in the view's\n($el's) scope. ...</div><div class='long'><p>Wraps this.$el.find, so that you can search for elements in the view's\n($el's) scope.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>A jQuery CSS selector.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>jQuery.Object</span><div class='sub-desc'><p>jQuery object containing results of the search.</p>\n</div></li></ul></div></div></div><div id='method-delegate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-method-delegate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-method-delegate' class='name expandable'>delegate</a>( <span class='pre'>eventName, selector, listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add a single event listener to the view's element (or a child element\nusing selector). ...</div><div class='long'><p>Add a single event listener to the view's element (or a child element\nusing <code>selector</code>). This only works for delegate-able events: not <code>focus</code>,\n<code>blur</code>, and not <code>change</code>, <code>submit</code>, and <code>reset</code> in Internet Explorer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>selector</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>listener</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-delegateEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-method-delegateEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-method-delegateEvents' class='name expandable'>delegateEvents</a>( <span class='pre'>events</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set callbacks, where this.events is a hash of\n\n{\"event selector\": \"callback\"}\n\n{\n'mousedown .title': 'edit',\n'click ....</div><div class='long'><p>Set callbacks, where <code>this.events</code> is a hash of</p>\n\n<p>{\"event selector\": \"callback\"}</p>\n\n<p>{\n'mousedown .title': 'edit',\n'click .button': 'save',\n'click .open': function(e) { ... }\n}</p>\n\n<p>pairs. Callbacks will be bound to the view, with <code>this</code> set properly.\nUses event delegation for efficiency.\nOmitting the selector binds the event to <code>this.el</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>events</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Optionally set this events instead of the ones on this.</p>\n</div></li></ul></div></div></div><div id='method-extend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/Class.html#Class-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-extend' class='name expandable'>extend</a>( <span class='pre'>prototype</span> ) : <a href=\"#!/api/Class\" rel=\"Class\" class=\"docClass\">Class</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Extends a class with new methods and member properties. ...</div><div class='long'><p>Extends a class with new methods and member properties.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prototype</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Prototype that should be incorporated into the new Class.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Class\" rel=\"Class\" class=\"docClass\">Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Panel'>Panel</span><br/><a href='source/Panel.html#Panel-method-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Panel-method-hide' class='name expandable'>hide</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Hides panel ...</div><div class='long'><p>Hides panel</p>\n</div></div></div><div id='method-initialize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Run once during construction to set up the View ...</div><div class='long'><p>Run once during construction to set up the View</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Object passed to the constructor.</p>\n\n\n\n</div></li></ul><p>Overrides: <a href=\"#!/api/Class-method-initialize\" rel=\"Class-method-initialize\" class=\"docClass\">Class.initialize</a></p></div></div></div><div id='method-isVisible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Panel'>Panel</span><br/><a href='source/Panel.html#Panel-method-isVisible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Panel-method-isVisible' class='name expandable'>isVisible</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Determines if panel is visible ...</div><div class='long'><p>Determines if panel is visible</p>\n</div></div></div><div id='method-postRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Panel'>Panel</span><br/><a href='source/Panel.html#Panel-method-postRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Panel-method-postRender' class='name expandable'>postRender</a>( <span class='pre'>options</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Function called after the view is rendered. ...</div><div class='long'><p>Function called after the view is rendered. Can be redefined in\nobjects that extend View.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Object passed to the constructor.</p>\n\n\n\n</div></li></ul><p>Overrides: <a href=\"#!/api/View-method-postRender\" rel=\"View-method-postRender\" class=\"docClass\">View.postRender</a></p></div></div></div><div id='method-preRender' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-method-preRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-method-preRender' class='name expandable'>preRender</a>( <span class='pre'>options</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Function called before the view is rendered. ...</div><div class='long'><p>Function called before the view is rendered. Can be redefined in\nobjects that extend View.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Object passed to the constructor.</p>\n\n</div></li></ul></div></div></div><div id='method-render' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-method-render' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-method-render' class='name expandable'>render</a>( <span class='pre'>data</span> ) : <a href=\"#!/api/View\" rel=\"View\" class=\"docClass\">View</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Fill this.$el with template rendered using data if template is set. ...</div><div class='long'><p>Fill this.$el with template rendered using data if template is set.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Template data.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/View\" rel=\"View\" class=\"docClass\">View</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Panel'>Panel</span><br/><a href='source/Panel.html#Panel-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Panel-method-show' class='name expandable'>show</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Shows panel after a slight delay ...</div><div class='long'><p>Shows panel after a slight delay</p>\n</div></div></div><div id='method-toggle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Panel'>Panel</span><br/><a href='source/Panel.html#Panel-method-toggle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Panel-method-toggle' class='name expandable'>toggle</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Shows or hides panel ...</div><div class='long'><p>Shows or hides panel</p>\n</div></div></div><div id='method-undelegate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-method-undelegate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-method-undelegate' class='name expandable'>undelegate</a>( <span class='pre'>eventName, selector, listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>A finer-grained undelegateEvents for removing a single delegated event. ...</div><div class='long'><p>A finer-grained <code>undelegateEvents</code> for removing a single delegated event.\n<code>selector</code> and <code>listener</code> are both optional.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>selector</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>listener</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-undelegateEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/View' rel='View' class='defined-in docClass'>View</a><br/><a href='source/View.html#View-method-undelegateEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/View-method-undelegateEvents' class='name expandable'>undelegateEvents</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Clears all callbacks previously bound to the view by delegateEvents. ...</div><div class='long'><p>Clears all callbacks previously bound to the view by <code>delegateEvents</code>.\nYou usually don't need to use this, but may wish to if you have multiple\nviews attached to the same DOM element.</p>\n</div></div></div></div></div></div></div>","meta":{}});