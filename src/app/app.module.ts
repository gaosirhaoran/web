import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {HelloComponent} from './hello.component';
// 装饰器 (decorator)
// 是Es7的 一个提案
// 实际就是一个函数:会在程序编译阶段执行
// 导入 imports  :列举当前模块中需要使用的其他模块
// declarations 声明 :列举当前模块需要使用的组件
// bootstrap 启动:  指明根组件 shi who
@NgModule({
  imports:      [ BrowserModule ,FormsModule],  //
  declarations: [ AppComponent,HelloComponent ],  //声明 declarations
  bootstrap:    [ AppComponent ]  //启动  bootstrap
})
// 模块的内容是通过@NgModule 修饰器来完成的

export class AppModule { }
// 3w  原则
// who do?  do what?   why do?