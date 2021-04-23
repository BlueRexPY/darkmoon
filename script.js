VanillaTilt.init(document.querySelectorAll(".svg"),{
    max: 3,
    speed: 10
});

function change(name){
    const text = document.querySelector(".text_p");

    const a1 = document.querySelector(".a1");
    const a2 = document.querySelector(".a2");
    const a3 = document.querySelector(".a3");

    const p1 = document.querySelector(".p1");
    const p2 = document.querySelector(".p2");
    const p3 = document.querySelector(".p3");

    if( name == a1 || name == a2 || name == a3){
        a3.style.background= "none";
        a3.style.padding= "0%";
        a3.style.borderBottom= "none";
        a2.style.background= "none";
        a2.style.padding= "0%";
        a2.style.borderBottom= "none";
        a1.style.background= "none";
        a1.style.padding= "0%";
        a1.style.borderBottom= "none";
        name.style.borderBottom= "3px solid #fff";
        p1.style.color = "#fff"
        p2.style.color = "#fff"
        p3.style.color = "#fff"
        text.innerHTML = get_text(name);
        
    }
    if( name == p1 || name == p2 || name == p3){
        name.style.color = "#ffffff69"
    }  
}

function get_text(name){
    var description = ''
    
    if( name == a1){
        description = `
        This is what a <a href="#" class="p1" id="p1" onclick="change(p1)" >Hyperlink</a> would look like in a normal paragraph. Here is some dummy text to test how a <a href="#" class="p2" id="p2" onclick="change(p2)">link</a> will appear within copy. Here is one more link <a href="#" class="p3" id="p3" onclick="change(p3)">just for fun</a>.`
    }
    if( name == a2){
        description = `
        Himenaeos viverra <a href="#" class="p1" id="p1" onclick="change(p1)" > eget ridiculus</a> eu eget ridiculus consequat maecenas nunc finibus, quisque hac aenean urna odio risus donec est, natoque hendrerit<a href="#" class="p2" id="p2" onclick="change(p2)">nec litora</a>  phasellus scelerisque et suspendisse. Vel enim ad massa taciti <a href="#" class="p3" id="p3" onclick="change(p3)">morbi in adipiscing</a>`
    }
    if( name == a3){
        description = `
         erosbibendum ipsum, diam vivamus eu a<a href="#" class="p1" id="p1" onclick="change(p1)" > magnis veli</a> eu eget ridiculus consequat maecenas nunc finibus, quisque hac aenean urna odio risus donec est, natoque hendrerit<a href="#" class="p2" id="p2" onclick="change(p2)">litora</a>  non sapien lorem. iscing fringilla sed etia<a href="#" class="p3" id="p3" onclick="change(p3)">morbi </a>`
    }
    return description;
}