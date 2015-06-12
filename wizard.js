
	var breakwatch=false;
	var breakstopwatch=false;	
	var currentstate='Watch';
	var sstate=0;
	var thread;
$(document).ready(function(){
		var Hour = 0
		var Minute=0
		var Second =0
		var sstate=0
	$('.Stick').addClass('Hidden');
	$('.Reset').addClass('invisible');
	$('.StartPause').addClass('invisible');
	updatewatch(0,0,0,0,0,'DayName',true);
	$('li').click(function(){
		 var chosen = $(this).text();
		 if(chosen==currentstate)
		 	return;
  		 if(chosen=='Watch'){
  		 	clearTimeout(thread);
  		 	thread=null;
  		 	currentstate='Watch';
  		 	$('.Reset').addClass('invisible');
  		 	$('.StartPause').addClass('invisible');
  		 	init =true;
  		 	updatewatch(0,0,0,0,0,'DayName',init);
  		 	return;
  		 }
  		 if(chosen=='Stopwatch'){
  		 	unsetAll();
  		 	clearTimeout(thread);
  		 	thread=null;
  		 	currentstate='Stopwatch';
  		 	$('.Reset').removeClass('invisible');
  		 	$('.StartPause').removeClass('invisible');
  		 	setSticks('HourOne',0);
			setSticks('HourTwo',0);
			setSticks('MinuteOne',0);
			setSticks('MinuteTwo',0);
			setSticks('SecondOne',0);
			setSticks('SecondTwo',0);
  		 }

	})
	
	$('.StartPause').click(function(){
		 var chosen = $(this).text();
		if(chosen=='pause'){
				clearTimeout(thread);
				$(this).text('start');
		}
		else{
			Stopwatch();
			$(this).text('pause');
		}
	});
	$('.Reset').click(function(){
		unsetAll();
		Hour = 0
		Minute=0
		Second =0
		sstate=0
		setSticks('HourOne',0);
		setSticks('HourTwo',0);
		setSticks('MinuteOne',0);
		setSticks('MinuteTwo',0);
		setSticks('SecondOne',0);
		setSticks('SecondTwo',0);

	});
	function Stopwatch(){
	

		if(sstate==0){
		 if(Hour==99&&Minute==59&&Second==99){
		 	sstate=1;
		 	Minute=39;
		 	Hour=1;
		 	Second=0;
		 	thread=setTimeout(function(){Stopwatch();},100);
		 }
		 else{
		 	if(Minute==59&&Second==99){
		 		Hour++;
		 		//var currenttime =new Date()
		 		//Minute=parseInt(((currenttime-begintime)/1000)%60);
		 		Minute=0;
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
		 			Second=Second+1;
		 			setSticks('SecondOne',parseInt(Second/10));
					setSticks('SecondTwo',Second%10);

		 		}
		 	}
		 	thread=setTimeout(function(){Stopwatch();},9.85 );
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
				 	thread=setTimeout(function(){Stopwatch();},1000 );
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
				 	thread=setTimeout(function(){Stopwatch();},60000 );
			}	

		}
	
}

})
function updatewatch(Hour,Minute,Second,Month,Day,DayName,init){


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
	thread= setTimeout(function(){updatewatch(Hour,Minute,Second,Month,Day,DayName,init);},timeout );
	}
	else{
		 if(Hour==23&&Minute==59&&Second==59){
		 	init=true;
		 	updatewatch(Hour,Minute,Second,Month,Day,DayName,init);
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
		 	thread=setTimeout(function(){updatewatch(Hour,Minute,Second,Month,Day,DayName,init);},1000 );
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

