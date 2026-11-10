import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Character } from '../../interfaces/character';

@Component({
  imports: [],
  selector: 'app-characters-page',
  styleUrl: './characters-page.css',
  templateUrl: './characters-page.html',
})
export class CharactersPage {
  private http = inject(HttpClient);

  // primera página de personajes de la API (pública, no necesita token)
  characters = toSignal(
    this.http.get<any>('https://rickandmortyapi.com/api/character').pipe(
      map(response => response.results as Character[])
    ),
    { initialValue: [] }
  );
}
