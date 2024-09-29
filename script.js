document.getElementById('reaction-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const cookie = document.getElementById('cookie').value;
    const link = document.getElementById('link').value;
    const reaction = document.getElementById('reaction').value;

    const url = "https://rplikers-credit-mahiro.onrender.com/api/react";
    const params = {
        cookie: cookie,
        link: link,
        react: reaction
    };

    axios.get(url, { params })
        .then(response => {
            document.getElementById('response').textContent = 'Reaction sent successfully: ' + response.data;
        })
        .catch(error => {
            document.getElementById('response').textContent = 'Error: ' + error.message;
        });
});