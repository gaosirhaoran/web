import { Component } from '@angular/core';

// 容器标签
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
              <p>这就是传说中的angular2</p> 
              <p>{{message}}</p>
              <button (click)="btnClick()">你好</button>
              <p [title]='age'>这是一个段落</p>
              <p>
              {{ts}}</p>
              <input type="number" [(ngModel)]="ts">
              <ul>
              <li *ngFor="let stu of stus">
              {{stu.name}}
              </li>
              </ul>
              <hello></hello>
  `,
})
export class AppComponent  { 
  name = 'Angular';
  message='混蛋';
  age=0;
  ts='';
  btnClick(){
    console.log('----');
   this.age=Math.random()
  };
  stus:[{name:"xiaohua"},{name:"xiaoming"},{name:'xiaobai'}]
 }
// export class AppComponent{
//   name:String
//   message:String
//   age:Number
//   constructor(){
//     this.name='Angular';
//     this.message='你好';
//     this.age=1
//   }
//    btnClick(){
//         console.log('---------')
// this.age=Math.random()
//     }
// }
