import { Component, OnInit,Inject  } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';
import { faCameraRetro  } from '@fortawesome/free-solid-svg-icons';
import { faUser  } from '@fortawesome/free-solid-svg-icons';
import { faBuilding  } from '@fortawesome/free-solid-svg-icons';
import { faUsers  } from '@fortawesome/free-solid-svg-icons';
import { faClock  } from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { MainservService } from '../mainserv.service';
import { DOCUMENT } from '@angular/common'; 
@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css']
})
export class FormpageComponent implements OnInit {
  faPhone=faPhone;
  faUsers=faUsers;
  faEnvelope=faEnvelope;
  faMapMarkerAlt=faMapMarkerAlt;
  faCameraRetro=faCameraRetro;
  faUser=faUser;
  faBuilding=faBuilding;
  faClock=faClock;
  marriageTypes=['Engagement','Wedding (Only)','Reception (Only)','Wedding & Reception','Normal Hindu Wedding','Brahmin Wedding','Muslim Wedding','Christian Wedding','Telugu Wedding','Baby Shower','Birthday Party','Others'];
  specialReq=['Led wall 6x8','Photobooth','Outdoor cinematic video','Jimmy jib','Drone','Live steaming','Extra photographer and videographer','Make up artist','costume designer','Decorations']
  details;
  loading=false;
  success=false;
  error=false;
  constructor(@Inject(DOCUMENT) document,private fb:FormBuilder,private serv:MainservService) {
    this.details=fb.group({
      firstName:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.email]),
      typeOfWedding:new FormControl('',[Validators.required]),
      location:new FormControl('',[Validators.required]),
      venue:new FormControl('',[Validators.required]),
      expectedNoOfGuests:new FormControl('',[]),
      startDate:new FormControl('',[Validators.required]),
      startTime:new FormControl('',[Validators.required]),
      endDate:new FormControl('',[Validators.required]),
      endTime:new FormControl('',[Validators.required]),
      message:new FormControl('',[]),
      extraSession:new FormControl('',[]),
      specialReq:new FormControl([],[]),
    })
   }

  ngOnInit(): void {
    
  }
  checkSpecialReq(item){
    let list=this.details.value.specialReq;
    if(list.indexOf(item)>-1){
      list.splice(list.indexOf(item),1);
    }else{
      list.push(item);
    }
    this.details.controls.specialReq.setValue(list);
  }
  getQuotes(){
    if(this.details.valid){
      this.success=false;
      this.error=false;
      this.loading=true;
      // console.log(this.details.value);
      this.serv.getQuote(this.details.value).subscribe((data)=>{
        console.log(data);
        this.loading=false;
        this.success=true;
        this.details.reset();
        this.details.controls.specialReq.setValue([]);
        setTimeout(()=>{
          window.scrollTo(0,document.body.scrollHeight);
        },0);
      },(err)=>{
        this.loading=false;
        this.error=true;
        console.log(err);
      });
    }
  }

}
