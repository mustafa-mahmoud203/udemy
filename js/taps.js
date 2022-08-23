const createTapEl=(taps)=>{
    let tap=document.createElement("a");
    let tapId='${taps.name.toLowerCase()}';
    tapId.replace(" ","-");

    tap.classList="nav-link";
    
    tap.setAttribute("href","")
    tap.setAttribute("data-bs-toggle", "tab");
    tap.setAttribute("data-bs-target", '#${tapId}');
    tap.textContent = taps.name;

    return tap;
}

export  let createNavTaps=(taps)=>{
    let nav=document.querySelector(".nav");

    for(let i=0;i<taps.length;i++){
        
        nav.appendChild(createTapEl(taps[i]));
        
    }

    return nav;
} 



