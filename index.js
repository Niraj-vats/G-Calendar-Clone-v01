
const body = document.getElementsByTagName("body")[0];

const navbar = document.createElement("nav");
navbar.classList.add("navbar");

const leftSide = document.createElement("div");
leftSide.classList.add("leftSide");
const hamburgerLogo = document.createElement("i");
hamburgerLogo.classList.add("fa-solid","fa-bars");
hamburgerLogo.style.fontSize="1.4rem";

const calendarLogo = document.createElement("img");
calendarLogo.setAttribute("src","./Images/calendarLogo.png");
calendarLogo.style.width="32px";
const calendarText = document.createElement("p");
calendarText.classList.add("calendarText");
calendarText.textContent = "Calendar";

const todayBtn = document.createElement("button");
todayBtn.classList.add("todayBtn");
todayBtn.textContent ="Today";

const leftArrow = document.createElement("i");
leftArrow.classList.add("fa-solid","fa-chevron-left");
const rightArrow = document.createElement("i");
rightArrow.classList.add("fa-solid","fa-chevron-right");

const todayDate = new Date();
const dateandday = document.createElement("p");
dateandday.classList.add("currentdateandday");
dateandday.textContent =`${todayDate.getDate()} ${todayDate.toLocaleString('default', {month:'long'})} ${todayDate.getFullYear()}`;

//Mobile only
const calendarDropDown = document.createElement("button");
calendarDropDown.classList.add("calendarDropDown");
const currentMonthName = document.createTextNode("November");
const calendarDropDownArrow = document.createElement("i");
calendarDropDownArrow.classList.add("fa-solid","fa-chevron-down");

calendarDropDown.appendChild(currentMonthName);
calendarDropDown.appendChild(calendarDropDownArrow);


leftSide.appendChild(hamburgerLogo);
leftSide.appendChild(calendarLogo);
leftSide.appendChild(calendarText);
leftSide.appendChild(todayBtn);
leftSide.appendChild(leftArrow);
leftSide.appendChild(rightArrow);
leftSide.appendChild(dateandday);
leftSide.appendChild(calendarDropDown);

const rightSide = document.createElement("div");
rightSide.classList.add("rightSide");
const search = document.createElement("i");
search.classList.add("fa-solid","fa-magnifying-glass");
const date = new Date();
let day = date.getDate();
const currentDate = document.createElement("p");
currentDate.classList.add("currentDate");
currentDate.textContent =`${day}`;
const help = document.createElement("i");
help.classList.add("fa-solid","fa-question");
const settings = document.createElement("i");
settings.classList.add("fa-solid","fa-gear");

const dropDownDay = document.createElement("button");
dropDownDay.classList.add("dropDownDay");
const dayText = document.createTextNode("Month");
const downArrow = document.createElement("i");
downArrow.classList.add("fa-solid","fa-chevron-down");

dropDownDay.appendChild(dayText);
dropDownDay.appendChild(downArrow);


const twoBtnContainer = document.createElement("div");
twoBtnContainer.classList.add("twoBtnContainer");
const calendarBtn =document.createElement("button");
const calendarBtnIcon = document.createElement("i");
calendarBtnIcon.classList.add("fa-solid","fa-calendar-days");
calendarBtn.appendChild(calendarBtnIcon);
const taskBtn =document.createElement("button");
const taskBtnIcon = document.createElement("i");
taskBtnIcon.classList.add("fa-solid","fa-list-check");
taskBtn.appendChild(taskBtnIcon);

twoBtnContainer.appendChild(calendarBtn);
twoBtnContainer.appendChild(taskBtn);

const appsIcon =document.createElement("i");
appsIcon.classList.add("fa-solid","fa-mobile-button");
const userIcon =document.createElement("i");
userIcon.classList.add("fa-regular","fa-user");

rightSide.appendChild(search);
rightSide.appendChild(currentDate);
rightSide.appendChild(help);
rightSide.appendChild(settings);
rightSide.appendChild(dropDownDay);
rightSide.appendChild(twoBtnContainer);
rightSide.appendChild(appsIcon);
rightSide.appendChild(userIcon);

navbar.appendChild(leftSide);
navbar.appendChild(rightSide);

body.appendChild(navbar);
//NAVBAR DONE

const mainContainer = document.createElement("main");
mainContainer.classList.add("main-container");

const sidebar = document.createElement("div");
sidebar.classList.add("sidebar");
const createBtn = document.createElement("button");
createBtn.classList.add("createBtn");
createBtn.setAttribute("id","createTaskOrEvent");
const plusSignCreate = document.createElement("i");
plusSignCreate.classList.add("fa-solid","fa-plus");
const createBtnText = document.createTextNode("Create");
const chevronDownCreate = document.createElement("i");
chevronDownCreate.classList.add("fa-solid","fa-chevron-down"); 

createBtn.appendChild(plusSignCreate);
createBtn.appendChild(createBtnText);
createBtn.appendChild(chevronDownCreate);

const createEventAndTask = document.createElement("div");
createEventAndTask.classList.add("createEventAndTaskContainer");
createEventAndTask.setAttribute("id","createEventAndTaskContainer");
const eventText = document.createElement("p");
eventText.textContent="Event";
eventText.id="createEvent";
eventText.style.fontSize = "1rem";
const taskText = document.createElement("p");
taskText.textContent ="Task";
taskText.style.fontSize = "1rem";
taskText.id="createTask";

createEventAndTask.appendChild(eventText);
createEventAndTask.appendChild(taskText);


const calendarMainContainer = document.createElement("div");
calendarMainContainer.classList.add("calendar-container");
const calendarContainer = document.createElement("div");
calendarContainer.id ="calendar";

//Insert Calendar here


calendarMainContainer.appendChild(calendarContainer);

//Insert Calendar here
const searchContainer = document.createElement("div");
searchContainer.classList.add("search-container");
const pplIcon = document.createElement("i");
pplIcon.classList.add("fa-solid","fa-user-group");
const searchInput = document.createElement("input");
searchInput.setAttribute("type","text");
searchInput.setAttribute("id","searchpeople");
searchInput.setAttribute("placeholder","Search for people");

searchContainer.appendChild(pplIcon);
searchContainer.appendChild(searchInput);

const myCalendarsDropDownButton = document.createElement("div");
myCalendarsDropDownButton.classList.add("calendarsDropDownButtons");
myCalendarsDropDownButton.setAttribute("id","myCalendarBtn");

const myCalendarsText = document.createElement("p");
myCalendarsText.textContent ="My calendars";
const myCalendarsChevronUp = document.createElement("i");
myCalendarsChevronUp.classList.add("fa-solid","fa-chevron-up")
myCalendarsDropDownButton.appendChild(myCalendarsText);
myCalendarsDropDownButton.appendChild(myCalendarsChevronUp);

const myCalendarsDropDownList = document.createElement("div");
myCalendarsDropDownList.classList.add("calendarDropDownList");
myCalendarsDropDownList.setAttribute("id","calendardropdownList");
const myCalendarDropDownList1 = document.createElement("span");
myCalendarDropDownList1.classList.add("list");
const list1check = document.createElement("input");
list1check.type="checkbox";
list1check.id="list1";
const list1Name = document.createElement("label");
list1Name.textContent ="Do this";
list1Name.setAttribute("for","list1");
myCalendarDropDownList1.appendChild(list1check);
myCalendarDropDownList1.appendChild(list1Name);

const myCalendarDropDownList2 = document.createElement("span");
myCalendarDropDownList2.classList.add("list");
const list2check = document.createElement("input");
list2check.type="checkbox";
list2check.id="list2";
const list2Name = document.createElement("label");
list2Name.textContent ="Water the plants";
list2Name.setAttribute("for","list2");
myCalendarDropDownList2.appendChild(list2check);
myCalendarDropDownList2.appendChild(list2Name);

myCalendarsDropDownList.appendChild(myCalendarDropDownList1);
myCalendarsDropDownList.appendChild(myCalendarDropDownList2);


const otherCalendarsDropDownButton = document.createElement("div");
otherCalendarsDropDownButton.classList.add("calendarsDropDownButtons");
otherCalendarsDropDownButton.setAttribute("id","otherCalendarBtn");
const otherCalendarsText = document.createElement("p");
otherCalendarsText.textContent ="Other calendars";
const otherCalendarsChevronUp = document.createElement("i");
otherCalendarsChevronUp.classList.add("fa-solid","fa-chevron-up")
otherCalendarsDropDownButton.appendChild(otherCalendarsText);
otherCalendarsDropDownButton.appendChild(otherCalendarsChevronUp);

const otherCalendarsDropDownList = document.createElement("div");
otherCalendarsDropDownList.classList.add("calendarDropDownList");
otherCalendarsDropDownList.setAttribute("id","otherCalenders");
const otherCalendarDropDownList1 = document.createElement("span");
otherCalendarDropDownList1.classList.add("list");
const otherlist1check = document.createElement("input");
otherlist1check.type="checkbox";
otherlist1check.id="otherlist1";
const otherlist1Name = document.createElement("label");
otherlist1Name.textContent ="Do this";
otherlist1Name.setAttribute("for","otherlist1");
otherCalendarDropDownList1.appendChild(otherlist1check);
otherCalendarDropDownList1.appendChild(otherlist1Name);

otherCalendarsDropDownList.appendChild(otherCalendarDropDownList1);

sidebar.appendChild(createBtn);
sidebar.appendChild(createEventAndTask);
sidebar.appendChild(calendarMainContainer);
sidebar.appendChild(searchContainer);
sidebar.appendChild(myCalendarsDropDownButton);
sidebar.appendChild(myCalendarsDropDownList);
sidebar.appendChild(otherCalendarsDropDownButton);
sidebar.appendChild(otherCalendarsDropDownList);

mainContainer.appendChild(sidebar);
//SIDEBAR DONE

//MAIN
const midContainer = document.createElement("div");
midContainer.classList.add("midContainer"); 

const eventCalendarContainer = document.createElement("div");
eventCalendarContainer.setAttribute("id","eventOfDay");

midContainer.appendChild(eventCalendarContainer);

const mobileButtonsContainer = document.createElement("div");
mobileButtonsContainer.classList.add("mobileBtnsCont");
const outOfOffice = document.createElement("div");
const outOfOfficeText = document.createTextNode("Out of office");
const outOfOfficeLogo = document.createElement("i");
outOfOfficeLogo.classList.add("ri-calendar-close-fill");
outOfOffice.appendChild(outOfOfficeText);
outOfOffice.appendChild(outOfOfficeLogo);

const workingLocation = document.createElement("div");
const workingLocationText = document.createTextNode("Working location");
const workingLocationLogo = document.createElement("i");
workingLocationLogo.classList.add("ri-map-pin-line");
workingLocation.appendChild(workingLocationText);
workingLocation.appendChild(workingLocationLogo);

const taskMob = document.createElement("div");
const taskMobText = document.createTextNode("Task");
const taskMobLogo = document.createElement("i");
taskMobLogo.classList.add("ri-task-line");
taskMob.appendChild(taskMobText);
taskMob.appendChild(taskMobLogo);

const eventMob = document.createElement("div");
const eventMobText = document.createTextNode("Event");
const eventMobLogo = document.createElement("i");
eventMobLogo.classList.add("ri-calendar-event-fill");
eventMob.appendChild(eventMobText);
eventMob.appendChild(eventMobLogo);

const addNew = document.createElement("div");
addNew.classList.add("add-newBtn", "fa-solid","fa-plus");



mobileButtonsContainer.appendChild(outOfOffice);
mobileButtonsContainer.appendChild(workingLocation);
mobileButtonsContainer.appendChild(taskMob);
mobileButtonsContainer.appendChild(eventMob);
mobileButtonsContainer.appendChild(addNew);
midContainer.appendChild(mobileButtonsContainer);

mainContainer.appendChild(midContainer);
// MAIN

//Plugin
const pluginUI = document.createElement("div");
pluginUI.classList.add("plugins");
const googleKeep = document.createElement("img");
googleKeep.setAttribute("src","./Images/googleKeep.png");
const googleTasks = document.createElement("img");
googleTasks.setAttribute("src","./Images/googleTasks.png");
const googleContacts = document.createElement("img");
googleContacts.setAttribute("src","./Images/contactsLogo.png");
const googleMaps = document.createElement("img");
googleMaps.setAttribute("src","./Images/googleMaps.png");

const hrLine = document.createElement("hr");
hrLine.style.width="80%";
hrLine.style.color="#333";
hrLine.style.margin="0 auto";

const addPlugin = document.createElement("i");
addPlugin.classList.add("fa-solid","fa-plus");
addPlugin.style.margin="0 auto";
pluginUI.appendChild(googleKeep);
pluginUI.appendChild(googleTasks);
pluginUI.appendChild(googleContacts);
pluginUI.appendChild(googleMaps);
pluginUI.appendChild(hrLine);
pluginUI.appendChild(addPlugin);

mainContainer.appendChild(pluginUI);
//Plugin


body.appendChild(mainContainer);

//SIDEBAR FOR MObile view
const sidebarMobileView = document.createElement("div");
sidebarMobileView.classList.add("sidebarmobileview");
sidebarMobileView.setAttribute("id","sidebarmobileView");

const topLogoContainer = document.createElement("div");
topLogoContainer.classList.add("topLogoContainer");
const topLogo = document.createElement("img");
topLogo.setAttribute("src","./Images/google-logo.png");
const topLogoText = document.createElement("p");
topLogoText.textContent ="Calendar";
topLogoContainer.appendChild(topLogo);
topLogoContainer.appendChild(topLogoText);


const calendarViews = document.createElement("div");
calendarViews.classList.add("calendarViews");

const scheduleView = document.createElement("span");
const scheduleViewLogo = document.createElement("i");
scheduleViewLogo.classList.add("ri-archive-drawer-line");
const scheduleViewText = document.createTextNode("Schedule");
scheduleView.appendChild(scheduleViewLogo);
scheduleView.appendChild(scheduleViewText);

const dayView = document.createElement("span");
const dayViewLogo = document.createElement("i");
dayViewLogo.classList.add("ri-archive-drawer-line");
const dayViewText = document.createTextNode("Day");
dayView.appendChild(dayViewLogo);
dayView.appendChild(dayViewText);


const threeDaysView = document.createElement("span");
const threeDaysViewLogo = document.createElement("i");
threeDaysViewLogo.classList.add("ri-archive-drawer-line");
const threeDaysViewText = document.createTextNode("3 days");
threeDaysView.appendChild(threeDaysViewLogo);
threeDaysView.appendChild(threeDaysViewText);

const weekView = document.createElement("span");
const weekViewLogo = document.createElement("i");
weekViewLogo.classList.add("ri-archive-drawer-line");
const weekViewText = document.createTextNode("Week");
weekView.appendChild(weekViewLogo);
weekView.appendChild(weekViewText);

const monthView = document.createElement("span");
const monthViewLogo = document.createElement("i");
monthViewLogo.classList.add("ri-archive-drawer-line");
const monthViewText = document.createTextNode("Month");
monthView.appendChild(monthViewLogo);
monthView.appendChild(monthViewText);

calendarViews.appendChild(scheduleView);
calendarViews.appendChild(dayView);
calendarViews.appendChild(threeDaysView);
calendarViews.appendChild(weekView);
calendarViews.appendChild(monthView);

const sidebarMobileHR1 = document.createElement("hr");
sidebarMobileHR1.style.width = "100%";

const refreshContainer = document.createElement("span");
refreshContainer.classList.add("refreshContainer");
const refreshLogo = document.createElement("i");
refreshLogo.classList.add("fa-solid","fa-rotate-right");
const refreshText = document.createTextNode("Refresh");
refreshContainer.appendChild(refreshLogo);
refreshContainer.appendChild(refreshText);
const sidebarMobileHR2 = document.createElement("hr");
sidebarMobileHR2.style.width = "100%";

const accountsAndTask = document.createElement("div");
accountsAndTask.classList.add("accountsAndTask");
const accountHeader = document.createElement("div");
accountHeader.classList.add("accountHeader");
const accountText = document.createTextNode("niraj@gmail.com");
const accountLogo = document.createElement("i");
accountLogo.classList.add("fa-regular","fa-user");
accountHeader.appendChild(accountLogo);
accountHeader.appendChild(accountText);

const user1events = document.createElement("span");
user1events.classList.add("user1events");
const user1eventcheck = document.createElement("input");
user1eventcheck.type="checkbox";
user1eventcheck.id="user1eventcheck";
const user1eventtext = document.createElement("label");
user1eventtext.textContent ="Events";
user1eventtext.setAttribute("for","user1eventcheck");
user1events.appendChild(user1eventcheck);
user1events.appendChild(user1eventtext);

const user1tasks = document.createElement("span");
user1tasks.classList.add("user1tasks");
const user1taskcheck = document.createElement("input");
user1taskcheck.type="checkbox";
user1taskcheck.id="user1taskcheck";
const user1tasktext = document.createElement("label");
user1tasktext.textContent ="Tasks";
user1tasktext.setAttribute("for","user1taskcheck");
user1tasks.appendChild(user1taskcheck);
user1tasks.appendChild(user1tasktext);

const sidebarMobileHR3 = document.createElement("hr");
sidebarMobileHR3.style.width = "80%";
sidebarMobileHR3.style.marginLeft = "auto";

accountsAndTask.appendChild(accountHeader);
accountsAndTask.appendChild(user1events);
accountsAndTask.appendChild(user1tasks);
accountsAndTask.appendChild(user1tasks);


const birthdays = document.createElement("span");
birthdays.classList.add("birthdays");
const birthdaycheck = document.createElement("input");
birthdaycheck.type="checkbox";
birthdaycheck.id="birthdaycheck";
const birthdaytext = document.createElement("label");
birthdaytext.textContent ="Birthdays";
birthdaytext.setAttribute("for","birthdaycheck");
birthdays.appendChild(birthdaycheck);
birthdays.appendChild(birthdaytext);

const holidays = document.createElement("span");
holidays.classList.add("holidays");
const holidaycheck = document.createElement("input");
holidaycheck.type="checkbox";
holidaycheck.id="holidaycheck";
const holidaytext = document.createElement("label");
holidaytext.textContent ="Holidays";
holidaytext.setAttribute("for","holidaycheck");
holidays.appendChild(holidaycheck);
holidays.appendChild(holidaytext);

const sidebarMobileHR4 = document.createElement("hr");
sidebarMobileHR4.style.width = "100%";

const settingsMobile = document.createElement("span");
settingsMobile.classList.add("bottomConfigs");
const settingsMobileLogo = document.createElement("i");
settingsMobileLogo.classList.add("fa-solid","fa-gear");
const settingsMobileText = document.createTextNode("Settings");

settingsMobile.appendChild(settingsMobileLogo);
settingsMobile.appendChild(settingsMobileText);


const helpMobile = document.createElement("span");
helpMobile.classList.add("bottomConfigs");
const helpMobileLogo = document.createElement("i");
helpMobileLogo.classList.add("fa-solid","fa-question");
const helpMobileText = document.createTextNode("Help & feedback");

helpMobile.appendChild(helpMobileLogo);
helpMobile.appendChild(helpMobileText);

sidebarMobileView.appendChild(topLogoContainer);
sidebarMobileView.appendChild(calendarViews);
sidebarMobileView.appendChild(sidebarMobileHR1);
sidebarMobileView.appendChild(refreshContainer);
sidebarMobileView.appendChild(sidebarMobileHR2);
sidebarMobileView.appendChild(accountsAndTask);
sidebarMobileView.appendChild(sidebarMobileHR3);
sidebarMobileView.appendChild(birthdays);
sidebarMobileView.appendChild(holidays);
sidebarMobileView.appendChild(sidebarMobileHR4);

sidebarMobileView.appendChild(settingsMobile);
sidebarMobileView.appendChild(helpMobile);

body.appendChild(sidebarMobileView);


document.addEventListener('DOMContentLoaded', function() {
  var sideBarcalendar = document.getElementById('calendar');
  var sidebarcalendar = new FullCalendar.Calendar(sideBarcalendar, {
    initialView: 'dayGridMonth',
    height: '100%',
    selectable: true,
    longPressDelay: 0,
    // contentHeight:"auto",
    // handleWindowResize:true,
  });
  sidebarcalendar.render();
  sidebarcalendar.updateSize();

  var middleContainer = document.getElementById('eventOfDay');
  var midCalendar = new FullCalendar.Calendar(middleContainer, {
    timeZone: 'UTC',
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: null,
      center: null,
      right: null
    },
    selectable: true,
    longPressDelay: 0,
  });
  midCalendar.updateSize();
  midCalendar.render();
  const smallScreen = window.matchMedia('(max-width: 1024px)');

  function switchView() {
    if (smallScreen.matches) {
      midCalendar.changeView('timeGridDay');
    } else {
      midCalendar.changeView('dayGridMonth');
    }
  }

// Initial view setup
  switchView();

// Listen for changes in screen size
  smallScreen.addEventListener('change', switchView);

});


const bigScreen = window.matchMedia('(min-width: 1025px)');
const sidebarView = document.querySelector(".sidebar");
var sidebarOpen = false;
hamburgerLogo.addEventListener("click",function(){
  sidebarOpen =!sidebarOpen;
  if (sidebarOpen) {
    if (bigScreen.matches) {
      sidebarView.style.display ="none";
      window.dispatchEvent(new Event('resize'));
    } else {
      // Perform action for small screens when sidebar is open
      document.getElementById("sidebarmobileView").style.display ="flex";
    }
  } else {
    if (bigScreen.matches) {
      sidebarView.style.display = 'flex';
      window.dispatchEvent(new Event('resize'));
    } else {
      document.getElementById("sidebarmobileView").style.display ="none";
    }
  }
});

const createTaskOrEventBtn = document.getElementById("createTaskOrEvent");
const createTaskOrEventContainer = document.querySelector("#createEventAndTaskContainer");
var createTaskorEventContainerOpen = false;
createTaskOrEventBtn.addEventListener("click",function(){
  createTaskorEventContainerOpen =!createTaskorEventContainerOpen;
  if (createTaskorEventContainerOpen) {
    createTaskOrEventContainer.style.display ="flex";
  } else {
    createTaskOrEventContainer.style.display ="none";
  }
});

const myCalendarBtn = document.getElementById("myCalendarBtn");
const calendarList = document.querySelector("#calendardropdownList");
var calendarListOpen = true;
var calendarchevIcon = document.querySelector("#myCalendarBtn i");
myCalendarBtn.addEventListener("click", function(){
  calendarListOpen = !calendarListOpen;
  if(calendarListOpen){
    calendarList.style.display ="flex";
    calendarchevIcon.classList.remove("fa-chevron-down");
    calendarchevIcon.classList.add("fa-chevron-up");
  }else{
    calendarList.style.display ="none";
    calendarchevIcon.classList.remove("fa-chevron-up");
    calendarchevIcon.classList.add("fa-chevron-down");
  }
});


const otherCalendarBtn = document.getElementById("otherCalendarBtn");
const otherCalendarsList = document.getElementById("otherCalenders");
var otherCalenderOpen = true;
var otherCalendarchevIcon = document.querySelector("#otherCalendarBtn i");
otherCalendarBtn.addEventListener("click", function(){
  otherCalenderOpen = !otherCalenderOpen;
  if(otherCalenderOpen){
    otherCalendarsList.style.display ="flex";
    otherCalendarchevIcon.classList.remove("fa-chevron-down");
    otherCalendarchevIcon.classList.add("fa-chevron-up");
  }else{
    otherCalendarsList.style.display ="none";
    otherCalendarchevIcon.classList.remove("fa-chevron-up");
    otherCalendarchevIcon.classList.add("fa-chevron-down");
  }
});


// window.addEventListener('resize', function() {
//   window.dispatchEvent(new Event('resize'));
// });


document.addEventListener('click', function(event) {
  const isClickInsideSidebar = sidebarMobileView.contains(event.target);
  const isClickOnSidebarToggleButton = hamburgerLogo.contains(event.target);

  if (!isClickInsideSidebar && !isClickOnSidebarToggleButton) {
    sidebarMobileView.style.display = 'none';
  }
});

const mobScreen = window.matchMedia('(max-width: 1024px)');

const addNewBtn = document.querySelector(".add-newBtn");
document.addEventListener('click', function(event) {
  const isClickOnPopup = addNewBtn.contains(event.target);
  if( mobScreen.matches && !isClickOnPopup){
    document.querySelectorAll(".mobileBtnsCont > :not(.add-newBtn)").forEach(element => {
      element.style.display = "none";
    });
    addNewBtn.style.display = "block";
  }
});


var popupOpen = false;
addNewBtn.addEventListener("click",function(){
  popupOpen = !popupOpen;
  if(mobScreen.matches && popupOpen){
    document.querySelectorAll(".mobileBtnsCont > :not(.add-newBtn)").forEach(element => {
      element.style.display = "flex";
    });
    addNewBtn.style.display = "none";
  }else if(mobScreen.matches && popupOpen===false){
    document.querySelectorAll(".mobileBtnsCont > :not(.add-newBtn)").forEach(element => {
      element.style.display = "none";
    });
    addNewBtn.style.display = "block";
  }
})
