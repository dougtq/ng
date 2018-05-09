import { Nav } from '../shared/nav.model';

export class NavService {
  getNavLinks(): Array<Nav> {
    return [
      {
        name: 'Restaurantes',
        route: '/restaurantes'
      },
      {
        name: 'Diversão',
        route: '/diversao'
      },
    ];
  }
}
