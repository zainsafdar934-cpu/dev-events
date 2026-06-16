export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventItem[] = [
  {
    title: "React Summit 2026",
    image: "/images/event1.png",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands",
    date: "June 12-13, 2026",
    time: "09:00 AM GMT+2",
  },
  {
    title: "Google Cloud Next",
    image: "/images/event2.png",
    slug: "google-cloud-next-2026",
    location: "San Francisco, CA",
    date: "July 22-24, 2026",
    time: "08:30 AM PDT",
  },
  {
    title: "ETHGlobal Hackathon",
    image: "/images/event3.png",
    slug: "ethglobal-hackathon-2026",
    location: "Berlin, Germany",
    date: "August 5-8, 2026",
    time: "10:00 AM CEST",
  },
  {
    title: "JSNation Live",
    image: "/images/event4.png",
    slug: "jsnation-live-2026",
    location: "Lisbon, Portugal",
    date: "September 16-17, 2026",
    time: "09:30 AM WEST",
  },
  {
    title: "Microsoft Build",
    image: "/images/event5.png",
    slug: "microsoft-build-2026",
    location: "Las Vegas, NV",
    date: "October 12-14, 2026",
    time: "10:00 AM PDT",
  },
  {
    title: "Local Dev Meet & Hack",
    image: "/images/event6.png",
    slug: "local-dev-meet-hack-2026",
    location: "Austin, TX",
    date: "November 2, 2026",
    time: "05:00 PM CDT",
  },
];
