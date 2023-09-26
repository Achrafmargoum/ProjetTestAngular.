import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent {

hero:any;
id :any ;
constructor ( private act:ActivatedRoute  ,private router :Router,private _shared : SharedService) { }

update(){

      this._shared.modifierHero(this.id,this.hero)
      .subscribe(
        res=>{
          console.log(res);   
          this.router.navigate(['/list']);       
        },
        err=>{
          console.log(err);
          
        }
        
        )



}
ngOnInit (): void{  


  this.id=this.act.snapshot.paramMap.get('id');
  this._shared.getHeroById(this.id)
  .subscribe(
    res=>{
      this.hero=res
      
      
    },
    err=>{
      console.log(err);
      
    }
  )
}

}
