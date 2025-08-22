import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Experience } from '../../interfaces/interfaces';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  experiencies: Experience[] = [
    {
      title: "Desarrollador y diseñador web", subtitle: "FiltroSalud 07/2025 - 08/2025",
      description: "La empresa filtrosalud necesitaba un cambio en su web, pasando de un sencillo sitio de Google Sites a una web más completa, hice uso de tecnologías como Boostrap para el diseño y lighthouse para el SEO, además ofrecí tutorización para despligue, tecnologías modernas y formas de facilitar su visibilidad en la web.",
      skills: [
        "devicon-html5-plain colored", "devicon-bootstrap-plain colored", "devicon-css3-plain-wordmark colored", "devicon-netlify-plain-wordmark colored",
      ]
    },
    {
      title: "Desarrollador fullstack en prácticas", subtitle: "Oasis Agro 03/2025 - 06/2025",
      description: "Dentro de la startup Oasis Agro, fui parte del equipo de desarrollo de su API, aplicación móvil y dashboard, trabajé haciendo uso de tecnologías como Go para backend, React para frontend y React Native para dispositivos móviles.",
      skills: [
        "devicon-go-original-wordmark colored", "devicon-go-plain colored text-danger", "devicon-typescript-plain colored",
        "devicon-react-original-wordmark colored", "devicon-reactnative-original-wordmark colored",
        "devicon-postgresql-plain colored", "devicon-jira-plain-wordmark colored"
      ]
    },
    {
      title: "FP Superior: Desarrollo de aplicaciones multiplataforma", subtitle: "IES Cantillana 09/2023 - 06/2025",
      description: "Mi formación principal orientada al desarrollo de aplicaciones en varios entornos, web, mobile, backend y frontend, aprendí lenguajes como Java, JavaScript y frameworks como Angular y Spring."
    },
    {
      title: "FP Media: Sistemas microinformáticos y redes", subtitle: "IES Cantillana 09/2021 - 06/2023",
      description: "Formación orientada a la administración básica de redes y sistemas, pude aprender a manejar sistemas Linux y Windows en sus versiones normales y server."
    }
  ]

}
