module.exports = {
    'MentorMeld Post' : function (browser) {
      browser
        .url('localhost:3000')
        .waitForElementVisible('body', 1000)
        .useXpath()
        .click("//*[contains(text(), 'Login')]")
        .useCss()
        .pause(1000)
    },

    'part two' : function(client) {
      client
        .setValue('input[type=email]', ['MentorMeldc2018', client.Keys.ENTER])
        .pause(1000)
        .setValue('input[type=password]', ['T3$t@m3nt', client.Keys.ENTER])
        .pause(5000)
        client.expect.element('body').to.be.present;
        client.expect.element('a').to.have.attribute('href').which.contains('/dashboard');
    },

    'part three' : function(browser) {
      browser
        .useXpath()
        .click("//*[contains(text(), 'Post')]")
        .useCss()
        .waitForElementVisible('input', 1000)
        .pause(2000)
        .end()
    }
  };