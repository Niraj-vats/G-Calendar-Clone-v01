function mobCal(){
  document.getElementById("calendarMobile").classList.toggle("calendarMobile")
}

function hideEvent(){
  document.getElementById("addEvent").style.display = "none"
}

function addEvent(){
  document.getElementById("addEvent").style.display = "flex"
}

function hideTask(){
  document.getElementById("addTask").style.display = "none"
}

function addTask(){
  document.getElementById("addTask").style.display = "flex"
}

window.onresize = function(){ location.reload(); }

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

      var calendarmobile = document.getElementById('calendarMobile');
      var calendarMobile = new FullCalendar.Calendar(calendarmobile, {
        initialView: 'dayGridMonth',
        height: '40vh',
        selectable: true,
        headerToolbar: {
          left: null,
          center: null,
          right: null
        },
        longPressDelay: 0
      });
      calendarMobile.render();
      calendarMobile.updateSize();

      const smallScreen1 = window.matchMedia('(min-width: 425px)');
  
    function switchView1() {
      if (smallScreen1.matches) {
          document.getElementById("calendarMobile").classList.toggle("calendarMobile")
          
      }
    }switchView1();

    smallScreen1.addEventListener('change', switchView1);

      
  
    var middleContainer = document.getElementById('eventOfDay');
    var midCalendar = new FullCalendar.Calendar(middleContainer, {
      timeZone: 'UTC',
      views: {
        agendaThreeDay: {
          type: 'timeGrid',
          duration: { days: 3 },
          buttonText: '3 day'
        },
        agendaFourDay: {
          type: 'timeGrid',
          duration: { days: 4 },
          buttonText: '4 day'
        },
        week:{
          type: 'timeGrid',
          duration: { days: 7 },
          buttonText: '7 day'
        }
      },
      events: [
        {
          title: 'Team Meeting',
          start: '2023-11-23T09:00:00',
          end: '2023-11-24T10:30:00',
          backgroundColor: 'blue',
          borderColor: 'blue'
        },
        {
          title: 'Lunch with John',
          start: '2023-11-25T12:00:00',
          end: '2023-11-25T13:30:00',
          backgroundColor: 'orange',
          borderColor: 'orange'
        },
        {
          title: 'Presentation',
          start: '2023-11-26T14:00:00',
          end: '2023-11-26T16:00:00',
          backgroundColor: 'red',
          borderColor: 'red'
        },
        {
          title: 'Project Deadline',
          start: '2023-11-28T10:00:00',
          end: '2023-11-28T17:00:00',
          backgroundColor: 'purple',
          borderColor: 'purple'
        }
      ],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: null,
        center: null,
        right: null
      },
      multiMonthMaxColumns: 4,
      selectable: true,
      longPressDelay: 0,
      allDaySlot:false,
      eventBackgroundColor:'blue',
    });
    midCalendar.updateSize();
    midCalendar.render();
    const smallScreen = window.matchMedia('(max-width: 1024px)');
  
    function switchView() {
      if (smallScreen.matches) {
        midCalendar.changeView('agendaThreeDay');
      } else {
        // midCalendar.changeView('dayGridMonth');
        midCalendar.changeView('dayGridMonth');
        // midCalendar.changeView('multiMonthYear');
      }
    }
  
  // Initial view setup
    switchView();
  
  // Listen for changes in screen size
    smallScreen.addEventListener('change', switchView);
  
  
    const clickedOnDay = document.getElementById("dayOption");//TimeGridView
    const clickedOnWeek = document.getElementById("weekOption");//7days
    const clickedOnMonth = document.getElementById("monthOption"); //dayGRidMonth
    const clickedOnYear = document.getElementById("yearOption"); //multiMonthYear
    const clickedOnSchedule = document.getElementById("scheduleOption"); //multiMonthYear
    const clickedOnFourDays = document.getElementById("fourDaysOption"); //multiMonthYear
    
    clickedOnDay.addEventListener("click", function(){
      midCalendar.changeView('timeGridDay');
    });
    clickedOnWeek.addEventListener("click", function(){
      midCalendar.changeView('week');
    });
    clickedOnMonth.addEventListener("click", function(){
      midCalendar.changeView('dayGridMonth');
    });
    clickedOnYear.addEventListener("click", function(){
      midCalendar.changeView('multiMonthYear');
    });
  
    clickedOnSchedule.addEventListener("click", function(){
      midCalendar.changeView('listDay');
    });
    clickedOnFourDays.addEventListener("click", function(){
      midCalendar.changeView('agendaFourDay');
    });
  
    //For Mobile
    const clickedOnMonthView = document.getElementById("monthView");
    const clickedOnWeekView = document.getElementById("weekView");
    const clickedOnthreeDaysView = document.getElementById("threeDaysView");
    const clickedOnDayView = document.getElementById("dayView");
    const clickedOnscheduleView = document.getElementById("scheduleView");
  
    clickedOnMonthView.addEventListener("click",function(){
      midCalendar.changeView('dayGridMonth');
      document.querySelector(".dec").style.display = "none";
      document.querySelector("#eventOfDay").style.display="flex"
    });
    clickedOnWeekView.addEventListener("click",function(){
      midCalendar.changeView('week');
      document.querySelector(".dec").style.display = "none";
      document.querySelector("#eventOfDay").style.display="flex"
    });
    clickedOnthreeDaysView.addEventListener("click",function(){
      midCalendar.changeView('agendaThreeDay');
      document.querySelector(".dec").style.display = "none";
      document.querySelector("#eventOfDay").style.display="flex"
    });
    clickedOnDayView.addEventListener("click",function(){
      midCalendar.changeView('timeGridDay');
      document.querySelector(".dec").style.display = "none";
      document.querySelector("#eventOfDay").style.display="flex";
    });
    clickedOnscheduleView.addEventListener("click",function(){
      midCalendar.changeView('listDay');
      document.querySelector(".dec").style.display = "flex"
      document.querySelector("#eventOfDay").style.display="none"
    });
  });

  const bigScreen = window.matchMedia('(min-width: 1025px)');
  const sidebarView = document.querySelector(".sidebar");
  var sidebarOpen = false;
  const hamburgerLogo = document.querySelector(".hamburgerLogo");
  const sidebarMobileView = document.getElementById("sidebarmobileView");
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
    }});
  
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

  const mobScreenLg = window.matchMedia('(min-width: 426px)');
  document.addEventListener('click', function(event) {
    if( mobScreenLg.matches){
      document.querySelector(".dec").style.display = "none";
      document.querySelector("#eventOfDay").style.display="flex";
      };
    }
  );
  
  
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
  
  const dateAndName = document.querySelector(".fc-timegrid-axis-cushion .fc-scrollgrid-shrink-cushion .fc-scrollgrid-sync-inner");
  
  
  const optionMenu = document.querySelector(".select-menu"),
         menuSelectBtn = optionMenu.querySelector(".select-btn"),
         selectOptions = optionMenu.querySelectorAll(".option"),
         sBtn_text = optionMenu.querySelector(".sBtn-text");
  
         menuSelectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       
  
  selectOptions.forEach(option =>{
      option.addEventListener("click", ()=>{
          let selectedOption = option.querySelector(".option-text").innerText;
          sBtn_text.innerText = selectedOption;
  
          optionMenu.classList.remove("active");
      })
    })
  
