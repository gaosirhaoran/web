import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// 导入angular 的模块  @angular/模块的名称
// platform
import { AppModule } from './app/app.module';
// 导入自定义模块  app/app.module.ts   ts省略

//把appModule模块最为root模块    启动angular的应用
platformBrowserDynamic().bootstrapModule(AppModule);
