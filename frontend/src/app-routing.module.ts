import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventAdderComponent } from "./app/event-adder/event-adder.component";
import { EventsFeedComponent } from "./app/events-feed/events-feed.component";

const routes: Routes = [
    {path: "", component: EventsFeedComponent},
    {path: "event-adder", component: EventAdderComponent}
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}