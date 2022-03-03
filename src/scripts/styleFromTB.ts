import textBaseEng from './textBase';

const roleContainer = document.querySelector('.roleS') as HTMLTitleElement;
const townContainer = document.querySelector('.town') as HTMLTitleElement;
const aboutCont = document.querySelector('.about') as HTMLDivElement;
const aboutTitle = aboutCont.querySelector('.main-title') as HTMLTitleElement;
const hardSkillsCont = document.querySelector('.hard-sk') as HTMLDivElement;
const softSkillsCont = document.querySelector('.soft-sk') as HTMLDivElement;

const styleArr = ['it', 'other', 'lenguages'];

function skillsInsertionHard() {
  styleArr.forEach((elem, index) => {
    const skillsContainerHard = hardSkillsCont.querySelector(`.${elem}`);

    const skillTitle = document.createElement('p') as HTMLParagraphElement;
    skillTitle.classList.add('main-title-underline');
    skillTitle.innerHTML = `${textBaseEng.hardSkills[index][0]}`;

    skillsContainerHard?.append(skillTitle);

    const skillUl = document.createElement('ul') as HTMLUListElement;
    (textBaseEng.hardSkills[index][1] as string[]).forEach((el: string) => {
      const skillLi = document.createElement('li') as HTMLLIElement;
      skillLi.innerHTML = `${el}`;
      skillUl.append(skillLi);
    });
    skillsContainerHard?.append(skillUl);
  });
}

function skillsInsertionSoft() {
  const skillsCont = softSkillsCont.querySelector('.soft-skills-container') as HTMLDivElement;

  Object.keys(textBaseEng.softSkills).forEach((key) => {
    const softItemCont = document.createElement('div') as HTMLDivElement;
    softItemCont.classList.add('soft-one');

    const softItemTitle = document.createElement('p') as HTMLParagraphElement;
    softItemTitle.classList.add('name-skill');
    softItemTitle.classList.add('main-title-underline');
    const softItemDescription = document.createElement('p') as HTMLParagraphElement;
    softItemDescription.classList.add('main-titl');
    softItemTitle.innerHTML = `${key} `;
    softItemDescription.innerHTML = `${textBaseEng.softSkills[key]}`;
    softItemCont.appendChild(softItemTitle);
    softItemCont.append(softItemDescription);
    skillsCont.append(softItemCont);
  });
}

export default function textInsertion() {
  roleContainer.innerHTML = `${textBaseEng.roleS}`;
  townContainer.innerHTML = `${textBaseEng.town}`;
  aboutTitle.innerHTML = `${textBaseEng.aboutMe}`;
  skillsInsertionHard();
  skillsInsertionSoft();
}
