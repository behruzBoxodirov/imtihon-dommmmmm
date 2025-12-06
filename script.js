document.body.style.margin = '0';
document.body.style.fontFamily = 'Arial, sans-serif';

let header = document.createElement('header');
header.style.width = '100%';
document.body.appendChild(header);

let nav = document.createElement('nav');
nav.style.backgroundColor = '#014E56';
nav.style.padding = '24px 100px';
nav.style.display = 'flex';
nav.style.justifyContent = 'space-between';
nav.style.alignItems = 'center';
header.appendChild(nav);

let logo = document.createElement('p');
logo.innerText = 'myteam';
logo.style.color = 'white';
logo.style.fontSize = '24px';
logo.style.fontWeight = '700';
nav.appendChild(logo);

let ul = document.createElement('ul');
ul.style.listStyle = 'none';
ul.style.display = 'flex';
ul.style.gap = '32px';
ul.style.alignItems = 'center';
ul.style.margin = '0';
ul.style.padding = '0';
nav.appendChild(ul);

let menuItems = ['Home', 'About'];
menuItems.forEach(text => {
    let li = document.createElement('li');
    li.textContent = text;
    li.style.color = 'white';
    li.style.fontSize = '18px';
    li.style.cursor = 'pointer';
    ul.appendChild(li);
});


let liButton = document.createElement('li');
let button = document.createElement('button');
button.innerText = 'Contact Us';
button.style.padding = '12px 24px';
button.style.backgroundColor = 'transparent';
button.style.color = 'white';
button.style.border = '2px solid white';
button.style.borderRadius = '50px';
button.style.cursor = 'pointer';
button.style.fontSize = '16px';
liButton.appendChild(button);
ul.appendChild(liButton);


let headerContent = document.createElement('div');
headerContent.style.display = 'flex';
headerContent.style.flexDirection = 'column';
headerContent.style.justifyContent = 'center';
headerContent.style.alignItems = 'center';
headerContent.style.padding = '80px 100px';
headerContent.style.width = '100%';
headerContent.style.backgroundColor = '#014E56';
headerContent.style.textAlign = 'center';
header.appendChild(headerContent);



let about = document.createElement('section');
about.style.backgroundColor = '#014E56';
about.style.padding = '80px 100px';
document.body.appendChild(about);

let aboutBox = document.createElement('div');
aboutBox.style.padding = '24px';
aboutBox.style.borderRadius = '10px';
aboutBox.style.maxWidth = '900px';
aboutBox.style.margin = '0 auto';
about.appendChild(aboutBox);

let aboutTitle = document.createElement('h1');
aboutTitle.innerText = 'About';
aboutTitle.style.color = 'white';
aboutTitle.style.fontSize = '40px';
aboutTitle.style.marginBottom = '20px';
aboutBox.appendChild(aboutTitle);

let aboutText = document.createElement('p');
aboutText.innerText = "We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation.";
aboutText.style.color = 'white';
aboutText.style.fontSize = '18px';
aboutText.style.lineHeight = '26px';
aboutBox.appendChild(aboutText);

let directors = document.createElement('section');
directors.style.backgroundColor = '#012F34';
directors.style.padding = '80px 100px';
directors.style.textAlign = 'center';
document.body.appendChild(directors);

let dirTitle = document.createElement('h1');
dirTitle.innerText = 'Meet the directors';
dirTitle.style.color = 'white';
dirTitle.style.fontSize = '36px';
dirTitle.style.marginBottom = '40px';
directors.appendChild(dirTitle);

let box = document.createElement('div');
box.style.display = 'flex';
box.style.justifyContent = 'center';
box.style.gap = '32px';
box.style.flexWrap = 'wrap';
directors.appendChild(box);

let people = [
    { name: 'Nikita Marks', job: 'Founder & CEO', img: './f793cb0468e986e2c3676c948d91be057b3e02a7 (2).png' },
    { name: 'Cristian Duncan', job: 'Co-founder & COO', img: './d7e5e282500e659bb1b5ebdc0f0326d279792cf0 (2).png' },
    { name: 'Cruz Hamer', job: 'Co-founder & CTO', img: './f793cb0468e986e2c3676c948d91be057b3e02a7 (2).png' }
];

people.forEach(p => {
    let card = document.createElement('div');
    card.style.width = '260px';
    card.style.background = '#004047';
    card.style.padding = '20px';
    card.style.borderRadius = '10px';
    card.style.color = 'white';
    card.style.textAlign = 'center';


    let circle = document.createElement('div');
    circle.style.width = '80px';
    circle.style.height = '80px';
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = '#79C8C7';
    circle.style.margin = '0 auto 20px auto';
    circle.style.overflow = 'hidden';
    circle.style.display = 'flex';
    circle.style.alignItems = 'center';
    circle.style.justifyContent = 'center';

    let img = document.createElement('img');
    img.src = p.img || '';
    img.alt = p.name;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.display = 'block';
    circle.appendChild(img);
    
    let name = document.createElement('h3');
    name.innerText = p.name;
    name.style.margin = '0';

    let job = document.createElement('p');
    job.innerText = p.job;
    job.style.opacity = '0.7';
    job.style.margin = '5px 0 20px 0';

    let plus = document.createElement('button');
    plus.innerText = '+';
    plus.style.width = '35px';
    plus.style.height = '35px';
    plus.style.borderRadius = '50%';
    plus.style.border = 'none';
    plus.style.backgroundColor = '#F67E7E';
    plus.style.color = 'white';
    plus.style.fontSize = '22px';
    plus.style.cursor = 'pointer';

    card.append(circle, name, job, plus);
    box.appendChild(card);
});



let clients = document.createElement('section');
clients.style.backgroundColor = '#002529';
clients.style.padding = '70px 100px';
clients.style.textAlign = 'center';
document.body.appendChild(clients);

let cTitle = document.createElement('h1');
cTitle.innerText = 'Some of our clients';
cTitle.style.color = 'white';
cTitle.style.fontSize = '36px';
cTitle.style.marginBottom = '25px';
clients.appendChild(cTitle);

let images = [
    "./80808efa42ed0c5d17494fde69934cd937927bfa.png",
    "./66408f3c4ddb64d93ea208689baa8a7f32578519 (1).png",
    "./f5071d25daf8ccb623d411d3cfef100b514b856a (1).png",
    "./dcac24c0875489d95418e45479a801592bea4232.png",
    "./71efb3a5e3a53beb2638cdd2d32b1988997f45df.png"
];

let imgContainer = document.createElement('div');
imgContainer.style.display = 'flex';
imgContainer.style.justifyContent = 'space-between';
imgContainer.style.alignItems = 'center'
clients.appendChild(imgContainer);

images.forEach(src => {
    let img = document.createElement('img');
    img.src = src;
    img.style.width = '150px'; 
    img.style.margin = '10px';
    imgContainer.appendChild(img);
});

let cta = document.createElement('section');
cta.className = 'cta-section';
cta.style.backgroundColor = '#F67E7E';
cta.style.padding = '60px 100px';
cta.style.display = 'flex';
cta.style.justifyContent = 'space-between';
cta.style.alignItems = 'center';
document.body.appendChild(cta);

let ctaText = document.createElement('div');
ctaText.className = 'cta-text-box';
cta.appendChild(ctaText);

let ctaTitle = document.createElement('h1');
ctaTitle.className = 'cta-title';
ctaTitle.innerText = 'Ready to get started?';
ctaTitle.style.color = '#012F34';
ctaTitle.style.fontSize = '36px';
ctaTitle.style.margin = '0';
ctaText.appendChild(ctaTitle);


let ctaBtnBox = document.createElement('div');
ctaBtnBox.className = 'cta-btn-box';
cta.appendChild(ctaBtnBox);

let ctaBtn = document.createElement('button');
ctaBtn.className = 'cta-btn';
ctaBtn.innerText = 'contact us';
ctaBtn.style.padding = '12px 24px';
ctaBtn.style.backgroundColor = 'transparent';
ctaBtn.style.border = '2px solid #012F34';
ctaBtn.style.borderRadius = '30px';
ctaBtn.style.fontSize = '16px';
ctaBtn.style.cursor = 'pointer';
ctaBtn.style.color = '#012F34';
ctaBtnBox.appendChild(ctaBtn);



let footer = document.createElement('footer');
footer.className = 'footer';
footer.style.backgroundColor = '#002529';
footer.style.padding = '40px 100px';
footer.style.display = 'flex';
footer.style.justifyContent = 'space-between';
footer.style.alignItems = 'center';
document.body.appendChild(footer);


let footerLeft = document.createElement('div');
footerLeft.className = 'footer-left';
footer.appendChild(footerLeft);

let fLogo = document.createElement('p');
fLogo.className = 'footer-logo';
fLogo.innerText = 'myteam';
fLogo.style.color = 'white';
fLogo.style.fontSize = '24px';
fLogo.style.fontWeight = '700';
footerLeft.appendChild(fLogo);

let footerRight = document.createElement('div');
footerRight.className = 'footer-right';
footerRight.style.display = 'flex';
footerRight.style.gap = '20px';
footer.appendChild(footerRight);

let socialIcons = [
    "./facebook-logo (1).svg",
    "./pinterest-logo (1).svg",
    "./twitter-logo (1).svg"
];

socialIcons.forEach(src => {
    let iconBox = document.createElement('div');
    iconBox.className = 'icon-box';

    let icon = document.createElement('img');
    icon.src = src;
    icon.className = 'social-icon';
    icon.style.width = '22px';
    icon.style.cursor = 'pointer';

    iconBox.appendChild(icon);
    footerRight.appendChild(iconBox);
});


let behruz = document.createElemente("behruzbekjon")