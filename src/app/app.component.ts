import { Component , OnChanges, SimpleChanges} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
})
export class AppComponent {
  showPara:boolean=false;

  constructor(){

  }
  title="Initial Data";
  display(){
this.showPara=true;
  setTimeout(() => this.showPara=false, 5000)
  }
  changeLog:any;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    for (const title in changes) {
      const chng = changes[title];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${title}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
}
