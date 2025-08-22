import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  languages = [
    { name: 'Java', icon: 'devicon-java-plain colored', frameworks: ['Spring', 'Hibernate', 'JDBC', 'Maven'] },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored', frameworks: ['Angular', 'React', 'Bootstrap', 'React Native', 'Ionic'] },
    { name: 'Go', icon: 'devicon-go-original-wordmark colored', frameworks: ['Gin', 'Gorm', 'Mux'] },
    { name: 'Kotlin', icon: 'devicon-kotlin-plain colored', frameworks: ['Jetpack Compose'] },
    { name: 'Python', icon: 'devicon-python-plain colored', frameworks: [] },
    { name: 'Base de datos', icon: 'devicon-azuresqldatabase-plain text-white', frameworks: ['MySQL', 'MariaDB', 'PostgreSQL', 'MongoDB'] }
  ];


  frameworksMap: Record<string, string> = {
    Spring: 'devicon-spring-original colored',
    Hibernate: 'devicon-hibernate-plain colored',
    JDBC: 'devicon-java-plain colored text-white',
    Maven: 'devicon-maven-plain colored',

    Angular: 'devicon-angularjs-plain colored',
    React: 'devicon-react-original-wordmark colored',
    'Jetpack Compose': 'devicon-jetpackcompose-plain colored',
    Bootstrap: 'devicon-bootstrap-plain colored',
    'React Native': 'devicon-reactnative-original-wordmark colored',
    Ionic: 'devicon-ionic-original text-danger',

    Gin: 'devicon-go-plain colored text-success',
    Gorm: 'devicon-go-plain colored text-danger',
    Mux: 'devicon-go-plain colored text-warning',

    MySQL: 'devicon-mysql-plain text-white',
    MariaDB: 'devicon-mariadb-original colored',
    PostgreSQL: 'devicon-postgresql-plain colored',
    MongoDB: 'devicon-mongodb-plain colored',

  };

  selectedLang: string | null = null;

  selectLanguage(lang: string) {
    this.selectedLang = lang === this.selectedLang ? null : lang;
  }

  get selectedFrameworks(): string[] {
    return this.languages.find(l => l.name === this.selectedLang)?.frameworks ?? [];
  }

}
