$('#text').html('Ты гордый воин спасающий людей от тьмы, твоё имя будет... О! Точно ТЫ! ');

$('#first_ans').html('Калифариготиксаморитегарин?');

$('#second_ans').hide();
$('#third_ans').hide();
 var position = 0;



$( "#first_ans" ).click(function() {
	switch(position){
		case 0: //Хрещатик

			$('#text').html('Ваше имя было прекрасным, Калифариготиксаморитегарин... Созвучно с "бесполезный неудачник", ах да, забыл сказать, вы всего лишь придумали эту историю про защитника, на деле вы были обычным мальчиком 13 лет.');

			$('#first_ans').html('Пойти гулять');
			$('#second_ans').html('Тренеровка');

      $('#second_ans').show();
			$('#third_ans').hide();
			 position = 1;



                $("#first_ans").click(function() {
                     	switch(position){
                    		case 1:// Гулять

                    			$('#text').html('Круто... Ты гуляешь... Сломал всю историю... Ты рад?');


                          $('#first_ans').hide();
                    			$('#second_ans').hide();
                    			$('#third_ans').hide();


                    }});
                }});




            $("#second_ans").click(function() {
                  switch(position){
                    case 1:// Тренеровка

                      $('#text').html('Ты начал думать о том... Вобщем ты решил начать тренировки и стать лучшим среди Калифариготиксаморитегаринов');

                      $('#first_ans').html('Отжаться 30 раз');
                      $('#second_ans').html('Пробежать 5км раз');
                      $('#third_ans').html('Сделать 60 отжиманий и поесть');

                      $('#third_ans').show();

                      position = 2;

                          $("#first_ans").click(function(){
                                switch(position){
                                  case 2: // 30 раз

                                    $('#text').html('Ты посчитал что теперь ты качок, взял меч и...');

                                    $('#first_ans').html('Положил меч');
                                    $('#second_ans').html('Пошел бороться');

                                    $('#third_ans').hide();

                                    position = 3;



                          $("#first_ans").click(function(){
                                switch(position){
                                  case 3: // ПМ

                                    $('#text').html('А, э.... Ты... Ты ту... Ой ладно... Твои тренеровки закончены');

                                    $('#first_ans').hide();
                                    $('#second_ans').hide();
                                    $('#third_ans').hide();
                }});
                $("#second_ans").click(function(){
                      switch(position){
                        case 3: // Борьба меч

                          $('#text').html('Ты вышел бороться, вы начали реслинг с своим врагом, вас убили....');

                          $('#first_ans').hide();
                          $('#second_ans').hide();
                          $('#third_ans').hide();
                    }});

              }});


                $("#second_ans").click(function(){
                      switch(position){
                        case 2:  // 5км

                          $('#text').html('Ты посчитал что теперь ты невероятно ловкий, взял кинжал и...');

                          $('#first_ans').html('Положил кинжал');
                          $('#second_ans').html('Пошел бороться');

                          $('#third_ans').hide();

                          position = 4;

                          $("#first_ans").click(function(){
                                switch(position){
                                  case 4: // ПК

                                    $('#text').html('А, э.... Ты... Ты ту... Ой ладно... Твои тренеровки закончены...');

                                    $('#first_ans').hide();
                                    $('#second_ans').hide();
                                    $('#third_ans').hide();
                }});
                $("#second_ans").click(function(){
                      switch(position){
                        case 4: // Борьба кинжал

                          $('#text').html('Ты начал бить врагов тупой частью кинжала, в итоге тебя забили ногами так как ты был медленным.');

                          $('#first_ans').hide();
                          $('#second_ans').hide();
                          $('#third_ans').hide();
                    }});

                          }});

                                  $("#third_ans").click(function(){
                                        switch(position){
                                          case 2:  // 60+еда

                                            $('#text').html('Ты наелся... Стал сумоистом.... Ты раздавил всех своих врагов, но один взял зубочистку, так и умер невероятный герой по имени Калифариготиксаморитегарин');

                                            $('#first_ans').html('Конец?');

                                            $('#second_ans').hide();
                                            $('#third_ans').hide();

                                            position = 10;
                                          break;
                                            }});



                                            $("#first_ans").click(function(){
                                                  switch(position){
                                                    case 10:  // 60+еда

                                                      $('#text').html('Ты в раю... А нет... Ты.. ой короче иди ты....');


                                                      $('#first_ans').hide();
                                                      $('#second_ans').hide();
                                                      $('#third_ans').hide();

                                                      position = 10;
                                                    break;
                                                      }});


              }});
