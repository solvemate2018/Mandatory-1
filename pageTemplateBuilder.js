const fs = require("fs");

const head = fs
  .readFileSync(__dirname + "\\public\\views\\partials\\head.html")
  .toString();
const header = fs
  .readFileSync(__dirname + "\\public\\views\\partials\\header.html")
  .toString();
const footer = fs
  .readFileSync(__dirname + "\\public\\views\\partials\\footer.html")
  .toString();

function constructDefaultPage(page) {
  page = page.replace("%%HEAD_PLACEHOLDER%%", head);
  page = page.replace("%%HEADER_PLACEHOLDER%%", header);
  page = page.replace("%%FOOTER_PLACEHOLDER%%", footer);

  return page;
}

module.exports = (page) => {
  return constructDefaultPage(page);
};
