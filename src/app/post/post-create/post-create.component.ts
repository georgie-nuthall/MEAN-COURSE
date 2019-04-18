import { Component } from "@angular/core";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.scss"]
})
export class PostCreateComponent {
  public post: String = "No Content";
  public textInput: String = "";
  constructor() {}
  public onAddPost(): void {
    this.post = this.textInput;
  }
}
