const globalVars = {
  NODE_ENV: 'development' as any as 'development' | 'production',
  BACKEND_HOST: 'http://localhost:4202',
};
console.log('START BACK INTO:', globalVars.BACKEND_HOST);
export default globalVars;
