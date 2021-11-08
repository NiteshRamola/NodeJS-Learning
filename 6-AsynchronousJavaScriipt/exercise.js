const getCustomer = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'Nitesh', 
        isGold: true, 
        email: 'nitesh' 
      });
    }, 4000);  
  });
}

const getTopMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  });
}

const sendEmail = (email, movies) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
}

const notifyCustomer = async () => {
  const customer = await getCustomer(1);
  console.log('Customer: ', customer);
  if (customer.isGold) {
    const movies = await getTopMovies();
    console.log('Top movies: ', movies);
    await sendEmail(customer.email, movies);
    console.log('Email sent...');
  }
}
notifyCustomer();