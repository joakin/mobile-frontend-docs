Ext.data.JsonP.PageApi({"tagname":"class","name":"PageApi","autodetected":{},"files":[{"filename":"PageApi.js","href":"PageApi.html#PageApi"}],"extends":"Api","members":[{"name":"apiUrl","tagname":"property","owner":"Api","id":"property-apiUrl","meta":{}},{"name":"_getAPIResponseFromHTML","tagname":"method","owner":"PageApi","id":"method-_getAPIResponseFromHTML","meta":{"private":true}},{"name":"_getLanguageVariantsFromApiResponse","tagname":"method","owner":"PageApi","id":"method-_getLanguageVariantsFromApiResponse","meta":{"private":true}},{"name":"_getLanguagesFromApiResponse","tagname":"method","owner":"PageApi","id":"method-_getLanguagesFromApiResponse","meta":{"private":true}},{"name":"abort","tagname":"method","owner":"Api","id":"method-abort","meta":{}},{"name":"ajax","tagname":"method","owner":"Api","id":"method-ajax","meta":{}},{"name":"extend","tagname":"method","owner":"Class","id":"method-extend","meta":{}},{"name":"getOrigin","tagname":"method","owner":"Api","id":"method-getOrigin","meta":{}},{"name":"getPage","tagname":"method","owner":"PageApi","id":"method-getPage","meta":{}},{"name":"getPageLanguages","tagname":"method","owner":"PageApi","id":"method-getPageLanguages","meta":{}},{"name":"getSectionsFromHTML","tagname":"method","owner":"PageApi","id":"method-getSectionsFromHTML","meta":{}},{"name":"initialize","tagname":"method","owner":"PageApi","id":"method-initialize","meta":{}},{"name":"invalidatePage","tagname":"method","owner":"PageApi","id":"method-invalidatePage","meta":{}},{"name":"progress","tagname":"event","owner":"Api","id":"event-progress","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-PageApi","component":false,"superclasses":["Class","EventEmitter","Api"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Class' rel='Class' class='docClass'>Class</a><div class='subclass '><a href='#!/api/EventEmitter' rel='EventEmitter' class='docClass'>EventEmitter</a><div class='subclass '><a href='#!/api/Api' rel='Api' class='docClass'>Api</a><div class='subclass '><strong>PageApi</strong></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/PageApi.html#PageApi' target='_blank'>PageApi.js</a></div></pre><div class='doc-contents'><p>API for providing Page data</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-apiUrl' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Api' rel='Api' class='defined-in docClass'>Api</a><br/><a href='source/api.html#Api-property-apiUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Api-property-apiUrl' class='name expandable'>apiUrl</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>URL to the api endpoint (api.php)</p>\n</div><div class='long'><p>URL to the api endpoint (api.php)</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_getAPIResponseFromHTML' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PageApi'>PageApi</span><br/><a href='source/PageApi.html#PageApi-method-_getAPIResponseFromHTML' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PageApi-method-_getAPIResponseFromHTML' class='name expandable'>_getAPIResponseFromHTML</a>( <span class='pre'>$el</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Extract sections from headings in $el ...</div><div class='long'><p>Extract sections from headings in $el</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$el</span> : jQuery.Object<div class='sub-desc'><p>object from which sections are extracted</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>Array of section objects created from headings in $el\nFIXME: Where's a better place for these two functions to live?</p>\n</div></li></ul></div></div></div><div id='method-_getLanguageVariantsFromApiResponse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PageApi'>PageApi</span><br/><a href='source/PageApi.html#PageApi-method-_getLanguageVariantsFromApiResponse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PageApi-method-_getLanguageVariantsFromApiResponse' class='name expandable'>_getLanguageVariantsFromApiResponse</a>( <span class='pre'>title, data</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>|<a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Gets language variant list for a page; helper function for getPageLanguages() ...</div><div class='long'><p>Gets language variant list for a page; helper function for getPageLanguages()</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Name of the page to obtain variants for</p>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Data from API</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>|<a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>List of language variant objects or false if no variants exist</p>\n</div></li></ul></div></div></div><div id='method-_getLanguagesFromApiResponse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PageApi'>PageApi</span><br/><a href='source/PageApi.html#PageApi-method-_getLanguagesFromApiResponse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PageApi-method-_getLanguagesFromApiResponse' class='name expandable'>_getLanguagesFromApiResponse</a>( <span class='pre'>data</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Gets language list for a page; helper function for getPageLanguages() ...</div><div class='long'><p>Gets language list for a page; helper function for getPageLanguages()</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Data from API</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>List of language objects</p>\n</div></li></ul></div></div></div><div id='method-abort' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Api' rel='Api' class='defined-in docClass'>Api</a><br/><a href='source/api.html#Api-method-abort' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Api-method-abort' class='name expandable'>abort</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Abort all unfinished requests issued by this Api object. ...</div><div class='long'><p>Abort all unfinished requests issued by this Api object.\nFIXME: move to mw.Api</p>\n</div></div></div><div id='method-ajax' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Api' rel='Api' class='defined-in docClass'>Api</a><br/><a href='source/api.html#Api-method-ajax' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Api-method-ajax' class='name expandable'>ajax</a>( <span class='pre'>data, options</span> ) : jQuery.Deferred<span class=\"signature\"></span></div><div class='description'><div class='short'>A wrapper for $.ajax() to be used when calling server APIs. ...</div><div class='long'><p>A wrapper for $.ajax() to be used when calling server APIs.\nSets URL to API URL and default data type to JSON.\nPreprocesses data argument in the following way:\n- removes boolean values equal to false\n- concatenates Array values with '|'</p>\n\n<pre class='inline-example '><code>&lt;code&gt;\najax( { a: false, b: [1, 2, 3] }, { type: 'post' } );\n// is equal to\n$.ajax( {\n    type: 'post',\n    data: { b: '1|2|3' }\n} );\n&lt;/code&gt;\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Data to be preprocessed and added to options</p>\n</div></li><li><span class='pre'>options</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Parameters passed to $.ajax()</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>jQuery.Deferred</span><div class='sub-desc'><p>Object returned by $.ajax()</p>\n</div></li></ul></div></div></div><div id='method-extend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/Class.html#Class-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-extend' class='name expandable'>extend</a>( <span class='pre'>prototype</span> ) : <a href=\"#!/api/Class\" rel=\"Class\" class=\"docClass\">Class</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Extends a class with new methods and member properties. ...</div><div class='long'><p>Extends a class with new methods and member properties.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prototype</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Prototype that should be incorporated into the new Class.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Class\" rel=\"Class\" class=\"docClass\">Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOrigin' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Api' rel='Api' class='defined-in docClass'>Api</a><br/><a href='source/api.html#Api-method-getOrigin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Api-method-getOrigin' class='name expandable'>getOrigin</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the current URL including protocol ...</div><div class='long'><p>Returns the current URL including protocol</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PageApi'>PageApi</span><br/><a href='source/PageApi.html#PageApi-method-getPage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PageApi-method-getPage' class='name expandable'>getPage</a>( <span class='pre'>title, endpoint, leadOnly</span> ) : jQuery.Deferred<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieve a page from the api ...</div><div class='long'><p>Retrieve a page from the api</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>the title of the page to be retrieved</p>\n</div></li><li><span class='pre'>endpoint</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>an alternative api url to retrieve the page from</p>\n</div></li><li><span class='pre'>leadOnly</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>When set only the lead section content is returned</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>jQuery.Deferred</span><div class='sub-desc'><p>with parameter page data that can be passed to a Page view</p>\n</div></li></ul></div></div></div><div id='method-getPageLanguages' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PageApi'>PageApi</span><br/><a href='source/PageApi.html#PageApi-method-getPageLanguages' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PageApi-method-getPageLanguages' class='name expandable'>getPageLanguages</a>( <span class='pre'>title</span> ) : jQuery.Deferred<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieve available languages for a given title ...</div><div class='long'><p>Retrieve available languages for a given title</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>the title of the page languages should be retrieved for</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>jQuery.Deferred</span><div class='sub-desc'><p>which is called with an object containing langlinks\nand variant links</p>\n</div></li></ul></div></div></div><div id='method-getSectionsFromHTML' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PageApi'>PageApi</span><br/><a href='source/PageApi.html#PageApi-method-getSectionsFromHTML' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PageApi-method-getSectionsFromHTML' class='name expandable'>getSectionsFromHTML</a>( <span class='pre'>$el</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Order sections hierarchically ...</div><div class='long'><p>Order sections hierarchically</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$el</span> : jQuery.Object<div class='sub-desc'><p>object from which sections are extracted</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>Ordered array of sections</p>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PageApi'>PageApi</span><br/><a href='source/PageApi.html#PageApi-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PageApi-method-initialize' class='name expandable'>initialize</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor, if you override it, use _super(). ...</div><div class='long'><p>Constructor, if you override it, use _super().</p>\n<p>Overrides: <a href=\"#!/api/Api-method-initialize\" rel=\"Api-method-initialize\" class=\"docClass\">Api.initialize</a></p></div></div></div><div id='method-invalidatePage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PageApi'>PageApi</span><br/><a href='source/PageApi.html#PageApi-method-invalidatePage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PageApi-method-invalidatePage' class='name expandable'>invalidatePage</a>( <span class='pre'>title</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Invalidate the internal cache for a given page ...</div><div class='long'><p>Invalidate the internal cache for a given page</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>the title of the page who's cache you want to invalidate</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-progress' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Api' rel='Api' class='defined-in docClass'>Api</a><br/><a href='source/api.html#Api-event-progress' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Api-event-progress' class='name expandable'>progress</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when a pending XHR request fires a progress event. ...</div><div class='long'><p>Fired when a pending XHR request fires a progress event.</p>\n</div></div></div></div></div></div></div>","meta":{}});