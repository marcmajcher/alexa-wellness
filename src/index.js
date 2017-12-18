'use strict';

/* eslint-env node */

const Alexa = require('alexa-sdk');
const steps = require('./steps');

const APP_ID = 'amzn1.ask.skill.84859e9d-f975-4ce9-bf42-7ee18e28cfcf';
const DEFAULT_STATE = 'intro';

const handlers = {
  LaunchRequest: function LaunchRequest() {
    this.attributes.resume = (this.attributes.state.length > 0);
    if (this.attributes.resume) {
      this.emit(':ask', steps.resume, steps.resume);
    }
    else {
      this.attributes.state = DEFAULT_STATE;
      this.emit('CareIntent');
    }
  },
  SessionEndedRequest: function SessionEndedRequest() {
    this.emit(':tell', steps.stop);
  },
  CareIntent: function CareIntent() {
    const state = this.attributes.state;
    if (state && steps[state]) {
      this.emit(':ask', steps[state].text, steps[state].reprompt || steps.reprompt);
    }
    else {
      this.emit('LaunchRequest');
    }
  },
  'AMAZON.HelpIntent': function HelpIntent() {
    this.emit(':ask', steps.help.text, steps.help.reprompt);
  },
  'AMAZON.CancelIntent': function CancelIntent() {
    this.emit(':tell', steps.stop);
  },
  'AMAZON.StopIntent': function StopIntent() {
    this.emit(':tell', steps.stop);
  },
  'AMAZON.YesIntent': function YesIntent() {
    if (!this.attributes.resume) {
      this.attributes.state = steps[this.attributes.state].yes || DEFAULT_STATE;
    }
    this.attributes.resume = false;
    this.emit('CareIntent');
  },
  'AMAZON.NoIntent': function NoIntent() {
    this.attributes.state = steps[this.attributes.state].no || DEFAULT_STATE;
    this.emit('CareIntent');
  },
};

exports.handler = (event, context) => {
  const alexa = Alexa.handler(event, context);
  alexa.APP_ID = APP_ID;
  alexa.appId = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
