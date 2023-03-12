import { NgModule } from '@angular/core';

import { TablerIconsModule } from 'angular-tabler-icons';
import { IconCamera, IconHeart, IconBrandGithub, IconDashboard } from 'angular-tabler-icons/icons';

// Select some icons (use an object, not an array)
const icons = {
  IconCamera,
  IconHeart,
  IconBrandGithub,
  IconDashboard
};

@NgModule({
  imports: [
    TablerIconsModule.pick(icons)
  ],
  exports: [
    TablerIconsModule
  ]
})
export class IconsModule { }
