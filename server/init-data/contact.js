module.exports = [
  {
    name:"Wat Chedi Luang",
    phoneNumber:"+66 53 276 140",
    address:"103 Road King Prajadhipok Phra Singh, Muang District, Chiang Mai, 50200, Thailand",
    website:"http://www.med.cmu.ac.th/secret/admin/web/custom8.html",
    openTime:convertTimeToInteger(8,0),
    closeTime:convertTimeToInteger(19,0),
    workingDay:"Mon-Sun",
    description:"Wat Chedi Luang is a Buddhist temple in the historic centre of Chiang Mai, Thailand. " +
    "The current temple grounds were originally made up of three temples — Wat Chedi Luang, " +
    "Wat Ho Tham and Wat Sukmin."
  },
  {
    name: "Lert Ros (Mr.Lert)",
    phoneNumber: "+66 82 381 2421",
    address: "Soi 1, Ratchadamnoen Road | Opposite Vieng Mantra Hotel, Chiang Mai 50200, Thailand",
    website: "http://www.tripadvisor.com/Restaurant_Review-g293917-d4441843-Reviews-Lert_Ros-Chiang_Mai.html",
    openTime: convertTimeToInteger(12, 0),
    closeTime: convertTimeToInteger(21, 0),
    workingDay: "Mon-Sun",
    description: "Enjoy northern Thailand traditional foods with high quality Beers~"
  }
];

function convertTimeToInteger(hour,minute){
  return hour*60+minute;
}
