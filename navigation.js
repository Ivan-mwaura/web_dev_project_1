//fetching our header-navigation element from our html file
const navigation_header = document.getElementById('navigation')

//declaring our objects into the variable navigation_headers
//The object includes title,icon,location
const header_content = [
  {
    Title: 'Home',
    bootstrap_icon : '(<i class="glyphicon glyphicon-home"></i>)',
    location: './gorvernment.html',
  },
  {
    Title: 'About Us',
    bootstrap_icon: '(<i class="glyphicon glyphicon-home"></i>)',
    location: './project_1_headers_aboutus.html',
  },
  {
    Title: 'Contact Us',
    bootstrap_icon: '(<i class="glyphicon glyphicon-user"></i>)',
    location: './project_1_headers_ContactUs.html',
  },
  {
    Title: "Terms of service",
    bootstrap_icon:'(<i class="glyphicon glyphicon-certificate"></i>)',
    location: './terms_of_service.html',
  },

];

let headers_bar = '';

header_content.forEach((head_cont) => {
  headers_bar += ` <a href=${head_cont.location}>${head_cont.Title}${head_cont.bootstrap_icon}&nbsp;&nbsp;&nbsp;</a>`;
});

navigation_header.innerHTML = `${headers_bar}`;




