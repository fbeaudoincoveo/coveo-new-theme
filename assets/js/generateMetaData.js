/**
 * Generates the <meta> tags which can be used to correctly index page content.
 */
function generatePageMetaData() {

  generateAllIndexElementsMetaData();
  generateSeparateMetaData();

  /**
   * Generates the <meta name="all-index-elements" content="..."> tag in page head.
   * This tag contains all elements from all sections of the page index.
   */
  function generateAllIndexElementsMetaData() {

    // Get all index elements in an array and replace the elements by their respective text value.
    // e.g., a "a.tsd-kind-icon" element in the array could become a string such as "AdvancedSearch".
    var indexElements = $('section.tsd-index-section:not(.tsd-is-external) a').toArray();

    indexElements.forEach(function(element, index, array) {
      array.splice(index, 1, element.text);
    });

    // Generate the meta tag in the page head. Content will be formatted thus: "element1;element2;...;elementN;".
    $('head title').before('<meta name="all-index-elements" content="' + indexElements.join(';') + '">');
  }

  /**
   * Generates the <meta name="[section-name]" content="..."> tags in the page head.
   * Each of these tags contains elements from a distinct section of the page index.
   */
  function generateSeparateMetaData() {

    // Get all index header elements in a array.
    var categories = $('section.tsd-index-section:not(.tsd-is-external) h3').toArray();

    // This will be an array of arrays.
    var sortedElements = [];

    // Push the header title in the first position of each sortedElements array.
    categories.forEach(function(header, index) {
      var contentArray = [];
      var headerContent = header.textContent;
      contentArray.push(headerContent);

      // Push all header content in the second position of its respective array.
      var selector = "h3:contains("+ headerContent +")";
      var toPush = $(".tsd-index-content " + selector +"+ul a").toArray();
      contentArray.push(toPush);

      sortedElements.push(contentArray);
    });

    sortedElements.forEach(function(category) {

      // Format section name (which will be used as the meta tag name). Sections names are set to lower case and white
      // spaces are replaced by dashes. Thus, "Coveo components" becomes "coveo-components".
      var categoryTitle = category[0].toLowerCase().split(" ").join("-");

      // This will contain the elements under a specific category (section name).
      var categoryElements = [];

      // Push all corresponding element text in the array.
      category[1].forEach(function(element) {
        categoryElements.push(element.text);
      });

      // Generate the meta tag in the page head. Content will be formatted thus: "element1;element2;...;elementN;".
      $('head title').before('<meta name=\'' + categoryTitle + '\' content=\'' + categoryElements.join(';') + '\'>');
    });
  }
}

generatePageMetaData();