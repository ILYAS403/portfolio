import { Component } from '@angular/core';
import { Home } from './sections/home/home';
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Experience } from './sections/experience/experience';
import { Contact } from './sections/contact/contact';
import { Navbar } from './shared/navbar/navbar';
import { Projects } from './sections/projects/projects';
import { Footer } from './sections/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, About, Skills, Experience, Projects, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}