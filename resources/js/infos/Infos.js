import * as $ from "jquery";

export default class Infos {
  infosVisible = ''
  
  handleClick(target)
  {
    this.infosVisible === target
      ? this.hideInfos(target)
      : this.showInfos(target)
  }
  
  showInfos(target)
  {
    if (this.infosVisible !== '')
      this.hideInfos(this.infosVisible)
    
    $('#' + target).css('margin-left', 0)
    $('#menu_' + target).css('--primary', 'hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 0.8%))')
    
    this.infosVisible = target
  }
  
  hideInfos(target)
  {
    $('#' + target).css('margin-left', -3000)
    $('#menu_' + target).css('--primary', 'hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 1%), .1)')
    
    this.infosVisible = ''
  }
}
