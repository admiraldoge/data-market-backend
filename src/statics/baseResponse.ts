const baseResponse = {
  data: null,
  message: null,
  success: true,
};

const newBaseResponse = () => {
  return JSON.parse(JSON.stringify(baseResponse));
};

export default newBaseResponse;
