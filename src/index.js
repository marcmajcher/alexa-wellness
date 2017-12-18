'use strict';

/* eslint-env node */

const Alexa = require('alexa-sdk');
const steps = require('./steps');

const APP_ID = 'arn:aws:lambda:us-east-1:632159760450:function:alexaSelfCare';
const DEFAULT_STATE = 'intro';

const handlers = {
  LaunchRequest: function LaunchRequest() {
    this.emit(':ask', steps.intro.text, steps.intro.reprompt);
    this.attributes.state = DEFAULT_STATE;
  },
  SessionEndedRequest: function SessionEndedRequest() {
    this.emit(':tell', steps.stop);
  },
  CareIntent: function CareIntent() {
    // this.event.request.intent.slots.SLOTNAME.value
    // this.attributes[key]
    const state = this.attributes.state;
    if (state && steps[state]) {
      this.emit(':ask', steps[state].text, steps[state].reprompt || steps.reprompt);
    }
    else {
      this.emit('LaunchRequest');
    }
    //   // incorrect request type
    //   this.emit(':ask', NOT_FOUND_MESSAGE, NOT_FOUND_REPROMPT);
  },
  'AMAZON.HelpIntent': function HelpIntent() {
    this.emit(':ask', steps.intro, steps.intro_reprompt);
  },
  'AMAZON.CancelIntent': function CancelIntent() {
    this.emit(':tell', steps.stop);
  },
  'AMAZON.StopIntent': function StopIntent() {
    this.emit(':tell', steps.stop);
  },
  'AMAZON.YesIntent': function YesIntent() {
    const state = this.attributes.state;
    console.log('THIS IS THE STEATE', state);
    this.attributes.state = steps[state].next || DEFAULT_STATE;
    this.emit('CareIntent');
  },
  'AMAZON.NoIntent': function NoIntent() {},
};

exports.handler = (event, context) => {
  const alexa = Alexa.handler(event, context);
  alexa.APP_ID = APP_ID;
  alexa.appId = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
