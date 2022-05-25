export const isTestingEnvironment = () => {
  return (
    process.env.JEST_WORKER_ID !== undefined || process.env.NODE_ENV === "test"
  );
};
