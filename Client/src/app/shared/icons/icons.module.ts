import { NgModule } from '@angular/core';

import { TablerIconsModule } from 'angular-tabler-icons';
import { IconCamera, IconHeart, IconBrandGithub, IconDashboard, IconCar, IconCircleArrowLeft, IconMenu2,
         IconReportAnalytics, IconFlame, IconDeviceDesktopAnalytics, IconSquareX } from 'angular-tabler-icons/icons';

// Select some icons (use an object, not an array)
const icons = {
  IconCamera,
  IconHeart,
  IconBrandGithub,
  IconDashboard,
  IconCar,
  IconCircleArrowLeft,
  IconMenu2,
  IconReportAnalytics,
  IconFlame,
  IconDeviceDesktopAnalytics,
  IconSquareX
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
