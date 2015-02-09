Ext.data.JsonP.wikiGrokCampaigns({"tagname":"class","name":"wikiGrokCampaigns","autodetected":{},"files":[{"filename":"wikiGrokCampaigns.js","href":"wikiGrokCampaigns.html#wikiGrokCampaigns"}],"singleton":true,"members":[{"name":"getAllSuggestions","tagname":"method","owner":"wikiGrokCampaigns","id":"method-getAllSuggestions","meta":{}},{"name":"getCampaignQuestions","tagname":"method","owner":"wikiGrokCampaigns","id":"method-getCampaignQuestions","meta":{}},{"name":"getRandomCampaign","tagname":"method","owner":"wikiGrokCampaigns","id":"method-getRandomCampaign","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-wikiGrokCampaigns","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/wikiGrokCampaigns.html#wikiGrokCampaigns' target='_blank'>wikiGrokCampaigns.js</a></div></pre><div class='doc-contents'><p>Gets campaigns, claims, and labels from mw.config</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getAllSuggestions' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='wikiGrokCampaigns'>wikiGrokCampaigns</span><br/><a href='source/wikiGrokCampaigns.html#wikiGrokCampaigns-method-getAllSuggestions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/wikiGrokCampaigns-method-getAllSuggestions' class='name expandable'>getAllSuggestions</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Return suggestions (questions) from all available campaigns ...</div><div class='long'><p>Return suggestions (questions) from all available campaigns</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>suggestion objects with id, label, and campaign properties</p>\n</div></li></ul></div></div></div><div id='method-getCampaignQuestions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='wikiGrokCampaigns'>wikiGrokCampaigns</span><br/><a href='source/wikiGrokCampaigns.html#wikiGrokCampaigns-method-getCampaignQuestions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/wikiGrokCampaigns-method-getCampaignQuestions' class='name expandable'>getCampaignQuestions</a>( <span class='pre'>campaign</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Return campaign questions in the desirable format ...</div><div class='long'><p>Return campaign questions in the desirable format</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>campaign</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>question objects with id, label, and campaign properties</p>\n</div></li></ul></div></div></div><div id='method-getRandomCampaign' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='wikiGrokCampaigns'>wikiGrokCampaigns</span><br/><a href='source/wikiGrokCampaigns.html#wikiGrokCampaigns-method-getRandomCampaign' target='_blank' class='view-source'>view source</a></div><a href='#!/api/wikiGrokCampaigns-method-getRandomCampaign' class='name expandable'>getRandomCampaign</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|null<span class=\"signature\"></span></div><div class='description'><div class='short'>Randomly pick a campaign for the current page ...</div><div class='long'><p>Randomly pick a campaign for the current page</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|null</span><div class='sub-desc'><p>Object with campaign data. Includes these properties:\n    name: Name of the campaign chosen, e.g. 'album'\n    property: Wikidata ID for the relevant property, e.g. 'P31'\n    questions: object with item IDs and labels for claim suggestions\n    randomClaimId: Wikidata item ID of a randomly chosen suggestion</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});