import type { ExtendedNavBarOption, NavBarOption } from "./NavBar.types";
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

export const extendedNavigationOptions: ExtendedNavBarOption[] = [
  {
    label: "Home",
    activeIcon: HomeFilled,
    inactiveIcon: HomeOutline,
    data: [],
  },
  {
    label: "Shorts",
    activeIcon: ShortsFilled,
    inactiveIcon: ShortsOutline,
    data: [],
  },
  {
    label: "Subscriptions",
    activeIcon: SubscriptionFilled,
    inactiveIcon: SubscriptionOutline,
    data: [],
  },
  {
    label: "You",
    activeIcon: ProfileFilled,
    inactiveIcon: ProfileOutline,
    data: [
      {
        label: "History",
        activeIcon: HomeFilled,
        inactiveIcon: HomeOutline,
      },
      {
        label: "Playlists",
        activeIcon: ShortsFilled,
        inactiveIcon: ShortsOutline,
      },
      {
        label: "Your Videos",
        activeIcon: SubscriptionFilled,
        inactiveIcon: SubscriptionOutline,
      },
      {
        label: "Watch Later",
        activeIcon: ProfileFilled,
        inactiveIcon: ProfileOutline,
      },
      {
        label: "Liked Videos",
        activeIcon: ProfileFilled,
        inactiveIcon: ProfileOutline,
      },
      {
        label: "Your Clips",
        activeIcon: ProfileFilled,
        inactiveIcon: ProfileOutline,
      },
    ],
  },
];
