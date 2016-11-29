const scrapeIt = require("scrape-it")
    , cheerioReq = require("cheerio-req")
    , request = require("request")
    ;

cheerioReq.request = function (opts, cb) {
    if (typeof opts === "string") {
        opts = { url: opts };
    }
    opts.jar = true;
    return request(opts, function (err, res, body) {
        cb(err, body, res);
    }); 
};

/**
 * trumpCabinetPicks
 * Scrapes the NYT page and extracts the relevant information.
 *
 * @name trumpCabinetPicks
 * @function
 * @param {Function} cb An optional callback.
 * @return {Promise} A promise object.
 */
module.exports = function (cb) {
    return scrapeIt("https://www.nytimes.com/interactive/2016/us/politics/donald-trump-administration.html", {
        cabinetPositions: {
            listItem: "#donald-trump-administration .g-section"
          , data: {
                title: ".g-meta .g-subheader"
              , description: ".g-meta .g-intro"
              , senate_confirmation: ".g-meta .g-note"
              , confirmed: {
                    selector: ".g-checkmark",
                    attr: "src",
                    convert (src) {
                        return !!src;
                    }
                }
              , predictions: {
                    listItem: ".g-list > .g-body"
                  , data: {
                        name: "strong"
                      , image: { selector: ".g-image", attr: "src" }
                      , description: {
                            how: "html",
                            selector: ".g-text",
                            convert (html) {
                                html = html.replace(/^\<strong\>.*\<\/strong\>/, "").trim();
                                return html;
                            }
                        }
                    }
                }
            }
        }
    }, cb);
};
