export const LANG_KEY = "vv-lang";

// Runs in <head> before first paint so the saved language shows without a flash.
export const LANG_INIT_SCRIPT = `try{var l=localStorage.getItem("${LANG_KEY}");if(l==="en"||l==="hi"){document.documentElement.dataset.lang=l;document.documentElement.lang=l}}catch(e){}`;
