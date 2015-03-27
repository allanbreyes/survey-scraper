(function() {
  var self = this,
      data = {},
      numQuestions = 10,
      numPages = 2;

  var pages = $('.response-question-list').slice(0, numPages);
  for (var p = 0; p < numPages; p++) {
    var page = $(pages[p]);
    var questions = page.find('.response-question');
    for (var q = 0; q < questions.length; q++) {
      var question = $(questions[q]);
      var questionNumber = question.find('.question-title').text().trim();
      var responses = question.find('.response-text');

      if (responses.length > 1) {
        for (var r = 0; r < responses.length; r++) {
          formattedResponse = $(responses[r]).text().trim()
          questionSubNumber = questionNumber + ('.' + (r+1).toString());
          data[questionSubNumber] = formattedResponse;
        }
      } else {
        data[questionNumber] = responses.text().trim();
      }
    }
  }

  return data;
})();
