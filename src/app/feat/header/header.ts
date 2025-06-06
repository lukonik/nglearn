import { Component } from '@angular/core';
import { GithubIcon } from "../../core/github-icon/github-icon";
import { ProjectName } from "../../core/project-name/project-name";

@Component({
  selector: 'app-header',
  imports: [GithubIcon, ProjectName],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
