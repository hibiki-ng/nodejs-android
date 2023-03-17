var prompt = '';

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'user',
                content: prompt,
              },
            ],
          }),
        rejectUnauthorized: false
      };
    console.log(prompt);
    console.log(requestOptions);
    
    showLoader();

    fetch('http://127.0.0.1:3000/ask', requestOptions)
    .then(response => response.json())
    .then(data => {
            hideLoader();
            const substringToReplace = "\n";
            const replacement = "<br>";

            const regex = new RegExp(substringToReplace, 'gi');
            const resultString = data.response.replace(regex, replacement);
            console.log(resultString);
            $('#main')[0].innerHTML = resultString;
        })
    .catch((error) => {
        console.error(error);
        hideLoader();
    });
}