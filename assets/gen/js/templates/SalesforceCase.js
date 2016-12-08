Coveo.TemplateCache.registerTemplate("MobileSalesforceCase", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:40px; vertical-align:middle\">\n      <span class=\"CoveoIcon\" data-small=\"true\">\n      </span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"vertical-align:middle\">\n      <a class=\"CoveoResultLink\">\n      </a>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"width:60px; text-align:center; vertical-align:middle\">\n      <div class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\">\n      </div>\n      <div class=\"CoveoQuickview\">\n        <span class=\"coveo-sprites-quickview\">\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n      <span class=\"CoveoExcerpt\">\n      </span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n      <table class=\"CoveoFieldTable\">\n        <tbody>\n          <tr data-field=\"@sffcaseid\" data-caption=\"Subject\">\n          </tr>\n          <tr data-field=\"@sfcasesubject\" data-caption=\"Subject\">\n          </tr>\n          <tr data-field=\"@sfcasenumber\" data-caption=\"Case Number\">\n          </tr>\n          <tr data-field=\"@sfcasepriority\" data-caption=\"Priority\">\n          </tr>\n          <tr data-field=\"@sfcaseorigin\" data-caption=\"Origin\">\n          </tr>\n          <tr data-field=\"@sfaccountname\" data-caption=\"Account Name\">\n          </tr>\n          <tr data-field=\"@sfowner\" data-caption=\"Owner\">\n          </tr>\n          <tr data-field=\"@sfcasestatus\" data-caption=\"Status\">\n          </tr>\n          <tr data-field=\"@sfcontactname\" data-caption=\"Contact\">\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n      <div class=\"CoveoResultFolding\" data-result-template-id=\"MobileChatter\" data-more-caption=\"ShowAllReplies\" data-less-caption=\"ShowOnlyMostRelevantReplies\">\n      </div>\n    </div>\n  </div>\n</div>\n", "raw.sfcaseid != null && Coveo.DeviceUtils.isSmallScreenWidth()"), true, true)
Coveo.TemplateCache.registerTemplate("SalesforceCase", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:85px; text-align:center; padding-top:7px\">\n      <span class=\"CoveoIcon\">\n      </span>\n      <span class=\"CoveoQuickview\">\n      </span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"padding-left:15px\">\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"font-size:18px\">\n          <a class=\"CoveoResultLink\">\n          </a>\n        </div>\n        <div class=\"coveo-result-cell\" style=\"width:120px;text-align:right;font-size:12px;\">\n          <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n          <div class=\"CoveoExcerpt\">\n          </div>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n          <table class=\"CoveoFieldTable\">\n            <tbody>\n              <tr data-field=\"@sffcaseid\" data-caption=\"Subject\">\n              </tr>\n              <tr data-field=\"@sfcasesubject\" data-caption=\"Subject\">\n              </tr>\n              <tr data-field=\"@sfcasenumber\" data-caption=\"Case Number\">\n              </tr>\n              <tr data-field=\"@sfcasepriority\" data-caption=\"Priority\">\n              </tr>\n              <tr data-field=\"@sfcaseorigin\" data-caption=\"Origin\">\n              </tr>\n              <tr data-field=\"@sfaccountname\" data-caption=\"Account Name\">\n              </tr>\n              <tr data-field=\"@sfowner\" data-caption=\"Owner\">\n              </tr>\n              <tr data-field=\"@sfcasestatus\" data-caption=\"Status\">\n              </tr>\n              <tr data-field=\"@sfcontactname\" data-caption=\"Contact\">\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", "raw.sfcaseid != null"), true, true)