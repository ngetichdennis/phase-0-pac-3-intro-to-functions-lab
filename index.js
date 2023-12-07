function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    let noAnswer = "I can't hear you!";
    let answer = "YES INDEED!";
    let likeAnswer = "I would love to have a dinner.";
    if (string.toLowerCase() === "I can't hear you!") {
      return noAnswer;
    }
    else if (string.toUpperCase(Hello) === "YES INDEED!") {
      return answer;
    }
    else if ("I would love to have a dinner." === "I would love to have a dinner.") {
      return likeAnswer;
    }
  }