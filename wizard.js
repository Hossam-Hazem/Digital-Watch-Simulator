
	var Hour;
	var Minute;
	var Second;
	var Month;
	var Day;
	var DayName;
	var init=true;
$(document).ready(function(){
	$('.Stick').addClass('Hidden');
	updatewatch();

	


})
function updatewatch(){
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
function setSticks(parent,value){
	unsetSticks(parent);
	if(value==0){
		setStick(parent,'0');
		setStick(parent,'1');
		setStick(parent,'2');
		setStick(parent,'4');
		setStick(parent,'5');
		setStick(parent,'6');
	}
	if(value==1){
		setStick(parent,'2');
		setStick(parent,'5');
	}
	if(value==2){
		setStick(parent,'0');
		setStick(parent,'2');
		setStick(parent,'3');
		setStick(parent,'4');
		setStick(parent,'6');
	}
	if(value==3){
		setStick(parent,'0');
		setStick(parent,'2');
		setStick(parent,'3');
		setStick(parent,'5');
		setStick(parent,'6');
	}
	if(value==4){
		setStick(parent,'1');
		setStick(parent,'2');
		setStick(parent,'3');
		setStick(parent,'5');
	}
	if(value==5){
		setStick(parent,'0');
		setStick(parent,'1');
		setStick(parent,'3');
		setStick(parent,'5');
		setStick(parent,'6');
	}
	if(value==6){
		setStick(parent,'0');
		setStick(parent,'1');
		setStick(parent,'3');
		setStick(parent,'4');
		setStick(parent,'5');
		setStick(parent,'6');
	}
	if(value==7){
		setStick(parent,'0');
		setStick(parent,'2');
		setStick(parent,'5');
	}
	if(value==8){
		setStick(parent,'0');
		setStick(parent,'1');
		setStick(parent,'2');
		setStick(parent,'3');
		setStick(parent,'4');
		setStick(parent,'5');
		setStick(parent,'6');
	}
	if(value==9){
		setStick(parent,'0');
		setStick(parent,'1');
		setStick(parent,'2');
		setStick(parent,'3');
		setStick(parent,'5');
		setStick(parent,'6');
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

