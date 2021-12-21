import mongoose from 'mongoose';

const conectarBD = async () => {
  return await mongoose
    .connect(process.env.DBMONGO_URL)
    .then(() => {
      console.log('Base de Datos de AdminProjects Conectada exitosamente');
    })
    .catch((e) => {
      console.error('Error conectando a la bd', e);
    });
};

export default conectarBD;
