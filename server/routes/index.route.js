import PatientRoute from "./patient.route.js";

export let initWebRouter = (app) => {
  app.use("/api/v1/patient", PatientRoute);
};
