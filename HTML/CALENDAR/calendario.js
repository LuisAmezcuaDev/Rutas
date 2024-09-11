'use strict'

document.addEventListener('DOMContentLoaded', function() {
     // Obtén una referencia al elemento del calendario
  var calendarEl = document.getElementById('calendario1');

  // Crea el objeto del calendario de FullCalendar
  var calendar = new FullCalendar.Calendar(calendarEl, {
      timeZone: 'UTC',
      initialView: 'dayGridMonth',
      events: 'CALENDAR/datoseventos.php?accion=listar',
      editable: false,
      selectable: true
  }); 
      
  // Renderiza el calendario
  calendar.render();
  });
  

