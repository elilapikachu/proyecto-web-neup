import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {Navbar} from '../navbar/navbar';
import {Footer} from '../footer/footer';

@Component({
  selector: 'app-user-profile',
  imports: [RouterLink,Navbar, Footer],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss',
})
export class UserProfile {}
