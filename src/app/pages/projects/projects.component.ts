import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Project } from '../../interfaces/interfaces';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      name: "RasJob",
      url: "https://github.com/rmarcosr/rasJob",
      completed: true,
      start: new Date("2025-7-14"),
      end: new Date("2025-8-14"),
      description: "Aplicación desarrollada con Kotlin para administrar registros de trabajo con capacidad para importar e importar a csv",
      images: ["/rasjob1.png", "/rasjob2.png", "/rasjob3.png"]

    },
    {
      name: "BetterComponents",
      url: "https://github.com/rmarcosr/better-components",
      completed: false,
      start: new Date("2025-6-18"),
      end: undefined,
      description: "Libería de componentes para Angular 18 desarrollada con HTML, CSS y TypeScript",
      images: ["/bettercomponents1.png", "/bettercomponents2.png"]
    }
  ]
}
