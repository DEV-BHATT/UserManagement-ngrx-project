import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { UserService } from './services/user.service';
import { UserEffects } from './state/user.effects';
import { userReducer } from './state/user.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
      provideHttpClient(),
    provideStore({ users: userReducer }),
    provideEffects([UserEffects]),
    UserService,
     provideStoreDevtools(),
    provideRouter(routes),
     provideAnimations(),
  ]
};


