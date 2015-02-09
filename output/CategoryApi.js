Ext.data.JsonP.CategoryApi({"tagname":"class","name":"CategoryApi","autodetected":{},"files":[{"filename":"CategoryApi.js","href":"CategoryApi.html#CategoryApi"}],"extends":"SearchApi","members":[{"name":"apiUrl","tagname":"property","owner":"Api","id":"property-apiUrl","meta":{}},{"name":"searchNamespace","tagname":"property","owner":"CategoryApi","id":"property-searchNamespace","meta":{}},{"name":"abort","tagname":"method","owner":"Api","id":"method-abort","meta":{}},{"name":"ajax","tagname":"method","owner":"Api","id":"method-ajax","meta":{}},{"name":"extend","tagname":"method","owner":"Class","id":"method-extend","meta":{}},{"name":"getApiData","tagname":"method","owner":"CategoryApi","id":"method-getApiData","meta":{}},{"name":"getCategories","tagname":"method","owner":"CategoryApi","id":"method-getCategories","meta":{}},{"name":"getOrigin","tagname":"method","owner":"Api","id":"method-getOrigin","meta":{}},{"name":"highlightSearchTerm","tagname":"method","owner":"SearchApi","id":"method-highlightSearchTerm","meta":{"private":true}},{"name":"initialize","tagname":"method","owner":"SearchApi","id":"method-initialize","meta":{}},{"name":"isCached","tagname":"method","owner":"SearchApi","id":"method-isCached","meta":{}},{"name":"save","tagname":"method","owner":"CategoryApi","id":"method-save","meta":{}},{"name":"search","tagname":"method","owner":"SearchApi","id":"method-search","meta":{}},{"name":"progress","tagname":"event","owner":"Api","id":"event-progress","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-CategoryApi","component":false,"superclasses":["Class","EventEmitter","Api","SearchApi"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Class' rel='Class' class='docClass'>Class</a><div class='subclass '><a href='#!/api/EventEmitter' rel='EventEmitter' class='docClass'>EventEmitter</a><div class='subclass '><a href='#!/api/Api' rel='Api' class='docClass'>Api</a><div class='subclass '><a href='#!/api/SearchApi' rel='SearchApi' class='docClass'>SearchApi</a><div class='subclass '><strong>CategoryApi</strong></div></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/CategoryApi.html#CategoryApi' target='_blank'>CategoryApi.js</a></div></pre><div class='doc-contents'><p>Api for CategoryOverlay</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-apiUrl' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Api' rel='Api' class='defined-in docClass'>Api</a><br/><a href='source/api.html#Api-property-apiUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Api-property-apiUrl' class='name expandable'>apiUrl</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>URL to the api endpoint (api.php)</p>\n</div><div class='long'><p>URL to the api endpoint (api.php)</p>\n</div></div></div><div id='property-searchNamespace' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CategoryApi'>CategoryApi</span><br/><a href='source/CategoryApi.html#CategoryApi-property-searchNamespace' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CategoryApi-property-searchNamespace' class='name expandable'>searchNamespace</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>The namespace to search in. ...</div><div class='long'><p>The namespace to search in.</p>\n<p>Defaults to: <code>14</code></p><p>Overrides: <a href=\"#!/api/SearchApi-property-searchNamespace\" rel=\"SearchApi-property-searchNamespace\" class=\"docClass\">SearchApi.searchNamespace</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-abort' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Api' rel='Api' class='defined-in docClass'>Api</a><br/><a href='source/api.html#Api-method-abort' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Api-method-abort' class='name expandable'>abort</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Abort all unfinished requests issued by this Api object. ...</div><div class='long'><p>Abort all unfinished requests issued by this Api object.\nFIXME: move to mw.Api</p>\n</div></div></div><div id='method-ajax' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Api' rel='Api' class='defined-in docClass'>Api</a><br/><a href='source/api.html#Api-method-ajax' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Api-method-ajax' class='name expandable'>ajax</a>( <span class='pre'>data, options</span> ) : jQuery.Deferred<span class=\"signature\"></span></div><div class='description'><div class='short'>A wrapper for $.ajax() to be used when calling server APIs. ...</div><div class='long'><p>A wrapper for $.ajax() to be used when calling server APIs.\nSets URL to API URL and default data type to JSON.\nPreprocesses data argument in the following way:\n- removes boolean values equal to false\n- concatenates Array values with '|'</p>\n\n<pre class='inline-example '><code>&lt;code&gt;\najax( { a: false, b: [1, 2, 3] }, { type: 'post' } );\n// is equal to\n$.ajax( {\n    type: 'post',\n    data: { b: '1|2|3' }\n} );\n&lt;/code&gt;\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Data to be preprocessed and added to options</p>\n</div></li><li><span class='pre'>options</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Parameters passed to $.ajax()</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>jQuery.Deferred</span><div class='sub-desc'><p>Object returned by $.ajax()</p>\n</div></li></ul></div></div></div><div id='method-extend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/Class.html#Class-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-extend' class='name expandable'>extend</a>( <span class='pre'>prototype</span> ) : <a href=\"#!/api/Class\" rel=\"Class\" class=\"docClass\">Class</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Extends a class with new methods and member properties. ...</div><div class='long'><p>Extends a class with new methods and member properties.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prototype</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Prototype that should be incorporated into the new Class.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Class\" rel=\"Class\" class=\"docClass\">Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getApiData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CategoryApi'>CategoryApi</span><br/><a href='source/CategoryApi.html#CategoryApi-method-getApiData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CategoryApi-method-getApiData' class='name expandable'>getApiData</a>( <span class='pre'>query</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Get the data used to do the search query api call. ...</div><div class='long'><p>Get the data used to do the search query api call.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>to search for</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/SearchApi-method-getApiData\" rel=\"SearchApi-method-getApiData\" class=\"docClass\">SearchApi.getApiData</a></p></div></div></div><div id='method-getCategories' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CategoryApi'>CategoryApi</span><br/><a href='source/CategoryApi.html#CategoryApi-method-getCategories' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CategoryApi-method-getCategories' class='name expandable'>getCategories</a>( <span class='pre'>title</span> ) : jQuery.Deferred<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the categories the title belongs to. ...</div><div class='long'><p>Returns the categories the title belongs to.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Title of the current page (to add the categories to)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>jQuery.Deferred</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOrigin' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Api' rel='Api' class='defined-in docClass'>Api</a><br/><a href='source/api.html#Api-method-getOrigin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Api-method-getOrigin' class='name expandable'>getOrigin</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the current URL including protocol ...</div><div class='long'><p>Returns the current URL including protocol</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-highlightSearchTerm' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/SearchApi' rel='SearchApi' class='defined-in docClass'>SearchApi</a><br/><a href='source/SearchApi.html#SearchApi-method-highlightSearchTerm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SearchApi-method-highlightSearchTerm' class='name expandable'>highlightSearchTerm</a>( <span class='pre'>label, term</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Takes a label potentially beginning with term\nand highlights term if it is present with strong ...</div><div class='long'><p>Takes a label potentially beginning with term\nand highlights term if it is present with strong</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>label</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>a piece of text</p>\n</div></li><li><span class='pre'>term</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>a string to search for from the start</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>safe html string with matched terms encapsulated in strong tags</p>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/SearchApi' rel='SearchApi' class='defined-in docClass'>SearchApi</a><br/><a href='source/SearchApi.html#SearchApi-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SearchApi-method-initialize' class='name expandable'>initialize</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor, if you override it, use _super(). ...</div><div class='long'><p>Constructor, if you override it, use _super().</p>\n<p>Overrides: <a href=\"#!/api/Api-method-initialize\" rel=\"Api-method-initialize\" class=\"docClass\">Api.initialize</a></p></div></div></div><div id='method-isCached' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/SearchApi' rel='SearchApi' class='defined-in docClass'>SearchApi</a><br/><a href='source/SearchApi.html#SearchApi-method-isCached' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SearchApi-method-isCached' class='name expandable'>isCached</a>( <span class='pre'>query</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Check if the search has already been performed in given session. ...</div><div class='long'><p>Check if the search has already been performed in given session.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-save' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CategoryApi'>CategoryApi</span><br/><a href='source/CategoryApi.html#CategoryApi-method-save' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CategoryApi-method-save' class='name expandable'>save</a>( <span class='pre'>title, categories</span> ) : jQuery.Deferred<span class=\"signature\"></span></div><div class='description'><div class='short'>Saves the categories passed to this function to the page ...</div><div class='long'><p>Saves the categories passed to this function to the page</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Title of the current page (to add the categories to)</p>\n</div></li><li><span class='pre'>categories</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>List of Categories to add</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>jQuery.Deferred</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-search' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/SearchApi' rel='SearchApi' class='defined-in docClass'>SearchApi</a><br/><a href='source/SearchApi.html#SearchApi-method-search' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SearchApi-method-search' class='name expandable'>search</a>( <span class='pre'>query</span> ) : jQuery.Deferred<span class=\"signature\"></span></div><div class='description'><div class='short'>Perform a search for the given query. ...</div><div class='long'><p>Perform a search for the given query.\nFIXME: remove filtering of redirects once the upstream bug has been fixed:\nhttps://bugzilla.wikimedia.org/show_bug.cgi?id=73673</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>to search for</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>jQuery.Deferred</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-progress' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Api' rel='Api' class='defined-in docClass'>Api</a><br/><a href='source/api.html#Api-event-progress' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Api-event-progress' class='name expandable'>progress</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when a pending XHR request fires a progress event. ...</div><div class='long'><p>Fired when a pending XHR request fires a progress event.</p>\n</div></div></div></div></div></div></div>","meta":{}});