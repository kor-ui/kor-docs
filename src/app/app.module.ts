import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { AngularFireModule } from '@angular/fire';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';

// markdown options
export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();
  // headings
  renderer.heading = (text: string, level: number) => {
    return `<kor-text size="header-2" id=${text.replace(/\s+/g, '-').toLowerCase()} class="h${level}">${text}</kor-text>`;
  };
  // paragraphs
  renderer.paragraph = (text: string) => {
    return `<kor-text size="body-1" color="var(--text-2)">${text}</kor-text>`;
  };
  // links
  renderer.link = (href: string, title: string, text: string) => {
    return `<a href="${href}" class="link">${text}</a>`;
  }
  // dividers
  renderer.hr = ()  => {
    return `<kor-divider spacing="l"></kor-divider>`
  }
 
  return {
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
  };
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    SandboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory
      },
    }),
  ],
  providers: [DataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
