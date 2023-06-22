var prompt = '';
var techno = '';
var code = '';

function showLoader() {
    $('#loader').show();
}

function hideLoader() {
    $('#loader').hide();
}

function getPrompt() {

    prompt = $('#input')[0].value;
    let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'user',
                content: prompt,
              },
            ],
          }),
          mode: 'cors',
        rejectUnauthorized: false
      };
    console.log(prompt);
    console.log(requestOptions);
    
    showLoader();

    fetch('http://127.0.0.1:3000/ask', requestOptions)
      .then(response => {
        console.log(response);
        return response.json();
      })    
      .then(data => {
            hideLoader();
            if (data.response.includes('<')) {
              $('#main')[0].innerText = resultString;
            } else {
              const substringToReplace = "\n\n";
              const replacement = "<br>";

              const regex = new RegExp(substringToReplace, 'gi');
              var resultString = data.response.replace(regex, replacement);
              //resultString = resultString.replace('```', '<code>');
              //resultString = resultString.replace('```', '</code>');
              console.log(resultString);
              
              $('#main')[0].innerHTML = resultString;
            }
        })
    .catch((error) => {
        console.error(error);
        hideLoader();
        getPrompt();
    });
}