import __dirname from '../utils/dirname.utils.js';
import swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentación de la 4ta preentrega',
            version: '1.0.0',
            description: 'Definición de endpoints de la API del ecommerce'
        }
    },
    apis: [`${__dirname}/docs/**/*.yaml`]
};

const swaggerSpecs = swaggerJsDoc(swaggerOptions);

export default swaggerSpecs;