module.exports = (app, errors) => {
  app.get('/get-user-form/user/:userId', async (req, res, next) => {
    return res.send({
      occupationCode: 111,
      amountOfYears: '1-3',
      amountOfEmployees: '1-3',
      phone: '+972123213123',
    });
  });
};
