import * as $ from "jquery";

export default class Skills {
  skillsVisible = false
  
  handle()
  {
    $('#menu_skills')
      .on('click', () => {
        this.handleClick()
      })
    
      .on('mouseover', () => {
        this.menuSkillOver()
      })
    
      .on('mouseout', () => {
        this.menuSkillOut()
      })
  }
  
  handleClick()
  {
    this.skillsVisible
      ? this.hideSkills()
      : this.showSkills()
    
    this.skillsVisible = !this.skillsVisible;
  }
  
  showSkills()
  {
    $('#skills').css('margin-left', 0)
    $('#menu_skills').css('--primary', 'hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 0.8%))')
    
    this.showSkillsScore()
  }
  
  hideSkills()
  {
    $('#skills').css('margin-left', -3000)
    $('#menu_skills').css('--primary', 'hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 1%), .1)')
    
    this.hideSkillsScore()
  }
  
  menuSkillOver()
  {
    if (!this.skillsVisible)
      $('#menu_skills').css('--primary', 'hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 0.8%))')
  }
  
  menuSkillOut()
  {
    if (!this.skillsVisible)
      $('#menu_skills').css('--primary', 'hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 1%), .1)')
  }
  
  showSkillsScore()
  {
    $('#skills__laravel .skills__score').css('width', '100%')
    $('#skills__jquery .skills__score').css('width', '70%')
    $('#skills__php .skills__score').css('width', '100%')
    $('#skills__mysql .skills__score').css('width', '100%')
    $('#skills__javascript .skills__score').css('width', '70%')
    $('#skills__bootstrap .skills__score').css('width', '60%')
  }
  
  hideSkillsScore()
  {
    $('.skills__score').css('width', '0')
  }
}
