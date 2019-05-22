import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
public s1:string="";
public s2:string="";
public s3:string="";
public ar:any[]=[];
  constructor(private httpObj:HttpClient) { }

  ngOnInit() {
  }
public f1():void
{
	var url:string="http://localhost:3000/characters";
	this.httpObj.get(url).subscribe((data:any)=>
	{
	this.ar=data;
	})
}
public f2():void
{
	var deptObj:any={};
	deptObj.id=this.s1;
	deptObj.name=this.s2;
	deptObj.age=this.s3;
	var url:string="http://localhost:3000/characters";
	this.httpObj.post(url,deptObj).subscribe((data:any)=>
	{
	console.log("user details added successfully");
	})
}
public f3(dno:number):void
{
	var url:string="http://localhost:3000/characters/"+dno;
	this.httpObj.delete(url).subscribe((data:any)=>
	{
	console.log("user details deleted successfully");
	})

}
public f4(dno:number):void
{
	var url:string="http://localhost:3000/characters/"+dno;
	this.httpObj.get(url).subscribe((data:any)=>
	{
	this.s1=data.id;
	this.s2=data.name;
	this.s3=data.age;
	})

}
public f5():void
{
	var dno:string=this.s1;
	var url:string="http://localhost:3000/characters/"+dno;
	var deptObj:any={};
	deptObj.id=this.s1;
	deptObj.name=this.s2;
	deptObj.age=this.s3;

	this.httpObj.put(url,deptObj).subscribe((data:any)=>
	{
console.log("User details are updated successfully");
this.f1();
	})
}

}
