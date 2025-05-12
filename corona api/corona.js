let datePicker = document.getElementById('datePicker');
let stateTableBody = document.querySelector('#stateTable tbody');

    let allData = [];

    fetch('https://api.rootnet.in/covid19-in/stats/history')
      .then(res => res.json())
      .then(data => {
        allData = data.data;

        // Set min and max for date input based on data
        if (allData.length > 0) {
          let minDate = allData[0].day;
          let maxDate = allData[allData.length - 1].day;
          datePicker.min = minDate;
          datePicker.max = maxDate;
        }
      });

    datePicker.addEventListener('change', () => {
      let selectedDate = datePicker.value;
      let dataForDate = allData.find(entry => entry.day === selectedDate);

      stateTableBody.innerHTML = '';

      if (!dataForDate) {
        stateTableBody.innerHTML = '<tr><td colspan="4">No data available for selected date.</td></tr>';
        return;
      }

      dataForDate.regional.forEach(state => {
        let row = document.createElement('tr');
        row.innerHTML = `
          <td>${state.loc}</td>
          <td>${state.totalConfirmed}</td>
          <td>${state.discharged}</td>
          <td>${state.deaths}</td>
        `;
        stateTableBody.appendChild(row);
      });
    });