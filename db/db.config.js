import mongoose from 'mongoose';

const conect_DB = async () => {
return await mongoose
    .connect(process.env.DBMONGO_URL)
    .then((e) => {
      console.log('La DB esta Conectada');
    })
    .catch((err) => {
      console.error('Encontramos un error al conectar la DB: ', err);
    });
};

export default conect_DB;