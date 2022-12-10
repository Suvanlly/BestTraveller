/* eslint-disable semi */
module.exports = {
  api: {
    backend_api:
      process.env.NODE_ENV === "production"
        ? "http://bestraveler-env-1.eba-4tnvsdig.ap-southeast-2.elasticbeanstalk.com" //"https://bestravellers.net"
        : "http://localhost:8000",
  },
}
