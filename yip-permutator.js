let element;

/*
Called when the item has been created, or when creation failed due to an error.
We'll just log success/failure here.
*/
function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

/*
Called when the item has been removed.
We'll just log success here.
*/
function onRemoved() {
  console.log("Item removed successfully");
}

/*
Called when there was an error.
We'll just log the error here.
*/
function onError(error) {
  console.log(`Error: ${error}`);
}

browser.menus.create({
  id: "permutate",
  title: "Yiptate",
  contexts: ["selection"]
}, onCreated);

browser.menus.create({
  id: "unpermutate",
  title: "Unyiptate",
  contexts: ["selection"]
}, onCreated);


browser.menus.onClicked.addListener((info, tab) => {
  switch(info.menuItemId) {
    case "permutate":
      browser.tabs.executeScript({
        file: "perm.js"
      });
      break;
    case "unpermutate":
      browser.tabs.executeScript({
        file: "unperm.js"
      });
      break;
  }
});
