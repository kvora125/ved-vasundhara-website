export const LANG_PREF_KEY = "vv-lang";

// Runs in <head> before first paint:
// 1. marks English pages with <html lang="en"> (the root layout is shared by both languages);
// 2. sends visitors who chose English (by clicking EN) from a Hindi page to its /en counterpart.
// Search engines never carry this preference, so every URL stays crawlable as-is.
export const LANG_HEAD_SCRIPT = `(function(){try{var p=location.pathname,d=document.documentElement,en=p==="/en"||p.indexOf("/en/")===0;if(en){d.lang="en"}else if(localStorage.getItem("${LANG_PREF_KEY}")==="en"){location.replace("/en"+(p==="/"?"/":p)+location.search+location.hash)}}catch(e){}})();`;
