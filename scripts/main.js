
const navMainSelectorElement = document.querySelector('#navMain');
const navSkillsSelectorElement = document.querySelector('#navSkills');
const navPortfolioSelectorElement = document.querySelector('#navPortfolio');
const navContactsSelectorElement = document.querySelector('#navContacts');

const mainSectionElement = document.querySelector('#main');
const skillsSectionElement = document.querySelector('#skills');
const portfolioSectionElement = document.querySelector('#portfolio');
const contactsSectionElement = document.querySelector('#contacts');

function scrollOnclick(clickElement, scrollElement) {
    clickElement.onclick = () => {
        scrollElement.scrollIntoView({
            behavior: 'smooth',
        })
    }
}
scrollOnclick(navMainSelectorElement, mainSectionElement);
scrollOnclick(navSkillsSelectorElement, skillsSectionElement)
scrollOnclick(navPortfolioSelectorElement, portfolioSectionElement)
scrollOnclick(navContactsSelectorElement, contactsSectionElement)