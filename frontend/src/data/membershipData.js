// src/data/membershipData.js

// (Optional) You can delete this if you're now using membershipPrices.js instead.
export const membershipOptions = [
    {
      key: "adult",
      title: "Adult",
      price: "$155 / year",
      notes: "Full membership for adults.",
      featured: true,
      bullets: ["Court access", "Club competitions & socials", "Member rates"],
    },
    {
      key: "student",
      title: "Student",
      price: "$125 / year",
      notes: "Valid student ID required.",
      bullets: ["Court access", "Member rates", "Great for uni students"],
    },
    {
      key: "junior",
      title: "Junior",
      price: "$105 / year",
      notes: "Under 18 membership.",
      bullets: ["Junior programs", "Coaching pathways", "Court access (conditions)"],
    },
    {
      key: "family",
      title: "Family",
      price: "$340 / year",
      notes: "Best value for families.",
      bullets: ["2 adults + children", "Club activities", "Member rates"],
    },
  ];
  
  // Links used by Membership page
  export const joinLinks = {
    onlineForm: "https://example.com/join", // update later
    
  };
  
  // Contact + payment info
  export const contactDetails = {
    email: "gwtc.info626@gmail.com",
    mobile: "+61400675103",
  
    // PayID (set these properly when ready)
    payId: "", // e.g. "treasurer@gwtc.com.au" or "04xx xxx xxx"
    payIdName: "Glen Waverley Tennis Club", // optional
    paymentReferenceHint: "Use your full name as the payment reference.",
    payIdQrPath: "", // e.g. "/gwtc-payid-qr.png" (file goes in /public)
  };
  
  // Downloads (PDF in /public)
  export const downloads = {
    membershipPdf: "/GWTC_Membership_Form.pdf",
  };
  