import * as $ from "jquery"

export default class Skills {
  scoreLoaded = false
  
  menuSkillOver()
  {
    if (!this.scoreLoaded)
      $('#menu_skills').css('--primary', 'hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 0.8%))')
  }
  
  menuSkillOut()
  {
    if (!this.scoreLoaded)
      $('#menu_skills').css('--primary', 'hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 1%), .1)')
  }
  
  handleSkillsScore()
  {
    this.scoreLoaded
      ? this.hideSkillsScore()
      : this.showSkillsScore()
  }
  
  showSkillsScore()
  {
    $('#skills__laravel .skills__score').css('width', '100%')
    $('#skills__jquery .skills__score').css('width', '70%')
    $('#skills__php .skills__score').css('width', '100%')
    $('#skills__mysql .skills__score').css('width', '100%')
    $('#skills__javascript .skills__score').css('width', '70%')
    $('#skills__bootstrap .skills__score').css('width', '60%')
    
    this.scoreLoaded = true
  }
  
  hideSkillsScore()
  {
    $('.skills__score').css('width', '0')
  
    this.scoreLoaded = false
  }
}
