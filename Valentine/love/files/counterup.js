function CountUp(initDate, id, msg){
  this.beginDate = new Date(initDate);
  this.msg = msg;
  this.numOfDays = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
  this.borrowed = 0, this.years = 0, this.months = 0, this.days = 0;
  this.hours = 0, this.minutes = 0, this.seconds = 0;
  this.updateNumOfDays();
  this.calculate(id);
}
 
CountUp.prototype.updateNumOfDays=function(){
  var dateNow = new Date();
  var currYear = dateNow.getFullYear();
  if ( (currYear % 4 == 0 && currYear % 100 != 0 ) || currYear % 400 == 0 ) {
    this.numOfDays[1] = 29;
  }
  var self = this;
  setTimeout(function(){self.updateNumOfDays();}, (new Date((currYear+1), 1, 1) - dateNow));
}
 
CountUp.prototype.datePartDiff=function(then, now, MAX){
  var diff = now - then - this.borrowed;
  this.borrowed = 0;
  if ( diff > -1 ) return diff;
  this.borrowed = 1;
  return (MAX + diff);
}
 
CountUp.prototype.formatTime=function(){
  this.seconds = this.addLeadingZero(this.seconds);
  this.minutes = this.addLeadingZero(this.minutes);
  this.hours = this.addLeadingZero(this.hours);
}
 
CountUp.prototype.addLeadingZero=function(value){
  return value < 10 ? ("0" + value) : value;
}
 
CountUp.prototype.calculate=function(id){
  var currDate = new Date();
  var prevDate = this.beginDate;
  this.seconds = this.datePartDiff(prevDate.getSeconds(), currDate.getSeconds(), 60);
  this.minutes = this.datePartDiff(prevDate.getMinutes(), currDate.getMinutes(), 60);
  this.hours = this.datePartDiff(prevDate.getHours(), currDate.getHours(), 24);
  this.days = this.datePartDiff(prevDate.getDate(), currDate.getDate(), this.numOfDays[currDate.getMonth()]);
  this.months = this.datePartDiff(prevDate.getMonth(), currDate.getMonth(), 12);
  this.years = this.datePartDiff(prevDate.getFullYear(), currDate.getFullYear(),0);
  this.formatTime();
  var countainer = document.getElementById(id);
  countainer.innerHTML ="<strong>" + this.years + "</strong> <small>" + (this.years == 1? "year" : "năm") + "</small>" +
    " <strong>" + this.months + "</strong> <small>" + (this.months == 1? "month" : "tháng") + "</small>" +
    " <strong>" + this.days + "</strong> <small>" + (this.days == 1? "day" : "ngày") + "</small>" +
    " <strong>" + this.hours + "</strong> <small>" + (this.hours == 1? "hour" : "giờ") + "</small>" +
    " <strong>" + this.minutes + "</strong> <small>" + (this.minutes == 1? "minutes" : "phút") + "</small>" +
    " <strong>" + this.seconds + "</strong> <small>" + (this.seconds == 1? "seconds" : "giây") + "</small>" +
    " <strong> " + this.msg + " </strong>";
  var self = this;
  setTimeout(function(){self.calculate(id);}, 1000);
}