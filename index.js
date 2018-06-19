function scuberGreetingForFeet(distanceTraveled) {
  if (distanceTraveled <= 400) {
    return "This one is on me!"
  }
  else if (distanceTraveled > 2000 && distanceTraveled < 2500) {
    return "I will gladly take your thirty bucks."
  }
  else if (distanceTraveled > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity (city) {
  return city === ("NYC") ? `Ok, sounds good.` : `No go.`;
/*
  switch(city) {
    case 'NYC':
      return 'Ok, sounds good.';
    default:
      return 'No go.'
  }
  */
}

function switchOnCharmFromTip (generosityOfTip) {
  switch (generosityOfTip) {
    case 'generous':
    return 'Thank you so much.';

    case 'not as generous':
    return 'Thank you.';

    case 'thanks for everything':
    return 'Bye.';
  }

}
