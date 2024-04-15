/**
 * Функция принимает строку и выводит её в поле активности на странице
 * @param {string} newActivityContent - строка для отображения пользователю
 */
function displayActivity(newActivityContent) {
    document.getElementById('activity').innerText = newActivityContent;
}

/**
 * Функция выводит сообщение об ошибке на страницу
  * @returns {void}
 */
function displayErrorMessage() {
    document.getElementById('error-message').innerText = 'К сожалению, произошла ошибка';
}


/**
 * Пункт 1: Функция выполняет запрос к стороннему русрсу и выводит активность
 * @returns {void}
 */
// export function getRandomActivity() {
//     fetch('https://www.boredapi.com/api/activity/')
//         .then(response => response.json())
//         .then(data => {
//             displayActivity(data.activity)
//         })
// }


/**
 * Пункт 3: Функция запроса к стороннему ресурсу с обработкой ошибок
 * @returns {void}
 */
// export function getRandomActivity() {
//     fetch('https://www.boredapi.com/api/activity/')
//         .then(response => response.json())
//         .then(data => {
//             displayActivity(data.activity)
//         })
//         .catch((err) => {
//             displayErrorMessage()
//         })
// }


/**
 * Пункт 4: Асинхронная функция запроса к стороннему ресурсу с обработкой ошибок
 * @returns {Promise<void>}
 */
// export async function getRandomActivity() {
//     try {
//         const response = await fetch('https://www.boredapi.com/api/activity/');
//         const data = await response.json()

//         displayActivity(data.activity)
//     } catch (err) {
//         displayErrorMessage()
//     }
// }

/**
 * Пункт 5: Асинхронная функция запроса к стороннему ресурсу с обработкой ошибок с ежеминутным обновлением
 * @returns {Promise<void>}
 */
// export async function getRandomActivity() {
//     try {
//         const response = await fetch('https://www.boredapi.com/api/activity/');
//         const data = await response.json();

//         displayActivity(data.activity);

//         setTimeout(getRandomActivity, 60000);
//     } catch (err) {
//         displayErrorMessage()
//     }
// }

/**
 * Пункт 6a: Асинхронная функция запроса к стороннему ресурсу. Возвращает новую активность
 * @returns {Promise<string>}
 */
async function getRandomActivity() {
    const response = await fetch('https://www.boredapi.com/api/activity/');
    const data = await response.json();
    return data.activity;
}

/**
 * Пункт 6b: Функция для запроса и отображения новой активности каждые 60 секунд
 * @returns {Promise<void>}
 */
export async function updateActivity() {
    try {
        const newActivity = await getRandomActivity();
        displayActivity(newActivity);

        setTimeout(updateActivity, 60000);

    } catch (error) {
        displayErrorMessage()
    }
}