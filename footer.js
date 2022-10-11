let footer_content = document.getElementById("footer");

let footer_display  =[
    {
        footer_text:"Copyright of Tall`ys Hotel",
        footer_icon_1:'<i class="fa fa fa-facebook"><i/>',
        footer_icon_2:'<i class="fa fa fa-twitter"></i>',
        footer_icon_3:'<i class="fa fa fa-instagram"></i>',
        footer_icon_4:'<i class="fa fa fa-github"></i>',
},
];
let foot_embed = '';

footer_display.forEach((foot) => {
   foot_embed += `<i>${foot.footer_text}</i><br><i>${foot.footer_icon_1}&nbsp;&nbsp;${foot.footer_icon_2}&nbsp;&nbsp;${foot.footer_icon_3}&nbsp;&nbsp;${foot.footer_icon_4}</i>`
});

footer_content.innerHTML += `${foot_embed}`;