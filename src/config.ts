interface Configuration {
    socketEndpoint: string;
  }
  
  const configurations: Record<string, Configuration> = {
    development: {
      socketEndpoint: 'http://localhost:8080',
    },
    production: {
      socketEndpoint: 'https://example.com',
    },
  };
  
  const environment: string = process.env.NODE_ENV || 'development';
  const config: Configuration = configurations[environment];
  
  export default config;
  