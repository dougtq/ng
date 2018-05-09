import { Nav } from '../shared/nav.model';

export class NavService {
  getNavLinks(): Array<Nav> {
    return [
      {
        name: 'Restaurantes',
        route: '#'
      },
      {
        name: 'Diversão',
        route: '#'
      },
    ];
  }
}
