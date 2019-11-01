### Spot actions

Fork to action-helpers to remove Protractor dependency. This requires to not use the global variable 'browser'. This requires that we build the WebDriver object from an existing selenium session id.

Eventually we will also try to execute these tasks via Puppeteer.