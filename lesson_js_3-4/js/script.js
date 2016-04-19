var body = document.getElementsByTagName('body')[0],
    container = document.createElement('div');
container.className = 'container';
body.appendChild(container);

var tests = {
    questions: ['Вопрос №1',
                'Вопрос №2',
                'Вопрос №3',
                'Вопрос №4'],

    answers: ['Вариант ответа №1',
              'Вариант ответа №2',
              'Вариант ответа №3',
              'Вариант ответа №4'],

    header: function () {
        var header = document.createElement('h3');
        header.innerHTML = 'Тест по программированию';
        container.appendChild(header);
    },

    list: function () {
        var list = document.createElement('ol');
        for (var i = 0; i < this.questions.length; i++) {
            var listItem = document.createElement('li');
            list.appendChild(listItem);
            container.appendChild(list);

            var question = document.createElement('p');
            question.innerHTML = this.questions[i];
            listItem.appendChild(question);

            var answer = document.createElement('ul');
            for (var j = 0; j < this.answers.length; j++) {
                var answersItem = document.createElement('li');
                answer.appendChild(answersItem);
                listItem.appendChild(answer);
                answersItem.className = 'checkbox';

                var input = document.createElement('input');
                input.setAttribute('type', 'checkbox');
                answersItem.appendChild(input);

                var textAnswer = document.createElement('span');
                answersItem.appendChild(textAnswer);
                textAnswer.innerHTML = this.answers[j];
            }
        }
    },

    button: function () {
        var button = document.createElement('button');
        button.className = 'btn btn-primary';
        button.innerHTML = 'Проверить мои результаты';
        container.appendChild(button);
    }
};

tests.header();
tests.list();
tests.button();


