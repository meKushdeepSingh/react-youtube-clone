import type { NavBarOption } from "./NavBar.types";
import {
  HomeFilled,
  HomeOutline,
  ProfileFilled,
  ProfileOutline,
  ShortsFilled,
  ShortsOutline,
  SubscriptionFilled,
  SubscriptionOutline,
} from "../../../assets";

export const navigationOptions: NavBarOption[] = [
  {
    label: "Home",
    activeIcon: HomeFilled,
    inactiveIcon: HomeOutline,
  },
  {
    label: "Shorts",
    activeIcon: ShortsFilled,
    inactiveIcon: ShortsOutline,
  },
  {
    label: "Subscriptions",
    activeIcon: SubscriptionFilled,
    inactiveIcon: SubscriptionOutline,
  },
  {
    label: "You",
    activeIcon: ProfileFilled,
    inactiveIcon: ProfileOutline,
  },
];
