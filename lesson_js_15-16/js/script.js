$(document).ready(function () {

    $('.btn').on('click', search);
    $('.search').keypress(function () {
        if (event.keyCode == 13) {
            search;
        }
    });

    function search(e) {
        e.preventDefault();
        $('img').remove();
        var $searchKey = $('.search').val();

        $.ajax({
            url: 'https://pixabay.com/api/?key=2650584-e8feab9b11ed644dcec728ac9&q=' + $searchKey + '&image_type=photo',
            dataType: 'jsonp',
            success: function (data) {
                var $results = data.hits;
                for (var i = 0; i < data.hits.length; i++) {
                    $('.result').append('<img src="' + $results[i].previewURL + '">');
                }
            },
            error: function () {
                alert('Error!');
            }
        });

        $('.search').val('');
    }



    //PROTOTYPE

    function Human(name, age, gender, height, weight) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
    }

    Worker.prototype = Object.create(Human.prototype);
    Worker.prototype.constructor = Worker;
    Student.prototype = Object.create(Human.prototype);
    Student.prototype.constructor = Student;

    Human.prototype.does = function() {
        console.log('Занятие: ' + this.work);
    };

    function Worker(name, age, gender, height, weight, workplace, sale) {
        Human.apply(this, arguments);
        this.workplace = workplace;
        this.sale = sale;
        this.work = 'Я работаю!';
    }

    function Student(name, age, gender, height, weight, study, sale) {
        Human.apply(this, arguments);
        this.study = study;
        this.sale = sale;
        this.work = 'Смотрю сериалы';
    }

    var vasya = new Worker('Vasilii', 28, 'male', 190, 90, 'factory', 3000);
    console.log(vasya);
    vasya.does();

    var tanya = new Worker('Tatyana', 33, 'female', 175, 60, 'plant', 5000);
    console.log(tanya);
    tanya.does();

    var olya = new Student('Olga', 20, 'female', 170, 55, 'university', 500);
    console.log(olya);
    olya.does();

    var petya = new Student('Petro', 16, 'male', 180, 80, 'college', 300);
    console.log(petya);
    petya.does();
});
