import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Project } from '../../interfaces/interfaces';
declare var bootstrap: any;

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
      name: "HTTP-Responder-Discord",
      url: "https://github.com/rmarcosr/HTTP-Responder-Discord",
      completed: true,
      start: new Date("2025-6-01"),
      end: new Date("2025-11-05"),
      description: "Un bot permite realizar peticiones HTTP directamente desde Discord, usando comandos slash como interfaz, según la respuesta del servidor, el bot la muestra directamente en el chat.",
      images: ["/http-discord.jpg", "/http-discord2.jpg"]
    },
    {
      name: "RasJob",
      url: "https://github.com/rmarcosr/rasJob",
      completed: true,
      start: new Date("2025-7-14"),
      end: new Date("2025-8-14"),
      description: "Aplicación desarrollada con Kotlin para administrar registros de trabajo con capacidad para importar e importar a csv",
      images: ["/rasjob1.png", "/rasjob2.png", "/rasjob3.png"]

    },
  ]
  selectedImage: string | null = null;

  openImage(img: string) {
    this.selectedImage = img;
    const modalEl = document.getElementById('imageModal');
    if (modalEl) {
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    }
  }

}

