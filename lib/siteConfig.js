export const SITE_CONFIG = {
  siteUrl: "https://pilotaiprogram.com",
  socials: {
    facebook:
      process.env.NEXT_PUBLIC_FACEBOOK_URL ||
      "https://www.facebook.com/share/14WstrRAWTa/?mibextid=wwXIfr",
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
      "https://www.instagram.com/pilotai.program",
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ||
      "https://www.linkedin.com/company/pilotai-program",
  },
  contact: {
    email: "info@pilotaiprogram.com",
    phone: "+370 604 46088",
    location: "Kaunas, Lithuania",
    workingHours: "9.00 am - 6.00pm",
  },
};
