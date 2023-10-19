import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ITeamCard } from '../interface/interface';
import { TeamService } from './team.service';

export const chefResolver: ResolveFn<ITeamCard> = (route, state) => {
  return inject(TeamService).getChef(Number(route.paramMap.get('id')))
};
