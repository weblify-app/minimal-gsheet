(async () => {
    try {
      const url = new URL(window.location.href);
      const id = url.searchParams.get("id");
      const row = atob(id);
      const apiKey = "AIzaSyB6FVX0Td76-pdr_RXw1Co7ZFBk5mY1Xvo";
      const sheetId = "1NZ5c-FnZHEVWD98DlTIUs7MUBXobhUg2oOgmLR0j9mU";
      const range = `A${row}:B${row}`;
      const sheetApiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!${range}?key=${apiKey}`;
  
      const apiResponse = await fetch(sheetApiUrl);
      const data = await apiResponse.json();
      const values = data.values;
  
      document.getElementById(
        "client_name"
      ).innerHTML = `<span>${values[0][0]}</span>`;
  
      document.getElementById(
        "client_number"
      ).innerHTML = `<span>${values[0][1]}</span>`;
    } catch (error) {
      console.error(error);
      const errorHtml = `<p>Oops! What you are looking for could not be found</p>`;
      document.querySelector(".wrapper").innerHTML = errorHtml;
    }
  })();
  