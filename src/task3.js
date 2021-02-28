
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const makeTransaction = (transaction) => {
    const delay = randomIntegerFromInterval(200, 500);
    return new Promise((resolve, reject) => {
        let id = transaction.id;
        setTimeout(() => {
            const canProcess = Math.random() > 0.3;
            if (canProcess) {
                const objectResult = { id, delay };
                resolve(objectResult);
            }
            reject(transaction.id);
        }, delay);
    });
};
// const logSuccess = (id, time) => {
//     console.log(`Transaction ${id} processed in ${time}ms`);
// };
const logSuccess = (result) => {
    console.log(`Transaction ${result.id} processed in ${result.delay}ms`);
};
const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
};


/*
 * Работает так
 */
// makeTransaction({ id: 70, amount: 150 });
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
/*
 * Должно работать так
 */

makeTransaction({ id: 70, amount: 150 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 71, amount: 230 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 72, amount: 75 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 73, amount: 100 })
    .then(logSuccess)
    .catch(logError);


// const makeTransaction = (transaction, onSuccess, onError) => {
//     const delay = randomIntegerFromInterval(200, 500);

//     setTimeout(() => {
//         const canProcess = Math.random() > 0.3;

//         if (canProcess) {
//             onSuccess(transaction.id, delay);
//         } else {
//             onError(transaction.id);
//         }
//     }, delay);
// };

// const logSuccess = (id, time) => {

//     console.log(`Transaction ${id} processed in ${time}ms`);
// };

// const logError = id => {
//     console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

// const makeTransaction = (transaction) => {
//     const delay = randomIntegerFromInterval(200, 500);
//     const { time = delay } = transaction;

//     const p1 = new Promise((resolve) => {
//         resolve(delay);
//     })
//     const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const canProcess = Math.random() > 0.3;
//             if (canProcess) {
//                 resolve(transaction.id);
//             }
//             reject(transaction.id);
//         }, delay);

//     });
//     return Promise.all([p1, p2]);
// };
//     return Promise.all([p1, p2]);
// };
