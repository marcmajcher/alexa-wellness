'use strict';

/* eslint-env node */
/* eslint quotes: 0 */

module.exports = {
  skill_name: 'Self Care',
  reprompt: 'Would you like to continue?',
  resume: 'Welcome back to your self care routine. Would you like to pick up where you left off?',
  stop: 'Good bye, and thank you for taking care of yourself.',

  help: {
    text: `This is meant to be an interactive flow chart for people who struggle with self care, executive dysfunction, and/or who have trouble reading internal signals. It's designed to take as much of the weight off of you as possible, so each decision is very easy and doesn't require much judgment.
    Set aside some time - maybe an hour total - to allow yourself to work through each step. Don't rush or skip ahead - just follow the directions. Self care is important, and you deserve to devote some time to it.
    You may want to go through this routine as soon as you wake up, as a preventative measure. Are you ready to begin?`,
    reprompt: `Are you ready to begin?`,
    yes: 'step001'
  },

  intro: {
    text: `I'm sorry you're not feeling well. Let's take some time to work through some steps to help you feel better. Are you ready to begin?`,
    reprompt: `Are you ready to begin?`,
    yes: 'step001'
  },

  step001: {
    text: `Have you eaten in the last four hours?`,
    yes: 'step002',
    prompts: [{
        text: `I could use a snack.`,
        target: 'step001a'
      },

      {
        text: `No, I need a meal.`,
        target: 'step001b'
      }
    ]
  },

  step001a: {
    text: `When you need a snack, just pop some easy food in your mouth.
If there's a specific food you want, it's okay to eat it! You don't have to eat perfectly healthy all the time-- no one does! Just also use your brain a little, and notice the quantity you're eating, and how healthy it is for you. You're probably just fine at trusting your gut and knowing what your body needs.`,
    yes: 'step002'
  },

  step001b: {
    text: `You haven't eaten in a little while, and your body needs fuel. It's time for breakfast, lunch, or dinner.
If there's a specific food you want, it's okay to eat it! You don't have to eat perfectly healthy all the time-- no one does! Just also use your brain a little, and notice the quantity you're eating, and how healthy it is for you. You're probably just fine at trusting your gut and knowing what your body needs.`,
    yes: 'step002',
    prompts: [{
      text: `I need some help!`,
      target: 'step001c'
    }]
  },

  step001c: {
    text: `Making a meal is hard for you right now, and that's okay! Everybody struggles with cooking sometimes.
You have some options:
-You can cook a meal for yourself.
-You might have ready-made meals in the fridge.
-You can get take-out or delivery.
-You can go to a restaurant.
Take-out, delivery, and restaurants are a little more expensive than cooking on your own, but how you spend your money is your decision. It's okay to treat yourself!
If you're going to cook on your own, you have to decide what to make. A friend, partner, or family member can help with this. Here are some ideas for easy foods you can eat right now:
-Pasta with butter, sauce, cheese, vegetables, and/or meat
-Ramen noodles
-Sandwiches
-Rice
-Grilled cheese (This can have meat on it, if you want!)
-A smoothie or milkshake
-Baked or fried potatoes
-Eggs, pancakes, and/or bacon
-Macaroni and cheese
-Canned soup
-Salad
-Boxed mashed potatoes`,
    yes: 'step002'
  },

  step002: {
    text: `Have you taken any medication you need to take?`,
    yes: 'step003',
    prompts: [{
      text: `No, I need to take my pill.`,
      target: 'step002a'
    }]
  },

  step002a: {
    text: `Medication needs to be taken on schedule, or your body might react negatively.
Take some time now to take any pills, do any tests or injections, or apply any ointments prescribed by your doctor.
If this is a persistent problem for you, you may want to set a smart phone alarm so you remember to take it at the same time every day.`,
    yes: 'step003'
  },

  step003: {
    text: `Drink a glass of whatever liquid you like best. Water is ideal, but don't beat yourself up if you'd rather have tea, soda, juice, or milk. Soda will actually make you feel thirstier, but if it's easier for you, then that's okay!`,
    yes: 'step004'
  },

  step004: {
    text: `Can you take a guess at how many hours you've slept out of the last 24?
Everyone is an individual with different sleep schedules, but most people need 8 hours of relatively uninterrupted sleep. If you had less than that, and/or woke up frequently, and/or had nightmares, it might help you to take a nap.`,
    yes: 'step005',
    prompts: [{
      text: `I need a nap.`,
      target: 'step004a'
    }]
  },

  step004a: {
    text: `Take a nap. You can finish this self-care guide when you wake up.
Ideally, let yourself sleep naturally, and sleep until you wake up. Obviously, this isn't always possible. Otherwise, set an alarm for yourself, with plenty of time to wake up and get yourself together between your nap and your responsibilities.`,
    yes: 'step005'
  },

  step005: {
    text: `Are you in pain?`,
    prompts: [

      {
        text: `No, my body feels fine.`,
        target: 'step006'
      },

      {
        text: `Yes, something hurts.`,
        target: 'step005a'
      }
    ]
  },

  step005a: {
    text: `If there is something your doctor has prescribed you for pain, you should take it or do it.

For aches and pains, take an aspirin. You may also want to apply a heating pad or a cold pack on whatever hurts.

If you have a stomach ache, there are medications for that, like Pepto Bismol, and hot tea may also help.

Be nice to your body, and try to do "replace" the unpleasant pain with some pleasant alternative sensations, like good smells and pleasurable textures.`,
    prompts: [

      {
        text: `I am all taken care of.`,
        target: 'step006'
      }
    ]
  },

  step006: {
    text: `Next we're going to deal with other types of physical discomfort you may be in.

Is something about your environment distressing or uncomfortable?`,
    prompts: [

      {
        text: `Yes, my surroundings are less than ideal.`,
        target: 'step006a'
      },

      {
        text: `No, it seems fine here to me.`,
        target: 'step007'
      }
    ]
  },

  step006a: {
    text: `Are your surroundings the right temperature?`,
    prompts: [

      {
        text: `I'm too cold.`,
        target: 'step006b'
      },

      {
        text: `I'm too hot.`,
        target: 'step006c'
      },

      {
        text: `I'm just right.`,
        target: 'step006d'
      }
    ]
  },

  step006b: {
    text: `If you're too cold, you can try putting on some warm clothes, using a space heater, turning up the heat in your home, putting on a blanket, and/or snuggling with a pet or another person.`,
    prompts: [

      {
        text: `I'm not cold anymore.`,
        target: 'step006d'
      }
    ]
  },

  step006c: {
    text: `If you're too hot, you can try putting on cooler clothes, turning on a fan, or turning up the AC in your house.`,
    prompts: [

      {
        text: `Okay, I fixed it.`,
        target: 'step006d'
      }
    ]
  },


  step006d: {
    text: `Are your surroundings dirty or smelly?`,
    prompts: [

      {
        text: `Yes, it's gross.`,
        target: 'step006e'
      },

      {
        text: `No, it's fine.`,
        target: 'step006f'
      }
    ]
  },

  step006e: {
    text: `It's hard to feel okay in an environment that is unfriendly for whatever reason. If your surroundings aren't clean, set a timer for five minutes and take care of the biggest problems, like leftover food, pet messes, or dirty clothes.

Chores can be scary and exhausting, but that's not what we're doing here. We're just taking a little five-minute clean up to make ourselves and our homes happier!`,
    prompts: [

      {
        text: `Okay, I cleaned up a little!`,
        target: 'step006f'
      }
    ]
  },

  step006f: {
    text: `Do you feel unsafe because of the people, or lack of people, in your surroundings?`,
    prompts: [

      {
        text: `Yes, there are too many people here, or people I don't feel comfortable with.`,
        target: 'step006g'
      },

      {
        text: `I am alone and I don't like it.`,
        target: 'step006h'
      },

      {
        text: `No, I'm good.`,
        target: 'step007'
      }
    ]
  },

  step006g: {
    text: `If you can, try to remove yourself from situations that are overwhelming or feel unsafe. If you can't relocate entirely, take frequent breaks, or tune out with headphones.`,
    prompts: [

      {
        text: `I did my best. On to the next step.`,
        target: 'step007'
      }
    ]
  },

  step006h: {
    text: `Being alone can feel really scary and unsafe. In reality, if you take basic precautions, you're almost certainly fine! However, getting a friend, making a phone or Skype call, playing with a pet, and/or turning on the TV or music can help.`,
    prompts: [

      {
        text: `I reached out to someone and I'm feeling better. I'm ready for the next step.`,
        target: 'step007'
      }
    ]
  },

  step007: {
    text: `Does your body feel uncomfortable, sweaty, or dirty?`,
    prompts: [

      {
        text: `Yes, I feel icky, gross, or unclean.`,
        target: 'step007a'
      },

      {
        text: `No, I feel fine.`,
        target: 'step008'
      }
    ]
  },

  step007a: {
    text: `Do you have the energy and ability to take a shower?`,
    prompts: [

      {
        text: `Yes, I'll take a shower.`,
        target: 'step007b'
      },

      {
        text: `No, I need another solution.`,
        target: 'step007c'
      }
    ]
  },

  step007b: {
    text: `Take a shower and get dressed in new clothes afterwards. You'll feel much better!`,
    prompts: [

      {
        text: `I've done that and I'm ready for the next step.`,
        target: 'step008'
      }
    ]
  },


  step007c: {
    text: `If you are unable to take a shower, here are some things to do instead:
-Wash your face
-Put on lotion
-Change your clothes
-Use dry shampoo
-Whatever physical self-care activity you like best!`,
    prompts: [

      {
        text: `I'm clean and I'm ready for the next step.`,
        target: 'step008'
      }
    ]
  },

  step008: {
    text: `Now we've taken care of the physical reasons that you're not feeling well. Now we're going to deal with the emotional ones.

Obviously, this is a general guide, and can't pinpoint your exact problem. But troubleshooting is a good practice, and we're going to do our best together.

In my experience, most of the people who would need a flow chart like this have a mental health problem of some type, so these questions are geared towards common mental health problems. You, of course, might have different needs, but starting here can't hurt.

Do you know why you're in a bad mood, or not feeling well emotionally? (Remember, any answer is okay!)`,
    prompts: [

      {
        text: `Yes, there's something on my mind.`,
        target: 'step008a'
      },

      {
        text: `No, I don't know the reason.`,
        target: 'step008b'
      }

    ]
  },
  step008a: {
    text: `It sounds like there's something on your mind! We're going to do our best to take care of it.

Set a timer for 15 minutes, and work on a solution. If it's something you can change, then great! If not, do your best to reach out to someone and talk about it.

Remember, 15 minutes and only 15! You can go back to whatever it is after we're done working through this together. We're just taking baby steps in the right direction.`,
    prompts: [

      {
        text: `Okay, I did my best.`,
        target: 'step009'
      }
    ]
  },

  step008b: {
    text: `Sometimes, we don't know the source of our bad feelings, and that's okay. We're gonna work through this together!`,
    prompts: [

      {
        text: `Okay!`,
        target: 'step009'
      }
    ]
  },

  step009: {
    text: `Do you feel anxious, nervous, keyed-up, paranoid, scared, or on edge?`,
    prompts: [{
        text: `Yes, I feel anxious about something specific.`,
        target: 'step009a'
      },

      {
        text: `Yes, but I don't know why.`,
        target: 'step009b'
      },

      {
        text: `No, I don't feel very anxious.`,
        target: 'step010'
      },

      {
        text: `I was feeling anxious, but I did my best to take care of myself. I'm ready for the next question.`,
        target: 'step010'
      }
    ]
  },

  step009a: {
    text: `You're feeling anxious about something specific. That's okay! Set a timer for 15 minutes and do something to take care of that worry. Maybe chip away at a task that seems insurmountable. You can do it!`,
    prompts: [

      {
        text: `I'd like to try some grounding exercises too.`,
        target: 'step009c'
      },

      {
        text: `I feel better. Next question!`,
        target: 'step010'
      }
    ]
  },

  step009b: {
    text: `You feel generally anxious, but you don't know why. That's okay!`,
    prompts: [

      {
        text: `I'd like to try some grounding exercises.`,
        target: 'step009c'
      }
    ]
  },

  step009c: {
    text: `Here are some ideas for grounding activities:

-Take deep, calm breaths.
-Notice and list things in your surroundings.
-Expose yourself to strong, pleasant sensations, like a pleasing smell or a favorite blanket.
-Say out loud your name, your age, the date, and your location. List some things you've done today, or are going to do.
-Splash water on your face or run your hands under the faucet.
-Do a body scan meditation, or pay close attention to each of your body parts one by one.
-Make tea. Feel the warmth of it in your hands, and the taste as you sip it calmly.
-Listen to music.
-Play a categories game, and name some types of dogs, or clothing items, or gemstones, or countries, or anything else you can think of.
-Write in your journal.
-Take a mindful walk, either inside or outside. Pay close attention to your body and your surroundings.
-Squiggle. Wiggle around. Dance. Stretch. Be silly and active for a few minutes.
-Any other favorite grounding technique you've heard of or can think of. There's nothing wrong with experimenting!`,
    prompts: [

      {
        text: `Okay! I did one or more of these things, and I'm ready to move on.`,
        target: 'step009'
      }
    ]
  },

  step010: {
    text: `Do you feel triggered? Are you having flashbacks? Is something traumatic or upsetting from the past weighing on your mind? Did you have a vivid nightmare?`,
    prompts: [

      {
        text: `Yes, I feel triggered.`,
        target: 'step010a'
      },

      {
        text: `No, I'm not feeling triggered.`,
        target: 'step011'
      },

      {
        text: `I was feeling triggered, but I did my best to take care of myself. I'm ready for the next question.`,
        target: 'step011'
      }
    ]
  },

  step010a: {
    text: `If you're feeling triggered, see if there's a practical action you can take to lessen your distress. Can you block that unsafe person from your Facebook, for example?

If not, reach out and tell someone safe how you're feeling. Just express yourself! Human contact works wonders when you're not feeling well emotionally.

Remember that you're here in the present, and nothing from your past can hurt you. If you like, you may want to try some grounding exercises to reinforce that idea.`,
    prompts: [

      {
        text: `Okay, I'm ready for the next question.`,
        target: 'step011'
      },

      {
        text: `I'd like to try some grounding exercises.`,
        target: 'step009c'
      }
    ]
  },

  step011: {
    text: `Are you feeling dissociated, depersonalized, or derealized? Do you feel far away, foggy, or unreal? Are you not sure who you are?`,
    prompts: [

      {
        text: `Yes, I'm dissociated.`,
        target: 'step009c'
      },

      {
        text: `No, I don't feel like that.`,
        target: 'step012'
      },

      {
        text: `I was feeling dissociated, but I did my best to take care of myself. I'm ready for the next question.`,
        target: 'step012'
      }
    ]
  },

  step012: {
    text: `Are you feeling depressed, sad, or upset?`,
    prompts: [

      {
        text: `Yes, I'm feeling depressed.`,
        target: 'step012a'
      },

      {
        text: `No, I'm not very depressed.`,
        target: 'step013'
      }
    ]
  },

  step012a: {
    text: `Feeling depressed isn't fun, but it doesn't last forever! Don't be mad or disappointed with yourself for feeling depressed.

Take 15 minutes and accomplish something small, like loading the dishwasher or making a friendship bracelet. You are not a failure, and your situation is not hopeless! You are a superhero, even if it doesn't feel like it.`,
    prompts: [

      {
        text: `Okay, I've done my best to take care of myself and I'm ready for the next question.`,
        target: 'step013'
      }
    ]
  },

  step013: {
    text: `Are you feeling lonely or in need of attention?`,
    prompts: [

      {
        text: `Yes, I'm feeling lonely.`,
        target: 'step013a'
      },

      {
        text: `No, I'm not very lonely. Next question!`,
        target: 'step014'
      }
    ]
  },

  step013a: {
    text: `Everybody feels lonely sometimes. If you're feeling lonely, there's ways to reach out to people!

You can talk to someone in your house, or call someone on the phone. You can also use texting or Facebook messenger to speak to someone. You may want to talk about how you're feeling, or you may not. Anything you want to talk about is okay!

If that isn't or doesn't seem possible, you can post a general message on Facebook, Tumblr, Vent, or another internet service, about whatever you want!`,
    prompts: [

      {
        text: `Okay, I did my best to take care of myself and I'm ready for the next question`,
        target: 'step014'
      }
    ]
  },

  step014: {
    text: `Are you feeling foggy?`,
    prompts: [

      {
        text: `Yes, I feel foggy.`,
        target: 'step014a'
      },

      {
        text: `No, my head feels pretty clear.`,
        target: 'step015'
      }
    ]
  },

  step014a: {
    text: `If you are feeling foggy, you might need some exercise.

Do you have the energy and ability to go for a walk?`,
    prompts: [

      {
        text: `Yes, a walk sounds great.`,
        target: 'step014b'
      },

      {
        text: `No, a walk would be too much for me.`,
        target: 'step014c'
      }
    ]
  },

  step014b: {
    text: `Walks are really good for both our bodies and our minds. Take a walk of whatever length you choose! You're not trying to burn calories or get to a particular destination; you're just taking a pleasant stroll. Enjoy it!`,
    prompts: [

      {
        text: `Okay, I am back from my walk and I'm ready for the next question.`,
        target: 'step015'
      }
    ]
  },

  step014c: {
    text: `If you can't take a walk, that's okay!

Here are some alternatives:
-Jumping jacks
-Bouncing on the bed
-Dancing
-Push ups or sit ups, if you like doing them
-Walking up and down the stairs
-Yoga
-Wiggling, squirming, jiggling around; being silly and active and having fun!

If none of those are or seem possible, just sit outside for some fresh air!`,
    prompts: [

      {
        text: `Okay, I did some exercise to the best of my ability. I'm ready for the next question.`,
        target: 'step015'
      }
    ]
  },

  step015: {
    text: `Do you have pets?`,
    prompts: [

      {
        text: `Yes, I've got animals in my house.`,
        target: 'step015a'
      },

      {
        text: `No, no pets for me!`,
        target: 'step015b'
      }
    ]
  },

  step015a: {
    text: `Playing with pets can be a great way to take the edge off when you're not feeling well. It doesn't matter what kind of pet you have, just take some time to interact with them. Pet your cat, take your dog outside, feed your fish, hug your lizard...`,
    prompts: [

      {
        text: `[Good idea! I'm ready for the next question.`,
        target: 'step016'
      }
    ]
  },

  step015b: {
    text: `Take half an hour and do whatever you want to do right now. This can be anything: crafts, watching TV, laying on the couch, taking a walk, playing Farmville... your choices are literally endless!

Obviously, don't do anything that's bad for you, like feeding addictions or harming yourself or others.`,
    prompts: [

      {
        text: `I did 30 minutes of fun and now I'm ready to move on to the next step.`,
        target: 'step016'
      }
    ]
  },

  step016: {
    text: `We've reached the end of this self care guide.

It's time to reassess. Maybe now that you've done all this self care, you feel better-- great! Maybe you don't, and that's okay too. But hopefully you've cleared things up and you know what to do next to take care of yourself.

You deserve self care, so even if it's hard, do your best!

Good luck!`,
    prompts: [

      {
        text: `Restart`,
        target: 'step000'
      }
    ]
  }
};
