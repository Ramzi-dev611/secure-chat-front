import { RouterModule, Routes } from "@angular/router";
import { ChatRoomComponent } from "./pages/chat-room/chat-room.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: LandingPageComponent },
    // { path: 'register', component: undefined },
    { path: 'chatroom', component: ChatRoomComponent }
]
export const Routing = RouterModule.forRoot(routes)