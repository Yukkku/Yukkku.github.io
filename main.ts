document.head.insertAdjacentHTML(
  "beforeend",
  '<meta name="viewport" content="width=device-width"><link rel="icon" href="/favicon.svg">',
);

const addHeader = () =>
  document.body.insertAdjacentHTML(
    "afterbegin",
    '<header><a href="/">Yukkkuの手帳</a></header>',
  );
if (document.body) addHeader();
const observer = new MutationObserver(() => {
  if (document.body) {
    observer.disconnect();
    addHeader();
  }
});
observer.observe(document.documentElement, { childList: true });

addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML(
    "beforeend",
    "<footer></footer>",
  );
});
