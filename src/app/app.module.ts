import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// markdown options
export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();
  // headings
  renderer.heading = (text: string, level: number) => {
    return `´<wa-text size="header-2" id=${text.replace(/\s+/g, '-').toLowerCase()} class="h${level}">${text}</wa-text>`;
  };
  // paragraphs
  renderer.paragraph = (text: string) => {
    return `<wa-text size="body-1">${text}</wa-text>`;
  };
  // links
  renderer.link = (href: string, title: string, text: string) => {
    return `<a href="${href}">${text}</a>`;
  }
  // dividers
  renderer.hr = ()  => {
    return `<wa-divider spacing="m"></wa-divider>`
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
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
