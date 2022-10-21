
const team = [
    {
        id: 1,
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        id: 2,
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        id: 3,
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        id: 4,
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        id: 5,
        nome: "Scott Estrada",
        ruolo: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        id: 6,
        nome: "Barbara Ramos ",
        ruolo: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
]
console.log(team);

const btn = document.querySelector('button');
stampaRow();
btn.addEventListener('click', aggiungiMembro);



function stampaRow() {
    const container = document.getElementById('app');
    const row = document.createElement('div');
    row.className = 'row';
    row.style = 'background-color: beige; border-radius: 2%;';
    for (let i = 0; i < team.length; i++) {
        const member = team[i];
        const template = stampaCard(member);
        row.innerHTML += template;
    }
    container.appendChild(row);
}

function aggiungiMembro() {
    const newname = document.getElementById('nome').value;
    const newrole = document.getElementById('ruolo').value;
    const newimage = document.getElementById('image').value;
    const newMember = {
        nome: newname,
        ruolo: newrole,
        image: newimage
    }
    team.push(newMember);
    const newcol = stampaCard(newMember);
    const container = document.querySelector('.row');
    container.innerHTML += newcol;
    document.getElementById('nome').value = '';
    document.getElementById('ruolo').value = '';
    document.getElementById('image').value = '';
    console.log(newcol);
    console.log(team);
}



function stampaCard(member) {
    console.log(member)
    const templateHtml = `<div class="col-12 col-sm-12 col-md col-lg-4 mt-5">
    <div class="card" style="width: 18rem;">
     <img src="./img/${member.image}" class="card-img-top" alt="${member.nome}">
     <div class="card-body">
         <h5 class="card-title">${member.nome}</h5>
         <p class="card-text">${member.ruolo}</p>
         <span class="fa-solid fa-trash"></span>
     </div>
    </div>
 </div>`;
    return templateHtml;
}

// const arrayMap = team.map((val)=> val.ruolo);
// console.log(arrayMap);