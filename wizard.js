
	var Hour;
	var Minute;
	var Second;
	var Month;
	var Day;
	var DayName;
	var init=true;
	var breakwatch=false;
	var breakstopwatch=false;	
	var currentstate='Watch';
	var sstate=0;
	var begintime;
$(document).ready(function(){
	$('.Stick').addClass('Hidden');
	updatewatch();
	$('li').click(function(){
		 var chosen = $(this).text();
		 if(chosen==currentstate)
		 	return;
  		 if(chosen=='Watch'){
  		 	breakstopwatch=true;
  		 	 $('.repeatButton').addClass('invisible');
  		 	$('.resetButton').addClass('invisible');
  		 	$('.startButton').addClass('invisible');
  		 	init =true;
  		 	updatewatch();
  		 	return;
  		 }
  		 if(chosen=='Stopwatch'){
  		 	breakwatch=true;
  		 	currentstate='Stopwatch';
  		 	$('.repeatButton').removeClass('invisible');
  		 	$('.resetButton').removeClass('invisible');
  		 	$('.startButton').removeClass('invisible');
  		 	unsetAll();
  		 	init=true;
  		 	Stopwatch();

  		 }

	})
	


})
function updatewatch(){
	console.log('watch')
	if(breakwatch==true){
		breakwatch=false;
		return;
	}
	if(init){
	var currentdate = new Date(); 
	Hour =currentdate.getHours();
	Minute=currentdate.getMinutes();
	Second=currentdate.getSeconds();
	Month=currentdate.getMonth()+1;
	Day = currentdate.getDate();
	DayName=currentdate.getDay();
	setSticks('HourOne',parseInt(Hour/10));
	setSticks('HourTwo',Hour%10);
	setSticks('MinuteOne',parseInt(Minute/10));
	setSticks('MinuteTwo',Minute%10);
	setSticks('SecondOne',parseInt(Second/10));
	setSticks('SecondTwo',Second%10);
	setSticks('DateMonthOne',parseInt(Month/10));
	setSticks('DateMonthTwo',Month%10);
	setSticks('DateDayOne',parseInt(Day/10));
	setSticks('DateDayTwo',Day%10);
	 timeout= 1000-Date.now()%1000;
	 init=false;
	 setTimeout(function(){updatewatch();},timeout );
	}
	else{
		 if(Hour==23&&Minute==59&&Second==59){
		 	init=true;
		 	updatewatch();
		 }
		 else{
		 	if(Minute==59&&Second==59){
		 		Hour++;
		 		Minute=0;
		 		Second=0;
		 		setSticks('HourOne',parseInt(Hour/10));
				setSticks('HourTwo',Hour%10);
				setSticks('MinuteOne',parseInt(Minute/10));
				setSticks('MinuteTwo',Minute%10);
				setSticks('SecondOne',parseInt(Second/10));
				setSticks('SecondTwo',Second%10);
		 	}
		 	else{
		 		if(Second==59){
		 			Minute++;
		 			Second=0;
		 			setSticks('MinuteOne',parseInt(Minute/10));
					setSticks('MinuteTwo',Minute%10);
					setSticks('SecondOne',parseInt(Second/10));
					setSticks('SecondTwo',Second%10);
		 		}
		 		else{
		 			Second++;
		 			setSticks('SecondOne',parseInt(Second/10));
					setSticks('SecondTwo',Second%10);

		 		}
		 	}
		 	setTimeout(function(){updatewatch();},1000 );
		 }

	}
}	

function Stopwatch(){
	if(breakstopwatch==true){
		breakstopwatch=false;
		return;
	}
	if(init){
		begintime= new Date(); 
		Hour=0;
		Minute=0;
		Second=0;
		setSticks('HourOne',parseInt(Hour/10));
		setSticks('HourTwo',Hour%10);
		setSticks('MinuteOne',parseInt(Minute/10));
		setSticks('MinuteTwo',Minute%10);
		setSticks('SecondOne',parseInt(Second/10));
		setSticks('SecondTwo',Second%10);
		init=false;
		setTimeout(function(){Stopwatch();},1000);
	}
	else{
		if(sstate==0){
		 if(Hour==99&&Minute==59&&Second==99){
		 	sstate=1;
		 	Minute=39;
		 	Hour=1;
		 	Second=0;
		 	setTimeout(function(){Stopwatch();},100);
		 }
		 else{
		 	if(Minute==59&&Second==99){
		 		Hour++;
		 		var currenttime =new Date()
		 		Minute=parseInt(((currenttime-begintime)/1000)%60);
		 		console.log('currenttime = '+currenttime)
		 		console.log('begintime = '+begintime)
		 		console.log('M = '+Minute)
		 		Second=0;
		 		setSticks('HourOne',parseInt(Hour/10));
				setSticks('HourTwo',Hour%10);
				setSticks('MinuteOne',parseInt(Minute/10));
				setSticks('MinuteTwo',Minute%10);
				setSticks('SecondOne',parseInt(Second/10));
				setSticks('SecondTwo',Second%10);
		 	}
		 	else{
		 		if(Second==99){
		 			Minute++;
		 			Second=0;
		 			setSticks('MinuteOne',parseInt(Minute/10));
					setSticks('MinuteTwo',Minute%10);
					setSticks('SecondOne',parseInt(Second/10));
					setSticks('SecondTwo',Second%10);
		 		}
		 		else{
		 			Second=Second+11;
		 			setSticks('SecondOne',parseInt(Second/10));
					setSticks('SecondTwo',Second%10);

		 		}
		 	}
		 	setTimeout(function(){Stopwatch();},100 );
		 }
		}
		else{ 
			if(sstate=1){
					if(Hour==99&&Minute==59&&Second==59){
		 				sstate=2;
		 				Minute=3;
		 				Hour=4;
		 				Second=0;
		 				setTimeout(function(){Stopwatch();},60000);
		 			}
				else{
		 			if(Minute==59&&Second==59){
		 				Hour++;
		 				Minute=0;
		 				Second=0;
		 				var currenttime =new Date()
		 				Second=parseInt(((currenttime-begintime)/1000)%60);
		 				setSticks('HourOne',parseInt(Hour/10));
						setSticks('HourTwo',Hour%10);
						setSticks('MinuteOne',parseInt(Minute/10));
						setSticks('MinuteTwo',Minute%10);
						setSticks('SecondOne',parseInt(Second/10));
						setSticks('SecondTwo',Second%10);
		 			}
				 	else{
				 		if(Second==59){
				 			Minute++;
				 			Second=0;
				 			setSticks('MinuteOne',parseInt(Minute/10));
							setSticks('MinuteTwo',Minute%10);
							setSticks('SecondOne',parseInt(Second/10));
							setSticks('SecondTwo',Second%10);
				 		}
				 		else{
				 			Second++;
				 			setSticks('SecondOne',parseInt(Second/10));
							setSticks('SecondTwo',Second%10);

				 		}
				 	}
				 	setTimeout(function(){Stopwatch();},1000 );
				}
			}
			else{
				if(Minute==59&&Second==59){
		 				Hour++;
		 				Minute=0;
		 				Second=0;
		 				setSticks('HourOne',parseInt(Hour/10));
						setSticks('HourTwo',Hour%10);
						setSticks('MinuteOne',parseInt(Minute/10));
						setSticks('MinuteTwo',Minute%10);
						setSticks('SecondOne',parseInt(Second/10));
						setSticks('SecondTwo',Second%10);
		 			}
				 	else{
				 		if(Second==59){
				 			Minute++;
				 			Second=0;
				 			setSticks('MinuteOne',parseInt(Minute/10));
							setSticks('MinuteTwo',Minute%10);
							setSticks('SecondOne',parseInt(Second/10));
							setSticks('SecondTwo',Second%10);
				 		}
				 		else{
				 			Second++;
				 			setSticks('SecondOne',parseInt(Second/10));
							setSticks('SecondTwo',Second%10);

				 		}
				 	}
				 	setTimeout(function(){Stopwatch();},60000 );
			}	

		}
	}

}


function setSticks(parent,value){
	unsetSticks(parent);
	if(value==0){
		setStick(parent,'0');
		setStick(parent,'1');
		setStick(parent,'2');
		setStick(parent,'4');
		setStick(parent,'5');
		setStick(parent,'6');
	}else {
	if(value==1){
		setStick(parent,'2');
		setStick(parent,'5');
	}else {
	if(value==2){
		setStick(parent,'0');
		setStick(parent,'2');
		setStick(parent,'3');
		setStick(parent,'4');
		setStick(parent,'6');
	}else {
	if(value==3){
		setStick(parent,'0');
		setStick(parent,'2');
		setStick(parent,'3');
		setStick(parent,'5');
		setStick(parent,'6');
	}else {
	if(value==4){
		setStick(parent,'1');
		setStick(parent,'2');
		setStick(parent,'3');
		setStick(parent,'5');
	}else {
	if(value==5){
		setStick(parent,'0');
		setStick(parent,'1');
		setStick(parent,'3');
		setStick(parent,'5');
		setStick(parent,'6');
	}else {
	if(value==6){
		setStick(parent,'0');
		setStick(parent,'1');
		setStick(parent,'3');
		setStick(parent,'4');
		setStick(parent,'5');
		setStick(parent,'6');
	}else{
	if(value==7){
		setStick(parent,'0');
		setStick(parent,'2');
		setStick(parent,'5');
	}else{
	if(value==8){
		setStick(parent,'0');
		setStick(parent,'1');
		setStick(parent,'2');
		setStick(parent,'3');
		setStick(parent,'4');
		setStick(parent,'5');
		setStick(parent,'6');
	}else{
		setStick(parent,'0');
		setStick(parent,'1');
		setStick(parent,'2');
		setStick(parent,'3');
		setStick(parent,'5');
		setStick(parent,'6');
	}
	}
	}	
	}
	}
	}
	}
	}
}
		

}
function unsetAll(){
	unsetSticks('DayOne');
	unsetSticks('DayTwo');
	unsetSticks('DayThree');
	unsetSticks('DateDayOne');
	unsetSticks('DateDayTwo');
	unsetSticks('DateMonthOne');
	unsetSticks('DateMonthTwo');
	unsetSticks('HourOne');
	unsetSticks('HourTwo');
	unsetSticks('MinuteOne');
	unsetSticks('MinuteTwo');
	unsetSticks('SecondOne');
	unsetSticks('SecondTwo');
}
function unsetSticks(parent){
		unsetStick(parent,'0');
		unsetStick(parent,'1');
		unsetStick(parent,'2');
		unsetStick(parent,'3');
		unsetStick(parent,'4');
		unsetStick(parent,'5');
		unsetStick(parent,'6');
}
function setStick(parent,id){
	$('#'+parent+'>#s'+id).removeClass('Hidden')
}
function unsetStick(parent,id){
	$('#'+parent+'>#s'+id).addClass('Hidden')
}

