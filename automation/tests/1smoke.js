/* jshint expr: true */
module.exports = {
  tags: ['mentomeld'],
  'MentorMeld Homepage' : function (client) {
    client
      .url('localhost:3000')
      .pause(1000);

    client.expect.element('body').to.be.present;
    client.expect.element('a').to.have.attribute('href').which.contains('/auth/google');

    client.end();
  }
};
