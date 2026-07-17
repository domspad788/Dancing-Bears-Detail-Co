export type GalleryPhoto = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  mediaType?: "image" | "video";
  poster?: string;
  label?: string;
};

export type GalleryPair = {
  id: string;
  angle: string;
  before: GalleryPhoto;
  after: GalleryPhoto;
};

export type GalleryJob = {
  id: string;
  title: string;
  vehicle: string;
  service: string;
  dateLabel: string;
  summary: string;
  photoAspect?: "portrait" | "landscape";
  countLabel?: string;
  videoReel?: {
    before: GalleryPhoto[];
    after: GalleryPhoto[];
  };
  pairs: GalleryPair[];
};

export const galleryJobs: GalleryJob[] = [
  {
    id: "lexus-rx-video-reset",
    title: "LEXUS RX INTERIOR RESET",
    vehicle: "Lexus RX",
    service: "Base interior detail",
    dateLabel: "July 1, 2026",
    summary: "Eight short clips document this Lexus RX interior from the debris-filled driver and rear areas through the clean seats, floor mats, dashboard, and finished cabin.",
    countLabel: "8 video clips",
    pairs: [
      {
        id: "driver-seat-preview",
        angle: "Driver area",
        before: {
          src: "/gallery/jobs/lexus-rx-video-reset/before-driver-cabin.mp4",
          poster: "/gallery/jobs/lexus-rx-video-reset/before-driver-cabin.jpg",
          alt: "Before detailing video of the Lexus RX driver seat and floor area.",
          mediaType: "video",
          width: 540,
          height: 960,
        },
        after: {
          src: "/gallery/jobs/lexus-rx-video-reset/after-driver-seat.mp4",
          poster: "/gallery/jobs/lexus-rx-video-reset/after-driver-seat.jpg",
          alt: "After detailing video of the clean Lexus RX driver seat, steering wheel, and center console.",
          mediaType: "video",
          width: 540,
          height: 960,
        },
      },
    ],
    videoReel: {
      before: [
        {
          src: "/gallery/jobs/lexus-rx-video-reset/before-driver-cabin.mp4",
          poster: "/gallery/jobs/lexus-rx-video-reset/before-driver-cabin.jpg",
          alt: "Before detailing video of the Lexus RX driver cabin.",
          mediaType: "video",
          label: "Driver cabin",
        },
        {
          src: "/gallery/jobs/lexus-rx-video-reset/before-driver-mat.mp4",
          poster: "/gallery/jobs/lexus-rx-video-reset/before-driver-mat.jpg",
          alt: "Before detailing video showing debris on the Lexus RX driver mat.",
          mediaType: "video",
          label: "Driver mat",
        },
        {
          src: "/gallery/jobs/lexus-rx-video-reset/before-dashboard.mp4",
          poster: "/gallery/jobs/lexus-rx-video-reset/before-dashboard.jpg",
          alt: "Before detailing video showing dust on the Lexus RX dashboard and screen.",
          mediaType: "video",
          label: "Dashboard and screen",
        },
        {
          src: "/gallery/jobs/lexus-rx-video-reset/before-rear-cabin.mp4",
          poster: "/gallery/jobs/lexus-rx-video-reset/before-rear-cabin.jpg",
          alt: "Before detailing video of the Lexus RX rear cabin.",
          mediaType: "video",
          label: "Rear cabin",
        },
        {
          src: "/gallery/jobs/lexus-rx-video-reset/before-rear-footwell.mp4",
          poster: "/gallery/jobs/lexus-rx-video-reset/before-rear-footwell.jpg",
          alt: "Before detailing video showing debris in the Lexus RX rear footwell.",
          mediaType: "video",
          label: "Rear footwell",
        },
      ],
      after: [
        {
          src: "/gallery/jobs/lexus-rx-video-reset/after-driver-cabin.mp4",
          poster: "/gallery/jobs/lexus-rx-video-reset/after-driver-cabin.jpg",
          alt: "After detailing video of the clean Lexus RX driver cabin.",
          mediaType: "video",
          label: "Driver cabin",
        },
        {
          src: "/gallery/jobs/lexus-rx-video-reset/after-driver-seat.mp4",
          poster: "/gallery/jobs/lexus-rx-video-reset/after-driver-seat.jpg",
          alt: "After detailing video of the clean Lexus RX driver seat and center console.",
          mediaType: "video",
          label: "Driver seat and console",
        },
        {
          src: "/gallery/jobs/lexus-rx-video-reset/after-rear-cabin.mp4",
          poster: "/gallery/jobs/lexus-rx-video-reset/after-rear-cabin.jpg",
          alt: "After detailing video of the clean Lexus RX rear seating area.",
          mediaType: "video",
          label: "Rear cabin",
        },
      ],
    },
  },
  {
    id: "kia-k5-interior-reset",
    title: "KIA K5 INTERIOR RESET",
    vehicle: "Kia K5",
    service: "Base interior detail",
    dateLabel: "July 2, 2026",
    summary: "Five matched views show the clutter, dust, and floor debris cleared from this Kia K5's front cabin, rear seating area, dashboard, and driver footwell.",
    photoAspect: "landscape",
    pairs: [
      {
        id: "front-passenger-cabin",
        angle: "Front passenger cabin",
        before: {
          src: "/gallery/jobs/kia-k5-interior-reset/passenger-before.jpg",
          alt: "Before detailing: clothing, packaging, and loose items clutter the Kia K5's front passenger seat and footwell.",
          width: 1600,
          height: 900,
        },
        after: {
          src: "/gallery/jobs/kia-k5-interior-reset/passenger-after.jpg",
          alt: "After detailing: the Kia K5's front passenger seat, dashboard, console, and footwell are clean and orderly.",
          width: 1600,
          height: 900,
        },
      },
      {
        id: "rear-cabin",
        angle: "Rear seating area",
        before: {
          src: "/gallery/jobs/kia-k5-interior-reset/rear-cabin-before.jpg",
          alt: "Before detailing: clothing, cords, bags, and debris cover the Kia K5's rear seat and floor.",
          width: 1600,
          height: 900,
        },
        after: {
          src: "/gallery/jobs/kia-k5-interior-reset/rear-cabin-after.jpg",
          alt: "After detailing: the Kia K5's rear seat and floor are clear, vacuumed, and clean.",
          width: 1600,
          height: 900,
        },
      },
      {
        id: "dashboard-screen",
        angle: "Dashboard and screen",
        before: {
          src: "/gallery/jobs/kia-k5-interior-reset/dashboard-before.jpg",
          alt: "Before detailing: dust and specks cover the Kia K5's infotainment screen and dashboard trim.",
          width: 1600,
          height: 900,
        },
        after: {
          src: "/gallery/jobs/kia-k5-interior-reset/dashboard-after.jpg",
          alt: "After detailing: the Kia K5's dashboard, infotainment screen, and console are clean and polished.",
          width: 1600,
          height: 900,
        },
      },
      {
        id: "driver-footwell",
        angle: "Driver footwell",
        before: {
          src: "/gallery/jobs/kia-k5-interior-reset/driver-footwell-before.jpg",
          alt: "Before detailing: dirt, crumbs, and paper debris sit across the Kia K5's driver mat and door sill.",
          width: 1600,
          height: 900,
        },
        after: {
          src: "/gallery/jobs/kia-k5-interior-reset/driver-footwell-after.jpg",
          alt: "After detailing: the Kia K5's driver mat, pedals, seat edge, and door sill are clean.",
          width: 1600,
          height: 900,
        },
      },
      {
        id: "driver-cabin",
        angle: "Driver cabin",
        before: {
          src: "/gallery/jobs/kia-k5-interior-reset/driver-cabin-before.jpg",
          alt: "Before detailing: loose items and floor debris are visible throughout the Kia K5's driver area.",
          width: 1600,
          height: 900,
        },
        after: {
          src: "/gallery/jobs/kia-k5-interior-reset/driver-cabin-after.jpg",
          alt: "After detailing: the Kia K5's driver area, seat, floor, dashboard, and center console are clean.",
          width: 1600,
          height: 900,
        },
      },
    ],
  },
  {
    id: "black-sedan-interior-reset",
    title: "BLACK SEDAN INTERIOR RESET",
    vehicle: "Nissan sedan",
    service: "Base interior detail",
    dateLabel: "July 10, 2026",
    summary: "Four matching angles show the driver, passenger, and rear seating areas cleaned from top to bottom.",
    pairs: [
      {
        id: "driver-area",
        angle: "Driver area",
        before: {
          src: "/gallery/jobs/black-sedan-interior-reset/driver-before.jpg",
          alt: "Before detailing: debris and dirt across the black sedan's driver-side floor and mat.",
        },
        after: {
          src: "/gallery/jobs/black-sedan-interior-reset/driver-after.jpg",
          alt: "After detailing: the black sedan's driver-side floor and mat are clean.",
        },
      },
      {
        id: "rear-driver-area",
        angle: "Rear driver-side area",
        before: {
          src: "/gallery/jobs/black-sedan-interior-reset/rear-driver-before.jpg",
          alt: "Before detailing: dirt and debris in the black sedan's rear driver-side seating area.",
        },
        after: {
          src: "/gallery/jobs/black-sedan-interior-reset/rear-driver-after.jpg",
          alt: "After detailing: the black sedan's rear driver-side seating area is clean.",
        },
      },
      {
        id: "passenger-area",
        angle: "Front passenger area",
        before: {
          src: "/gallery/jobs/black-sedan-interior-reset/passenger-before.jpg",
          alt: "Before detailing: dirt and debris across the black sedan's front passenger floor and mat.",
        },
        after: {
          src: "/gallery/jobs/black-sedan-interior-reset/passenger-after.jpg",
          alt: "After detailing: the black sedan's front passenger floor and mat are clean.",
        },
      },
      {
        id: "rear-floor-area",
        angle: "Rear floor area",
        before: {
          src: "/gallery/jobs/black-sedan-interior-reset/rear-floor-before.jpg",
          alt: "Before detailing: debris and dirt across the black sedan's rear floor area.",
        },
        after: {
          src: "/gallery/jobs/black-sedan-interior-reset/rear-floor-after.jpg",
          alt: "After detailing: the black sedan's rear floor area is clean.",
        },
      },
    ],
  },
  {
    id: "highlander-mat-rescue",
    title: "HIGHLANDER MAT RESCUE",
    vehicle: "Toyota Highlander",
    service: "Floor mat deep clean",
    dateLabel: "July 6, 2026",
    summary: "Ground-in grit, debris, and staining were lifted from this all-weather floor mat.",
    pairs: [
      {
        id: "all-weather-mat",
        angle: "All-weather floor mat",
        before: {
          src: "/gallery/jobs/highlander-mat-rescue/mat-before.jpg",
          alt: "Before detailing: a Toyota Highlander all-weather floor mat covered in dirt and debris.",
        },
        after: {
          src: "/gallery/jobs/highlander-mat-rescue/mat-after.jpg",
          alt: "After detailing: the Toyota Highlander all-weather floor mat is clean.",
        },
      },
    ],
  },
];
