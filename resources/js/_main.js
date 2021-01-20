import * as $ from "jquery";
import Infos from "./infos/Infos"
import Skills from "./infos/Skills"

const infos = new Infos
const skills = new Skills

$('#menu_skills')
  .on('click', () => {
    infos.handleClick('skills')
    skills.handleSkillsScore()
  })
  
  .on('mouseover', () => {
    skills.menuSkillOver()
  })
  
  .on('mouseout', () => {
    skills.menuSkillOut()
  })

$('#menu_contact')
  .on('click', () => {
    if (infos.infosVisible === 'skills')
      skills.handleSkillsScore()
    
    infos.handleClick('contact')
  })
