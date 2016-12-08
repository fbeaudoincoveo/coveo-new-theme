Coveo.TemplateCache.registerTemplate("YouTubeVideo", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:220px\">\n      <span class=\"CoveoYouTubeThumbnail\"></span>\n    </div>\n    <div class=\"coveo-result-cell\">\n      <a class=\"CoveoResultLink\"></a>\n      <div class=\"CoveoExcerpt\"></div>\n      <span class=\"CoveoFieldValue\" data-field=\"@ytvideoduration\" data-helper=\"timeSpan\"></span>\n      <span class=\"CoveoText\" data-value=\"•\"></span>\n      <span class=\"CoveoFieldValue\" data-field=\"@ytviewcount\"></span>\n      <span class=\"CoveoText\" data-value=\"views\"></span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"text-align:right; width:100px\">\n      <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"dateTime\" data-helper-options-predefined-format=\"MM/dd/yyyy\"></span>\n    </div>\n  </div>\n</div>", "raw.filetype == 'YouTubeVideo'"), true, true)\"coveo-result-cell\" style=\"padding-bottom:5px; padding-top:5px\">\n      <span class=\"CoveoFieldValue\" data-field=\"@ytvideoduration\" data-helper=\"timeSpan\" data-helper-options-is-milliseconds=\"false\"></span>\n      <span class=\"CoveoText\" data-value=\"•\"></span>\n      <span class=\"CoveoFieldValue\" data-field=\"@ytviewscount\"></span>\n      <span class=\"CoveoText\" data-value=\"views\"></span>\n    </div>\n  </div>\n</div>\n", "raw.filetype == 'YouTubeVideo' && Coveo.DeviceUtils.isSmallScreenWidth()"), true, true)
Coveo.TemplateCache.registerTemplate("MobileYouTubePlaylistItem", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"vertical-align:middle\">\n      <a class=\"CoveoResultLink\">\n      </a>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"width:60px; text-align:right; vertical-align:middle\">\n      <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"dateTime\">\n      </span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:220px; text-align:center; padding-top:5px; padding-bottom:5px\">\n      <span class=\"CoveoYouTubeThumbnail\">\n      </span>\n    </div>\n  </div>\n</div>\n", "raw.filetype== 'YouTubePlaylistItem' && Coveo.DeviceUtils.isSmallScreenWidth()"), true, true)
Coveo.TemplateCache.registerTemplate("YouTubePlaylistItem", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:220px; padding-top:4px\">\n      <span class=\"CoveoYouTubeThumbnail\">\n      </span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"font-size:18px\">\n      <a class=\"CoveoResultLink\">\n      </a>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"text-align:right; width:120px;font-size:12px\">\n      <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"dateTime\">\n      </span>\n    </div>\n  </div>\n</div>\n", "raw.filetype== 'YouTubePlaylistItem'"), true, true)
Coveo.TemplateCache.registerTemplate("YouTubeVideo", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:220px; padding-top:7px\">\n      <span class=\"CoveoYouTubeThumbnail\">\n      </span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"\">\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"font-size:18px\">\n          <a class=\"CoveoResultLink\">\n          </a>\n        </div>\n        <div class=\"coveo-result-cell\" style=\"text-align:right; width:120px;font-size:12px\">\n          <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"dateTime\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:10px;\">\n          <div class=\"CoveoExcerpt\">\n          </div>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:10px;font-size:12px\">\n          <span class=\"CoveoFieldValue\" data-field=\"@ytvideoduration\" data-helper=\"timeSpan\" data-helper-options-is-milliseconds=\"false\">\n          </span>\n          <span class=\"CoveoText\" data-value=\"•\">\n          </span>\n          <span class=\"CoveoFieldValue\" data-field=\"@ytviewcount\">\n          </span>\n          <span class=\"CoveoText\" data-value=\"views\">\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", "raw.filetype == 'YouTubeVideo'"), true, true)