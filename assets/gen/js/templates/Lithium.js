Coveo.TemplateCache.registerTemplate("LithiumThread", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame coveo-email-result\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\">\n      <span class=\"CoveoIcon\"></span>\n    </div>\n    <div class=\"coveo-result-cell\">\n      <span class=\"CoveoText\" data-value=\"From:\"></span>\n      <span class=\"CoveoFieldValue\" data-field=\"@authorloginname\"></span>\n      <span class=\"CoveoText\" data-value=\"To:\"></span>\n      <span class=\"CoveoFieldValue\" data-field=\"@liboardshorttitle\"></span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"width:200px; text-align:right; font-size:14px\">\n      <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"emailDateTime\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\" style=\"font-size:14px\">\n      <a class=\"CoveoResultLink\"></a>\n      <span class=\"CoveoQuickview\"><div class='coveo-icon-for-quickview'>Quickview</div></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\" style=\"text-align:justify\">\n      <span class=\"CoveoExcerpt\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\">\n      <table class=\"CoveoFieldTable\" data-use-json-template-fields=\"true\"></table>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\">\n      <span class=\"CoveoResultFolding\" data-result-template-id=\"LithiumChildResult\" data-more-caption=\"ShowCompleteThread\" data-less-caption=\"ShowOnlyTopMatchingPosts\"></span>\n    </div>\n  </div>\n</div>", "raw.connectortype == 'LithiumCrawler'"), true, true)
Coveo.TemplateCache.registerTemplate("LithiumChildResult", Coveo.UnderscoreTemplate.fromString("<div class=\"coveo-date\"><%- dateTime(raw.limessageposttime) %></div>\n\n<div class=\"coveo-lithium-header\">\n    <span class=\"coveo-lithium-from\">\n        From: <span class=\"CoveoFieldValue\" data-field=\"@limessageauthor\"></span>\n    </span>\n</div>\n\n<div class='coveo-excerpt coveo-show-if-normal'>\n    <a class=\"CoveoResultLink\">\n        <%= highlight(firstSentences, firstSentencesHighlights) %>\n    </a>\n</div>\n\n<div class='coveo-excerpt coveo-show-if-expanded'>\n    <a class=\"CoveoResultLink\">\n        <%= raw.limessagebody %>\n    </a>\n</div>"), false, false)plateCache.registerTemplate("LithiumThread", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame coveo-email-result\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:85px; text-align:center; padding-top:7px\">\n      <span class=\"CoveoIcon\">\n      </span>\n      <div class=\"CoveoQuickview\">\n      </div>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"padding-left:15px\">\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"font-size:18px\">\n          <a class=\"CoveoResultLink\">\n          </a>\n        </div>\n        <div class=\"coveo-result-cell\" style=\"width:120px;text-align:right;font-size:12px\">\n          <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"emailDateTime\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"font-size:13px;padding-top:5px;padding-bottom:5px;\">\n          <span class=\"CoveoText\" data-value=\"From:\">\n          </span>\n          <span class=\"CoveoFieldValue\" data-field=\"@authorloginname\">\n          </span>\n          <span class=\"CoveoText\" data-value=\"To:\">\n          </span>\n          <span class=\"CoveoFieldValue\" data-field=\"@liboardshorttitle\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n          <span class=\"CoveoExcerpt\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px; font-size:13px;\">\n          <table class=\"CoveoFieldTable\">\n            <tbody>\n              <tr data-field=\"@liboardshorttitle\" data-caption=\"Board\">\n              </tr>\n              <tr data-field=\"@licategoryshorttitle\" data-caption=\"Category\">\n              </tr>\n              <tr data-field=\"@limessageauthor\" data-caption=\"Author\">\n              </tr>\n              <tr data-field=\"@limessagerating\" data-caption=\"Rating\">\n              </tr>\n              <tr data-field=\"@limessagetags\" data-caption=\"Tags\" data-split-values=\"true\">\n              </tr>\n              <tr data-field=\"@litopicviewcount\" data-caption=\"View Count\">\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px; font-size:13px;\">\n          <span class=\"CoveoResultFolding\" data-result-template-id=\"LithiumChildResult\" data-more-caption=\"ShowCompleteThread\" data-less-caption=\"ShowOnlyTopMatchingPosts\">\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", "raw.connectortype == 'LithiumCrawler'"), true, true)
Coveo.TemplateCache.registerTemplate("LithiumChildResult", Coveo.UnderscoreTemplate.fromString("<div class=\"coveo-result-frame coveo-email-result\">\n    <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"width:50px;text-align:center;\">\n            <span class=\"CoveoIcon\" data-small=\"true\"></span>\n            <div class=\"CoveoQuickview\"></div>\n        </div>\n        <div class=\"coveo-result-cell\">\n            <div class=\"coveo-result-row\">\n                <div class=\"coveo-result-cell\" style=\"font-size:15px\">\n                    <a class=\"CoveoResultLink\"></a>\n                </div>\n                <div class=\"coveo-result-cell\" style=\"width:120px;text-align:right;font-size:12px\">\n                    <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"emailDateTime\"></span>\n                </div>\n            </div>\n            <div class=\"coveo-result-row\">\n                <div class=\"coveo-result-cell\" style=\"font-size:13px;padding-top:5px;padding-bottom:5px;\">\n                    <span class=\"CoveoText\" data-value=\"From:\"></span>\n                    <span class=\"CoveoFieldValue\" data-field=\"@authorloginname\"></span>\n                    <span class=\"CoveoText\" data-value=\"To:\"></span>\n                    <span class=\"CoveoFieldValue\" data-field=\"@liboardshorttitle\"></span>\n                </div>\n            </div>\n            <div class=\"coveo-result-row\">\n                <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n                    <span class=\"CoveoExcerpt\"></span>\n                </div>\n            </div>\n            <div class=\"coveo-result-row\">\n                <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n                    <table class=\"CoveoFieldTable\">\n                        <tbody>\n                            <tr data-field=\"@liboardshorttitle\" data-caption=\"Board\"></tr>\n                            <tr data-field=\"@licategoryshorttitle\" data-caption=\"Category\"></tr>\n                            <tr data-field=\"@limessageauthor\" data-caption=\"Author\"></tr>\n                            <tr data-field=\"@limessagerating\" data-caption=\"Rating\"></tr>\n                            <tr data-field=\"@limessagetags\" data-caption=\"Tags\" data-split-values=\"true\"></tr>\n                            <tr data-field=\"@litopicviewcount\" data-caption=\"View Count\"></tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div class=\"coveo-result-row\">\n                <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n                    <span class=\"CoveoResultFolding\" data-result-template-id=\"LithiumThread\" data-more-caption=\"ShowCompleteThread\" data-less-caption=\"ShowOnlyTopMatchingPosts\"></span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"), false, false)