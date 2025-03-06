// Saturday Fun Function (unchanged)
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Monday Work Function (Fixed)
  function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
  }
  
  // Wrap Adjective Function (unchanged)
  function wrapAdjective(adj = "*") {
    return function (flair = "special") {
      return `You are ${adj}${flair}${adj}!`;
    };
  }
  